import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get(this.apiUrl);
  }
}
