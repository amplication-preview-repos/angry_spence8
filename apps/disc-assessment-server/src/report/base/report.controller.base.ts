/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { ReportService } from "../report.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ReportCreateInput } from "./ReportCreateInput";
import { Report } from "./Report";
import { ReportFindManyArgs } from "./ReportFindManyArgs";
import { ReportWhereUniqueInput } from "./ReportWhereUniqueInput";
import { ReportUpdateInput } from "./ReportUpdateInput";
import { CreateReportArgs } from "./CreateReportArgs";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ReportControllerBase {
  constructor(
    protected readonly service: ReportService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Report })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createReport(@common.Body() data: ReportCreateInput): Promise<Report> {
    return await this.service.createReport({
      data: {
        ...data,

        assessmentResult: data.assessmentResult
          ? {
              connect: data.assessmentResult,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        filePath: true,

        assessmentResult: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Report] })
  @ApiNestedQuery(ReportFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async reports(@common.Req() request: Request): Promise<Report[]> {
    const args = plainToClass(ReportFindManyArgs, request.query);
    return this.service.reports({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        filePath: true,

        assessmentResult: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async report(
    @common.Param() params: ReportWhereUniqueInput
  ): Promise<Report | null> {
    const result = await this.service.report({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        filePath: true,

        assessmentResult: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateReport(
    @common.Param() params: ReportWhereUniqueInput,
    @common.Body() data: ReportUpdateInput
  ): Promise<Report | null> {
    try {
      return await this.service.updateReport({
        where: params,
        data: {
          ...data,

          assessmentResult: data.assessmentResult
            ? {
                connect: data.assessmentResult,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          filePath: true,

          assessmentResult: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Report })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Report",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteReport(
    @common.Param() params: ReportWhereUniqueInput
  ): Promise<Report | null> {
    try {
      return await this.service.deleteReport({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          filePath: true,

          assessmentResult: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Put(":id/filePath")
  @common.UseInterceptors(FileInterceptor("file"))
  @swagger.ApiConsumes("multipart/form-data")
  @swagger.ApiBody({
    schema: {
      type: "object",

      properties: {
        file: {
          type: "string",
          format: "binary",
        },
      },
    },
  })
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiCreatedResponse({
    type: Report,
    status: "2XX",
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async uploadFilePath(
    @common.Param()
    params: ReportWhereUniqueInput,
    @common.UploadedFile()
    file: Express.Multer.File
  ): Promise<Report> {
    return this.service.uploadFilePath(
      {
        where: params,
      },
      Object.assign(file, {
        filename: file.originalname,
      })
    );
  }

  @common.Get(":id/filePath")
  @swagger.ApiParam({
    name: "id",
    type: "string",
    required: true,
  })
  @swagger.ApiOkResponse({
    type: common.StreamableFile,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async downloadFilePath(
    @common.Param()
    params: ReportWhereUniqueInput,
    @common.Res({
      passthrough: true,
    })
    res: Response
  ): Promise<common.StreamableFile> {
    const result = await this.service.downloadFilePath({
      where: params,
    });

    if (result === null) {
      throw new errors.NotFoundException(
        "No resource was found for ",
        JSON.stringify(params)
      );
    }

    res.setHeader(
      "Content-Disposition",
      `attachment; filename=${result.filename}`
    );
    res.setHeader("Content-Type", result.mimetype);
    return result.stream;
  }

  @common.Delete(":id/filePath")
  @swagger.ApiOkResponse({
    type: Report,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  async deleteFilePath(
    @common.Param()
    params: ReportWhereUniqueInput
  ): Promise<Report> {
    return this.service.deleteFilePath({
      where: params,
    });
  }

  @common.Post("/generate-pdf")
  @swagger.ApiOkResponse({
    type: ReportCreateInput,
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException,
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async GeneratePdfReport(
    @common.Body()
    body: CreateReportArgs
  ): Promise<ReportCreateInput> {
    return this.service.GeneratePdfReport(body);
  }
}
