import { InputType, Field, Float } from "@nestjs/graphql";

@InputType()
export class CreatePropertyInput {
  @Field()
    name!: string;

  @Field(() => Float)
    price!: number;

  @Field()
    location!: string;

  @Field()
    status!: 'available' | 'rented' | 'sold';

  @Field(() => [String])
    categoryIds!: string[];

  @Field({ nullable: true })
  description?: string;

  @Field(() => [String], { nullable: true })
  tagIds?: string[];

  @Field(() => [String], { nullable: true })
  images?: string[];

  @Field(() => [String], { nullable: true })
  videos?: string[];
  
  @Field(() => String)
  createdBy!: string; 
  
}
