import { AsyncHook } from './AsyncHook'

export class AsyncSeriesBailHook extends AsyncHook {
  async callAsync(...args) {
    // 取出数组的最后一项 即成功后的回调函数
    const done = args.pop()
    let index = 0

    const next = (err?: Error) => {
      if (err) {
        return done(err)
      }

      const fn = this.hooks[index++]
      fn ? fn(...args, next) : done()

      index++
    }
    next()
  }
}
