import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetteComponent } from './recette.container';

describe('RecetteComponent', () => {
  let component: RecetteComponent;
  let fixture: ComponentFixture<RecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
