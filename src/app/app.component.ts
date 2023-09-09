import { Component } from '@angular/core';
import { TServer } from './server-element/server-element.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  serverElements: TServer[] = [
    { type: 'server', name: '1', content: '1' },
    { type: 'blueprint', name: '2', content: '2' },
    { type: 'server', name: '3', content: '3' },
  ];

  onServerAdded(newServer: TServer) {
    this.serverElements.push(newServer);
  }
}
