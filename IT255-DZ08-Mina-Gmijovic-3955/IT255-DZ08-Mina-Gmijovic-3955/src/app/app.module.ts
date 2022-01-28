import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterByUserPrice } from './components/rooms/roomFilter';
import { RoomAddComponent } from './components/room-add/room-add.component';
import { roomservice } from './room.service';


@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    FilterByUserPrice,
    RoomAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [roomservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
