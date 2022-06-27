import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { ListShipperComponent } from './list-shipper/list-shipper.component';
import { FormsModule } from '@angular/forms';
import { ShipperRoutingModule } from './shipper-routing.module';



@NgModule({
  declarations: [
    AddShipperComponent,
    ListShipperComponent
  ],
  imports: [
    CommonModule,
    ShipperRoutingModule,
    FormsModule
  ]
})
export class ShipperModule { }
