import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car.model';
import { carService } from 'src/app/services/cars.service';


@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.scss']
})
export class VehiculosComponent implements OnInit{

  public listCar: Car[] = [];

  constructor(
    public carService: carService
  ) { }

  ngOnInit(): void {
    this.getCars();
  }

  public getCars(): void {
    this.carService.getCars().pipe(take(1)).subscribe((resp: Car[]) => {
      this.listCar = resp;
    });
  }

  deleteCar(car: Car){
    this.carService.deleteCar(car).subscribe(() =>
    this.listCar = this.listCar?.filter(c => c.id != car.id));
  }


}
