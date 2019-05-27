export class Token {
  position: string
  constructor(readonly flowNodeId: string, readonly owningProcessId: number) {
    this.position = flowNodeId
  }
}
