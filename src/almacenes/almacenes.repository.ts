import { InjectRepository } from "@nestjs/typeorm";
import { ConnectionOptionsReader, DeleteResult, EntityRepository, Repository } from "typeorm";
import { AlmacenesEntity } from "./almacenes.entity";

@EntityRepository(AlmacenesEntity)
export class AlmacenesRepository  {
    constructor(
        @InjectRepository
        (AlmacenesEntity) private repo: Repository<AlmacenesEntity>){}

    async getAll(): Promise<AlmacenesEntity[]>{
       return this.repo.find();
    }

    async getById(id : string): Promise<AlmacenesEntity>{
        return this.repo.findOne(id);
    }

    async create(body:AlmacenesEntity): Promise<AlmacenesEntity>{
        return this.repo.save(body);
    }

    async update(id: string, body: AlmacenesEntity): Promise<AlmacenesEntity> {
        await this.repo.update(id, body);
        return this.repo.findOne(id);

    }

    async delete(id: string): Promise<DeleteResult> {
        return this.repo.delete(id);
    }

    async getAllpaginated(page:number, records:number): Promise<AlmacenesEntity[]>{
        const initpage = page -1; 
        const offset = initpage * records;
        return this.repo.find({
            skip:offset,
            take:records
        });
     }

}
