import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot ,Router} from '@angular/router';
import { EventService } from 'src/app/shared/event.service';


@Injectable()
export class EventRouteActivator {

  constructor(private eventService:EventService,private router:Router) { }

  canActivate(route:ActivatedRouteSnapshot){
    // current route is passed to can activate method
    const eventExists= !!this.eventService.getEvent(+route.params['id'])
    // !! is casting to boolean
    if(!eventExists)
        this.router.navigate(['/404'])
    return eventExists;
  }
}
   