import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AssessmentResultModuleBase } from "./base/assessmentResult.module.base";
import { AssessmentResultService } from "./assessmentResult.service";
import { AssessmentResultController } from "./assessmentResult.controller";
import { AssessmentResultResolver } from "./assessmentResult.resolver";

@Module({
  imports: [AssessmentResultModuleBase, forwardRef(() => AuthModule)],
  controllers: [AssessmentResultController],
  providers: [AssessmentResultService, AssessmentResultResolver],
  exports: [AssessmentResultService],
})
export class AssessmentResultModule {}
