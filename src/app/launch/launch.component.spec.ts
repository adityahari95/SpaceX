import { mockLaunchData } from './../mock-data';
import { LaunchService } from './../launch.service';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { LaunchComponent } from './launch.component';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('LaunchComponent', () => {
  let component: LaunchComponent;
  let fixture: ComponentFixture<LaunchComponent>;
  let launchService: LaunchService;
  let httpClient: HttpClient;
  let testData;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LaunchComponent
      ],
      declarations: [ LaunchComponent ]
    })
    .compileComponents();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(LaunchComponent);
    component = fixture.componentInstance;
    testData = mockLaunchData;
    fixture.detectChanges(); 
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call launchingDetails method', fakeAsync(() => {
    component.allDetails = mockLaunchData;
    component.launchingDetails()
    tick(500);
    expect(component.allDetails.length).toEqual(mockLaunchData.length);
  }));

  it('should call filterYear method', fakeAsync(() => {
    component.globalAllDetails = mockLaunchData;
    const launchingYear = '2006'
    component.filterYear(launchingYear)
    tick(500);
    expect(component.allDetails.length).toEqual(1);
  }));

  it('should call filterLaunch method', fakeAsync(() => {
    component.globalAllDetails = mockLaunchData;
    component.filterLaunch(true)
    tick(500);
    expect(component.allDetails.length).toBe(0);
  }));

  it('should call filterLand method', fakeAsync(() => {
    component.globalAllDetails = mockLaunchData;
    component.filterLand(true)
    tick(500);
    expect(component.allDetails.length).toBe(2);
  }));
});
