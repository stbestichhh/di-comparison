import { Injectable, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Injectable() // Tell the framework to manage dependencies of this class (IoC)
class LoggerService {
  log(message: string) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }
}

@Injectable() // Same here
class PaymentService {
  constructor(private readonly logger: LoggerService) {}

  async processPayment(amount: number): Promise<void> {
    this.logger.log(`Processing payment of ${amount}`);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    this.logger.log(`Payment of ${amount} processed successfully`);
  }
}

@Injectable() // and here
class OrderService {
  constructor(private readonly paymentService: PaymentService) {}

  async processOrder(amount: number): Promise<{ orderId: string, amount: number }> {
    await this.paymentService.processPayment(amount);
    return { orderId: '123', amount };
  }
}

@Module({
  providers: [LoggerService, PaymentService, OrderService],
})
class AppModule {}



async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const orderService = app.get(OrderService);
  await orderService.processOrder(160);


  await app.close();
}
bootstrap();
