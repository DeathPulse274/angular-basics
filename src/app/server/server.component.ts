import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Servers were Created';
  serverName = '';

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server Was Created';
  }

  onUpdateServerName(event: any) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

}
