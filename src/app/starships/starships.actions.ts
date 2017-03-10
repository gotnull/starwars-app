import { Injectable } from '@angular/core'
import { Action } from 'redux'

@Injectable()
export class StarshipsActions {
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED(STARSHIPS)'
  static readonly LOAD_FAILED = 'LOAD_FAILED(STARSHIPS)'

  loadSucceeded(payload) {
    return {
      type: StarshipsActions.LOAD_SUCCEEDED,
      payload,
    }
  }

  loadFailed(error) {
    return {
      type: StarshipsActions.LOAD_FAILED,
      error,
    }
  }
}
