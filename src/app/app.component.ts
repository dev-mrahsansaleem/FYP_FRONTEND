import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HELOO ANGULAR';
  serverData: JSON;
  constructor(private user:UsersService){
    
    this.user.getData().subscribe(data=>{
      console.log(data);
      this.serverData = data;
    })





  }

    // sayHi() {
    //   this.httpClient.get('http://127.0.0.1:5002/').subscribe(data => {
    //     this.serverData = data as JSON;
    //     console.log(this.serverData);
    //   })
    // }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

  }
}
