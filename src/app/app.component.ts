import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Car } from 'src/models/car.model';
import { carService } from 'src/services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  
  title = 'Reto Angular';
  public listCar: Car[] = [];

  constructor(
    public readonly carService: carService
  ) { }

  ngOnInit(): void {

    this.getCars();

  }

  public getCars(): void {
    this.carService.getCars().pipe(take(1)).subscribe((resp: Car[]) => {
      this.listCar = resp;
      console.log('getCars - Estos son mis carros: ', resp);
    });
  }

}
