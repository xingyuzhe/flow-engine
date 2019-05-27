import { AsyncHook } from './AsyncHook'

export class AsyncParallelHook extends AsyncHook {
  async callAsync<T>(name: string, finalCallBack: Function, options?: T) {
    const promises = this.hooks.map(hook => hook(name, options))
    await Promise.all(promises)
    finalCallBack()
  }
}

// test
const hookInstance = new AsyncParallelHook();

hookInstance.tapAsync("react", function(name: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("react", name);
      resolve()
    }, 1000);
  })
});
hookInstance.tapAsync("node", function(name: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("node", name);
      resolve()
    }, 1000);
  })
});
hookInstance.callAsync("musion", function() {
  console.log("end");
});
