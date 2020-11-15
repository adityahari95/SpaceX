import { LaunchData } from './launchdata';

export const mockLaunchData: LaunchData[] = [{
    'flight_number': 1,
    'launch_year': '2006',
    'mission_name': 'FalconSat',
    'mission_id': '',
    'launch_success': false,
    'rocket': {
        'first_stage':{
            'cores': [{
                'land_success': true,
            }]
        }
    }
},
{
'flight_number': 2,
    'launch_year': '2014',
    'mission_name': 'FalconSat1',
    'mission_id': '',
    'launch_success': true,
    'rocket': {
        'first_stage':{
            'cores':[
                {
                'land_success': true,
            }
        ]
        }
    }
}
]