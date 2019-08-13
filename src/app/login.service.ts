import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './login';
import { Observable } from 'rxjs';

const headerOption = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Url: string = 'http://localhost:3000/User'; 
  id : number = 1; 
  data : any;

  currentUser: Login = {
    username: '', 
    password: ''  }

  constructor(private http: HttpClient) { }

  
  setData(data:any)
  {
    this.data = data;
  }

  getData():any{
    return this.data;
  }

  increment()
  {
    this.id++ ;
  }

  getAllUser(): Observable<Login[]> {
    this.increment();
    return this.http.get<Login[]>(this.Url + '?id=' + this.id, headerOption);
  }

  createUser(login : Login): Observable<Login> {
    return this.http.post<Login>(this.Url  , login, headerOption);
  } 

  /*old login;

  getData()
  {
    return this.login = new Login('',''); 

    //return this.http.get('http:localhost:5000');
  } old*/
  
}
