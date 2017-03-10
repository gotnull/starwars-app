import { Injectable } from '@angular/core'
import { Action } from 'redux'

@Injectable()
export class SkywalkersActions {
  static readonly LOAD_SUCCEEDED = 'LOAD_SUCCEEDED(SKYWALKERS)'
  static readonly LOAD_FAILED = 'LOAD_FAILED(SKYWALKERS)'

  loadSucceeded(payload) {
    return {
      type: SkywalkersActions.LOAD_SUCCEEDED,
      payload,
    }
  }

  loadFailed(error) {
    return {
      type: SkywalkersActions.LOAD_FAILED,
      error,
    }
  }
}
