import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us/about-us.component';
import { EventsComponent } from './events/events/events.component';
import { LoginComponent } from './login/login/login.component';
import { PokedexComponent } from './pokedex/pokedex/pokedex.component';
import { ProfilComponent } from './profil/profil/profil.component';
import { SignInComponent } from './sign-in/sign-in.component/sign-in.component';
import { PostComponent } from './post/post.component';
import { InfoBoxComponent } from './accueil/info-box/info-box.component';
import { TeamComponent } from './team/team/team.component';

const routes: Routes = [
    { path: 'about-us', component: AboutUsComponent },
    { path: 'events', component: EventsComponent },
    { path: 'login', component: LoginComponent },
    { path: 'pokedex', component: PokedexComponent },
    { path: 'profile', component: ProfilComponent },
    { path: 'profile/equipe', component: TeamComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'post', component: PostComponent },
    { path: 'accueil', component: InfoBoxComponent },
    { path: '', redirectTo:'accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
