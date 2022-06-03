import { IsNotEmpty, IsString } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

import { Car } from '../entities/car.entity';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  model: string;

  @IsNotEmpty()
  color: string;

  @IsNotEmpty()
  madeIn: Date;
}

export class UpdateCarDto extends PartialType(CreateCarDto) {}

export class CreateCarResponseDto {
  success: boolean;
  data: Car;
}
