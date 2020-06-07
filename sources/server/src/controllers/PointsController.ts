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
      .select('POINTS.*');

    const serializedPoints = points.map(point => {
      return { 
        ...point,
        image_url: `http://${process.env.SERVER_MOBILE_HOST}:3333/uploads/${point.image}`
      };
    });

    return response.json(serializedPoints);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const point = await knex('POINTS').where('id', id).first();

    if (!point) {
      return response.status(400).json({ message: 'Point not foud!' });
    }

    const serializedPoint = {
      ...point,
      image_url: `http://${process.env.SERVER_MOBILE_HOST}:3333/uploads/${point.image}`
    };

    const items = await knex('ITEMS')
      .join('POINT_ITEMS', 'ITEMS.id', '=', 'POINT_ITEMS.item_id')
      .where('POINT_ITEMS.point_id', id)
      .select('ITEMS.title');

    return response.json({ point: serializedPoint, items });
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
      image: request.file.filename, 
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
  
    const pointItems = items
      .split(',')
      .map((item: string) => Number(item.trim()))
      .map((item_id: number) => {
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
