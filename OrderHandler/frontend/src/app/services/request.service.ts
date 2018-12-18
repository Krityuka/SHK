import { Injectable } from '@angular/core';
import { Request } from "../entities/request";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  
  private requestUrl = 'http://localhost:8080/requests';

  constructor(
    private http: HttpClient
  ) { }
  
  getRequests(): Promise<Request[]> {
    return this.http.get<Request[]>(`${this.requestUrl}`, httpOptions).toPromise();
  }
  
  getRequest(id: number): Promise<Request> {
    return this.http.get<Request>(`${this.requestUrl}/${id}`, httpOptions).toPromise();
  }

  createRequest(request: Request): Promise<Request> {
    return this.http.post<Request>(`${this.requestUrl}`, {
      id: Math.floor(Math.random()*1000000),
      //location: request.location,
      title: request.title,
      description: request.description,
      status: 'NEW'
    }, httpOptions).toPromise();
  }

  updateRequest(request: Request): Promise<Request> {
    return this.http.put<Request>(`${this.requestUrl}/${request.id}`, {
      id: request.id,
      //location: request.location,
      title: request.title,
      description: request.description,
      status: request.status
    }, httpOptions).toPromise();
  }

  deleteRequest(id): Promise<Request> {
    return this.http.delete<Request>(`${this.requestUrl}/${id}`, httpOptions).toPromise();
  }
  
  readyRequest(request: Request): Promise<Request> {
	  console.log(request);
    return this.http.put<Request>(`${this.requestUrl}/${request.id}`, {
      id: request.id,
      //location: request.location,
      title: request.title,
      description: request.description,
      status: 'COOKED'
    }, httpOptions).toPromise();
  }
  
  progressRequest(request: Request): Promise<Request> {
	  console.log(request);
    return this.http.put<Request>(`${this.requestUrl}/${request.id}`, {
      id: request.id,
      //location: request.location,
      title: request.title,
      description: request.description,
      status: 'INPROGRESS'
    }, httpOptions).toPromise();
  }

}
