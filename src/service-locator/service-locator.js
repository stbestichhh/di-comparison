'use strict'
export class ServiceLocator {
  static #instances = new Map();

  static register(name, service) {
    this.#instances.set(name, service);
  }

  static get(name) {
    const service = this.#instances.get(name);

    if (!service) {
      throw new Error(`Service '${name}' not found`);
    }

    return service;
  }
}
