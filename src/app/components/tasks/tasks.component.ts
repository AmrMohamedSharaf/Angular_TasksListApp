import { Component } from '@angular/core';
import { Task } from 'src/Task';
import { AppManagerService } from 'src/app/app-manager.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
 tasks: Task[] = [];

  constructor(private manager: AppManagerService) {}

  getTasks(): void {
   }

  ngOnInit(): void {
    this.manager.getTasks()
    .subscribe(retrevieddata => this.tasks = retrevieddata); 
  }

TaskSelected?: Task;
onSelect(task: Task): void {
  this.TaskSelected = task;
}

deletetask(task:any){
  this.manager.DeleteTask(task.id).subscribe(() => this.tasks = this.tasks.filter((task1:any)  => task1.id != task.id ));
  this.TaskSelected = undefined;
  
}
}
