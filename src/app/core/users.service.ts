import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, Injector } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Users } from '../common/interfaces/users';

@Injectable()
export class UsersService {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient, private injector: Injector) { }

  public getUsers(): Signal<Users[]>{
    return toSignal(this.http.get<Users[]>(this.baseUrl), {initialValue: [], injector:this.injector});
  }
}
