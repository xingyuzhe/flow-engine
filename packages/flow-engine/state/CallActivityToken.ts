import { Token } from './Token'
import { IStateData } from '../schema'

export class CallActivityToken extends Token {
  substate: IStateData
  constructor(readonly flowNodeId: string, readonly owningProcessId: number, readonly calledProcessId: number) {
    super(flowNodeId, owningProcessId)
    this.substate = null
  }
}
