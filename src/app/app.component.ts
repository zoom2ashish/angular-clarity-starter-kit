import { Component } from '@angular/core';

export interface GridRowData {
  id: number;
  city: string;
  state: string;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  _editMap: { [key: string]: boolean } = {}

  public data: GridRowData[] = [
    {
      id: 1,
      city: 'Palo Alto',
      state: 'CA'
    },
    {
      id: 2,
      city: 'New York',
      state: 'NY'
    },
    {
      id: 3,
      city: 'Fremont',
      state: 'CA'
    },
    {
      id: 4,
      city: 'Seattle',
      state: 'WA'
    }
  ];

  onToggleEdit(item: GridRowData) {
    this._editMap[item.id] = !this._editMap[item.id];
  }

  isEditing(item: GridRowData) {
    return !!this._editMap[item.id];
  }
}
