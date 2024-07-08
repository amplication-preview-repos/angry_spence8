/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Answer } from "./Answer";
import { AnswerCountArgs } from "./AnswerCountArgs";
import { AnswerFindManyArgs } from "./AnswerFindManyArgs";
import { AnswerFindUniqueArgs } from "./AnswerFindUniqueArgs";
import { CreateAnswerArgs } from "./CreateAnswerArgs";
import { UpdateAnswerArgs } from "./UpdateAnswerArgs";
import { DeleteAnswerArgs } from "./DeleteAnswerArgs";
import { Question } from "../../question/base/Question";
import { Customer } from "../../customer/base/Customer";
import { AnswerService } from "../answer.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Answer)
export class AnswerResolverBase {
  constructor(
    protected readonly service: AnswerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Answer",
    action: "read",
    possession: "any",
  })
  async _answersMeta(
    @graphql.Args() args: AnswerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Answer])
  @nestAccessControl.UseRoles({
    resource: "Answer",
    action: "read",
    possession: "any",
  })
  async answers(@graphql.Args() args: AnswerFindManyArgs): Promise<Answer[]> {
    return this.service.answers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Answer, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Answer",
    action: "read",
    possession: "own",
  })
  async answer(
    @graphql.Args() args: AnswerFindUniqueArgs
  ): Promise<Answer | null> {
    const result = await this.service.answer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Answer)
  @nestAccessControl.UseRoles({
    resource: "Answer",
    action: "create",
    possession: "any",
  })
  async createAnswer(@graphql.Args() args: CreateAnswerArgs): Promise<Answer> {
    return await this.service.createAnswer({
      ...args,
      data: {
        ...args.data,

        question: args.data.question
          ? {
              connect: args.data.question,
            }
          : undefined,

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Answer)
  @nestAccessControl.UseRoles({
    resource: "Answer",
    action: "update",
    possession: "any",
  })
  async updateAnswer(
    @graphql.Args() args: UpdateAnswerArgs
  ): Promise<Answer | null> {
    try {
      return await this.service.updateAnswer({
        ...args,
        data: {
          ...args.data,

          question: args.data.question
            ? {
                connect: args.data.question,
              }
            : undefined,

          customer: args.data.customer
            ? {
                connect: args.data.customer,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Answer)
  @nestAccessControl.UseRoles({
    resource: "Answer",
    action: "delete",
    possession: "any",
  })
  async deleteAnswer(
    @graphql.Args() args: DeleteAnswerArgs
  ): Promise<Answer | null> {
    try {
      return await this.service.deleteAnswer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Question, {
    nullable: true,
    name: "question",
  })
  @nestAccessControl.UseRoles({
    resource: "Question",
    action: "read",
    possession: "any",
  })
  async getQuestion(
    @graphql.Parent() parent: Answer
  ): Promise<Question | null> {
    const result = await this.service.getQuestion(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customer",
  })
  @nestAccessControl.UseRoles({
    resource: "Customer",
    action: "read",
    possession: "any",
  })
  async getCustomer(
    @graphql.Parent() parent: Answer
  ): Promise<Customer | null> {
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
