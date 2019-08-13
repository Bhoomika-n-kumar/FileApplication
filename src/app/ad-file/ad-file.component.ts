import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const URL = "http:localhost/5000/start/upload";

/*declare const  allowDrop: any;

declare const  drag: any;

declare const  drop: any;*/


@Component({
  selector: 'app-ad-file',
  templateUrl: './ad-file.component.html',
  styleUrls: ['./ad-file.component.css']
})
export class AdFileComponent implements OnInit {

  /* public uploader:FileUploader = new FileUploader({url: URL});
    public hasBaseDropZoneOver:boolean = false;
    public hasAnotherDropZoneOver:boolean = false;

    public fileOverBase(e:any):void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e:any):void {
        this.hasAnotherDropZoneOver = e;
    } */
  
  constructor() { }

  ngOnInit() {
  }

  /*Drop(ev)
  {
    allowDrop(ev);
  }

  draag(ev)
  {
    drag(ev);
  }

  droop(ev)
  {
    drop(ev);
  }*/

  /** allowDrag(ev)
  {
    ev.preventDefault();
  }

  dragStart(ev)
  {

    let id1 = ev.target.id;
  }

  drop(ev)
  {
    ev.target.append(document.getElementById('imgId'));
  }  **/

  /*public imageSrc = 'https://i.pinimg.com/236x/a6/b5/a4/a6b5a433da4eca885f0f868bc9582567.jpg';
  
  onDropHandler(object){
     console.log("event "+ JSON.stringify(object));
     this.imageSrc = object.event.target.result;
  } */

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }

  drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

}  
