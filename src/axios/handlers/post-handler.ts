import { pipe } from 'fp-ts/lib/function';
import * as E from 'fp-ts/Either';
import * as TE from 'fp-ts/TaskEither';
import { AxiosInstance } from 'axios';
import { Http } from '../../types';

export namespace AxiosPostHandler {
  const _handler =
    (http: AxiosInstance): Http.Post =>
    <T>(url: string) =>
    (data) =>
      pipe(
        TE.tryCatch(() => http.post<T>(`${url}`, data), E.toError),
        TE.map(({ data }) => data),
      );

  export const handle = _handler;
}
