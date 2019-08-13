import { Component, OnInit } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FileUploadService } from '../file-upload.service';
import {saveAs} from 'file-saver';
import { SharingService } from '../sharing.service';

const URL = 'http://localhost:5000/start/upload';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
  providers: [FileUploadService]
})
export class FileUploadComponent implements OnInit {

  attachmentList:any = [];
  folderName :string;
  text = false;

  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'file' });
  parentElement: any;

  constructor(private file : FileUploadService, private share: SharingService) { }

  ngOnInit() {
    //this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
   
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('File uploaded:', item, status, response),
         this.attachmentList.push(JSON.parse(response));
         if(this.attachmentList == null)
         {

         }
         else
         {
           this.yes();
         }
         //this.getFol();
       
    };
  }

  getFol()
  {
    this.folderName = this.share.getFolder();
    //console.log(this.share.Folder);
    /*this.share.folder$.subscribe
    ( message => {
      if( message != null)
      {
        this.folder1 = message;
      }
    } ) */
  }

  yes()
  {
    document.getElementById('change').innerHTML = '';
  }

  

allowDrop(ev) {
  ev.preventDefault();
}

drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  this.text = true;
}

drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

c
}


