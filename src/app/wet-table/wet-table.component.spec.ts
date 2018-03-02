import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WetTableComponent } from './wet-table.component';

describe('WetTableComponent', () => {
  let component: WetTableComponent;
  let fixture: ComponentFixture<WetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
