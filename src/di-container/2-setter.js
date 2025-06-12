'use strict'

import { Logger } from "./logger.js";
import { DIContainer } from "./di-container.js";

class PaymentService {
  setLogger() {
    this.logger = DIContainer.resolve('logger');
  }

  pay(amount) {
    if (!this.logger) {
      throw new Error('Logger not set');
    }

    this.logger.log(`Payment of ${amount} made`);
  }
}

// Example usage
DIContainer.register('logger', Logger, [], true)

const paymentService = new PaymentService();
const logger = DIContainer.resolve('logger');
paymentService.setLogger(logger);
paymentService.pay(180);
