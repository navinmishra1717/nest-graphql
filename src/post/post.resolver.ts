import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Post } from './entities/post.entity';
import { PostService } from './post.service';
import { upvotePostInputDto } from './dto/post.dto';

@Resolver()
export class PostResolver {
  constructor(private postService: PostService) {}

  @Query(() => Post)
  async getPost(@Args({ name: 'postId', type: () => Int }) id: number) {
    return this.postService.findOne(id);
  }

  //   @Mutation(() => Post)
  //   async upvotePost(@Args({ name: 'postId', type: () => Int }) id: number) {
  //     return this.postService.upvote(id);
  //   }

  @Mutation(() => Post)
  async upvotePost(@Args('upvotePostData') upvotePostData: upvotePostInputDto) {
    return this.postService.upvote(upvotePostData.postId);
  }
}
