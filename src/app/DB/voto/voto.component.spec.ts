import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotoComponent } from './voto.component';

describe('VotoComponent', () => {
  let component: VotoComponent;
  let fixture: ComponentFixture<VotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotoComponent]
    });
    fixture = TestBed.createComponent(VotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
