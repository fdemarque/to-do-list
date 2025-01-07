import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule } from '@angular/core';
import { TasksItemComponent } from './tasks-item.component';
import { AppComponent } from '../../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('TasksItemComponent', () => {
  let component: TasksItemComponent;
  let fixture: ComponentFixture<TasksItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TasksItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@NgModule({
  imports: [
    BrowserModule,
    FontAwesomeModule
  ]
})
export class AppModule { }
