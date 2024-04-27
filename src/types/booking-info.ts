import { Slot } from './slots';
import { Location } from './location';

export type BookingInfo = {
    id: string | undefined;
    location: Location;
    slots: Slot;
    }
