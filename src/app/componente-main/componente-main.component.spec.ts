import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteMainComponent } from './componente-main.component';

describe('ComponenteMainComponent', () => {
  let component: ComponenteMainComponent;
  let fixture: ComponentFixture<ComponenteMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponenteMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
