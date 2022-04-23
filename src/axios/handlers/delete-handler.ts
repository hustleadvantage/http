import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import { AxiosInstance } from 'axios';
import { Http } from '../../../types';

export namespace AxiosDeleteHandler {
  const _handler =
    (http: AxiosInstance): Http.Delete =>
    (url) =>
      pipe(
        TE.tryCatch(() => http.delete(`${url}`), E.toError),
        TE.map(({ data }) => data),
      );
  export const handle = _handler;
}
