import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StarshipsPageComponent } from './starships-page.container'
import { StarshipsEpics } from './starships.epics'
import { StarshipsService } from './starships.service'
import { StarshipsActions } from './starships.actions'
import { CoreModule } from '../core/core.module'

@NgModule({
  declarations: [ StarshipsPageComponent ],
  exports: [ StarshipsPageComponent ],
  providers: [
    StarshipsEpics,
    StarshipsService,
    StarshipsActions,
  ],
  imports: [ CommonModule, CoreModule ],
})
export class StarshipsModule {}
