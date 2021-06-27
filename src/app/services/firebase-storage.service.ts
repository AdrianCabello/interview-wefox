import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(
    private storage: AngularFireStorage
  ) { }

  //Upload File
  public taskCloudStorage(file_name: string, data: any) {
    return this.storage.upload(file_name, data);
  }

  //Reference File
  public referenceCloudStorage(file_name: string) {
    return this.storage.ref(file_name);
  }
}
