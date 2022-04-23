import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import { AxiosInstance } from 'axios';
import { Http } from '../../../types';

export namespace AxiosPutHandler {
  const _handler =
    (http: AxiosInstance): Http.Put =>
    (url) =>
    (data) =>
      pipe(
        TE.tryCatch(() => http.put(`${url}`, data), E.toError),
        TE.map(({ data }) => data),
      );

  export const handle = _handler;
}
