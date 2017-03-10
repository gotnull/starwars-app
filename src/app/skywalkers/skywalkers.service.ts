import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import 'rxjs/add/operator/map'

const SKYWALKERS_URL = 'https://swapi.co/api/people/?search=skywalker&format=json'

@Injectable()
export class SkywalkersService {
  constructor(private http: Http) {}

  getAll() {
    return this.http.get(SKYWALKERS_URL)
      .map(resp => resp.json())
      .map(records => records.results.map(
        record => ({
          name: record.name,
        })))
  }
}
