'use strict'

import { Logger } from "./logger.js";

class ServiceLocator {
  constructor() {
    this.instances = new Map();
  }

  register(name, service) {
    this.instances.set(name, service);
  }

  get(name) {
    const service = this.instances.get(name);

    if (!service) {
      throw new Error(`Service '${name}' not found`);
    }

    return service;
  }
}

class PaymentService {
  constructor(logger) {
    this.logger = logger;
  }

  pay(amount) {
    this.logger.log(`Payment of ${amount} made`);
  }
}

const locator = new ServiceLocator();
const logger = new Logger();

locator.register('logger', logger);

const paymentService = new PaymentService(locator.get('logger'));
paymentService.pay(140);
