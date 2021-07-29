import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarpedidoComponent } from './adicionarpedido.component';

describe('AdicionarpedidoComponent', () => {
  let component: AdicionarpedidoComponent;
  let fixture: ComponentFixture<AdicionarpedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarpedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
