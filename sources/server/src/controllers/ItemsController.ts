import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
  async index (request: Request, response: Response) {
    const items = await knex('ITEMS').select('*');

    const mobile = process.env.SERVER_MOBILE_HOST;
    const web = process.env.SERVER_WEB_HOST;

    const serializedItems = items.map(item => {
      return { 
        id: item.id,
        title: item.title,
        image_url: `http://${mobile}:3333/uploads/${item.image}`
      };
    });
  
    return response.json(serializedItems);
  }
}

export default ItemsController;
