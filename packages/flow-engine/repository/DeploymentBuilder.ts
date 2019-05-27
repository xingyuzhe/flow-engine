import { Deployment } from './Deployment'
import * as BpmnModdle from '../../bpmn-elements'

export class DeploymentBuilder {
  /**
   * Deploys all provided sources to the Activiti engine.
   */
  async deploy(xml: string): Promise<Deployment> {
    const moddleContext = await BpmnModdle.loadBpmnXml(xml)
    const deployment = new Deployment()
    // deployment.addDefinition(definitionsElement.id, {
    //   id: definitionsElement.id,
    //   moddleContext
    // })
    return deployment
  }
}
