import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { SharingService } from '../sharing.service';
import { Login } from '../login';

@Component({
  selector: 'app-adfolder',
  templateUrl: './adfolder.component.html',
  styleUrls: ['./adfolder.component.css'],
  providers: [SharingService]
})
export class AdfolderComponent implements OnInit {
  
  allUser : Login[];
  getUser:any;
  txt: any;
  dummy:any = "heelo";
  loginmodel;
  public array = [];
  data: any;

  constructor(private logSer : LoginService, private router: Router, private share: SharingService) { }

  ngOnInit() 
  {
    /*old this.loginmodel = this.logSer.getData(); old*///.subscribe(data => {this.loginmodel = data});
    //this.getAllUser();
    this.getDataCom();
  }

  message1:string  = ('');
  text1:string;

  getDataCom()
  {
    this.getUser = this.logSer.getData();
  }

  getAllUser()
  {
    this.logSer.getAllUser().subscribe(
      (data: Login[]) => {
        this.allUser = data;
        console.table(this.allUser);
      });;
  }


 myFunction() 
 {
  //console.log(this.loginmodel);
  //this.message1 = this.loginmodel.username;
  //let txt:string;
  let person:string = prompt("Please enter folder name:");
  this.txt =  person ;
  
  if (person == null || person == "") {

  } 
  /*else if(this.array[].contains(this.txt))
  {

  }*/
  else 
  {
    //let text1;
    for (var i = 0; i <= this.array.length; i++)
    {
      if(this.array[i] == this.txt)
      {
        alert('Folder exists.');
        
      }
    }

      this.array.push(person);
    
    this.textchange();
    //this.text1 = txt;
    let button = document.createElement('button');
    let b = document.createTextNode(this.txt + ' ');
    button.setAttribute('style','outline:none; border:none; cursr: pointer; margin-left:20px; margin-top:20px; height :30px ; display:block; width:90px; background-color:#d1dade;');
    let css = "button:hover { background-color: #989fab} ";
    button.setAttribute('class','route1');
    var router = document.getElementById("route");
    router.appendChild(button);
    button.appendChild(b);    
    button.addEventListener("click", () => {this.share.setFolder (person);});
  }  
} 
  
  textchange()
  {
    document.getElementById('folder').innerHTML = '';
  }

  

// Declare a loop variable


// List View
 listView() {
  var elements = document.getElementsByClassName("route1");
  var i;
  for (i = 0; i < elements.length; i++) 
  {
    elements[i].setAttribute('style','outline:none; border:none; cursr: pointer; margin-left:20px; margin-top:10px; height :30px ; display:block; background-color:#d1dade;width:1000px;text-align:left; padding:5px;');
  }
}

// Grid View
 gridView() {
  var elements = document.getElementsByClassName("route1");
  var i;
  for (i = 0; i < elements.length; i++) {
    elements[i].setAttribute('style','outline:none; border:none; cursr: pointer; margin-left:20px; margin-top:10px; height :67px ; display:inline; background-color:#d1dade;width:90px;text-align:center; padding:5px;');
  }
}
}
