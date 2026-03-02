import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './Services/data-service'; // Imports service with http connect to api

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  students:any[]=[]; // Array to contain the students
  weather:any[]=[]; // Array to contain data from weather
  constructor(private dataService:DataService){}
  ngOnInit(): void {
    this.dataService.getStudentData().subscribe( // Subscribes to the data to get it on site
      (data)=>{
        this.students = data.students; // Sets each of the students data in the array
        console.log(this.students);
      }
    );

    this.dataService.getWeatherData().subscribe( // Subscribes to the data to get it on site
      (data)=>{
        this.weather = data.weather; // Sets the weather based on data recieved in api
        console.log(this.weather);
      }
    )
  }
}
