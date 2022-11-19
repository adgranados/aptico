import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpotunidadesComponent } from './opotunidades.component';

describe('OpotunidadesComponent', () => {
  let component: OpotunidadesComponent;
  let fixture: ComponentFixture<OpotunidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpotunidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpotunidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
