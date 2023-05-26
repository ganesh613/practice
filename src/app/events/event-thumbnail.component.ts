import {Component,Input,Output,EventEmitter} from '@angular/core'

@Component({
    selector:'event-thumbnail',
    template:`
    <div class="well hoverwell thumbnail">
        <h2>{{event?.name}}</h2>
        <div>Date:  {{event?.date}}</div>
        <!-- <div [class.green]="event?.time==='8:00 am'" [ngSwitch]="event?.time">  to bind multiple classes we use below -->
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
            <!-- its always better to use safe navigation operator to handle the errors 
                [class.green]="event?.time==='8:00 am'"
                in above is a class binding parsed by angular 
                if event.time  is  8 am returns true then adds class green to the div
            -->
            
           <span class="pad-right"> Time:  {{event?.time}}</span>

            <span *ngSwitchCase=" '8:00 am' ">(Early start)</span>
            <span *ngSwitchCase=" '10:00 am' ">(Late start)</span>
            <span *ngSwitchDefault>(Normal start)</span>
        </div>
      
        <div>Price:  {{event?.price}}</div>
        
        <!-- <div *ngIf="event?.location" >
            <span >Location:  {{event?.location?.address}}    </span>
           
            <span class="pad-left">  {{event?.location?.city}},  {{event?.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineurl">Onlineurl:   {{event.onlineurl}}</div> -->

        <!-- instead removing elements from dom it is better to hide them increases performance 
            based on the case we use either way we need
    -->

        <div [hidden]="!event?.location" >
            <span >Location:  {{event?.location?.address}}    </span>
           
            <span class="pad-left">  {{event?.location?.city}},  {{event?.location?.country}}</span>
        </div>
        <div [hidden]="event?.location">Onlineurl:   {{event.onlineurl}}</div>
       
       
       
        <!-- <button class="btn btn-primary" (click)="childMethod()">ClickMe</button> -->
   
   
    </div>
    `,
    styles:[`

        .pad-left{margin-left:10px;}
        .pad-right{margin-right:10px;}
        .well div{color:#bbb;}
        .thumbnail{min-height:210px;} 

        .green{color: #00AA00 !important; }
        .bold{font-weight:bold}
        /* we are using !important because this style should not be overriden by another class */
    `]
})

export class EventsThumbnailComponent{
    @Input() event:any;   // getting an input with the name event here

    @Input() another:any;

    getStartTimeClass(){
           // 1
        // const isEarlyStart=this.event?.time==='8:00 am'
        // return {green:isEarlyStart,bold:isEarlyStart}
        
            // 2
        // if(this.event?.time==='8:00 am')
        //     return 'green bold';
        // return ''

            // 3
        if(this.event?.time==='8:00 am')
            return ['green','bold'];
        return ''

    }
    

    childMethod(){
        console.log(this.another)
        console.log(!this.event?.location);
    }
    // @Output() eventClick=new EventEmitter();
    // handleClick(){
    //     // this.eventClick.emit("helloo button is clicked after data is displayed")
    //     this.eventClick.emit(this.event.name);
    // }
}