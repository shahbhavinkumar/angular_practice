import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
serverID:number = 4200;
serverStatus:string = 'offline';
 
getServerIDStatus()
{
  return this.serverID +" "+this.serverStatus;
}

}
