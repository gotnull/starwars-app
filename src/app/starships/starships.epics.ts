import { Injectable } from '@angular/core'
import { Epic } from 'redux-observable'
import { Action, Store } from 'redux'
import { AppActions } from '../app.actions'
import { of } from 'rxjs/observable/of'

import 'rxjs/add/operator/catch'
import 'rxjs/add/operator/map'

import { StarshipsService } from './starships.service'
import { StarshipsActions } from './starships.actions'

@Injectable()
export class StarshipsEpics {
  epics: Epic<Action, Store<any>>[]

  constructor(
    private service: StarshipsService,
    private actions: StarshipsActions
  ) {
    this.epics = [ this.loadStarships ]
  }

  loadStarships = action$ => action$
    .ofType(AppActions.LOAD_DATA)
    .switchMap(a => this.service.getAll()
      .map(data => this.actions.loadSucceeded(data))
      .catch(response => of(this.actions.loadFailed(response.status))))
}
