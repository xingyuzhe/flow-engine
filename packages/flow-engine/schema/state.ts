import { Token } from '../state/Token'
import { CallActivityToken } from '../state/CallActivityToken'

export type TokenInStateData = Token | CallActivityToken
export interface IStateData {
  tokens: TokenInStateData[] | null
}
