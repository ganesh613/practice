import { Component ,OnInit} from "@angular/core";
import { EventService } from "src/app/shared/event.service";
import { ActivatedRoute } from "@angular/router";


@Component({
  templateUrl:'./event-details.component.html',
  styles:[`
    .container{
      padding-left:20px;
      padding-right:20px;
    }
    .event-image{
      height:200px;
    }
  `]
})
export class EventDetailsComponent implements OnInit{

  constructor(private eventService:EventService,private route:ActivatedRoute){

  }
  event:any;
  ngOnInit() {
      this.event=this.eventService.getEvent(
        +this.route.snapshot.params['id'] // + converts it into number getting id entered in the url
      )
  }
}