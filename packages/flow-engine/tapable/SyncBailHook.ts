import { SyncHook } from './SyncHook'

export class SyncBailHook extends SyncHook {
  call<T>(name: string, options?: T) {
    for (const hook of this.hooks) {
      const result = hook(name, options)
      if (result !== undefined) {
        break
      }
    }
  }
}

// test
// const hookInstance = new SyncBailHook();

// hookInstance.tap("react", function (name) {
//   console.log("react", name);
//   return "stop";
// });
// hookInstance.tap("node", function (name) {
//   console.log("node", name);
// });
// hookInstance.call("musion");
