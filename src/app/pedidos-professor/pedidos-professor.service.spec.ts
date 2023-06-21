import { TestBed } from '@angular/core/testing';

import { PedidosProfessorService } from './pedidos-professor.service';

describe('PedidosProfessorService', () => {
  let service: PedidosProfessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidosProfessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
