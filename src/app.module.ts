import {
  Module,
  //  MiddlewareConsumer,
  //  NestModule
} from '@nestjs/common';
import { AppController, CarController } from './controllers';
import { AppService, CarService } from './services';
import { CarUseServiceModule } from './services/car';

@Module({
  imports: [CarUseServiceModule],
  controllers: [AppController, CarController],
  providers: [AppService, CarService],
})
export class AppModule {}

// for middleware
// export class AppModule extends NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(authMiddleware)
//       .forRoutes('CarController');
//   }
// }
