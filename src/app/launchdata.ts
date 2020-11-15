export interface LaunchData{
    flight_number: number,
    launch_year?: string,
    launch_success?: boolean,
    mission_id ?: string,
    mission_name?: string,
    rocket?: {
        first_stage:{
            cores:[{
                land_success: boolean;
            }]
        }
    }
}