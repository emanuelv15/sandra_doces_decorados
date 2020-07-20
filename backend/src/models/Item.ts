import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('items')
class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column('numeric')
  price: number;
}

export default Item;
