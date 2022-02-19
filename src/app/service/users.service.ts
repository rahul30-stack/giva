import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Users } from '../models/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
    dbPath = '/users';
   UsersRef: AngularFirestoreCollection<Users>;

  constructor( private db: AngularFirestore) { 
    this.UsersRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Users> {
    return this.UsersRef;
  }
  
  update(id: string, data: any): Promise<void> {
    return this.UsersRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.UsersRef.doc(id).delete();
  }

}
