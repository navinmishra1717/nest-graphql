import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarService, CarFactoryService } from '../../services/car';
import { CreateCarDto, CreateCarResponseDto } from '../../core/dto/car.dto';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService, private readonly carFactoryService: CarFactoryService) {}

  @Get()
  getAll(): string {
    return this.carService.getAll();
  }

  @Post()
  async create(@Body() carDto: CreateCarDto): Promise<CreateCarResponseDto> {
    const carReponse = new CreateCarResponseDto();
    try {
      const car = this.carFactoryService.CreateCar(carDto);
      console.log(car, 'car');
      const createdCar = await this.carService.create(car);
      carReponse.success = true;
      carReponse.data = createdCar;
    } catch (err) {
      carReponse.success = false;
    }
    return carReponse;
  }
}
