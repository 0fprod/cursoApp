import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriventemplateComponent } from './driventemplate.component';

describe('DriventemplateComponent', () => {
  let component: DriventemplateComponent;
  let fixture: ComponentFixture<DriventemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriventemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriventemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
