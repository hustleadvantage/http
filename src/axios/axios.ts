import axios, { AxiosRequestConfig, AxiosStatic } from 'axios';
import {
  AxiosDeleteHandler,
  AxiosGetHandler,
  AxiosPostHandler,
  AxiosPutHandler,
} from './handlers';
import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/lib/function';
import { Http } from '../types';

export namespace AxiosHttp {
  const _create =
    (axios: AxiosStatic) =>
    (config: O.Option<AxiosRequestConfig>): Http => {
      const httpClient = axios.create(pipe(config, O.toUndefined));

      return {
        delete: AxiosDeleteHandler.handle(httpClient),
        get: AxiosGetHandler.handle(httpClient),
        post: AxiosPostHandler.handle(httpClient),
        put: AxiosPutHandler.handle(httpClient),
      };
    };

  export const create = _create(axios);
}
