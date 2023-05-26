import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    template:`
    <div class="container">
    <h1>New Event</h1>
    <hr/>
    <div class="col-md-6">
        <h3>[Create event from will go here]</h3><br/><br/>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type="submit" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>
    </div>
    `
})
export class CreateEventComponent{
    
    isDirty:boolean=true;//later check on form filled or not to save data when leaving

    constructor(private route:Router){}
    cancel(){
        this.route.navigate(['/app'])
    }
}