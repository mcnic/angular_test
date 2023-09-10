import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('serverNameInput') serverNameRef: ElementRef;
  @ViewChild('serverContentInput') serverContentRef: ElementRef;

  onAddServer(type: TServerType) {
    this.addServer.emit({
      type,
      name: this.serverNameRef.nativeElement.value,
      content: this.serverContentRef.nativeElement.value,
    });
  }
}
