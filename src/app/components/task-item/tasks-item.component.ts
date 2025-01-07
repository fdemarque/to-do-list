import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tarefa } from '../../../tarefa';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks-item',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './tasks-item.component.html',
  styleUrl: './tasks-item.component.css'
})
export class TasksItemComponent {
  @Input() tarefa!: Tarefa;
  @Output() onDeleteTask = new EventEmitter<Tarefa>();

  faTimes = faTimes

  onDelete(tarefa: Tarefa) {
    this.onDeleteTask.emit(tarefa);
  }

}
