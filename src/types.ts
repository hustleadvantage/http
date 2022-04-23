import * as O from 'fp-ts/Option';
import * as TE from 'fp-ts/TaskEither';

export interface Http {
  delete: Http.Delete;
  get: Http.Get;
  post: Http.Post;
  put: Http.Put;
}

export namespace Http {
  export type Delete = <T>(path: string) => TE.TaskEither<Error, T>;

  export type Get = <T>(
    path: string,
  ) => (params: O.Option<any>) => TE.TaskEither<Error, T>;

  export type Post = <T>(
    path: string,
  ) => (data: any) => TE.TaskEither<Error, T>;

  export type Put = <T>(
    path: string,
  ) => (data: { [key: string]: any }) => TE.TaskEither<Error, T>;
}
