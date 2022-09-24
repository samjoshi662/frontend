import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(private router: Router) {}

  // the Router call canActivate() method,
  // if canActivate is registered in Routes[]
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
   console.log(state)
    if(state.url === '/keyword'){
      console.log("IN KEYWORDS")
      return new Promise((resolve, reject) => {
        if(sessionStorage.getItem('username')!=null && sessionStorage.getItem('role')==="SUPER-ADMIN") return resolve(true)
        else {
          alert("Access denied.")
          this.router.navigate(['login'])
          return resolve(false)
        }
    });
  }
  else{
    return new Promise((resolve, reject) => {
      if(sessionStorage.getItem('username')!=null) return resolve(true)
      else {
        this.router.navigate(['login'])
        return resolve(false)
      }
    
    });
  }
  }
}