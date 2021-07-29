import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarprodutoComponent } from './adicionarproduto.component';

describe('AdicionarprodutoComponent', () => {
  let component: AdicionarprodutoComponent;
  let fixture: ComponentFixture<AdicionarprodutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarprodutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarprodutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
