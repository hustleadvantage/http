import * as O from 'fp-ts/Option';
import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { Http } from '../../types';

export namespace AxiosGetHandler {
  const _handler =
    (http: AxiosInstance): Http.Get =>
    (url) =>
    (params: O.Option<AxiosRequestConfig>) =>
      pipe(
        TE.tryCatch(
          () => http.get(`${url}`, { params: pipe(params, O.toUndefined) }),
          E.toError,
        ),
        TE.map(({ data }) => data),
      );

  export const handle = _handler;
}
