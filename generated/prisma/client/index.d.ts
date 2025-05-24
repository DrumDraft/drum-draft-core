
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Pattern
 * 
 */
export type Pattern = $Result.DefaultSelection<Prisma.$PatternPayload>
/**
 * Model PatternTag
 * 
 */
export type PatternTag = $Result.DefaultSelection<Prisma.$PatternTagPayload>
/**
 * Model LibraryPattern
 * 
 */
export type LibraryPattern = $Result.DefaultSelection<Prisma.$LibraryPatternPayload>
/**
 * Model Draft
 * 
 */
export type Draft = $Result.DefaultSelection<Prisma.$DraftPayload>
/**
 * Model DraftPattern
 * 
 */
export type DraftPattern = $Result.DefaultSelection<Prisma.$DraftPatternPayload>
/**
 * Model PatternSearchData
 * 
 */
export type PatternSearchData = $Result.DefaultSelection<Prisma.$PatternSearchDataPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SignatureMeasure: {
  ONE: 'ONE',
  TWO: 'TWO',
  FOUR: 'FOUR',
  EIGHT: 'EIGHT',
  SIXTEEN: 'SIXTEEN',
  THIRTY_TWO: 'THIRTY_TWO'
};

export type SignatureMeasure = (typeof SignatureMeasure)[keyof typeof SignatureMeasure]

}

export type SignatureMeasure = $Enums.SignatureMeasure

export const SignatureMeasure: typeof $Enums.SignatureMeasure

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pattern`: Exposes CRUD operations for the **Pattern** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patterns
    * const patterns = await prisma.pattern.findMany()
    * ```
    */
  get pattern(): Prisma.PatternDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patternTag`: Exposes CRUD operations for the **PatternTag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatternTags
    * const patternTags = await prisma.patternTag.findMany()
    * ```
    */
  get patternTag(): Prisma.PatternTagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.libraryPattern`: Exposes CRUD operations for the **LibraryPattern** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LibraryPatterns
    * const libraryPatterns = await prisma.libraryPattern.findMany()
    * ```
    */
  get libraryPattern(): Prisma.LibraryPatternDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.draft`: Exposes CRUD operations for the **Draft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drafts
    * const drafts = await prisma.draft.findMany()
    * ```
    */
  get draft(): Prisma.DraftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.draftPattern`: Exposes CRUD operations for the **DraftPattern** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DraftPatterns
    * const draftPatterns = await prisma.draftPattern.findMany()
    * ```
    */
  get draftPattern(): Prisma.DraftPatternDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patternSearchData`: Exposes CRUD operations for the **PatternSearchData** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatternSearchData
    * const patternSearchData = await prisma.patternSearchData.findMany()
    * ```
    */
  get patternSearchData(): Prisma.PatternSearchDataDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Tag: 'Tag',
    Pattern: 'Pattern',
    PatternTag: 'PatternTag',
    LibraryPattern: 'LibraryPattern',
    Draft: 'Draft',
    DraftPattern: 'DraftPattern',
    PatternSearchData: 'PatternSearchData'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "tag" | "pattern" | "patternTag" | "libraryPattern" | "draft" | "draftPattern" | "patternSearchData"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Pattern: {
        payload: Prisma.$PatternPayload<ExtArgs>
        fields: Prisma.PatternFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatternFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatternFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternPayload>
          }
          findFirst: {
            args: Prisma.PatternFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatternFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternPayload>
          }
          findMany: {
            args: Prisma.PatternFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternPayload>[]
          }
          create: {
            args: Prisma.PatternCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternPayload>
          }
          createMany: {
            args: Prisma.PatternCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatternCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternPayload>[]
          }
          delete: {
            args: Prisma.PatternDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternPayload>
          }
          update: {
            args: Prisma.PatternUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternPayload>
          }
          deleteMany: {
            args: Prisma.PatternDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatternUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatternUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternPayload>[]
          }
          upsert: {
            args: Prisma.PatternUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternPayload>
          }
          aggregate: {
            args: Prisma.PatternAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePattern>
          }
          groupBy: {
            args: Prisma.PatternGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatternGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatternCountArgs<ExtArgs>
            result: $Utils.Optional<PatternCountAggregateOutputType> | number
          }
        }
      }
      PatternTag: {
        payload: Prisma.$PatternTagPayload<ExtArgs>
        fields: Prisma.PatternTagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatternTagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternTagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatternTagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternTagPayload>
          }
          findFirst: {
            args: Prisma.PatternTagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternTagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatternTagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternTagPayload>
          }
          findMany: {
            args: Prisma.PatternTagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternTagPayload>[]
          }
          create: {
            args: Prisma.PatternTagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternTagPayload>
          }
          createMany: {
            args: Prisma.PatternTagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatternTagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternTagPayload>[]
          }
          delete: {
            args: Prisma.PatternTagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternTagPayload>
          }
          update: {
            args: Prisma.PatternTagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternTagPayload>
          }
          deleteMany: {
            args: Prisma.PatternTagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatternTagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatternTagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternTagPayload>[]
          }
          upsert: {
            args: Prisma.PatternTagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternTagPayload>
          }
          aggregate: {
            args: Prisma.PatternTagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatternTag>
          }
          groupBy: {
            args: Prisma.PatternTagGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatternTagGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatternTagCountArgs<ExtArgs>
            result: $Utils.Optional<PatternTagCountAggregateOutputType> | number
          }
        }
      }
      LibraryPattern: {
        payload: Prisma.$LibraryPatternPayload<ExtArgs>
        fields: Prisma.LibraryPatternFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LibraryPatternFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPatternPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LibraryPatternFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPatternPayload>
          }
          findFirst: {
            args: Prisma.LibraryPatternFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPatternPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LibraryPatternFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPatternPayload>
          }
          findMany: {
            args: Prisma.LibraryPatternFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPatternPayload>[]
          }
          create: {
            args: Prisma.LibraryPatternCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPatternPayload>
          }
          createMany: {
            args: Prisma.LibraryPatternCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LibraryPatternCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPatternPayload>[]
          }
          delete: {
            args: Prisma.LibraryPatternDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPatternPayload>
          }
          update: {
            args: Prisma.LibraryPatternUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPatternPayload>
          }
          deleteMany: {
            args: Prisma.LibraryPatternDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LibraryPatternUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LibraryPatternUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPatternPayload>[]
          }
          upsert: {
            args: Prisma.LibraryPatternUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LibraryPatternPayload>
          }
          aggregate: {
            args: Prisma.LibraryPatternAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLibraryPattern>
          }
          groupBy: {
            args: Prisma.LibraryPatternGroupByArgs<ExtArgs>
            result: $Utils.Optional<LibraryPatternGroupByOutputType>[]
          }
          count: {
            args: Prisma.LibraryPatternCountArgs<ExtArgs>
            result: $Utils.Optional<LibraryPatternCountAggregateOutputType> | number
          }
        }
      }
      Draft: {
        payload: Prisma.$DraftPayload<ExtArgs>
        fields: Prisma.DraftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DraftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DraftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          findFirst: {
            args: Prisma.DraftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DraftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          findMany: {
            args: Prisma.DraftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>[]
          }
          create: {
            args: Prisma.DraftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          createMany: {
            args: Prisma.DraftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DraftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>[]
          }
          delete: {
            args: Prisma.DraftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          update: {
            args: Prisma.DraftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          deleteMany: {
            args: Prisma.DraftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DraftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DraftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>[]
          }
          upsert: {
            args: Prisma.DraftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPayload>
          }
          aggregate: {
            args: Prisma.DraftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDraft>
          }
          groupBy: {
            args: Prisma.DraftGroupByArgs<ExtArgs>
            result: $Utils.Optional<DraftGroupByOutputType>[]
          }
          count: {
            args: Prisma.DraftCountArgs<ExtArgs>
            result: $Utils.Optional<DraftCountAggregateOutputType> | number
          }
        }
      }
      DraftPattern: {
        payload: Prisma.$DraftPatternPayload<ExtArgs>
        fields: Prisma.DraftPatternFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DraftPatternFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPatternPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DraftPatternFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPatternPayload>
          }
          findFirst: {
            args: Prisma.DraftPatternFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPatternPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DraftPatternFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPatternPayload>
          }
          findMany: {
            args: Prisma.DraftPatternFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPatternPayload>[]
          }
          create: {
            args: Prisma.DraftPatternCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPatternPayload>
          }
          createMany: {
            args: Prisma.DraftPatternCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DraftPatternCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPatternPayload>[]
          }
          delete: {
            args: Prisma.DraftPatternDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPatternPayload>
          }
          update: {
            args: Prisma.DraftPatternUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPatternPayload>
          }
          deleteMany: {
            args: Prisma.DraftPatternDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DraftPatternUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DraftPatternUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPatternPayload>[]
          }
          upsert: {
            args: Prisma.DraftPatternUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DraftPatternPayload>
          }
          aggregate: {
            args: Prisma.DraftPatternAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDraftPattern>
          }
          groupBy: {
            args: Prisma.DraftPatternGroupByArgs<ExtArgs>
            result: $Utils.Optional<DraftPatternGroupByOutputType>[]
          }
          count: {
            args: Prisma.DraftPatternCountArgs<ExtArgs>
            result: $Utils.Optional<DraftPatternCountAggregateOutputType> | number
          }
        }
      }
      PatternSearchData: {
        payload: Prisma.$PatternSearchDataPayload<ExtArgs>
        fields: Prisma.PatternSearchDataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatternSearchDataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSearchDataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatternSearchDataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSearchDataPayload>
          }
          findFirst: {
            args: Prisma.PatternSearchDataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSearchDataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatternSearchDataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSearchDataPayload>
          }
          findMany: {
            args: Prisma.PatternSearchDataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSearchDataPayload>[]
          }
          create: {
            args: Prisma.PatternSearchDataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSearchDataPayload>
          }
          createMany: {
            args: Prisma.PatternSearchDataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatternSearchDataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSearchDataPayload>[]
          }
          delete: {
            args: Prisma.PatternSearchDataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSearchDataPayload>
          }
          update: {
            args: Prisma.PatternSearchDataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSearchDataPayload>
          }
          deleteMany: {
            args: Prisma.PatternSearchDataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatternSearchDataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatternSearchDataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSearchDataPayload>[]
          }
          upsert: {
            args: Prisma.PatternSearchDataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSearchDataPayload>
          }
          aggregate: {
            args: Prisma.PatternSearchDataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatternSearchData>
          }
          groupBy: {
            args: Prisma.PatternSearchDataGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatternSearchDataGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatternSearchDataCountArgs<ExtArgs>
            result: $Utils.Optional<PatternSearchDataCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    tag?: TagOmit
    pattern?: PatternOmit
    patternTag?: PatternTagOmit
    libraryPattern?: LibraryPatternOmit
    draft?: DraftOmit
    draftPattern?: DraftPatternOmit
    patternSearchData?: PatternSearchDataOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    library: number
    drafts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | UserCountOutputTypeCountLibraryArgs
    drafts?: boolean | UserCountOutputTypeCountDraftsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLibraryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryPatternWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDraftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    patterns: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patterns?: boolean | TagCountOutputTypeCountPatternsArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountPatternsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatternTagWhereInput
  }


  /**
   * Count Type PatternCountOutputType
   */

  export type PatternCountOutputType = {
    tags: number
    draftsPatterns: number
    library: number
  }

  export type PatternCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | PatternCountOutputTypeCountTagsArgs
    draftsPatterns?: boolean | PatternCountOutputTypeCountDraftsPatternsArgs
    library?: boolean | PatternCountOutputTypeCountLibraryArgs
  }

  // Custom InputTypes
  /**
   * PatternCountOutputType without action
   */
  export type PatternCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternCountOutputType
     */
    select?: PatternCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatternCountOutputType without action
   */
  export type PatternCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatternTagWhereInput
  }

  /**
   * PatternCountOutputType without action
   */
  export type PatternCountOutputTypeCountDraftsPatternsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftPatternWhereInput
  }

  /**
   * PatternCountOutputType without action
   */
  export type PatternCountOutputTypeCountLibraryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryPatternWhereInput
  }


  /**
   * Count Type DraftCountOutputType
   */

  export type DraftCountOutputType = {
    patterns: number
  }

  export type DraftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patterns?: boolean | DraftCountOutputTypeCountPatternsArgs
  }

  // Custom InputTypes
  /**
   * DraftCountOutputType without action
   */
  export type DraftCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftCountOutputType
     */
    select?: DraftCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DraftCountOutputType without action
   */
  export type DraftCountOutputTypeCountPatternsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftPatternWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    isActive: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    isActive?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    isActive?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    isActive?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    createdAt: Date
    isActive: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    isActive?: boolean
    library?: boolean | User$libraryArgs<ExtArgs>
    drafts?: boolean | User$draftsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    isActive?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt" | "isActive", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    library?: boolean | User$libraryArgs<ExtArgs>
    drafts?: boolean | User$draftsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      library: Prisma.$LibraryPatternPayload<ExtArgs>[]
      drafts: Prisma.$DraftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      createdAt: Date
      isActive: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    library<T extends User$libraryArgs<ExtArgs> = {}>(args?: Subset<T, User$libraryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPatternPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    drafts<T extends User$draftsArgs<ExtArgs> = {}>(args?: Subset<T, User$draftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.library
   */
  export type User$libraryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryPattern
     */
    select?: LibraryPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryPattern
     */
    omit?: LibraryPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryPatternInclude<ExtArgs> | null
    where?: LibraryPatternWhereInput
    orderBy?: LibraryPatternOrderByWithRelationInput | LibraryPatternOrderByWithRelationInput[]
    cursor?: LibraryPatternWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibraryPatternScalarFieldEnum | LibraryPatternScalarFieldEnum[]
  }

  /**
   * User.drafts
   */
  export type User$draftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftInclude<ExtArgs> | null
    where?: DraftWhereInput
    orderBy?: DraftOrderByWithRelationInput | DraftOrderByWithRelationInput[]
    cursor?: DraftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DraftScalarFieldEnum | DraftScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    patterns?: boolean | Tag$patternsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patterns?: boolean | Tag$patternsArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      patterns: Prisma.$PatternTagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    patterns<T extends Tag$patternsArgs<ExtArgs> = {}>(args?: Subset<T, Tag$patternsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.patterns
   */
  export type Tag$patternsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternTag
     */
    select?: PatternTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternTag
     */
    omit?: PatternTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternTagInclude<ExtArgs> | null
    where?: PatternTagWhereInput
    orderBy?: PatternTagOrderByWithRelationInput | PatternTagOrderByWithRelationInput[]
    cursor?: PatternTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatternTagScalarFieldEnum | PatternTagScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Pattern
   */

  export type AggregatePattern = {
    _count: PatternCountAggregateOutputType | null
    _avg: PatternAvgAggregateOutputType | null
    _sum: PatternSumAggregateOutputType | null
    _min: PatternMinAggregateOutputType | null
    _max: PatternMaxAggregateOutputType | null
  }

  export type PatternAvgAggregateOutputType = {
    id: number | null
    signatureBits: number | null
  }

  export type PatternSumAggregateOutputType = {
    id: number | null
    signatureBits: number | null
  }

  export type PatternMinAggregateOutputType = {
    id: number | null
    signatureBits: number | null
    signatureMeasure: $Enums.SignatureMeasure | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatternMaxAggregateOutputType = {
    id: number | null
    signatureBits: number | null
    signatureMeasure: $Enums.SignatureMeasure | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatternCountAggregateOutputType = {
    id: number
    signatureBits: number
    signatureMeasure: number
    beats: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatternAvgAggregateInputType = {
    id?: true
    signatureBits?: true
  }

  export type PatternSumAggregateInputType = {
    id?: true
    signatureBits?: true
  }

  export type PatternMinAggregateInputType = {
    id?: true
    signatureBits?: true
    signatureMeasure?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatternMaxAggregateInputType = {
    id?: true
    signatureBits?: true
    signatureMeasure?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatternCountAggregateInputType = {
    id?: true
    signatureBits?: true
    signatureMeasure?: true
    beats?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatternAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pattern to aggregate.
     */
    where?: PatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patterns to fetch.
     */
    orderBy?: PatternOrderByWithRelationInput | PatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patterns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patterns
    **/
    _count?: true | PatternCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatternAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatternSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatternMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatternMaxAggregateInputType
  }

  export type GetPatternAggregateType<T extends PatternAggregateArgs> = {
        [P in keyof T & keyof AggregatePattern]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePattern[P]>
      : GetScalarType<T[P], AggregatePattern[P]>
  }




  export type PatternGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatternWhereInput
    orderBy?: PatternOrderByWithAggregationInput | PatternOrderByWithAggregationInput[]
    by: PatternScalarFieldEnum[] | PatternScalarFieldEnum
    having?: PatternScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatternCountAggregateInputType | true
    _avg?: PatternAvgAggregateInputType
    _sum?: PatternSumAggregateInputType
    _min?: PatternMinAggregateInputType
    _max?: PatternMaxAggregateInputType
  }

  export type PatternGroupByOutputType = {
    id: number
    signatureBits: number
    signatureMeasure: $Enums.SignatureMeasure
    beats: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: PatternCountAggregateOutputType | null
    _avg: PatternAvgAggregateOutputType | null
    _sum: PatternSumAggregateOutputType | null
    _min: PatternMinAggregateOutputType | null
    _max: PatternMaxAggregateOutputType | null
  }

  type GetPatternGroupByPayload<T extends PatternGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatternGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatternGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatternGroupByOutputType[P]>
            : GetScalarType<T[P], PatternGroupByOutputType[P]>
        }
      >
    >


  export type PatternSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    signatureBits?: boolean
    signatureMeasure?: boolean
    beats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tags?: boolean | Pattern$tagsArgs<ExtArgs>
    draftsPatterns?: boolean | Pattern$draftsPatternsArgs<ExtArgs>
    library?: boolean | Pattern$libraryArgs<ExtArgs>
    searchData?: boolean | Pattern$searchDataArgs<ExtArgs>
    _count?: boolean | PatternCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pattern"]>

  export type PatternSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    signatureBits?: boolean
    signatureMeasure?: boolean
    beats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pattern"]>

  export type PatternSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    signatureBits?: boolean
    signatureMeasure?: boolean
    beats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pattern"]>

  export type PatternSelectScalar = {
    id?: boolean
    signatureBits?: boolean
    signatureMeasure?: boolean
    beats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatternOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "signatureBits" | "signatureMeasure" | "beats" | "createdAt" | "updatedAt", ExtArgs["result"]["pattern"]>
  export type PatternInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | Pattern$tagsArgs<ExtArgs>
    draftsPatterns?: boolean | Pattern$draftsPatternsArgs<ExtArgs>
    library?: boolean | Pattern$libraryArgs<ExtArgs>
    searchData?: boolean | Pattern$searchDataArgs<ExtArgs>
    _count?: boolean | PatternCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatternIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PatternIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PatternPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pattern"
    objects: {
      tags: Prisma.$PatternTagPayload<ExtArgs>[]
      draftsPatterns: Prisma.$DraftPatternPayload<ExtArgs>[]
      library: Prisma.$LibraryPatternPayload<ExtArgs>[]
      searchData: Prisma.$PatternSearchDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      signatureBits: number
      signatureMeasure: $Enums.SignatureMeasure
      beats: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pattern"]>
    composites: {}
  }

  type PatternGetPayload<S extends boolean | null | undefined | PatternDefaultArgs> = $Result.GetResult<Prisma.$PatternPayload, S>

  type PatternCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatternFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatternCountAggregateInputType | true
    }

  export interface PatternDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pattern'], meta: { name: 'Pattern' } }
    /**
     * Find zero or one Pattern that matches the filter.
     * @param {PatternFindUniqueArgs} args - Arguments to find a Pattern
     * @example
     * // Get one Pattern
     * const pattern = await prisma.pattern.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatternFindUniqueArgs>(args: SelectSubset<T, PatternFindUniqueArgs<ExtArgs>>): Prisma__PatternClient<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pattern that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatternFindUniqueOrThrowArgs} args - Arguments to find a Pattern
     * @example
     * // Get one Pattern
     * const pattern = await prisma.pattern.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatternFindUniqueOrThrowArgs>(args: SelectSubset<T, PatternFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatternClient<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pattern that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternFindFirstArgs} args - Arguments to find a Pattern
     * @example
     * // Get one Pattern
     * const pattern = await prisma.pattern.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatternFindFirstArgs>(args?: SelectSubset<T, PatternFindFirstArgs<ExtArgs>>): Prisma__PatternClient<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pattern that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternFindFirstOrThrowArgs} args - Arguments to find a Pattern
     * @example
     * // Get one Pattern
     * const pattern = await prisma.pattern.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatternFindFirstOrThrowArgs>(args?: SelectSubset<T, PatternFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatternClient<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patterns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patterns
     * const patterns = await prisma.pattern.findMany()
     * 
     * // Get first 10 Patterns
     * const patterns = await prisma.pattern.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patternWithIdOnly = await prisma.pattern.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatternFindManyArgs>(args?: SelectSubset<T, PatternFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pattern.
     * @param {PatternCreateArgs} args - Arguments to create a Pattern.
     * @example
     * // Create one Pattern
     * const Pattern = await prisma.pattern.create({
     *   data: {
     *     // ... data to create a Pattern
     *   }
     * })
     * 
     */
    create<T extends PatternCreateArgs>(args: SelectSubset<T, PatternCreateArgs<ExtArgs>>): Prisma__PatternClient<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patterns.
     * @param {PatternCreateManyArgs} args - Arguments to create many Patterns.
     * @example
     * // Create many Patterns
     * const pattern = await prisma.pattern.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatternCreateManyArgs>(args?: SelectSubset<T, PatternCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patterns and returns the data saved in the database.
     * @param {PatternCreateManyAndReturnArgs} args - Arguments to create many Patterns.
     * @example
     * // Create many Patterns
     * const pattern = await prisma.pattern.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patterns and only return the `id`
     * const patternWithIdOnly = await prisma.pattern.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatternCreateManyAndReturnArgs>(args?: SelectSubset<T, PatternCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pattern.
     * @param {PatternDeleteArgs} args - Arguments to delete one Pattern.
     * @example
     * // Delete one Pattern
     * const Pattern = await prisma.pattern.delete({
     *   where: {
     *     // ... filter to delete one Pattern
     *   }
     * })
     * 
     */
    delete<T extends PatternDeleteArgs>(args: SelectSubset<T, PatternDeleteArgs<ExtArgs>>): Prisma__PatternClient<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pattern.
     * @param {PatternUpdateArgs} args - Arguments to update one Pattern.
     * @example
     * // Update one Pattern
     * const pattern = await prisma.pattern.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatternUpdateArgs>(args: SelectSubset<T, PatternUpdateArgs<ExtArgs>>): Prisma__PatternClient<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patterns.
     * @param {PatternDeleteManyArgs} args - Arguments to filter Patterns to delete.
     * @example
     * // Delete a few Patterns
     * const { count } = await prisma.pattern.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatternDeleteManyArgs>(args?: SelectSubset<T, PatternDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patterns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patterns
     * const pattern = await prisma.pattern.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatternUpdateManyArgs>(args: SelectSubset<T, PatternUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patterns and returns the data updated in the database.
     * @param {PatternUpdateManyAndReturnArgs} args - Arguments to update many Patterns.
     * @example
     * // Update many Patterns
     * const pattern = await prisma.pattern.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patterns and only return the `id`
     * const patternWithIdOnly = await prisma.pattern.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatternUpdateManyAndReturnArgs>(args: SelectSubset<T, PatternUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pattern.
     * @param {PatternUpsertArgs} args - Arguments to update or create a Pattern.
     * @example
     * // Update or create a Pattern
     * const pattern = await prisma.pattern.upsert({
     *   create: {
     *     // ... data to create a Pattern
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pattern we want to update
     *   }
     * })
     */
    upsert<T extends PatternUpsertArgs>(args: SelectSubset<T, PatternUpsertArgs<ExtArgs>>): Prisma__PatternClient<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patterns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternCountArgs} args - Arguments to filter Patterns to count.
     * @example
     * // Count the number of Patterns
     * const count = await prisma.pattern.count({
     *   where: {
     *     // ... the filter for the Patterns we want to count
     *   }
     * })
    **/
    count<T extends PatternCountArgs>(
      args?: Subset<T, PatternCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatternCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pattern.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatternAggregateArgs>(args: Subset<T, PatternAggregateArgs>): Prisma.PrismaPromise<GetPatternAggregateType<T>>

    /**
     * Group by Pattern.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatternGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatternGroupByArgs['orderBy'] }
        : { orderBy?: PatternGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatternGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatternGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pattern model
   */
  readonly fields: PatternFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pattern.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatternClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tags<T extends Pattern$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Pattern$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    draftsPatterns<T extends Pattern$draftsPatternsArgs<ExtArgs> = {}>(args?: Subset<T, Pattern$draftsPatternsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftPatternPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    library<T extends Pattern$libraryArgs<ExtArgs> = {}>(args?: Subset<T, Pattern$libraryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPatternPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    searchData<T extends Pattern$searchDataArgs<ExtArgs> = {}>(args?: Subset<T, Pattern$searchDataArgs<ExtArgs>>): Prisma__PatternSearchDataClient<$Result.GetResult<Prisma.$PatternSearchDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pattern model
   */
  interface PatternFieldRefs {
    readonly id: FieldRef<"Pattern", 'Int'>
    readonly signatureBits: FieldRef<"Pattern", 'Int'>
    readonly signatureMeasure: FieldRef<"Pattern", 'SignatureMeasure'>
    readonly beats: FieldRef<"Pattern", 'Json'>
    readonly createdAt: FieldRef<"Pattern", 'DateTime'>
    readonly updatedAt: FieldRef<"Pattern", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pattern findUnique
   */
  export type PatternFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pattern
     */
    select?: PatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pattern
     */
    omit?: PatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternInclude<ExtArgs> | null
    /**
     * Filter, which Pattern to fetch.
     */
    where: PatternWhereUniqueInput
  }

  /**
   * Pattern findUniqueOrThrow
   */
  export type PatternFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pattern
     */
    select?: PatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pattern
     */
    omit?: PatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternInclude<ExtArgs> | null
    /**
     * Filter, which Pattern to fetch.
     */
    where: PatternWhereUniqueInput
  }

  /**
   * Pattern findFirst
   */
  export type PatternFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pattern
     */
    select?: PatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pattern
     */
    omit?: PatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternInclude<ExtArgs> | null
    /**
     * Filter, which Pattern to fetch.
     */
    where?: PatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patterns to fetch.
     */
    orderBy?: PatternOrderByWithRelationInput | PatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patterns.
     */
    cursor?: PatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patterns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patterns.
     */
    distinct?: PatternScalarFieldEnum | PatternScalarFieldEnum[]
  }

  /**
   * Pattern findFirstOrThrow
   */
  export type PatternFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pattern
     */
    select?: PatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pattern
     */
    omit?: PatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternInclude<ExtArgs> | null
    /**
     * Filter, which Pattern to fetch.
     */
    where?: PatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patterns to fetch.
     */
    orderBy?: PatternOrderByWithRelationInput | PatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patterns.
     */
    cursor?: PatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patterns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patterns.
     */
    distinct?: PatternScalarFieldEnum | PatternScalarFieldEnum[]
  }

  /**
   * Pattern findMany
   */
  export type PatternFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pattern
     */
    select?: PatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pattern
     */
    omit?: PatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternInclude<ExtArgs> | null
    /**
     * Filter, which Patterns to fetch.
     */
    where?: PatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patterns to fetch.
     */
    orderBy?: PatternOrderByWithRelationInput | PatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patterns.
     */
    cursor?: PatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patterns.
     */
    skip?: number
    distinct?: PatternScalarFieldEnum | PatternScalarFieldEnum[]
  }

  /**
   * Pattern create
   */
  export type PatternCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pattern
     */
    select?: PatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pattern
     */
    omit?: PatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternInclude<ExtArgs> | null
    /**
     * The data needed to create a Pattern.
     */
    data?: XOR<PatternCreateInput, PatternUncheckedCreateInput>
  }

  /**
   * Pattern createMany
   */
  export type PatternCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patterns.
     */
    data: PatternCreateManyInput | PatternCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pattern createManyAndReturn
   */
  export type PatternCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pattern
     */
    select?: PatternSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pattern
     */
    omit?: PatternOmit<ExtArgs> | null
    /**
     * The data used to create many Patterns.
     */
    data: PatternCreateManyInput | PatternCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pattern update
   */
  export type PatternUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pattern
     */
    select?: PatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pattern
     */
    omit?: PatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternInclude<ExtArgs> | null
    /**
     * The data needed to update a Pattern.
     */
    data: XOR<PatternUpdateInput, PatternUncheckedUpdateInput>
    /**
     * Choose, which Pattern to update.
     */
    where: PatternWhereUniqueInput
  }

  /**
   * Pattern updateMany
   */
  export type PatternUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patterns.
     */
    data: XOR<PatternUpdateManyMutationInput, PatternUncheckedUpdateManyInput>
    /**
     * Filter which Patterns to update
     */
    where?: PatternWhereInput
    /**
     * Limit how many Patterns to update.
     */
    limit?: number
  }

  /**
   * Pattern updateManyAndReturn
   */
  export type PatternUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pattern
     */
    select?: PatternSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pattern
     */
    omit?: PatternOmit<ExtArgs> | null
    /**
     * The data used to update Patterns.
     */
    data: XOR<PatternUpdateManyMutationInput, PatternUncheckedUpdateManyInput>
    /**
     * Filter which Patterns to update
     */
    where?: PatternWhereInput
    /**
     * Limit how many Patterns to update.
     */
    limit?: number
  }

  /**
   * Pattern upsert
   */
  export type PatternUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pattern
     */
    select?: PatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pattern
     */
    omit?: PatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternInclude<ExtArgs> | null
    /**
     * The filter to search for the Pattern to update in case it exists.
     */
    where: PatternWhereUniqueInput
    /**
     * In case the Pattern found by the `where` argument doesn't exist, create a new Pattern with this data.
     */
    create: XOR<PatternCreateInput, PatternUncheckedCreateInput>
    /**
     * In case the Pattern was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatternUpdateInput, PatternUncheckedUpdateInput>
  }

  /**
   * Pattern delete
   */
  export type PatternDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pattern
     */
    select?: PatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pattern
     */
    omit?: PatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternInclude<ExtArgs> | null
    /**
     * Filter which Pattern to delete.
     */
    where: PatternWhereUniqueInput
  }

  /**
   * Pattern deleteMany
   */
  export type PatternDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patterns to delete
     */
    where?: PatternWhereInput
    /**
     * Limit how many Patterns to delete.
     */
    limit?: number
  }

  /**
   * Pattern.tags
   */
  export type Pattern$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternTag
     */
    select?: PatternTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternTag
     */
    omit?: PatternTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternTagInclude<ExtArgs> | null
    where?: PatternTagWhereInput
    orderBy?: PatternTagOrderByWithRelationInput | PatternTagOrderByWithRelationInput[]
    cursor?: PatternTagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatternTagScalarFieldEnum | PatternTagScalarFieldEnum[]
  }

  /**
   * Pattern.draftsPatterns
   */
  export type Pattern$draftsPatternsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftPattern
     */
    select?: DraftPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftPattern
     */
    omit?: DraftPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftPatternInclude<ExtArgs> | null
    where?: DraftPatternWhereInput
    orderBy?: DraftPatternOrderByWithRelationInput | DraftPatternOrderByWithRelationInput[]
    cursor?: DraftPatternWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DraftPatternScalarFieldEnum | DraftPatternScalarFieldEnum[]
  }

  /**
   * Pattern.library
   */
  export type Pattern$libraryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryPattern
     */
    select?: LibraryPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryPattern
     */
    omit?: LibraryPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryPatternInclude<ExtArgs> | null
    where?: LibraryPatternWhereInput
    orderBy?: LibraryPatternOrderByWithRelationInput | LibraryPatternOrderByWithRelationInput[]
    cursor?: LibraryPatternWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LibraryPatternScalarFieldEnum | LibraryPatternScalarFieldEnum[]
  }

  /**
   * Pattern.searchData
   */
  export type Pattern$searchDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSearchData
     */
    select?: PatternSearchDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSearchData
     */
    omit?: PatternSearchDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSearchDataInclude<ExtArgs> | null
    where?: PatternSearchDataWhereInput
  }

  /**
   * Pattern without action
   */
  export type PatternDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pattern
     */
    select?: PatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pattern
     */
    omit?: PatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternInclude<ExtArgs> | null
  }


  /**
   * Model PatternTag
   */

  export type AggregatePatternTag = {
    _count: PatternTagCountAggregateOutputType | null
    _avg: PatternTagAvgAggregateOutputType | null
    _sum: PatternTagSumAggregateOutputType | null
    _min: PatternTagMinAggregateOutputType | null
    _max: PatternTagMaxAggregateOutputType | null
  }

  export type PatternTagAvgAggregateOutputType = {
    patternId: number | null
    tagId: number | null
  }

  export type PatternTagSumAggregateOutputType = {
    patternId: number | null
    tagId: number | null
  }

  export type PatternTagMinAggregateOutputType = {
    patternId: number | null
    tagId: number | null
  }

  export type PatternTagMaxAggregateOutputType = {
    patternId: number | null
    tagId: number | null
  }

  export type PatternTagCountAggregateOutputType = {
    patternId: number
    tagId: number
    _all: number
  }


  export type PatternTagAvgAggregateInputType = {
    patternId?: true
    tagId?: true
  }

  export type PatternTagSumAggregateInputType = {
    patternId?: true
    tagId?: true
  }

  export type PatternTagMinAggregateInputType = {
    patternId?: true
    tagId?: true
  }

  export type PatternTagMaxAggregateInputType = {
    patternId?: true
    tagId?: true
  }

  export type PatternTagCountAggregateInputType = {
    patternId?: true
    tagId?: true
    _all?: true
  }

  export type PatternTagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatternTag to aggregate.
     */
    where?: PatternTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternTags to fetch.
     */
    orderBy?: PatternTagOrderByWithRelationInput | PatternTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatternTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatternTags
    **/
    _count?: true | PatternTagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatternTagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatternTagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatternTagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatternTagMaxAggregateInputType
  }

  export type GetPatternTagAggregateType<T extends PatternTagAggregateArgs> = {
        [P in keyof T & keyof AggregatePatternTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatternTag[P]>
      : GetScalarType<T[P], AggregatePatternTag[P]>
  }




  export type PatternTagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatternTagWhereInput
    orderBy?: PatternTagOrderByWithAggregationInput | PatternTagOrderByWithAggregationInput[]
    by: PatternTagScalarFieldEnum[] | PatternTagScalarFieldEnum
    having?: PatternTagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatternTagCountAggregateInputType | true
    _avg?: PatternTagAvgAggregateInputType
    _sum?: PatternTagSumAggregateInputType
    _min?: PatternTagMinAggregateInputType
    _max?: PatternTagMaxAggregateInputType
  }

  export type PatternTagGroupByOutputType = {
    patternId: number
    tagId: number
    _count: PatternTagCountAggregateOutputType | null
    _avg: PatternTagAvgAggregateOutputType | null
    _sum: PatternTagSumAggregateOutputType | null
    _min: PatternTagMinAggregateOutputType | null
    _max: PatternTagMaxAggregateOutputType | null
  }

  type GetPatternTagGroupByPayload<T extends PatternTagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatternTagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatternTagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatternTagGroupByOutputType[P]>
            : GetScalarType<T[P], PatternTagGroupByOutputType[P]>
        }
      >
    >


  export type PatternTagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patternId?: boolean
    tagId?: boolean
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patternTag"]>

  export type PatternTagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patternId?: boolean
    tagId?: boolean
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patternTag"]>

  export type PatternTagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patternId?: boolean
    tagId?: boolean
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patternTag"]>

  export type PatternTagSelectScalar = {
    patternId?: boolean
    tagId?: boolean
  }

  export type PatternTagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"patternId" | "tagId", ExtArgs["result"]["patternTag"]>
  export type PatternTagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type PatternTagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }
  export type PatternTagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
    tag?: boolean | TagDefaultArgs<ExtArgs>
  }

  export type $PatternTagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatternTag"
    objects: {
      pattern: Prisma.$PatternPayload<ExtArgs>
      tag: Prisma.$TagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      patternId: number
      tagId: number
    }, ExtArgs["result"]["patternTag"]>
    composites: {}
  }

  type PatternTagGetPayload<S extends boolean | null | undefined | PatternTagDefaultArgs> = $Result.GetResult<Prisma.$PatternTagPayload, S>

  type PatternTagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatternTagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatternTagCountAggregateInputType | true
    }

  export interface PatternTagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatternTag'], meta: { name: 'PatternTag' } }
    /**
     * Find zero or one PatternTag that matches the filter.
     * @param {PatternTagFindUniqueArgs} args - Arguments to find a PatternTag
     * @example
     * // Get one PatternTag
     * const patternTag = await prisma.patternTag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatternTagFindUniqueArgs>(args: SelectSubset<T, PatternTagFindUniqueArgs<ExtArgs>>): Prisma__PatternTagClient<$Result.GetResult<Prisma.$PatternTagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatternTag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatternTagFindUniqueOrThrowArgs} args - Arguments to find a PatternTag
     * @example
     * // Get one PatternTag
     * const patternTag = await prisma.patternTag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatternTagFindUniqueOrThrowArgs>(args: SelectSubset<T, PatternTagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatternTagClient<$Result.GetResult<Prisma.$PatternTagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatternTag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternTagFindFirstArgs} args - Arguments to find a PatternTag
     * @example
     * // Get one PatternTag
     * const patternTag = await prisma.patternTag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatternTagFindFirstArgs>(args?: SelectSubset<T, PatternTagFindFirstArgs<ExtArgs>>): Prisma__PatternTagClient<$Result.GetResult<Prisma.$PatternTagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatternTag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternTagFindFirstOrThrowArgs} args - Arguments to find a PatternTag
     * @example
     * // Get one PatternTag
     * const patternTag = await prisma.patternTag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatternTagFindFirstOrThrowArgs>(args?: SelectSubset<T, PatternTagFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatternTagClient<$Result.GetResult<Prisma.$PatternTagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatternTags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternTagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatternTags
     * const patternTags = await prisma.patternTag.findMany()
     * 
     * // Get first 10 PatternTags
     * const patternTags = await prisma.patternTag.findMany({ take: 10 })
     * 
     * // Only select the `patternId`
     * const patternTagWithPatternIdOnly = await prisma.patternTag.findMany({ select: { patternId: true } })
     * 
     */
    findMany<T extends PatternTagFindManyArgs>(args?: SelectSubset<T, PatternTagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatternTag.
     * @param {PatternTagCreateArgs} args - Arguments to create a PatternTag.
     * @example
     * // Create one PatternTag
     * const PatternTag = await prisma.patternTag.create({
     *   data: {
     *     // ... data to create a PatternTag
     *   }
     * })
     * 
     */
    create<T extends PatternTagCreateArgs>(args: SelectSubset<T, PatternTagCreateArgs<ExtArgs>>): Prisma__PatternTagClient<$Result.GetResult<Prisma.$PatternTagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatternTags.
     * @param {PatternTagCreateManyArgs} args - Arguments to create many PatternTags.
     * @example
     * // Create many PatternTags
     * const patternTag = await prisma.patternTag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatternTagCreateManyArgs>(args?: SelectSubset<T, PatternTagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatternTags and returns the data saved in the database.
     * @param {PatternTagCreateManyAndReturnArgs} args - Arguments to create many PatternTags.
     * @example
     * // Create many PatternTags
     * const patternTag = await prisma.patternTag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatternTags and only return the `patternId`
     * const patternTagWithPatternIdOnly = await prisma.patternTag.createManyAndReturn({
     *   select: { patternId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatternTagCreateManyAndReturnArgs>(args?: SelectSubset<T, PatternTagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternTagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatternTag.
     * @param {PatternTagDeleteArgs} args - Arguments to delete one PatternTag.
     * @example
     * // Delete one PatternTag
     * const PatternTag = await prisma.patternTag.delete({
     *   where: {
     *     // ... filter to delete one PatternTag
     *   }
     * })
     * 
     */
    delete<T extends PatternTagDeleteArgs>(args: SelectSubset<T, PatternTagDeleteArgs<ExtArgs>>): Prisma__PatternTagClient<$Result.GetResult<Prisma.$PatternTagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatternTag.
     * @param {PatternTagUpdateArgs} args - Arguments to update one PatternTag.
     * @example
     * // Update one PatternTag
     * const patternTag = await prisma.patternTag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatternTagUpdateArgs>(args: SelectSubset<T, PatternTagUpdateArgs<ExtArgs>>): Prisma__PatternTagClient<$Result.GetResult<Prisma.$PatternTagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatternTags.
     * @param {PatternTagDeleteManyArgs} args - Arguments to filter PatternTags to delete.
     * @example
     * // Delete a few PatternTags
     * const { count } = await prisma.patternTag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatternTagDeleteManyArgs>(args?: SelectSubset<T, PatternTagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatternTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternTagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatternTags
     * const patternTag = await prisma.patternTag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatternTagUpdateManyArgs>(args: SelectSubset<T, PatternTagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatternTags and returns the data updated in the database.
     * @param {PatternTagUpdateManyAndReturnArgs} args - Arguments to update many PatternTags.
     * @example
     * // Update many PatternTags
     * const patternTag = await prisma.patternTag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatternTags and only return the `patternId`
     * const patternTagWithPatternIdOnly = await prisma.patternTag.updateManyAndReturn({
     *   select: { patternId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatternTagUpdateManyAndReturnArgs>(args: SelectSubset<T, PatternTagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternTagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatternTag.
     * @param {PatternTagUpsertArgs} args - Arguments to update or create a PatternTag.
     * @example
     * // Update or create a PatternTag
     * const patternTag = await prisma.patternTag.upsert({
     *   create: {
     *     // ... data to create a PatternTag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatternTag we want to update
     *   }
     * })
     */
    upsert<T extends PatternTagUpsertArgs>(args: SelectSubset<T, PatternTagUpsertArgs<ExtArgs>>): Prisma__PatternTagClient<$Result.GetResult<Prisma.$PatternTagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatternTags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternTagCountArgs} args - Arguments to filter PatternTags to count.
     * @example
     * // Count the number of PatternTags
     * const count = await prisma.patternTag.count({
     *   where: {
     *     // ... the filter for the PatternTags we want to count
     *   }
     * })
    **/
    count<T extends PatternTagCountArgs>(
      args?: Subset<T, PatternTagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatternTagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatternTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternTagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatternTagAggregateArgs>(args: Subset<T, PatternTagAggregateArgs>): Prisma.PrismaPromise<GetPatternTagAggregateType<T>>

    /**
     * Group by PatternTag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternTagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatternTagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatternTagGroupByArgs['orderBy'] }
        : { orderBy?: PatternTagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatternTagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatternTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatternTag model
   */
  readonly fields: PatternTagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatternTag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatternTagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pattern<T extends PatternDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatternDefaultArgs<ExtArgs>>): Prisma__PatternClient<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends TagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TagDefaultArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatternTag model
   */
  interface PatternTagFieldRefs {
    readonly patternId: FieldRef<"PatternTag", 'Int'>
    readonly tagId: FieldRef<"PatternTag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PatternTag findUnique
   */
  export type PatternTagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternTag
     */
    select?: PatternTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternTag
     */
    omit?: PatternTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternTagInclude<ExtArgs> | null
    /**
     * Filter, which PatternTag to fetch.
     */
    where: PatternTagWhereUniqueInput
  }

  /**
   * PatternTag findUniqueOrThrow
   */
  export type PatternTagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternTag
     */
    select?: PatternTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternTag
     */
    omit?: PatternTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternTagInclude<ExtArgs> | null
    /**
     * Filter, which PatternTag to fetch.
     */
    where: PatternTagWhereUniqueInput
  }

  /**
   * PatternTag findFirst
   */
  export type PatternTagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternTag
     */
    select?: PatternTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternTag
     */
    omit?: PatternTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternTagInclude<ExtArgs> | null
    /**
     * Filter, which PatternTag to fetch.
     */
    where?: PatternTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternTags to fetch.
     */
    orderBy?: PatternTagOrderByWithRelationInput | PatternTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatternTags.
     */
    cursor?: PatternTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatternTags.
     */
    distinct?: PatternTagScalarFieldEnum | PatternTagScalarFieldEnum[]
  }

  /**
   * PatternTag findFirstOrThrow
   */
  export type PatternTagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternTag
     */
    select?: PatternTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternTag
     */
    omit?: PatternTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternTagInclude<ExtArgs> | null
    /**
     * Filter, which PatternTag to fetch.
     */
    where?: PatternTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternTags to fetch.
     */
    orderBy?: PatternTagOrderByWithRelationInput | PatternTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatternTags.
     */
    cursor?: PatternTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternTags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatternTags.
     */
    distinct?: PatternTagScalarFieldEnum | PatternTagScalarFieldEnum[]
  }

  /**
   * PatternTag findMany
   */
  export type PatternTagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternTag
     */
    select?: PatternTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternTag
     */
    omit?: PatternTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternTagInclude<ExtArgs> | null
    /**
     * Filter, which PatternTags to fetch.
     */
    where?: PatternTagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternTags to fetch.
     */
    orderBy?: PatternTagOrderByWithRelationInput | PatternTagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatternTags.
     */
    cursor?: PatternTagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternTags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternTags.
     */
    skip?: number
    distinct?: PatternTagScalarFieldEnum | PatternTagScalarFieldEnum[]
  }

  /**
   * PatternTag create
   */
  export type PatternTagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternTag
     */
    select?: PatternTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternTag
     */
    omit?: PatternTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternTagInclude<ExtArgs> | null
    /**
     * The data needed to create a PatternTag.
     */
    data: XOR<PatternTagCreateInput, PatternTagUncheckedCreateInput>
  }

  /**
   * PatternTag createMany
   */
  export type PatternTagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatternTags.
     */
    data: PatternTagCreateManyInput | PatternTagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatternTag createManyAndReturn
   */
  export type PatternTagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternTag
     */
    select?: PatternTagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatternTag
     */
    omit?: PatternTagOmit<ExtArgs> | null
    /**
     * The data used to create many PatternTags.
     */
    data: PatternTagCreateManyInput | PatternTagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternTagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatternTag update
   */
  export type PatternTagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternTag
     */
    select?: PatternTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternTag
     */
    omit?: PatternTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternTagInclude<ExtArgs> | null
    /**
     * The data needed to update a PatternTag.
     */
    data: XOR<PatternTagUpdateInput, PatternTagUncheckedUpdateInput>
    /**
     * Choose, which PatternTag to update.
     */
    where: PatternTagWhereUniqueInput
  }

  /**
   * PatternTag updateMany
   */
  export type PatternTagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatternTags.
     */
    data: XOR<PatternTagUpdateManyMutationInput, PatternTagUncheckedUpdateManyInput>
    /**
     * Filter which PatternTags to update
     */
    where?: PatternTagWhereInput
    /**
     * Limit how many PatternTags to update.
     */
    limit?: number
  }

  /**
   * PatternTag updateManyAndReturn
   */
  export type PatternTagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternTag
     */
    select?: PatternTagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatternTag
     */
    omit?: PatternTagOmit<ExtArgs> | null
    /**
     * The data used to update PatternTags.
     */
    data: XOR<PatternTagUpdateManyMutationInput, PatternTagUncheckedUpdateManyInput>
    /**
     * Filter which PatternTags to update
     */
    where?: PatternTagWhereInput
    /**
     * Limit how many PatternTags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternTagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatternTag upsert
   */
  export type PatternTagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternTag
     */
    select?: PatternTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternTag
     */
    omit?: PatternTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternTagInclude<ExtArgs> | null
    /**
     * The filter to search for the PatternTag to update in case it exists.
     */
    where: PatternTagWhereUniqueInput
    /**
     * In case the PatternTag found by the `where` argument doesn't exist, create a new PatternTag with this data.
     */
    create: XOR<PatternTagCreateInput, PatternTagUncheckedCreateInput>
    /**
     * In case the PatternTag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatternTagUpdateInput, PatternTagUncheckedUpdateInput>
  }

  /**
   * PatternTag delete
   */
  export type PatternTagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternTag
     */
    select?: PatternTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternTag
     */
    omit?: PatternTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternTagInclude<ExtArgs> | null
    /**
     * Filter which PatternTag to delete.
     */
    where: PatternTagWhereUniqueInput
  }

  /**
   * PatternTag deleteMany
   */
  export type PatternTagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatternTags to delete
     */
    where?: PatternTagWhereInput
    /**
     * Limit how many PatternTags to delete.
     */
    limit?: number
  }

  /**
   * PatternTag without action
   */
  export type PatternTagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternTag
     */
    select?: PatternTagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternTag
     */
    omit?: PatternTagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternTagInclude<ExtArgs> | null
  }


  /**
   * Model LibraryPattern
   */

  export type AggregateLibraryPattern = {
    _count: LibraryPatternCountAggregateOutputType | null
    _avg: LibraryPatternAvgAggregateOutputType | null
    _sum: LibraryPatternSumAggregateOutputType | null
    _min: LibraryPatternMinAggregateOutputType | null
    _max: LibraryPatternMaxAggregateOutputType | null
  }

  export type LibraryPatternAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    patternId: number | null
  }

  export type LibraryPatternSumAggregateOutputType = {
    id: number | null
    userId: number | null
    patternId: number | null
  }

  export type LibraryPatternMinAggregateOutputType = {
    id: number | null
    userId: number | null
    patternId: number | null
    isPublic: boolean | null
    title: string | null
  }

  export type LibraryPatternMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    patternId: number | null
    isPublic: boolean | null
    title: string | null
  }

  export type LibraryPatternCountAggregateOutputType = {
    id: number
    userId: number
    patternId: number
    isPublic: number
    title: number
    _all: number
  }


  export type LibraryPatternAvgAggregateInputType = {
    id?: true
    userId?: true
    patternId?: true
  }

  export type LibraryPatternSumAggregateInputType = {
    id?: true
    userId?: true
    patternId?: true
  }

  export type LibraryPatternMinAggregateInputType = {
    id?: true
    userId?: true
    patternId?: true
    isPublic?: true
    title?: true
  }

  export type LibraryPatternMaxAggregateInputType = {
    id?: true
    userId?: true
    patternId?: true
    isPublic?: true
    title?: true
  }

  export type LibraryPatternCountAggregateInputType = {
    id?: true
    userId?: true
    patternId?: true
    isPublic?: true
    title?: true
    _all?: true
  }

  export type LibraryPatternAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryPattern to aggregate.
     */
    where?: LibraryPatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryPatterns to fetch.
     */
    orderBy?: LibraryPatternOrderByWithRelationInput | LibraryPatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LibraryPatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryPatterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryPatterns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LibraryPatterns
    **/
    _count?: true | LibraryPatternCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LibraryPatternAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LibraryPatternSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LibraryPatternMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LibraryPatternMaxAggregateInputType
  }

  export type GetLibraryPatternAggregateType<T extends LibraryPatternAggregateArgs> = {
        [P in keyof T & keyof AggregateLibraryPattern]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLibraryPattern[P]>
      : GetScalarType<T[P], AggregateLibraryPattern[P]>
  }




  export type LibraryPatternGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LibraryPatternWhereInput
    orderBy?: LibraryPatternOrderByWithAggregationInput | LibraryPatternOrderByWithAggregationInput[]
    by: LibraryPatternScalarFieldEnum[] | LibraryPatternScalarFieldEnum
    having?: LibraryPatternScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LibraryPatternCountAggregateInputType | true
    _avg?: LibraryPatternAvgAggregateInputType
    _sum?: LibraryPatternSumAggregateInputType
    _min?: LibraryPatternMinAggregateInputType
    _max?: LibraryPatternMaxAggregateInputType
  }

  export type LibraryPatternGroupByOutputType = {
    id: number
    userId: number
    patternId: number
    isPublic: boolean
    title: string
    _count: LibraryPatternCountAggregateOutputType | null
    _avg: LibraryPatternAvgAggregateOutputType | null
    _sum: LibraryPatternSumAggregateOutputType | null
    _min: LibraryPatternMinAggregateOutputType | null
    _max: LibraryPatternMaxAggregateOutputType | null
  }

  type GetLibraryPatternGroupByPayload<T extends LibraryPatternGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LibraryPatternGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LibraryPatternGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LibraryPatternGroupByOutputType[P]>
            : GetScalarType<T[P], LibraryPatternGroupByOutputType[P]>
        }
      >
    >


  export type LibraryPatternSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    patternId?: boolean
    isPublic?: boolean
    title?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libraryPattern"]>

  export type LibraryPatternSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    patternId?: boolean
    isPublic?: boolean
    title?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libraryPattern"]>

  export type LibraryPatternSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    patternId?: boolean
    isPublic?: boolean
    title?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["libraryPattern"]>

  export type LibraryPatternSelectScalar = {
    id?: boolean
    userId?: boolean
    patternId?: boolean
    isPublic?: boolean
    title?: boolean
  }

  export type LibraryPatternOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "patternId" | "isPublic" | "title", ExtArgs["result"]["libraryPattern"]>
  export type LibraryPatternInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }
  export type LibraryPatternIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }
  export type LibraryPatternIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }

  export type $LibraryPatternPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LibraryPattern"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      pattern: Prisma.$PatternPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      patternId: number
      isPublic: boolean
      title: string
    }, ExtArgs["result"]["libraryPattern"]>
    composites: {}
  }

  type LibraryPatternGetPayload<S extends boolean | null | undefined | LibraryPatternDefaultArgs> = $Result.GetResult<Prisma.$LibraryPatternPayload, S>

  type LibraryPatternCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LibraryPatternFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LibraryPatternCountAggregateInputType | true
    }

  export interface LibraryPatternDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LibraryPattern'], meta: { name: 'LibraryPattern' } }
    /**
     * Find zero or one LibraryPattern that matches the filter.
     * @param {LibraryPatternFindUniqueArgs} args - Arguments to find a LibraryPattern
     * @example
     * // Get one LibraryPattern
     * const libraryPattern = await prisma.libraryPattern.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LibraryPatternFindUniqueArgs>(args: SelectSubset<T, LibraryPatternFindUniqueArgs<ExtArgs>>): Prisma__LibraryPatternClient<$Result.GetResult<Prisma.$LibraryPatternPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LibraryPattern that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LibraryPatternFindUniqueOrThrowArgs} args - Arguments to find a LibraryPattern
     * @example
     * // Get one LibraryPattern
     * const libraryPattern = await prisma.libraryPattern.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LibraryPatternFindUniqueOrThrowArgs>(args: SelectSubset<T, LibraryPatternFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LibraryPatternClient<$Result.GetResult<Prisma.$LibraryPatternPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LibraryPattern that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryPatternFindFirstArgs} args - Arguments to find a LibraryPattern
     * @example
     * // Get one LibraryPattern
     * const libraryPattern = await prisma.libraryPattern.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LibraryPatternFindFirstArgs>(args?: SelectSubset<T, LibraryPatternFindFirstArgs<ExtArgs>>): Prisma__LibraryPatternClient<$Result.GetResult<Prisma.$LibraryPatternPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LibraryPattern that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryPatternFindFirstOrThrowArgs} args - Arguments to find a LibraryPattern
     * @example
     * // Get one LibraryPattern
     * const libraryPattern = await prisma.libraryPattern.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LibraryPatternFindFirstOrThrowArgs>(args?: SelectSubset<T, LibraryPatternFindFirstOrThrowArgs<ExtArgs>>): Prisma__LibraryPatternClient<$Result.GetResult<Prisma.$LibraryPatternPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LibraryPatterns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryPatternFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LibraryPatterns
     * const libraryPatterns = await prisma.libraryPattern.findMany()
     * 
     * // Get first 10 LibraryPatterns
     * const libraryPatterns = await prisma.libraryPattern.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const libraryPatternWithIdOnly = await prisma.libraryPattern.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LibraryPatternFindManyArgs>(args?: SelectSubset<T, LibraryPatternFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPatternPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LibraryPattern.
     * @param {LibraryPatternCreateArgs} args - Arguments to create a LibraryPattern.
     * @example
     * // Create one LibraryPattern
     * const LibraryPattern = await prisma.libraryPattern.create({
     *   data: {
     *     // ... data to create a LibraryPattern
     *   }
     * })
     * 
     */
    create<T extends LibraryPatternCreateArgs>(args: SelectSubset<T, LibraryPatternCreateArgs<ExtArgs>>): Prisma__LibraryPatternClient<$Result.GetResult<Prisma.$LibraryPatternPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LibraryPatterns.
     * @param {LibraryPatternCreateManyArgs} args - Arguments to create many LibraryPatterns.
     * @example
     * // Create many LibraryPatterns
     * const libraryPattern = await prisma.libraryPattern.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LibraryPatternCreateManyArgs>(args?: SelectSubset<T, LibraryPatternCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LibraryPatterns and returns the data saved in the database.
     * @param {LibraryPatternCreateManyAndReturnArgs} args - Arguments to create many LibraryPatterns.
     * @example
     * // Create many LibraryPatterns
     * const libraryPattern = await prisma.libraryPattern.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LibraryPatterns and only return the `id`
     * const libraryPatternWithIdOnly = await prisma.libraryPattern.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LibraryPatternCreateManyAndReturnArgs>(args?: SelectSubset<T, LibraryPatternCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPatternPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LibraryPattern.
     * @param {LibraryPatternDeleteArgs} args - Arguments to delete one LibraryPattern.
     * @example
     * // Delete one LibraryPattern
     * const LibraryPattern = await prisma.libraryPattern.delete({
     *   where: {
     *     // ... filter to delete one LibraryPattern
     *   }
     * })
     * 
     */
    delete<T extends LibraryPatternDeleteArgs>(args: SelectSubset<T, LibraryPatternDeleteArgs<ExtArgs>>): Prisma__LibraryPatternClient<$Result.GetResult<Prisma.$LibraryPatternPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LibraryPattern.
     * @param {LibraryPatternUpdateArgs} args - Arguments to update one LibraryPattern.
     * @example
     * // Update one LibraryPattern
     * const libraryPattern = await prisma.libraryPattern.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LibraryPatternUpdateArgs>(args: SelectSubset<T, LibraryPatternUpdateArgs<ExtArgs>>): Prisma__LibraryPatternClient<$Result.GetResult<Prisma.$LibraryPatternPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LibraryPatterns.
     * @param {LibraryPatternDeleteManyArgs} args - Arguments to filter LibraryPatterns to delete.
     * @example
     * // Delete a few LibraryPatterns
     * const { count } = await prisma.libraryPattern.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LibraryPatternDeleteManyArgs>(args?: SelectSubset<T, LibraryPatternDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LibraryPatterns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryPatternUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LibraryPatterns
     * const libraryPattern = await prisma.libraryPattern.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LibraryPatternUpdateManyArgs>(args: SelectSubset<T, LibraryPatternUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LibraryPatterns and returns the data updated in the database.
     * @param {LibraryPatternUpdateManyAndReturnArgs} args - Arguments to update many LibraryPatterns.
     * @example
     * // Update many LibraryPatterns
     * const libraryPattern = await prisma.libraryPattern.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LibraryPatterns and only return the `id`
     * const libraryPatternWithIdOnly = await prisma.libraryPattern.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LibraryPatternUpdateManyAndReturnArgs>(args: SelectSubset<T, LibraryPatternUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LibraryPatternPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LibraryPattern.
     * @param {LibraryPatternUpsertArgs} args - Arguments to update or create a LibraryPattern.
     * @example
     * // Update or create a LibraryPattern
     * const libraryPattern = await prisma.libraryPattern.upsert({
     *   create: {
     *     // ... data to create a LibraryPattern
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LibraryPattern we want to update
     *   }
     * })
     */
    upsert<T extends LibraryPatternUpsertArgs>(args: SelectSubset<T, LibraryPatternUpsertArgs<ExtArgs>>): Prisma__LibraryPatternClient<$Result.GetResult<Prisma.$LibraryPatternPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LibraryPatterns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryPatternCountArgs} args - Arguments to filter LibraryPatterns to count.
     * @example
     * // Count the number of LibraryPatterns
     * const count = await prisma.libraryPattern.count({
     *   where: {
     *     // ... the filter for the LibraryPatterns we want to count
     *   }
     * })
    **/
    count<T extends LibraryPatternCountArgs>(
      args?: Subset<T, LibraryPatternCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LibraryPatternCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LibraryPattern.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryPatternAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LibraryPatternAggregateArgs>(args: Subset<T, LibraryPatternAggregateArgs>): Prisma.PrismaPromise<GetLibraryPatternAggregateType<T>>

    /**
     * Group by LibraryPattern.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LibraryPatternGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LibraryPatternGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LibraryPatternGroupByArgs['orderBy'] }
        : { orderBy?: LibraryPatternGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LibraryPatternGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLibraryPatternGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LibraryPattern model
   */
  readonly fields: LibraryPatternFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LibraryPattern.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LibraryPatternClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pattern<T extends PatternDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatternDefaultArgs<ExtArgs>>): Prisma__PatternClient<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LibraryPattern model
   */
  interface LibraryPatternFieldRefs {
    readonly id: FieldRef<"LibraryPattern", 'Int'>
    readonly userId: FieldRef<"LibraryPattern", 'Int'>
    readonly patternId: FieldRef<"LibraryPattern", 'Int'>
    readonly isPublic: FieldRef<"LibraryPattern", 'Boolean'>
    readonly title: FieldRef<"LibraryPattern", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LibraryPattern findUnique
   */
  export type LibraryPatternFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryPattern
     */
    select?: LibraryPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryPattern
     */
    omit?: LibraryPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryPatternInclude<ExtArgs> | null
    /**
     * Filter, which LibraryPattern to fetch.
     */
    where: LibraryPatternWhereUniqueInput
  }

  /**
   * LibraryPattern findUniqueOrThrow
   */
  export type LibraryPatternFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryPattern
     */
    select?: LibraryPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryPattern
     */
    omit?: LibraryPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryPatternInclude<ExtArgs> | null
    /**
     * Filter, which LibraryPattern to fetch.
     */
    where: LibraryPatternWhereUniqueInput
  }

  /**
   * LibraryPattern findFirst
   */
  export type LibraryPatternFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryPattern
     */
    select?: LibraryPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryPattern
     */
    omit?: LibraryPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryPatternInclude<ExtArgs> | null
    /**
     * Filter, which LibraryPattern to fetch.
     */
    where?: LibraryPatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryPatterns to fetch.
     */
    orderBy?: LibraryPatternOrderByWithRelationInput | LibraryPatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryPatterns.
     */
    cursor?: LibraryPatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryPatterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryPatterns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryPatterns.
     */
    distinct?: LibraryPatternScalarFieldEnum | LibraryPatternScalarFieldEnum[]
  }

  /**
   * LibraryPattern findFirstOrThrow
   */
  export type LibraryPatternFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryPattern
     */
    select?: LibraryPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryPattern
     */
    omit?: LibraryPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryPatternInclude<ExtArgs> | null
    /**
     * Filter, which LibraryPattern to fetch.
     */
    where?: LibraryPatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryPatterns to fetch.
     */
    orderBy?: LibraryPatternOrderByWithRelationInput | LibraryPatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LibraryPatterns.
     */
    cursor?: LibraryPatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryPatterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryPatterns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LibraryPatterns.
     */
    distinct?: LibraryPatternScalarFieldEnum | LibraryPatternScalarFieldEnum[]
  }

  /**
   * LibraryPattern findMany
   */
  export type LibraryPatternFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryPattern
     */
    select?: LibraryPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryPattern
     */
    omit?: LibraryPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryPatternInclude<ExtArgs> | null
    /**
     * Filter, which LibraryPatterns to fetch.
     */
    where?: LibraryPatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LibraryPatterns to fetch.
     */
    orderBy?: LibraryPatternOrderByWithRelationInput | LibraryPatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LibraryPatterns.
     */
    cursor?: LibraryPatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LibraryPatterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LibraryPatterns.
     */
    skip?: number
    distinct?: LibraryPatternScalarFieldEnum | LibraryPatternScalarFieldEnum[]
  }

  /**
   * LibraryPattern create
   */
  export type LibraryPatternCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryPattern
     */
    select?: LibraryPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryPattern
     */
    omit?: LibraryPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryPatternInclude<ExtArgs> | null
    /**
     * The data needed to create a LibraryPattern.
     */
    data: XOR<LibraryPatternCreateInput, LibraryPatternUncheckedCreateInput>
  }

  /**
   * LibraryPattern createMany
   */
  export type LibraryPatternCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LibraryPatterns.
     */
    data: LibraryPatternCreateManyInput | LibraryPatternCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LibraryPattern createManyAndReturn
   */
  export type LibraryPatternCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryPattern
     */
    select?: LibraryPatternSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryPattern
     */
    omit?: LibraryPatternOmit<ExtArgs> | null
    /**
     * The data used to create many LibraryPatterns.
     */
    data: LibraryPatternCreateManyInput | LibraryPatternCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryPatternIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LibraryPattern update
   */
  export type LibraryPatternUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryPattern
     */
    select?: LibraryPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryPattern
     */
    omit?: LibraryPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryPatternInclude<ExtArgs> | null
    /**
     * The data needed to update a LibraryPattern.
     */
    data: XOR<LibraryPatternUpdateInput, LibraryPatternUncheckedUpdateInput>
    /**
     * Choose, which LibraryPattern to update.
     */
    where: LibraryPatternWhereUniqueInput
  }

  /**
   * LibraryPattern updateMany
   */
  export type LibraryPatternUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LibraryPatterns.
     */
    data: XOR<LibraryPatternUpdateManyMutationInput, LibraryPatternUncheckedUpdateManyInput>
    /**
     * Filter which LibraryPatterns to update
     */
    where?: LibraryPatternWhereInput
    /**
     * Limit how many LibraryPatterns to update.
     */
    limit?: number
  }

  /**
   * LibraryPattern updateManyAndReturn
   */
  export type LibraryPatternUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryPattern
     */
    select?: LibraryPatternSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryPattern
     */
    omit?: LibraryPatternOmit<ExtArgs> | null
    /**
     * The data used to update LibraryPatterns.
     */
    data: XOR<LibraryPatternUpdateManyMutationInput, LibraryPatternUncheckedUpdateManyInput>
    /**
     * Filter which LibraryPatterns to update
     */
    where?: LibraryPatternWhereInput
    /**
     * Limit how many LibraryPatterns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryPatternIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LibraryPattern upsert
   */
  export type LibraryPatternUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryPattern
     */
    select?: LibraryPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryPattern
     */
    omit?: LibraryPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryPatternInclude<ExtArgs> | null
    /**
     * The filter to search for the LibraryPattern to update in case it exists.
     */
    where: LibraryPatternWhereUniqueInput
    /**
     * In case the LibraryPattern found by the `where` argument doesn't exist, create a new LibraryPattern with this data.
     */
    create: XOR<LibraryPatternCreateInput, LibraryPatternUncheckedCreateInput>
    /**
     * In case the LibraryPattern was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LibraryPatternUpdateInput, LibraryPatternUncheckedUpdateInput>
  }

  /**
   * LibraryPattern delete
   */
  export type LibraryPatternDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryPattern
     */
    select?: LibraryPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryPattern
     */
    omit?: LibraryPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryPatternInclude<ExtArgs> | null
    /**
     * Filter which LibraryPattern to delete.
     */
    where: LibraryPatternWhereUniqueInput
  }

  /**
   * LibraryPattern deleteMany
   */
  export type LibraryPatternDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LibraryPatterns to delete
     */
    where?: LibraryPatternWhereInput
    /**
     * Limit how many LibraryPatterns to delete.
     */
    limit?: number
  }

  /**
   * LibraryPattern without action
   */
  export type LibraryPatternDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LibraryPattern
     */
    select?: LibraryPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LibraryPattern
     */
    omit?: LibraryPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LibraryPatternInclude<ExtArgs> | null
  }


  /**
   * Model Draft
   */

  export type AggregateDraft = {
    _count: DraftCountAggregateOutputType | null
    _avg: DraftAvgAggregateOutputType | null
    _sum: DraftSumAggregateOutputType | null
    _min: DraftMinAggregateOutputType | null
    _max: DraftMaxAggregateOutputType | null
  }

  export type DraftAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DraftSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type DraftMinAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    description: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DraftMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    title: string | null
    description: string | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DraftCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    structure: number
    isPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DraftAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DraftSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type DraftMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DraftMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DraftCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    structure?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DraftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Draft to aggregate.
     */
    where?: DraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drafts to fetch.
     */
    orderBy?: DraftOrderByWithRelationInput | DraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drafts
    **/
    _count?: true | DraftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DraftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DraftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DraftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DraftMaxAggregateInputType
  }

  export type GetDraftAggregateType<T extends DraftAggregateArgs> = {
        [P in keyof T & keyof AggregateDraft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDraft[P]>
      : GetScalarType<T[P], AggregateDraft[P]>
  }




  export type DraftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftWhereInput
    orderBy?: DraftOrderByWithAggregationInput | DraftOrderByWithAggregationInput[]
    by: DraftScalarFieldEnum[] | DraftScalarFieldEnum
    having?: DraftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DraftCountAggregateInputType | true
    _avg?: DraftAvgAggregateInputType
    _sum?: DraftSumAggregateInputType
    _min?: DraftMinAggregateInputType
    _max?: DraftMaxAggregateInputType
  }

  export type DraftGroupByOutputType = {
    id: number
    userId: number
    title: string
    description: string | null
    structure: JsonValue
    isPublic: boolean
    createdAt: Date
    updatedAt: Date
    _count: DraftCountAggregateOutputType | null
    _avg: DraftAvgAggregateOutputType | null
    _sum: DraftSumAggregateOutputType | null
    _min: DraftMinAggregateOutputType | null
    _max: DraftMaxAggregateOutputType | null
  }

  type GetDraftGroupByPayload<T extends DraftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DraftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DraftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DraftGroupByOutputType[P]>
            : GetScalarType<T[P], DraftGroupByOutputType[P]>
        }
      >
    >


  export type DraftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    structure?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    patterns?: boolean | Draft$patternsArgs<ExtArgs>
    _count?: boolean | DraftCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draft"]>

  export type DraftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    structure?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draft"]>

  export type DraftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    structure?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draft"]>

  export type DraftSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    structure?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DraftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "structure" | "isPublic" | "createdAt" | "updatedAt", ExtArgs["result"]["draft"]>
  export type DraftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    patterns?: boolean | Draft$patternsArgs<ExtArgs>
    _count?: boolean | DraftCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DraftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DraftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DraftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Draft"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      patterns: Prisma.$DraftPatternPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      title: string
      description: string | null
      structure: Prisma.JsonValue
      isPublic: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["draft"]>
    composites: {}
  }

  type DraftGetPayload<S extends boolean | null | undefined | DraftDefaultArgs> = $Result.GetResult<Prisma.$DraftPayload, S>

  type DraftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DraftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DraftCountAggregateInputType | true
    }

  export interface DraftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Draft'], meta: { name: 'Draft' } }
    /**
     * Find zero or one Draft that matches the filter.
     * @param {DraftFindUniqueArgs} args - Arguments to find a Draft
     * @example
     * // Get one Draft
     * const draft = await prisma.draft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DraftFindUniqueArgs>(args: SelectSubset<T, DraftFindUniqueArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Draft that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DraftFindUniqueOrThrowArgs} args - Arguments to find a Draft
     * @example
     * // Get one Draft
     * const draft = await prisma.draft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DraftFindUniqueOrThrowArgs>(args: SelectSubset<T, DraftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Draft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftFindFirstArgs} args - Arguments to find a Draft
     * @example
     * // Get one Draft
     * const draft = await prisma.draft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DraftFindFirstArgs>(args?: SelectSubset<T, DraftFindFirstArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Draft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftFindFirstOrThrowArgs} args - Arguments to find a Draft
     * @example
     * // Get one Draft
     * const draft = await prisma.draft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DraftFindFirstOrThrowArgs>(args?: SelectSubset<T, DraftFindFirstOrThrowArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drafts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drafts
     * const drafts = await prisma.draft.findMany()
     * 
     * // Get first 10 Drafts
     * const drafts = await prisma.draft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const draftWithIdOnly = await prisma.draft.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DraftFindManyArgs>(args?: SelectSubset<T, DraftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Draft.
     * @param {DraftCreateArgs} args - Arguments to create a Draft.
     * @example
     * // Create one Draft
     * const Draft = await prisma.draft.create({
     *   data: {
     *     // ... data to create a Draft
     *   }
     * })
     * 
     */
    create<T extends DraftCreateArgs>(args: SelectSubset<T, DraftCreateArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drafts.
     * @param {DraftCreateManyArgs} args - Arguments to create many Drafts.
     * @example
     * // Create many Drafts
     * const draft = await prisma.draft.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DraftCreateManyArgs>(args?: SelectSubset<T, DraftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drafts and returns the data saved in the database.
     * @param {DraftCreateManyAndReturnArgs} args - Arguments to create many Drafts.
     * @example
     * // Create many Drafts
     * const draft = await prisma.draft.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drafts and only return the `id`
     * const draftWithIdOnly = await prisma.draft.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DraftCreateManyAndReturnArgs>(args?: SelectSubset<T, DraftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Draft.
     * @param {DraftDeleteArgs} args - Arguments to delete one Draft.
     * @example
     * // Delete one Draft
     * const Draft = await prisma.draft.delete({
     *   where: {
     *     // ... filter to delete one Draft
     *   }
     * })
     * 
     */
    delete<T extends DraftDeleteArgs>(args: SelectSubset<T, DraftDeleteArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Draft.
     * @param {DraftUpdateArgs} args - Arguments to update one Draft.
     * @example
     * // Update one Draft
     * const draft = await prisma.draft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DraftUpdateArgs>(args: SelectSubset<T, DraftUpdateArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drafts.
     * @param {DraftDeleteManyArgs} args - Arguments to filter Drafts to delete.
     * @example
     * // Delete a few Drafts
     * const { count } = await prisma.draft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DraftDeleteManyArgs>(args?: SelectSubset<T, DraftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drafts
     * const draft = await prisma.draft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DraftUpdateManyArgs>(args: SelectSubset<T, DraftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drafts and returns the data updated in the database.
     * @param {DraftUpdateManyAndReturnArgs} args - Arguments to update many Drafts.
     * @example
     * // Update many Drafts
     * const draft = await prisma.draft.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drafts and only return the `id`
     * const draftWithIdOnly = await prisma.draft.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DraftUpdateManyAndReturnArgs>(args: SelectSubset<T, DraftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Draft.
     * @param {DraftUpsertArgs} args - Arguments to update or create a Draft.
     * @example
     * // Update or create a Draft
     * const draft = await prisma.draft.upsert({
     *   create: {
     *     // ... data to create a Draft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Draft we want to update
     *   }
     * })
     */
    upsert<T extends DraftUpsertArgs>(args: SelectSubset<T, DraftUpsertArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drafts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftCountArgs} args - Arguments to filter Drafts to count.
     * @example
     * // Count the number of Drafts
     * const count = await prisma.draft.count({
     *   where: {
     *     // ... the filter for the Drafts we want to count
     *   }
     * })
    **/
    count<T extends DraftCountArgs>(
      args?: Subset<T, DraftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DraftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Draft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DraftAggregateArgs>(args: Subset<T, DraftAggregateArgs>): Prisma.PrismaPromise<GetDraftAggregateType<T>>

    /**
     * Group by Draft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DraftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DraftGroupByArgs['orderBy'] }
        : { orderBy?: DraftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DraftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDraftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Draft model
   */
  readonly fields: DraftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Draft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DraftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    patterns<T extends Draft$patternsArgs<ExtArgs> = {}>(args?: Subset<T, Draft$patternsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftPatternPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Draft model
   */
  interface DraftFieldRefs {
    readonly id: FieldRef<"Draft", 'Int'>
    readonly userId: FieldRef<"Draft", 'Int'>
    readonly title: FieldRef<"Draft", 'String'>
    readonly description: FieldRef<"Draft", 'String'>
    readonly structure: FieldRef<"Draft", 'Json'>
    readonly isPublic: FieldRef<"Draft", 'Boolean'>
    readonly createdAt: FieldRef<"Draft", 'DateTime'>
    readonly updatedAt: FieldRef<"Draft", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Draft findUnique
   */
  export type DraftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftInclude<ExtArgs> | null
    /**
     * Filter, which Draft to fetch.
     */
    where: DraftWhereUniqueInput
  }

  /**
   * Draft findUniqueOrThrow
   */
  export type DraftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftInclude<ExtArgs> | null
    /**
     * Filter, which Draft to fetch.
     */
    where: DraftWhereUniqueInput
  }

  /**
   * Draft findFirst
   */
  export type DraftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftInclude<ExtArgs> | null
    /**
     * Filter, which Draft to fetch.
     */
    where?: DraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drafts to fetch.
     */
    orderBy?: DraftOrderByWithRelationInput | DraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drafts.
     */
    cursor?: DraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drafts.
     */
    distinct?: DraftScalarFieldEnum | DraftScalarFieldEnum[]
  }

  /**
   * Draft findFirstOrThrow
   */
  export type DraftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftInclude<ExtArgs> | null
    /**
     * Filter, which Draft to fetch.
     */
    where?: DraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drafts to fetch.
     */
    orderBy?: DraftOrderByWithRelationInput | DraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drafts.
     */
    cursor?: DraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drafts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drafts.
     */
    distinct?: DraftScalarFieldEnum | DraftScalarFieldEnum[]
  }

  /**
   * Draft findMany
   */
  export type DraftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftInclude<ExtArgs> | null
    /**
     * Filter, which Drafts to fetch.
     */
    where?: DraftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drafts to fetch.
     */
    orderBy?: DraftOrderByWithRelationInput | DraftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drafts.
     */
    cursor?: DraftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drafts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drafts.
     */
    skip?: number
    distinct?: DraftScalarFieldEnum | DraftScalarFieldEnum[]
  }

  /**
   * Draft create
   */
  export type DraftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftInclude<ExtArgs> | null
    /**
     * The data needed to create a Draft.
     */
    data: XOR<DraftCreateInput, DraftUncheckedCreateInput>
  }

  /**
   * Draft createMany
   */
  export type DraftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drafts.
     */
    data: DraftCreateManyInput | DraftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Draft createManyAndReturn
   */
  export type DraftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * The data used to create many Drafts.
     */
    data: DraftCreateManyInput | DraftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Draft update
   */
  export type DraftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftInclude<ExtArgs> | null
    /**
     * The data needed to update a Draft.
     */
    data: XOR<DraftUpdateInput, DraftUncheckedUpdateInput>
    /**
     * Choose, which Draft to update.
     */
    where: DraftWhereUniqueInput
  }

  /**
   * Draft updateMany
   */
  export type DraftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drafts.
     */
    data: XOR<DraftUpdateManyMutationInput, DraftUncheckedUpdateManyInput>
    /**
     * Filter which Drafts to update
     */
    where?: DraftWhereInput
    /**
     * Limit how many Drafts to update.
     */
    limit?: number
  }

  /**
   * Draft updateManyAndReturn
   */
  export type DraftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * The data used to update Drafts.
     */
    data: XOR<DraftUpdateManyMutationInput, DraftUncheckedUpdateManyInput>
    /**
     * Filter which Drafts to update
     */
    where?: DraftWhereInput
    /**
     * Limit how many Drafts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Draft upsert
   */
  export type DraftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftInclude<ExtArgs> | null
    /**
     * The filter to search for the Draft to update in case it exists.
     */
    where: DraftWhereUniqueInput
    /**
     * In case the Draft found by the `where` argument doesn't exist, create a new Draft with this data.
     */
    create: XOR<DraftCreateInput, DraftUncheckedCreateInput>
    /**
     * In case the Draft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DraftUpdateInput, DraftUncheckedUpdateInput>
  }

  /**
   * Draft delete
   */
  export type DraftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftInclude<ExtArgs> | null
    /**
     * Filter which Draft to delete.
     */
    where: DraftWhereUniqueInput
  }

  /**
   * Draft deleteMany
   */
  export type DraftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drafts to delete
     */
    where?: DraftWhereInput
    /**
     * Limit how many Drafts to delete.
     */
    limit?: number
  }

  /**
   * Draft.patterns
   */
  export type Draft$patternsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftPattern
     */
    select?: DraftPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftPattern
     */
    omit?: DraftPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftPatternInclude<ExtArgs> | null
    where?: DraftPatternWhereInput
    orderBy?: DraftPatternOrderByWithRelationInput | DraftPatternOrderByWithRelationInput[]
    cursor?: DraftPatternWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DraftPatternScalarFieldEnum | DraftPatternScalarFieldEnum[]
  }

  /**
   * Draft without action
   */
  export type DraftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Draft
     */
    select?: DraftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Draft
     */
    omit?: DraftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftInclude<ExtArgs> | null
  }


  /**
   * Model DraftPattern
   */

  export type AggregateDraftPattern = {
    _count: DraftPatternCountAggregateOutputType | null
    _avg: DraftPatternAvgAggregateOutputType | null
    _sum: DraftPatternSumAggregateOutputType | null
    _min: DraftPatternMinAggregateOutputType | null
    _max: DraftPatternMaxAggregateOutputType | null
  }

  export type DraftPatternAvgAggregateOutputType = {
    id: number | null
    draftId: number | null
    patternId: number | null
  }

  export type DraftPatternSumAggregateOutputType = {
    id: number | null
    draftId: number | null
    patternId: number | null
  }

  export type DraftPatternMinAggregateOutputType = {
    id: number | null
    draftId: number | null
    patternId: number | null
    code: string | null
    color: string | null
  }

  export type DraftPatternMaxAggregateOutputType = {
    id: number | null
    draftId: number | null
    patternId: number | null
    code: string | null
    color: string | null
  }

  export type DraftPatternCountAggregateOutputType = {
    id: number
    draftId: number
    patternId: number
    code: number
    color: number
    _all: number
  }


  export type DraftPatternAvgAggregateInputType = {
    id?: true
    draftId?: true
    patternId?: true
  }

  export type DraftPatternSumAggregateInputType = {
    id?: true
    draftId?: true
    patternId?: true
  }

  export type DraftPatternMinAggregateInputType = {
    id?: true
    draftId?: true
    patternId?: true
    code?: true
    color?: true
  }

  export type DraftPatternMaxAggregateInputType = {
    id?: true
    draftId?: true
    patternId?: true
    code?: true
    color?: true
  }

  export type DraftPatternCountAggregateInputType = {
    id?: true
    draftId?: true
    patternId?: true
    code?: true
    color?: true
    _all?: true
  }

  export type DraftPatternAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DraftPattern to aggregate.
     */
    where?: DraftPatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftPatterns to fetch.
     */
    orderBy?: DraftPatternOrderByWithRelationInput | DraftPatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DraftPatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftPatterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftPatterns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DraftPatterns
    **/
    _count?: true | DraftPatternCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DraftPatternAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DraftPatternSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DraftPatternMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DraftPatternMaxAggregateInputType
  }

  export type GetDraftPatternAggregateType<T extends DraftPatternAggregateArgs> = {
        [P in keyof T & keyof AggregateDraftPattern]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDraftPattern[P]>
      : GetScalarType<T[P], AggregateDraftPattern[P]>
  }




  export type DraftPatternGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DraftPatternWhereInput
    orderBy?: DraftPatternOrderByWithAggregationInput | DraftPatternOrderByWithAggregationInput[]
    by: DraftPatternScalarFieldEnum[] | DraftPatternScalarFieldEnum
    having?: DraftPatternScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DraftPatternCountAggregateInputType | true
    _avg?: DraftPatternAvgAggregateInputType
    _sum?: DraftPatternSumAggregateInputType
    _min?: DraftPatternMinAggregateInputType
    _max?: DraftPatternMaxAggregateInputType
  }

  export type DraftPatternGroupByOutputType = {
    id: number
    draftId: number
    patternId: number
    code: string
    color: string
    _count: DraftPatternCountAggregateOutputType | null
    _avg: DraftPatternAvgAggregateOutputType | null
    _sum: DraftPatternSumAggregateOutputType | null
    _min: DraftPatternMinAggregateOutputType | null
    _max: DraftPatternMaxAggregateOutputType | null
  }

  type GetDraftPatternGroupByPayload<T extends DraftPatternGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DraftPatternGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DraftPatternGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DraftPatternGroupByOutputType[P]>
            : GetScalarType<T[P], DraftPatternGroupByOutputType[P]>
        }
      >
    >


  export type DraftPatternSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    draftId?: boolean
    patternId?: boolean
    code?: boolean
    color?: boolean
    draft?: boolean | DraftDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draftPattern"]>

  export type DraftPatternSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    draftId?: boolean
    patternId?: boolean
    code?: boolean
    color?: boolean
    draft?: boolean | DraftDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draftPattern"]>

  export type DraftPatternSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    draftId?: boolean
    patternId?: boolean
    code?: boolean
    color?: boolean
    draft?: boolean | DraftDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["draftPattern"]>

  export type DraftPatternSelectScalar = {
    id?: boolean
    draftId?: boolean
    patternId?: boolean
    code?: boolean
    color?: boolean
  }

  export type DraftPatternOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "draftId" | "patternId" | "code" | "color", ExtArgs["result"]["draftPattern"]>
  export type DraftPatternInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draft?: boolean | DraftDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }
  export type DraftPatternIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draft?: boolean | DraftDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }
  export type DraftPatternIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draft?: boolean | DraftDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }

  export type $DraftPatternPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DraftPattern"
    objects: {
      draft: Prisma.$DraftPayload<ExtArgs>
      pattern: Prisma.$PatternPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      draftId: number
      patternId: number
      code: string
      color: string
    }, ExtArgs["result"]["draftPattern"]>
    composites: {}
  }

  type DraftPatternGetPayload<S extends boolean | null | undefined | DraftPatternDefaultArgs> = $Result.GetResult<Prisma.$DraftPatternPayload, S>

  type DraftPatternCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DraftPatternFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DraftPatternCountAggregateInputType | true
    }

  export interface DraftPatternDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DraftPattern'], meta: { name: 'DraftPattern' } }
    /**
     * Find zero or one DraftPattern that matches the filter.
     * @param {DraftPatternFindUniqueArgs} args - Arguments to find a DraftPattern
     * @example
     * // Get one DraftPattern
     * const draftPattern = await prisma.draftPattern.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DraftPatternFindUniqueArgs>(args: SelectSubset<T, DraftPatternFindUniqueArgs<ExtArgs>>): Prisma__DraftPatternClient<$Result.GetResult<Prisma.$DraftPatternPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DraftPattern that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DraftPatternFindUniqueOrThrowArgs} args - Arguments to find a DraftPattern
     * @example
     * // Get one DraftPattern
     * const draftPattern = await prisma.draftPattern.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DraftPatternFindUniqueOrThrowArgs>(args: SelectSubset<T, DraftPatternFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DraftPatternClient<$Result.GetResult<Prisma.$DraftPatternPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DraftPattern that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftPatternFindFirstArgs} args - Arguments to find a DraftPattern
     * @example
     * // Get one DraftPattern
     * const draftPattern = await prisma.draftPattern.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DraftPatternFindFirstArgs>(args?: SelectSubset<T, DraftPatternFindFirstArgs<ExtArgs>>): Prisma__DraftPatternClient<$Result.GetResult<Prisma.$DraftPatternPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DraftPattern that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftPatternFindFirstOrThrowArgs} args - Arguments to find a DraftPattern
     * @example
     * // Get one DraftPattern
     * const draftPattern = await prisma.draftPattern.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DraftPatternFindFirstOrThrowArgs>(args?: SelectSubset<T, DraftPatternFindFirstOrThrowArgs<ExtArgs>>): Prisma__DraftPatternClient<$Result.GetResult<Prisma.$DraftPatternPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DraftPatterns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftPatternFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DraftPatterns
     * const draftPatterns = await prisma.draftPattern.findMany()
     * 
     * // Get first 10 DraftPatterns
     * const draftPatterns = await prisma.draftPattern.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const draftPatternWithIdOnly = await prisma.draftPattern.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DraftPatternFindManyArgs>(args?: SelectSubset<T, DraftPatternFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftPatternPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DraftPattern.
     * @param {DraftPatternCreateArgs} args - Arguments to create a DraftPattern.
     * @example
     * // Create one DraftPattern
     * const DraftPattern = await prisma.draftPattern.create({
     *   data: {
     *     // ... data to create a DraftPattern
     *   }
     * })
     * 
     */
    create<T extends DraftPatternCreateArgs>(args: SelectSubset<T, DraftPatternCreateArgs<ExtArgs>>): Prisma__DraftPatternClient<$Result.GetResult<Prisma.$DraftPatternPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DraftPatterns.
     * @param {DraftPatternCreateManyArgs} args - Arguments to create many DraftPatterns.
     * @example
     * // Create many DraftPatterns
     * const draftPattern = await prisma.draftPattern.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DraftPatternCreateManyArgs>(args?: SelectSubset<T, DraftPatternCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DraftPatterns and returns the data saved in the database.
     * @param {DraftPatternCreateManyAndReturnArgs} args - Arguments to create many DraftPatterns.
     * @example
     * // Create many DraftPatterns
     * const draftPattern = await prisma.draftPattern.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DraftPatterns and only return the `id`
     * const draftPatternWithIdOnly = await prisma.draftPattern.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DraftPatternCreateManyAndReturnArgs>(args?: SelectSubset<T, DraftPatternCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftPatternPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DraftPattern.
     * @param {DraftPatternDeleteArgs} args - Arguments to delete one DraftPattern.
     * @example
     * // Delete one DraftPattern
     * const DraftPattern = await prisma.draftPattern.delete({
     *   where: {
     *     // ... filter to delete one DraftPattern
     *   }
     * })
     * 
     */
    delete<T extends DraftPatternDeleteArgs>(args: SelectSubset<T, DraftPatternDeleteArgs<ExtArgs>>): Prisma__DraftPatternClient<$Result.GetResult<Prisma.$DraftPatternPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DraftPattern.
     * @param {DraftPatternUpdateArgs} args - Arguments to update one DraftPattern.
     * @example
     * // Update one DraftPattern
     * const draftPattern = await prisma.draftPattern.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DraftPatternUpdateArgs>(args: SelectSubset<T, DraftPatternUpdateArgs<ExtArgs>>): Prisma__DraftPatternClient<$Result.GetResult<Prisma.$DraftPatternPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DraftPatterns.
     * @param {DraftPatternDeleteManyArgs} args - Arguments to filter DraftPatterns to delete.
     * @example
     * // Delete a few DraftPatterns
     * const { count } = await prisma.draftPattern.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DraftPatternDeleteManyArgs>(args?: SelectSubset<T, DraftPatternDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DraftPatterns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftPatternUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DraftPatterns
     * const draftPattern = await prisma.draftPattern.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DraftPatternUpdateManyArgs>(args: SelectSubset<T, DraftPatternUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DraftPatterns and returns the data updated in the database.
     * @param {DraftPatternUpdateManyAndReturnArgs} args - Arguments to update many DraftPatterns.
     * @example
     * // Update many DraftPatterns
     * const draftPattern = await prisma.draftPattern.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DraftPatterns and only return the `id`
     * const draftPatternWithIdOnly = await prisma.draftPattern.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DraftPatternUpdateManyAndReturnArgs>(args: SelectSubset<T, DraftPatternUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DraftPatternPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DraftPattern.
     * @param {DraftPatternUpsertArgs} args - Arguments to update or create a DraftPattern.
     * @example
     * // Update or create a DraftPattern
     * const draftPattern = await prisma.draftPattern.upsert({
     *   create: {
     *     // ... data to create a DraftPattern
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DraftPattern we want to update
     *   }
     * })
     */
    upsert<T extends DraftPatternUpsertArgs>(args: SelectSubset<T, DraftPatternUpsertArgs<ExtArgs>>): Prisma__DraftPatternClient<$Result.GetResult<Prisma.$DraftPatternPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DraftPatterns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftPatternCountArgs} args - Arguments to filter DraftPatterns to count.
     * @example
     * // Count the number of DraftPatterns
     * const count = await prisma.draftPattern.count({
     *   where: {
     *     // ... the filter for the DraftPatterns we want to count
     *   }
     * })
    **/
    count<T extends DraftPatternCountArgs>(
      args?: Subset<T, DraftPatternCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DraftPatternCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DraftPattern.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftPatternAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DraftPatternAggregateArgs>(args: Subset<T, DraftPatternAggregateArgs>): Prisma.PrismaPromise<GetDraftPatternAggregateType<T>>

    /**
     * Group by DraftPattern.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DraftPatternGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DraftPatternGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DraftPatternGroupByArgs['orderBy'] }
        : { orderBy?: DraftPatternGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DraftPatternGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDraftPatternGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DraftPattern model
   */
  readonly fields: DraftPatternFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DraftPattern.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DraftPatternClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    draft<T extends DraftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DraftDefaultArgs<ExtArgs>>): Prisma__DraftClient<$Result.GetResult<Prisma.$DraftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pattern<T extends PatternDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatternDefaultArgs<ExtArgs>>): Prisma__PatternClient<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DraftPattern model
   */
  interface DraftPatternFieldRefs {
    readonly id: FieldRef<"DraftPattern", 'Int'>
    readonly draftId: FieldRef<"DraftPattern", 'Int'>
    readonly patternId: FieldRef<"DraftPattern", 'Int'>
    readonly code: FieldRef<"DraftPattern", 'String'>
    readonly color: FieldRef<"DraftPattern", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DraftPattern findUnique
   */
  export type DraftPatternFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftPattern
     */
    select?: DraftPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftPattern
     */
    omit?: DraftPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftPatternInclude<ExtArgs> | null
    /**
     * Filter, which DraftPattern to fetch.
     */
    where: DraftPatternWhereUniqueInput
  }

  /**
   * DraftPattern findUniqueOrThrow
   */
  export type DraftPatternFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftPattern
     */
    select?: DraftPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftPattern
     */
    omit?: DraftPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftPatternInclude<ExtArgs> | null
    /**
     * Filter, which DraftPattern to fetch.
     */
    where: DraftPatternWhereUniqueInput
  }

  /**
   * DraftPattern findFirst
   */
  export type DraftPatternFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftPattern
     */
    select?: DraftPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftPattern
     */
    omit?: DraftPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftPatternInclude<ExtArgs> | null
    /**
     * Filter, which DraftPattern to fetch.
     */
    where?: DraftPatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftPatterns to fetch.
     */
    orderBy?: DraftPatternOrderByWithRelationInput | DraftPatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DraftPatterns.
     */
    cursor?: DraftPatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftPatterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftPatterns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DraftPatterns.
     */
    distinct?: DraftPatternScalarFieldEnum | DraftPatternScalarFieldEnum[]
  }

  /**
   * DraftPattern findFirstOrThrow
   */
  export type DraftPatternFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftPattern
     */
    select?: DraftPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftPattern
     */
    omit?: DraftPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftPatternInclude<ExtArgs> | null
    /**
     * Filter, which DraftPattern to fetch.
     */
    where?: DraftPatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftPatterns to fetch.
     */
    orderBy?: DraftPatternOrderByWithRelationInput | DraftPatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DraftPatterns.
     */
    cursor?: DraftPatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftPatterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftPatterns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DraftPatterns.
     */
    distinct?: DraftPatternScalarFieldEnum | DraftPatternScalarFieldEnum[]
  }

  /**
   * DraftPattern findMany
   */
  export type DraftPatternFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftPattern
     */
    select?: DraftPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftPattern
     */
    omit?: DraftPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftPatternInclude<ExtArgs> | null
    /**
     * Filter, which DraftPatterns to fetch.
     */
    where?: DraftPatternWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DraftPatterns to fetch.
     */
    orderBy?: DraftPatternOrderByWithRelationInput | DraftPatternOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DraftPatterns.
     */
    cursor?: DraftPatternWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DraftPatterns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DraftPatterns.
     */
    skip?: number
    distinct?: DraftPatternScalarFieldEnum | DraftPatternScalarFieldEnum[]
  }

  /**
   * DraftPattern create
   */
  export type DraftPatternCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftPattern
     */
    select?: DraftPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftPattern
     */
    omit?: DraftPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftPatternInclude<ExtArgs> | null
    /**
     * The data needed to create a DraftPattern.
     */
    data: XOR<DraftPatternCreateInput, DraftPatternUncheckedCreateInput>
  }

  /**
   * DraftPattern createMany
   */
  export type DraftPatternCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DraftPatterns.
     */
    data: DraftPatternCreateManyInput | DraftPatternCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DraftPattern createManyAndReturn
   */
  export type DraftPatternCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftPattern
     */
    select?: DraftPatternSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DraftPattern
     */
    omit?: DraftPatternOmit<ExtArgs> | null
    /**
     * The data used to create many DraftPatterns.
     */
    data: DraftPatternCreateManyInput | DraftPatternCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftPatternIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DraftPattern update
   */
  export type DraftPatternUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftPattern
     */
    select?: DraftPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftPattern
     */
    omit?: DraftPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftPatternInclude<ExtArgs> | null
    /**
     * The data needed to update a DraftPattern.
     */
    data: XOR<DraftPatternUpdateInput, DraftPatternUncheckedUpdateInput>
    /**
     * Choose, which DraftPattern to update.
     */
    where: DraftPatternWhereUniqueInput
  }

  /**
   * DraftPattern updateMany
   */
  export type DraftPatternUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DraftPatterns.
     */
    data: XOR<DraftPatternUpdateManyMutationInput, DraftPatternUncheckedUpdateManyInput>
    /**
     * Filter which DraftPatterns to update
     */
    where?: DraftPatternWhereInput
    /**
     * Limit how many DraftPatterns to update.
     */
    limit?: number
  }

  /**
   * DraftPattern updateManyAndReturn
   */
  export type DraftPatternUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftPattern
     */
    select?: DraftPatternSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DraftPattern
     */
    omit?: DraftPatternOmit<ExtArgs> | null
    /**
     * The data used to update DraftPatterns.
     */
    data: XOR<DraftPatternUpdateManyMutationInput, DraftPatternUncheckedUpdateManyInput>
    /**
     * Filter which DraftPatterns to update
     */
    where?: DraftPatternWhereInput
    /**
     * Limit how many DraftPatterns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftPatternIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DraftPattern upsert
   */
  export type DraftPatternUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftPattern
     */
    select?: DraftPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftPattern
     */
    omit?: DraftPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftPatternInclude<ExtArgs> | null
    /**
     * The filter to search for the DraftPattern to update in case it exists.
     */
    where: DraftPatternWhereUniqueInput
    /**
     * In case the DraftPattern found by the `where` argument doesn't exist, create a new DraftPattern with this data.
     */
    create: XOR<DraftPatternCreateInput, DraftPatternUncheckedCreateInput>
    /**
     * In case the DraftPattern was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DraftPatternUpdateInput, DraftPatternUncheckedUpdateInput>
  }

  /**
   * DraftPattern delete
   */
  export type DraftPatternDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftPattern
     */
    select?: DraftPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftPattern
     */
    omit?: DraftPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftPatternInclude<ExtArgs> | null
    /**
     * Filter which DraftPattern to delete.
     */
    where: DraftPatternWhereUniqueInput
  }

  /**
   * DraftPattern deleteMany
   */
  export type DraftPatternDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DraftPatterns to delete
     */
    where?: DraftPatternWhereInput
    /**
     * Limit how many DraftPatterns to delete.
     */
    limit?: number
  }

  /**
   * DraftPattern without action
   */
  export type DraftPatternDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DraftPattern
     */
    select?: DraftPatternSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DraftPattern
     */
    omit?: DraftPatternOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DraftPatternInclude<ExtArgs> | null
  }


  /**
   * Model PatternSearchData
   */

  export type AggregatePatternSearchData = {
    _count: PatternSearchDataCountAggregateOutputType | null
    _avg: PatternSearchDataAvgAggregateOutputType | null
    _sum: PatternSearchDataSumAggregateOutputType | null
    _min: PatternSearchDataMinAggregateOutputType | null
    _max: PatternSearchDataMaxAggregateOutputType | null
  }

  export type PatternSearchDataAvgAggregateOutputType = {
    patternId: number | null
    grooveVector: number | null
    hyperplaneHash: number | null
  }

  export type PatternSearchDataSumAggregateOutputType = {
    patternId: number | null
    grooveVector: number[]
    hyperplaneHash: number[]
  }

  export type PatternSearchDataMinAggregateOutputType = {
    patternId: number | null
  }

  export type PatternSearchDataMaxAggregateOutputType = {
    patternId: number | null
  }

  export type PatternSearchDataCountAggregateOutputType = {
    patternId: number
    grooveVector: number
    hyperplaneHash: number
    _all: number
  }


  export type PatternSearchDataAvgAggregateInputType = {
    patternId?: true
    grooveVector?: true
    hyperplaneHash?: true
  }

  export type PatternSearchDataSumAggregateInputType = {
    patternId?: true
    grooveVector?: true
    hyperplaneHash?: true
  }

  export type PatternSearchDataMinAggregateInputType = {
    patternId?: true
  }

  export type PatternSearchDataMaxAggregateInputType = {
    patternId?: true
  }

  export type PatternSearchDataCountAggregateInputType = {
    patternId?: true
    grooveVector?: true
    hyperplaneHash?: true
    _all?: true
  }

  export type PatternSearchDataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatternSearchData to aggregate.
     */
    where?: PatternSearchDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternSearchData to fetch.
     */
    orderBy?: PatternSearchDataOrderByWithRelationInput | PatternSearchDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatternSearchDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternSearchData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternSearchData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatternSearchData
    **/
    _count?: true | PatternSearchDataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatternSearchDataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatternSearchDataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatternSearchDataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatternSearchDataMaxAggregateInputType
  }

  export type GetPatternSearchDataAggregateType<T extends PatternSearchDataAggregateArgs> = {
        [P in keyof T & keyof AggregatePatternSearchData]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatternSearchData[P]>
      : GetScalarType<T[P], AggregatePatternSearchData[P]>
  }




  export type PatternSearchDataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatternSearchDataWhereInput
    orderBy?: PatternSearchDataOrderByWithAggregationInput | PatternSearchDataOrderByWithAggregationInput[]
    by: PatternSearchDataScalarFieldEnum[] | PatternSearchDataScalarFieldEnum
    having?: PatternSearchDataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatternSearchDataCountAggregateInputType | true
    _avg?: PatternSearchDataAvgAggregateInputType
    _sum?: PatternSearchDataSumAggregateInputType
    _min?: PatternSearchDataMinAggregateInputType
    _max?: PatternSearchDataMaxAggregateInputType
  }

  export type PatternSearchDataGroupByOutputType = {
    patternId: number
    grooveVector: number[]
    hyperplaneHash: number[]
    _count: PatternSearchDataCountAggregateOutputType | null
    _avg: PatternSearchDataAvgAggregateOutputType | null
    _sum: PatternSearchDataSumAggregateOutputType | null
    _min: PatternSearchDataMinAggregateOutputType | null
    _max: PatternSearchDataMaxAggregateOutputType | null
  }

  type GetPatternSearchDataGroupByPayload<T extends PatternSearchDataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatternSearchDataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatternSearchDataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatternSearchDataGroupByOutputType[P]>
            : GetScalarType<T[P], PatternSearchDataGroupByOutputType[P]>
        }
      >
    >


  export type PatternSearchDataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patternId?: boolean
    grooveVector?: boolean
    hyperplaneHash?: boolean
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patternSearchData"]>

  export type PatternSearchDataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patternId?: boolean
    grooveVector?: boolean
    hyperplaneHash?: boolean
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patternSearchData"]>

  export type PatternSearchDataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    patternId?: boolean
    grooveVector?: boolean
    hyperplaneHash?: boolean
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patternSearchData"]>

  export type PatternSearchDataSelectScalar = {
    patternId?: boolean
    grooveVector?: boolean
    hyperplaneHash?: boolean
  }

  export type PatternSearchDataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"patternId" | "grooveVector" | "hyperplaneHash", ExtArgs["result"]["patternSearchData"]>
  export type PatternSearchDataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }
  export type PatternSearchDataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }
  export type PatternSearchDataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }

  export type $PatternSearchDataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatternSearchData"
    objects: {
      pattern: Prisma.$PatternPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      patternId: number
      grooveVector: number[]
      hyperplaneHash: number[]
    }, ExtArgs["result"]["patternSearchData"]>
    composites: {}
  }

  type PatternSearchDataGetPayload<S extends boolean | null | undefined | PatternSearchDataDefaultArgs> = $Result.GetResult<Prisma.$PatternSearchDataPayload, S>

  type PatternSearchDataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatternSearchDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatternSearchDataCountAggregateInputType | true
    }

  export interface PatternSearchDataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatternSearchData'], meta: { name: 'PatternSearchData' } }
    /**
     * Find zero or one PatternSearchData that matches the filter.
     * @param {PatternSearchDataFindUniqueArgs} args - Arguments to find a PatternSearchData
     * @example
     * // Get one PatternSearchData
     * const patternSearchData = await prisma.patternSearchData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatternSearchDataFindUniqueArgs>(args: SelectSubset<T, PatternSearchDataFindUniqueArgs<ExtArgs>>): Prisma__PatternSearchDataClient<$Result.GetResult<Prisma.$PatternSearchDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatternSearchData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatternSearchDataFindUniqueOrThrowArgs} args - Arguments to find a PatternSearchData
     * @example
     * // Get one PatternSearchData
     * const patternSearchData = await prisma.patternSearchData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatternSearchDataFindUniqueOrThrowArgs>(args: SelectSubset<T, PatternSearchDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatternSearchDataClient<$Result.GetResult<Prisma.$PatternSearchDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatternSearchData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternSearchDataFindFirstArgs} args - Arguments to find a PatternSearchData
     * @example
     * // Get one PatternSearchData
     * const patternSearchData = await prisma.patternSearchData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatternSearchDataFindFirstArgs>(args?: SelectSubset<T, PatternSearchDataFindFirstArgs<ExtArgs>>): Prisma__PatternSearchDataClient<$Result.GetResult<Prisma.$PatternSearchDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatternSearchData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternSearchDataFindFirstOrThrowArgs} args - Arguments to find a PatternSearchData
     * @example
     * // Get one PatternSearchData
     * const patternSearchData = await prisma.patternSearchData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatternSearchDataFindFirstOrThrowArgs>(args?: SelectSubset<T, PatternSearchDataFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatternSearchDataClient<$Result.GetResult<Prisma.$PatternSearchDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatternSearchData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternSearchDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatternSearchData
     * const patternSearchData = await prisma.patternSearchData.findMany()
     * 
     * // Get first 10 PatternSearchData
     * const patternSearchData = await prisma.patternSearchData.findMany({ take: 10 })
     * 
     * // Only select the `patternId`
     * const patternSearchDataWithPatternIdOnly = await prisma.patternSearchData.findMany({ select: { patternId: true } })
     * 
     */
    findMany<T extends PatternSearchDataFindManyArgs>(args?: SelectSubset<T, PatternSearchDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternSearchDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatternSearchData.
     * @param {PatternSearchDataCreateArgs} args - Arguments to create a PatternSearchData.
     * @example
     * // Create one PatternSearchData
     * const PatternSearchData = await prisma.patternSearchData.create({
     *   data: {
     *     // ... data to create a PatternSearchData
     *   }
     * })
     * 
     */
    create<T extends PatternSearchDataCreateArgs>(args: SelectSubset<T, PatternSearchDataCreateArgs<ExtArgs>>): Prisma__PatternSearchDataClient<$Result.GetResult<Prisma.$PatternSearchDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatternSearchData.
     * @param {PatternSearchDataCreateManyArgs} args - Arguments to create many PatternSearchData.
     * @example
     * // Create many PatternSearchData
     * const patternSearchData = await prisma.patternSearchData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatternSearchDataCreateManyArgs>(args?: SelectSubset<T, PatternSearchDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatternSearchData and returns the data saved in the database.
     * @param {PatternSearchDataCreateManyAndReturnArgs} args - Arguments to create many PatternSearchData.
     * @example
     * // Create many PatternSearchData
     * const patternSearchData = await prisma.patternSearchData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatternSearchData and only return the `patternId`
     * const patternSearchDataWithPatternIdOnly = await prisma.patternSearchData.createManyAndReturn({
     *   select: { patternId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatternSearchDataCreateManyAndReturnArgs>(args?: SelectSubset<T, PatternSearchDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternSearchDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatternSearchData.
     * @param {PatternSearchDataDeleteArgs} args - Arguments to delete one PatternSearchData.
     * @example
     * // Delete one PatternSearchData
     * const PatternSearchData = await prisma.patternSearchData.delete({
     *   where: {
     *     // ... filter to delete one PatternSearchData
     *   }
     * })
     * 
     */
    delete<T extends PatternSearchDataDeleteArgs>(args: SelectSubset<T, PatternSearchDataDeleteArgs<ExtArgs>>): Prisma__PatternSearchDataClient<$Result.GetResult<Prisma.$PatternSearchDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatternSearchData.
     * @param {PatternSearchDataUpdateArgs} args - Arguments to update one PatternSearchData.
     * @example
     * // Update one PatternSearchData
     * const patternSearchData = await prisma.patternSearchData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatternSearchDataUpdateArgs>(args: SelectSubset<T, PatternSearchDataUpdateArgs<ExtArgs>>): Prisma__PatternSearchDataClient<$Result.GetResult<Prisma.$PatternSearchDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatternSearchData.
     * @param {PatternSearchDataDeleteManyArgs} args - Arguments to filter PatternSearchData to delete.
     * @example
     * // Delete a few PatternSearchData
     * const { count } = await prisma.patternSearchData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatternSearchDataDeleteManyArgs>(args?: SelectSubset<T, PatternSearchDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatternSearchData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternSearchDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatternSearchData
     * const patternSearchData = await prisma.patternSearchData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatternSearchDataUpdateManyArgs>(args: SelectSubset<T, PatternSearchDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatternSearchData and returns the data updated in the database.
     * @param {PatternSearchDataUpdateManyAndReturnArgs} args - Arguments to update many PatternSearchData.
     * @example
     * // Update many PatternSearchData
     * const patternSearchData = await prisma.patternSearchData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatternSearchData and only return the `patternId`
     * const patternSearchDataWithPatternIdOnly = await prisma.patternSearchData.updateManyAndReturn({
     *   select: { patternId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatternSearchDataUpdateManyAndReturnArgs>(args: SelectSubset<T, PatternSearchDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternSearchDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatternSearchData.
     * @param {PatternSearchDataUpsertArgs} args - Arguments to update or create a PatternSearchData.
     * @example
     * // Update or create a PatternSearchData
     * const patternSearchData = await prisma.patternSearchData.upsert({
     *   create: {
     *     // ... data to create a PatternSearchData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatternSearchData we want to update
     *   }
     * })
     */
    upsert<T extends PatternSearchDataUpsertArgs>(args: SelectSubset<T, PatternSearchDataUpsertArgs<ExtArgs>>): Prisma__PatternSearchDataClient<$Result.GetResult<Prisma.$PatternSearchDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatternSearchData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternSearchDataCountArgs} args - Arguments to filter PatternSearchData to count.
     * @example
     * // Count the number of PatternSearchData
     * const count = await prisma.patternSearchData.count({
     *   where: {
     *     // ... the filter for the PatternSearchData we want to count
     *   }
     * })
    **/
    count<T extends PatternSearchDataCountArgs>(
      args?: Subset<T, PatternSearchDataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatternSearchDataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatternSearchData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternSearchDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PatternSearchDataAggregateArgs>(args: Subset<T, PatternSearchDataAggregateArgs>): Prisma.PrismaPromise<GetPatternSearchDataAggregateType<T>>

    /**
     * Group by PatternSearchData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternSearchDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PatternSearchDataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatternSearchDataGroupByArgs['orderBy'] }
        : { orderBy?: PatternSearchDataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PatternSearchDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatternSearchDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatternSearchData model
   */
  readonly fields: PatternSearchDataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatternSearchData.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatternSearchDataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pattern<T extends PatternDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatternDefaultArgs<ExtArgs>>): Prisma__PatternClient<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PatternSearchData model
   */
  interface PatternSearchDataFieldRefs {
    readonly patternId: FieldRef<"PatternSearchData", 'Int'>
    readonly grooveVector: FieldRef<"PatternSearchData", 'Float[]'>
    readonly hyperplaneHash: FieldRef<"PatternSearchData", 'Int[]'>
  }
    

  // Custom InputTypes
  /**
   * PatternSearchData findUnique
   */
  export type PatternSearchDataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSearchData
     */
    select?: PatternSearchDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSearchData
     */
    omit?: PatternSearchDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSearchDataInclude<ExtArgs> | null
    /**
     * Filter, which PatternSearchData to fetch.
     */
    where: PatternSearchDataWhereUniqueInput
  }

  /**
   * PatternSearchData findUniqueOrThrow
   */
  export type PatternSearchDataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSearchData
     */
    select?: PatternSearchDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSearchData
     */
    omit?: PatternSearchDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSearchDataInclude<ExtArgs> | null
    /**
     * Filter, which PatternSearchData to fetch.
     */
    where: PatternSearchDataWhereUniqueInput
  }

  /**
   * PatternSearchData findFirst
   */
  export type PatternSearchDataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSearchData
     */
    select?: PatternSearchDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSearchData
     */
    omit?: PatternSearchDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSearchDataInclude<ExtArgs> | null
    /**
     * Filter, which PatternSearchData to fetch.
     */
    where?: PatternSearchDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternSearchData to fetch.
     */
    orderBy?: PatternSearchDataOrderByWithRelationInput | PatternSearchDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatternSearchData.
     */
    cursor?: PatternSearchDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternSearchData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternSearchData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatternSearchData.
     */
    distinct?: PatternSearchDataScalarFieldEnum | PatternSearchDataScalarFieldEnum[]
  }

  /**
   * PatternSearchData findFirstOrThrow
   */
  export type PatternSearchDataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSearchData
     */
    select?: PatternSearchDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSearchData
     */
    omit?: PatternSearchDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSearchDataInclude<ExtArgs> | null
    /**
     * Filter, which PatternSearchData to fetch.
     */
    where?: PatternSearchDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternSearchData to fetch.
     */
    orderBy?: PatternSearchDataOrderByWithRelationInput | PatternSearchDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatternSearchData.
     */
    cursor?: PatternSearchDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternSearchData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternSearchData.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatternSearchData.
     */
    distinct?: PatternSearchDataScalarFieldEnum | PatternSearchDataScalarFieldEnum[]
  }

  /**
   * PatternSearchData findMany
   */
  export type PatternSearchDataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSearchData
     */
    select?: PatternSearchDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSearchData
     */
    omit?: PatternSearchDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSearchDataInclude<ExtArgs> | null
    /**
     * Filter, which PatternSearchData to fetch.
     */
    where?: PatternSearchDataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternSearchData to fetch.
     */
    orderBy?: PatternSearchDataOrderByWithRelationInput | PatternSearchDataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatternSearchData.
     */
    cursor?: PatternSearchDataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternSearchData from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternSearchData.
     */
    skip?: number
    distinct?: PatternSearchDataScalarFieldEnum | PatternSearchDataScalarFieldEnum[]
  }

  /**
   * PatternSearchData create
   */
  export type PatternSearchDataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSearchData
     */
    select?: PatternSearchDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSearchData
     */
    omit?: PatternSearchDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSearchDataInclude<ExtArgs> | null
    /**
     * The data needed to create a PatternSearchData.
     */
    data: XOR<PatternSearchDataCreateInput, PatternSearchDataUncheckedCreateInput>
  }

  /**
   * PatternSearchData createMany
   */
  export type PatternSearchDataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatternSearchData.
     */
    data: PatternSearchDataCreateManyInput | PatternSearchDataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatternSearchData createManyAndReturn
   */
  export type PatternSearchDataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSearchData
     */
    select?: PatternSearchDataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSearchData
     */
    omit?: PatternSearchDataOmit<ExtArgs> | null
    /**
     * The data used to create many PatternSearchData.
     */
    data: PatternSearchDataCreateManyInput | PatternSearchDataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSearchDataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatternSearchData update
   */
  export type PatternSearchDataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSearchData
     */
    select?: PatternSearchDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSearchData
     */
    omit?: PatternSearchDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSearchDataInclude<ExtArgs> | null
    /**
     * The data needed to update a PatternSearchData.
     */
    data: XOR<PatternSearchDataUpdateInput, PatternSearchDataUncheckedUpdateInput>
    /**
     * Choose, which PatternSearchData to update.
     */
    where: PatternSearchDataWhereUniqueInput
  }

  /**
   * PatternSearchData updateMany
   */
  export type PatternSearchDataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatternSearchData.
     */
    data: XOR<PatternSearchDataUpdateManyMutationInput, PatternSearchDataUncheckedUpdateManyInput>
    /**
     * Filter which PatternSearchData to update
     */
    where?: PatternSearchDataWhereInput
    /**
     * Limit how many PatternSearchData to update.
     */
    limit?: number
  }

  /**
   * PatternSearchData updateManyAndReturn
   */
  export type PatternSearchDataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSearchData
     */
    select?: PatternSearchDataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSearchData
     */
    omit?: PatternSearchDataOmit<ExtArgs> | null
    /**
     * The data used to update PatternSearchData.
     */
    data: XOR<PatternSearchDataUpdateManyMutationInput, PatternSearchDataUncheckedUpdateManyInput>
    /**
     * Filter which PatternSearchData to update
     */
    where?: PatternSearchDataWhereInput
    /**
     * Limit how many PatternSearchData to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSearchDataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatternSearchData upsert
   */
  export type PatternSearchDataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSearchData
     */
    select?: PatternSearchDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSearchData
     */
    omit?: PatternSearchDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSearchDataInclude<ExtArgs> | null
    /**
     * The filter to search for the PatternSearchData to update in case it exists.
     */
    where: PatternSearchDataWhereUniqueInput
    /**
     * In case the PatternSearchData found by the `where` argument doesn't exist, create a new PatternSearchData with this data.
     */
    create: XOR<PatternSearchDataCreateInput, PatternSearchDataUncheckedCreateInput>
    /**
     * In case the PatternSearchData was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatternSearchDataUpdateInput, PatternSearchDataUncheckedUpdateInput>
  }

  /**
   * PatternSearchData delete
   */
  export type PatternSearchDataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSearchData
     */
    select?: PatternSearchDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSearchData
     */
    omit?: PatternSearchDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSearchDataInclude<ExtArgs> | null
    /**
     * Filter which PatternSearchData to delete.
     */
    where: PatternSearchDataWhereUniqueInput
  }

  /**
   * PatternSearchData deleteMany
   */
  export type PatternSearchDataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatternSearchData to delete
     */
    where?: PatternSearchDataWhereInput
    /**
     * Limit how many PatternSearchData to delete.
     */
    limit?: number
  }

  /**
   * PatternSearchData without action
   */
  export type PatternSearchDataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSearchData
     */
    select?: PatternSearchDataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSearchData
     */
    omit?: PatternSearchDataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSearchDataInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt',
    isActive: 'isActive'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const PatternScalarFieldEnum: {
    id: 'id',
    signatureBits: 'signatureBits',
    signatureMeasure: 'signatureMeasure',
    beats: 'beats',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatternScalarFieldEnum = (typeof PatternScalarFieldEnum)[keyof typeof PatternScalarFieldEnum]


  export const PatternTagScalarFieldEnum: {
    patternId: 'patternId',
    tagId: 'tagId'
  };

  export type PatternTagScalarFieldEnum = (typeof PatternTagScalarFieldEnum)[keyof typeof PatternTagScalarFieldEnum]


  export const LibraryPatternScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    patternId: 'patternId',
    isPublic: 'isPublic',
    title: 'title'
  };

  export type LibraryPatternScalarFieldEnum = (typeof LibraryPatternScalarFieldEnum)[keyof typeof LibraryPatternScalarFieldEnum]


  export const DraftScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    structure: 'structure',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DraftScalarFieldEnum = (typeof DraftScalarFieldEnum)[keyof typeof DraftScalarFieldEnum]


  export const DraftPatternScalarFieldEnum: {
    id: 'id',
    draftId: 'draftId',
    patternId: 'patternId',
    code: 'code',
    color: 'color'
  };

  export type DraftPatternScalarFieldEnum = (typeof DraftPatternScalarFieldEnum)[keyof typeof DraftPatternScalarFieldEnum]


  export const PatternSearchDataScalarFieldEnum: {
    patternId: 'patternId',
    grooveVector: 'grooveVector',
    hyperplaneHash: 'hyperplaneHash'
  };

  export type PatternSearchDataScalarFieldEnum = (typeof PatternSearchDataScalarFieldEnum)[keyof typeof PatternSearchDataScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'SignatureMeasure'
   */
  export type EnumSignatureMeasureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SignatureMeasure'>
    


  /**
   * Reference to a field of type 'SignatureMeasure[]'
   */
  export type ListEnumSignatureMeasureFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SignatureMeasure[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    library?: LibraryPatternListRelationFilter
    drafts?: DraftListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    library?: LibraryPatternOrderByRelationAggregateInput
    drafts?: DraftOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    library?: LibraryPatternListRelationFilter
    drafts?: DraftListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    patterns?: PatternTagListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    patterns?: PatternTagOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    patterns?: PatternTagListRelationFilter
  }, "id" | "name">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
  }

  export type PatternWhereInput = {
    AND?: PatternWhereInput | PatternWhereInput[]
    OR?: PatternWhereInput[]
    NOT?: PatternWhereInput | PatternWhereInput[]
    id?: IntFilter<"Pattern"> | number
    signatureBits?: IntFilter<"Pattern"> | number
    signatureMeasure?: EnumSignatureMeasureFilter<"Pattern"> | $Enums.SignatureMeasure
    beats?: JsonFilter<"Pattern">
    createdAt?: DateTimeFilter<"Pattern"> | Date | string
    updatedAt?: DateTimeFilter<"Pattern"> | Date | string
    tags?: PatternTagListRelationFilter
    draftsPatterns?: DraftPatternListRelationFilter
    library?: LibraryPatternListRelationFilter
    searchData?: XOR<PatternSearchDataNullableScalarRelationFilter, PatternSearchDataWhereInput> | null
  }

  export type PatternOrderByWithRelationInput = {
    id?: SortOrder
    signatureBits?: SortOrder
    signatureMeasure?: SortOrder
    beats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tags?: PatternTagOrderByRelationAggregateInput
    draftsPatterns?: DraftPatternOrderByRelationAggregateInput
    library?: LibraryPatternOrderByRelationAggregateInput
    searchData?: PatternSearchDataOrderByWithRelationInput
  }

  export type PatternWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PatternWhereInput | PatternWhereInput[]
    OR?: PatternWhereInput[]
    NOT?: PatternWhereInput | PatternWhereInput[]
    signatureBits?: IntFilter<"Pattern"> | number
    signatureMeasure?: EnumSignatureMeasureFilter<"Pattern"> | $Enums.SignatureMeasure
    beats?: JsonFilter<"Pattern">
    createdAt?: DateTimeFilter<"Pattern"> | Date | string
    updatedAt?: DateTimeFilter<"Pattern"> | Date | string
    tags?: PatternTagListRelationFilter
    draftsPatterns?: DraftPatternListRelationFilter
    library?: LibraryPatternListRelationFilter
    searchData?: XOR<PatternSearchDataNullableScalarRelationFilter, PatternSearchDataWhereInput> | null
  }, "id">

  export type PatternOrderByWithAggregationInput = {
    id?: SortOrder
    signatureBits?: SortOrder
    signatureMeasure?: SortOrder
    beats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatternCountOrderByAggregateInput
    _avg?: PatternAvgOrderByAggregateInput
    _max?: PatternMaxOrderByAggregateInput
    _min?: PatternMinOrderByAggregateInput
    _sum?: PatternSumOrderByAggregateInput
  }

  export type PatternScalarWhereWithAggregatesInput = {
    AND?: PatternScalarWhereWithAggregatesInput | PatternScalarWhereWithAggregatesInput[]
    OR?: PatternScalarWhereWithAggregatesInput[]
    NOT?: PatternScalarWhereWithAggregatesInput | PatternScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pattern"> | number
    signatureBits?: IntWithAggregatesFilter<"Pattern"> | number
    signatureMeasure?: EnumSignatureMeasureWithAggregatesFilter<"Pattern"> | $Enums.SignatureMeasure
    beats?: JsonWithAggregatesFilter<"Pattern">
    createdAt?: DateTimeWithAggregatesFilter<"Pattern"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pattern"> | Date | string
  }

  export type PatternTagWhereInput = {
    AND?: PatternTagWhereInput | PatternTagWhereInput[]
    OR?: PatternTagWhereInput[]
    NOT?: PatternTagWhereInput | PatternTagWhereInput[]
    patternId?: IntFilter<"PatternTag"> | number
    tagId?: IntFilter<"PatternTag"> | number
    pattern?: XOR<PatternScalarRelationFilter, PatternWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }

  export type PatternTagOrderByWithRelationInput = {
    patternId?: SortOrder
    tagId?: SortOrder
    pattern?: PatternOrderByWithRelationInput
    tag?: TagOrderByWithRelationInput
  }

  export type PatternTagWhereUniqueInput = Prisma.AtLeast<{
    patternId_tagId?: PatternTagPatternIdTagIdCompoundUniqueInput
    AND?: PatternTagWhereInput | PatternTagWhereInput[]
    OR?: PatternTagWhereInput[]
    NOT?: PatternTagWhereInput | PatternTagWhereInput[]
    patternId?: IntFilter<"PatternTag"> | number
    tagId?: IntFilter<"PatternTag"> | number
    pattern?: XOR<PatternScalarRelationFilter, PatternWhereInput>
    tag?: XOR<TagScalarRelationFilter, TagWhereInput>
  }, "patternId_tagId">

  export type PatternTagOrderByWithAggregationInput = {
    patternId?: SortOrder
    tagId?: SortOrder
    _count?: PatternTagCountOrderByAggregateInput
    _avg?: PatternTagAvgOrderByAggregateInput
    _max?: PatternTagMaxOrderByAggregateInput
    _min?: PatternTagMinOrderByAggregateInput
    _sum?: PatternTagSumOrderByAggregateInput
  }

  export type PatternTagScalarWhereWithAggregatesInput = {
    AND?: PatternTagScalarWhereWithAggregatesInput | PatternTagScalarWhereWithAggregatesInput[]
    OR?: PatternTagScalarWhereWithAggregatesInput[]
    NOT?: PatternTagScalarWhereWithAggregatesInput | PatternTagScalarWhereWithAggregatesInput[]
    patternId?: IntWithAggregatesFilter<"PatternTag"> | number
    tagId?: IntWithAggregatesFilter<"PatternTag"> | number
  }

  export type LibraryPatternWhereInput = {
    AND?: LibraryPatternWhereInput | LibraryPatternWhereInput[]
    OR?: LibraryPatternWhereInput[]
    NOT?: LibraryPatternWhereInput | LibraryPatternWhereInput[]
    id?: IntFilter<"LibraryPattern"> | number
    userId?: IntFilter<"LibraryPattern"> | number
    patternId?: IntFilter<"LibraryPattern"> | number
    isPublic?: BoolFilter<"LibraryPattern"> | boolean
    title?: StringFilter<"LibraryPattern"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pattern?: XOR<PatternScalarRelationFilter, PatternWhereInput>
  }

  export type LibraryPatternOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    patternId?: SortOrder
    isPublic?: SortOrder
    title?: SortOrder
    user?: UserOrderByWithRelationInput
    pattern?: PatternOrderByWithRelationInput
  }

  export type LibraryPatternWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LibraryPatternWhereInput | LibraryPatternWhereInput[]
    OR?: LibraryPatternWhereInput[]
    NOT?: LibraryPatternWhereInput | LibraryPatternWhereInput[]
    userId?: IntFilter<"LibraryPattern"> | number
    patternId?: IntFilter<"LibraryPattern"> | number
    isPublic?: BoolFilter<"LibraryPattern"> | boolean
    title?: StringFilter<"LibraryPattern"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pattern?: XOR<PatternScalarRelationFilter, PatternWhereInput>
  }, "id">

  export type LibraryPatternOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    patternId?: SortOrder
    isPublic?: SortOrder
    title?: SortOrder
    _count?: LibraryPatternCountOrderByAggregateInput
    _avg?: LibraryPatternAvgOrderByAggregateInput
    _max?: LibraryPatternMaxOrderByAggregateInput
    _min?: LibraryPatternMinOrderByAggregateInput
    _sum?: LibraryPatternSumOrderByAggregateInput
  }

  export type LibraryPatternScalarWhereWithAggregatesInput = {
    AND?: LibraryPatternScalarWhereWithAggregatesInput | LibraryPatternScalarWhereWithAggregatesInput[]
    OR?: LibraryPatternScalarWhereWithAggregatesInput[]
    NOT?: LibraryPatternScalarWhereWithAggregatesInput | LibraryPatternScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LibraryPattern"> | number
    userId?: IntWithAggregatesFilter<"LibraryPattern"> | number
    patternId?: IntWithAggregatesFilter<"LibraryPattern"> | number
    isPublic?: BoolWithAggregatesFilter<"LibraryPattern"> | boolean
    title?: StringWithAggregatesFilter<"LibraryPattern"> | string
  }

  export type DraftWhereInput = {
    AND?: DraftWhereInput | DraftWhereInput[]
    OR?: DraftWhereInput[]
    NOT?: DraftWhereInput | DraftWhereInput[]
    id?: IntFilter<"Draft"> | number
    userId?: IntFilter<"Draft"> | number
    title?: StringFilter<"Draft"> | string
    description?: StringNullableFilter<"Draft"> | string | null
    structure?: JsonFilter<"Draft">
    isPublic?: BoolFilter<"Draft"> | boolean
    createdAt?: DateTimeFilter<"Draft"> | Date | string
    updatedAt?: DateTimeFilter<"Draft"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    patterns?: DraftPatternListRelationFilter
  }

  export type DraftOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    structure?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    patterns?: DraftPatternOrderByRelationAggregateInput
  }

  export type DraftWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DraftWhereInput | DraftWhereInput[]
    OR?: DraftWhereInput[]
    NOT?: DraftWhereInput | DraftWhereInput[]
    userId?: IntFilter<"Draft"> | number
    title?: StringFilter<"Draft"> | string
    description?: StringNullableFilter<"Draft"> | string | null
    structure?: JsonFilter<"Draft">
    isPublic?: BoolFilter<"Draft"> | boolean
    createdAt?: DateTimeFilter<"Draft"> | Date | string
    updatedAt?: DateTimeFilter<"Draft"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    patterns?: DraftPatternListRelationFilter
  }, "id">

  export type DraftOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    structure?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DraftCountOrderByAggregateInput
    _avg?: DraftAvgOrderByAggregateInput
    _max?: DraftMaxOrderByAggregateInput
    _min?: DraftMinOrderByAggregateInput
    _sum?: DraftSumOrderByAggregateInput
  }

  export type DraftScalarWhereWithAggregatesInput = {
    AND?: DraftScalarWhereWithAggregatesInput | DraftScalarWhereWithAggregatesInput[]
    OR?: DraftScalarWhereWithAggregatesInput[]
    NOT?: DraftScalarWhereWithAggregatesInput | DraftScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Draft"> | number
    userId?: IntWithAggregatesFilter<"Draft"> | number
    title?: StringWithAggregatesFilter<"Draft"> | string
    description?: StringNullableWithAggregatesFilter<"Draft"> | string | null
    structure?: JsonWithAggregatesFilter<"Draft">
    isPublic?: BoolWithAggregatesFilter<"Draft"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Draft"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Draft"> | Date | string
  }

  export type DraftPatternWhereInput = {
    AND?: DraftPatternWhereInput | DraftPatternWhereInput[]
    OR?: DraftPatternWhereInput[]
    NOT?: DraftPatternWhereInput | DraftPatternWhereInput[]
    id?: IntFilter<"DraftPattern"> | number
    draftId?: IntFilter<"DraftPattern"> | number
    patternId?: IntFilter<"DraftPattern"> | number
    code?: StringFilter<"DraftPattern"> | string
    color?: StringFilter<"DraftPattern"> | string
    draft?: XOR<DraftScalarRelationFilter, DraftWhereInput>
    pattern?: XOR<PatternScalarRelationFilter, PatternWhereInput>
  }

  export type DraftPatternOrderByWithRelationInput = {
    id?: SortOrder
    draftId?: SortOrder
    patternId?: SortOrder
    code?: SortOrder
    color?: SortOrder
    draft?: DraftOrderByWithRelationInput
    pattern?: PatternOrderByWithRelationInput
  }

  export type DraftPatternWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    draftId_code?: DraftPatternDraftIdCodeCompoundUniqueInput
    AND?: DraftPatternWhereInput | DraftPatternWhereInput[]
    OR?: DraftPatternWhereInput[]
    NOT?: DraftPatternWhereInput | DraftPatternWhereInput[]
    draftId?: IntFilter<"DraftPattern"> | number
    patternId?: IntFilter<"DraftPattern"> | number
    code?: StringFilter<"DraftPattern"> | string
    color?: StringFilter<"DraftPattern"> | string
    draft?: XOR<DraftScalarRelationFilter, DraftWhereInput>
    pattern?: XOR<PatternScalarRelationFilter, PatternWhereInput>
  }, "id" | "draftId_code">

  export type DraftPatternOrderByWithAggregationInput = {
    id?: SortOrder
    draftId?: SortOrder
    patternId?: SortOrder
    code?: SortOrder
    color?: SortOrder
    _count?: DraftPatternCountOrderByAggregateInput
    _avg?: DraftPatternAvgOrderByAggregateInput
    _max?: DraftPatternMaxOrderByAggregateInput
    _min?: DraftPatternMinOrderByAggregateInput
    _sum?: DraftPatternSumOrderByAggregateInput
  }

  export type DraftPatternScalarWhereWithAggregatesInput = {
    AND?: DraftPatternScalarWhereWithAggregatesInput | DraftPatternScalarWhereWithAggregatesInput[]
    OR?: DraftPatternScalarWhereWithAggregatesInput[]
    NOT?: DraftPatternScalarWhereWithAggregatesInput | DraftPatternScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DraftPattern"> | number
    draftId?: IntWithAggregatesFilter<"DraftPattern"> | number
    patternId?: IntWithAggregatesFilter<"DraftPattern"> | number
    code?: StringWithAggregatesFilter<"DraftPattern"> | string
    color?: StringWithAggregatesFilter<"DraftPattern"> | string
  }

  export type PatternSearchDataWhereInput = {
    AND?: PatternSearchDataWhereInput | PatternSearchDataWhereInput[]
    OR?: PatternSearchDataWhereInput[]
    NOT?: PatternSearchDataWhereInput | PatternSearchDataWhereInput[]
    patternId?: IntFilter<"PatternSearchData"> | number
    grooveVector?: FloatNullableListFilter<"PatternSearchData">
    hyperplaneHash?: IntNullableListFilter<"PatternSearchData">
    pattern?: XOR<PatternScalarRelationFilter, PatternWhereInput>
  }

  export type PatternSearchDataOrderByWithRelationInput = {
    patternId?: SortOrder
    grooveVector?: SortOrder
    hyperplaneHash?: SortOrder
    pattern?: PatternOrderByWithRelationInput
  }

  export type PatternSearchDataWhereUniqueInput = Prisma.AtLeast<{
    patternId?: number
    AND?: PatternSearchDataWhereInput | PatternSearchDataWhereInput[]
    OR?: PatternSearchDataWhereInput[]
    NOT?: PatternSearchDataWhereInput | PatternSearchDataWhereInput[]
    grooveVector?: FloatNullableListFilter<"PatternSearchData">
    hyperplaneHash?: IntNullableListFilter<"PatternSearchData">
    pattern?: XOR<PatternScalarRelationFilter, PatternWhereInput>
  }, "patternId">

  export type PatternSearchDataOrderByWithAggregationInput = {
    patternId?: SortOrder
    grooveVector?: SortOrder
    hyperplaneHash?: SortOrder
    _count?: PatternSearchDataCountOrderByAggregateInput
    _avg?: PatternSearchDataAvgOrderByAggregateInput
    _max?: PatternSearchDataMaxOrderByAggregateInput
    _min?: PatternSearchDataMinOrderByAggregateInput
    _sum?: PatternSearchDataSumOrderByAggregateInput
  }

  export type PatternSearchDataScalarWhereWithAggregatesInput = {
    AND?: PatternSearchDataScalarWhereWithAggregatesInput | PatternSearchDataScalarWhereWithAggregatesInput[]
    OR?: PatternSearchDataScalarWhereWithAggregatesInput[]
    NOT?: PatternSearchDataScalarWhereWithAggregatesInput | PatternSearchDataScalarWhereWithAggregatesInput[]
    patternId?: IntWithAggregatesFilter<"PatternSearchData"> | number
    grooveVector?: FloatNullableListFilter<"PatternSearchData">
    hyperplaneHash?: IntNullableListFilter<"PatternSearchData">
  }

  export type UserCreateInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    isActive?: boolean
    library?: LibraryPatternCreateNestedManyWithoutUserInput
    drafts?: DraftCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    isActive?: boolean
    library?: LibraryPatternUncheckedCreateNestedManyWithoutUserInput
    drafts?: DraftUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    library?: LibraryPatternUpdateManyWithoutUserNestedInput
    drafts?: DraftUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    library?: LibraryPatternUncheckedUpdateManyWithoutUserNestedInput
    drafts?: DraftUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    isActive?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TagCreateInput = {
    name: string
    createdAt?: Date | string
    patterns?: PatternTagCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    patterns?: PatternTagUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patterns?: PatternTagUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patterns?: PatternTagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatternCreateInput = {
    signatureBits?: number
    signatureMeasure?: $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PatternTagCreateNestedManyWithoutPatternInput
    draftsPatterns?: DraftPatternCreateNestedManyWithoutPatternInput
    library?: LibraryPatternCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataCreateNestedOneWithoutPatternInput
  }

  export type PatternUncheckedCreateInput = {
    id?: number
    signatureBits?: number
    signatureMeasure?: $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PatternTagUncheckedCreateNestedManyWithoutPatternInput
    draftsPatterns?: DraftPatternUncheckedCreateNestedManyWithoutPatternInput
    library?: LibraryPatternUncheckedCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataUncheckedCreateNestedOneWithoutPatternInput
  }

  export type PatternUpdateInput = {
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PatternTagUpdateManyWithoutPatternNestedInput
    draftsPatterns?: DraftPatternUpdateManyWithoutPatternNestedInput
    library?: LibraryPatternUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUpdateOneWithoutPatternNestedInput
  }

  export type PatternUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PatternTagUncheckedUpdateManyWithoutPatternNestedInput
    draftsPatterns?: DraftPatternUncheckedUpdateManyWithoutPatternNestedInput
    library?: LibraryPatternUncheckedUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUncheckedUpdateOneWithoutPatternNestedInput
  }

  export type PatternCreateManyInput = {
    id?: number
    signatureBits?: number
    signatureMeasure?: $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatternUpdateManyMutationInput = {
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatternUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatternTagCreateInput = {
    pattern: PatternCreateNestedOneWithoutTagsInput
    tag: TagCreateNestedOneWithoutPatternsInput
  }

  export type PatternTagUncheckedCreateInput = {
    patternId: number
    tagId: number
  }

  export type PatternTagUpdateInput = {
    pattern?: PatternUpdateOneRequiredWithoutTagsNestedInput
    tag?: TagUpdateOneRequiredWithoutPatternsNestedInput
  }

  export type PatternTagUncheckedUpdateInput = {
    patternId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type PatternTagCreateManyInput = {
    patternId: number
    tagId: number
  }

  export type PatternTagUpdateManyMutationInput = {

  }

  export type PatternTagUncheckedUpdateManyInput = {
    patternId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type LibraryPatternCreateInput = {
    isPublic?: boolean
    title: string
    user: UserCreateNestedOneWithoutLibraryInput
    pattern: PatternCreateNestedOneWithoutLibraryInput
  }

  export type LibraryPatternUncheckedCreateInput = {
    id?: number
    userId: number
    patternId: number
    isPublic?: boolean
    title: string
  }

  export type LibraryPatternUpdateInput = {
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLibraryNestedInput
    pattern?: PatternUpdateOneRequiredWithoutLibraryNestedInput
  }

  export type LibraryPatternUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    patternId?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryPatternCreateManyInput = {
    id?: number
    userId: number
    patternId: number
    isPublic?: boolean
    title: string
  }

  export type LibraryPatternUpdateManyMutationInput = {
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryPatternUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    patternId?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DraftCreateInput = {
    title: string
    description?: string | null
    structure: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDraftsInput
    patterns?: DraftPatternCreateNestedManyWithoutDraftInput
  }

  export type DraftUncheckedCreateInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    structure: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patterns?: DraftPatternUncheckedCreateNestedManyWithoutDraftInput
  }

  export type DraftUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDraftsNestedInput
    patterns?: DraftPatternUpdateManyWithoutDraftNestedInput
  }

  export type DraftUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patterns?: DraftPatternUncheckedUpdateManyWithoutDraftNestedInput
  }

  export type DraftCreateManyInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    structure: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DraftUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftPatternCreateInput = {
    code: string
    color: string
    draft: DraftCreateNestedOneWithoutPatternsInput
    pattern: PatternCreateNestedOneWithoutDraftsPatternsInput
  }

  export type DraftPatternUncheckedCreateInput = {
    id?: number
    draftId: number
    patternId: number
    code: string
    color: string
  }

  export type DraftPatternUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    draft?: DraftUpdateOneRequiredWithoutPatternsNestedInput
    pattern?: PatternUpdateOneRequiredWithoutDraftsPatternsNestedInput
  }

  export type DraftPatternUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    draftId?: IntFieldUpdateOperationsInput | number
    patternId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type DraftPatternCreateManyInput = {
    id?: number
    draftId: number
    patternId: number
    code: string
    color: string
  }

  export type DraftPatternUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type DraftPatternUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    draftId?: IntFieldUpdateOperationsInput | number
    patternId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type PatternSearchDataCreateInput = {
    grooveVector?: PatternSearchDataCreategrooveVectorInput | number[]
    hyperplaneHash?: PatternSearchDataCreatehyperplaneHashInput | number[]
    pattern: PatternCreateNestedOneWithoutSearchDataInput
  }

  export type PatternSearchDataUncheckedCreateInput = {
    patternId: number
    grooveVector?: PatternSearchDataCreategrooveVectorInput | number[]
    hyperplaneHash?: PatternSearchDataCreatehyperplaneHashInput | number[]
  }

  export type PatternSearchDataUpdateInput = {
    grooveVector?: PatternSearchDataUpdategrooveVectorInput | number[]
    hyperplaneHash?: PatternSearchDataUpdatehyperplaneHashInput | number[]
    pattern?: PatternUpdateOneRequiredWithoutSearchDataNestedInput
  }

  export type PatternSearchDataUncheckedUpdateInput = {
    patternId?: IntFieldUpdateOperationsInput | number
    grooveVector?: PatternSearchDataUpdategrooveVectorInput | number[]
    hyperplaneHash?: PatternSearchDataUpdatehyperplaneHashInput | number[]
  }

  export type PatternSearchDataCreateManyInput = {
    patternId: number
    grooveVector?: PatternSearchDataCreategrooveVectorInput | number[]
    hyperplaneHash?: PatternSearchDataCreatehyperplaneHashInput | number[]
  }

  export type PatternSearchDataUpdateManyMutationInput = {
    grooveVector?: PatternSearchDataUpdategrooveVectorInput | number[]
    hyperplaneHash?: PatternSearchDataUpdatehyperplaneHashInput | number[]
  }

  export type PatternSearchDataUncheckedUpdateManyInput = {
    patternId?: IntFieldUpdateOperationsInput | number
    grooveVector?: PatternSearchDataUpdategrooveVectorInput | number[]
    hyperplaneHash?: PatternSearchDataUpdatehyperplaneHashInput | number[]
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type LibraryPatternListRelationFilter = {
    every?: LibraryPatternWhereInput
    some?: LibraryPatternWhereInput
    none?: LibraryPatternWhereInput
  }

  export type DraftListRelationFilter = {
    every?: DraftWhereInput
    some?: DraftWhereInput
    none?: DraftWhereInput
  }

  export type LibraryPatternOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DraftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PatternTagListRelationFilter = {
    every?: PatternTagWhereInput
    some?: PatternTagWhereInput
    none?: PatternTagWhereInput
  }

  export type PatternTagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumSignatureMeasureFilter<$PrismaModel = never> = {
    equals?: $Enums.SignatureMeasure | EnumSignatureMeasureFieldRefInput<$PrismaModel>
    in?: $Enums.SignatureMeasure[] | ListEnumSignatureMeasureFieldRefInput<$PrismaModel>
    notIn?: $Enums.SignatureMeasure[] | ListEnumSignatureMeasureFieldRefInput<$PrismaModel>
    not?: NestedEnumSignatureMeasureFilter<$PrismaModel> | $Enums.SignatureMeasure
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DraftPatternListRelationFilter = {
    every?: DraftPatternWhereInput
    some?: DraftPatternWhereInput
    none?: DraftPatternWhereInput
  }

  export type PatternSearchDataNullableScalarRelationFilter = {
    is?: PatternSearchDataWhereInput | null
    isNot?: PatternSearchDataWhereInput | null
  }

  export type DraftPatternOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatternCountOrderByAggregateInput = {
    id?: SortOrder
    signatureBits?: SortOrder
    signatureMeasure?: SortOrder
    beats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatternAvgOrderByAggregateInput = {
    id?: SortOrder
    signatureBits?: SortOrder
  }

  export type PatternMaxOrderByAggregateInput = {
    id?: SortOrder
    signatureBits?: SortOrder
    signatureMeasure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatternMinOrderByAggregateInput = {
    id?: SortOrder
    signatureBits?: SortOrder
    signatureMeasure?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatternSumOrderByAggregateInput = {
    id?: SortOrder
    signatureBits?: SortOrder
  }

  export type EnumSignatureMeasureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SignatureMeasure | EnumSignatureMeasureFieldRefInput<$PrismaModel>
    in?: $Enums.SignatureMeasure[] | ListEnumSignatureMeasureFieldRefInput<$PrismaModel>
    notIn?: $Enums.SignatureMeasure[] | ListEnumSignatureMeasureFieldRefInput<$PrismaModel>
    not?: NestedEnumSignatureMeasureWithAggregatesFilter<$PrismaModel> | $Enums.SignatureMeasure
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSignatureMeasureFilter<$PrismaModel>
    _max?: NestedEnumSignatureMeasureFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type PatternScalarRelationFilter = {
    is?: PatternWhereInput
    isNot?: PatternWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type PatternTagPatternIdTagIdCompoundUniqueInput = {
    patternId: number
    tagId: number
  }

  export type PatternTagCountOrderByAggregateInput = {
    patternId?: SortOrder
    tagId?: SortOrder
  }

  export type PatternTagAvgOrderByAggregateInput = {
    patternId?: SortOrder
    tagId?: SortOrder
  }

  export type PatternTagMaxOrderByAggregateInput = {
    patternId?: SortOrder
    tagId?: SortOrder
  }

  export type PatternTagMinOrderByAggregateInput = {
    patternId?: SortOrder
    tagId?: SortOrder
  }

  export type PatternTagSumOrderByAggregateInput = {
    patternId?: SortOrder
    tagId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LibraryPatternCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    patternId?: SortOrder
    isPublic?: SortOrder
    title?: SortOrder
  }

  export type LibraryPatternAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    patternId?: SortOrder
  }

  export type LibraryPatternMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    patternId?: SortOrder
    isPublic?: SortOrder
    title?: SortOrder
  }

  export type LibraryPatternMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    patternId?: SortOrder
    isPublic?: SortOrder
    title?: SortOrder
  }

  export type LibraryPatternSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    patternId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DraftCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    structure?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DraftAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DraftMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DraftMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DraftSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DraftScalarRelationFilter = {
    is?: DraftWhereInput
    isNot?: DraftWhereInput
  }

  export type DraftPatternDraftIdCodeCompoundUniqueInput = {
    draftId: number
    code: string
  }

  export type DraftPatternCountOrderByAggregateInput = {
    id?: SortOrder
    draftId?: SortOrder
    patternId?: SortOrder
    code?: SortOrder
    color?: SortOrder
  }

  export type DraftPatternAvgOrderByAggregateInput = {
    id?: SortOrder
    draftId?: SortOrder
    patternId?: SortOrder
  }

  export type DraftPatternMaxOrderByAggregateInput = {
    id?: SortOrder
    draftId?: SortOrder
    patternId?: SortOrder
    code?: SortOrder
    color?: SortOrder
  }

  export type DraftPatternMinOrderByAggregateInput = {
    id?: SortOrder
    draftId?: SortOrder
    patternId?: SortOrder
    code?: SortOrder
    color?: SortOrder
  }

  export type DraftPatternSumOrderByAggregateInput = {
    id?: SortOrder
    draftId?: SortOrder
    patternId?: SortOrder
  }

  export type FloatNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    has?: number | FloatFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListFloatFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListFloatFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PatternSearchDataCountOrderByAggregateInput = {
    patternId?: SortOrder
    grooveVector?: SortOrder
    hyperplaneHash?: SortOrder
  }

  export type PatternSearchDataAvgOrderByAggregateInput = {
    patternId?: SortOrder
    grooveVector?: SortOrder
    hyperplaneHash?: SortOrder
  }

  export type PatternSearchDataMaxOrderByAggregateInput = {
    patternId?: SortOrder
  }

  export type PatternSearchDataMinOrderByAggregateInput = {
    patternId?: SortOrder
  }

  export type PatternSearchDataSumOrderByAggregateInput = {
    patternId?: SortOrder
    grooveVector?: SortOrder
    hyperplaneHash?: SortOrder
  }

  export type LibraryPatternCreateNestedManyWithoutUserInput = {
    create?: XOR<LibraryPatternCreateWithoutUserInput, LibraryPatternUncheckedCreateWithoutUserInput> | LibraryPatternCreateWithoutUserInput[] | LibraryPatternUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibraryPatternCreateOrConnectWithoutUserInput | LibraryPatternCreateOrConnectWithoutUserInput[]
    createMany?: LibraryPatternCreateManyUserInputEnvelope
    connect?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
  }

  export type DraftCreateNestedManyWithoutUserInput = {
    create?: XOR<DraftCreateWithoutUserInput, DraftUncheckedCreateWithoutUserInput> | DraftCreateWithoutUserInput[] | DraftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DraftCreateOrConnectWithoutUserInput | DraftCreateOrConnectWithoutUserInput[]
    createMany?: DraftCreateManyUserInputEnvelope
    connect?: DraftWhereUniqueInput | DraftWhereUniqueInput[]
  }

  export type LibraryPatternUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LibraryPatternCreateWithoutUserInput, LibraryPatternUncheckedCreateWithoutUserInput> | LibraryPatternCreateWithoutUserInput[] | LibraryPatternUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibraryPatternCreateOrConnectWithoutUserInput | LibraryPatternCreateOrConnectWithoutUserInput[]
    createMany?: LibraryPatternCreateManyUserInputEnvelope
    connect?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
  }

  export type DraftUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DraftCreateWithoutUserInput, DraftUncheckedCreateWithoutUserInput> | DraftCreateWithoutUserInput[] | DraftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DraftCreateOrConnectWithoutUserInput | DraftCreateOrConnectWithoutUserInput[]
    createMany?: DraftCreateManyUserInputEnvelope
    connect?: DraftWhereUniqueInput | DraftWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type LibraryPatternUpdateManyWithoutUserNestedInput = {
    create?: XOR<LibraryPatternCreateWithoutUserInput, LibraryPatternUncheckedCreateWithoutUserInput> | LibraryPatternCreateWithoutUserInput[] | LibraryPatternUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibraryPatternCreateOrConnectWithoutUserInput | LibraryPatternCreateOrConnectWithoutUserInput[]
    upsert?: LibraryPatternUpsertWithWhereUniqueWithoutUserInput | LibraryPatternUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LibraryPatternCreateManyUserInputEnvelope
    set?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    disconnect?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    delete?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    connect?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    update?: LibraryPatternUpdateWithWhereUniqueWithoutUserInput | LibraryPatternUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LibraryPatternUpdateManyWithWhereWithoutUserInput | LibraryPatternUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LibraryPatternScalarWhereInput | LibraryPatternScalarWhereInput[]
  }

  export type DraftUpdateManyWithoutUserNestedInput = {
    create?: XOR<DraftCreateWithoutUserInput, DraftUncheckedCreateWithoutUserInput> | DraftCreateWithoutUserInput[] | DraftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DraftCreateOrConnectWithoutUserInput | DraftCreateOrConnectWithoutUserInput[]
    upsert?: DraftUpsertWithWhereUniqueWithoutUserInput | DraftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DraftCreateManyUserInputEnvelope
    set?: DraftWhereUniqueInput | DraftWhereUniqueInput[]
    disconnect?: DraftWhereUniqueInput | DraftWhereUniqueInput[]
    delete?: DraftWhereUniqueInput | DraftWhereUniqueInput[]
    connect?: DraftWhereUniqueInput | DraftWhereUniqueInput[]
    update?: DraftUpdateWithWhereUniqueWithoutUserInput | DraftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DraftUpdateManyWithWhereWithoutUserInput | DraftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DraftScalarWhereInput | DraftScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type LibraryPatternUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LibraryPatternCreateWithoutUserInput, LibraryPatternUncheckedCreateWithoutUserInput> | LibraryPatternCreateWithoutUserInput[] | LibraryPatternUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LibraryPatternCreateOrConnectWithoutUserInput | LibraryPatternCreateOrConnectWithoutUserInput[]
    upsert?: LibraryPatternUpsertWithWhereUniqueWithoutUserInput | LibraryPatternUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LibraryPatternCreateManyUserInputEnvelope
    set?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    disconnect?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    delete?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    connect?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    update?: LibraryPatternUpdateWithWhereUniqueWithoutUserInput | LibraryPatternUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LibraryPatternUpdateManyWithWhereWithoutUserInput | LibraryPatternUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LibraryPatternScalarWhereInput | LibraryPatternScalarWhereInput[]
  }

  export type DraftUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DraftCreateWithoutUserInput, DraftUncheckedCreateWithoutUserInput> | DraftCreateWithoutUserInput[] | DraftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DraftCreateOrConnectWithoutUserInput | DraftCreateOrConnectWithoutUserInput[]
    upsert?: DraftUpsertWithWhereUniqueWithoutUserInput | DraftUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DraftCreateManyUserInputEnvelope
    set?: DraftWhereUniqueInput | DraftWhereUniqueInput[]
    disconnect?: DraftWhereUniqueInput | DraftWhereUniqueInput[]
    delete?: DraftWhereUniqueInput | DraftWhereUniqueInput[]
    connect?: DraftWhereUniqueInput | DraftWhereUniqueInput[]
    update?: DraftUpdateWithWhereUniqueWithoutUserInput | DraftUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DraftUpdateManyWithWhereWithoutUserInput | DraftUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DraftScalarWhereInput | DraftScalarWhereInput[]
  }

  export type PatternTagCreateNestedManyWithoutTagInput = {
    create?: XOR<PatternTagCreateWithoutTagInput, PatternTagUncheckedCreateWithoutTagInput> | PatternTagCreateWithoutTagInput[] | PatternTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PatternTagCreateOrConnectWithoutTagInput | PatternTagCreateOrConnectWithoutTagInput[]
    createMany?: PatternTagCreateManyTagInputEnvelope
    connect?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
  }

  export type PatternTagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<PatternTagCreateWithoutTagInput, PatternTagUncheckedCreateWithoutTagInput> | PatternTagCreateWithoutTagInput[] | PatternTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PatternTagCreateOrConnectWithoutTagInput | PatternTagCreateOrConnectWithoutTagInput[]
    createMany?: PatternTagCreateManyTagInputEnvelope
    connect?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
  }

  export type PatternTagUpdateManyWithoutTagNestedInput = {
    create?: XOR<PatternTagCreateWithoutTagInput, PatternTagUncheckedCreateWithoutTagInput> | PatternTagCreateWithoutTagInput[] | PatternTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PatternTagCreateOrConnectWithoutTagInput | PatternTagCreateOrConnectWithoutTagInput[]
    upsert?: PatternTagUpsertWithWhereUniqueWithoutTagInput | PatternTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PatternTagCreateManyTagInputEnvelope
    set?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    disconnect?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    delete?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    connect?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    update?: PatternTagUpdateWithWhereUniqueWithoutTagInput | PatternTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PatternTagUpdateManyWithWhereWithoutTagInput | PatternTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PatternTagScalarWhereInput | PatternTagScalarWhereInput[]
  }

  export type PatternTagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<PatternTagCreateWithoutTagInput, PatternTagUncheckedCreateWithoutTagInput> | PatternTagCreateWithoutTagInput[] | PatternTagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: PatternTagCreateOrConnectWithoutTagInput | PatternTagCreateOrConnectWithoutTagInput[]
    upsert?: PatternTagUpsertWithWhereUniqueWithoutTagInput | PatternTagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: PatternTagCreateManyTagInputEnvelope
    set?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    disconnect?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    delete?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    connect?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    update?: PatternTagUpdateWithWhereUniqueWithoutTagInput | PatternTagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: PatternTagUpdateManyWithWhereWithoutTagInput | PatternTagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: PatternTagScalarWhereInput | PatternTagScalarWhereInput[]
  }

  export type PatternTagCreateNestedManyWithoutPatternInput = {
    create?: XOR<PatternTagCreateWithoutPatternInput, PatternTagUncheckedCreateWithoutPatternInput> | PatternTagCreateWithoutPatternInput[] | PatternTagUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: PatternTagCreateOrConnectWithoutPatternInput | PatternTagCreateOrConnectWithoutPatternInput[]
    createMany?: PatternTagCreateManyPatternInputEnvelope
    connect?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
  }

  export type DraftPatternCreateNestedManyWithoutPatternInput = {
    create?: XOR<DraftPatternCreateWithoutPatternInput, DraftPatternUncheckedCreateWithoutPatternInput> | DraftPatternCreateWithoutPatternInput[] | DraftPatternUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: DraftPatternCreateOrConnectWithoutPatternInput | DraftPatternCreateOrConnectWithoutPatternInput[]
    createMany?: DraftPatternCreateManyPatternInputEnvelope
    connect?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
  }

  export type LibraryPatternCreateNestedManyWithoutPatternInput = {
    create?: XOR<LibraryPatternCreateWithoutPatternInput, LibraryPatternUncheckedCreateWithoutPatternInput> | LibraryPatternCreateWithoutPatternInput[] | LibraryPatternUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: LibraryPatternCreateOrConnectWithoutPatternInput | LibraryPatternCreateOrConnectWithoutPatternInput[]
    createMany?: LibraryPatternCreateManyPatternInputEnvelope
    connect?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
  }

  export type PatternSearchDataCreateNestedOneWithoutPatternInput = {
    create?: XOR<PatternSearchDataCreateWithoutPatternInput, PatternSearchDataUncheckedCreateWithoutPatternInput>
    connectOrCreate?: PatternSearchDataCreateOrConnectWithoutPatternInput
    connect?: PatternSearchDataWhereUniqueInput
  }

  export type PatternTagUncheckedCreateNestedManyWithoutPatternInput = {
    create?: XOR<PatternTagCreateWithoutPatternInput, PatternTagUncheckedCreateWithoutPatternInput> | PatternTagCreateWithoutPatternInput[] | PatternTagUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: PatternTagCreateOrConnectWithoutPatternInput | PatternTagCreateOrConnectWithoutPatternInput[]
    createMany?: PatternTagCreateManyPatternInputEnvelope
    connect?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
  }

  export type DraftPatternUncheckedCreateNestedManyWithoutPatternInput = {
    create?: XOR<DraftPatternCreateWithoutPatternInput, DraftPatternUncheckedCreateWithoutPatternInput> | DraftPatternCreateWithoutPatternInput[] | DraftPatternUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: DraftPatternCreateOrConnectWithoutPatternInput | DraftPatternCreateOrConnectWithoutPatternInput[]
    createMany?: DraftPatternCreateManyPatternInputEnvelope
    connect?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
  }

  export type LibraryPatternUncheckedCreateNestedManyWithoutPatternInput = {
    create?: XOR<LibraryPatternCreateWithoutPatternInput, LibraryPatternUncheckedCreateWithoutPatternInput> | LibraryPatternCreateWithoutPatternInput[] | LibraryPatternUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: LibraryPatternCreateOrConnectWithoutPatternInput | LibraryPatternCreateOrConnectWithoutPatternInput[]
    createMany?: LibraryPatternCreateManyPatternInputEnvelope
    connect?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
  }

  export type PatternSearchDataUncheckedCreateNestedOneWithoutPatternInput = {
    create?: XOR<PatternSearchDataCreateWithoutPatternInput, PatternSearchDataUncheckedCreateWithoutPatternInput>
    connectOrCreate?: PatternSearchDataCreateOrConnectWithoutPatternInput
    connect?: PatternSearchDataWhereUniqueInput
  }

  export type EnumSignatureMeasureFieldUpdateOperationsInput = {
    set?: $Enums.SignatureMeasure
  }

  export type PatternTagUpdateManyWithoutPatternNestedInput = {
    create?: XOR<PatternTagCreateWithoutPatternInput, PatternTagUncheckedCreateWithoutPatternInput> | PatternTagCreateWithoutPatternInput[] | PatternTagUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: PatternTagCreateOrConnectWithoutPatternInput | PatternTagCreateOrConnectWithoutPatternInput[]
    upsert?: PatternTagUpsertWithWhereUniqueWithoutPatternInput | PatternTagUpsertWithWhereUniqueWithoutPatternInput[]
    createMany?: PatternTagCreateManyPatternInputEnvelope
    set?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    disconnect?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    delete?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    connect?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    update?: PatternTagUpdateWithWhereUniqueWithoutPatternInput | PatternTagUpdateWithWhereUniqueWithoutPatternInput[]
    updateMany?: PatternTagUpdateManyWithWhereWithoutPatternInput | PatternTagUpdateManyWithWhereWithoutPatternInput[]
    deleteMany?: PatternTagScalarWhereInput | PatternTagScalarWhereInput[]
  }

  export type DraftPatternUpdateManyWithoutPatternNestedInput = {
    create?: XOR<DraftPatternCreateWithoutPatternInput, DraftPatternUncheckedCreateWithoutPatternInput> | DraftPatternCreateWithoutPatternInput[] | DraftPatternUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: DraftPatternCreateOrConnectWithoutPatternInput | DraftPatternCreateOrConnectWithoutPatternInput[]
    upsert?: DraftPatternUpsertWithWhereUniqueWithoutPatternInput | DraftPatternUpsertWithWhereUniqueWithoutPatternInput[]
    createMany?: DraftPatternCreateManyPatternInputEnvelope
    set?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    disconnect?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    delete?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    connect?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    update?: DraftPatternUpdateWithWhereUniqueWithoutPatternInput | DraftPatternUpdateWithWhereUniqueWithoutPatternInput[]
    updateMany?: DraftPatternUpdateManyWithWhereWithoutPatternInput | DraftPatternUpdateManyWithWhereWithoutPatternInput[]
    deleteMany?: DraftPatternScalarWhereInput | DraftPatternScalarWhereInput[]
  }

  export type LibraryPatternUpdateManyWithoutPatternNestedInput = {
    create?: XOR<LibraryPatternCreateWithoutPatternInput, LibraryPatternUncheckedCreateWithoutPatternInput> | LibraryPatternCreateWithoutPatternInput[] | LibraryPatternUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: LibraryPatternCreateOrConnectWithoutPatternInput | LibraryPatternCreateOrConnectWithoutPatternInput[]
    upsert?: LibraryPatternUpsertWithWhereUniqueWithoutPatternInput | LibraryPatternUpsertWithWhereUniqueWithoutPatternInput[]
    createMany?: LibraryPatternCreateManyPatternInputEnvelope
    set?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    disconnect?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    delete?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    connect?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    update?: LibraryPatternUpdateWithWhereUniqueWithoutPatternInput | LibraryPatternUpdateWithWhereUniqueWithoutPatternInput[]
    updateMany?: LibraryPatternUpdateManyWithWhereWithoutPatternInput | LibraryPatternUpdateManyWithWhereWithoutPatternInput[]
    deleteMany?: LibraryPatternScalarWhereInput | LibraryPatternScalarWhereInput[]
  }

  export type PatternSearchDataUpdateOneWithoutPatternNestedInput = {
    create?: XOR<PatternSearchDataCreateWithoutPatternInput, PatternSearchDataUncheckedCreateWithoutPatternInput>
    connectOrCreate?: PatternSearchDataCreateOrConnectWithoutPatternInput
    upsert?: PatternSearchDataUpsertWithoutPatternInput
    disconnect?: PatternSearchDataWhereInput | boolean
    delete?: PatternSearchDataWhereInput | boolean
    connect?: PatternSearchDataWhereUniqueInput
    update?: XOR<XOR<PatternSearchDataUpdateToOneWithWhereWithoutPatternInput, PatternSearchDataUpdateWithoutPatternInput>, PatternSearchDataUncheckedUpdateWithoutPatternInput>
  }

  export type PatternTagUncheckedUpdateManyWithoutPatternNestedInput = {
    create?: XOR<PatternTagCreateWithoutPatternInput, PatternTagUncheckedCreateWithoutPatternInput> | PatternTagCreateWithoutPatternInput[] | PatternTagUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: PatternTagCreateOrConnectWithoutPatternInput | PatternTagCreateOrConnectWithoutPatternInput[]
    upsert?: PatternTagUpsertWithWhereUniqueWithoutPatternInput | PatternTagUpsertWithWhereUniqueWithoutPatternInput[]
    createMany?: PatternTagCreateManyPatternInputEnvelope
    set?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    disconnect?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    delete?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    connect?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
    update?: PatternTagUpdateWithWhereUniqueWithoutPatternInput | PatternTagUpdateWithWhereUniqueWithoutPatternInput[]
    updateMany?: PatternTagUpdateManyWithWhereWithoutPatternInput | PatternTagUpdateManyWithWhereWithoutPatternInput[]
    deleteMany?: PatternTagScalarWhereInput | PatternTagScalarWhereInput[]
  }

  export type DraftPatternUncheckedUpdateManyWithoutPatternNestedInput = {
    create?: XOR<DraftPatternCreateWithoutPatternInput, DraftPatternUncheckedCreateWithoutPatternInput> | DraftPatternCreateWithoutPatternInput[] | DraftPatternUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: DraftPatternCreateOrConnectWithoutPatternInput | DraftPatternCreateOrConnectWithoutPatternInput[]
    upsert?: DraftPatternUpsertWithWhereUniqueWithoutPatternInput | DraftPatternUpsertWithWhereUniqueWithoutPatternInput[]
    createMany?: DraftPatternCreateManyPatternInputEnvelope
    set?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    disconnect?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    delete?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    connect?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    update?: DraftPatternUpdateWithWhereUniqueWithoutPatternInput | DraftPatternUpdateWithWhereUniqueWithoutPatternInput[]
    updateMany?: DraftPatternUpdateManyWithWhereWithoutPatternInput | DraftPatternUpdateManyWithWhereWithoutPatternInput[]
    deleteMany?: DraftPatternScalarWhereInput | DraftPatternScalarWhereInput[]
  }

  export type LibraryPatternUncheckedUpdateManyWithoutPatternNestedInput = {
    create?: XOR<LibraryPatternCreateWithoutPatternInput, LibraryPatternUncheckedCreateWithoutPatternInput> | LibraryPatternCreateWithoutPatternInput[] | LibraryPatternUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: LibraryPatternCreateOrConnectWithoutPatternInput | LibraryPatternCreateOrConnectWithoutPatternInput[]
    upsert?: LibraryPatternUpsertWithWhereUniqueWithoutPatternInput | LibraryPatternUpsertWithWhereUniqueWithoutPatternInput[]
    createMany?: LibraryPatternCreateManyPatternInputEnvelope
    set?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    disconnect?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    delete?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    connect?: LibraryPatternWhereUniqueInput | LibraryPatternWhereUniqueInput[]
    update?: LibraryPatternUpdateWithWhereUniqueWithoutPatternInput | LibraryPatternUpdateWithWhereUniqueWithoutPatternInput[]
    updateMany?: LibraryPatternUpdateManyWithWhereWithoutPatternInput | LibraryPatternUpdateManyWithWhereWithoutPatternInput[]
    deleteMany?: LibraryPatternScalarWhereInput | LibraryPatternScalarWhereInput[]
  }

  export type PatternSearchDataUncheckedUpdateOneWithoutPatternNestedInput = {
    create?: XOR<PatternSearchDataCreateWithoutPatternInput, PatternSearchDataUncheckedCreateWithoutPatternInput>
    connectOrCreate?: PatternSearchDataCreateOrConnectWithoutPatternInput
    upsert?: PatternSearchDataUpsertWithoutPatternInput
    disconnect?: PatternSearchDataWhereInput | boolean
    delete?: PatternSearchDataWhereInput | boolean
    connect?: PatternSearchDataWhereUniqueInput
    update?: XOR<XOR<PatternSearchDataUpdateToOneWithWhereWithoutPatternInput, PatternSearchDataUpdateWithoutPatternInput>, PatternSearchDataUncheckedUpdateWithoutPatternInput>
  }

  export type PatternCreateNestedOneWithoutTagsInput = {
    create?: XOR<PatternCreateWithoutTagsInput, PatternUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PatternCreateOrConnectWithoutTagsInput
    connect?: PatternWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutPatternsInput = {
    create?: XOR<TagCreateWithoutPatternsInput, TagUncheckedCreateWithoutPatternsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPatternsInput
    connect?: TagWhereUniqueInput
  }

  export type PatternUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<PatternCreateWithoutTagsInput, PatternUncheckedCreateWithoutTagsInput>
    connectOrCreate?: PatternCreateOrConnectWithoutTagsInput
    upsert?: PatternUpsertWithoutTagsInput
    connect?: PatternWhereUniqueInput
    update?: XOR<XOR<PatternUpdateToOneWithWhereWithoutTagsInput, PatternUpdateWithoutTagsInput>, PatternUncheckedUpdateWithoutTagsInput>
  }

  export type TagUpdateOneRequiredWithoutPatternsNestedInput = {
    create?: XOR<TagCreateWithoutPatternsInput, TagUncheckedCreateWithoutPatternsInput>
    connectOrCreate?: TagCreateOrConnectWithoutPatternsInput
    upsert?: TagUpsertWithoutPatternsInput
    connect?: TagWhereUniqueInput
    update?: XOR<XOR<TagUpdateToOneWithWhereWithoutPatternsInput, TagUpdateWithoutPatternsInput>, TagUncheckedUpdateWithoutPatternsInput>
  }

  export type UserCreateNestedOneWithoutLibraryInput = {
    create?: XOR<UserCreateWithoutLibraryInput, UserUncheckedCreateWithoutLibraryInput>
    connectOrCreate?: UserCreateOrConnectWithoutLibraryInput
    connect?: UserWhereUniqueInput
  }

  export type PatternCreateNestedOneWithoutLibraryInput = {
    create?: XOR<PatternCreateWithoutLibraryInput, PatternUncheckedCreateWithoutLibraryInput>
    connectOrCreate?: PatternCreateOrConnectWithoutLibraryInput
    connect?: PatternWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLibraryNestedInput = {
    create?: XOR<UserCreateWithoutLibraryInput, UserUncheckedCreateWithoutLibraryInput>
    connectOrCreate?: UserCreateOrConnectWithoutLibraryInput
    upsert?: UserUpsertWithoutLibraryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLibraryInput, UserUpdateWithoutLibraryInput>, UserUncheckedUpdateWithoutLibraryInput>
  }

  export type PatternUpdateOneRequiredWithoutLibraryNestedInput = {
    create?: XOR<PatternCreateWithoutLibraryInput, PatternUncheckedCreateWithoutLibraryInput>
    connectOrCreate?: PatternCreateOrConnectWithoutLibraryInput
    upsert?: PatternUpsertWithoutLibraryInput
    connect?: PatternWhereUniqueInput
    update?: XOR<XOR<PatternUpdateToOneWithWhereWithoutLibraryInput, PatternUpdateWithoutLibraryInput>, PatternUncheckedUpdateWithoutLibraryInput>
  }

  export type UserCreateNestedOneWithoutDraftsInput = {
    create?: XOR<UserCreateWithoutDraftsInput, UserUncheckedCreateWithoutDraftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDraftsInput
    connect?: UserWhereUniqueInput
  }

  export type DraftPatternCreateNestedManyWithoutDraftInput = {
    create?: XOR<DraftPatternCreateWithoutDraftInput, DraftPatternUncheckedCreateWithoutDraftInput> | DraftPatternCreateWithoutDraftInput[] | DraftPatternUncheckedCreateWithoutDraftInput[]
    connectOrCreate?: DraftPatternCreateOrConnectWithoutDraftInput | DraftPatternCreateOrConnectWithoutDraftInput[]
    createMany?: DraftPatternCreateManyDraftInputEnvelope
    connect?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
  }

  export type DraftPatternUncheckedCreateNestedManyWithoutDraftInput = {
    create?: XOR<DraftPatternCreateWithoutDraftInput, DraftPatternUncheckedCreateWithoutDraftInput> | DraftPatternCreateWithoutDraftInput[] | DraftPatternUncheckedCreateWithoutDraftInput[]
    connectOrCreate?: DraftPatternCreateOrConnectWithoutDraftInput | DraftPatternCreateOrConnectWithoutDraftInput[]
    createMany?: DraftPatternCreateManyDraftInputEnvelope
    connect?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutDraftsNestedInput = {
    create?: XOR<UserCreateWithoutDraftsInput, UserUncheckedCreateWithoutDraftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDraftsInput
    upsert?: UserUpsertWithoutDraftsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDraftsInput, UserUpdateWithoutDraftsInput>, UserUncheckedUpdateWithoutDraftsInput>
  }

  export type DraftPatternUpdateManyWithoutDraftNestedInput = {
    create?: XOR<DraftPatternCreateWithoutDraftInput, DraftPatternUncheckedCreateWithoutDraftInput> | DraftPatternCreateWithoutDraftInput[] | DraftPatternUncheckedCreateWithoutDraftInput[]
    connectOrCreate?: DraftPatternCreateOrConnectWithoutDraftInput | DraftPatternCreateOrConnectWithoutDraftInput[]
    upsert?: DraftPatternUpsertWithWhereUniqueWithoutDraftInput | DraftPatternUpsertWithWhereUniqueWithoutDraftInput[]
    createMany?: DraftPatternCreateManyDraftInputEnvelope
    set?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    disconnect?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    delete?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    connect?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    update?: DraftPatternUpdateWithWhereUniqueWithoutDraftInput | DraftPatternUpdateWithWhereUniqueWithoutDraftInput[]
    updateMany?: DraftPatternUpdateManyWithWhereWithoutDraftInput | DraftPatternUpdateManyWithWhereWithoutDraftInput[]
    deleteMany?: DraftPatternScalarWhereInput | DraftPatternScalarWhereInput[]
  }

  export type DraftPatternUncheckedUpdateManyWithoutDraftNestedInput = {
    create?: XOR<DraftPatternCreateWithoutDraftInput, DraftPatternUncheckedCreateWithoutDraftInput> | DraftPatternCreateWithoutDraftInput[] | DraftPatternUncheckedCreateWithoutDraftInput[]
    connectOrCreate?: DraftPatternCreateOrConnectWithoutDraftInput | DraftPatternCreateOrConnectWithoutDraftInput[]
    upsert?: DraftPatternUpsertWithWhereUniqueWithoutDraftInput | DraftPatternUpsertWithWhereUniqueWithoutDraftInput[]
    createMany?: DraftPatternCreateManyDraftInputEnvelope
    set?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    disconnect?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    delete?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    connect?: DraftPatternWhereUniqueInput | DraftPatternWhereUniqueInput[]
    update?: DraftPatternUpdateWithWhereUniqueWithoutDraftInput | DraftPatternUpdateWithWhereUniqueWithoutDraftInput[]
    updateMany?: DraftPatternUpdateManyWithWhereWithoutDraftInput | DraftPatternUpdateManyWithWhereWithoutDraftInput[]
    deleteMany?: DraftPatternScalarWhereInput | DraftPatternScalarWhereInput[]
  }

  export type DraftCreateNestedOneWithoutPatternsInput = {
    create?: XOR<DraftCreateWithoutPatternsInput, DraftUncheckedCreateWithoutPatternsInput>
    connectOrCreate?: DraftCreateOrConnectWithoutPatternsInput
    connect?: DraftWhereUniqueInput
  }

  export type PatternCreateNestedOneWithoutDraftsPatternsInput = {
    create?: XOR<PatternCreateWithoutDraftsPatternsInput, PatternUncheckedCreateWithoutDraftsPatternsInput>
    connectOrCreate?: PatternCreateOrConnectWithoutDraftsPatternsInput
    connect?: PatternWhereUniqueInput
  }

  export type DraftUpdateOneRequiredWithoutPatternsNestedInput = {
    create?: XOR<DraftCreateWithoutPatternsInput, DraftUncheckedCreateWithoutPatternsInput>
    connectOrCreate?: DraftCreateOrConnectWithoutPatternsInput
    upsert?: DraftUpsertWithoutPatternsInput
    connect?: DraftWhereUniqueInput
    update?: XOR<XOR<DraftUpdateToOneWithWhereWithoutPatternsInput, DraftUpdateWithoutPatternsInput>, DraftUncheckedUpdateWithoutPatternsInput>
  }

  export type PatternUpdateOneRequiredWithoutDraftsPatternsNestedInput = {
    create?: XOR<PatternCreateWithoutDraftsPatternsInput, PatternUncheckedCreateWithoutDraftsPatternsInput>
    connectOrCreate?: PatternCreateOrConnectWithoutDraftsPatternsInput
    upsert?: PatternUpsertWithoutDraftsPatternsInput
    connect?: PatternWhereUniqueInput
    update?: XOR<XOR<PatternUpdateToOneWithWhereWithoutDraftsPatternsInput, PatternUpdateWithoutDraftsPatternsInput>, PatternUncheckedUpdateWithoutDraftsPatternsInput>
  }

  export type PatternSearchDataCreategrooveVectorInput = {
    set: number[]
  }

  export type PatternSearchDataCreatehyperplaneHashInput = {
    set: number[]
  }

  export type PatternCreateNestedOneWithoutSearchDataInput = {
    create?: XOR<PatternCreateWithoutSearchDataInput, PatternUncheckedCreateWithoutSearchDataInput>
    connectOrCreate?: PatternCreateOrConnectWithoutSearchDataInput
    connect?: PatternWhereUniqueInput
  }

  export type PatternSearchDataUpdategrooveVectorInput = {
    set?: number[]
    push?: number | number[]
  }

  export type PatternSearchDataUpdatehyperplaneHashInput = {
    set?: number[]
    push?: number | number[]
  }

  export type PatternUpdateOneRequiredWithoutSearchDataNestedInput = {
    create?: XOR<PatternCreateWithoutSearchDataInput, PatternUncheckedCreateWithoutSearchDataInput>
    connectOrCreate?: PatternCreateOrConnectWithoutSearchDataInput
    upsert?: PatternUpsertWithoutSearchDataInput
    connect?: PatternWhereUniqueInput
    update?: XOR<XOR<PatternUpdateToOneWithWhereWithoutSearchDataInput, PatternUpdateWithoutSearchDataInput>, PatternUncheckedUpdateWithoutSearchDataInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumSignatureMeasureFilter<$PrismaModel = never> = {
    equals?: $Enums.SignatureMeasure | EnumSignatureMeasureFieldRefInput<$PrismaModel>
    in?: $Enums.SignatureMeasure[] | ListEnumSignatureMeasureFieldRefInput<$PrismaModel>
    notIn?: $Enums.SignatureMeasure[] | ListEnumSignatureMeasureFieldRefInput<$PrismaModel>
    not?: NestedEnumSignatureMeasureFilter<$PrismaModel> | $Enums.SignatureMeasure
  }

  export type NestedEnumSignatureMeasureWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SignatureMeasure | EnumSignatureMeasureFieldRefInput<$PrismaModel>
    in?: $Enums.SignatureMeasure[] | ListEnumSignatureMeasureFieldRefInput<$PrismaModel>
    notIn?: $Enums.SignatureMeasure[] | ListEnumSignatureMeasureFieldRefInput<$PrismaModel>
    not?: NestedEnumSignatureMeasureWithAggregatesFilter<$PrismaModel> | $Enums.SignatureMeasure
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSignatureMeasureFilter<$PrismaModel>
    _max?: NestedEnumSignatureMeasureFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type LibraryPatternCreateWithoutUserInput = {
    isPublic?: boolean
    title: string
    pattern: PatternCreateNestedOneWithoutLibraryInput
  }

  export type LibraryPatternUncheckedCreateWithoutUserInput = {
    id?: number
    patternId: number
    isPublic?: boolean
    title: string
  }

  export type LibraryPatternCreateOrConnectWithoutUserInput = {
    where: LibraryPatternWhereUniqueInput
    create: XOR<LibraryPatternCreateWithoutUserInput, LibraryPatternUncheckedCreateWithoutUserInput>
  }

  export type LibraryPatternCreateManyUserInputEnvelope = {
    data: LibraryPatternCreateManyUserInput | LibraryPatternCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DraftCreateWithoutUserInput = {
    title: string
    description?: string | null
    structure: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patterns?: DraftPatternCreateNestedManyWithoutDraftInput
  }

  export type DraftUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description?: string | null
    structure: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    patterns?: DraftPatternUncheckedCreateNestedManyWithoutDraftInput
  }

  export type DraftCreateOrConnectWithoutUserInput = {
    where: DraftWhereUniqueInput
    create: XOR<DraftCreateWithoutUserInput, DraftUncheckedCreateWithoutUserInput>
  }

  export type DraftCreateManyUserInputEnvelope = {
    data: DraftCreateManyUserInput | DraftCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LibraryPatternUpsertWithWhereUniqueWithoutUserInput = {
    where: LibraryPatternWhereUniqueInput
    update: XOR<LibraryPatternUpdateWithoutUserInput, LibraryPatternUncheckedUpdateWithoutUserInput>
    create: XOR<LibraryPatternCreateWithoutUserInput, LibraryPatternUncheckedCreateWithoutUserInput>
  }

  export type LibraryPatternUpdateWithWhereUniqueWithoutUserInput = {
    where: LibraryPatternWhereUniqueInput
    data: XOR<LibraryPatternUpdateWithoutUserInput, LibraryPatternUncheckedUpdateWithoutUserInput>
  }

  export type LibraryPatternUpdateManyWithWhereWithoutUserInput = {
    where: LibraryPatternScalarWhereInput
    data: XOR<LibraryPatternUpdateManyMutationInput, LibraryPatternUncheckedUpdateManyWithoutUserInput>
  }

  export type LibraryPatternScalarWhereInput = {
    AND?: LibraryPatternScalarWhereInput | LibraryPatternScalarWhereInput[]
    OR?: LibraryPatternScalarWhereInput[]
    NOT?: LibraryPatternScalarWhereInput | LibraryPatternScalarWhereInput[]
    id?: IntFilter<"LibraryPattern"> | number
    userId?: IntFilter<"LibraryPattern"> | number
    patternId?: IntFilter<"LibraryPattern"> | number
    isPublic?: BoolFilter<"LibraryPattern"> | boolean
    title?: StringFilter<"LibraryPattern"> | string
  }

  export type DraftUpsertWithWhereUniqueWithoutUserInput = {
    where: DraftWhereUniqueInput
    update: XOR<DraftUpdateWithoutUserInput, DraftUncheckedUpdateWithoutUserInput>
    create: XOR<DraftCreateWithoutUserInput, DraftUncheckedCreateWithoutUserInput>
  }

  export type DraftUpdateWithWhereUniqueWithoutUserInput = {
    where: DraftWhereUniqueInput
    data: XOR<DraftUpdateWithoutUserInput, DraftUncheckedUpdateWithoutUserInput>
  }

  export type DraftUpdateManyWithWhereWithoutUserInput = {
    where: DraftScalarWhereInput
    data: XOR<DraftUpdateManyMutationInput, DraftUncheckedUpdateManyWithoutUserInput>
  }

  export type DraftScalarWhereInput = {
    AND?: DraftScalarWhereInput | DraftScalarWhereInput[]
    OR?: DraftScalarWhereInput[]
    NOT?: DraftScalarWhereInput | DraftScalarWhereInput[]
    id?: IntFilter<"Draft"> | number
    userId?: IntFilter<"Draft"> | number
    title?: StringFilter<"Draft"> | string
    description?: StringNullableFilter<"Draft"> | string | null
    structure?: JsonFilter<"Draft">
    isPublic?: BoolFilter<"Draft"> | boolean
    createdAt?: DateTimeFilter<"Draft"> | Date | string
    updatedAt?: DateTimeFilter<"Draft"> | Date | string
  }

  export type PatternTagCreateWithoutTagInput = {
    pattern: PatternCreateNestedOneWithoutTagsInput
  }

  export type PatternTagUncheckedCreateWithoutTagInput = {
    patternId: number
  }

  export type PatternTagCreateOrConnectWithoutTagInput = {
    where: PatternTagWhereUniqueInput
    create: XOR<PatternTagCreateWithoutTagInput, PatternTagUncheckedCreateWithoutTagInput>
  }

  export type PatternTagCreateManyTagInputEnvelope = {
    data: PatternTagCreateManyTagInput | PatternTagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type PatternTagUpsertWithWhereUniqueWithoutTagInput = {
    where: PatternTagWhereUniqueInput
    update: XOR<PatternTagUpdateWithoutTagInput, PatternTagUncheckedUpdateWithoutTagInput>
    create: XOR<PatternTagCreateWithoutTagInput, PatternTagUncheckedCreateWithoutTagInput>
  }

  export type PatternTagUpdateWithWhereUniqueWithoutTagInput = {
    where: PatternTagWhereUniqueInput
    data: XOR<PatternTagUpdateWithoutTagInput, PatternTagUncheckedUpdateWithoutTagInput>
  }

  export type PatternTagUpdateManyWithWhereWithoutTagInput = {
    where: PatternTagScalarWhereInput
    data: XOR<PatternTagUpdateManyMutationInput, PatternTagUncheckedUpdateManyWithoutTagInput>
  }

  export type PatternTagScalarWhereInput = {
    AND?: PatternTagScalarWhereInput | PatternTagScalarWhereInput[]
    OR?: PatternTagScalarWhereInput[]
    NOT?: PatternTagScalarWhereInput | PatternTagScalarWhereInput[]
    patternId?: IntFilter<"PatternTag"> | number
    tagId?: IntFilter<"PatternTag"> | number
  }

  export type PatternTagCreateWithoutPatternInput = {
    tag: TagCreateNestedOneWithoutPatternsInput
  }

  export type PatternTagUncheckedCreateWithoutPatternInput = {
    tagId: number
  }

  export type PatternTagCreateOrConnectWithoutPatternInput = {
    where: PatternTagWhereUniqueInput
    create: XOR<PatternTagCreateWithoutPatternInput, PatternTagUncheckedCreateWithoutPatternInput>
  }

  export type PatternTagCreateManyPatternInputEnvelope = {
    data: PatternTagCreateManyPatternInput | PatternTagCreateManyPatternInput[]
    skipDuplicates?: boolean
  }

  export type DraftPatternCreateWithoutPatternInput = {
    code: string
    color: string
    draft: DraftCreateNestedOneWithoutPatternsInput
  }

  export type DraftPatternUncheckedCreateWithoutPatternInput = {
    id?: number
    draftId: number
    code: string
    color: string
  }

  export type DraftPatternCreateOrConnectWithoutPatternInput = {
    where: DraftPatternWhereUniqueInput
    create: XOR<DraftPatternCreateWithoutPatternInput, DraftPatternUncheckedCreateWithoutPatternInput>
  }

  export type DraftPatternCreateManyPatternInputEnvelope = {
    data: DraftPatternCreateManyPatternInput | DraftPatternCreateManyPatternInput[]
    skipDuplicates?: boolean
  }

  export type LibraryPatternCreateWithoutPatternInput = {
    isPublic?: boolean
    title: string
    user: UserCreateNestedOneWithoutLibraryInput
  }

  export type LibraryPatternUncheckedCreateWithoutPatternInput = {
    id?: number
    userId: number
    isPublic?: boolean
    title: string
  }

  export type LibraryPatternCreateOrConnectWithoutPatternInput = {
    where: LibraryPatternWhereUniqueInput
    create: XOR<LibraryPatternCreateWithoutPatternInput, LibraryPatternUncheckedCreateWithoutPatternInput>
  }

  export type LibraryPatternCreateManyPatternInputEnvelope = {
    data: LibraryPatternCreateManyPatternInput | LibraryPatternCreateManyPatternInput[]
    skipDuplicates?: boolean
  }

  export type PatternSearchDataCreateWithoutPatternInput = {
    grooveVector?: PatternSearchDataCreategrooveVectorInput | number[]
    hyperplaneHash?: PatternSearchDataCreatehyperplaneHashInput | number[]
  }

  export type PatternSearchDataUncheckedCreateWithoutPatternInput = {
    grooveVector?: PatternSearchDataCreategrooveVectorInput | number[]
    hyperplaneHash?: PatternSearchDataCreatehyperplaneHashInput | number[]
  }

  export type PatternSearchDataCreateOrConnectWithoutPatternInput = {
    where: PatternSearchDataWhereUniqueInput
    create: XOR<PatternSearchDataCreateWithoutPatternInput, PatternSearchDataUncheckedCreateWithoutPatternInput>
  }

  export type PatternTagUpsertWithWhereUniqueWithoutPatternInput = {
    where: PatternTagWhereUniqueInput
    update: XOR<PatternTagUpdateWithoutPatternInput, PatternTagUncheckedUpdateWithoutPatternInput>
    create: XOR<PatternTagCreateWithoutPatternInput, PatternTagUncheckedCreateWithoutPatternInput>
  }

  export type PatternTagUpdateWithWhereUniqueWithoutPatternInput = {
    where: PatternTagWhereUniqueInput
    data: XOR<PatternTagUpdateWithoutPatternInput, PatternTagUncheckedUpdateWithoutPatternInput>
  }

  export type PatternTagUpdateManyWithWhereWithoutPatternInput = {
    where: PatternTagScalarWhereInput
    data: XOR<PatternTagUpdateManyMutationInput, PatternTagUncheckedUpdateManyWithoutPatternInput>
  }

  export type DraftPatternUpsertWithWhereUniqueWithoutPatternInput = {
    where: DraftPatternWhereUniqueInput
    update: XOR<DraftPatternUpdateWithoutPatternInput, DraftPatternUncheckedUpdateWithoutPatternInput>
    create: XOR<DraftPatternCreateWithoutPatternInput, DraftPatternUncheckedCreateWithoutPatternInput>
  }

  export type DraftPatternUpdateWithWhereUniqueWithoutPatternInput = {
    where: DraftPatternWhereUniqueInput
    data: XOR<DraftPatternUpdateWithoutPatternInput, DraftPatternUncheckedUpdateWithoutPatternInput>
  }

  export type DraftPatternUpdateManyWithWhereWithoutPatternInput = {
    where: DraftPatternScalarWhereInput
    data: XOR<DraftPatternUpdateManyMutationInput, DraftPatternUncheckedUpdateManyWithoutPatternInput>
  }

  export type DraftPatternScalarWhereInput = {
    AND?: DraftPatternScalarWhereInput | DraftPatternScalarWhereInput[]
    OR?: DraftPatternScalarWhereInput[]
    NOT?: DraftPatternScalarWhereInput | DraftPatternScalarWhereInput[]
    id?: IntFilter<"DraftPattern"> | number
    draftId?: IntFilter<"DraftPattern"> | number
    patternId?: IntFilter<"DraftPattern"> | number
    code?: StringFilter<"DraftPattern"> | string
    color?: StringFilter<"DraftPattern"> | string
  }

  export type LibraryPatternUpsertWithWhereUniqueWithoutPatternInput = {
    where: LibraryPatternWhereUniqueInput
    update: XOR<LibraryPatternUpdateWithoutPatternInput, LibraryPatternUncheckedUpdateWithoutPatternInput>
    create: XOR<LibraryPatternCreateWithoutPatternInput, LibraryPatternUncheckedCreateWithoutPatternInput>
  }

  export type LibraryPatternUpdateWithWhereUniqueWithoutPatternInput = {
    where: LibraryPatternWhereUniqueInput
    data: XOR<LibraryPatternUpdateWithoutPatternInput, LibraryPatternUncheckedUpdateWithoutPatternInput>
  }

  export type LibraryPatternUpdateManyWithWhereWithoutPatternInput = {
    where: LibraryPatternScalarWhereInput
    data: XOR<LibraryPatternUpdateManyMutationInput, LibraryPatternUncheckedUpdateManyWithoutPatternInput>
  }

  export type PatternSearchDataUpsertWithoutPatternInput = {
    update: XOR<PatternSearchDataUpdateWithoutPatternInput, PatternSearchDataUncheckedUpdateWithoutPatternInput>
    create: XOR<PatternSearchDataCreateWithoutPatternInput, PatternSearchDataUncheckedCreateWithoutPatternInput>
    where?: PatternSearchDataWhereInput
  }

  export type PatternSearchDataUpdateToOneWithWhereWithoutPatternInput = {
    where?: PatternSearchDataWhereInput
    data: XOR<PatternSearchDataUpdateWithoutPatternInput, PatternSearchDataUncheckedUpdateWithoutPatternInput>
  }

  export type PatternSearchDataUpdateWithoutPatternInput = {
    grooveVector?: PatternSearchDataUpdategrooveVectorInput | number[]
    hyperplaneHash?: PatternSearchDataUpdatehyperplaneHashInput | number[]
  }

  export type PatternSearchDataUncheckedUpdateWithoutPatternInput = {
    grooveVector?: PatternSearchDataUpdategrooveVectorInput | number[]
    hyperplaneHash?: PatternSearchDataUpdatehyperplaneHashInput | number[]
  }

  export type PatternCreateWithoutTagsInput = {
    signatureBits?: number
    signatureMeasure?: $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    draftsPatterns?: DraftPatternCreateNestedManyWithoutPatternInput
    library?: LibraryPatternCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataCreateNestedOneWithoutPatternInput
  }

  export type PatternUncheckedCreateWithoutTagsInput = {
    id?: number
    signatureBits?: number
    signatureMeasure?: $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    draftsPatterns?: DraftPatternUncheckedCreateNestedManyWithoutPatternInput
    library?: LibraryPatternUncheckedCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataUncheckedCreateNestedOneWithoutPatternInput
  }

  export type PatternCreateOrConnectWithoutTagsInput = {
    where: PatternWhereUniqueInput
    create: XOR<PatternCreateWithoutTagsInput, PatternUncheckedCreateWithoutTagsInput>
  }

  export type TagCreateWithoutPatternsInput = {
    name: string
    createdAt?: Date | string
  }

  export type TagUncheckedCreateWithoutPatternsInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type TagCreateOrConnectWithoutPatternsInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutPatternsInput, TagUncheckedCreateWithoutPatternsInput>
  }

  export type PatternUpsertWithoutTagsInput = {
    update: XOR<PatternUpdateWithoutTagsInput, PatternUncheckedUpdateWithoutTagsInput>
    create: XOR<PatternCreateWithoutTagsInput, PatternUncheckedCreateWithoutTagsInput>
    where?: PatternWhereInput
  }

  export type PatternUpdateToOneWithWhereWithoutTagsInput = {
    where?: PatternWhereInput
    data: XOR<PatternUpdateWithoutTagsInput, PatternUncheckedUpdateWithoutTagsInput>
  }

  export type PatternUpdateWithoutTagsInput = {
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftsPatterns?: DraftPatternUpdateManyWithoutPatternNestedInput
    library?: LibraryPatternUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUpdateOneWithoutPatternNestedInput
  }

  export type PatternUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    draftsPatterns?: DraftPatternUncheckedUpdateManyWithoutPatternNestedInput
    library?: LibraryPatternUncheckedUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUncheckedUpdateOneWithoutPatternNestedInput
  }

  export type TagUpsertWithoutPatternsInput = {
    update: XOR<TagUpdateWithoutPatternsInput, TagUncheckedUpdateWithoutPatternsInput>
    create: XOR<TagCreateWithoutPatternsInput, TagUncheckedCreateWithoutPatternsInput>
    where?: TagWhereInput
  }

  export type TagUpdateToOneWithWhereWithoutPatternsInput = {
    where?: TagWhereInput
    data: XOR<TagUpdateWithoutPatternsInput, TagUncheckedUpdateWithoutPatternsInput>
  }

  export type TagUpdateWithoutPatternsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TagUncheckedUpdateWithoutPatternsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutLibraryInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    isActive?: boolean
    drafts?: DraftCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLibraryInput = {
    id?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    isActive?: boolean
    drafts?: DraftUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLibraryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLibraryInput, UserUncheckedCreateWithoutLibraryInput>
  }

  export type PatternCreateWithoutLibraryInput = {
    signatureBits?: number
    signatureMeasure?: $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PatternTagCreateNestedManyWithoutPatternInput
    draftsPatterns?: DraftPatternCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataCreateNestedOneWithoutPatternInput
  }

  export type PatternUncheckedCreateWithoutLibraryInput = {
    id?: number
    signatureBits?: number
    signatureMeasure?: $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PatternTagUncheckedCreateNestedManyWithoutPatternInput
    draftsPatterns?: DraftPatternUncheckedCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataUncheckedCreateNestedOneWithoutPatternInput
  }

  export type PatternCreateOrConnectWithoutLibraryInput = {
    where: PatternWhereUniqueInput
    create: XOR<PatternCreateWithoutLibraryInput, PatternUncheckedCreateWithoutLibraryInput>
  }

  export type UserUpsertWithoutLibraryInput = {
    update: XOR<UserUpdateWithoutLibraryInput, UserUncheckedUpdateWithoutLibraryInput>
    create: XOR<UserCreateWithoutLibraryInput, UserUncheckedCreateWithoutLibraryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLibraryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLibraryInput, UserUncheckedUpdateWithoutLibraryInput>
  }

  export type UserUpdateWithoutLibraryInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    drafts?: DraftUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    drafts?: DraftUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PatternUpsertWithoutLibraryInput = {
    update: XOR<PatternUpdateWithoutLibraryInput, PatternUncheckedUpdateWithoutLibraryInput>
    create: XOR<PatternCreateWithoutLibraryInput, PatternUncheckedCreateWithoutLibraryInput>
    where?: PatternWhereInput
  }

  export type PatternUpdateToOneWithWhereWithoutLibraryInput = {
    where?: PatternWhereInput
    data: XOR<PatternUpdateWithoutLibraryInput, PatternUncheckedUpdateWithoutLibraryInput>
  }

  export type PatternUpdateWithoutLibraryInput = {
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PatternTagUpdateManyWithoutPatternNestedInput
    draftsPatterns?: DraftPatternUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUpdateOneWithoutPatternNestedInput
  }

  export type PatternUncheckedUpdateWithoutLibraryInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PatternTagUncheckedUpdateManyWithoutPatternNestedInput
    draftsPatterns?: DraftPatternUncheckedUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUncheckedUpdateOneWithoutPatternNestedInput
  }

  export type UserCreateWithoutDraftsInput = {
    email: string
    password: string
    name: string
    createdAt?: Date | string
    isActive?: boolean
    library?: LibraryPatternCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDraftsInput = {
    id?: number
    email: string
    password: string
    name: string
    createdAt?: Date | string
    isActive?: boolean
    library?: LibraryPatternUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDraftsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDraftsInput, UserUncheckedCreateWithoutDraftsInput>
  }

  export type DraftPatternCreateWithoutDraftInput = {
    code: string
    color: string
    pattern: PatternCreateNestedOneWithoutDraftsPatternsInput
  }

  export type DraftPatternUncheckedCreateWithoutDraftInput = {
    id?: number
    patternId: number
    code: string
    color: string
  }

  export type DraftPatternCreateOrConnectWithoutDraftInput = {
    where: DraftPatternWhereUniqueInput
    create: XOR<DraftPatternCreateWithoutDraftInput, DraftPatternUncheckedCreateWithoutDraftInput>
  }

  export type DraftPatternCreateManyDraftInputEnvelope = {
    data: DraftPatternCreateManyDraftInput | DraftPatternCreateManyDraftInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDraftsInput = {
    update: XOR<UserUpdateWithoutDraftsInput, UserUncheckedUpdateWithoutDraftsInput>
    create: XOR<UserCreateWithoutDraftsInput, UserUncheckedCreateWithoutDraftsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDraftsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDraftsInput, UserUncheckedUpdateWithoutDraftsInput>
  }

  export type UserUpdateWithoutDraftsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    library?: LibraryPatternUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDraftsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    library?: LibraryPatternUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DraftPatternUpsertWithWhereUniqueWithoutDraftInput = {
    where: DraftPatternWhereUniqueInput
    update: XOR<DraftPatternUpdateWithoutDraftInput, DraftPatternUncheckedUpdateWithoutDraftInput>
    create: XOR<DraftPatternCreateWithoutDraftInput, DraftPatternUncheckedCreateWithoutDraftInput>
  }

  export type DraftPatternUpdateWithWhereUniqueWithoutDraftInput = {
    where: DraftPatternWhereUniqueInput
    data: XOR<DraftPatternUpdateWithoutDraftInput, DraftPatternUncheckedUpdateWithoutDraftInput>
  }

  export type DraftPatternUpdateManyWithWhereWithoutDraftInput = {
    where: DraftPatternScalarWhereInput
    data: XOR<DraftPatternUpdateManyMutationInput, DraftPatternUncheckedUpdateManyWithoutDraftInput>
  }

  export type DraftCreateWithoutPatternsInput = {
    title: string
    description?: string | null
    structure: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDraftsInput
  }

  export type DraftUncheckedCreateWithoutPatternsInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    structure: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DraftCreateOrConnectWithoutPatternsInput = {
    where: DraftWhereUniqueInput
    create: XOR<DraftCreateWithoutPatternsInput, DraftUncheckedCreateWithoutPatternsInput>
  }

  export type PatternCreateWithoutDraftsPatternsInput = {
    signatureBits?: number
    signatureMeasure?: $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PatternTagCreateNestedManyWithoutPatternInput
    library?: LibraryPatternCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataCreateNestedOneWithoutPatternInput
  }

  export type PatternUncheckedCreateWithoutDraftsPatternsInput = {
    id?: number
    signatureBits?: number
    signatureMeasure?: $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PatternTagUncheckedCreateNestedManyWithoutPatternInput
    library?: LibraryPatternUncheckedCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataUncheckedCreateNestedOneWithoutPatternInput
  }

  export type PatternCreateOrConnectWithoutDraftsPatternsInput = {
    where: PatternWhereUniqueInput
    create: XOR<PatternCreateWithoutDraftsPatternsInput, PatternUncheckedCreateWithoutDraftsPatternsInput>
  }

  export type DraftUpsertWithoutPatternsInput = {
    update: XOR<DraftUpdateWithoutPatternsInput, DraftUncheckedUpdateWithoutPatternsInput>
    create: XOR<DraftCreateWithoutPatternsInput, DraftUncheckedCreateWithoutPatternsInput>
    where?: DraftWhereInput
  }

  export type DraftUpdateToOneWithWhereWithoutPatternsInput = {
    where?: DraftWhereInput
    data: XOR<DraftUpdateWithoutPatternsInput, DraftUncheckedUpdateWithoutPatternsInput>
  }

  export type DraftUpdateWithoutPatternsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDraftsNestedInput
  }

  export type DraftUncheckedUpdateWithoutPatternsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatternUpsertWithoutDraftsPatternsInput = {
    update: XOR<PatternUpdateWithoutDraftsPatternsInput, PatternUncheckedUpdateWithoutDraftsPatternsInput>
    create: XOR<PatternCreateWithoutDraftsPatternsInput, PatternUncheckedCreateWithoutDraftsPatternsInput>
    where?: PatternWhereInput
  }

  export type PatternUpdateToOneWithWhereWithoutDraftsPatternsInput = {
    where?: PatternWhereInput
    data: XOR<PatternUpdateWithoutDraftsPatternsInput, PatternUncheckedUpdateWithoutDraftsPatternsInput>
  }

  export type PatternUpdateWithoutDraftsPatternsInput = {
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PatternTagUpdateManyWithoutPatternNestedInput
    library?: LibraryPatternUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUpdateOneWithoutPatternNestedInput
  }

  export type PatternUncheckedUpdateWithoutDraftsPatternsInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PatternTagUncheckedUpdateManyWithoutPatternNestedInput
    library?: LibraryPatternUncheckedUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUncheckedUpdateOneWithoutPatternNestedInput
  }

  export type PatternCreateWithoutSearchDataInput = {
    signatureBits?: number
    signatureMeasure?: $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PatternTagCreateNestedManyWithoutPatternInput
    draftsPatterns?: DraftPatternCreateNestedManyWithoutPatternInput
    library?: LibraryPatternCreateNestedManyWithoutPatternInput
  }

  export type PatternUncheckedCreateWithoutSearchDataInput = {
    id?: number
    signatureBits?: number
    signatureMeasure?: $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PatternTagUncheckedCreateNestedManyWithoutPatternInput
    draftsPatterns?: DraftPatternUncheckedCreateNestedManyWithoutPatternInput
    library?: LibraryPatternUncheckedCreateNestedManyWithoutPatternInput
  }

  export type PatternCreateOrConnectWithoutSearchDataInput = {
    where: PatternWhereUniqueInput
    create: XOR<PatternCreateWithoutSearchDataInput, PatternUncheckedCreateWithoutSearchDataInput>
  }

  export type PatternUpsertWithoutSearchDataInput = {
    update: XOR<PatternUpdateWithoutSearchDataInput, PatternUncheckedUpdateWithoutSearchDataInput>
    create: XOR<PatternCreateWithoutSearchDataInput, PatternUncheckedCreateWithoutSearchDataInput>
    where?: PatternWhereInput
  }

  export type PatternUpdateToOneWithWhereWithoutSearchDataInput = {
    where?: PatternWhereInput
    data: XOR<PatternUpdateWithoutSearchDataInput, PatternUncheckedUpdateWithoutSearchDataInput>
  }

  export type PatternUpdateWithoutSearchDataInput = {
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PatternTagUpdateManyWithoutPatternNestedInput
    draftsPatterns?: DraftPatternUpdateManyWithoutPatternNestedInput
    library?: LibraryPatternUpdateManyWithoutPatternNestedInput
  }

  export type PatternUncheckedUpdateWithoutSearchDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    beats?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PatternTagUncheckedUpdateManyWithoutPatternNestedInput
    draftsPatterns?: DraftPatternUncheckedUpdateManyWithoutPatternNestedInput
    library?: LibraryPatternUncheckedUpdateManyWithoutPatternNestedInput
  }

  export type LibraryPatternCreateManyUserInput = {
    id?: number
    patternId: number
    isPublic?: boolean
    title: string
  }

  export type DraftCreateManyUserInput = {
    id?: number
    title: string
    description?: string | null
    structure: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LibraryPatternUpdateWithoutUserInput = {
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    pattern?: PatternUpdateOneRequiredWithoutLibraryNestedInput
  }

  export type LibraryPatternUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    patternId?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryPatternUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    patternId?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DraftUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patterns?: DraftPatternUpdateManyWithoutDraftNestedInput
  }

  export type DraftUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patterns?: DraftPatternUncheckedUpdateManyWithoutDraftNestedInput
  }

  export type DraftUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatternTagCreateManyTagInput = {
    patternId: number
  }

  export type PatternTagUpdateWithoutTagInput = {
    pattern?: PatternUpdateOneRequiredWithoutTagsNestedInput
  }

  export type PatternTagUncheckedUpdateWithoutTagInput = {
    patternId?: IntFieldUpdateOperationsInput | number
  }

  export type PatternTagUncheckedUpdateManyWithoutTagInput = {
    patternId?: IntFieldUpdateOperationsInput | number
  }

  export type PatternTagCreateManyPatternInput = {
    tagId: number
  }

  export type DraftPatternCreateManyPatternInput = {
    id?: number
    draftId: number
    code: string
    color: string
  }

  export type LibraryPatternCreateManyPatternInput = {
    id?: number
    userId: number
    isPublic?: boolean
    title: string
  }

  export type PatternTagUpdateWithoutPatternInput = {
    tag?: TagUpdateOneRequiredWithoutPatternsNestedInput
  }

  export type PatternTagUncheckedUpdateWithoutPatternInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type PatternTagUncheckedUpdateManyWithoutPatternInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type DraftPatternUpdateWithoutPatternInput = {
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    draft?: DraftUpdateOneRequiredWithoutPatternsNestedInput
  }

  export type DraftPatternUncheckedUpdateWithoutPatternInput = {
    id?: IntFieldUpdateOperationsInput | number
    draftId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type DraftPatternUncheckedUpdateManyWithoutPatternInput = {
    id?: IntFieldUpdateOperationsInput | number
    draftId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryPatternUpdateWithoutPatternInput = {
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutLibraryNestedInput
  }

  export type LibraryPatternUncheckedUpdateWithoutPatternInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
  }

  export type LibraryPatternUncheckedUpdateManyWithoutPatternInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
  }

  export type DraftPatternCreateManyDraftInput = {
    id?: number
    patternId: number
    code: string
    color: string
  }

  export type DraftPatternUpdateWithoutDraftInput = {
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    pattern?: PatternUpdateOneRequiredWithoutDraftsPatternsNestedInput
  }

  export type DraftPatternUncheckedUpdateWithoutDraftInput = {
    id?: IntFieldUpdateOperationsInput | number
    patternId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type DraftPatternUncheckedUpdateManyWithoutDraftInput = {
    id?: IntFieldUpdateOperationsInput | number
    patternId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}