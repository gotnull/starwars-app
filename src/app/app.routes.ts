import { SkywalkersPageComponent } from './skywalkers/skywalkers-page.container'
import { StarshipsPageComponent } from './starships/starships-page.container'

export const appRoutes = [
  { path: '', redirectTo: '/skywalkers', pathMatch: 'full' },
  { path: 'skywalkers', component: SkywalkersPageComponent },
  { path: 'starships', component: StarshipsPageComponent }
]
