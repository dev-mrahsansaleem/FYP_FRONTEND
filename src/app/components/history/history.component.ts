import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from 'src/app/services/image.service';

export interface PeriodicElement {
  imagename: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { imagename: 'yes', time: '8:AM' },
  { imagename: 'yes', time: '8.00 AM' },
  { imagename: 'yes', time: '8.00 AM' },
];

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  // data: any;
  // constructor(
  //   private imageService: ImageService,
  //   public _sanitizer: DomSanitizer
  // ) {}

  // ngOnInit(): void {
  //   this.imageService.getHistory().subscribe((res) => {
  //     this.data = res['data'].filter((item: any) => {
  //       return item['image'] != 'notFound';
  //     });

  //     this.data.forEach((e: any) => {
  //       const date = new Date(e['createdOn']);
  //       e['createdOn'] =
  //         date.getDate() + ' - ' + date.getMonth() + ' - ' + date.getFullYear();
  //       e['image'] = this._sanitizer.bypassSecurityTrustResourceUrl(
  //         'data:image/jpg;charset=utf-8;base64,' + e['image']
  //       );
  //     });
  //     console.log(this.data);
  //     console.log(res);
  //   });
  // }
  displayedColumns: string[] = ['imagename', 'time'];
  dataSource = ELEMENT_DATA;
  panelOpenState = false;
  username: string = 'Ahsan';
  constructor() {}

  ngOnInit(): void {}
}
