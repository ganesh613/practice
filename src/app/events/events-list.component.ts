import { Component , OnInit} from "@angular/core";
import { EventService } from "../shared/event.service";

import { ToastrServices } from "../common/toaster.service";
import { ActivatedRoute } from "@angular/router";
// import { ToastrService } from 'ngx-toastr' this is also working direct import

@Component({
    // selector:'events-list', no need of this selector in case of routing 
    template:`
        <div class="container">
            <h1>Upcoming Angular</h1>
            <hr>
            <!-- <event-thumbnail [event]="events" (eventClick)="handleResponse($event)" ></event-thumbnail> -->
          
          <div class="row">
            <div class="col-md-5" *ngFor="let i of events">
            <event-thumbnail [routerLink]="['/app',i.id]" (click)="handleThumbnailClick(i.name)"  [event]="i" #tem [another]="events" ></event-thumbnail>
          </div>
          <!-- <div class="col-md-4">
            <event-thumbnail *ngFor="let i of events" [event]="i" #tem [another]="events" ></event-thumbnail>
          </div>
          <div class="col-md-4">
            <event-thumbnail *ngFor="let i of events" [event]="i" #tem [another]="events" ></event-thumbnail>
          </div> --> 
         
          </div>
          
            
          
          
            <!-- repeating a single component that displays data multiple times using ngfor  -->
            <!-- sending events data as name with event 
            $event referes to data emitted with our event in this case it is emitted string from child
          -->

          <!-- <button class="btn btn-primary" (click)="tem.childMethod()">Call Child</button> 
              example related to template variable
        -->

        </div>
    `
})

export class EventsListComponent implements OnInit{

  // handleResponse(data:any){
  //   console.log(data);
  // this is regarding output decorator data handling
  // }

    // injecting EventService
    // eventService
     events:any  //array of any datatype
    // its not good idea to put these in the constructor it takes
    // but we need to when our page loads
    // we can do this by life cycle hooks to components
   
    constructor(private eventService:EventService,private toastr:ToastrServices,private route:ActivatedRoute){//it is short hand 
        // this.eventService=eventService  
    }

     ngOnInit(){
      // this.events=this.eventService.getEvents().subscribe() //we get data from observables by subscribing it
      // instead above method we get to events when all data comes
      // this.eventService.getEvents().subscribe(events=>{
      //    this.events=events
      // }
      //) //we get data from observables by subscribing it
      // NOW NO NEED OF ABOVE CODE SINCE WE ARE MANAGING IT IN THE RESOLVER

      this.events=this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName:string){
        this.toastr.success(eventName)
        // toastr is available globally
    }
}