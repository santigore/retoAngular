import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from 'src/models/car.model';
import { environment } from '../environments/environment.prod';




@Injectable()
export class carService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  public getCars(): Observable<Car[]> {
    const url: string = environment.API_REST_URL + `/cars`;
    return this._httpClient.get<Car[]>(url);
  }

}
