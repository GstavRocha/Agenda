import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibiContatoComponent } from './exibi-contato.component';

describe('ExibiContatoComponent', () => {
  let component: ExibiContatoComponent;
  let fixture: ComponentFixture<ExibiContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExibiContatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExibiContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
