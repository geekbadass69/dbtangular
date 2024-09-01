import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
export class AppService {
  http = inject(HttpClient);
  simpleGetRequest() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
  }
}
