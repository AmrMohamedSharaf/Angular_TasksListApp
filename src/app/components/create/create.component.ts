import { Component } from '@angular/core';
import { AppManagerService } from 'src/app/app-manager.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  constructor(private manager: AppManagerService , private router:Router) {}

name : any
content : any
onsubmit(){ 

  const new_task = {name :this.name , content : this.content  }
  this.manager.AddTask(new_task).subscribe(() => this.router.navigate(['/tasks']));
}

}
