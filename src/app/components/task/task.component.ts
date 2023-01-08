import { Component , Input , Output , EventEmitter } from '@angular/core';
import { Task } from 'src/Task';
import { AppManagerService } from 'src/app/app-manager.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  constructor(private manager: AppManagerService) {}

  @Input() task: any;
  @Output() onDeleteTask: EventEmitter<any> = new EventEmitter();


  OnDelete(){
      this.onDeleteTask.emit();
  }
}
