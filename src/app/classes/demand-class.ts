import {Destination} from '../destination';
import {Origin} from '../origin'

export class DemandClass {
    available_seats: number;
    departure_time: string;
    distance: number;
	origin :Origin;
	destination: Destination;
    
}
