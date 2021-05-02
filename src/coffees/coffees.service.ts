import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
    private coffees: Coffee[] = [
        {
            id: 1,
            name: "Coffee #1",
            brand: "Czekolada",
            flavors: ["Cukier", "Mleko"]
        },
    ];

    findAll() {
        return this.coffees;
    }
///
    create(createCoffeeDto: any){
        this.coffees.push(createCoffeeDto);
        return createCoffeeDto;
    }
///
    findOne(id: string){
        const coffee =  this.coffees.find(item => item.id === +id)
        if (!coffee) {
            throw new NotFoundException(`Kawa #${id} nie istnieje`)
        }
        return coffee;
        
    }
///
    update(id: string, updateCoffeeDto: any){
        const existingCoffee = this.findOne(id)
        // if(existingCoffee){
            
        // }
    }
///
    remove(id: string){
        const coffeIndex = this.coffees.findIndex(item => item.id === +id)
        if (coffeIndex >= 0 ){
            this.coffees.splice(coffeIndex,1)
        }
    }
///
}
