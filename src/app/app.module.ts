// This is the application's top-level NgModule definition.
//
// Think of it as a wirings file: telling Angular where to
// find our components and services, and telling Angular-redux
// where to find our reducers, middleware, and epics.

// Basic Angular stuff.
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpModule } from '@angular/http'

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store'
import { NgReduxRouterModule, NgReduxRouter, routerReducer } from '@angular-redux/router'
import { provideReduxForms, composeReducers, defaultFormReducer } from '@angular-redux/form'

// Redux ecosystem stuff.
import { combineReducers } from 'redux'
import * as createLogger from 'redux-logger'
import { combineEpics, createEpicMiddleware } from 'redux-observable'

// Top-level app component constructs.
import { appRoutes } from './app.routes'
import { AppComponent } from './app.component'
import { AppActions } from './app.actions'

// Skywalkers module constructs.
import { SkywalkersModule } from './skywalkers/skywalkers.module'
import { SkywalkersEpics } from './skywalkers/skywalkers.epics'
import { skywalkersReducer } from './skywalkers/skywalkers.reducer'

// Starships module constructs.
import { StarshipsModule } from './starships/starships.module'
import { StarshipsEpics } from './starships/starships.epics'
import { starshipsReducer } from './starships/starships.reducer'

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    NgReduxRouterModule,
    SkywalkersModule,
    StarshipsModule
  ],
  providers: [ AppActions ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    private ngRedux: NgRedux<any>,
    private actions: AppActions,
    devTools: DevToolsExtension,
    ngReduxRouter: NgReduxRouter,
    skywalkersEpics: SkywalkersEpics,
    starshipsEpics: StarshipsEpics
  ) {
    // Define the global store shape by combining our application's
    // reducers together into a given structure.
    const rootReducer = composeReducers(
      defaultFormReducer(),
      combineReducers({
        skywalkers: skywalkersReducer,
        starships: starshipsReducer,
        router: routerReducer,
    }))

    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    ngRedux.configureStore(
      rootReducer,
      {},
      [
        createLogger(),
        createEpicMiddleware(combineEpics(...skywalkersEpics.epics)),
        createEpicMiddleware(combineEpics(...starshipsEpics.epics)),
      ],
      devTools.isEnabled() ? [ devTools.enhancer() ] : [])

    // Enable syncing of Angular router state with our Redux store.
    ngReduxRouter.initialize()

    // Enable syncing of Angular form state with our Redux store.
    provideReduxForms(ngRedux)
  }
}
