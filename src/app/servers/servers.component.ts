import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})


export class ServersComponent implements OnInit {

  allowNewServers = false;
  serverCreationStatus = 'No Servers Created';
  serverName = 'Apple Server';
  serverCreated = false;

  //data binding assignment
  userName = 'Bhavin Shah';

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = 'Server Created! Name is'+this.serverName;
  }


  ngOnInit() {
  }
}
