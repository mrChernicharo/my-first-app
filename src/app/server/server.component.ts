import { Component } from '@angular/core'

@Component({
  // selector: '.app-server',
  // selector: '[app-server]',
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    p {
      color: darkblue;
      margin: 2px 16px;
    }
  `]
})
export class ServerComponent {
  serverId: number[] = [10, 20, 30];
  status: string = 'offline';

  getServerStatus() {
    return this.status;
  }
}

