import { InputType, Field, ID, Float } from "@nestjs/graphql";

@InputType()
export class UpdatePropertyInput {
    @Field(() => ID)
    id!: string; 

    @Field({ nullable: true })
    name?: string; 

    @Field(() => Float, { nullable: true })
    price?: number; 

    @Field({ nullable: true })
    location?: string; 

    @Field({ nullable: true })
    status?: string; 
    @Field({ nullable: true })
    description?: string; 
    @Field(() => [String], { nullable: true })
    categoryIds?: string[]; 

    @Field(() => [String], { nullable: true })
    tagIds?: string[];

    @Field(() => [String], { nullable: true })
    images?: string[]; 
}
