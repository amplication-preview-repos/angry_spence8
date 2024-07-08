import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AssessmentResultResolverBase } from "./base/assessmentResult.resolver.base";
import { AssessmentResult } from "./base/AssessmentResult";
import { AssessmentResultService } from "./assessmentResult.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AssessmentResult)
export class AssessmentResultResolver extends AssessmentResultResolverBase {
  constructor(
    protected readonly service: AssessmentResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
