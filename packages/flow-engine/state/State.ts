import { Token } from './Token'
import { CallActivityToken } from './CallActivityToken'
import { TokenInStateData, IStateData } from '../schema'

export class State {
  tokens: TokenInStateData[]

  constructor(state: IStateData) {
    this.tokens = state.tokens || []
  }

  createTokenAt(flowNodeId: string, owningProcessId: number, calledProcessId?: number): TokenInStateData {
    let newToken

    if (calledProcessId) {
      newToken = new CallActivityToken(flowNodeId, owningProcessId, calledProcessId)
    } else {
      newToken = new Token(flowNodeId, owningProcessId)
    }

    this.tokens.push(newToken)

    return newToken
  }

  removeFirstTokenAt(flowNodeId: string) {
    let tokenHasBeenRemoved = false
    const newTokens: TokenInStateData[] = []
    
    this.tokens.map(token => {
      if (tokenHasBeenRemoved) {
        newTokens.push(token)
      } else if (token.position === flowNodeId) {
        tokenHasBeenRemoved = true
      } else {
        newTokens.push(token)
      }
    })

    this.tokens = newTokens
  }

  removeAllTokensAt(flowNodeId: string) {
    this.tokens = this.tokens.filter(token => token.position !== flowNodeId)
  }

  hasTokensAt(flowNodeId: string): boolean {
    return this.findTokens(flowNodeId).length > 0
  }

  findTokens(flowNodeId: string): TokenInStateData[] {
    return this.tokens.reduce((prev: TokenInStateData[], token) => {
      if (token.position === flowNodeId) {
        prev.push(token)
      }

      if (token instanceof CallActivityToken && token.subState) {
        prev.concat(token.subState.tokens.filter(subToken => subToken.position === flowNodeId))
      }

      return prev
    }, [])
  }

  findCallActivityTokens(): TokenInStateData[] {
    return this.tokens.filter(token => token instanceof CallActivityToken && token.calledProcessId)
  }

  getFirstToken(flowNodeId: string): TokenInStateData | null {
    return this.findTokens(flowNodeId)[0] || null
  }

  numberOfTokensAt(flowNodeId: string | undefined) {
    if (!flowNodeId) {
      return 0
    }

    return this.tokens.filter(token => token.position === flowNodeId).length
  }
}
