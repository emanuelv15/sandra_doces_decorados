import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AlterIdFieldTypeAndCreateUpdatedAtAndCreatedAtInItemsTable1595341735747
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      'items',
      'id',
      new TableColumn({
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      }),
    );

    await queryRunner.addColumn(
      'items',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'now()',
        isNullable: false,
      }),
    );

    await queryRunner.addColumn(
      'items',
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
        isNullable: false,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('items', 'updated_at');

    await queryRunner.dropColumn('items', 'created_at');

    await queryRunner.changeColumn(
      'items',
      'id',
      new TableColumn({
        name: 'id',
        type: 'varchar',
        isPrimary: true,
        generationStrategy: 'uuid',
        default: 'uuid_generate_v4()',
      }),
    );
  }
}
