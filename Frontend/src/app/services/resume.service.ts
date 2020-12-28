import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resume } from '../models/resume';
import { Resumesave } from '../models/resumesave';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  resume:Subject<Resume> = new Subject();
  resumeSaves:Resumesave[]=[];

  constructor(private httpClient: HttpClient) {}

  saveResume(resume:Resume){
    console.log(resume);
    return this.httpClient.post<Resume>('http://localhost:8080/api/addEntireResume',resume);
  }
  
  editResume(id:number){

  }

  getResumeSaves(id:number){
    return this.httpClient.get<Resumesave[]>('http://localhost:8080/api/listAllResumesByUser/'+id);
  }

  getResume(id:number){
    return this.httpClient.get<Resume>('http://localhost:8080/api/getResumeByID/'+id);
  }
  deleteResume(id:number){
    return this.httpClient.delete<Resume>('http://localhost:8080/deleteResumeByID/'+id);
  }
 
}
