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

  ngOnInit() {
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
    button.setAttribute('style','margin-left:20px; margin-top:20px; border-radius:5px; display:block; width:100px; background-color:#d1dade');
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

 

}
