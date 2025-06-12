'use strict'

import { Logger } from "./logger.js";
import { ServiceLocator } from "./service-locator.js";

class PaymentService {
  constructor() {
    this.logger = ServiceLocator.get('logger');
  }

  pay(amount) {
    this.logger.log(`Payment of ${amount} made`);
  }
}

ServiceLocator.register('logger', new Logger());

const paymentService = new PaymentService();
paymentService.pay(140);
