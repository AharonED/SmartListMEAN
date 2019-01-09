import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsHLLComponent } from './groups-hll.component';

describe('GroupsHLLComponent', () => {
  let component: GroupsHLLComponent;
  let fixture: ComponentFixture<GroupsHLLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsHLLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsHLLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
