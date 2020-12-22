import 'reflect-metadata';

import { bootstrapMicroframework } from 'microframework-w3tec';

import { banner } from './lib/banner/banner';
import { Logger } from './lib/logger';
import { eventDispatchLoader } from './loaders/eventDispatchLoader';
import { expressLoader } from './loaders/expressLoader';
import { iocLoader } from './loaders/iocLoader';
import { swaggerLoader } from './loaders/swaggerLoader';
import { mongooseLoader } from './loaders/mongooseLoader';
import { winstonLoader } from './loaders/winstonLoader';
import { socketLoader } from './loaders/socketLoader';

/**
 * EXPRESS TYPESCRIPT BOILERPLATE
 * ----------------------------------------
 *
 * This is a boilerplate for Node.js Application written in TypeScript.
 * The basic layer of this app is express. For further information visit
 * the 'README.md' file.
 */
const log = new Logger(__filename);

bootstrapMicroframework({
  /**
   * Loader is a place where you can configure all your modules during microframework
   * bootstrap process. All loaders are executed one by one in a sequential order.
   */
  loaders: [
    winstonLoader,
    iocLoader,
    eventDispatchLoader,
    mongooseLoader,
    expressLoader,
    swaggerLoader,
    socketLoader,
  ],
})
  .then(() => banner(log))
  .catch((error) => log.error('Application is crashed: ' + error));
