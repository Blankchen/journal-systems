import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { BehaviorSubject, from, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }

  constructor(
    private router: Router,
    private angularFireAuth: AngularFireAuth
  ) { }

  // login(user: User) {
  //   if (user.userName !== '' && user.password !== '') { // {3}
  //     this.loggedIn.next(true);
  //     this.router.navigate(['/']);
  //   }
  // }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['auth', 'sign-in']);

    this.angularFireAuth.auth.signOut();
  }

  /////////////////////////////////////////////////////
  getCurentUser() {
    // currentUser may null
    this.angularFireAuth.auth.onAuthStateChanged((data) => {
      console.log('onAuthStateChanged', data);
    });
    const user = this.angularFireAuth.auth.currentUser;
    console.log('currentUser', user);
    const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;
    const photoURL = user.photoURL;
    const isAnonymous = user.isAnonymous;
    const uid = user.uid;
    // provider-specific profile information
    const providerData: Array<any> = user.providerData;
    // 信箱驗證
    // this.angularFireAuth.auth.sendSignInLinkToEmail
    // this.angularFireAuth.auth.isSignInWithEmailLink
  }

  updateUserProfile() {
    const user = this.angularFireAuth.auth.currentUser;
    // user.updateProfile({
    //   displayName: "Jane Q. User",
    //   photoURL: "https://example.com/jane-q-user/profile.jpg"
    // });
  }

  sendEmailVerification() {
    const user = this.angularFireAuth.auth.currentUser;
    // user.sendEmailVerification()
  }


  sendPasswordResetEmail() {
    const auth = this.angularFireAuth.auth;
    // const emailAddress = "user@example.com";
    // auth.sendPasswordResetEmail(emailAddress)
  }

  reauthenticate() {
    const user = this.angularFireAuth.auth.currentUser;
    const credentials = firebase.auth.EmailAuthProvider.credential(
      user.email,
      'yourpassword'
    );
    user.reauthenticateWithCredential(credentials);
    // updateUserEmail() {
    //   const user = this.angularFireAuth.auth.currentUser;
    //   // user.updateEmail("user@example.com")
    // }
    // updatePassword() {
    //   const user = this.angularFireAuth.auth.currentUser;
    //   // const newPassword = getASecureRandomPassword();
    //   // user.updatePassword(newPassword)
    // }
  }

  //  注意！當註冊後也會更改當前authState，也會接到user，視同於登入
  signUpByEmail(user: User) {
    return from(this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password).catch(err => this.ErrorHandler(err)));
  }

  signInByEmail(user: User) {
    return from(this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password).catch(err => this.ErrorHandler(err)));
  }

  signInByGoogle() {
    return from(this.angularFireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(err => this.ErrorHandler(err)));
  }

  signInByFacebook() {
    return from(this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).catch(err => this.ErrorHandler(err)));
  }

  private ErrorHandler(err: firebase.auth.Error) {
    return of(`${err.code}: ${err.message}`);
  }
}


export interface User {
  email: string;
  password: string;
}
