import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import ItemsRepository from '../repositories/ItemsRepository';
import CreateItemService from '../services/CreateItemService';
import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const itemsRouter = Router();

itemsRouter.use(ensureAuthenticated);

itemsRouter.get('/', async (req, res) => {
  const itemsRepository = getCustomRepository(ItemsRepository);
  const items = await itemsRepository.find();

  return res.json(items);
});

itemsRouter.post('/', async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const createItem = new CreateItemService();

    const item = await createItem.execute({
      name,
      description,
      price,
    });

    return res.json(item);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

export default itemsRouter;
