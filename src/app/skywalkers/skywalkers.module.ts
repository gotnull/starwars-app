import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SkywalkersPageComponent } from './skywalkers-page.container'
import { SkywalkersEpics } from './skywalkers.epics'
import { SkywalkersService } from './skywalkers.service'
import { SkywalkersActions } from './skywalkers.actions'
import { CoreModule } from '../core/core.module'

@NgModule({
  declarations: [SkywalkersPageComponent],
  exports: [SkywalkersPageComponent],
  providers: [
    SkywalkersEpics,
    SkywalkersService,
    SkywalkersActions,
  ],
  imports: [
    CommonModule,
    CoreModule,
  ],
})
export class SkywalkersModule {}
