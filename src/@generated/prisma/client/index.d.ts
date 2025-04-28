
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
 * Model Draft
 * 
 */
export type Draft = $Result.DefaultSelection<Prisma.$DraftPayload>
/**
 * Model PatternSample
 * 
 */
export type PatternSample = $Result.DefaultSelection<Prisma.$PatternSamplePayload>
/**
 * Model PatternSearchData
 * 
 */
export type PatternSearchData = $Result.DefaultSelection<Prisma.$PatternSearchDataPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


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

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

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
   * `prisma.draft`: Exposes CRUD operations for the **Draft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drafts
    * const drafts = await prisma.draft.findMany()
    * ```
    */
  get draft(): Prisma.DraftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patternSample`: Exposes CRUD operations for the **PatternSample** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PatternSamples
    * const patternSamples = await prisma.patternSample.findMany()
    * ```
    */
  get patternSample(): Prisma.PatternSampleDelegate<ExtArgs, ClientOptions>;

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Draft: 'Draft',
    PatternSample: 'PatternSample',
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
      modelProps: "user" | "tag" | "pattern" | "patternTag" | "draft" | "patternSample" | "patternSearchData"
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
      PatternSample: {
        payload: Prisma.$PatternSamplePayload<ExtArgs>
        fields: Prisma.PatternSampleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatternSampleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSamplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatternSampleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSamplePayload>
          }
          findFirst: {
            args: Prisma.PatternSampleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSamplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatternSampleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSamplePayload>
          }
          findMany: {
            args: Prisma.PatternSampleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSamplePayload>[]
          }
          create: {
            args: Prisma.PatternSampleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSamplePayload>
          }
          createMany: {
            args: Prisma.PatternSampleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatternSampleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSamplePayload>[]
          }
          delete: {
            args: Prisma.PatternSampleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSamplePayload>
          }
          update: {
            args: Prisma.PatternSampleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSamplePayload>
          }
          deleteMany: {
            args: Prisma.PatternSampleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatternSampleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatternSampleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSamplePayload>[]
          }
          upsert: {
            args: Prisma.PatternSampleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatternSamplePayload>
          }
          aggregate: {
            args: Prisma.PatternSampleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatternSample>
          }
          groupBy: {
            args: Prisma.PatternSampleGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatternSampleGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatternSampleCountArgs<ExtArgs>
            result: $Utils.Optional<PatternSampleCountAggregateOutputType> | number
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
    draft?: DraftOmit
    patternSample?: PatternSampleOmit
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
    patterns: number
    drafts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patterns?: boolean | UserCountOutputTypeCountPatternsArgs
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
  export type UserCountOutputTypeCountPatternsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatternWhereInput
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
    samples: number
  }

  export type PatternCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | PatternCountOutputTypeCountTagsArgs
    samples?: boolean | PatternCountOutputTypeCountSamplesArgs
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
  export type PatternCountOutputTypeCountSamplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatternSampleWhereInput
  }


  /**
   * Count Type DraftCountOutputType
   */

  export type DraftCountOutputType = {
    samples: number
  }

  export type DraftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    samples?: boolean | DraftCountOutputTypeCountSamplesArgs
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
  export type DraftCountOutputTypeCountSamplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatternSampleWhereInput
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
    type: $Enums.UserType | null
    name: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    type: $Enums.UserType | null
    name: string | null
    createdAt: Date | null
    isActive: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    type: number
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
    type?: true
    name?: true
    createdAt?: true
    isActive?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    type?: true
    name?: true
    createdAt?: true
    isActive?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    type?: true
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
    type: $Enums.UserType
    name: string | null
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
    type?: boolean
    name?: boolean
    createdAt?: boolean
    isActive?: boolean
    patterns?: boolean | User$patternsArgs<ExtArgs>
    drafts?: boolean | User$draftsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    type?: boolean
    name?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    type?: boolean
    name?: boolean
    createdAt?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    type?: boolean
    name?: boolean
    createdAt?: boolean
    isActive?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "type" | "name" | "createdAt" | "isActive", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    patterns?: boolean | User$patternsArgs<ExtArgs>
    drafts?: boolean | User$draftsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      patterns: Prisma.$PatternPayload<ExtArgs>[]
      drafts: Prisma.$DraftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      type: $Enums.UserType
      name: string | null
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
    patterns<T extends User$patternsArgs<ExtArgs> = {}>(args?: Subset<T, User$patternsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly type: FieldRef<"User", 'UserType'>
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
   * User.patterns
   */
  export type User$patternsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: PatternWhereInput
    orderBy?: PatternOrderByWithRelationInput | PatternOrderByWithRelationInput[]
    cursor?: PatternWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatternScalarFieldEnum | PatternScalarFieldEnum[]
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
    userId: number | null
    signatureBits: number | null
    tempo: number | null
  }

  export type PatternSumAggregateOutputType = {
    id: number | null
    userId: number | null
    signatureBits: number | null
    tempo: number | null
  }

  export type PatternMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    signatureBits: number | null
    signatureMeasure: $Enums.SignatureMeasure | null
    tempo: number | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatternMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
    signatureBits: number | null
    signatureMeasure: $Enums.SignatureMeasure | null
    tempo: number | null
    isPublic: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatternCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    signatureBits: number
    signatureMeasure: number
    tempo: number
    beats: number
    isPublic: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatternAvgAggregateInputType = {
    id?: true
    userId?: true
    signatureBits?: true
    tempo?: true
  }

  export type PatternSumAggregateInputType = {
    id?: true
    userId?: true
    signatureBits?: true
    tempo?: true
  }

  export type PatternMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    signatureBits?: true
    signatureMeasure?: true
    tempo?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatternMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    signatureBits?: true
    signatureMeasure?: true
    tempo?: true
    isPublic?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatternCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    signatureBits?: true
    signatureMeasure?: true
    tempo?: true
    beats?: true
    isPublic?: true
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
    userId: number
    name: string | null
    signatureBits: number
    signatureMeasure: $Enums.SignatureMeasure
    tempo: number | null
    beats: JsonValue
    isPublic: boolean
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
    userId?: boolean
    name?: boolean
    signatureBits?: boolean
    signatureMeasure?: boolean
    tempo?: boolean
    beats?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Pattern$tagsArgs<ExtArgs>
    samples?: boolean | Pattern$samplesArgs<ExtArgs>
    searchData?: boolean | Pattern$searchDataArgs<ExtArgs>
    _count?: boolean | PatternCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pattern"]>

  export type PatternSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    signatureBits?: boolean
    signatureMeasure?: boolean
    tempo?: boolean
    beats?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pattern"]>

  export type PatternSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    signatureBits?: boolean
    signatureMeasure?: boolean
    tempo?: boolean
    beats?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pattern"]>

  export type PatternSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    signatureBits?: boolean
    signatureMeasure?: boolean
    tempo?: boolean
    beats?: boolean
    isPublic?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatternOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "signatureBits" | "signatureMeasure" | "tempo" | "beats" | "isPublic" | "createdAt" | "updatedAt", ExtArgs["result"]["pattern"]>
  export type PatternInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    tags?: boolean | Pattern$tagsArgs<ExtArgs>
    samples?: boolean | Pattern$samplesArgs<ExtArgs>
    searchData?: boolean | Pattern$searchDataArgs<ExtArgs>
    _count?: boolean | PatternCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatternIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PatternIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PatternPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pattern"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      tags: Prisma.$PatternTagPayload<ExtArgs>[]
      samples: Prisma.$PatternSamplePayload<ExtArgs>[]
      searchData: Prisma.$PatternSearchDataPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      name: string | null
      signatureBits: number
      signatureMeasure: $Enums.SignatureMeasure
      tempo: number | null
      beats: Prisma.JsonValue
      isPublic: boolean
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Pattern$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Pattern$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternTagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    samples<T extends Pattern$samplesArgs<ExtArgs> = {}>(args?: Subset<T, Pattern$samplesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternSamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"Pattern", 'Int'>
    readonly name: FieldRef<"Pattern", 'String'>
    readonly signatureBits: FieldRef<"Pattern", 'Int'>
    readonly signatureMeasure: FieldRef<"Pattern", 'SignatureMeasure'>
    readonly tempo: FieldRef<"Pattern", 'Int'>
    readonly beats: FieldRef<"Pattern", 'Json'>
    readonly isPublic: FieldRef<"Pattern", 'Boolean'>
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
    data: XOR<PatternCreateInput, PatternUncheckedCreateInput>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternIncludeUpdateManyAndReturn<ExtArgs> | null
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
   * Pattern.samples
   */
  export type Pattern$samplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSample
     */
    select?: PatternSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSample
     */
    omit?: PatternSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSampleInclude<ExtArgs> | null
    where?: PatternSampleWhereInput
    orderBy?: PatternSampleOrderByWithRelationInput | PatternSampleOrderByWithRelationInput[]
    cursor?: PatternSampleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatternSampleScalarFieldEnum | PatternSampleScalarFieldEnum[]
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
    samples?: boolean | Draft$samplesArgs<ExtArgs>
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
    samples?: boolean | Draft$samplesArgs<ExtArgs>
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
      samples: Prisma.$PatternSamplePayload<ExtArgs>[]
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
    samples<T extends Draft$samplesArgs<ExtArgs> = {}>(args?: Subset<T, Draft$samplesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternSamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Draft.samples
   */
  export type Draft$samplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSample
     */
    select?: PatternSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSample
     */
    omit?: PatternSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSampleInclude<ExtArgs> | null
    where?: PatternSampleWhereInput
    orderBy?: PatternSampleOrderByWithRelationInput | PatternSampleOrderByWithRelationInput[]
    cursor?: PatternSampleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatternSampleScalarFieldEnum | PatternSampleScalarFieldEnum[]
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
   * Model PatternSample
   */

  export type AggregatePatternSample = {
    _count: PatternSampleCountAggregateOutputType | null
    _avg: PatternSampleAvgAggregateOutputType | null
    _sum: PatternSampleSumAggregateOutputType | null
    _min: PatternSampleMinAggregateOutputType | null
    _max: PatternSampleMaxAggregateOutputType | null
  }

  export type PatternSampleAvgAggregateOutputType = {
    id: number | null
    draftId: number | null
    patternId: number | null
  }

  export type PatternSampleSumAggregateOutputType = {
    id: number | null
    draftId: number | null
    patternId: number | null
  }

  export type PatternSampleMinAggregateOutputType = {
    id: number | null
    draftId: number | null
    patternId: number | null
    code: string | null
    color: string | null
  }

  export type PatternSampleMaxAggregateOutputType = {
    id: number | null
    draftId: number | null
    patternId: number | null
    code: string | null
    color: string | null
  }

  export type PatternSampleCountAggregateOutputType = {
    id: number
    draftId: number
    patternId: number
    code: number
    color: number
    _all: number
  }


  export type PatternSampleAvgAggregateInputType = {
    id?: true
    draftId?: true
    patternId?: true
  }

  export type PatternSampleSumAggregateInputType = {
    id?: true
    draftId?: true
    patternId?: true
  }

  export type PatternSampleMinAggregateInputType = {
    id?: true
    draftId?: true
    patternId?: true
    code?: true
    color?: true
  }

  export type PatternSampleMaxAggregateInputType = {
    id?: true
    draftId?: true
    patternId?: true
    code?: true
    color?: true
  }

  export type PatternSampleCountAggregateInputType = {
    id?: true
    draftId?: true
    patternId?: true
    code?: true
    color?: true
    _all?: true
  }

  export type PatternSampleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatternSample to aggregate.
     */
    where?: PatternSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternSamples to fetch.
     */
    orderBy?: PatternSampleOrderByWithRelationInput | PatternSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatternSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternSamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PatternSamples
    **/
    _count?: true | PatternSampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatternSampleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatternSampleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatternSampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatternSampleMaxAggregateInputType
  }

  export type GetPatternSampleAggregateType<T extends PatternSampleAggregateArgs> = {
        [P in keyof T & keyof AggregatePatternSample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatternSample[P]>
      : GetScalarType<T[P], AggregatePatternSample[P]>
  }




  export type PatternSampleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatternSampleWhereInput
    orderBy?: PatternSampleOrderByWithAggregationInput | PatternSampleOrderByWithAggregationInput[]
    by: PatternSampleScalarFieldEnum[] | PatternSampleScalarFieldEnum
    having?: PatternSampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatternSampleCountAggregateInputType | true
    _avg?: PatternSampleAvgAggregateInputType
    _sum?: PatternSampleSumAggregateInputType
    _min?: PatternSampleMinAggregateInputType
    _max?: PatternSampleMaxAggregateInputType
  }

  export type PatternSampleGroupByOutputType = {
    id: number
    draftId: number
    patternId: number
    code: string
    color: string
    _count: PatternSampleCountAggregateOutputType | null
    _avg: PatternSampleAvgAggregateOutputType | null
    _sum: PatternSampleSumAggregateOutputType | null
    _min: PatternSampleMinAggregateOutputType | null
    _max: PatternSampleMaxAggregateOutputType | null
  }

  type GetPatternSampleGroupByPayload<T extends PatternSampleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatternSampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatternSampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatternSampleGroupByOutputType[P]>
            : GetScalarType<T[P], PatternSampleGroupByOutputType[P]>
        }
      >
    >


  export type PatternSampleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    draftId?: boolean
    patternId?: boolean
    code?: boolean
    color?: boolean
    draft?: boolean | DraftDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patternSample"]>

  export type PatternSampleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    draftId?: boolean
    patternId?: boolean
    code?: boolean
    color?: boolean
    draft?: boolean | DraftDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patternSample"]>

  export type PatternSampleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    draftId?: boolean
    patternId?: boolean
    code?: boolean
    color?: boolean
    draft?: boolean | DraftDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patternSample"]>

  export type PatternSampleSelectScalar = {
    id?: boolean
    draftId?: boolean
    patternId?: boolean
    code?: boolean
    color?: boolean
  }

  export type PatternSampleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "draftId" | "patternId" | "code" | "color", ExtArgs["result"]["patternSample"]>
  export type PatternSampleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draft?: boolean | DraftDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }
  export type PatternSampleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draft?: boolean | DraftDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }
  export type PatternSampleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    draft?: boolean | DraftDefaultArgs<ExtArgs>
    pattern?: boolean | PatternDefaultArgs<ExtArgs>
  }

  export type $PatternSamplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PatternSample"
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
    }, ExtArgs["result"]["patternSample"]>
    composites: {}
  }

  type PatternSampleGetPayload<S extends boolean | null | undefined | PatternSampleDefaultArgs> = $Result.GetResult<Prisma.$PatternSamplePayload, S>

  type PatternSampleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatternSampleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatternSampleCountAggregateInputType | true
    }

  export interface PatternSampleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PatternSample'], meta: { name: 'PatternSample' } }
    /**
     * Find zero or one PatternSample that matches the filter.
     * @param {PatternSampleFindUniqueArgs} args - Arguments to find a PatternSample
     * @example
     * // Get one PatternSample
     * const patternSample = await prisma.patternSample.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatternSampleFindUniqueArgs>(args: SelectSubset<T, PatternSampleFindUniqueArgs<ExtArgs>>): Prisma__PatternSampleClient<$Result.GetResult<Prisma.$PatternSamplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PatternSample that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatternSampleFindUniqueOrThrowArgs} args - Arguments to find a PatternSample
     * @example
     * // Get one PatternSample
     * const patternSample = await prisma.patternSample.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatternSampleFindUniqueOrThrowArgs>(args: SelectSubset<T, PatternSampleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatternSampleClient<$Result.GetResult<Prisma.$PatternSamplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatternSample that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternSampleFindFirstArgs} args - Arguments to find a PatternSample
     * @example
     * // Get one PatternSample
     * const patternSample = await prisma.patternSample.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatternSampleFindFirstArgs>(args?: SelectSubset<T, PatternSampleFindFirstArgs<ExtArgs>>): Prisma__PatternSampleClient<$Result.GetResult<Prisma.$PatternSamplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PatternSample that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternSampleFindFirstOrThrowArgs} args - Arguments to find a PatternSample
     * @example
     * // Get one PatternSample
     * const patternSample = await prisma.patternSample.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatternSampleFindFirstOrThrowArgs>(args?: SelectSubset<T, PatternSampleFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatternSampleClient<$Result.GetResult<Prisma.$PatternSamplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PatternSamples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternSampleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PatternSamples
     * const patternSamples = await prisma.patternSample.findMany()
     * 
     * // Get first 10 PatternSamples
     * const patternSamples = await prisma.patternSample.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patternSampleWithIdOnly = await prisma.patternSample.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatternSampleFindManyArgs>(args?: SelectSubset<T, PatternSampleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternSamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PatternSample.
     * @param {PatternSampleCreateArgs} args - Arguments to create a PatternSample.
     * @example
     * // Create one PatternSample
     * const PatternSample = await prisma.patternSample.create({
     *   data: {
     *     // ... data to create a PatternSample
     *   }
     * })
     * 
     */
    create<T extends PatternSampleCreateArgs>(args: SelectSubset<T, PatternSampleCreateArgs<ExtArgs>>): Prisma__PatternSampleClient<$Result.GetResult<Prisma.$PatternSamplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PatternSamples.
     * @param {PatternSampleCreateManyArgs} args - Arguments to create many PatternSamples.
     * @example
     * // Create many PatternSamples
     * const patternSample = await prisma.patternSample.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatternSampleCreateManyArgs>(args?: SelectSubset<T, PatternSampleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PatternSamples and returns the data saved in the database.
     * @param {PatternSampleCreateManyAndReturnArgs} args - Arguments to create many PatternSamples.
     * @example
     * // Create many PatternSamples
     * const patternSample = await prisma.patternSample.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PatternSamples and only return the `id`
     * const patternSampleWithIdOnly = await prisma.patternSample.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatternSampleCreateManyAndReturnArgs>(args?: SelectSubset<T, PatternSampleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternSamplePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PatternSample.
     * @param {PatternSampleDeleteArgs} args - Arguments to delete one PatternSample.
     * @example
     * // Delete one PatternSample
     * const PatternSample = await prisma.patternSample.delete({
     *   where: {
     *     // ... filter to delete one PatternSample
     *   }
     * })
     * 
     */
    delete<T extends PatternSampleDeleteArgs>(args: SelectSubset<T, PatternSampleDeleteArgs<ExtArgs>>): Prisma__PatternSampleClient<$Result.GetResult<Prisma.$PatternSamplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PatternSample.
     * @param {PatternSampleUpdateArgs} args - Arguments to update one PatternSample.
     * @example
     * // Update one PatternSample
     * const patternSample = await prisma.patternSample.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatternSampleUpdateArgs>(args: SelectSubset<T, PatternSampleUpdateArgs<ExtArgs>>): Prisma__PatternSampleClient<$Result.GetResult<Prisma.$PatternSamplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PatternSamples.
     * @param {PatternSampleDeleteManyArgs} args - Arguments to filter PatternSamples to delete.
     * @example
     * // Delete a few PatternSamples
     * const { count } = await prisma.patternSample.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatternSampleDeleteManyArgs>(args?: SelectSubset<T, PatternSampleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatternSamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternSampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PatternSamples
     * const patternSample = await prisma.patternSample.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatternSampleUpdateManyArgs>(args: SelectSubset<T, PatternSampleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PatternSamples and returns the data updated in the database.
     * @param {PatternSampleUpdateManyAndReturnArgs} args - Arguments to update many PatternSamples.
     * @example
     * // Update many PatternSamples
     * const patternSample = await prisma.patternSample.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PatternSamples and only return the `id`
     * const patternSampleWithIdOnly = await prisma.patternSample.updateManyAndReturn({
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
    updateManyAndReturn<T extends PatternSampleUpdateManyAndReturnArgs>(args: SelectSubset<T, PatternSampleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatternSamplePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PatternSample.
     * @param {PatternSampleUpsertArgs} args - Arguments to update or create a PatternSample.
     * @example
     * // Update or create a PatternSample
     * const patternSample = await prisma.patternSample.upsert({
     *   create: {
     *     // ... data to create a PatternSample
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PatternSample we want to update
     *   }
     * })
     */
    upsert<T extends PatternSampleUpsertArgs>(args: SelectSubset<T, PatternSampleUpsertArgs<ExtArgs>>): Prisma__PatternSampleClient<$Result.GetResult<Prisma.$PatternSamplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PatternSamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternSampleCountArgs} args - Arguments to filter PatternSamples to count.
     * @example
     * // Count the number of PatternSamples
     * const count = await prisma.patternSample.count({
     *   where: {
     *     // ... the filter for the PatternSamples we want to count
     *   }
     * })
    **/
    count<T extends PatternSampleCountArgs>(
      args?: Subset<T, PatternSampleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatternSampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PatternSample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternSampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatternSampleAggregateArgs>(args: Subset<T, PatternSampleAggregateArgs>): Prisma.PrismaPromise<GetPatternSampleAggregateType<T>>

    /**
     * Group by PatternSample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatternSampleGroupByArgs} args - Group by arguments.
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
      T extends PatternSampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatternSampleGroupByArgs['orderBy'] }
        : { orderBy?: PatternSampleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatternSampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatternSampleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PatternSample model
   */
  readonly fields: PatternSampleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PatternSample.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatternSampleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PatternSample model
   */
  interface PatternSampleFieldRefs {
    readonly id: FieldRef<"PatternSample", 'Int'>
    readonly draftId: FieldRef<"PatternSample", 'Int'>
    readonly patternId: FieldRef<"PatternSample", 'Int'>
    readonly code: FieldRef<"PatternSample", 'String'>
    readonly color: FieldRef<"PatternSample", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PatternSample findUnique
   */
  export type PatternSampleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSample
     */
    select?: PatternSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSample
     */
    omit?: PatternSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSampleInclude<ExtArgs> | null
    /**
     * Filter, which PatternSample to fetch.
     */
    where: PatternSampleWhereUniqueInput
  }

  /**
   * PatternSample findUniqueOrThrow
   */
  export type PatternSampleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSample
     */
    select?: PatternSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSample
     */
    omit?: PatternSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSampleInclude<ExtArgs> | null
    /**
     * Filter, which PatternSample to fetch.
     */
    where: PatternSampleWhereUniqueInput
  }

  /**
   * PatternSample findFirst
   */
  export type PatternSampleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSample
     */
    select?: PatternSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSample
     */
    omit?: PatternSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSampleInclude<ExtArgs> | null
    /**
     * Filter, which PatternSample to fetch.
     */
    where?: PatternSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternSamples to fetch.
     */
    orderBy?: PatternSampleOrderByWithRelationInput | PatternSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatternSamples.
     */
    cursor?: PatternSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternSamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatternSamples.
     */
    distinct?: PatternSampleScalarFieldEnum | PatternSampleScalarFieldEnum[]
  }

  /**
   * PatternSample findFirstOrThrow
   */
  export type PatternSampleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSample
     */
    select?: PatternSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSample
     */
    omit?: PatternSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSampleInclude<ExtArgs> | null
    /**
     * Filter, which PatternSample to fetch.
     */
    where?: PatternSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternSamples to fetch.
     */
    orderBy?: PatternSampleOrderByWithRelationInput | PatternSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PatternSamples.
     */
    cursor?: PatternSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternSamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PatternSamples.
     */
    distinct?: PatternSampleScalarFieldEnum | PatternSampleScalarFieldEnum[]
  }

  /**
   * PatternSample findMany
   */
  export type PatternSampleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSample
     */
    select?: PatternSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSample
     */
    omit?: PatternSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSampleInclude<ExtArgs> | null
    /**
     * Filter, which PatternSamples to fetch.
     */
    where?: PatternSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PatternSamples to fetch.
     */
    orderBy?: PatternSampleOrderByWithRelationInput | PatternSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PatternSamples.
     */
    cursor?: PatternSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PatternSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PatternSamples.
     */
    skip?: number
    distinct?: PatternSampleScalarFieldEnum | PatternSampleScalarFieldEnum[]
  }

  /**
   * PatternSample create
   */
  export type PatternSampleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSample
     */
    select?: PatternSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSample
     */
    omit?: PatternSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSampleInclude<ExtArgs> | null
    /**
     * The data needed to create a PatternSample.
     */
    data: XOR<PatternSampleCreateInput, PatternSampleUncheckedCreateInput>
  }

  /**
   * PatternSample createMany
   */
  export type PatternSampleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PatternSamples.
     */
    data: PatternSampleCreateManyInput | PatternSampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PatternSample createManyAndReturn
   */
  export type PatternSampleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSample
     */
    select?: PatternSampleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSample
     */
    omit?: PatternSampleOmit<ExtArgs> | null
    /**
     * The data used to create many PatternSamples.
     */
    data: PatternSampleCreateManyInput | PatternSampleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSampleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatternSample update
   */
  export type PatternSampleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSample
     */
    select?: PatternSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSample
     */
    omit?: PatternSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSampleInclude<ExtArgs> | null
    /**
     * The data needed to update a PatternSample.
     */
    data: XOR<PatternSampleUpdateInput, PatternSampleUncheckedUpdateInput>
    /**
     * Choose, which PatternSample to update.
     */
    where: PatternSampleWhereUniqueInput
  }

  /**
   * PatternSample updateMany
   */
  export type PatternSampleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PatternSamples.
     */
    data: XOR<PatternSampleUpdateManyMutationInput, PatternSampleUncheckedUpdateManyInput>
    /**
     * Filter which PatternSamples to update
     */
    where?: PatternSampleWhereInput
    /**
     * Limit how many PatternSamples to update.
     */
    limit?: number
  }

  /**
   * PatternSample updateManyAndReturn
   */
  export type PatternSampleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSample
     */
    select?: PatternSampleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSample
     */
    omit?: PatternSampleOmit<ExtArgs> | null
    /**
     * The data used to update PatternSamples.
     */
    data: XOR<PatternSampleUpdateManyMutationInput, PatternSampleUncheckedUpdateManyInput>
    /**
     * Filter which PatternSamples to update
     */
    where?: PatternSampleWhereInput
    /**
     * Limit how many PatternSamples to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSampleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PatternSample upsert
   */
  export type PatternSampleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSample
     */
    select?: PatternSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSample
     */
    omit?: PatternSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSampleInclude<ExtArgs> | null
    /**
     * The filter to search for the PatternSample to update in case it exists.
     */
    where: PatternSampleWhereUniqueInput
    /**
     * In case the PatternSample found by the `where` argument doesn't exist, create a new PatternSample with this data.
     */
    create: XOR<PatternSampleCreateInput, PatternSampleUncheckedCreateInput>
    /**
     * In case the PatternSample was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatternSampleUpdateInput, PatternSampleUncheckedUpdateInput>
  }

  /**
   * PatternSample delete
   */
  export type PatternSampleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSample
     */
    select?: PatternSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSample
     */
    omit?: PatternSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSampleInclude<ExtArgs> | null
    /**
     * Filter which PatternSample to delete.
     */
    where: PatternSampleWhereUniqueInput
  }

  /**
   * PatternSample deleteMany
   */
  export type PatternSampleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PatternSamples to delete
     */
    where?: PatternSampleWhereInput
    /**
     * Limit how many PatternSamples to delete.
     */
    limit?: number
  }

  /**
   * PatternSample without action
   */
  export type PatternSampleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatternSample
     */
    select?: PatternSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PatternSample
     */
    omit?: PatternSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatternSampleInclude<ExtArgs> | null
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
    type: 'type',
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
    userId: 'userId',
    name: 'name',
    signatureBits: 'signatureBits',
    signatureMeasure: 'signatureMeasure',
    tempo: 'tempo',
    beats: 'beats',
    isPublic: 'isPublic',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatternScalarFieldEnum = (typeof PatternScalarFieldEnum)[keyof typeof PatternScalarFieldEnum]


  export const PatternTagScalarFieldEnum: {
    patternId: 'patternId',
    tagId: 'tagId'
  };

  export type PatternTagScalarFieldEnum = (typeof PatternTagScalarFieldEnum)[keyof typeof PatternTagScalarFieldEnum]


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


  export const PatternSampleScalarFieldEnum: {
    id: 'id',
    draftId: 'draftId',
    patternId: 'patternId',
    code: 'code',
    color: 'color'
  };

  export type PatternSampleScalarFieldEnum = (typeof PatternSampleScalarFieldEnum)[keyof typeof PatternSampleScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


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
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    patterns?: PatternListRelationFilter
    drafts?: DraftListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
    patterns?: PatternOrderByRelationAggregateInput
    drafts?: DraftOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    type?: EnumUserTypeFilter<"User"> | $Enums.UserType
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    isActive?: BoolFilter<"User"> | boolean
    patterns?: PatternListRelationFilter
    drafts?: DraftListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
    name?: SortOrderInput | SortOrder
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
    type?: EnumUserTypeWithAggregatesFilter<"User"> | $Enums.UserType
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
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
    userId?: IntFilter<"Pattern"> | number
    name?: StringNullableFilter<"Pattern"> | string | null
    signatureBits?: IntFilter<"Pattern"> | number
    signatureMeasure?: EnumSignatureMeasureFilter<"Pattern"> | $Enums.SignatureMeasure
    tempo?: IntNullableFilter<"Pattern"> | number | null
    beats?: JsonFilter<"Pattern">
    isPublic?: BoolFilter<"Pattern"> | boolean
    createdAt?: DateTimeFilter<"Pattern"> | Date | string
    updatedAt?: DateTimeFilter<"Pattern"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: PatternTagListRelationFilter
    samples?: PatternSampleListRelationFilter
    searchData?: XOR<PatternSearchDataNullableScalarRelationFilter, PatternSearchDataWhereInput> | null
  }

  export type PatternOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    signatureBits?: SortOrder
    signatureMeasure?: SortOrder
    tempo?: SortOrderInput | SortOrder
    beats?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    tags?: PatternTagOrderByRelationAggregateInput
    samples?: PatternSampleOrderByRelationAggregateInput
    searchData?: PatternSearchDataOrderByWithRelationInput
  }

  export type PatternWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PatternWhereInput | PatternWhereInput[]
    OR?: PatternWhereInput[]
    NOT?: PatternWhereInput | PatternWhereInput[]
    userId?: IntFilter<"Pattern"> | number
    name?: StringNullableFilter<"Pattern"> | string | null
    signatureBits?: IntFilter<"Pattern"> | number
    signatureMeasure?: EnumSignatureMeasureFilter<"Pattern"> | $Enums.SignatureMeasure
    tempo?: IntNullableFilter<"Pattern"> | number | null
    beats?: JsonFilter<"Pattern">
    isPublic?: BoolFilter<"Pattern"> | boolean
    createdAt?: DateTimeFilter<"Pattern"> | Date | string
    updatedAt?: DateTimeFilter<"Pattern"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    tags?: PatternTagListRelationFilter
    samples?: PatternSampleListRelationFilter
    searchData?: XOR<PatternSearchDataNullableScalarRelationFilter, PatternSearchDataWhereInput> | null
  }, "id">

  export type PatternOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    signatureBits?: SortOrder
    signatureMeasure?: SortOrder
    tempo?: SortOrderInput | SortOrder
    beats?: SortOrder
    isPublic?: SortOrder
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
    userId?: IntWithAggregatesFilter<"Pattern"> | number
    name?: StringNullableWithAggregatesFilter<"Pattern"> | string | null
    signatureBits?: IntWithAggregatesFilter<"Pattern"> | number
    signatureMeasure?: EnumSignatureMeasureWithAggregatesFilter<"Pattern"> | $Enums.SignatureMeasure
    tempo?: IntNullableWithAggregatesFilter<"Pattern"> | number | null
    beats?: JsonWithAggregatesFilter<"Pattern">
    isPublic?: BoolWithAggregatesFilter<"Pattern"> | boolean
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
    samples?: PatternSampleListRelationFilter
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
    samples?: PatternSampleOrderByRelationAggregateInput
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
    samples?: PatternSampleListRelationFilter
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

  export type PatternSampleWhereInput = {
    AND?: PatternSampleWhereInput | PatternSampleWhereInput[]
    OR?: PatternSampleWhereInput[]
    NOT?: PatternSampleWhereInput | PatternSampleWhereInput[]
    id?: IntFilter<"PatternSample"> | number
    draftId?: IntFilter<"PatternSample"> | number
    patternId?: IntFilter<"PatternSample"> | number
    code?: StringFilter<"PatternSample"> | string
    color?: StringFilter<"PatternSample"> | string
    draft?: XOR<DraftScalarRelationFilter, DraftWhereInput>
    pattern?: XOR<PatternScalarRelationFilter, PatternWhereInput>
  }

  export type PatternSampleOrderByWithRelationInput = {
    id?: SortOrder
    draftId?: SortOrder
    patternId?: SortOrder
    code?: SortOrder
    color?: SortOrder
    draft?: DraftOrderByWithRelationInput
    pattern?: PatternOrderByWithRelationInput
  }

  export type PatternSampleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    draftId_code?: PatternSampleDraftIdCodeCompoundUniqueInput
    AND?: PatternSampleWhereInput | PatternSampleWhereInput[]
    OR?: PatternSampleWhereInput[]
    NOT?: PatternSampleWhereInput | PatternSampleWhereInput[]
    draftId?: IntFilter<"PatternSample"> | number
    patternId?: IntFilter<"PatternSample"> | number
    code?: StringFilter<"PatternSample"> | string
    color?: StringFilter<"PatternSample"> | string
    draft?: XOR<DraftScalarRelationFilter, DraftWhereInput>
    pattern?: XOR<PatternScalarRelationFilter, PatternWhereInput>
  }, "id" | "draftId_code">

  export type PatternSampleOrderByWithAggregationInput = {
    id?: SortOrder
    draftId?: SortOrder
    patternId?: SortOrder
    code?: SortOrder
    color?: SortOrder
    _count?: PatternSampleCountOrderByAggregateInput
    _avg?: PatternSampleAvgOrderByAggregateInput
    _max?: PatternSampleMaxOrderByAggregateInput
    _min?: PatternSampleMinOrderByAggregateInput
    _sum?: PatternSampleSumOrderByAggregateInput
  }

  export type PatternSampleScalarWhereWithAggregatesInput = {
    AND?: PatternSampleScalarWhereWithAggregatesInput | PatternSampleScalarWhereWithAggregatesInput[]
    OR?: PatternSampleScalarWhereWithAggregatesInput[]
    NOT?: PatternSampleScalarWhereWithAggregatesInput | PatternSampleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PatternSample"> | number
    draftId?: IntWithAggregatesFilter<"PatternSample"> | number
    patternId?: IntWithAggregatesFilter<"PatternSample"> | number
    code?: StringWithAggregatesFilter<"PatternSample"> | string
    color?: StringWithAggregatesFilter<"PatternSample"> | string
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
    type?: $Enums.UserType
    name?: string | null
    createdAt?: Date | string
    isActive?: boolean
    patterns?: PatternCreateNestedManyWithoutUserInput
    drafts?: DraftCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    type?: $Enums.UserType
    name?: string | null
    createdAt?: Date | string
    isActive?: boolean
    patterns?: PatternUncheckedCreateNestedManyWithoutUserInput
    drafts?: DraftUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    patterns?: PatternUpdateManyWithoutUserNestedInput
    drafts?: DraftUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    patterns?: PatternUncheckedUpdateManyWithoutUserNestedInput
    drafts?: DraftUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    type?: $Enums.UserType
    name?: string | null
    createdAt?: Date | string
    isActive?: boolean
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    name?: NullableStringFieldUpdateOperationsInput | string | null
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
    name?: string | null
    signatureBits: number
    signatureMeasure?: $Enums.SignatureMeasure
    tempo?: number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatternsInput
    tags?: PatternTagCreateNestedManyWithoutPatternInput
    samples?: PatternSampleCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataCreateNestedOneWithoutPatternInput
  }

  export type PatternUncheckedCreateInput = {
    id?: number
    userId: number
    name?: string | null
    signatureBits: number
    signatureMeasure?: $Enums.SignatureMeasure
    tempo?: number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PatternTagUncheckedCreateNestedManyWithoutPatternInput
    samples?: PatternSampleUncheckedCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataUncheckedCreateNestedOneWithoutPatternInput
  }

  export type PatternUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    tempo?: NullableIntFieldUpdateOperationsInput | number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatternsNestedInput
    tags?: PatternTagUpdateManyWithoutPatternNestedInput
    samples?: PatternSampleUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUpdateOneWithoutPatternNestedInput
  }

  export type PatternUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    tempo?: NullableIntFieldUpdateOperationsInput | number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PatternTagUncheckedUpdateManyWithoutPatternNestedInput
    samples?: PatternSampleUncheckedUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUncheckedUpdateOneWithoutPatternNestedInput
  }

  export type PatternCreateManyInput = {
    id?: number
    userId: number
    name?: string | null
    signatureBits: number
    signatureMeasure?: $Enums.SignatureMeasure
    tempo?: number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatternUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    tempo?: NullableIntFieldUpdateOperationsInput | number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatternUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    tempo?: NullableIntFieldUpdateOperationsInput | number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
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

  export type DraftCreateInput = {
    title: string
    description?: string | null
    structure: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDraftsInput
    samples?: PatternSampleCreateNestedManyWithoutDraftInput
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
    samples?: PatternSampleUncheckedCreateNestedManyWithoutDraftInput
  }

  export type DraftUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDraftsNestedInput
    samples?: PatternSampleUpdateManyWithoutDraftNestedInput
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
    samples?: PatternSampleUncheckedUpdateManyWithoutDraftNestedInput
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

  export type PatternSampleCreateInput = {
    code: string
    color: string
    draft: DraftCreateNestedOneWithoutSamplesInput
    pattern: PatternCreateNestedOneWithoutSamplesInput
  }

  export type PatternSampleUncheckedCreateInput = {
    id?: number
    draftId: number
    patternId: number
    code: string
    color: string
  }

  export type PatternSampleUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    draft?: DraftUpdateOneRequiredWithoutSamplesNestedInput
    pattern?: PatternUpdateOneRequiredWithoutSamplesNestedInput
  }

  export type PatternSampleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    draftId?: IntFieldUpdateOperationsInput | number
    patternId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type PatternSampleCreateManyInput = {
    id?: number
    draftId: number
    patternId: number
    code: string
    color: string
  }

  export type PatternSampleUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type PatternSampleUncheckedUpdateManyInput = {
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

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
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

  export type PatternListRelationFilter = {
    every?: PatternWhereInput
    some?: PatternWhereInput
    none?: PatternWhereInput
  }

  export type DraftListRelationFilter = {
    every?: DraftWhereInput
    some?: DraftWhereInput
    none?: DraftWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PatternOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DraftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
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
    type?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    isActive?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
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

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PatternSampleListRelationFilter = {
    every?: PatternSampleWhereInput
    some?: PatternSampleWhereInput
    none?: PatternSampleWhereInput
  }

  export type PatternSearchDataNullableScalarRelationFilter = {
    is?: PatternSearchDataWhereInput | null
    isNot?: PatternSearchDataWhereInput | null
  }

  export type PatternSampleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatternCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    signatureBits?: SortOrder
    signatureMeasure?: SortOrder
    tempo?: SortOrder
    beats?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatternAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    signatureBits?: SortOrder
    tempo?: SortOrder
  }

  export type PatternMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    signatureBits?: SortOrder
    signatureMeasure?: SortOrder
    tempo?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatternMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    signatureBits?: SortOrder
    signatureMeasure?: SortOrder
    tempo?: SortOrder
    isPublic?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatternSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    signatureBits?: SortOrder
    tempo?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type DraftScalarRelationFilter = {
    is?: DraftWhereInput
    isNot?: DraftWhereInput
  }

  export type PatternSampleDraftIdCodeCompoundUniqueInput = {
    draftId: number
    code: string
  }

  export type PatternSampleCountOrderByAggregateInput = {
    id?: SortOrder
    draftId?: SortOrder
    patternId?: SortOrder
    code?: SortOrder
    color?: SortOrder
  }

  export type PatternSampleAvgOrderByAggregateInput = {
    id?: SortOrder
    draftId?: SortOrder
    patternId?: SortOrder
  }

  export type PatternSampleMaxOrderByAggregateInput = {
    id?: SortOrder
    draftId?: SortOrder
    patternId?: SortOrder
    code?: SortOrder
    color?: SortOrder
  }

  export type PatternSampleMinOrderByAggregateInput = {
    id?: SortOrder
    draftId?: SortOrder
    patternId?: SortOrder
    code?: SortOrder
    color?: SortOrder
  }

  export type PatternSampleSumOrderByAggregateInput = {
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

  export type PatternCreateNestedManyWithoutUserInput = {
    create?: XOR<PatternCreateWithoutUserInput, PatternUncheckedCreateWithoutUserInput> | PatternCreateWithoutUserInput[] | PatternUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatternCreateOrConnectWithoutUserInput | PatternCreateOrConnectWithoutUserInput[]
    createMany?: PatternCreateManyUserInputEnvelope
    connect?: PatternWhereUniqueInput | PatternWhereUniqueInput[]
  }

  export type DraftCreateNestedManyWithoutUserInput = {
    create?: XOR<DraftCreateWithoutUserInput, DraftUncheckedCreateWithoutUserInput> | DraftCreateWithoutUserInput[] | DraftUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DraftCreateOrConnectWithoutUserInput | DraftCreateOrConnectWithoutUserInput[]
    createMany?: DraftCreateManyUserInputEnvelope
    connect?: DraftWhereUniqueInput | DraftWhereUniqueInput[]
  }

  export type PatternUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PatternCreateWithoutUserInput, PatternUncheckedCreateWithoutUserInput> | PatternCreateWithoutUserInput[] | PatternUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatternCreateOrConnectWithoutUserInput | PatternCreateOrConnectWithoutUserInput[]
    createMany?: PatternCreateManyUserInputEnvelope
    connect?: PatternWhereUniqueInput | PatternWhereUniqueInput[]
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

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PatternUpdateManyWithoutUserNestedInput = {
    create?: XOR<PatternCreateWithoutUserInput, PatternUncheckedCreateWithoutUserInput> | PatternCreateWithoutUserInput[] | PatternUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatternCreateOrConnectWithoutUserInput | PatternCreateOrConnectWithoutUserInput[]
    upsert?: PatternUpsertWithWhereUniqueWithoutUserInput | PatternUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PatternCreateManyUserInputEnvelope
    set?: PatternWhereUniqueInput | PatternWhereUniqueInput[]
    disconnect?: PatternWhereUniqueInput | PatternWhereUniqueInput[]
    delete?: PatternWhereUniqueInput | PatternWhereUniqueInput[]
    connect?: PatternWhereUniqueInput | PatternWhereUniqueInput[]
    update?: PatternUpdateWithWhereUniqueWithoutUserInput | PatternUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PatternUpdateManyWithWhereWithoutUserInput | PatternUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PatternScalarWhereInput | PatternScalarWhereInput[]
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

  export type PatternUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PatternCreateWithoutUserInput, PatternUncheckedCreateWithoutUserInput> | PatternCreateWithoutUserInput[] | PatternUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PatternCreateOrConnectWithoutUserInput | PatternCreateOrConnectWithoutUserInput[]
    upsert?: PatternUpsertWithWhereUniqueWithoutUserInput | PatternUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PatternCreateManyUserInputEnvelope
    set?: PatternWhereUniqueInput | PatternWhereUniqueInput[]
    disconnect?: PatternWhereUniqueInput | PatternWhereUniqueInput[]
    delete?: PatternWhereUniqueInput | PatternWhereUniqueInput[]
    connect?: PatternWhereUniqueInput | PatternWhereUniqueInput[]
    update?: PatternUpdateWithWhereUniqueWithoutUserInput | PatternUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PatternUpdateManyWithWhereWithoutUserInput | PatternUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PatternScalarWhereInput | PatternScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutPatternsInput = {
    create?: XOR<UserCreateWithoutPatternsInput, UserUncheckedCreateWithoutPatternsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatternsInput
    connect?: UserWhereUniqueInput
  }

  export type PatternTagCreateNestedManyWithoutPatternInput = {
    create?: XOR<PatternTagCreateWithoutPatternInput, PatternTagUncheckedCreateWithoutPatternInput> | PatternTagCreateWithoutPatternInput[] | PatternTagUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: PatternTagCreateOrConnectWithoutPatternInput | PatternTagCreateOrConnectWithoutPatternInput[]
    createMany?: PatternTagCreateManyPatternInputEnvelope
    connect?: PatternTagWhereUniqueInput | PatternTagWhereUniqueInput[]
  }

  export type PatternSampleCreateNestedManyWithoutPatternInput = {
    create?: XOR<PatternSampleCreateWithoutPatternInput, PatternSampleUncheckedCreateWithoutPatternInput> | PatternSampleCreateWithoutPatternInput[] | PatternSampleUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: PatternSampleCreateOrConnectWithoutPatternInput | PatternSampleCreateOrConnectWithoutPatternInput[]
    createMany?: PatternSampleCreateManyPatternInputEnvelope
    connect?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
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

  export type PatternSampleUncheckedCreateNestedManyWithoutPatternInput = {
    create?: XOR<PatternSampleCreateWithoutPatternInput, PatternSampleUncheckedCreateWithoutPatternInput> | PatternSampleCreateWithoutPatternInput[] | PatternSampleUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: PatternSampleCreateOrConnectWithoutPatternInput | PatternSampleCreateOrConnectWithoutPatternInput[]
    createMany?: PatternSampleCreateManyPatternInputEnvelope
    connect?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
  }

  export type PatternSearchDataUncheckedCreateNestedOneWithoutPatternInput = {
    create?: XOR<PatternSearchDataCreateWithoutPatternInput, PatternSearchDataUncheckedCreateWithoutPatternInput>
    connectOrCreate?: PatternSearchDataCreateOrConnectWithoutPatternInput
    connect?: PatternSearchDataWhereUniqueInput
  }

  export type EnumSignatureMeasureFieldUpdateOperationsInput = {
    set?: $Enums.SignatureMeasure
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPatternsNestedInput = {
    create?: XOR<UserCreateWithoutPatternsInput, UserUncheckedCreateWithoutPatternsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPatternsInput
    upsert?: UserUpsertWithoutPatternsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPatternsInput, UserUpdateWithoutPatternsInput>, UserUncheckedUpdateWithoutPatternsInput>
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

  export type PatternSampleUpdateManyWithoutPatternNestedInput = {
    create?: XOR<PatternSampleCreateWithoutPatternInput, PatternSampleUncheckedCreateWithoutPatternInput> | PatternSampleCreateWithoutPatternInput[] | PatternSampleUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: PatternSampleCreateOrConnectWithoutPatternInput | PatternSampleCreateOrConnectWithoutPatternInput[]
    upsert?: PatternSampleUpsertWithWhereUniqueWithoutPatternInput | PatternSampleUpsertWithWhereUniqueWithoutPatternInput[]
    createMany?: PatternSampleCreateManyPatternInputEnvelope
    set?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    disconnect?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    delete?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    connect?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    update?: PatternSampleUpdateWithWhereUniqueWithoutPatternInput | PatternSampleUpdateWithWhereUniqueWithoutPatternInput[]
    updateMany?: PatternSampleUpdateManyWithWhereWithoutPatternInput | PatternSampleUpdateManyWithWhereWithoutPatternInput[]
    deleteMany?: PatternSampleScalarWhereInput | PatternSampleScalarWhereInput[]
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

  export type PatternSampleUncheckedUpdateManyWithoutPatternNestedInput = {
    create?: XOR<PatternSampleCreateWithoutPatternInput, PatternSampleUncheckedCreateWithoutPatternInput> | PatternSampleCreateWithoutPatternInput[] | PatternSampleUncheckedCreateWithoutPatternInput[]
    connectOrCreate?: PatternSampleCreateOrConnectWithoutPatternInput | PatternSampleCreateOrConnectWithoutPatternInput[]
    upsert?: PatternSampleUpsertWithWhereUniqueWithoutPatternInput | PatternSampleUpsertWithWhereUniqueWithoutPatternInput[]
    createMany?: PatternSampleCreateManyPatternInputEnvelope
    set?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    disconnect?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    delete?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    connect?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    update?: PatternSampleUpdateWithWhereUniqueWithoutPatternInput | PatternSampleUpdateWithWhereUniqueWithoutPatternInput[]
    updateMany?: PatternSampleUpdateManyWithWhereWithoutPatternInput | PatternSampleUpdateManyWithWhereWithoutPatternInput[]
    deleteMany?: PatternSampleScalarWhereInput | PatternSampleScalarWhereInput[]
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

  export type UserCreateNestedOneWithoutDraftsInput = {
    create?: XOR<UserCreateWithoutDraftsInput, UserUncheckedCreateWithoutDraftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDraftsInput
    connect?: UserWhereUniqueInput
  }

  export type PatternSampleCreateNestedManyWithoutDraftInput = {
    create?: XOR<PatternSampleCreateWithoutDraftInput, PatternSampleUncheckedCreateWithoutDraftInput> | PatternSampleCreateWithoutDraftInput[] | PatternSampleUncheckedCreateWithoutDraftInput[]
    connectOrCreate?: PatternSampleCreateOrConnectWithoutDraftInput | PatternSampleCreateOrConnectWithoutDraftInput[]
    createMany?: PatternSampleCreateManyDraftInputEnvelope
    connect?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
  }

  export type PatternSampleUncheckedCreateNestedManyWithoutDraftInput = {
    create?: XOR<PatternSampleCreateWithoutDraftInput, PatternSampleUncheckedCreateWithoutDraftInput> | PatternSampleCreateWithoutDraftInput[] | PatternSampleUncheckedCreateWithoutDraftInput[]
    connectOrCreate?: PatternSampleCreateOrConnectWithoutDraftInput | PatternSampleCreateOrConnectWithoutDraftInput[]
    createMany?: PatternSampleCreateManyDraftInputEnvelope
    connect?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutDraftsNestedInput = {
    create?: XOR<UserCreateWithoutDraftsInput, UserUncheckedCreateWithoutDraftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDraftsInput
    upsert?: UserUpsertWithoutDraftsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDraftsInput, UserUpdateWithoutDraftsInput>, UserUncheckedUpdateWithoutDraftsInput>
  }

  export type PatternSampleUpdateManyWithoutDraftNestedInput = {
    create?: XOR<PatternSampleCreateWithoutDraftInput, PatternSampleUncheckedCreateWithoutDraftInput> | PatternSampleCreateWithoutDraftInput[] | PatternSampleUncheckedCreateWithoutDraftInput[]
    connectOrCreate?: PatternSampleCreateOrConnectWithoutDraftInput | PatternSampleCreateOrConnectWithoutDraftInput[]
    upsert?: PatternSampleUpsertWithWhereUniqueWithoutDraftInput | PatternSampleUpsertWithWhereUniqueWithoutDraftInput[]
    createMany?: PatternSampleCreateManyDraftInputEnvelope
    set?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    disconnect?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    delete?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    connect?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    update?: PatternSampleUpdateWithWhereUniqueWithoutDraftInput | PatternSampleUpdateWithWhereUniqueWithoutDraftInput[]
    updateMany?: PatternSampleUpdateManyWithWhereWithoutDraftInput | PatternSampleUpdateManyWithWhereWithoutDraftInput[]
    deleteMany?: PatternSampleScalarWhereInput | PatternSampleScalarWhereInput[]
  }

  export type PatternSampleUncheckedUpdateManyWithoutDraftNestedInput = {
    create?: XOR<PatternSampleCreateWithoutDraftInput, PatternSampleUncheckedCreateWithoutDraftInput> | PatternSampleCreateWithoutDraftInput[] | PatternSampleUncheckedCreateWithoutDraftInput[]
    connectOrCreate?: PatternSampleCreateOrConnectWithoutDraftInput | PatternSampleCreateOrConnectWithoutDraftInput[]
    upsert?: PatternSampleUpsertWithWhereUniqueWithoutDraftInput | PatternSampleUpsertWithWhereUniqueWithoutDraftInput[]
    createMany?: PatternSampleCreateManyDraftInputEnvelope
    set?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    disconnect?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    delete?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    connect?: PatternSampleWhereUniqueInput | PatternSampleWhereUniqueInput[]
    update?: PatternSampleUpdateWithWhereUniqueWithoutDraftInput | PatternSampleUpdateWithWhereUniqueWithoutDraftInput[]
    updateMany?: PatternSampleUpdateManyWithWhereWithoutDraftInput | PatternSampleUpdateManyWithWhereWithoutDraftInput[]
    deleteMany?: PatternSampleScalarWhereInput | PatternSampleScalarWhereInput[]
  }

  export type DraftCreateNestedOneWithoutSamplesInput = {
    create?: XOR<DraftCreateWithoutSamplesInput, DraftUncheckedCreateWithoutSamplesInput>
    connectOrCreate?: DraftCreateOrConnectWithoutSamplesInput
    connect?: DraftWhereUniqueInput
  }

  export type PatternCreateNestedOneWithoutSamplesInput = {
    create?: XOR<PatternCreateWithoutSamplesInput, PatternUncheckedCreateWithoutSamplesInput>
    connectOrCreate?: PatternCreateOrConnectWithoutSamplesInput
    connect?: PatternWhereUniqueInput
  }

  export type DraftUpdateOneRequiredWithoutSamplesNestedInput = {
    create?: XOR<DraftCreateWithoutSamplesInput, DraftUncheckedCreateWithoutSamplesInput>
    connectOrCreate?: DraftCreateOrConnectWithoutSamplesInput
    upsert?: DraftUpsertWithoutSamplesInput
    connect?: DraftWhereUniqueInput
    update?: XOR<XOR<DraftUpdateToOneWithWhereWithoutSamplesInput, DraftUpdateWithoutSamplesInput>, DraftUncheckedUpdateWithoutSamplesInput>
  }

  export type PatternUpdateOneRequiredWithoutSamplesNestedInput = {
    create?: XOR<PatternCreateWithoutSamplesInput, PatternUncheckedCreateWithoutSamplesInput>
    connectOrCreate?: PatternCreateOrConnectWithoutSamplesInput
    upsert?: PatternUpsertWithoutSamplesInput
    connect?: PatternWhereUniqueInput
    update?: XOR<XOR<PatternUpdateToOneWithWhereWithoutSamplesInput, PatternUpdateWithoutSamplesInput>, PatternUncheckedUpdateWithoutSamplesInput>
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

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
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

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type PatternCreateWithoutUserInput = {
    name?: string | null
    signatureBits: number
    signatureMeasure?: $Enums.SignatureMeasure
    tempo?: number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PatternTagCreateNestedManyWithoutPatternInput
    samples?: PatternSampleCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataCreateNestedOneWithoutPatternInput
  }

  export type PatternUncheckedCreateWithoutUserInput = {
    id?: number
    name?: string | null
    signatureBits: number
    signatureMeasure?: $Enums.SignatureMeasure
    tempo?: number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PatternTagUncheckedCreateNestedManyWithoutPatternInput
    samples?: PatternSampleUncheckedCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataUncheckedCreateNestedOneWithoutPatternInput
  }

  export type PatternCreateOrConnectWithoutUserInput = {
    where: PatternWhereUniqueInput
    create: XOR<PatternCreateWithoutUserInput, PatternUncheckedCreateWithoutUserInput>
  }

  export type PatternCreateManyUserInputEnvelope = {
    data: PatternCreateManyUserInput | PatternCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DraftCreateWithoutUserInput = {
    title: string
    description?: string | null
    structure: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    samples?: PatternSampleCreateNestedManyWithoutDraftInput
  }

  export type DraftUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description?: string | null
    structure: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    samples?: PatternSampleUncheckedCreateNestedManyWithoutDraftInput
  }

  export type DraftCreateOrConnectWithoutUserInput = {
    where: DraftWhereUniqueInput
    create: XOR<DraftCreateWithoutUserInput, DraftUncheckedCreateWithoutUserInput>
  }

  export type DraftCreateManyUserInputEnvelope = {
    data: DraftCreateManyUserInput | DraftCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PatternUpsertWithWhereUniqueWithoutUserInput = {
    where: PatternWhereUniqueInput
    update: XOR<PatternUpdateWithoutUserInput, PatternUncheckedUpdateWithoutUserInput>
    create: XOR<PatternCreateWithoutUserInput, PatternUncheckedCreateWithoutUserInput>
  }

  export type PatternUpdateWithWhereUniqueWithoutUserInput = {
    where: PatternWhereUniqueInput
    data: XOR<PatternUpdateWithoutUserInput, PatternUncheckedUpdateWithoutUserInput>
  }

  export type PatternUpdateManyWithWhereWithoutUserInput = {
    where: PatternScalarWhereInput
    data: XOR<PatternUpdateManyMutationInput, PatternUncheckedUpdateManyWithoutUserInput>
  }

  export type PatternScalarWhereInput = {
    AND?: PatternScalarWhereInput | PatternScalarWhereInput[]
    OR?: PatternScalarWhereInput[]
    NOT?: PatternScalarWhereInput | PatternScalarWhereInput[]
    id?: IntFilter<"Pattern"> | number
    userId?: IntFilter<"Pattern"> | number
    name?: StringNullableFilter<"Pattern"> | string | null
    signatureBits?: IntFilter<"Pattern"> | number
    signatureMeasure?: EnumSignatureMeasureFilter<"Pattern"> | $Enums.SignatureMeasure
    tempo?: IntNullableFilter<"Pattern"> | number | null
    beats?: JsonFilter<"Pattern">
    isPublic?: BoolFilter<"Pattern"> | boolean
    createdAt?: DateTimeFilter<"Pattern"> | Date | string
    updatedAt?: DateTimeFilter<"Pattern"> | Date | string
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

  export type UserCreateWithoutPatternsInput = {
    email: string
    password: string
    type?: $Enums.UserType
    name?: string | null
    createdAt?: Date | string
    isActive?: boolean
    drafts?: DraftCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPatternsInput = {
    id?: number
    email: string
    password: string
    type?: $Enums.UserType
    name?: string | null
    createdAt?: Date | string
    isActive?: boolean
    drafts?: DraftUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPatternsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPatternsInput, UserUncheckedCreateWithoutPatternsInput>
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

  export type PatternSampleCreateWithoutPatternInput = {
    code: string
    color: string
    draft: DraftCreateNestedOneWithoutSamplesInput
  }

  export type PatternSampleUncheckedCreateWithoutPatternInput = {
    id?: number
    draftId: number
    code: string
    color: string
  }

  export type PatternSampleCreateOrConnectWithoutPatternInput = {
    where: PatternSampleWhereUniqueInput
    create: XOR<PatternSampleCreateWithoutPatternInput, PatternSampleUncheckedCreateWithoutPatternInput>
  }

  export type PatternSampleCreateManyPatternInputEnvelope = {
    data: PatternSampleCreateManyPatternInput | PatternSampleCreateManyPatternInput[]
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

  export type UserUpsertWithoutPatternsInput = {
    update: XOR<UserUpdateWithoutPatternsInput, UserUncheckedUpdateWithoutPatternsInput>
    create: XOR<UserCreateWithoutPatternsInput, UserUncheckedCreateWithoutPatternsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPatternsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPatternsInput, UserUncheckedUpdateWithoutPatternsInput>
  }

  export type UserUpdateWithoutPatternsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    drafts?: DraftUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPatternsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    drafts?: DraftUncheckedUpdateManyWithoutUserNestedInput
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

  export type PatternSampleUpsertWithWhereUniqueWithoutPatternInput = {
    where: PatternSampleWhereUniqueInput
    update: XOR<PatternSampleUpdateWithoutPatternInput, PatternSampleUncheckedUpdateWithoutPatternInput>
    create: XOR<PatternSampleCreateWithoutPatternInput, PatternSampleUncheckedCreateWithoutPatternInput>
  }

  export type PatternSampleUpdateWithWhereUniqueWithoutPatternInput = {
    where: PatternSampleWhereUniqueInput
    data: XOR<PatternSampleUpdateWithoutPatternInput, PatternSampleUncheckedUpdateWithoutPatternInput>
  }

  export type PatternSampleUpdateManyWithWhereWithoutPatternInput = {
    where: PatternSampleScalarWhereInput
    data: XOR<PatternSampleUpdateManyMutationInput, PatternSampleUncheckedUpdateManyWithoutPatternInput>
  }

  export type PatternSampleScalarWhereInput = {
    AND?: PatternSampleScalarWhereInput | PatternSampleScalarWhereInput[]
    OR?: PatternSampleScalarWhereInput[]
    NOT?: PatternSampleScalarWhereInput | PatternSampleScalarWhereInput[]
    id?: IntFilter<"PatternSample"> | number
    draftId?: IntFilter<"PatternSample"> | number
    patternId?: IntFilter<"PatternSample"> | number
    code?: StringFilter<"PatternSample"> | string
    color?: StringFilter<"PatternSample"> | string
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
    name?: string | null
    signatureBits: number
    signatureMeasure?: $Enums.SignatureMeasure
    tempo?: number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatternsInput
    samples?: PatternSampleCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataCreateNestedOneWithoutPatternInput
  }

  export type PatternUncheckedCreateWithoutTagsInput = {
    id?: number
    userId: number
    name?: string | null
    signatureBits: number
    signatureMeasure?: $Enums.SignatureMeasure
    tempo?: number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    samples?: PatternSampleUncheckedCreateNestedManyWithoutPatternInput
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
    name?: NullableStringFieldUpdateOperationsInput | string | null
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    tempo?: NullableIntFieldUpdateOperationsInput | number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatternsNestedInput
    samples?: PatternSampleUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUpdateOneWithoutPatternNestedInput
  }

  export type PatternUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    tempo?: NullableIntFieldUpdateOperationsInput | number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    samples?: PatternSampleUncheckedUpdateManyWithoutPatternNestedInput
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

  export type UserCreateWithoutDraftsInput = {
    email: string
    password: string
    type?: $Enums.UserType
    name?: string | null
    createdAt?: Date | string
    isActive?: boolean
    patterns?: PatternCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDraftsInput = {
    id?: number
    email: string
    password: string
    type?: $Enums.UserType
    name?: string | null
    createdAt?: Date | string
    isActive?: boolean
    patterns?: PatternUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDraftsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDraftsInput, UserUncheckedCreateWithoutDraftsInput>
  }

  export type PatternSampleCreateWithoutDraftInput = {
    code: string
    color: string
    pattern: PatternCreateNestedOneWithoutSamplesInput
  }

  export type PatternSampleUncheckedCreateWithoutDraftInput = {
    id?: number
    patternId: number
    code: string
    color: string
  }

  export type PatternSampleCreateOrConnectWithoutDraftInput = {
    where: PatternSampleWhereUniqueInput
    create: XOR<PatternSampleCreateWithoutDraftInput, PatternSampleUncheckedCreateWithoutDraftInput>
  }

  export type PatternSampleCreateManyDraftInputEnvelope = {
    data: PatternSampleCreateManyDraftInput | PatternSampleCreateManyDraftInput[]
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
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    patterns?: PatternUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDraftsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    patterns?: PatternUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PatternSampleUpsertWithWhereUniqueWithoutDraftInput = {
    where: PatternSampleWhereUniqueInput
    update: XOR<PatternSampleUpdateWithoutDraftInput, PatternSampleUncheckedUpdateWithoutDraftInput>
    create: XOR<PatternSampleCreateWithoutDraftInput, PatternSampleUncheckedCreateWithoutDraftInput>
  }

  export type PatternSampleUpdateWithWhereUniqueWithoutDraftInput = {
    where: PatternSampleWhereUniqueInput
    data: XOR<PatternSampleUpdateWithoutDraftInput, PatternSampleUncheckedUpdateWithoutDraftInput>
  }

  export type PatternSampleUpdateManyWithWhereWithoutDraftInput = {
    where: PatternSampleScalarWhereInput
    data: XOR<PatternSampleUpdateManyMutationInput, PatternSampleUncheckedUpdateManyWithoutDraftInput>
  }

  export type DraftCreateWithoutSamplesInput = {
    title: string
    description?: string | null
    structure: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDraftsInput
  }

  export type DraftUncheckedCreateWithoutSamplesInput = {
    id?: number
    userId: number
    title: string
    description?: string | null
    structure: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DraftCreateOrConnectWithoutSamplesInput = {
    where: DraftWhereUniqueInput
    create: XOR<DraftCreateWithoutSamplesInput, DraftUncheckedCreateWithoutSamplesInput>
  }

  export type PatternCreateWithoutSamplesInput = {
    name?: string | null
    signatureBits: number
    signatureMeasure?: $Enums.SignatureMeasure
    tempo?: number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatternsInput
    tags?: PatternTagCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataCreateNestedOneWithoutPatternInput
  }

  export type PatternUncheckedCreateWithoutSamplesInput = {
    id?: number
    userId: number
    name?: string | null
    signatureBits: number
    signatureMeasure?: $Enums.SignatureMeasure
    tempo?: number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PatternTagUncheckedCreateNestedManyWithoutPatternInput
    searchData?: PatternSearchDataUncheckedCreateNestedOneWithoutPatternInput
  }

  export type PatternCreateOrConnectWithoutSamplesInput = {
    where: PatternWhereUniqueInput
    create: XOR<PatternCreateWithoutSamplesInput, PatternUncheckedCreateWithoutSamplesInput>
  }

  export type DraftUpsertWithoutSamplesInput = {
    update: XOR<DraftUpdateWithoutSamplesInput, DraftUncheckedUpdateWithoutSamplesInput>
    create: XOR<DraftCreateWithoutSamplesInput, DraftUncheckedCreateWithoutSamplesInput>
    where?: DraftWhereInput
  }

  export type DraftUpdateToOneWithWhereWithoutSamplesInput = {
    where?: DraftWhereInput
    data: XOR<DraftUpdateWithoutSamplesInput, DraftUncheckedUpdateWithoutSamplesInput>
  }

  export type DraftUpdateWithoutSamplesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDraftsNestedInput
  }

  export type DraftUncheckedUpdateWithoutSamplesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatternUpsertWithoutSamplesInput = {
    update: XOR<PatternUpdateWithoutSamplesInput, PatternUncheckedUpdateWithoutSamplesInput>
    create: XOR<PatternCreateWithoutSamplesInput, PatternUncheckedCreateWithoutSamplesInput>
    where?: PatternWhereInput
  }

  export type PatternUpdateToOneWithWhereWithoutSamplesInput = {
    where?: PatternWhereInput
    data: XOR<PatternUpdateWithoutSamplesInput, PatternUncheckedUpdateWithoutSamplesInput>
  }

  export type PatternUpdateWithoutSamplesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    tempo?: NullableIntFieldUpdateOperationsInput | number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatternsNestedInput
    tags?: PatternTagUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUpdateOneWithoutPatternNestedInput
  }

  export type PatternUncheckedUpdateWithoutSamplesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    tempo?: NullableIntFieldUpdateOperationsInput | number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PatternTagUncheckedUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUncheckedUpdateOneWithoutPatternNestedInput
  }

  export type PatternCreateWithoutSearchDataInput = {
    name?: string | null
    signatureBits: number
    signatureMeasure?: $Enums.SignatureMeasure
    tempo?: number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPatternsInput
    tags?: PatternTagCreateNestedManyWithoutPatternInput
    samples?: PatternSampleCreateNestedManyWithoutPatternInput
  }

  export type PatternUncheckedCreateWithoutSearchDataInput = {
    id?: number
    userId: number
    name?: string | null
    signatureBits: number
    signatureMeasure?: $Enums.SignatureMeasure
    tempo?: number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tags?: PatternTagUncheckedCreateNestedManyWithoutPatternInput
    samples?: PatternSampleUncheckedCreateNestedManyWithoutPatternInput
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
    name?: NullableStringFieldUpdateOperationsInput | string | null
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    tempo?: NullableIntFieldUpdateOperationsInput | number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPatternsNestedInput
    tags?: PatternTagUpdateManyWithoutPatternNestedInput
    samples?: PatternSampleUpdateManyWithoutPatternNestedInput
  }

  export type PatternUncheckedUpdateWithoutSearchDataInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    tempo?: NullableIntFieldUpdateOperationsInput | number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PatternTagUncheckedUpdateManyWithoutPatternNestedInput
    samples?: PatternSampleUncheckedUpdateManyWithoutPatternNestedInput
  }

  export type PatternCreateManyUserInput = {
    id?: number
    name?: string | null
    signatureBits: number
    signatureMeasure?: $Enums.SignatureMeasure
    tempo?: number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
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

  export type PatternUpdateWithoutUserInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    tempo?: NullableIntFieldUpdateOperationsInput | number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PatternTagUpdateManyWithoutPatternNestedInput
    samples?: PatternSampleUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUpdateOneWithoutPatternNestedInput
  }

  export type PatternUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    tempo?: NullableIntFieldUpdateOperationsInput | number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tags?: PatternTagUncheckedUpdateManyWithoutPatternNestedInput
    samples?: PatternSampleUncheckedUpdateManyWithoutPatternNestedInput
    searchData?: PatternSearchDataUncheckedUpdateOneWithoutPatternNestedInput
  }

  export type PatternUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    signatureBits?: IntFieldUpdateOperationsInput | number
    signatureMeasure?: EnumSignatureMeasureFieldUpdateOperationsInput | $Enums.SignatureMeasure
    tempo?: NullableIntFieldUpdateOperationsInput | number | null
    beats?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DraftUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    samples?: PatternSampleUpdateManyWithoutDraftNestedInput
  }

  export type DraftUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    structure?: JsonNullValueInput | InputJsonValue
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    samples?: PatternSampleUncheckedUpdateManyWithoutDraftNestedInput
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

  export type PatternSampleCreateManyPatternInput = {
    id?: number
    draftId: number
    code: string
    color: string
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

  export type PatternSampleUpdateWithoutPatternInput = {
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    draft?: DraftUpdateOneRequiredWithoutSamplesNestedInput
  }

  export type PatternSampleUncheckedUpdateWithoutPatternInput = {
    id?: IntFieldUpdateOperationsInput | number
    draftId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type PatternSampleUncheckedUpdateManyWithoutPatternInput = {
    id?: IntFieldUpdateOperationsInput | number
    draftId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type PatternSampleCreateManyDraftInput = {
    id?: number
    patternId: number
    code: string
    color: string
  }

  export type PatternSampleUpdateWithoutDraftInput = {
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    pattern?: PatternUpdateOneRequiredWithoutSamplesNestedInput
  }

  export type PatternSampleUncheckedUpdateWithoutDraftInput = {
    id?: IntFieldUpdateOperationsInput | number
    patternId?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
  }

  export type PatternSampleUncheckedUpdateManyWithoutDraftInput = {
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