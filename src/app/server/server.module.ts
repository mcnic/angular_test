import { NgModule } from '@angular/core';
import { ServerComponent } from './server.component';
import { NgClass, NgStyle } from '@angular/common';

@NgModule({
  declarations: [ServerComponent],
  exports: [ServerComponent],
  bootstrap: [ServerComponent],
  imports: [NgStyle, NgClass],
})
export class ServerModule {}
