import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidosProfessorComponent } from './pedidos-professor.component';

describe('PedidosProfessorComponent', () => {
  let component: PedidosProfessorComponent;
  let fixture: ComponentFixture<PedidosProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosProfessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PedidosProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
