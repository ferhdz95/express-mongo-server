import {Injectable} from '@angular/core';
import {ICat} from './cat';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class CatService {
    private _url = 'http://localhost:8000/cats/';

    constructor(private _http: HttpClient){}

    getCats(): Observable<ICat[]>{
        return this._http.get<ICat[]>(this._url)
        .do(data => console.log('Data' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    addCat(cat : ICat[]): Observable<ICat[]>{
        return this._http.post<ICat[]>(this._url, cat[0])
        .do(data => console.log('Data' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    updateCat(cat : ICat): Observable<ICat>{
        return this._http.put<ICat[]>(this._url + cat._id, cat)
        .do(data => console.log('Data' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    deleteCat(cat : ICat): Observable<ICat>{
        return this._http.delete<ICat>(this._url + cat._id)
        .do(data => console.log('Data' + JSON.stringify(data)))
        .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}