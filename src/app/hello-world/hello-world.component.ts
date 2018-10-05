import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
  <h2>welcome {{name}}</h2>
  
  <h2>{{2+2}}</h2>
  
  <h2>{{"welcome " + name}}</h2>
  
  <h2>{{name.length}}</h2>
  
  <h2>{{name.toUpperCase()}}</h2>
  
  <h2>{{greetUser()}}</h2>
  
  <!--<h2>{{a = 2+2}}</h2>gives err we not assign variable and int-->
  
  <h2>{{siteUrl}}</h2>
  
  <input [id] = "myId" type="text" value="Vishwas">
  
  <input id = "{{myId}}" type="text" value="Vishwas">
  
  <input [disabled] = "isDisabled" id = "{{myId}}" type="text" value="Vishwas">
  
  <input bind-disabled = "isDisabled" id = "{{myId}}" type="text" value="Vishwas">
  
  <h2 class = "text-success">evolution</h2>
  
  <h2 [class] = "successClass" >evolution</h2>
  
  <h2 [class.text-danger] = "hasError" >evolution class binding</h2>
  
  <h2 [ngClass] = "messageClasses" >evolution directive</h2>
  
  <h2 [style.color] = "'orange'">style binding</h2>
  
  <h2 [style.color] = " hasError ? 'red' : 'green' ">style binding with trnary</h2>
  
  <h2 [ngStyle] = "titleStyles">style binding 2</h2>
  
  <button (click)="onClick($event)">Greet Event Binding</button>{{greeting}}
  
  <h2>{{"Get Event type " + greetingEvent}}</h2>
  
  <button (click)="greeting = 'Welcome greeting Event' ">Greet Event</button><br><br>
  
  <input #myRef type = "text">
  
  <button (click) = "logMessages(myRef.value)"> template ref variable</button><br>
  
  2 way binding<input [(ngModel)] = "twowaybinding" type = "text">
  
  {{"2 way binding result " + twowaybinding}}
  `,
  
  styles: [`
  .text-success{
    color: green;
  }
  .text-danger{
    color:red;
  }
  `]

})

export class HelloWorldComponent implements OnInit {
  
  public name = 'kumar vishwas';
  
  public myId = "proprty binding";
  
  public isDisabled = true; //false and true
  
  public successClass = "text-success";
  
  public hasError = true;
  
  public messageClasses = {
    "text-success":this.hasError,
    "text-danger":!this.hasError
  }
  
  public titleStyles = {
    "color" : "green",
    "fontStyle": "italic"
  }
  
  public greeting = "";
  
  public greetingEvent = "";
  
  public twowaybinding = "";

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
    return "Hello " + this.name;
  }

  onClick(event){
    console.log("clickEvent");
    
    console.log(event);
    
    this.greeting = "Welcome Event Binding";
    //get event type which pass on onClick(event)
    this.greetingEvent = event.type;
  }

  logMessages(value){
    
    console.log(value);
  }


}
