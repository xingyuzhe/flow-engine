export class SyncHook {
  hooks: Function[]

  constructor() {
    this.hooks = []
  }

  tap(name: string, fn: Function) {
    this.hooks.push(fn)
  }

  call<T>(name: string, options?: T) {
    this.hooks.map(hook => hook(name, options))
  }
}


// test
// const arch = new SyncHook()

// arch.tap("node", (name: string) => {
//   console.log("node", name);
// })
// arch.tap("react", (name: string) => {
//   console.log("react", name);
// })

// arch.call('musion')
