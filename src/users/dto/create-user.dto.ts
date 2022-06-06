import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsNotEmpty, Max } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ required: false })
  @Max(100)
  age?: number;

  @ApiProperty({ required: false })
  company?: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
