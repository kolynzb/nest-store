import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public')); // public folder used for asset storage
  app.setBaseViewsDir(join(__dirname, '..', 'views')); //  specify for hbs to know where the views are
  hbs.registerPartials(join(__dirname, '..', 'views/layouts')); // storing Handlebars Partials
  hbsUtils(hbs).registerWatchedPartials(join(__dirname, '..', 'views/layouts')); //watch the views/layouts folder for changes
  app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
