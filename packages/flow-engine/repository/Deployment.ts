export class Deployment {
  id: string
  name: string
  deploymentTime: Date
  category: string
  key: string

  definitions: any

  addDefinition(key: string, value: any) {
    this.definitions = this.definitions || new Map()
    this.definitions.set(key, value)
  }
}
