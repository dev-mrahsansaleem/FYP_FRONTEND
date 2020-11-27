import { Component } from '@angular/core';
import { ImageService } from '../services/image.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-diagnose',
  templateUrl: './diagnose.component.html',
  styleUrls: ['./diagnose.component.scss'],
})
export class DiagnoseComponent {
  ImageForm: FormGroup = new FormGroup({
    image: new FormControl(null),
  });

  imageFile: { file: any; name: string };

  onImageSelect(event) {
    console.log('image select call hua');
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.ImageForm.get('image').setValue(file.filename);
      const reader = new FileReader();

      reader.onload = (_event) => {
        this.imageFile = {
          file: file,
          name: file.filename,
        };
      };

      console.log(event.srcElement.files[0]);
      console.log(file);
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
    });
  }

  constructor(private imageSer: ImageService) {}

  ngOnInit(): void {}
}
