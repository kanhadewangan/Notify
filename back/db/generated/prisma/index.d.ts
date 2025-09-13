
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
 * Model user
 * 
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>
/**
 * Model note
 * 
 */
export type note = $Result.DefaultSelection<Prisma.$notePayload>
/**
 * Model subsription
 * 
 */
export type subsription = $Result.DefaultSelection<Prisma.$subsriptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const payment_method: {
  card: 'card',
  upi: 'upi',
  netbanking: 'netbanking'
};

export type payment_method = (typeof payment_method)[keyof typeof payment_method]


export const subscriptio_type: {
  BASIC: 'BASIC',
  PERMIUM: 'PERMIUM',
  ELITE: 'ELITE'
};

export type subscriptio_type = (typeof subscriptio_type)[keyof typeof subscriptio_type]

}

export type payment_method = $Enums.payment_method

export const payment_method: typeof $Enums.payment_method

export type subscriptio_type = $Enums.subscriptio_type

export const subscriptio_type: typeof $Enums.subscriptio_type

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
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.user`: Exposes CRUD operations for the **user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.userDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.note`: Exposes CRUD operations for the **note** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notes
    * const notes = await prisma.note.findMany()
    * ```
    */
  get note(): Prisma.noteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subsription`: Exposes CRUD operations for the **subsription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subsriptions
    * const subsriptions = await prisma.subsription.findMany()
    * ```
    */
  get subsription(): Prisma.subsriptionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.16.1
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
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
    user: 'user',
    note: 'note',
    subsription: 'subsription'
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
      modelProps: "user" | "note" | "subsription"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      user: {
        payload: Prisma.$userPayload<ExtArgs>
        fields: Prisma.userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          create: {
            args: Prisma.userCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.userCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.userUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>[]
          }
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$userPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.userCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      note: {
        payload: Prisma.$notePayload<ExtArgs>
        fields: Prisma.noteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.noteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.noteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>
          }
          findFirst: {
            args: Prisma.noteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.noteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>
          }
          findMany: {
            args: Prisma.noteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>[]
          }
          create: {
            args: Prisma.noteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>
          }
          createMany: {
            args: Prisma.noteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.noteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>[]
          }
          delete: {
            args: Prisma.noteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>
          }
          update: {
            args: Prisma.noteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>
          }
          deleteMany: {
            args: Prisma.noteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.noteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.noteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>[]
          }
          upsert: {
            args: Prisma.noteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$notePayload>
          }
          aggregate: {
            args: Prisma.NoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNote>
          }
          groupBy: {
            args: Prisma.noteGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.noteCountArgs<ExtArgs>
            result: $Utils.Optional<NoteCountAggregateOutputType> | number
          }
        }
      }
      subsription: {
        payload: Prisma.$subsriptionPayload<ExtArgs>
        fields: Prisma.subsriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.subsriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subsriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.subsriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subsriptionPayload>
          }
          findFirst: {
            args: Prisma.subsriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subsriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.subsriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subsriptionPayload>
          }
          findMany: {
            args: Prisma.subsriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subsriptionPayload>[]
          }
          create: {
            args: Prisma.subsriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subsriptionPayload>
          }
          createMany: {
            args: Prisma.subsriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.subsriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subsriptionPayload>[]
          }
          delete: {
            args: Prisma.subsriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subsriptionPayload>
          }
          update: {
            args: Prisma.subsriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subsriptionPayload>
          }
          deleteMany: {
            args: Prisma.subsriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.subsriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.subsriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subsriptionPayload>[]
          }
          upsert: {
            args: Prisma.subsriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$subsriptionPayload>
          }
          aggregate: {
            args: Prisma.SubsriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubsription>
          }
          groupBy: {
            args: Prisma.subsriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubsriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.subsriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubsriptionCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: userOmit
    note?: noteOmit
    subsription?: subsriptionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    notes: number
    subscriptions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | UserCountOutputTypeCountNotesArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
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
  export type UserCountOutputTypeCountNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: noteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subsriptionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model user
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
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
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
    name?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
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




  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: userScalarWhereWithAggregatesInput
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
    name: string | null
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
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


  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    notes?: boolean | user$notesArgs<ExtArgs>
    subscriptions?: boolean | user$subscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type userSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type userSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
  }

  export type userOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password", ExtArgs["result"]["user"]>
  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notes?: boolean | user$notesArgs<ExtArgs>
    subscriptions?: boolean | user$subscriptionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type userIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type userIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "user"
    objects: {
      notes: Prisma.$notePayload<ExtArgs>[]
      subscriptions: Prisma.$subsriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<Prisma.$userPayload, S>

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<userFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user'], meta: { name: 'user' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends userFindUniqueArgs>(args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs>(args: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends userFindFirstArgs>(args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends userFindFirstOrThrowArgs>(args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends userFindManyArgs>(args?: SelectSubset<T, userFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends userCreateArgs>(args: SelectSubset<T, userCreateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {userCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends userCreateManyArgs>(args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {userCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends userCreateManyAndReturnArgs>(args?: SelectSubset<T, userCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends userDeleteArgs>(args: SelectSubset<T, userDeleteArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
    update<T extends userUpdateArgs>(args: SelectSubset<T, userUpdateArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends userDeleteManyArgs>(args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends userUpdateManyArgs>(args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {userUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends userUpdateManyAndReturnArgs>(args: SelectSubset<T, userUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
    upsert<T extends userUpsertArgs>(args: SelectSubset<T, userUpsertArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
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
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the user model
   */
  readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notes<T extends user$notesArgs<ExtArgs> = {}>(args?: Subset<T, user$notesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends user$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, user$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subsriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<"user", 'Int'>
    readonly name: FieldRef<"user", 'String'>
    readonly email: FieldRef<"user", 'String'>
    readonly password: FieldRef<"user", 'String'>
  }
    

  // Custom InputTypes
  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput
  }

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>
  }

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user createManyAndReturn
   */
  export type userCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput
  }

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user updateManyAndReturn
   */
  export type userUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: userWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>
  }

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput
  }

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * user.notes
   */
  export type user$notesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    where?: noteWhereInput
    orderBy?: noteOrderByWithRelationInput | noteOrderByWithRelationInput[]
    cursor?: noteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * user.subscriptions
   */
  export type user$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subsription
     */
    select?: subsriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subsription
     */
    omit?: subsriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subsriptionInclude<ExtArgs> | null
    where?: subsriptionWhereInput
    orderBy?: subsriptionOrderByWithRelationInput | subsriptionOrderByWithRelationInput[]
    cursor?: subsriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubsriptionScalarFieldEnum | SubsriptionScalarFieldEnum[]
  }

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null
    /**
     * Omit specific fields from the user
     */
    omit?: userOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: userInclude<ExtArgs> | null
  }


  /**
   * Model note
   */

  export type AggregateNote = {
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  export type NoteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NoteSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NoteMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    userId: number | null
  }

  export type NoteMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    userId: number | null
  }

  export type NoteCountAggregateOutputType = {
    id: number
    title: number
    description: number
    userId: number
    _all: number
  }


  export type NoteAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NoteSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NoteMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
  }

  export type NoteMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
  }

  export type NoteCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type NoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which note to aggregate.
     */
    where?: noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: noteOrderByWithRelationInput | noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned notes
    **/
    _count?: true | NoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoteMaxAggregateInputType
  }

  export type GetNoteAggregateType<T extends NoteAggregateArgs> = {
        [P in keyof T & keyof AggregateNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNote[P]>
      : GetScalarType<T[P], AggregateNote[P]>
  }




  export type noteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: noteWhereInput
    orderBy?: noteOrderByWithAggregationInput | noteOrderByWithAggregationInput[]
    by: NoteScalarFieldEnum[] | NoteScalarFieldEnum
    having?: noteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoteCountAggregateInputType | true
    _avg?: NoteAvgAggregateInputType
    _sum?: NoteSumAggregateInputType
    _min?: NoteMinAggregateInputType
    _max?: NoteMaxAggregateInputType
  }

  export type NoteGroupByOutputType = {
    id: number
    title: string
    description: string
    userId: number
    _count: NoteCountAggregateOutputType | null
    _avg: NoteAvgAggregateOutputType | null
    _sum: NoteSumAggregateOutputType | null
    _min: NoteMinAggregateOutputType | null
    _max: NoteMaxAggregateOutputType | null
  }

  type GetNoteGroupByPayload<T extends noteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoteGroupByOutputType[P]>
            : GetScalarType<T[P], NoteGroupByOutputType[P]>
        }
      >
    >


  export type noteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type noteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type noteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["note"]>

  export type noteSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    userId?: boolean
  }

  export type noteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "userId", ExtArgs["result"]["note"]>
  export type noteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
  }
  export type noteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
  }
  export type noteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $notePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "note"
    objects: {
      users: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      userId: number
    }, ExtArgs["result"]["note"]>
    composites: {}
  }

  type noteGetPayload<S extends boolean | null | undefined | noteDefaultArgs> = $Result.GetResult<Prisma.$notePayload, S>

  type noteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<noteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoteCountAggregateInputType | true
    }

  export interface noteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['note'], meta: { name: 'note' } }
    /**
     * Find zero or one Note that matches the filter.
     * @param {noteFindUniqueArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends noteFindUniqueArgs>(args: SelectSubset<T, noteFindUniqueArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Note that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {noteFindUniqueOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends noteFindUniqueOrThrowArgs>(args: SelectSubset<T, noteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noteFindFirstArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends noteFindFirstArgs>(args?: SelectSubset<T, noteFindFirstArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Note that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noteFindFirstOrThrowArgs} args - Arguments to find a Note
     * @example
     * // Get one Note
     * const note = await prisma.note.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends noteFindFirstOrThrowArgs>(args?: SelectSubset<T, noteFindFirstOrThrowArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notes
     * const notes = await prisma.note.findMany()
     * 
     * // Get first 10 Notes
     * const notes = await prisma.note.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noteWithIdOnly = await prisma.note.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends noteFindManyArgs>(args?: SelectSubset<T, noteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Note.
     * @param {noteCreateArgs} args - Arguments to create a Note.
     * @example
     * // Create one Note
     * const Note = await prisma.note.create({
     *   data: {
     *     // ... data to create a Note
     *   }
     * })
     * 
     */
    create<T extends noteCreateArgs>(args: SelectSubset<T, noteCreateArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notes.
     * @param {noteCreateManyArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends noteCreateManyArgs>(args?: SelectSubset<T, noteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notes and returns the data saved in the database.
     * @param {noteCreateManyAndReturnArgs} args - Arguments to create many Notes.
     * @example
     * // Create many Notes
     * const note = await prisma.note.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends noteCreateManyAndReturnArgs>(args?: SelectSubset<T, noteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Note.
     * @param {noteDeleteArgs} args - Arguments to delete one Note.
     * @example
     * // Delete one Note
     * const Note = await prisma.note.delete({
     *   where: {
     *     // ... filter to delete one Note
     *   }
     * })
     * 
     */
    delete<T extends noteDeleteArgs>(args: SelectSubset<T, noteDeleteArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Note.
     * @param {noteUpdateArgs} args - Arguments to update one Note.
     * @example
     * // Update one Note
     * const note = await prisma.note.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends noteUpdateArgs>(args: SelectSubset<T, noteUpdateArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notes.
     * @param {noteDeleteManyArgs} args - Arguments to filter Notes to delete.
     * @example
     * // Delete a few Notes
     * const { count } = await prisma.note.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends noteDeleteManyArgs>(args?: SelectSubset<T, noteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends noteUpdateManyArgs>(args: SelectSubset<T, noteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notes and returns the data updated in the database.
     * @param {noteUpdateManyAndReturnArgs} args - Arguments to update many Notes.
     * @example
     * // Update many Notes
     * const note = await prisma.note.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notes and only return the `id`
     * const noteWithIdOnly = await prisma.note.updateManyAndReturn({
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
    updateManyAndReturn<T extends noteUpdateManyAndReturnArgs>(args: SelectSubset<T, noteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Note.
     * @param {noteUpsertArgs} args - Arguments to update or create a Note.
     * @example
     * // Update or create a Note
     * const note = await prisma.note.upsert({
     *   create: {
     *     // ... data to create a Note
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Note we want to update
     *   }
     * })
     */
    upsert<T extends noteUpsertArgs>(args: SelectSubset<T, noteUpsertArgs<ExtArgs>>): Prisma__noteClient<$Result.GetResult<Prisma.$notePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noteCountArgs} args - Arguments to filter Notes to count.
     * @example
     * // Count the number of Notes
     * const count = await prisma.note.count({
     *   where: {
     *     // ... the filter for the Notes we want to count
     *   }
     * })
    **/
    count<T extends noteCountArgs>(
      args?: Subset<T, noteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoteAggregateArgs>(args: Subset<T, NoteAggregateArgs>): Prisma.PrismaPromise<GetNoteAggregateType<T>>

    /**
     * Group by Note.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {noteGroupByArgs} args - Group by arguments.
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
      T extends noteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: noteGroupByArgs['orderBy'] }
        : { orderBy?: noteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, noteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the note model
   */
  readonly fields: noteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for note.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__noteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the note model
   */
  interface noteFieldRefs {
    readonly id: FieldRef<"note", 'Int'>
    readonly title: FieldRef<"note", 'String'>
    readonly description: FieldRef<"note", 'String'>
    readonly userId: FieldRef<"note", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * note findUnique
   */
  export type noteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * Filter, which note to fetch.
     */
    where: noteWhereUniqueInput
  }

  /**
   * note findUniqueOrThrow
   */
  export type noteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * Filter, which note to fetch.
     */
    where: noteWhereUniqueInput
  }

  /**
   * note findFirst
   */
  export type noteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * Filter, which note to fetch.
     */
    where?: noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: noteOrderByWithRelationInput | noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * note findFirstOrThrow
   */
  export type noteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * Filter, which note to fetch.
     */
    where?: noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: noteOrderByWithRelationInput | noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for notes.
     */
    cursor?: noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of notes.
     */
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * note findMany
   */
  export type noteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * Filter, which notes to fetch.
     */
    where?: noteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of notes to fetch.
     */
    orderBy?: noteOrderByWithRelationInput | noteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing notes.
     */
    cursor?: noteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` notes.
     */
    skip?: number
    distinct?: NoteScalarFieldEnum | NoteScalarFieldEnum[]
  }

  /**
   * note create
   */
  export type noteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * The data needed to create a note.
     */
    data: XOR<noteCreateInput, noteUncheckedCreateInput>
  }

  /**
   * note createMany
   */
  export type noteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many notes.
     */
    data: noteCreateManyInput | noteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * note createManyAndReturn
   */
  export type noteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * The data used to create many notes.
     */
    data: noteCreateManyInput | noteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * note update
   */
  export type noteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * The data needed to update a note.
     */
    data: XOR<noteUpdateInput, noteUncheckedUpdateInput>
    /**
     * Choose, which note to update.
     */
    where: noteWhereUniqueInput
  }

  /**
   * note updateMany
   */
  export type noteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update notes.
     */
    data: XOR<noteUpdateManyMutationInput, noteUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: noteWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
  }

  /**
   * note updateManyAndReturn
   */
  export type noteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * The data used to update notes.
     */
    data: XOR<noteUpdateManyMutationInput, noteUncheckedUpdateManyInput>
    /**
     * Filter which notes to update
     */
    where?: noteWhereInput
    /**
     * Limit how many notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * note upsert
   */
  export type noteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * The filter to search for the note to update in case it exists.
     */
    where: noteWhereUniqueInput
    /**
     * In case the note found by the `where` argument doesn't exist, create a new note with this data.
     */
    create: XOR<noteCreateInput, noteUncheckedCreateInput>
    /**
     * In case the note was found with the provided `where` argument, update it with this data.
     */
    update: XOR<noteUpdateInput, noteUncheckedUpdateInput>
  }

  /**
   * note delete
   */
  export type noteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
    /**
     * Filter which note to delete.
     */
    where: noteWhereUniqueInput
  }

  /**
   * note deleteMany
   */
  export type noteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which notes to delete
     */
    where?: noteWhereInput
    /**
     * Limit how many notes to delete.
     */
    limit?: number
  }

  /**
   * note without action
   */
  export type noteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the note
     */
    select?: noteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the note
     */
    omit?: noteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: noteInclude<ExtArgs> | null
  }


  /**
   * Model subsription
   */

  export type AggregateSubsription = {
    _count: SubsriptionCountAggregateOutputType | null
    _avg: SubsriptionAvgAggregateOutputType | null
    _sum: SubsriptionSumAggregateOutputType | null
    _min: SubsriptionMinAggregateOutputType | null
    _max: SubsriptionMaxAggregateOutputType | null
  }

  export type SubsriptionAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type SubsriptionSumAggregateOutputType = {
    id: number | null
    amount: number | null
    userId: number | null
  }

  export type SubsriptionMinAggregateOutputType = {
    id: number | null
    subscriptio_type: $Enums.subscriptio_type | null
    amount: number | null
    payment_method: $Enums.payment_method | null
    userId: number | null
  }

  export type SubsriptionMaxAggregateOutputType = {
    id: number | null
    subscriptio_type: $Enums.subscriptio_type | null
    amount: number | null
    payment_method: $Enums.payment_method | null
    userId: number | null
  }

  export type SubsriptionCountAggregateOutputType = {
    id: number
    subscriptio_type: number
    amount: number
    payment_method: number
    userId: number
    _all: number
  }


  export type SubsriptionAvgAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type SubsriptionSumAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
  }

  export type SubsriptionMinAggregateInputType = {
    id?: true
    subscriptio_type?: true
    amount?: true
    payment_method?: true
    userId?: true
  }

  export type SubsriptionMaxAggregateInputType = {
    id?: true
    subscriptio_type?: true
    amount?: true
    payment_method?: true
    userId?: true
  }

  export type SubsriptionCountAggregateInputType = {
    id?: true
    subscriptio_type?: true
    amount?: true
    payment_method?: true
    userId?: true
    _all?: true
  }

  export type SubsriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subsription to aggregate.
     */
    where?: subsriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subsriptions to fetch.
     */
    orderBy?: subsriptionOrderByWithRelationInput | subsriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: subsriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subsriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subsriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned subsriptions
    **/
    _count?: true | SubsriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubsriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubsriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubsriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubsriptionMaxAggregateInputType
  }

  export type GetSubsriptionAggregateType<T extends SubsriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubsription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubsription[P]>
      : GetScalarType<T[P], AggregateSubsription[P]>
  }




  export type subsriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: subsriptionWhereInput
    orderBy?: subsriptionOrderByWithAggregationInput | subsriptionOrderByWithAggregationInput[]
    by: SubsriptionScalarFieldEnum[] | SubsriptionScalarFieldEnum
    having?: subsriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubsriptionCountAggregateInputType | true
    _avg?: SubsriptionAvgAggregateInputType
    _sum?: SubsriptionSumAggregateInputType
    _min?: SubsriptionMinAggregateInputType
    _max?: SubsriptionMaxAggregateInputType
  }

  export type SubsriptionGroupByOutputType = {
    id: number
    subscriptio_type: $Enums.subscriptio_type
    amount: number
    payment_method: $Enums.payment_method
    userId: number
    _count: SubsriptionCountAggregateOutputType | null
    _avg: SubsriptionAvgAggregateOutputType | null
    _sum: SubsriptionSumAggregateOutputType | null
    _min: SubsriptionMinAggregateOutputType | null
    _max: SubsriptionMaxAggregateOutputType | null
  }

  type GetSubsriptionGroupByPayload<T extends subsriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubsriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubsriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubsriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubsriptionGroupByOutputType[P]>
        }
      >
    >


  export type subsriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptio_type?: boolean
    amount?: boolean
    payment_method?: boolean
    userId?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subsription"]>

  export type subsriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptio_type?: boolean
    amount?: boolean
    payment_method?: boolean
    userId?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subsription"]>

  export type subsriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptio_type?: boolean
    amount?: boolean
    payment_method?: boolean
    userId?: boolean
    users?: boolean | userDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subsription"]>

  export type subsriptionSelectScalar = {
    id?: boolean
    subscriptio_type?: boolean
    amount?: boolean
    payment_method?: boolean
    userId?: boolean
  }

  export type subsriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriptio_type" | "amount" | "payment_method" | "userId", ExtArgs["result"]["subsription"]>
  export type subsriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
  }
  export type subsriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
  }
  export type subsriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | userDefaultArgs<ExtArgs>
  }

  export type $subsriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "subsription"
    objects: {
      users: Prisma.$userPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subscriptio_type: $Enums.subscriptio_type
      amount: number
      payment_method: $Enums.payment_method
      userId: number
    }, ExtArgs["result"]["subsription"]>
    composites: {}
  }

  type subsriptionGetPayload<S extends boolean | null | undefined | subsriptionDefaultArgs> = $Result.GetResult<Prisma.$subsriptionPayload, S>

  type subsriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<subsriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubsriptionCountAggregateInputType | true
    }

  export interface subsriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['subsription'], meta: { name: 'subsription' } }
    /**
     * Find zero or one Subsription that matches the filter.
     * @param {subsriptionFindUniqueArgs} args - Arguments to find a Subsription
     * @example
     * // Get one Subsription
     * const subsription = await prisma.subsription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends subsriptionFindUniqueArgs>(args: SelectSubset<T, subsriptionFindUniqueArgs<ExtArgs>>): Prisma__subsriptionClient<$Result.GetResult<Prisma.$subsriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subsription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {subsriptionFindUniqueOrThrowArgs} args - Arguments to find a Subsription
     * @example
     * // Get one Subsription
     * const subsription = await prisma.subsription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends subsriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, subsriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__subsriptionClient<$Result.GetResult<Prisma.$subsriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subsription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subsriptionFindFirstArgs} args - Arguments to find a Subsription
     * @example
     * // Get one Subsription
     * const subsription = await prisma.subsription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends subsriptionFindFirstArgs>(args?: SelectSubset<T, subsriptionFindFirstArgs<ExtArgs>>): Prisma__subsriptionClient<$Result.GetResult<Prisma.$subsriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subsription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subsriptionFindFirstOrThrowArgs} args - Arguments to find a Subsription
     * @example
     * // Get one Subsription
     * const subsription = await prisma.subsription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends subsriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, subsriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__subsriptionClient<$Result.GetResult<Prisma.$subsriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subsriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subsriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subsriptions
     * const subsriptions = await prisma.subsription.findMany()
     * 
     * // Get first 10 Subsriptions
     * const subsriptions = await prisma.subsription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subsriptionWithIdOnly = await prisma.subsription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends subsriptionFindManyArgs>(args?: SelectSubset<T, subsriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subsriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subsription.
     * @param {subsriptionCreateArgs} args - Arguments to create a Subsription.
     * @example
     * // Create one Subsription
     * const Subsription = await prisma.subsription.create({
     *   data: {
     *     // ... data to create a Subsription
     *   }
     * })
     * 
     */
    create<T extends subsriptionCreateArgs>(args: SelectSubset<T, subsriptionCreateArgs<ExtArgs>>): Prisma__subsriptionClient<$Result.GetResult<Prisma.$subsriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subsriptions.
     * @param {subsriptionCreateManyArgs} args - Arguments to create many Subsriptions.
     * @example
     * // Create many Subsriptions
     * const subsription = await prisma.subsription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends subsriptionCreateManyArgs>(args?: SelectSubset<T, subsriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subsriptions and returns the data saved in the database.
     * @param {subsriptionCreateManyAndReturnArgs} args - Arguments to create many Subsriptions.
     * @example
     * // Create many Subsriptions
     * const subsription = await prisma.subsription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subsriptions and only return the `id`
     * const subsriptionWithIdOnly = await prisma.subsription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends subsriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, subsriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subsriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subsription.
     * @param {subsriptionDeleteArgs} args - Arguments to delete one Subsription.
     * @example
     * // Delete one Subsription
     * const Subsription = await prisma.subsription.delete({
     *   where: {
     *     // ... filter to delete one Subsription
     *   }
     * })
     * 
     */
    delete<T extends subsriptionDeleteArgs>(args: SelectSubset<T, subsriptionDeleteArgs<ExtArgs>>): Prisma__subsriptionClient<$Result.GetResult<Prisma.$subsriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subsription.
     * @param {subsriptionUpdateArgs} args - Arguments to update one Subsription.
     * @example
     * // Update one Subsription
     * const subsription = await prisma.subsription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends subsriptionUpdateArgs>(args: SelectSubset<T, subsriptionUpdateArgs<ExtArgs>>): Prisma__subsriptionClient<$Result.GetResult<Prisma.$subsriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subsriptions.
     * @param {subsriptionDeleteManyArgs} args - Arguments to filter Subsriptions to delete.
     * @example
     * // Delete a few Subsriptions
     * const { count } = await prisma.subsription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends subsriptionDeleteManyArgs>(args?: SelectSubset<T, subsriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subsriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subsriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subsriptions
     * const subsription = await prisma.subsription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends subsriptionUpdateManyArgs>(args: SelectSubset<T, subsriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subsriptions and returns the data updated in the database.
     * @param {subsriptionUpdateManyAndReturnArgs} args - Arguments to update many Subsriptions.
     * @example
     * // Update many Subsriptions
     * const subsription = await prisma.subsription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subsriptions and only return the `id`
     * const subsriptionWithIdOnly = await prisma.subsription.updateManyAndReturn({
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
    updateManyAndReturn<T extends subsriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, subsriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$subsriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subsription.
     * @param {subsriptionUpsertArgs} args - Arguments to update or create a Subsription.
     * @example
     * // Update or create a Subsription
     * const subsription = await prisma.subsription.upsert({
     *   create: {
     *     // ... data to create a Subsription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subsription we want to update
     *   }
     * })
     */
    upsert<T extends subsriptionUpsertArgs>(args: SelectSubset<T, subsriptionUpsertArgs<ExtArgs>>): Prisma__subsriptionClient<$Result.GetResult<Prisma.$subsriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subsriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subsriptionCountArgs} args - Arguments to filter Subsriptions to count.
     * @example
     * // Count the number of Subsriptions
     * const count = await prisma.subsription.count({
     *   where: {
     *     // ... the filter for the Subsriptions we want to count
     *   }
     * })
    **/
    count<T extends subsriptionCountArgs>(
      args?: Subset<T, subsriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubsriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subsription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubsriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubsriptionAggregateArgs>(args: Subset<T, SubsriptionAggregateArgs>): Prisma.PrismaPromise<GetSubsriptionAggregateType<T>>

    /**
     * Group by Subsription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {subsriptionGroupByArgs} args - Group by arguments.
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
      T extends subsriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: subsriptionGroupByArgs['orderBy'] }
        : { orderBy?: subsriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, subsriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubsriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the subsription model
   */
  readonly fields: subsriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for subsription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__subsriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends userDefaultArgs<ExtArgs> = {}>(args?: Subset<T, userDefaultArgs<ExtArgs>>): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the subsription model
   */
  interface subsriptionFieldRefs {
    readonly id: FieldRef<"subsription", 'Int'>
    readonly subscriptio_type: FieldRef<"subsription", 'subscriptio_type'>
    readonly amount: FieldRef<"subsription", 'Int'>
    readonly payment_method: FieldRef<"subsription", 'payment_method'>
    readonly userId: FieldRef<"subsription", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * subsription findUnique
   */
  export type subsriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subsription
     */
    select?: subsriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subsription
     */
    omit?: subsriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subsriptionInclude<ExtArgs> | null
    /**
     * Filter, which subsription to fetch.
     */
    where: subsriptionWhereUniqueInput
  }

  /**
   * subsription findUniqueOrThrow
   */
  export type subsriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subsription
     */
    select?: subsriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subsription
     */
    omit?: subsriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subsriptionInclude<ExtArgs> | null
    /**
     * Filter, which subsription to fetch.
     */
    where: subsriptionWhereUniqueInput
  }

  /**
   * subsription findFirst
   */
  export type subsriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subsription
     */
    select?: subsriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subsription
     */
    omit?: subsriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subsriptionInclude<ExtArgs> | null
    /**
     * Filter, which subsription to fetch.
     */
    where?: subsriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subsriptions to fetch.
     */
    orderBy?: subsriptionOrderByWithRelationInput | subsriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subsriptions.
     */
    cursor?: subsriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subsriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subsriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subsriptions.
     */
    distinct?: SubsriptionScalarFieldEnum | SubsriptionScalarFieldEnum[]
  }

  /**
   * subsription findFirstOrThrow
   */
  export type subsriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subsription
     */
    select?: subsriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subsription
     */
    omit?: subsriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subsriptionInclude<ExtArgs> | null
    /**
     * Filter, which subsription to fetch.
     */
    where?: subsriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subsriptions to fetch.
     */
    orderBy?: subsriptionOrderByWithRelationInput | subsriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for subsriptions.
     */
    cursor?: subsriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subsriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subsriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of subsriptions.
     */
    distinct?: SubsriptionScalarFieldEnum | SubsriptionScalarFieldEnum[]
  }

  /**
   * subsription findMany
   */
  export type subsriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subsription
     */
    select?: subsriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subsription
     */
    omit?: subsriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subsriptionInclude<ExtArgs> | null
    /**
     * Filter, which subsriptions to fetch.
     */
    where?: subsriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of subsriptions to fetch.
     */
    orderBy?: subsriptionOrderByWithRelationInput | subsriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing subsriptions.
     */
    cursor?: subsriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` subsriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` subsriptions.
     */
    skip?: number
    distinct?: SubsriptionScalarFieldEnum | SubsriptionScalarFieldEnum[]
  }

  /**
   * subsription create
   */
  export type subsriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subsription
     */
    select?: subsriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subsription
     */
    omit?: subsriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subsriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a subsription.
     */
    data: XOR<subsriptionCreateInput, subsriptionUncheckedCreateInput>
  }

  /**
   * subsription createMany
   */
  export type subsriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many subsriptions.
     */
    data: subsriptionCreateManyInput | subsriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * subsription createManyAndReturn
   */
  export type subsriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subsription
     */
    select?: subsriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subsription
     */
    omit?: subsriptionOmit<ExtArgs> | null
    /**
     * The data used to create many subsriptions.
     */
    data: subsriptionCreateManyInput | subsriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subsriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * subsription update
   */
  export type subsriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subsription
     */
    select?: subsriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subsription
     */
    omit?: subsriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subsriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a subsription.
     */
    data: XOR<subsriptionUpdateInput, subsriptionUncheckedUpdateInput>
    /**
     * Choose, which subsription to update.
     */
    where: subsriptionWhereUniqueInput
  }

  /**
   * subsription updateMany
   */
  export type subsriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update subsriptions.
     */
    data: XOR<subsriptionUpdateManyMutationInput, subsriptionUncheckedUpdateManyInput>
    /**
     * Filter which subsriptions to update
     */
    where?: subsriptionWhereInput
    /**
     * Limit how many subsriptions to update.
     */
    limit?: number
  }

  /**
   * subsription updateManyAndReturn
   */
  export type subsriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subsription
     */
    select?: subsriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the subsription
     */
    omit?: subsriptionOmit<ExtArgs> | null
    /**
     * The data used to update subsriptions.
     */
    data: XOR<subsriptionUpdateManyMutationInput, subsriptionUncheckedUpdateManyInput>
    /**
     * Filter which subsriptions to update
     */
    where?: subsriptionWhereInput
    /**
     * Limit how many subsriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subsriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * subsription upsert
   */
  export type subsriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subsription
     */
    select?: subsriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subsription
     */
    omit?: subsriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subsriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the subsription to update in case it exists.
     */
    where: subsriptionWhereUniqueInput
    /**
     * In case the subsription found by the `where` argument doesn't exist, create a new subsription with this data.
     */
    create: XOR<subsriptionCreateInput, subsriptionUncheckedCreateInput>
    /**
     * In case the subsription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<subsriptionUpdateInput, subsriptionUncheckedUpdateInput>
  }

  /**
   * subsription delete
   */
  export type subsriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subsription
     */
    select?: subsriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subsription
     */
    omit?: subsriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subsriptionInclude<ExtArgs> | null
    /**
     * Filter which subsription to delete.
     */
    where: subsriptionWhereUniqueInput
  }

  /**
   * subsription deleteMany
   */
  export type subsriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which subsriptions to delete
     */
    where?: subsriptionWhereInput
    /**
     * Limit how many subsriptions to delete.
     */
    limit?: number
  }

  /**
   * subsription without action
   */
  export type subsriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the subsription
     */
    select?: subsriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the subsription
     */
    omit?: subsriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: subsriptionInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NoteScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    userId: 'userId'
  };

  export type NoteScalarFieldEnum = (typeof NoteScalarFieldEnum)[keyof typeof NoteScalarFieldEnum]


  export const SubsriptionScalarFieldEnum: {
    id: 'id',
    subscriptio_type: 'subscriptio_type',
    amount: 'amount',
    payment_method: 'payment_method',
    userId: 'userId'
  };

  export type SubsriptionScalarFieldEnum = (typeof SubsriptionScalarFieldEnum)[keyof typeof SubsriptionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'subscriptio_type'
   */
  export type Enumsubscriptio_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'subscriptio_type'>
    


  /**
   * Reference to a field of type 'subscriptio_type[]'
   */
  export type ListEnumsubscriptio_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'subscriptio_type[]'>
    


  /**
   * Reference to a field of type 'payment_method'
   */
  export type Enumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method'>
    


  /**
   * Reference to a field of type 'payment_method[]'
   */
  export type ListEnumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    id?: IntFilter<"user"> | number
    name?: StringNullableFilter<"user"> | string | null
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    notes?: NoteListRelationFilter
    subscriptions?: SubsriptionListRelationFilter
  }

  export type userOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    notes?: noteOrderByRelationAggregateInput
    subscriptions?: subsriptionOrderByRelationAggregateInput
  }

  export type userWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: userWhereInput | userWhereInput[]
    OR?: userWhereInput[]
    NOT?: userWhereInput | userWhereInput[]
    name?: StringNullableFilter<"user"> | string | null
    email?: StringFilter<"user"> | string
    password?: StringFilter<"user"> | string
    notes?: NoteListRelationFilter
    subscriptions?: SubsriptionListRelationFilter
  }, "id">

  export type userOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: userCountOrderByAggregateInput
    _avg?: userAvgOrderByAggregateInput
    _max?: userMaxOrderByAggregateInput
    _min?: userMinOrderByAggregateInput
    _sum?: userSumOrderByAggregateInput
  }

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    OR?: userScalarWhereWithAggregatesInput[]
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"user"> | number
    name?: StringNullableWithAggregatesFilter<"user"> | string | null
    email?: StringWithAggregatesFilter<"user"> | string
    password?: StringWithAggregatesFilter<"user"> | string
  }

  export type noteWhereInput = {
    AND?: noteWhereInput | noteWhereInput[]
    OR?: noteWhereInput[]
    NOT?: noteWhereInput | noteWhereInput[]
    id?: IntFilter<"note"> | number
    title?: StringFilter<"note"> | string
    description?: StringFilter<"note"> | string
    userId?: IntFilter<"note"> | number
    users?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type noteOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    users?: userOrderByWithRelationInput
  }

  export type noteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: noteWhereInput | noteWhereInput[]
    OR?: noteWhereInput[]
    NOT?: noteWhereInput | noteWhereInput[]
    title?: StringFilter<"note"> | string
    description?: StringFilter<"note"> | string
    userId?: IntFilter<"note"> | number
    users?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type noteOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    _count?: noteCountOrderByAggregateInput
    _avg?: noteAvgOrderByAggregateInput
    _max?: noteMaxOrderByAggregateInput
    _min?: noteMinOrderByAggregateInput
    _sum?: noteSumOrderByAggregateInput
  }

  export type noteScalarWhereWithAggregatesInput = {
    AND?: noteScalarWhereWithAggregatesInput | noteScalarWhereWithAggregatesInput[]
    OR?: noteScalarWhereWithAggregatesInput[]
    NOT?: noteScalarWhereWithAggregatesInput | noteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"note"> | number
    title?: StringWithAggregatesFilter<"note"> | string
    description?: StringWithAggregatesFilter<"note"> | string
    userId?: IntWithAggregatesFilter<"note"> | number
  }

  export type subsriptionWhereInput = {
    AND?: subsriptionWhereInput | subsriptionWhereInput[]
    OR?: subsriptionWhereInput[]
    NOT?: subsriptionWhereInput | subsriptionWhereInput[]
    id?: IntFilter<"subsription"> | number
    subscriptio_type?: Enumsubscriptio_typeFilter<"subsription"> | $Enums.subscriptio_type
    amount?: IntFilter<"subsription"> | number
    payment_method?: Enumpayment_methodFilter<"subsription"> | $Enums.payment_method
    userId?: IntFilter<"subsription"> | number
    users?: XOR<UserScalarRelationFilter, userWhereInput>
  }

  export type subsriptionOrderByWithRelationInput = {
    id?: SortOrder
    subscriptio_type?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    userId?: SortOrder
    users?: userOrderByWithRelationInput
  }

  export type subsriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: subsriptionWhereInput | subsriptionWhereInput[]
    OR?: subsriptionWhereInput[]
    NOT?: subsriptionWhereInput | subsriptionWhereInput[]
    subscriptio_type?: Enumsubscriptio_typeFilter<"subsription"> | $Enums.subscriptio_type
    amount?: IntFilter<"subsription"> | number
    payment_method?: Enumpayment_methodFilter<"subsription"> | $Enums.payment_method
    userId?: IntFilter<"subsription"> | number
    users?: XOR<UserScalarRelationFilter, userWhereInput>
  }, "id">

  export type subsriptionOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptio_type?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    userId?: SortOrder
    _count?: subsriptionCountOrderByAggregateInput
    _avg?: subsriptionAvgOrderByAggregateInput
    _max?: subsriptionMaxOrderByAggregateInput
    _min?: subsriptionMinOrderByAggregateInput
    _sum?: subsriptionSumOrderByAggregateInput
  }

  export type subsriptionScalarWhereWithAggregatesInput = {
    AND?: subsriptionScalarWhereWithAggregatesInput | subsriptionScalarWhereWithAggregatesInput[]
    OR?: subsriptionScalarWhereWithAggregatesInput[]
    NOT?: subsriptionScalarWhereWithAggregatesInput | subsriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"subsription"> | number
    subscriptio_type?: Enumsubscriptio_typeWithAggregatesFilter<"subsription"> | $Enums.subscriptio_type
    amount?: IntWithAggregatesFilter<"subsription"> | number
    payment_method?: Enumpayment_methodWithAggregatesFilter<"subsription"> | $Enums.payment_method
    userId?: IntWithAggregatesFilter<"subsription"> | number
  }

  export type userCreateInput = {
    name?: string | null
    email: string
    password: string
    notes?: noteCreateNestedManyWithoutUsersInput
    subscriptions?: subsriptionCreateNestedManyWithoutUsersInput
  }

  export type userUncheckedCreateInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    notes?: noteUncheckedCreateNestedManyWithoutUsersInput
    subscriptions?: subsriptionUncheckedCreateNestedManyWithoutUsersInput
  }

  export type userUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: noteUpdateManyWithoutUsersNestedInput
    subscriptions?: subsriptionUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: noteUncheckedUpdateManyWithoutUsersNestedInput
    subscriptions?: subsriptionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type userCreateManyInput = {
    id?: number
    name?: string | null
    email: string
    password: string
  }

  export type userUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type userUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type noteCreateInput = {
    title: string
    description: string
    users: userCreateNestedOneWithoutNotesInput
  }

  export type noteUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    userId: number
  }

  export type noteUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    users?: userUpdateOneRequiredWithoutNotesNestedInput
  }

  export type noteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type noteCreateManyInput = {
    id?: number
    title: string
    description: string
    userId: number
  }

  export type noteUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type noteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type subsriptionCreateInput = {
    subscriptio_type: $Enums.subscriptio_type
    amount: number
    payment_method: $Enums.payment_method
    users: userCreateNestedOneWithoutSubscriptionsInput
  }

  export type subsriptionUncheckedCreateInput = {
    id?: number
    subscriptio_type: $Enums.subscriptio_type
    amount: number
    payment_method: $Enums.payment_method
    userId: number
  }

  export type subsriptionUpdateInput = {
    subscriptio_type?: Enumsubscriptio_typeFieldUpdateOperationsInput | $Enums.subscriptio_type
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    users?: userUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type subsriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptio_type?: Enumsubscriptio_typeFieldUpdateOperationsInput | $Enums.subscriptio_type
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type subsriptionCreateManyInput = {
    id?: number
    subscriptio_type: $Enums.subscriptio_type
    amount: number
    payment_method: $Enums.payment_method
    userId: number
  }

  export type subsriptionUpdateManyMutationInput = {
    subscriptio_type?: Enumsubscriptio_typeFieldUpdateOperationsInput | $Enums.subscriptio_type
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
  }

  export type subsriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptio_type?: Enumsubscriptio_typeFieldUpdateOperationsInput | $Enums.subscriptio_type
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
    userId?: IntFieldUpdateOperationsInput | number
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

  export type NoteListRelationFilter = {
    every?: noteWhereInput
    some?: noteWhereInput
    none?: noteWhereInput
  }

  export type SubsriptionListRelationFilter = {
    every?: subsriptionWhereInput
    some?: subsriptionWhereInput
    none?: subsriptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type noteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type subsriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type userCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type userSumOrderByAggregateInput = {
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

  export type UserScalarRelationFilter = {
    is?: userWhereInput
    isNot?: userWhereInput
  }

  export type noteCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type noteAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type noteMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type noteMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type noteSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type Enumsubscriptio_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.subscriptio_type | Enumsubscriptio_typeFieldRefInput<$PrismaModel>
    in?: $Enums.subscriptio_type[] | ListEnumsubscriptio_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.subscriptio_type[] | ListEnumsubscriptio_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumsubscriptio_typeFilter<$PrismaModel> | $Enums.subscriptio_type
  }

  export type Enumpayment_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_methodFilter<$PrismaModel> | $Enums.payment_method
  }

  export type subsriptionCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptio_type?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    userId?: SortOrder
  }

  export type subsriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type subsriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptio_type?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    userId?: SortOrder
  }

  export type subsriptionMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptio_type?: SortOrder
    amount?: SortOrder
    payment_method?: SortOrder
    userId?: SortOrder
  }

  export type subsriptionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
  }

  export type Enumsubscriptio_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.subscriptio_type | Enumsubscriptio_typeFieldRefInput<$PrismaModel>
    in?: $Enums.subscriptio_type[] | ListEnumsubscriptio_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.subscriptio_type[] | ListEnumsubscriptio_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumsubscriptio_typeWithAggregatesFilter<$PrismaModel> | $Enums.subscriptio_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsubscriptio_typeFilter<$PrismaModel>
    _max?: NestedEnumsubscriptio_typeFilter<$PrismaModel>
  }

  export type Enumpayment_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel> | $Enums.payment_method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_methodFilter<$PrismaModel>
    _max?: NestedEnumpayment_methodFilter<$PrismaModel>
  }

  export type noteCreateNestedManyWithoutUsersInput = {
    create?: XOR<noteCreateWithoutUsersInput, noteUncheckedCreateWithoutUsersInput> | noteCreateWithoutUsersInput[] | noteUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: noteCreateOrConnectWithoutUsersInput | noteCreateOrConnectWithoutUsersInput[]
    createMany?: noteCreateManyUsersInputEnvelope
    connect?: noteWhereUniqueInput | noteWhereUniqueInput[]
  }

  export type subsriptionCreateNestedManyWithoutUsersInput = {
    create?: XOR<subsriptionCreateWithoutUsersInput, subsriptionUncheckedCreateWithoutUsersInput> | subsriptionCreateWithoutUsersInput[] | subsriptionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: subsriptionCreateOrConnectWithoutUsersInput | subsriptionCreateOrConnectWithoutUsersInput[]
    createMany?: subsriptionCreateManyUsersInputEnvelope
    connect?: subsriptionWhereUniqueInput | subsriptionWhereUniqueInput[]
  }

  export type noteUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<noteCreateWithoutUsersInput, noteUncheckedCreateWithoutUsersInput> | noteCreateWithoutUsersInput[] | noteUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: noteCreateOrConnectWithoutUsersInput | noteCreateOrConnectWithoutUsersInput[]
    createMany?: noteCreateManyUsersInputEnvelope
    connect?: noteWhereUniqueInput | noteWhereUniqueInput[]
  }

  export type subsriptionUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<subsriptionCreateWithoutUsersInput, subsriptionUncheckedCreateWithoutUsersInput> | subsriptionCreateWithoutUsersInput[] | subsriptionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: subsriptionCreateOrConnectWithoutUsersInput | subsriptionCreateOrConnectWithoutUsersInput[]
    createMany?: subsriptionCreateManyUsersInputEnvelope
    connect?: subsriptionWhereUniqueInput | subsriptionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type noteUpdateManyWithoutUsersNestedInput = {
    create?: XOR<noteCreateWithoutUsersInput, noteUncheckedCreateWithoutUsersInput> | noteCreateWithoutUsersInput[] | noteUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: noteCreateOrConnectWithoutUsersInput | noteCreateOrConnectWithoutUsersInput[]
    upsert?: noteUpsertWithWhereUniqueWithoutUsersInput | noteUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: noteCreateManyUsersInputEnvelope
    set?: noteWhereUniqueInput | noteWhereUniqueInput[]
    disconnect?: noteWhereUniqueInput | noteWhereUniqueInput[]
    delete?: noteWhereUniqueInput | noteWhereUniqueInput[]
    connect?: noteWhereUniqueInput | noteWhereUniqueInput[]
    update?: noteUpdateWithWhereUniqueWithoutUsersInput | noteUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: noteUpdateManyWithWhereWithoutUsersInput | noteUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: noteScalarWhereInput | noteScalarWhereInput[]
  }

  export type subsriptionUpdateManyWithoutUsersNestedInput = {
    create?: XOR<subsriptionCreateWithoutUsersInput, subsriptionUncheckedCreateWithoutUsersInput> | subsriptionCreateWithoutUsersInput[] | subsriptionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: subsriptionCreateOrConnectWithoutUsersInput | subsriptionCreateOrConnectWithoutUsersInput[]
    upsert?: subsriptionUpsertWithWhereUniqueWithoutUsersInput | subsriptionUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: subsriptionCreateManyUsersInputEnvelope
    set?: subsriptionWhereUniqueInput | subsriptionWhereUniqueInput[]
    disconnect?: subsriptionWhereUniqueInput | subsriptionWhereUniqueInput[]
    delete?: subsriptionWhereUniqueInput | subsriptionWhereUniqueInput[]
    connect?: subsriptionWhereUniqueInput | subsriptionWhereUniqueInput[]
    update?: subsriptionUpdateWithWhereUniqueWithoutUsersInput | subsriptionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: subsriptionUpdateManyWithWhereWithoutUsersInput | subsriptionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: subsriptionScalarWhereInput | subsriptionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type noteUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<noteCreateWithoutUsersInput, noteUncheckedCreateWithoutUsersInput> | noteCreateWithoutUsersInput[] | noteUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: noteCreateOrConnectWithoutUsersInput | noteCreateOrConnectWithoutUsersInput[]
    upsert?: noteUpsertWithWhereUniqueWithoutUsersInput | noteUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: noteCreateManyUsersInputEnvelope
    set?: noteWhereUniqueInput | noteWhereUniqueInput[]
    disconnect?: noteWhereUniqueInput | noteWhereUniqueInput[]
    delete?: noteWhereUniqueInput | noteWhereUniqueInput[]
    connect?: noteWhereUniqueInput | noteWhereUniqueInput[]
    update?: noteUpdateWithWhereUniqueWithoutUsersInput | noteUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: noteUpdateManyWithWhereWithoutUsersInput | noteUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: noteScalarWhereInput | noteScalarWhereInput[]
  }

  export type subsriptionUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<subsriptionCreateWithoutUsersInput, subsriptionUncheckedCreateWithoutUsersInput> | subsriptionCreateWithoutUsersInput[] | subsriptionUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: subsriptionCreateOrConnectWithoutUsersInput | subsriptionCreateOrConnectWithoutUsersInput[]
    upsert?: subsriptionUpsertWithWhereUniqueWithoutUsersInput | subsriptionUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: subsriptionCreateManyUsersInputEnvelope
    set?: subsriptionWhereUniqueInput | subsriptionWhereUniqueInput[]
    disconnect?: subsriptionWhereUniqueInput | subsriptionWhereUniqueInput[]
    delete?: subsriptionWhereUniqueInput | subsriptionWhereUniqueInput[]
    connect?: subsriptionWhereUniqueInput | subsriptionWhereUniqueInput[]
    update?: subsriptionUpdateWithWhereUniqueWithoutUsersInput | subsriptionUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: subsriptionUpdateManyWithWhereWithoutUsersInput | subsriptionUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: subsriptionScalarWhereInput | subsriptionScalarWhereInput[]
  }

  export type userCreateNestedOneWithoutNotesInput = {
    create?: XOR<userCreateWithoutNotesInput, userUncheckedCreateWithoutNotesInput>
    connectOrCreate?: userCreateOrConnectWithoutNotesInput
    connect?: userWhereUniqueInput
  }

  export type userUpdateOneRequiredWithoutNotesNestedInput = {
    create?: XOR<userCreateWithoutNotesInput, userUncheckedCreateWithoutNotesInput>
    connectOrCreate?: userCreateOrConnectWithoutNotesInput
    upsert?: userUpsertWithoutNotesInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutNotesInput, userUpdateWithoutNotesInput>, userUncheckedUpdateWithoutNotesInput>
  }

  export type userCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<userCreateWithoutSubscriptionsInput, userUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: userCreateOrConnectWithoutSubscriptionsInput
    connect?: userWhereUniqueInput
  }

  export type Enumsubscriptio_typeFieldUpdateOperationsInput = {
    set?: $Enums.subscriptio_type
  }

  export type Enumpayment_methodFieldUpdateOperationsInput = {
    set?: $Enums.payment_method
  }

  export type userUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<userCreateWithoutSubscriptionsInput, userUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: userCreateOrConnectWithoutSubscriptionsInput
    upsert?: userUpsertWithoutSubscriptionsInput
    connect?: userWhereUniqueInput
    update?: XOR<XOR<userUpdateToOneWithWhereWithoutSubscriptionsInput, userUpdateWithoutSubscriptionsInput>, userUncheckedUpdateWithoutSubscriptionsInput>
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

  export type NestedEnumsubscriptio_typeFilter<$PrismaModel = never> = {
    equals?: $Enums.subscriptio_type | Enumsubscriptio_typeFieldRefInput<$PrismaModel>
    in?: $Enums.subscriptio_type[] | ListEnumsubscriptio_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.subscriptio_type[] | ListEnumsubscriptio_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumsubscriptio_typeFilter<$PrismaModel> | $Enums.subscriptio_type
  }

  export type NestedEnumpayment_methodFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_methodFilter<$PrismaModel> | $Enums.payment_method
  }

  export type NestedEnumsubscriptio_typeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.subscriptio_type | Enumsubscriptio_typeFieldRefInput<$PrismaModel>
    in?: $Enums.subscriptio_type[] | ListEnumsubscriptio_typeFieldRefInput<$PrismaModel>
    notIn?: $Enums.subscriptio_type[] | ListEnumsubscriptio_typeFieldRefInput<$PrismaModel>
    not?: NestedEnumsubscriptio_typeWithAggregatesFilter<$PrismaModel> | $Enums.subscriptio_type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumsubscriptio_typeFilter<$PrismaModel>
    _max?: NestedEnumsubscriptio_typeFilter<$PrismaModel>
  }

  export type NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.payment_method | Enumpayment_methodFieldRefInput<$PrismaModel>
    in?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    notIn?: $Enums.payment_method[] | ListEnumpayment_methodFieldRefInput<$PrismaModel>
    not?: NestedEnumpayment_methodWithAggregatesFilter<$PrismaModel> | $Enums.payment_method
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumpayment_methodFilter<$PrismaModel>
    _max?: NestedEnumpayment_methodFilter<$PrismaModel>
  }

  export type noteCreateWithoutUsersInput = {
    title: string
    description: string
  }

  export type noteUncheckedCreateWithoutUsersInput = {
    id?: number
    title: string
    description: string
  }

  export type noteCreateOrConnectWithoutUsersInput = {
    where: noteWhereUniqueInput
    create: XOR<noteCreateWithoutUsersInput, noteUncheckedCreateWithoutUsersInput>
  }

  export type noteCreateManyUsersInputEnvelope = {
    data: noteCreateManyUsersInput | noteCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type subsriptionCreateWithoutUsersInput = {
    subscriptio_type: $Enums.subscriptio_type
    amount: number
    payment_method: $Enums.payment_method
  }

  export type subsriptionUncheckedCreateWithoutUsersInput = {
    id?: number
    subscriptio_type: $Enums.subscriptio_type
    amount: number
    payment_method: $Enums.payment_method
  }

  export type subsriptionCreateOrConnectWithoutUsersInput = {
    where: subsriptionWhereUniqueInput
    create: XOR<subsriptionCreateWithoutUsersInput, subsriptionUncheckedCreateWithoutUsersInput>
  }

  export type subsriptionCreateManyUsersInputEnvelope = {
    data: subsriptionCreateManyUsersInput | subsriptionCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type noteUpsertWithWhereUniqueWithoutUsersInput = {
    where: noteWhereUniqueInput
    update: XOR<noteUpdateWithoutUsersInput, noteUncheckedUpdateWithoutUsersInput>
    create: XOR<noteCreateWithoutUsersInput, noteUncheckedCreateWithoutUsersInput>
  }

  export type noteUpdateWithWhereUniqueWithoutUsersInput = {
    where: noteWhereUniqueInput
    data: XOR<noteUpdateWithoutUsersInput, noteUncheckedUpdateWithoutUsersInput>
  }

  export type noteUpdateManyWithWhereWithoutUsersInput = {
    where: noteScalarWhereInput
    data: XOR<noteUpdateManyMutationInput, noteUncheckedUpdateManyWithoutUsersInput>
  }

  export type noteScalarWhereInput = {
    AND?: noteScalarWhereInput | noteScalarWhereInput[]
    OR?: noteScalarWhereInput[]
    NOT?: noteScalarWhereInput | noteScalarWhereInput[]
    id?: IntFilter<"note"> | number
    title?: StringFilter<"note"> | string
    description?: StringFilter<"note"> | string
    userId?: IntFilter<"note"> | number
  }

  export type subsriptionUpsertWithWhereUniqueWithoutUsersInput = {
    where: subsriptionWhereUniqueInput
    update: XOR<subsriptionUpdateWithoutUsersInput, subsriptionUncheckedUpdateWithoutUsersInput>
    create: XOR<subsriptionCreateWithoutUsersInput, subsriptionUncheckedCreateWithoutUsersInput>
  }

  export type subsriptionUpdateWithWhereUniqueWithoutUsersInput = {
    where: subsriptionWhereUniqueInput
    data: XOR<subsriptionUpdateWithoutUsersInput, subsriptionUncheckedUpdateWithoutUsersInput>
  }

  export type subsriptionUpdateManyWithWhereWithoutUsersInput = {
    where: subsriptionScalarWhereInput
    data: XOR<subsriptionUpdateManyMutationInput, subsriptionUncheckedUpdateManyWithoutUsersInput>
  }

  export type subsriptionScalarWhereInput = {
    AND?: subsriptionScalarWhereInput | subsriptionScalarWhereInput[]
    OR?: subsriptionScalarWhereInput[]
    NOT?: subsriptionScalarWhereInput | subsriptionScalarWhereInput[]
    id?: IntFilter<"subsription"> | number
    subscriptio_type?: Enumsubscriptio_typeFilter<"subsription"> | $Enums.subscriptio_type
    amount?: IntFilter<"subsription"> | number
    payment_method?: Enumpayment_methodFilter<"subsription"> | $Enums.payment_method
    userId?: IntFilter<"subsription"> | number
  }

  export type userCreateWithoutNotesInput = {
    name?: string | null
    email: string
    password: string
    subscriptions?: subsriptionCreateNestedManyWithoutUsersInput
  }

  export type userUncheckedCreateWithoutNotesInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    subscriptions?: subsriptionUncheckedCreateNestedManyWithoutUsersInput
  }

  export type userCreateOrConnectWithoutNotesInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutNotesInput, userUncheckedCreateWithoutNotesInput>
  }

  export type userUpsertWithoutNotesInput = {
    update: XOR<userUpdateWithoutNotesInput, userUncheckedUpdateWithoutNotesInput>
    create: XOR<userCreateWithoutNotesInput, userUncheckedCreateWithoutNotesInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutNotesInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutNotesInput, userUncheckedUpdateWithoutNotesInput>
  }

  export type userUpdateWithoutNotesInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subscriptions?: subsriptionUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutNotesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    subscriptions?: subsriptionUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type userCreateWithoutSubscriptionsInput = {
    name?: string | null
    email: string
    password: string
    notes?: noteCreateNestedManyWithoutUsersInput
  }

  export type userUncheckedCreateWithoutSubscriptionsInput = {
    id?: number
    name?: string | null
    email: string
    password: string
    notes?: noteUncheckedCreateNestedManyWithoutUsersInput
  }

  export type userCreateOrConnectWithoutSubscriptionsInput = {
    where: userWhereUniqueInput
    create: XOR<userCreateWithoutSubscriptionsInput, userUncheckedCreateWithoutSubscriptionsInput>
  }

  export type userUpsertWithoutSubscriptionsInput = {
    update: XOR<userUpdateWithoutSubscriptionsInput, userUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<userCreateWithoutSubscriptionsInput, userUncheckedCreateWithoutSubscriptionsInput>
    where?: userWhereInput
  }

  export type userUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: userWhereInput
    data: XOR<userUpdateWithoutSubscriptionsInput, userUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type userUpdateWithoutSubscriptionsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: noteUpdateManyWithoutUsersNestedInput
  }

  export type userUncheckedUpdateWithoutSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    notes?: noteUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type noteCreateManyUsersInput = {
    id?: number
    title: string
    description: string
  }

  export type subsriptionCreateManyUsersInput = {
    id?: number
    subscriptio_type: $Enums.subscriptio_type
    amount: number
    payment_method: $Enums.payment_method
  }

  export type noteUpdateWithoutUsersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type noteUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type noteUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type subsriptionUpdateWithoutUsersInput = {
    subscriptio_type?: Enumsubscriptio_typeFieldUpdateOperationsInput | $Enums.subscriptio_type
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
  }

  export type subsriptionUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptio_type?: Enumsubscriptio_typeFieldUpdateOperationsInput | $Enums.subscriptio_type
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
  }

  export type subsriptionUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptio_type?: Enumsubscriptio_typeFieldUpdateOperationsInput | $Enums.subscriptio_type
    amount?: IntFieldUpdateOperationsInput | number
    payment_method?: Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method
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