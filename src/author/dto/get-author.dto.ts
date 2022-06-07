import { Min, MinLength } from 'class-validator';
import { Field, ArgsType } from '@nestjs/graphql';

@ArgsType()
export class GetAuthorArgs {
  @Field({ nullable: true })
  @Min(10)
  age: number;

  @Field({ nullable: true })
  company?: string;

  @MinLength(1)
  id: number;
}
