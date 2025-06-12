'use strict'

import { Logger } from "./logger.js";

class PaymentService {
  pay(amount, logger) {
    logger.log(`Payment of ${amount} made`);
  }
}

// Example usage
const logger = new Logger()
const paymentService = new PaymentService();
paymentService.pay(130, logger);
