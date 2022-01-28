import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class roomservice {

  public getPrice(numberOfNights: number){
    return numberOfNights;
  }


  constructor() { }

  
}
