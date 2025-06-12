'use strict'

export class DIContainer {
  static #services = new Map();
  static #singletons = new Map();

  static register(name, service, dependencies = [], singleton = false) {
    this.#services.set(name, { service, dependencies, singleton });
    return this;
  }

  static resolve(name) {
    const service = this.#services.get(name);
    if (!service) {
      throw new Error(`Service ${name} not found`);}

    if (service.singleton && this.#singletons.has(name)) {
      return this.#singletons.get(name);
    }

    const dependencies = service.dependencies.map(dep => this.resolve(dep));
    const instance = new service.service(...dependencies);

    if (service.singleton) {
      this.#singletons.set(name, instance);
    }

    return instance;
  }
}
