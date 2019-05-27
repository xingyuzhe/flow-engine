import * as schema from './schema'
import { SyncHook } from './SyncHook'

export class AsyncHook extends SyncHook {
  tapAsync(name: string, fn: Function) {
    this.hooks.push(fn)
  }

  async callAsync<T>(name: string, fn: Function, options?: T) {
    throw new Error(`tapAsync should be implemented`)
  }
}
