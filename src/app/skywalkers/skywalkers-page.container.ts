import { Component } from '@angular/core'
import { select } from '@angular-redux/store'
import { Observable } from 'rxjs/Observable'

/**
 * In Redux terminology, a 'container' is a component that knows about the store.
 * It selects data, and marshals it into a set of 'presentational' (or non-redux-connected)
 * components for display.
 *
 * The 'page-level' components that get attached to the router are usually containers
 * but not all containers need to be page-level components.
 */
@Component({
  template: `
    <starwars-item-list
      itemsName="Skywalkers"
      [items]="items$"
      [loading]="loading$"
      [error]="error$">
    </starwars-item-list>
  `
})
export class SkywalkersPageComponent {
  // Shorthand for
  // constructor(ngRedux: NgRedux {
  //  this.items$ = ngRedux.select(['skywalkers', 'items'])
  // })
  @select(['skywalkers', 'items']) readonly items$: Observable<any[]>
  @select(['skywalkers', 'loading']) readonly loading$: Observable<boolean>
  @select(['skywalkers', 'error']) readonly error$: Observable<any>
}
