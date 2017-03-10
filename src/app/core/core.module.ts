import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SpinnerComponent } from './spinner/spinner.component'
import { ErrorWellComponent } from './error-well/error-well.component'
import { ItemListComponent } from './item-list/item-list.component'

@NgModule({
  declarations: [
    SpinnerComponent,
    ErrorWellComponent,
    ItemListComponent,
  ],
  providers: [],
  imports: [ CommonModule ],
  exports: [
    SpinnerComponent,
    ErrorWellComponent,
    ItemListComponent,
  ],
})
export class CoreModule {}
