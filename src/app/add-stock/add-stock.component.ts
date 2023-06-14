import { Component } from '@angular/core';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent {

  model:any={}

  displayedData: any[] | undefined;


  submit(){
    console.log(this.model);
  }

  load(){
    this.model
  }
  

}
