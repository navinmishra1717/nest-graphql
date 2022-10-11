import { Field, InputType } from '@nestjs/graphql';

@InputType() // converts a class into input object type
export class upvotePostInputDto {
  @Field() // converts a class property into a object field
  postId: number;
}
