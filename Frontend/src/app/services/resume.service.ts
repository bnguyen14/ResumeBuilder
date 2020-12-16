import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resume } from '../models/resume';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private httpClient: HttpClient) { }

  editResume(id:number){

  }
  getResume(id:number){
    return this.httpClient.get<Resume>('http://localhost:8080/getResumeByID/1');
  }
  deleteResume(id:number){

  }
}
