import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './shared/event.service';
import { ToastrServices } from './common/toaster.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';    
import { ToastrModule } from 'ngx-toastr'; 
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './shared/event-list-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,  
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService ,
    ToastrServices,
    EventRouteActivator,
    {provide:'canDeactivateCreateEvent',useValue:checkDirtyState},
    EventListResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 
 }
 export function checkDirtyState(component:CreateEventComponent){  
  if(component.isDirty) 
    return window.confirm('you have not saved this yet , you really want to cancel ? ')

  return true
}