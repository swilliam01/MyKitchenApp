import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';


@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: Observable<User>;
    constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {
        
        this.user = this.afAuth.authState
            .pipe(
                switchMap(
                    user => {
                        return !!user ? this.afs.doc<User>(`users/${user.uid}`).valueChanges() : of(null);
                    }
                )
            );
    }

    googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider()
       this.oAuthLogin(provider);
    }
    oAuthLogin(provider){
        this.afAuth.auth.signInWithPopup(provider)
        .then((credential)=>{
             this.updateUser(credential);
            console.log('success:',credential);
        }).catch((error)=>{console.log(" the error is : ",error );
        });
    }

    signOut() {
        this.afAuth.auth.signOut();
        console.log("ok");
    }
    getCurrent(){
        return this.afAuth.auth.currentUser.uid;
    }

    //// Update user data ////

    /// updates database with user info after login
    /// only runs if user role is not already defined in database
    private updateUser(user) {

        const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
        const data: User = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            // roles: {
            //     admin: true,
            //     reader: true,
            // }
        };
        console.log('the value of the update is : ', data);
        return userRef.set(data, { merge: true })
    }


}


