
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

import { HomeComponent } from './modules/home/home.component';
import { VehiculosComponent } from './modules/vehiculos/vehiculos.component';
import { MenuComponent } from './modules/menu/menu.component';
import { carService } from './services/cars.service';
import { EditarVehiculosComponent } from './modules/editar-vehiculos/editar-vehiculos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehiculosComponent,
    MenuComponent,
    EditarVehiculosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [carService],
  bootstrap: [AppComponent]
})
export class AppModule { }
