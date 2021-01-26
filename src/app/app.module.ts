import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { TextSlideAnimationComponent } from './text-slide-animation/text-slide-animation.component';

@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    WelcomePageComponent,
    TextSlideAnimationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
