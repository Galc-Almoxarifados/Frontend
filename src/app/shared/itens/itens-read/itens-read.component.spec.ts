import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensReadComponent } from './itens-read.component';

describe('ItensReadComponent', () => {
  let component: ItensReadComponent;
  let fixture: ComponentFixture<ItensReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
