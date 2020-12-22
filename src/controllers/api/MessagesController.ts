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
import { IMessage } from '../../database/models/interfaces/Message';
import MessageRepository from '../../database/repositories/MessageRepository';
import { ObjectID } from 'typeorm';
import mongoose from 'mongoose';
import express from 'express';
import { requestError, successResponse } from '../../lib/api/ResponseService';
const MessageRepo = new MessageRepository();

@JsonController('/messages')
export class MessagesController {
  @Get()
  public async retrieve(
    @Res() response: express.Response
  ): Promise<mongoose.Collection[] | any> {
    try {
      const data = await MessageRepo.retrieve();
      return successResponse('ok', data, response);
    } catch (e) {
      return requestError(e, response);
    }
  }

  @Post('/create')
  public async create(
    @Res() response: express.Response,
    @Body() Message: IMessage
  ): Promise<mongoose.Collection[] | any> {
    try {
      const data = await MessageRepo.create(Message);
      return successResponse('ok', data, response);
    } catch (e) {
      return requestError(e, response);
    }
  }

  @Put('/update/:id')
  public async update(
    @Res() response: express.Response,
    @Param('id') _id: ObjectID,
    @Body() Message: IMessage
  ): Promise<mongoose.Collection[] | any> {
    try {
      const data = await MessageRepo.update(_id, Message);
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
      const data = await MessageRepo.delete(_id);
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
      const data = await MessageRepo.findById(_id);
      return successResponse('ok', data, response);
    } catch (e) {
      return requestError(e, response);
    }
  }
}
