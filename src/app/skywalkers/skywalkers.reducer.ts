import { AppActions } from '../app.actions'
import { SkywalkersActions } from './skywalkers.actions'
import { IPayloadAction } from '../utils/payload-action'

export interface ISkywalkers {
  items: any[]
  loading: boolean
  error?: any
}

const INITIAL_STATE: ISkywalkers = {
  items: [],
  loading: false,
  error: null,
}

export function skywalkersReducer(
  state: ISkywalkers = INITIAL_STATE,
  action: IPayloadAction): ISkywalkers {
  switch (action.type) {
    case AppActions.LOAD_DATA:
      return {
        items: [],
        loading: true,
        error: null,
      }
    case SkywalkersActions.LOAD_SUCCEEDED:
      return {
        items: action.payload,
        loading: false,
        error: null
      }
    case SkywalkersActions.LOAD_FAILED:
      return {
        items: [],
        loading: false,
        error: action.error
      }
  }

  return state
}
