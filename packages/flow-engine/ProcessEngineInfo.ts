export class ProcessEngineInfo {
  name: string
  resourceUrl: string
  error: Error | null
  constructor(processEngineName: string, resourceUrl: string) {
    this.name = processEngineName
    this.resourceUrl = resourceUrl
    this.error = null
    console.log('create ProcessEngineInfo instance')
  }
}
