import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnswerModuleBase } from "./base/answer.module.base";
import { AnswerService } from "./answer.service";
import { AnswerController } from "./answer.controller";
import { AnswerResolver } from "./answer.resolver";

@Module({
  imports: [AnswerModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnswerController],
  providers: [AnswerService, AnswerResolver],
  exports: [AnswerService],
})
export class AnswerModule {}
