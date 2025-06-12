'use strict'

import { Logger } from "./logger.js";
import { DIContainer } from "./di-container.js";

class PaymentService {
  pay(amount) {
    const logger = DIContainer.resolve('logger');
    logger.log(`Payment of ${amount} made`);
  }
}

// Example usage
DIContainer.register('logger', Logger, [], true)

const paymentService = new PaymentService();
paymentService.pay(190);
