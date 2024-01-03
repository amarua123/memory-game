import { Component } from '@angular/core';

@Component({
  selector: 'app-twelve-cards',
  templateUrl: './twelve-cards.component.html',
  styleUrl: './twelve-cards.component.css'
})
export class TwelveCardsComponent {
  photos = [1, 2, 3, 4, 7, 8].map(value => "" + value);
  photosLocs:string[] = [];

  revealed: boolean[] = [];
  selectedIndices: number[] = [];
  moves = 0;
  misses = 0;

  ngOnInit(): void {
    this.initializeGame();
  }
  initializeGame(){
    this.photosLocs = [...this.photos, ...this.photos];
    this.revealed = Array(this.photosLocs.length).fill(false);
    this.shuffleArray();
  }
  shuffleArray(){
    this.photosLocs = this.photosLocs.map(photo => this.getPhoto(photo));
    for(let i = this.photosLocs.length-1; i > 0; i--){
      const j = Math.floor(Math.random()*(i+1));
      const temp = this.photosLocs[i];
      this.photosLocs[i] = this.photosLocs[j];
      this.photosLocs[j] = temp;
    }
  }
  getPhoto(str:string){
    return "./assets/images/"+str+".png";
  }

  handleClick(index: number): void {
    if (this.revealed[index] || this.selectedIndices.length === 2) {
      return;
    }
    this.revealed[index] = true;
    this.selectedIndices.push(index);
    if (this.selectedIndices.length === 2) {
      this.moves++;
      setTimeout(() => this.checkMatch(), 1000);
    }
  }
  checkMatch(): void {
    const [index1, index2] = this.selectedIndices;
    if (this.photosLocs[index1] === this.photosLocs[index2]) {
      this.revealed[index1] = true;
      this.revealed[index2] = true;
      this.photosLocs[index1] = this.getPhoto("matched");
      this.photosLocs[index2] = this.getPhoto("matched");
      this.checkGameEnd();
    } else {
      this.misses++;
      this.revealed[index1] = false;
      this.revealed[index2] = false;
    }
    this.selectedIndices = [];
  }
  checkGameEnd(): void {
    if (this.revealed.every((value) => value)) {
      alert(`Game Over! Total Moves: ${this.moves}, Total Misses: ${this.misses}`);
      this.initializeGame();
      this.moves = 0;
      this.misses = 0;
    }
  }
}
