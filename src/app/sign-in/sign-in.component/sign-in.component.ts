import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AppComponent } from 'src/app/app.component'
import { User } from 'src/app/User';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  ngOnInit(): void {
  }

  validCred:boolean = true; 
  constructor(private router: Router, private cookieService: CookieService) {}

  public username = "";
  public password = "";

  public onClickAction(link:string){
    this.validCred = this.cookieService.check(this.username) && this.cookieService.check(this.password);

 //if((this.username != "")&&(this.password != "")&&(this.email!="")){   //DEBUG, SKIPS AUTH
    if(this.validCred){   //IMPLEMENTATION, CHECK FOR USER EXISTENCE 
        User.getInstance().updateNom(this.username);
        if(User.getInstance().estCombattant())
        {
          this.cookieService.set('IsFighter', ""+1);
        }
        else
          this.cookieService.set('IsFighter', ""+0);
        User.getInstance().changeCo();
        this.gotoLink(link);
    }
    //else{
      //géré en html
    //}
  }

  public gotoLink(link:string){
    this.router.navigate([link]);
  }

}
