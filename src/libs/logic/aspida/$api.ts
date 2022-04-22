import type { AspidaClient } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './api/v1/population/composition/perYear'
import type { Methods as Methods1 } from './api/v1/prefectures'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://opendata.resas-portal.go.jp' : baseURL).replace(/\/$/, '')
  const PATH0 = '/api/v1/population/composition/perYear'
  const PATH1 = '/api/v1/prefectures'
  const GET = 'GET'

  return {
    api: {
      v1: {
        population: {
          composition: {
            perYear: {
              get: (option: { query: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
              $get: (option: { query: Methods0['get']['query'], headers?: Methods0['get']['reqHeaders'] | undefined, config?: T | undefined }) =>
                fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
              $path: (option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined) =>
                `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
            }
          }
        },
        prefectures: {
          get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
          $get: (option?: { headers?: Methods1['get']['reqHeaders'] | undefined, config?: T | undefined } | undefined) =>
            fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
          $path: () => `${prefix}${PATH1}`
        }
      }
    }
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
