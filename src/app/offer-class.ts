import {Destination} from './destination';
import {Origin} from './origin'
export class OfferClass {
    seats_needed: number;
	departure_time: string;
	origin :Origin;
	Destination: Destination;
    is_full : boolean;
    is_ended : boolean ;
}
