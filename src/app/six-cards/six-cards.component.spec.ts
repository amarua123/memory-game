import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixCardsComponent } from './six-cards.component';

describe('SixCardsComponent', () => {
  let component: SixCardsComponent;
  let fixture: ComponentFixture<SixCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SixCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SixCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
