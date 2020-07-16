import { Component } from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 10;
  status: string;

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'ofline';
  }

  getServerStatus() {
    return this.status;
  }

  getColor() {
    return this.status === 'online' ? 'green' : 'red';
  }
}

