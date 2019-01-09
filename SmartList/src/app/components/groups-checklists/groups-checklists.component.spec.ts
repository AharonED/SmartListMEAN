import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsChecklistsComponent } from './groups-checklists.component';

describe('GroupsChecklistsComponent', () => {
  let component: GroupsChecklistsComponent;
  let fixture: ComponentFixture<GroupsChecklistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupsChecklistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupsChecklistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
