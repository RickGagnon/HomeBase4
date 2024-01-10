import { Component, OnInit } from '@angular/core';
import {TodoService} from "./todo.service";
import { Item } from './item';
import {MatToolbar} from '@angular/material/toolbar'
import {MatList,MatListItem} from '@angular/material/list'
import { CdkDrag, CdkDropList, CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropListGroup } from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {
drop($event: CdkDragDrop<string[],any,any>) {
throw new Error('Method not implemented.');
}

items:Item[]=[];
it: string[]=[]
todo:string[]=[];

done:string[] = [
'ss'
];


  constructor ( private todoService:TodoService){
    this.todoService.getAllTodoItems().subscribe(p=> this.todo=p.map(p=>p.item));
  }

  ngOnInit(){
    
  }
  title = 'homebase4';
}
