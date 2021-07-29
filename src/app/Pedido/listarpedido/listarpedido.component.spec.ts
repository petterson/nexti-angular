import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarpedidoComponent } from './listarpedido.component';

describe('ListarpedidoComponent', () => {
  let component: ListarpedidoComponent;
  let fixture: ComponentFixture<ListarpedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarpedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarpedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
