import { AsyncHook } from './AsyncHook'

export class AsyncSeriesHook extends AsyncHook {
  async callAsync<T>(name: string, finalCallBack: Function, options?: T) {
    for (const hook of this.hooks) {
      await hook(name, options)
    }

    return finalCallBack()
  }
}

// test
const hookInstance = new AsyncSeriesHook();

hookInstance.tapAsync("react", function(name: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("react", name);
      resolve()
    }, 2000);
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
