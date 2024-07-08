import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AssessmentResultServiceBase } from "./base/assessmentResult.service.base";

@Injectable()
export class AssessmentResultService extends AssessmentResultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
