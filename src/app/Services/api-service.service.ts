import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  queryString: string = '?';

  constructor(private http: HttpClient) { }
  private base_url = ' https://jsonplaceholder.typicode.com/'

  getUser(params): Observable<any>{
   let pData = this.queryString + 'name=' + params.replace(" ", "%20");   
    let url = this.base_url + 'users' +  pData;
    pData = '';
    return this.http.get(url);      
  }

  getUserPosts(id): Observable<any>{
    let url = this.base_url + 'posts'+ this.queryString + 'userId=' + id;
    return this.http.get(url); 
  }
}
