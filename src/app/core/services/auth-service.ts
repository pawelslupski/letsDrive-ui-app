import {Injectable} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import firebase from "firebase/compat";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userData: firebase.User | null | undefined;

  constructor(private fireAuth: AngularFireAuth) {}

  public login(credentials: { email: string, password: string }): Promise<firebase.User | null | firebase.auth.UserCredential> {
    return this.fireAuth.signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(userCredentials => this.userData = userCredentials.user);
  }

  public logout(): Promise<void> {
    return this.fireAuth.signOut();
  }

  public isLoggedIn(): boolean {
    return !!this.userData;
  }

  public register(credentials: { email: string, password: string }): Promise<firebase.auth.UserCredential> {
    return this.fireAuth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  get user() {
    return this.userData;
  }
}
