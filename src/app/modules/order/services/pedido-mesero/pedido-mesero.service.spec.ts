import { TestBed } from '@angular/core/testing';

import { PedidoMeseroService } from './pedido-mesero.service';

describe('PedidoMeseroService', () => {
  let service: PedidoMeseroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PedidoMeseroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
