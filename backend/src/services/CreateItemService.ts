import { getCustomRepository } from 'typeorm';

import Item from '../models/Item';
import ItemsRepository from '../repositories/ItemsRepository';

interface Request {
  name: string;
  description: string;
  price: number;
}

class CreateItemService {
  public async execute({ name, description, price }: Request): Promise<Item> {
    const itemsRepository = getCustomRepository(ItemsRepository);

    const item = itemsRepository.create({
      name,
      description,
      price,
    });

    await itemsRepository.save(item);

    return item;
  }
}

export default CreateItemService;
