import { Injectable } from '@nestjs/common';
import { AlmacenesEntity } from './almacenes.entity';
import { AlmacenesRepository } from './almacenes.repository';

@Injectable()
export class AlmacenesService {
    constructor(
        private repo: AlmacenesRepository
    ){}

    async findAll(): Promise<AlmacenesEntity[]>{
        return this.repo.getAll();
    }

    async findById(id:string): Promise<AlmacenesEntity>{
        return this.repo.getById(id);
    }

    async create(body:AlmacenesEntity): Promise<AlmacenesEntity>{
        return this.repo.create(body);
    }

    async update(id: string, body: AlmacenesEntity): Promise<AlmacenesEntity> {
        return this.repo.update(id, body);
    }

    async delete(id: string): Promise<void> {
        await this.repo.delete(id);
    }
    async getAllpaginated(page:number, records:number): Promise<AlmacenesEntity[]>{
        return this.repo.getAllpaginated(page,records);
     }
}
