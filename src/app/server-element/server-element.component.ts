import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

export type TServerType = 'server' | 'blueprint';
export type TServer = { type: TServerType; name: string; content: string };

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.scss'],
})
export class ServerElementComponent implements OnChanges {
  @Input() element: TServer;

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
  }
}
