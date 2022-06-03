import { Injectable } from '@nestjs/common';
import { Car } from '../../core/entities/car.entity';
import { CarRepository } from '../../repositories/car.repository';

@Injectable()
export class CarService {
  constructor(private car: CarRepository) {}

  getAll(): string {
    return 'Hello car!';
  }

  async create(carData: Car): Promise<Car> {
    try {
      // call to our dependencies
      const car = await this.car.create(carData);
      return car;
    } catch (err) {
      throw err;
    }
  }
}
