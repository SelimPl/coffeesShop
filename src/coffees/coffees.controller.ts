import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeService: CoffeesService)
    {

    }
    @Get('/')
    findAll(
        @Query() paginationQuery: PaginationQueryDto
    ){
       
        return this.coffeService.findAll(paginationQuery)
    }
///
    @Get('/:id')
    findOne(
        @Param('id') id: number
    ) {
        return this.coffeService.findOne('' + id);
    }
///
    @Post('/')
    create(
        @Body() createCoffeeDto: CreateCoffeeDto
    ){
        
        console.log(createCoffeeDto)
        return this.coffeService.create(createCoffeeDto)
    }
///
    @Patch('/:id')
    update(
       @Param('id') id: string,
       @Body() updateCoffeeDto: UpdateCoffeeDto,
        ){
        return this.coffeService.update(id, updateCoffeeDto)
    }
///
    @Delete('/:id')
    remove(
       @Param('id') id: string
        ){
        return this.coffeService.remove(id)
    }

}
