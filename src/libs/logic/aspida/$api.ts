import type { AspidaClient } from 'aspida'
import type { Methods as Methods0 } from './api/v1/prefectures'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://opendata.resas-portal.go.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/prefectures'
  const GET = 'GET'

  return {
    api: {
      v1: {
        prefectures: {
          get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
          $get: (option?: { headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH0}`
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
