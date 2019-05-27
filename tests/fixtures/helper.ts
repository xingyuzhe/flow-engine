export function pushMutipleTasks<A, T>(task: A, queue: T, count = 10): T {
  ;[...Array(count)].map(() => (queue as any).defer(task))
  return queue
}
