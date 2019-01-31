import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { auth } from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.firestore.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async emailSubscribe(email: string, password: string, displayName: string) {
    const creditential = await this.afAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    );

    const userRef: AngularFirestoreDocument<User> = this.firestore.doc(
      `users/${creditential.user.uid}`
    );

    const data: User = {
      uid: creditential.user.uid,
      email: creditential.user.email,
      displayName: displayName,
      photoURL: null
    };

    return userRef.set(data, { merge: true });
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider).then(credential => {
      this.updateUserData(credential.user);
    });
  }

  private updateUserData(user) {
    // Sets user data to firestore on login

    const userRef: AngularFirestoreDocument<User> = this.firestore.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };

    return userRef.set(data, { merge: true });
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  updateEmailUser(email: string) {
    return this.afAuth.auth.currentUser.updateEmail(email);
  }

  missingPassword(email) {
    return this.afAuth.auth.sendPasswordResetEmail(email);
  }
}
