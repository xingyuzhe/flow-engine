import { Process } from 'bpmn-moddle'
import { DeploymentBuilder } from './repository/DeploymentBuilder'
import { ProcessDefinitionQuery } from './repository/ProcessDefinitionQuery'
/**
 * Service providing access to the repository of process definitions and deployments.
 *
 */
export class RepositoryService {
  /**
   * Starts creating a new deployment
   */
  createDeployment(): DeploymentBuilder {
    return new DeploymentBuilder()
  }

  createProcessDefinitionQuery() {
    return new ProcessDefinitionQuery()
  }
  /**
   * Deletes the given deployment.
   * 
   * @param deploymentId
   *          id of the deployment, cannot be null.
   * @throwns RuntimeException if there are still runtime or history process instances or jobs.
   */
  deleteDeployment(deploymentId: string, cascade = false) {
    return
  }
  /**
   * Sets the category of the deployment. Deployments can be queried by category
   */
  setDeploymentCategory(deploymentId: string, category: string) {
    return
  }
  /**
   * Sets the category of the process definition. Process definitions can be queried by category
   */
  setDeploymentKey(deploymentId: string, key: string) {
    return
  }
  setProcessDefinitionCategory(processDefinitionId: string, category: string) {
    return
  }

  /**
   * Gives access to a deployed process model, e.g., a BPMN 2.0 XML file, through utf8 string
   * @param processDefinitionId 
   */
  getProcessModel(processDefinitionId: string): string {
    return 'xml'
  }

  /**
   * Returns the {@link ProcessDefinition} including all BPMN information like additional Properties (e.g. documentation).
   */
  getProcessDefinition(processDefinitionId: string): Process {
    return 1 as any
  }

  /**
   * Returns the {@link BpmnModel} corresponding with the process definition with the provided process definition id. The {@link BpmnModel} is a pojo versions of the BPMN 2.0 xml and can be used to
   * introspect the process definition using regular Java.
   */
  getBpmnModel(processDefinitionId: string): Process {
    return 1 as any
  }
}
