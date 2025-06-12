'use strict'

import { Logger } from "./logger.js"

class DIContainer {
  constructor() {
    this.services = new Map();
    this.singletons = new Map();
  }

  register(name, service, dependencies = [], singleton = false) {
    this.services.set(name, { service, dependencies, singleton });
    return this;
  }

  resolve(name) {
    const service = this.services.get(name);
    if (!service) {
      throw new Error(`Service ${name} not found`);}

    if (service.singleton && this.singletons.has(name)) {
      return this.singletons.get(name);
    }

    const dependencies = service.dependencies.map(dep => this.resolve(dep));
    const instance = new service.service(...dependencies);

    if (service.singleton) {
      this.singletons.set(name, instance);
    }

    return instance;
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

// Example usage
const container = new DIContainer();
container.register('logger', Logger, [], true)
container.register('paymentService', PaymentService, ['logger'])

const paymentService = container.resolve('paymentService');
paymentService.pay(150);
