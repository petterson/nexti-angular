import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarprodutoComponent } from './listarproduto.component';

describe('ListarprodutoComponent', () => {
  let component: ListarprodutoComponent;
  let fixture: ComponentFixture<ListarprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarprodutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
