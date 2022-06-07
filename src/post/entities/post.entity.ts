import { ObjectType, Field } from '@nestjs/graphql';
import { Author } from '../../author/entities/author.entity';

@ObjectType()
export class Post {
  @Field()
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  votes: number;

  @Field(() => Author)
  author?: Author;
}
