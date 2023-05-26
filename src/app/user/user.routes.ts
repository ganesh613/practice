
import { ProfileComponent } from "./profile.component"
import {Routes } from "@angular/router"

export const userRoutes:Routes=[
    {path:'profile',component:ProfileComponent}
    // NOTE : here /profile is the route 
    // after completing this modules the route will be 
    // /user/profile
]