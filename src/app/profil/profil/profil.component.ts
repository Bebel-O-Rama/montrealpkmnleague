import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from 'src/app/app.component'
import { User } from 'src/app/User';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public username = "";
  date =  new Date();

  
  constructor(private router: Router, private cookieService:CookieService) {
    this.getName();
    this.getTeam();
  }
  
  team = new Array<number>();

  getTeam() {
    for (let i = 0; i < 6; i++) {
      this.team[i] = + this.cookieService.get(""+i);
    }
  }

  public getName(){
    this.username = User.getInstance().getNom();//AppComponent.getName();
    return this.username;
  }

  estCombattant():boolean {
    return User.getInstance().estCombattant();
  }

  public gotoLink(link:string){
    this.router.navigate([link]);
  }

  ngOnInit(): void {
  }

}
