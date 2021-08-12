import { Inject, Injectable, Request, Scope } from '@nestjs/common';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import {  ModuleRef, REQUEST } from '@nestjs/core';
import { DB } from './env';

@Injectable({ scope: Scope.REQUEST })
export class MongooseConfigService implements MongooseOptionsFactory {
  static readonly PROJECT_CODE = "project-code";
  static readonly CONNECTION_NAME = "projects";

  constructor(
    @Inject(REQUEST) private readonly request: Request,
    private moduleRef: ModuleRef,
  ) {}

  async createMongooseOptions(): Promise<MongooseModuleOptions> {
    return {
      ...DB.mongo.options,
      uri: `${DB.mongo.connect}/${DB.mongo.name2}`,
      connectionName: MongooseConfigService.CONNECTION_NAME
    };
  }
}
