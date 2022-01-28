import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Room } from 'src/app/modules/Room';

function provera(control: FormControl): { [s: string]: boolean } {
  if (!control.value.match(/^[0-9]*$/)) {
   return { invalidForm: true };
 } else {
   return { invalidForm: false };
 }
}

@Component({
  selector: 'add-room',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {

  public roomForm!: FormGroup;
  @Output() roomToAdd: EventEmitter<Room>;
  //@Input() room!: Room;

  absControll!: AbstractControl;

  constructor(formbuilder: FormBuilder) {
    this.roomToAdd = new EventEmitter();
  }


  ngOnInit() {
    this.initForm();
    this.absControll = this.roomForm.controls['price'];
    this.absControll = this.roomForm.controls['availablePpl'];
  }

  public initForm() {
    this.roomForm = new FormGroup({
      roomNumber: new FormControl('', [
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      availablePpl: new FormControl('', [
        Validators.required, provera
      ]),
     
      price: new FormControl('', [
        Validators.required, provera
      ]),

      brNoci: new FormControl('', [
        Validators.required,
      ]),
    });
    
  }
  proveravanje(event: string) {
    if (event.length < 6)
      console.log("Duzina je manja od 6 karaktera");
  }
  
  public submitForm() {
    let roomNumber = this.roomForm.get('roomNumber')!.value;
    let name = this.roomForm.get('name')!.value;
    let availablePpl = this.roomForm.get('availablePpl')!.value;
    let price = this.roomForm.get('price')!.value;
    let brNoci = this.roomForm.get('brNoci')!.value;

    let room = new Room(roomNumber, name, availablePpl, price, brNoci)
    this.roomToAdd.emit(room);
  }

  

}
