import { AsyncHook } from './AsyncHook'

export class AsyncSeriesWaterfallHook extends AsyncHook {
  async callAsync<T>(name: string, finalCallBack: Function, options?: T) {
    const done = finalCallBack
    let index = 0

    const next = (err?: Error, data?: any) => {
      if (index >= this.hooks.length) {
        return done()
      }

      if (err) {
        return done(err)
      }

      const fn = this.hooks[index]

      if (index === 0) {
        fn(name, options, next)
      } else {
        fn(data, options, next)
      }

      index++
    }
    next(null)
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

