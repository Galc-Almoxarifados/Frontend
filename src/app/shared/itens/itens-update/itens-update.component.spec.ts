import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItensUpdateComponent } from './itens-update.component';

describe('ItensUpdateComponent', () => {
  let component: ItensUpdateComponent;
  let fixture: ComponentFixture<ItensUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItensUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItensUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
