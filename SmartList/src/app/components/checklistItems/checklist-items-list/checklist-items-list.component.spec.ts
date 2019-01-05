import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistItemsListComponent } from './checklist-items-list.component';

describe('ChecklistItemsListComponent', () => {
  let component: ChecklistItemsListComponent;
  let fixture: ComponentFixture<ChecklistItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
