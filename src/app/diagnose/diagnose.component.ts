import { Component } from '@angular/core';
import { ImageService } from '../services/image.service';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-diagnose',
  templateUrl: './diagnose.component.html',
  styleUrls: ['./diagnose.component.scss'],
})
export class DiagnoseComponent {
  extractedImageBase64: SafeResourceUrl;
  enhancedImageBase64: SafeResourceUrl;

  ImageForm: FormGroup = new FormGroup({
    image: new FormControl(null),
  });

  imageFile: { file: any; name: string; imageURL: string };

  onImageSelect(event) {
    console.log('image select call hua');
    // console.log(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // console.log(file);
      this.ImageForm.get('image').setValue(file.filename);
      const reader = new FileReader();

      reader.onload = (_event) => {
        this.imageFile = {
          file: file,
          name: file.filename,
          imageURL: reader.result as string,
        };
      };

      // console.log(event.srcElement.files[0]);
      // console.log(file);
      reader.readAsDataURL(file);
    }
  }
  submitImageForm() {
    console.log('form submit hua');
    const formData = new FormData();
    formData.append('file', this.imageFile.file);
    console.log(this.ImageForm.get('image').value);
    this.imageSer.postImage(formData).subscribe((res) => {
      console.log(res);
      this.extractedImageBase64 = this._sanitizer.bypassSecurityTrustResourceUrl(
        'data:image/jpg;charset=utf-8;base64,' + res['encoded_extration_image']
      );
      this.enhancedImageBase64 = this._sanitizer.bypassSecurityTrustResourceUrl(
        'data:image/jpg;charset=utf-8;base64,' + res['encoded_enhanced_image']
      );
    });
  }

  constructor(
    private imageSer: ImageService,
    private _sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {}
}
