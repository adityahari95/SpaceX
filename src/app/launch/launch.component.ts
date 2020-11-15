import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LaunchService } from '../launch.service';

@Component({
selector: 'app-launch',
templateUrl: './launch.component.html',
styleUrls: ['./launch.component.css'],

})

export class LaunchComponent implements OnInit {

// initialising all variables

public launchYear=[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
public allDetails=[];
public launchDetails=[];
public landDetails=[];

globalAllDetails=[];
globalLaunchDetails=[];
globalLandDetails=[];

constructor(private readonly service:LaunchService) { 
}

ngOnInit(): void {
  this.launchingDetails();    
}

//Data is shown without any filter
launchingDetails(){
  this.service.getLaunchDetails().subscribe(
    (result)=>{
      this.allDetails=this.globalAllDetails=result;
    });
    
}

//Data is filtered based on the year selected
filterYear(launchingYear){
  let yearDetails=[];

  this.globalAllDetails.forEach(
    (elements)=>{
      if(elements['launch_year']===launchingYear){
        yearDetails.push(elements);
        
      }               
    });
    this.allDetails=yearDetails;      
}

//Data is filtered based on the launch value selected
filterLaunch(launchingSuccess){
  let launch=[];
  
  this.service.getFilteredLaunchSuccessDetails(launchingSuccess).subscribe(
    (data)=>{
      this.launchDetails=this.globalLaunchDetails=data; 
      this.globalLaunchDetails.forEach(
        (launchElement)=>{
                
          if(launchElement['launch_success']==JSON.parse(launchingSuccess)){
            launch.push(launchElement); 
                  
          }
        });
        this.allDetails=launch;                 
    });      
}

//Data is filtered based on the land value selected
filterLand(landingSuccess){
  let landDetails=[];
      

  this.globalAllDetails.forEach(
    (elements)=>{     
     
      if(elements.rocket.first_stage.cores[0].land_success==JSON.parse(landingSuccess)){ 
        landDetails.push(elements);
      }               
    });
    this.allDetails=landDetails;

}

}
