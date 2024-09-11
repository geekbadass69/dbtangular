import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
export class AppService {
    constructor() {
        this.http = inject(HttpClient);
    }
    simpleGetRequest() {
        return this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    }
}
//# sourceMappingURL=backend-service.service.js.map