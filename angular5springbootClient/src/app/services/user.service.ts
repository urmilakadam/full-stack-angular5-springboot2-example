import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from '../module/user';

@Injectable()
export class UserService {

  constructor(private _httpClient:HttpClient) { }

  getAllData():Observable<User[]>{
   return this._httpClient.get<User[]>("/api/getData");
  }

  getById(id){
    let  params=new HttpParams()
      .set('id',id);
    return this._httpClient.request("GET","/api/getById",{responseType:"json",params});
  }

  addData(data){
   return this._httpClient.post("/api/addStudents",data);
  }

  editData(data){
   return this._httpClient.put("/api/student",data);
  }
  removeStud(data){
    debugger
    return this._httpClient.delete("/api/deleteStudent?id="+data);
  }
}
