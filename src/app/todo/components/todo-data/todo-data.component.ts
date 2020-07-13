import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DataResolverService } from '../../services/data-resolver.service';

@Component({
  selector: 'app-todo-data',
  templateUrl: './todo-data.component.html',
  styleUrls: ['./todo-data.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class TodoDataComponent {
  isFirstTimeLoading = true;
  toDoList = [];
  deletedItem;
  loaderMessage;
  isLoader;

  toDoObj;

  constructor(private dataResolverService:DataResolverService, private changeDetectorRef:ChangeDetectorRef){}

  ngOnInit(){
    //this.changeDetectorRef.detectChanges();
    this.loaderMessage = "Loading...";
    this.isLoader = true;
    this.dataResolverService.getToDoDatas().subscribe(response=>{
      console.log('getToDoDatas(): ',response)
      this.toDoList = response;
      this.isFirstTimeLoading = false;
      this.isLoader = false; 
    },
    error=>{
      console.log('Error: ',error)
      this.isLoader = false;
    });
  }

  /**
   * Add new To Do in List
   * @param val = target value
   */
  addToDoList(e) {    
    const item = e.target.value;
    if (item !== '') {
      this.onAddData(item);
    }
    e.target.value = '';   
  }

  onAddData(toDoItem) {    
    this.toDoObj = { 'toDoData': toDoItem };
    this.loaderMessage = `Adding ${toDoItem}...`;
    this.isLoader = true;
    this.dataResolverService.addToDoData(this.toDoObj).subscribe(response => {
      console.log('addToDoData(): ', response);
      this.isLoader = false;
      this.toDoList.push(response); 
    },
      error => {
        console.log('error: ', error);
        this.isLoader = false;
      });
  }

  /**
   * Delete ToDo item from List
   * @param val = target value
   */
  deleteItem(item) {
    this.deletedItem = item.toDoData;
    this.isLoader = true;
    this.loaderMessage = `Deleting ${item.toDoData}...`;

     this.dataResolverService.deleteToDoData(item.id).subscribe(response => {      
      this.isLoader = false;     
      for (let i = 0; i < this.toDoList.length; i++) {
        if (item.id == this.toDoList[i].id) {
          this.toDoList.splice(i, 1);
          break;
        }
      }       
    },
      error => {
        console.log('error: ', error);
        this.isLoader = false;
      }); 
  }  
}