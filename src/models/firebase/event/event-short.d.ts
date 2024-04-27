import { EventCategory } from "./event-category.";
import { EventStatus } from "./event-status";
import { EventType } from "./event-type";


interface EventShort{
    id: string,
    name: string,
    imageURL: string,
    description: string,
    start_date: string,
    status: EventStatus,
    category: EventCategory
    type: EventType
}