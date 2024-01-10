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
  
  drop(event: CdkDragDrop<string[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
