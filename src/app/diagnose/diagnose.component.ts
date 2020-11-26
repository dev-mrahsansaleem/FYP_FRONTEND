import { Component, NgModule} from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http' 

@Component({
  selector: 'app-diagnose',
  templateUrl: './diagnose.component.html',
  styleUrls: ['./diagnose.component.scss']
})
export class DiagnoseComponent  {
 url="./assets/brain.jpg"
  public imagePath;
  public imgURLs: any;
  public message: string;

 

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURLs = reader.result; 
    }
  }

  selectedFile=null;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  onFileSelect(event){
    this.selectedFile =  event.target.files[0];
  }
  onUpload(){
    let url="http://127.0.0.100:5000/api/v1.0/imageUpload";
    const fd = new FormData();
    fd.append("image",this.selectedFile,this.selectedFile.name);
    this.http.post(url,fd).subscribe(data=>{
      console.log(data);
    })
  }
}