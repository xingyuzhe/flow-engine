import { SyncHook } from './SyncHook'

export class SyncWaterfallHook extends SyncHook {
  call<T>(name: string, options?: T) {
    const [first, ...others] = this.hooks

    others.reduce((data, hook) => {
      return hook(data, options)
    }, first(name, options))
  }
}

// test

// const hookInstance = new SyncWaterfallHook();

// hookInstance.tap("react", function(name) {
//   console.log("react", name);
//   return "react ok";
// });
// hookInstance.tap("node", function(data) {
//   console.log("node", data);
//   return "node ok";
// });
// hookInstance.tap("webpack", function(data) {
//   console.log("webpack", data);
// });
// hookInstance.call("musion");
