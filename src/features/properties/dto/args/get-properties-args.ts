import { ArgsType, Field, Int } from "@nestjs/graphql";

@ArgsType()
export class GetPropertiesArgs {
    @Field(() => Int, { nullable: true })
    skip?: number; 

    @Field(() => Int, { nullable: true })
    take?: number; 

    @Field({ nullable: true })
    status?: string; 

    @Field({ nullable: true })
    categoryId?: string; 

    @Field(() => [String], { nullable: true })
    tagIds?: string[]; 

    @Field({ nullable: true })
    location?: string; 
}
