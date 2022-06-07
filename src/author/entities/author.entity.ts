import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from '../../post/entities/post.entity';

@ObjectType()
export class Author {
  @Field()
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  age?: number;

  @Field({ nullable: true })
  company?: string;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];
}
