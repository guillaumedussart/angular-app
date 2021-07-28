import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {config} from '../config/config';
import {AvisModel} from "../model/avis.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getAllCollegue(): Promise<AvisModel[]> {
    return this.http.get<AvisModel[]>(config.baseUrlApiAvis).toPromise();
  }
}
