import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { AlmacenesEntity } from './almacenes.entity';
import { AlmacenesService } from './almacenes.service';


@Controller('almacenes')
export class AlmacenesController {
    constructor (private almacenesService : AlmacenesService){}
    
    @Get()
    @ApiOperation({ summary: 'Obtener lista de almacenes' })
    async findAll(): Promise<AlmacenesEntity[]>{
        return this.almacenesService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener almacen por clave primaria' })
    async  findById(@Param('id') id: string): Promise<AlmacenesEntity>{
        return this.almacenesService.findById(id);
    }

    @Post()
    @ApiOperation({ summary: 'Crear un almacen' })
    async create(@Body() body: AlmacenesEntity): Promise<AlmacenesEntity> {
        return this.almacenesService.create(body);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar los datos de un almacen' })
    async updateUser(@Param('id') id: string, @Body() body: AlmacenesEntity): Promise<AlmacenesEntity> {
        return this.almacenesService.update(id, body);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un almacen' })
    async deleteUser(@Param('id') id: string): Promise<void> {
        return this.almacenesService.delete(id);
    }

    @Get('/page/:page/records/:records')
    @ApiOperation({ summary: 'Obtener lista de almacenes, paginada' })
    async findAllPaginated(@Param('page') page:number,@Param('records') records : number): Promise<AlmacenesEntity[]>{
        return this.almacenesService.getAllpaginated(page,records);
    }
}
