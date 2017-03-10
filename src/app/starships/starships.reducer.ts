import { AppActions } from '../app.actions'
import { StarshipsActions } from './starships.actions'
import { IPayloadAction } from '../utils/payload-action'

export interface IStarships {
  items: any[]
  loading: boolean
  error?: any
}

const INITIAL_STATE: IStarships = {
  items: [],
  loading: false,
  error: null,
}

export function starshipsReducer(
  state: IStarships = INITIAL_STATE,
  action: IPayloadAction): IStarships {
  switch (action.type) {
    case AppActions.LOAD_DATA:
      return {
        items: [],
        loading: true,
        error: null,
      }
    case StarshipsActions.LOAD_SUCCEEDED:
      return {
        items: action.payload,
        loading: false,
        error: null
      }
    case StarshipsActions.LOAD_FAILED:
      return {
        items: [],
        loading: false,
        error: action.error
      }
  }

  return state
}
