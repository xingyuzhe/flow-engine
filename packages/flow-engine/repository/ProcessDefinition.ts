export class ProcessDefinition {

  /** unique identifier */
  id: string

  /**
   * category name which is derived from the targetNamespace attribute in the definitions element
   */
  category: string

  /** label used for display purposes */
  name: string

  /** unique name for all versions this process definitions */
  key: string

  /**
   * description of this process
   */
  description: string

  /** version of this process definition */
  version: number
}
