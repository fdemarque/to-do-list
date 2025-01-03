import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarefa } from '../../../tarefa';
import { CommonModule } from '@angular/common';
import { TasksItemComponent } from "../task-item/tasks-item.component";

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, TasksItemComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent implements OnInit {

  @Input() tarefa: any;
  tarefas: Tarefa[] = [];
  constructor(private taskService:TaskService) { }
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((dado) => {
      this.tarefas = dado;
      console.log(dado);
    });
  }
  ngOnInut(): void {

  }

}
