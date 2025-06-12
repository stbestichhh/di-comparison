'use strict'

import { Logger } from "./logger.js";

class PaymentService {
  setLogger(logger) {
    this.logger = logger;
  }

  pay(amount) {
    if (!this.logger) {
      throw new Error('Logger not set');
    }

    this.logger.log(`Payment of ${amount} made`);
  }
}

// Example usage
const logger = new Logger()
const paymentService = new PaymentService();
paymentService.setLogger(logger)
paymentService.pay(120);
