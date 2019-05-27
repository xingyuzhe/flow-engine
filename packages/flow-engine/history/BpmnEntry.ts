import { IBpmnEntryItem, IHistoryData } from '../schema'
import { BpmnHistory } from './BpmnHistory'

export function getTimestamp() {
  return Date.now()
}


export class BpmnEntry {
  name: string
  type: string
  createdAt: number
  finishedAt: number | null
  subHistory?: IHistoryData

  constructor({ name, type, createdAt = getTimestamp(), finishedAt = null, subHistory }: IBpmnEntryItem) {
    this.name = name
    this.type = type
    this.createdAt = createdAt
    this.finishedAt = finishedAt

    if (subHistory) {
      this.subHistory = new BpmnHistory(subHistory)
    }
  }

  setEnd() {
    this.finishedAt = getTimestamp()
  }
}
