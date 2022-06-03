import { Car } from '../core/entities/car.entity';
import { BaseRepository } from './contracts/baseRepository';

export class CarRepository extends BaseRepository<Car> {
  constructor() {
    super(Car);
  }
}
