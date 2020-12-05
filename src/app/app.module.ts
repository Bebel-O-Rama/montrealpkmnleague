import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//import material here plz
import { MaterialModule } from './material/material.module';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//costum module and component
import { LoginModule } from './login/login.module';
import { AboutUsModule } from './about-us/about-us.module';
import { EventsModule } from './events/events.module';
import { ProfilModule } from './profil/profil.module';
import { PokedexModule } from './pokedex/pokedex.module';
import { SignInModule } from './sign-in/sign-in.module';
import { InfoBoxModule } from './accueil/info-box.module';
import { PostComponent } from './post/post.component';

//miscellaneous imports
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { EventDialogModule } from './event-dialog/event-dialog.module';
import { EventDialogComponent } from './event-dialog/event-dialog/event-dialog.component';
import { TeamModule } from './team/team.module';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    // EventDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    EventDialogModule,
    MatSelectModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    LoginModule,
    AboutUsModule,
    EventsModule,
    ProfilModule,
    PokedexModule,
    InfoBoxModule,
    SignInModule,
    TeamModule,
    HttpClientModule, AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  entryComponents: [EventDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
