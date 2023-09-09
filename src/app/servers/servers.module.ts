import { NgModule } from '@angular/core';
import { ServersComponent } from './servers.component';
import { ServerModule } from '../server/server.module';
import { FormsModule } from '@angular/forms';
import { NgForOf, NgIf } from '@angular/common';

@NgModule({
  declarations: [ServersComponent],
  imports: [ServerModule, FormsModule, NgIf, NgForOf],
  exports: [ServersComponent],
  bootstrap: [ServersComponent],
})
export class ServersModule {}
