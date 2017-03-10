import { Injectable } from '@angular/core'
import { Epic } from 'redux-observable'
import { Action, Store } from 'redux'
import { of } from 'rxjs/observable/of'

import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

import { AppActions } from '../app.actions'
import { SkywalkersService } from './skywalkers.service'
import { SkywalkersActions } from './skywalkers.actions'

@Injectable()
export class SkywalkersEpics {
  epics: Epic<Action, Store<any>>[]

  constructor(
    private service: SkywalkersService,
    private actions: SkywalkersActions
  ) {
    this.epics = [ this.loadSkywalkers ]
  }

  loadSkywalkers = action$ => action$
    .ofType(AppActions.LOAD_DATA)
    .switchMap(a => this.service.getAll()
      .map(data => this.actions.loadSucceeded(data))
      .catch(response => of(this.actions.loadFailed(response.status))))
}
