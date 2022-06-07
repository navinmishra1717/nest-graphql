import { Resolver, Query, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { Author } from './entities/author.entity';
import { AuthorService } from './author.service';
import { PostService } from 'src/post/post.service';
import { Post } from 'src/post/entities/post.entity';
import { GetAuthorArgs } from './dto/get-author.dto';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private authorService: AuthorService, private postService: PostService) {}

  @Query(() => [Author], { name: 'authors' })
  async getAuthors() {
    return this.authorService.findAll();
  }

  @Query(() => Author)
  async getAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorService.findOne(id);
  }
  // async getAuthor(@Args() args: GetAuthorArgs) {
  //   return this.authorService.findOne(args.id);
  // }

  // @ResolveField('posts', () => [Post])
  // async getPosts(@Parent() author: Author) {
  //   const { id } = author;
  //   return this.postService.findAll({ authorId: id });
  // }
}
