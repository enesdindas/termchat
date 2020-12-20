import {
  JsonController,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Res,
} from 'routing-controllers';
import { IUser } from '../../database/models/interfaces/User';
import UserRepository from '../../database/repositories/UserRepository';
import { ObjectID } from 'typeorm';
import mongoose from 'mongoose';
import express from 'express';
import { requestError, successResponse } from '../../lib/api/ResponseService';
const userRepo = new UserRepository();

@JsonController('/users')
export class UsersController {
  @Get()
  public async retrieve(
    @Res() response: express.Response
  ): Promise<mongoose.Collection[] | any> {
    try {
      const data = await userRepo.retrieve();
      return successResponse('ok', data, response);
    } catch (e) {
      return requestError(e, response);
    }
  }

  @Post('/create')
  public async create(
    @Res() response: express.Response,
    @Body() user: IUser
  ): Promise<mongoose.Collection[] | any> {
    try {
      const data = await userRepo.create(user);
      return successResponse('ok', data, response);
    } catch (e) {
      return requestError(e, response);
    }
  }

  @Post('/update/:id')
  public async update(
    @Res() response: express.Response,
    @Param('id') _id: ObjectID,
    @Body() user: IUser
  ): Promise<mongoose.Collection[] | any> {
    try {
      const data = await userRepo.update(_id, user);
      return successResponse('ok', data, response);
    } catch (e) {
      return requestError(e, response);
    }
  }

  @Delete('/delete/:id')
  public async delete(
    @Res() response: express.Response,
    @Param('id') _id: string
  ): Promise<mongoose.Collection[] | any> {
    try {
      const data = await userRepo.delete(_id);
      return successResponse('ok', data, response);
    } catch (e) {
      return requestError(e, response);
    }
  }

  @Get(':id')
  public async findById(
    @Res() response: express.Response,
    @Param('id') _id: string
  ): Promise<mongoose.Collection[] | any> {
    try {
      const data = await userRepo.findById(_id);
      return successResponse('ok', data, response);
    } catch (e) {
      return requestError(e, response);
    }
  }
}
