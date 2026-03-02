import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Imports the Http client
import { Observable } from 'rxjs'; // Allows aSync to work
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private httpClient:HttpClient){} // Creates instance of the http client

  getStudentData():Observable<any>{
    return this.httpClient.get('https://api.jsonblob.com/019caf20-a147-7821-9bdb-c8ab7216e0d3'); // Calls the http to get api data from jsonblob
  }

  getWeatherData():Observable<any>{
    return this.httpClient.get('https://api.openweathermap.org/data/2.5/weather?q=Galway&appid=6a66416403ed8e5e6e762cb8c261f303'); // Calls openweather and gets data from galway
  }
}
