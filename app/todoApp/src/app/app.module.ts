import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import {ProfileComponent} from './profile/profile.component';
import {TableProfileComponent} from './tableprofile/tableprofile.component';
import { GatitosComponent } from './gatitos/gatitos.component';
import {ConvertToSpacePipe} from './shares/convert-to-space.pipe';
import {DescriptionComponent} from './shares/description.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TableProfileComponent,
    GatitosComponent,
    ConvertToSpacePipe,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
