import { ApiProperty } from '@nestjs/swagger';
export class User {
  // User interface
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  age?: number;

  @ApiProperty({ required: false })
  company?: string;
}
