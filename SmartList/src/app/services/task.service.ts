import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
//import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';


@Injectable()
export class TaskService{
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }
    
    getTasks(){
        return this.http.get('/api/tasks')
        .pipe(map(res => res.json()));
    }
    
    addTask(newTask){
        var headers = new Headers();

        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods','GET, POST, PATCH, PUT, DELETE, OPTIONS');
        headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
        // Request methods you wish to allow
       // headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
      
        return this.http.post('/api/task', JSON.stringify(newTask), {headers: headers})
        .pipe(map(res => res.json()));
    }
    
    deleteTask(id){
        return this.http.delete('/api/task/'+id)
            .pipe(map(res => res.json()));
    }
    
    updateStatus(task){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('/api/task/'+task._id, JSON.stringify(task), {headers: headers})
            .pipe(map(res => res.json())); 
    }
}