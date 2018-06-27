import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers = false;
  serverCreationStatus = 'No Servers Created';

  constructor() {
    setTimeout(()=>{
      this.allowNewServers=true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer()
  {
    this.serverCreationStatus = 'Server was Created';
  }
}
