import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AssessmentResultService } from "./assessmentResult.service";
import { AssessmentResultControllerBase } from "./base/assessmentResult.controller.base";

@swagger.ApiTags("assessmentResults")
@common.Controller("assessmentResults")
export class AssessmentResultController extends AssessmentResultControllerBase {
  constructor(
    protected readonly service: AssessmentResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
