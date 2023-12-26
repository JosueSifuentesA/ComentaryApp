import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentaryHandlerComponent } from './comentary-handler.component';

describe('ComentaryHandlerComponent', () => {
  let component: ComentaryHandlerComponent;
  let fixture: ComponentFixture<ComentaryHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentaryHandlerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComentaryHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
