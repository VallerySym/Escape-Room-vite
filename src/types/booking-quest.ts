import { Location } from './location';
import { Slots } from './slots';

export type BookingQuest = {
  id: string;
  location: Location;
  slots: Slots;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
}

export type BookingQuests = BookingQuest[];

