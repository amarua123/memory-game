import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'memory';
  cardNo = 6
  isSix = true
  toggle(){
    if(this.cardNo == 6){
      this.cardNo = 12
      this.isSix = false
    }else{
      this.cardNo = 6
      this.isSix = true
    }
  }
}
