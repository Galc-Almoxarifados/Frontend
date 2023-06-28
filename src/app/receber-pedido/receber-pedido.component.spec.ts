import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberPedidoComponent } from './receber-pedido.component';

describe('ReceberPedidoComponent', () => {
  let component: ReceberPedidoComponent;
  let fixture: ComponentFixture<ReceberPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceberPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReceberPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
