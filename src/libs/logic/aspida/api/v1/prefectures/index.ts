import { Prefecture } from "../../../../../../model/Prefecture";

export type Methods = {
  get: {
    reqHeaders?: { 'X-API-KEY': string }

    resBody: {
      message: string,
      result: Prefecture[]
    }
  }
}
