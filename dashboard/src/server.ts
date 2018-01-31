import * as dotenv from 'dotenv';
import * as express from 'express';
import * as path from 'path';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  app.use('/assets', express.static(path.join(__dirname, 'assets')));
  app.set('views', __dirname + '/views');
  app.set('view engine', 'pug');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());

  console.log(process.env.APP_PORT || 3000);

  await app.listen(process.env.APP_PORT || 3000);
}
bootstrap();