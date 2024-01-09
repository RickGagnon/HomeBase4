import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs'
import { Item }  from "./item"


const baseUrl = 'https://xc6dm6bgwc.execute-api.us-east-2.amazonaws.com'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) {  }

getAllTodoItems(): Observable<Item[]>{
  var url= baseUrl + "/items";
  return this.http.get<Item[]>(url)
}
getTodoItem(item:Item): Observable<Item>{
  var url= baseUrl + "items/" + item.item;
  return this.http.get<Item>(url)
}
deleteTodoItem(item:Item): Observable<Item[]>{
  var url= baseUrl + "items/" + item.item;
  return this.http.delete<Item[]>(url)
}
putTodoItem(item:Item): Observable<Item>{
  var url= baseUrl + "items/" + item;
  return this.http.get<Item>(url)
}
}
