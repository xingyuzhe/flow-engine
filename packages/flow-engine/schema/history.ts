// import { BpmnEntry } from '../history/BpmnEntry'

export interface IBpmnEntryItemBasic {
  name: string
  type: string
  createdAt: number
  finishedAt: number | null
}

export interface IBpmnEntryItem extends IBpmnEntryItemBasic {
  subHistory?: IHistoryData
}

export interface IHistoryData {
  historyEntries: IBpmnEntryItem[]
  createdAt: number
  finishedAt: number | null
}
