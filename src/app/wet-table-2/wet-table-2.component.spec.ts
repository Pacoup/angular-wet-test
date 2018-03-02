import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WetTable2Component } from './wet-table-2.component';

describe('WetTable2Component', () => {
  let component: WetTable2Component;
  let fixture: ComponentFixture<WetTable2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetTable2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
