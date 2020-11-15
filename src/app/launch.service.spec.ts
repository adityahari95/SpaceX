import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';


import { LaunchService } from './launch.service';
import { mockLaunchData } from './mock-data';

describe('LaunchService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let launchService: LaunchService;
  let testData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LaunchService
      ]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    launchService = TestBed.inject(LaunchService);
    testData = mockLaunchData;
  });

  it('should be created', () => {
    expect(launchService).toBeTruthy();
  });

  it('should get all launch details ', () => {
    launchService.getLaunchDetails().subscribe(
      launch => expect(launch).toEqual(testData, 'should return expected data')
    )
  });

  it('should filter all launch details ', () => {
    const successYear = '2006'
    launchService.getFilteredLaunchSuccessDetails(successYear).subscribe(
      launch => expect(launch['launch_year']).toEqual(successYear, 'should return expected data')
    )
  });
});
