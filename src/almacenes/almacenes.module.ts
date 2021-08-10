import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlmacenesController } from './almacenes.controller';
import { AlmacenesEntity } from './almacenes.entity';
import { AlmacenesRepository } from './almacenes.repository';
import { AlmacenesService } from './almacenes.service';

@Module({imports: [TypeOrmModule.forFeature([AlmacenesEntity])],
    controllers: [AlmacenesController],
    providers: [AlmacenesService, AlmacenesRepository]})
export class AlmacenesModule {}
