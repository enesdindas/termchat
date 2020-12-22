import {
  MicroframeworkLoader,
  MicroframeworkSettings,
} from 'microframework-w3tec';
import { env } from '../env';
import { useSocketServer } from 'socket-controllers';

export const socketLoader: MicroframeworkLoader = (
  settings: MicroframeworkSettings | undefined
) => {
  if (settings) {
    const app = settings.getData('express_app');
    const server = require('http').Server(app);
    const io = require('socket.io')(server);
    useSocketServer(io, {
      controllers: env.app.dirs.socketControllers,
      middlewares: env.app.dirs.middlewares,
    });

    server.listen(env.app.port);
    settings.setData('server', server);
  }
};
