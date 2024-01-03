import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelveCardsComponent } from './twelve-cards.component';

describe('TwelveCardsComponent', () => {
  let component: TwelveCardsComponent;
  let fixture: ComponentFixture<TwelveCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TwelveCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwelveCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
