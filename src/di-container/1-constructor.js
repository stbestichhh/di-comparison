'use strict'

import { Logger } from "./logger.js"
import { DIContainer } from "./di-container.js";

class PaymentService {
  constructor(logger) {
    this.logger = logger;
  }

  pay(amount) {
    this.logger.log(`Payment of ${amount} made`);
  }
}

// Example usage
DIContainer.register('logger', Logger, [], true)
DIContainer.register('paymentService', PaymentService, ['logger'])

const paymentService = DIContainer.resolve('paymentService');
paymentService.pay(170);
