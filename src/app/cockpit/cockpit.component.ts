import { Component, EventEmitter, Output } from '@angular/core';
import {
  TServer,
  TServerType,
} from '../server-element/server-element.component';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.scss'],
})
export class CockpitComponent {
  @Output() addServer = new EventEmitter<TServer>();

  onAddServer(
    type: TServerType,
    nameInput: HTMLInputElement,
    serverContentInput: HTMLInputElement,
  ) {
    console.log(nameInput.value);
    this.addServer.emit({
      type,
      name: nameInput.value,
      content: serverContentInput.value,
    });
  }
}
