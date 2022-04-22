import { PopulationComposition } from "../../../../../../../../model/PopulationComposition";

export type Methods = {
  get: {
    reqHeaders?: { 'X-API-KEY': string }
    query: {
      prefCode: number;
      cityCode: string;
    }
    resBody: {
      message: string,
      result: PopulationComposition
    }
  }
}
