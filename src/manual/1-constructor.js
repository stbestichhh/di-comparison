'use strict'

import { Logger } from "./logger.js";

class PaymentService {
  constructor(logger) {
    this.logger = logger;
  }

  pay(amount) {
    this.logger.log(`Payment of ${amount} made`);
  }
}

// Example usage
const logger = new Logger()
const paymentService = new PaymentService(logger);
paymentService.pay(100);
