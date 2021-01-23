import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OuputComponent } from './ouput/ouput.component';
import { InputouputComponent } from './inputouput/inputouput.component';

@NgModule({
  declarations: [
    AppComponent,
    OuputComponent,
    InputouputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
