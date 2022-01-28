import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { roomservice } from 'src/app/room.service';
import { Room } from '../../modules/Room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  @Input() room: Room;

  @Output() obrisiEvent: EventEmitter<Room>;
  @Output() updateEvent: EventEmitter<Room>;

  public konacnaCena: number;

  constructor( private rs: roomservice) {
    this.room = new Room("123", "Naziv", 4, 5, 5)
    this.obrisiEvent = new EventEmitter<Room>();
    this.updateEvent = new EventEmitter<Room>();
  }

  public deleteHotel() {
    this.obrisiEvent.emit(this.room);  
  }
  public editHotelRoom() {
    this.updateEvent.emit(this.room);
  }
  public cena() {
    this.konacnaCena = this.room.brNoci * this.room.price;
    return this.rs.getPrice(this.konacnaCena);
  };


  ngOnInit() {
  }
}