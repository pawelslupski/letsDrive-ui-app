import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpClient: HttpClient) {}

  public get<T>(urlSuffix: string): Observable<T> {
    return this.httpClient.get<T>(`${environment.apiUrl}${urlSuffix}`);
  }
}
