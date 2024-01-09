import { Component, OnInit } from '@angular/core';
import {TodoService} from "./todo.service";
import { Item } from './item';
import {MatToolbar} from '@angular/material/toolbar'
import {MatList,MatListItem} from '@angular/material/list'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

items:Item[]=[];



  constructor ( private todoService:TodoService){
    this.todoService.getAllTodoItems().subscribe(p=> this.items=p);
  }

  ngOnInit(){
    
  }
  title = 'homebase4';
}
