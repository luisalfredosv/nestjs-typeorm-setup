import { MigrationInterface, QueryRunner } from "typeorm"

export class Init1653832462871 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        console.log("Hiiii")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
