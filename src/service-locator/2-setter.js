'use strict'

import { Logger } from "./logger.js";
import { ServiceLocator } from "./service-locator.js";

class PaymentService {
  setLogger() {
    this.logger = ServiceLocator.get('logger');
  }

  pay(amount) {
    if (!this.logger) {
      throw new Error('Logger not set');
    }

    this.logger.log(`Payment of ${amount} made`);
  }
}

ServiceLocator.register('logger', new Logger());

const paymentService = new PaymentService();
paymentService.setLogger();
paymentService.pay(150);
