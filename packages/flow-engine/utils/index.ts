export function flattenByKey<T, K extends keyof T>(arr: T[] = [], key: K) {
  let ans = arr.slice(0)

  arr.map(obj => {
    if (Array.isArray(obj[key])) {
      ans = ans.concat(obj[key] as any)
    }
  })

  return ans
}
