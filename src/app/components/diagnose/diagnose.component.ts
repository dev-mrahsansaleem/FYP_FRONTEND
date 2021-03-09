import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-diagnose',
  templateUrl: './diagnose.component.html',
  styleUrls: ['./diagnose.component.css'],
})
export class DiagnoseComponent implements OnInit {
  //var
  showProgressBar: Boolean = false;
  extractedImageBase64: SafeResourceUrl | any;
  enhancedImageBase64: SafeResourceUrl | any;
  imageFile: { file: any; name: string; imageURL: string } | any;
  // var
  constructor(
    private imageService: ImageService,
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void { }

  onImageSelect(event: any) {
    this.showProgressBar = true;
    // console.log('image select call hua');
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log(file);
      // this.ImageForm.get('image').setValue(file.filename);
      const reader = new FileReader();
      reader.onload = (_event) => {
        this.imageFile = {
          file: file,
          name: file.filename,
          imageURL: reader.result as string,
        };
      };
      reader.readAsDataURL(file);
      this.showProgressBar = false;
    }
  }

  submitImageForm() {
    this.showProgressBar = true;
    // console.log('form submit hua');
    if (this.imageFile) {
      const formData = new FormData();
      formData.append('file', this.imageFile.file);
      // console.log(this.ImageForm.get('image').value);
      var response = this.imageService.postImage(formData);
      if (response) {
        response.subscribe((res: any) => {
          console.log(res);
          this.extractedImageBase64 = this._sanitizer.bypassSecurityTrustResourceUrl(
            'data:image/jpg;charset=utf-8;base64,' +
            res['encoded_extration_image']
          );
          this.enhancedImageBase64 = this._sanitizer.bypassSecurityTrustResourceUrl(
            'data:image/jpg;charset=utf-8;base64,' + res['encoded_enhanced_image']
          );
          this.showProgressBar = false;
        });
      }
    }
  }
}
