import { BpmnEntry, getTimestamp } from './BpmnEntry'
import { IHistoryData } from '../schema'
import * as EndEvent from '../../bpmn-elements/activities/EndEvent'
import * as Utils from '../utils'

export class BpmnHistory {
  createdAt: number
  finishedAt: number | null
  historyEntries: BpmnEntry[]
  constructor(historyData?: IHistoryData) {
    if (historyData) {
      this.historyEntries = historyData.historyEntries.map(entryItem => new BpmnEntry(entryItem))
      this.createdAt = historyData.createdAt
      this.finishedAt = historyData.finishedAt
    } else {
      this.createdAt = getTimestamp()
      this.finishedAt = null
    }
  }

  // @todo
  addEntry(flowNode: any) {
    this.historyEntries.push(new BpmnEntry(flowNode))
  }

  getLastEntry(flowNodeId: string) {
    let lastEntry = null
    const last =  this.historyEntries.length - 1

    for (let i = last; i >= 0; i--) {
        const entry = this.historyEntries[i]
        if (entry.name === flowNodeId) {
            lastEntry = entry
            break
        }
    }

    return lastEntry
  }

  setEnd(flowNodeId: string) {
    const lastEntry = this.getLastEntry(flowNodeId)
    lastEntry.setEnd()

    if (EndEvent.isEndEvent(lastEntry.type)) {
      this.finishedAt = lastEntry.finishedAt
    }
  }

  isFinished() {
    return !!this.finishedAt
  }

  hasBeenVisited(flowNodeId: string) {
    return Utils.flattenByKey(this.historyEntries, 'subHistory').filter(entry => entry.name === flowNodeId)
  }
}
