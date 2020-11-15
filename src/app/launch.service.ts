import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaunchData } from './launchdata';

@Injectable({
  providedIn: 'root'
})
export class LaunchService {

  constructor(private readonly http:HttpClient) { }

  private filterLandLaunchSuccessURl :string = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true";
  private filterAllURL:string = "https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014";
  private withoutFilterURL:string = "https://api.spaceXdata.com/v3/launches?limit=100";

  getLaunchDetails(): Observable<LaunchData[]>{  
    return this.http.get<LaunchData[]>(this.withoutFilterURL);
  }

  getFilteredLaunchSuccessDetails(selectedLaunchType:string):Observable<LaunchData[]>{
    return this.http.get<LaunchData[]>("https://api.spaceXdata.com/v3/launches?limit=100&launch_success="+selectedLaunchType);   
  }
  
  // getFilteredLaunchAndLandDetails(selectedLandType:string,
  //   selectedLaunchType:string){
  //   return this.http.get<LaunchData[]>(this.filterLandURl);
  // }
  // getAllFiltersDetails(selectedLaunchType:string,
  //   selectedLandType:string, selectedYear:number){
  //   return this.http.get<LaunchData[]>(this.filterAllURL);
  // }


}
