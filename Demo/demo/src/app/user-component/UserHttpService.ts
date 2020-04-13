
import { Observable } from 'rxjs';

import { User, ResponseApi } from './User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class UserHttpService {
  constructor(private httpClient: HttpClient) { }

  private href = 'https://localhost:44356/api/user';

  SearchUser(pageSize: number, pageIndex: number, searchStr: string): Observable<ResponseApi<User>> {
    const requestUrl =
      `${this.href}?pageSize=${pageSize}&pageIndex=${pageIndex + 1}&searchString=${searchStr}`;
    return this.httpClient.get<ResponseApi<User>>(requestUrl);
  }
  AddUser(name: string, username: string, age: number, gender: string) {
    const body =
      `{
      "id": 0,
      "userName": "${username}",
      "name": "${name}",
      "age": ${age},
      "gender": "${gender}"
    }`;
    const request = `${this.href}?name=${name}&userName=${username}&age=${age}&gender=${gender}`;
    return this.httpClient.post<User>(request, body);
  }


  UpdateUser(id: number, name: string, username: string, age: number, gender: string ) {
    const body =
      `{
      "id": ${id},
      "userName": "${username}",
      "name": "${name}",
      "age": ${age},
      "gender": "${gender}"
    }`;
    const request = `${this.href}?id=${id}&name=${name}&userName=${username}&age=${age}&gender=${gender}`;
    return this.httpClient.put<User>(request, body);
  }
}
