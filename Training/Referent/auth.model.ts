import { BaseRequest, BaseResponse, SearchBaseRequest, SearchBaseResponse } from '../shared/models';
import { FileViewModel } from '../shared/file/file.model';

export class UserViewModel {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email?: string;
    photo?: FileViewModel;
    phone?: string;
    dateOfBirth: Date;
    token?: string;
    constructor(init?: Partial<UserViewModel>) {
        Object.assign(this, init);
    }
}

export class AuthenticationViewModel {
    userName: string;
    password: string;
    constructor(init?: Partial<AuthenticationViewModel>) {
        Object.assign(this, init);
    }
}

export class AuthenticationLoginRequest extends BaseRequest<AuthenticationViewModel> {
    token?: string;
    payload: AuthenticationViewModel = new AuthenticationViewModel();
    constructor(init?: Partial<AuthenticationLoginRequest>) {
        super();
        Object.assign(this, init);
    }
}

export class AuthenticationLoginResponse extends BaseResponse<AuthenticationViewModel> {
    user?: UserViewModel;
    constructor(init?: Partial<AuthenticationLoginResponse>) {
        super();
        Object.assign(this, init);
    }
}

export class AuthenticationCreateRequest extends BaseRequest<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationCreateRequest>) {
        super();
        Object.assign(this, init);
    }
}

export class AuthenticationCreateResponse extends BaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationCreateResponse>) {
        super();
        Object.assign(this, init);
    }
}

export class AuthenticationUpdateRequest extends BaseRequest<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationUpdateRequest>) {
        super();
        Object.assign(this, init);
    }
}

export class AuthenticationUpdateResponse extends BaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationUpdateResponse>) {
        super();
        Object.assign(this, init);
    }
}

export class AuthenticationRetrieveRequest extends BaseRequest<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationRetrieveRequest>) {
        super();
        Object.assign(this, init);
    }
}

export class AuthenticationRetrieveResponse extends BaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationRetrieveResponse>) {
        super();
        Object.assign(this, init);
    }
}

export class AuthenticationDeleteRequest extends BaseRequest<AuthenticationViewModel> {
    ids: string[];
    constructor(init?: Partial<AuthenticationDeleteRequest>) {
        super();
        Object.assign(this, init);
    }
}

export class AuthenticationDeleteResponse extends BaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationDeleteResponse>) {
        super();
        Object.assign(this, init);
    }
}

export class AuthenticationSearchRequest extends SearchBaseRequest {
    constructor(init?: Partial<AuthenticationSearchRequest>) {
        super();
        Object.assign(this, init);
    }
}

export class AuthenticationSearchResponse extends SearchBaseResponse<AuthenticationViewModel> {
    constructor(init?: Partial<AuthenticationSearchResponse>) {
        super();
        Object.assign(this, init);
    }
}