import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: firebase.User | null | undefined;

  constructor(private fireAuth: AngularFireAuth) {

  }

  login(credentials: { email: string, password: string }) {
    return this.fireAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(userCredentials => this.userData = userCredentials.user);
  }

  get user() {
    return this.userData;
  }
}
