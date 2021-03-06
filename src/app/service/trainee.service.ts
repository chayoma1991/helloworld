import { Injectable } from '@angular/core';
import { ITrainee } from '../models';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';

@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  trainees: ITrainee[];
  constructor(private httpclient: HttpClient,private firebaseService: FirebaseService) { }
  // addTrainee(trainee: ITrainee):
  // Observable<any>
  // {
  //   return this.httpclient.post(environment.firebaseConfig.databaseURL + '/trainees.json', trainee)
  // }
   // create new trainee
   addTrainee(trainee: ITrainee) {
    this.firebaseService.getFireStore()
    .collection('students').add(
      trainee
    )
  .then((docRef)=>{
    console.log(docRef);
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error)=>{
      console.error("Error adding document: ", error);
  });
   ///return this.httpclient.post(environment.databaseURL + '/trainees.json', trainee)
  }
  // we get trainee info
  getTrainees(): Array<ITrainee> {
    return this.trainees;
  }
}
// 1. service help to share data  ( providedIn: 'root')
//  2. to abstract functionalities
