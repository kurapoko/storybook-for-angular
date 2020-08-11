import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/component/button/button.component';
import { TextComponent } from './shared/component/text/text.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonBlockComponent } from './shared/component/button-block/button-block.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TextComponent,
    ButtonBlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
