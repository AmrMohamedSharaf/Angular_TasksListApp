import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from 'src/Task';
import { Tasks } from 'src/DB';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppManagerService {
  private url = "http://localhost:3000/posts"
  constructor(private http: HttpClient) { }
  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  DeleteTask(id : number) : Observable<Task[]> {
    const new_url = `${this.url}/${id}`;
    return this.http.delete<Task[]>(new_url);
  }


  AddTask(task:any) : Observable<Task[]> {
    return this.http.post<Task[]>(this.url , task);
  }
}
