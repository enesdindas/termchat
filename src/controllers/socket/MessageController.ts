import {
  OnConnect,
  SocketController,
  ConnectedSocket,
  OnDisconnect,
  MessageBody,
  OnMessage,
} from 'socket-controllers';
import { IMessage } from '../../database/models/interfaces/Message';

@SocketController('/chat')
export class MessageController {
  @OnConnect()
  public connection(@ConnectedSocket() socket: any): void {
    socket.on('joinRoom', ({ userId, roomId }) => {
      console.log(`User ${userId} connected to room ${roomId}`);

      socket.join(roomId);

      // Welcome current user
      socket.emit('message', {
        sender: userId,
        room: roomId,
      });

      // Broadcast when a user connects
      socket.broadcast.to(roomId).emit('connection', {
        sender: userId,
        room: roomId,
      });
    });
  }

  @OnDisconnect()
  public disconnect(@ConnectedSocket() socket: any): void {
    console.log('client disconnected ouch');
  }

  @OnMessage('message')
  public save(
    @ConnectedSocket() socket: any,
    @MessageBody() message: IMessage
  ): void {
    console.log('received message:', message);
    socket.broadcast.to(message.roomId).emit('response', message);
  }
}
