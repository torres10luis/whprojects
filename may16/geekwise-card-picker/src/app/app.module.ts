import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav";

@NgModule({
	imports      : [ BrowserModule ],
	declarations : [ AppComponent, NavComponent ],
	bootstrap    : [ AppComponent ]
})
export class AppModule { }
