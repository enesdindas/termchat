import {
  JsonController,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Res,
  Put,
} from 'routing-controllers';
import { IRoom } from '../../database/models/interfaces/Room';
import RoomRepository from '../../database/repositories/RoomRepository';
import { ObjectID } from 'typeorm';
import mongoose from 'mongoose';
import express from 'express';
import { requestError, successResponse } from '../../lib/api/ResponseService';
const RoomRepo = new RoomRepository();

@JsonController('/rooms')
export class RoomsController {
  @Get()
  public async retrieve(
    @Res() response: express.Response
  ): Promise<mongoose.Collection[] | any> {
    try {
      const data = await RoomRepo.retrieve();
      return successResponse('ok', data, response);
    } catch (e) {
      return requestError(e, response);
    }
  }

  @Post('/create')
  public async create(
    @Res() response: express.Response,
    @Body() Room: IRoom
  ): Promise<mongoose.Collection[] | any> {
    try {
      const data = await RoomRepo.create(Room);
      return successResponse('ok', data, response);
    } catch (e) {
      return requestError(e, response);
    }
  }

  @Put('/update/:id')
  public async update(
    @Res() response: express.Response,
    @Param('id') _id: ObjectID,
    @Body() Room: IRoom
  ): Promise<mongoose.Collection[] | any> {
    try {
      const data = await RoomRepo.update(_id, Room);
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
      const data = await RoomRepo.delete(_id);
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
      const data = await RoomRepo.findById(_id);
      return successResponse('ok', data, response);
    } catch (e) {
      return requestError(e, response);
    }
  }
}
