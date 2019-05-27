import * as fs from 'fs'
import * as path from 'path'
import { BpmnModdleOrigin } from './BpmnModdleOrigin'
import { BpmnElementTypes } from './enums'

export function loadBpmnXml(name: string) {
  const xmlStr = fs.readFileSync(path.resolve(__dirname, '../../flow-engine-examples/', name)).toString('utf8')
  return loadBpmnString(xmlStr)
}

export function loadBpmnString(xmlStr: string): Promise<BpmnModdleOrigin.Context> {
  return new Promise((resolve, reject) => {
    const moddle = new BpmnModdleOrigin()
    moddle.fromXML(xmlStr, (err: Error | null, definitionsElement, moddleContext) => {
      // console.log(definitions.rootElements[0].$type)
      if (err) {
        reject(err)
      } else {
        resolve(moddleContext)
      }
    })
  })
}

export function getProcessElement(definitionsElement: BpmnModdleOrigin.Definitions): BpmnModdleOrigin.Process {
  return definitionsElement.rootElements[0] as BpmnModdleOrigin.Process
}

export function getStartEventElement(definitionsElement: BpmnModdleOrigin.Definitions): BpmnModdleOrigin.StartEvent {
  const processElement = getProcessElement(definitionsElement)
  const startEvents = processElement.flowElements.filter(element => element.$type === BpmnElementTypes.BpmnStartEvent)
  return startEvents[0] as BpmnModdleOrigin.StartEvent
}

export function getLocalName($type: string) {
  if (!$type) {
    return ''
  }
  const name = $type.split(':')[1]
  return name[0].toUpperCase() + name.slice(1)
}
