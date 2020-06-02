import { Request, Response } from 'express';
import knex from '../database/connection';

class PointsController {
  async index(request: Request, response: Response) {
    const { city, uf, items } = request.query;

    const parsedItems = String(items)
      .split(',')
      .map(item => Number(item.trim()));

    const points = await knex('POINTS')
      .join('POINT_ITEMS', 'POINTS.id', '=', 'POINT_ITEMS.point_id')
      .whereIn('POINT_ITEMS.item_id', parsedItems)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('POINTS.*')

    return response.json(points);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const point = await knex('POINTS').where('id', id).first();

    if (!point) {
      return response.status(400).json({ message: 'Point not foud!' });
    }

    const items = await knex('ITEMS')
      .join('POINT_ITEMS', 'ITEMS.id', '=', 'POINT_ITEMS.item_id')
      .where('POINT_ITEMS.point_id', id)
      .select('ITEMS.title');

    return response.json({ point, items });
  }

  async create(request: Request, response: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = request.body;
  
    const trx = await knex.transaction();
  
    const point = {
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf
    };

    const insertedIds = await trx('POINTS').insert(point);
  
    const point_id = insertedIds[0];
  
    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id
      };
    });
  
    await trx('POINT_ITEMS').insert(pointItems);
  
    await trx.commit();

    return response.json({
      id: point_id,
      ...point,
    });
  }
}

export default PointsController;
