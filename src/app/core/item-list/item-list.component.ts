import { Component, Input } from '@angular/core'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'starwars-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  @Input() itemsName: string
  @Input() items: Observable<any[]>
  @Input() loading: Observable<boolean>
  @Input() error: Observable<any>

  // Since we're observing an array of items, we need to set up a 'trackBy'
  // parameter so Angular doesn't tear down and rebuild the list's DOM every
  // time there's an update.
  getItemName(_, item) {
    return item.name
  }
}
