import { AsyncHook } from './AsyncHook'

export class AsyncParallelBailHook extends AsyncHook {
  async callAsync(...args) {
    const promises = this.hooks.map(hook => hook(...args))
    await Promise.all(promises)
  }
}
