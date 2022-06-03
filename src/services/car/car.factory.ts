import { Injectable } from '@nestjs/common';
import { Car } from '../../core/entities/car.entity';
import { CreateCarDto, UpdateCarDto } from '../../core/dto/car.dto';

@Injectable()
export class CarFactoryService {
  CreateCar(carDto: CreateCarDto): Car {
    const car = new Car();
    car.name = carDto.name;
    car.model = carDto.model;
    car.color = carDto.color;
    car.madeIn = new Date(carDto.madeIn);
    return car;
  }

  updateCar(carDto: UpdateCarDto): Car {
    const car = new Car();
    car.name = carDto.name;
    car.model = carDto.model;
    car.color = carDto.color;
    car.madeIn = new Date(carDto.madeIn);
    return car;
  }
}
