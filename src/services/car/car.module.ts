import { CarRepository } from '@app/repositories/car.repository';
import { Module } from '@nestjs/common';
import { CarFactoryService } from './car.factory';
import { CarService } from './car.service';

@Module({
  imports: [],
  providers: [CarFactoryService, CarService, CarRepository],
  exports: [CarFactoryService, CarService, CarRepository],
})
export class CarUseServiceModule {}
