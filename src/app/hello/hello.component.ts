import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  //template: `<h2>if directive</h2>`,
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  
  public displayName = true;
  
  public color = "blue";
  
  public forColor = ['red','blue','green','pink'];
  
  public pipes = {
    "firstname":"mark",
    "lastname":"dun"
  }
  
  public date = new Date();

  constructor() { }
     
  ngOnInit() {
  }

}
