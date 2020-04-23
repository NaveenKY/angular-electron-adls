import { TokenCredential, GetTokenOptions, AccessToken } from "@azure/identity";

export class AccessTokenCredential implements TokenCredential {

  _token: AccessToken;
  constructor(token: string, expiresOnTimestamp) {
    this._token = { token: token, expiresOnTimestamp: expiresOnTimestamp };
  }

  getToken(scopes: string | string[], options?: GetTokenOptions): Promise<AccessToken | null> {
    return new Promise(function (resolve, reject) {
      resolve(this._token);
    })
  }
}