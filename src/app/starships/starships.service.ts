import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'

// A fake API on the internets.
const STARSHIPS_URL = 'https://swapi.co/api/starships?format=json'

@Injectable()
export class StarshipsService {
  constructor(private http: Http) {}

  getAll() {
    return this.http.get(STARSHIPS_URL)
      .map(resp => resp.json())
      .map(records => records.results.map(
        record => ({
          name: record.name,
        })))
  }
}
