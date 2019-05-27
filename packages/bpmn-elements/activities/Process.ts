import { BaseElement } from './BaseElement'
// import { SequenceFlow } from './SequenceFlow'
import { BpmnElementTypes, BpmnModdleOrigin } from '../moddle'

export function isProcessType($type: string) {
  return $type === BpmnElementTypes.BpmnProcess
}

export class Process extends BaseElement {
  static $type = BpmnElementTypes.BpmnProcess
  isExecutable: boolean
  isEnded: boolean = false

  init() {
    // this.isExecutable = this.$element.isExecutable
  }

  // children: object = {}
  // // 所有走过的路
  // paths: object = {}
  // // 所有的输出流
  // sequenceFlows = []
  // // 激活中的节点
  // activeArtifacts: number = 0
  // stopInitialized: boolean = false
  // startEventElements = []
  // variables: object = {}
  // isEnded: boolean = false

  // private init() {
  //   // 取得所有入口节点
  //   this.startEventElements = Helper.getStartEvents(this.element)

  //   // 创建所有输出流的实例(实际上就是所有流, 每个流都即是输入又是输出)
  //   this.sequenceFlows = Helper.getAllOutboundSequenceFlows(this.context).map(reference => {
  //     let ActivityClass = Helper.element2Activity(reference.element)
  //     return new ActivityClass(reference.element, this)
  //   })
  // }

  // run(variables) {
  //   this.emit('start', this);
  //   if (!this.startEventElements.length) {
  //     debug('error: no startEvent found')
  //     return this.emit('end', this);
  //   }
  //   this.variables = Object.assign({}, variables);
  //   const startActivity = this.getChildActivityById(this.startEventElements[0].id);
  //   this.execute(startActivity)
  // }

  // signal(elementId, variables) {
  //   const childActivity = this.getChildActivityById(elementId);
  //   childActivity.signal(variables);
  // }

  // // take(target) {
  // //   this.execute(target);
  // // }

  // // 执行子节点
  // execute(childActivity) {
  //   debug('execute', childActivity.id);
  //   if (childActivity.outbound) {
  //     // 监听所有输出流的事件
  //     const takenHandler = sequenceFlow => {
  //       this.activeArtifacts--;

  //       sequenceFlow.removeListener('discarded', discardedHandler)

  //       const child = this.getChildActivityById(sequenceFlow.target.id);

  //       this.paths[sequenceFlow.element.id] = sequenceFlow;

  //       this.execute(child);
  //     }

  //     const discardedHandler = sequenceFlow => {
  //       this.activeArtifacts--;
  //       sequenceFlow.removeListener('taken', takenHandler);
  //     }

  //     childActivity.outbound.forEach((sequenceFlow) => {
  //       this.activeArtifacts++;
  //       sequenceFlow.once('taken', takenHandler);
  //       sequenceFlow.once('discarded', discardedHandler);
  //     });
  //   }

  //   // 把子节点的事件响应代理都根节点process上
  //   const emitHandler = (error, eventName, activity?) => {
  //     let debugStr = `FIRE_EVENT: ${eventName}`
  //     if (error) {
  //       debugStr += `:${error.message}`
  //       debug(debugStr)
  //       this.emit(eventName, error)
  //       return
  //     }

  //     // let debugStr = `${eventName}-${activity.id}(${activity.name || ''})`
  //     debugStr += `-${activity.id}(${activity.name || ''})`
  //     debug(debugStr)
  //     this.emit(eventName, activity)
  //   }

  //   const waitHandler = activity => {
  //     emitHandler(null, 'wait', activity)
  //   }

  //   childActivity.once('start', activity => {
  //     emitHandler(null, 'start', activity)
  //   });

  //   childActivity.once('end', (activity) => {
  //     this.activeArtifacts--;
  //     debug('completed', activity.element.id, 'activeArtifacts', this.activeArtifacts);
  //     emitHandler(null, 'completed', activity)
  //     childActivity.removeListener('wait', waitHandler)

  //     // 如果执行结束的是一个结束节点, 说明整个流程执行结束
  //     if (childActivity.isEndEvent) {
  //       this.stop()
  //     }
  //   });

  //   childActivity.once('error', e => {
  //     emitHandler(e, 'error')
  //   });

  //   childActivity.on('wait', waitHandler)

  //   this.activeArtifacts++;
  //   // 调用子节点的run方法, 一直碰到用户任务这种需要手动操作的节点才停下来
  //   childActivity.run(this.variables);
  // }

  // stop() {
  //   if (this.stopInitialized) return;
  //   debug('stop', this.element.id, `active artifacts: ${this.activeArtifacts}`);
  //   if (this.activeArtifacts !== 0) return;

  //   this.stopInitialized = true;

  //   Object.keys(this.children).forEach((id) => {
  //     const child = this.children[id];
  //     if (child.endListener) {
  //       child.removeListener('end', child.endListener);
  //     }
  //   });

  //   this.isEnded = true;
  //   this.emit('end', this);
  // }

  // getChildActivityById(elementId) {
  //   if (this.children[elementId]) return this.children[elementId];

  //   const element = this.context.elementsById[elementId];
  //   const ActivityClass = Helper.element2Activity(element)
  //   const child = new ActivityClass(element, this);

  //   this.children[elementId] = child;

  //   return child;
  // }
}
