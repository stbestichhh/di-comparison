'use strict'

import { Logger } from "./logger.js";
import { ServiceLocator } from "./service-locator.js";

class PaymentService {
  pay(amount) {
    const logger = ServiceLocator.get('logger');
    logger.log(`Payment of ${amount} made`);
  }
}

ServiceLocator.register('logger', new Logger());

const paymentService = new PaymentService();
paymentService.pay(160);
