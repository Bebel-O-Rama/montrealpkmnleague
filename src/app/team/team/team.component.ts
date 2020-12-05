import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  ngOnInit(): void {
  }

  team = new Array<number>();

  constructor(private router: Router, private cookieService: CookieService) { this.getTeam(); }
  public estCombattant():boolean { return User.getInstance().estCombattant(); }

  getTeam() {
    for (let i = 0; i < 6; i++) {
      if (this.cookieService.check(`${i}`))
        this.team[i] = + this.cookieService.get(`${i}`);
      else
        this.team[i] = -1;
    }
  }

  retirerEquipe(id:HTMLElement) {
    let val = id.getAttribute('data-teamPos');
    console.log(val);
    this.cookieService.set(val as string, "-1");
  }
  public gotoLink(link:string){
    this.router.navigate([link]);
  }

}
