import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  AuthenticationLoginRequest,
  AuthenticationLoginResponse,
  UserViewModel,
  AuthenticationSearchRequest,
  AuthenticationSearchResponse,
  AuthenticationRetrieveRequest,
  AuthenticationRetrieveResponse,
  AuthenticationCreateRequest,
  AuthenticationCreateResponse,
  AuthenticationUpdateRequest,
  AuthenticationUpdateResponse,
  AuthenticationDeleteRequest,
  AuthenticationDeleteResponse
} from './auth.model';
import { CacheService } from '../shared/services';
import { AuthConst } from './auth.const';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  public currentUser: UserViewModel;

  constructor(
    protected httpClient: HttpClient,
    private _cacheService: CacheService
  ) {
    var user = <UserViewModel>this._cacheService.get(AuthConst.User);
    this._cacheService.set(AuthConst.User, user);
    this.currentUser = user;
  }

  public search(request: AuthenticationSearchRequest): Observable<AuthenticationSearchResponse> {
    return this.httpClient.get<AuthenticationSearchResponse>(`v1/authentications/search`, { params: request as any });
  }

  public retrieve(request: AuthenticationRetrieveRequest): Observable<AuthenticationRetrieveResponse> {
    return this.httpClient.get<AuthenticationRetrieveResponse>(`v1/authentications/${request.payload.userName}`);
  }

  public login(request: AuthenticationLoginRequest): Observable<AuthenticationLoginResponse> {
    return this.httpClient.post<AuthenticationLoginResponse>(`v1/authentications/login`, request);
  }

  public create(request: AuthenticationCreateRequest): Observable<AuthenticationCreateResponse> {
    return this.httpClient.post<AuthenticationCreateResponse>(`v1/authentications/`, request);
  }

  public update(request: AuthenticationUpdateRequest): Observable<AuthenticationUpdateResponse> {
    return this.httpClient.put<AuthenticationUpdateResponse>(`v1/authentications/`, request);
  }

  public delete(request: AuthenticationDeleteRequest): Observable<AuthenticationDeleteResponse> {
    return this.httpClient.delete<AuthenticationDeleteResponse>(`v1/authentications?ids=${request.ids}`)
  }
}