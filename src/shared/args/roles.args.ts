import { IsArray, IsString } from "class-validator";
import { ArgsType, Field } from "@nestjs/graphql";
import { UserRole } from "../enum/roles.enum";

@ArgsType()
export class ValidRolesArgs {

    @Field(() => [UserRole], { nullable: true })
    @IsArray()
    roles?: UserRole[];
}
