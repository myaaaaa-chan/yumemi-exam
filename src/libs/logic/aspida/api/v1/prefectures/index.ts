export type Methods = {
  get: {
    reqHeaders?: { 'X-API-KEY': string }

    resBody: {
      message: string,
      result: [{
        prefCode: number,
        prefName: string,
      }]
    }
  }
}
