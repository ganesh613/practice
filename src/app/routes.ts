import { Routes } from "@angular/router"
import { EventsListComponent } from "./events/events-list.component"
import { EventDetailsComponent } from "./events/event-details/event-details.component"
import { CreateEventComponent } from "./events/create-event.component"
import { Error404Component } from "./errors/404.component"
import { EventRouteActivator } from "./events/event-details/event-route-activator.service"
import { EventListResolver } from "./shared/event-list-resolver.service"

export const appRoutes:Routes=[
    // {path:'',component:EventsListComponent},
    {path:'app',component:EventsListComponent,resolve:{events:EventListResolver}},
    {path:'app/new',component:CreateEventComponent ,canDeactivate:['canDeactivateCreateEvent']}, //go to app modules to check function
    {path:'app/:id',component:EventDetailsComponent,canActivate:[EventRouteActivator]},
    {path:'404',component:Error404Component},
    {path:'',redirectTo:'/app',pathMatch:"full"},

    {path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.userModule)}
]