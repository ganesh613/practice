import {Injectable} from '@angular/core'
import { EventService } from './event.service'
import {map} from 'rxjs/operators'

@Injectable()
export class EventListResolver {
    constructor(private eventService:EventService){}
    resolve(){
        return this.eventService.getEvents().pipe(map(events=>events))
    }
}