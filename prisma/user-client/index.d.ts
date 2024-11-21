
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
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model UserLoginLog
 * 
 */
export type UserLoginLog = $Result.DefaultSelection<Prisma.$UserLoginLogPayload>
/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model CompanyBranch
 * 
 */
export type CompanyBranch = $Result.DefaultSelection<Prisma.$CompanyBranchPayload>

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs>;

  /**
   * `prisma.userLoginLog`: Exposes CRUD operations for the **UserLoginLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLoginLogs
    * const userLoginLogs = await prisma.userLoginLog.findMany()
    * ```
    */
  get userLoginLog(): Prisma.UserLoginLogDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs>;

  /**
   * `prisma.companyBranch`: Exposes CRUD operations for the **CompanyBranch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyBranches
    * const companyBranches = await prisma.companyBranch.findMany()
    * ```
    */
  get companyBranch(): Prisma.CompanyBranchDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    UserRole: 'UserRole',
    UserLoginLog: 'UserLoginLog',
    Company: 'Company',
    CompanyBranch: 'CompanyBranch'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "userRole" | "userLoginLog" | "company" | "companyBranch"
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
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      UserLoginLog: {
        payload: Prisma.$UserLoginLogPayload<ExtArgs>
        fields: Prisma.UserLoginLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLoginLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLoginLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginLogPayload>
          }
          findFirst: {
            args: Prisma.UserLoginLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLoginLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginLogPayload>
          }
          findMany: {
            args: Prisma.UserLoginLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginLogPayload>[]
          }
          create: {
            args: Prisma.UserLoginLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginLogPayload>
          }
          createMany: {
            args: Prisma.UserLoginLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserLoginLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginLogPayload>[]
          }
          delete: {
            args: Prisma.UserLoginLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginLogPayload>
          }
          update: {
            args: Prisma.UserLoginLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginLogPayload>
          }
          deleteMany: {
            args: Prisma.UserLoginLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserLoginLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserLoginLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserLoginLogPayload>
          }
          aggregate: {
            args: Prisma.UserLoginLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserLoginLog>
          }
          groupBy: {
            args: Prisma.UserLoginLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserLoginLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserLoginLogCountArgs<ExtArgs>
            result: $Utils.Optional<UserLoginLogCountAggregateOutputType> | number
          }
        }
      }
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      CompanyBranch: {
        payload: Prisma.$CompanyBranchPayload<ExtArgs>
        fields: Prisma.CompanyBranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyBranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyBranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBranchPayload>
          }
          findFirst: {
            args: Prisma.CompanyBranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyBranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBranchPayload>
          }
          findMany: {
            args: Prisma.CompanyBranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBranchPayload>[]
          }
          create: {
            args: Prisma.CompanyBranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBranchPayload>
          }
          createMany: {
            args: Prisma.CompanyBranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyBranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBranchPayload>[]
          }
          delete: {
            args: Prisma.CompanyBranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBranchPayload>
          }
          update: {
            args: Prisma.CompanyBranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBranchPayload>
          }
          deleteMany: {
            args: Prisma.CompanyBranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyBranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CompanyBranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyBranchPayload>
          }
          aggregate: {
            args: Prisma.CompanyBranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyBranch>
          }
          groupBy: {
            args: Prisma.CompanyBranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyBranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyBranchCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyBranchCountAggregateOutputType> | number
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
    UserLoginLog: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserLoginLog?: boolean | UserCountOutputTypeCountUserLoginLogArgs
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
  export type UserCountOutputTypeCountUserLoginLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLoginLogWhereInput
  }


  /**
   * Count Type UserRoleCountOutputType
   */

  export type UserRoleCountOutputType = {
    users: number
  }

  export type UserRoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRoleCountOutputType
     */
    select?: UserRoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserRoleCountOutputType without action
   */
  export type UserRoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    users: number
    CompanyBranch: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyCountOutputTypeCountUsersArgs
    CompanyBranch?: boolean | CompanyCountOutputTypeCountCompanyBranchArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCompanyBranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyBranchWhereInput
  }


  /**
   * Count Type CompanyBranchCountOutputType
   */

  export type CompanyBranchCountOutputType = {
    users: number
  }

  export type CompanyBranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyBranchCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * CompanyBranchCountOutputType without action
   */
  export type CompanyBranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBranchCountOutputType
     */
    select?: CompanyBranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyBranchCountOutputType without action
   */
  export type CompanyBranchCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
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
    company_id: number | null
    company_branch_id: number | null
    role_id: number | null
    postcode: number | null
    country: number | null
    state: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
    company_id: bigint | null
    company_branch_id: bigint | null
    role_id: number | null
    postcode: number | null
    country: number | null
    state: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    is_deleted: boolean | null
    user_code: string | null
    name: string | null
    display_name: string | null
    company_id: bigint | null
    company_branch_id: bigint | null
    profile: string | null
    email: string | null
    password: string | null
    phone: string | null
    role_id: number | null
    current_address: string | null
    permanent_address: string | null
    city: string | null
    postcode: number | null
    country: number | null
    state: number | null
    created_by: number | null
    created_at: Date | null
    updated_by: number | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    is_deleted: boolean | null
    user_code: string | null
    name: string | null
    display_name: string | null
    company_id: bigint | null
    company_branch_id: bigint | null
    profile: string | null
    email: string | null
    password: string | null
    phone: string | null
    role_id: number | null
    current_address: string | null
    permanent_address: string | null
    city: string | null
    postcode: number | null
    country: number | null
    state: number | null
    created_by: number | null
    created_at: Date | null
    updated_by: number | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    is_deleted: number
    user_code: number
    name: number
    display_name: number
    company_id: number
    company_branch_id: number
    profile: number
    email: number
    password: number
    phone: number
    role_id: number
    current_address: number
    permanent_address: number
    city: number
    postcode: number
    country: number
    state: number
    created_by: number
    created_at: number
    updated_by: number
    updated_at: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    company_id?: true
    company_branch_id?: true
    role_id?: true
    postcode?: true
    country?: true
    state?: true
    created_by?: true
    updated_by?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    company_id?: true
    company_branch_id?: true
    role_id?: true
    postcode?: true
    country?: true
    state?: true
    created_by?: true
    updated_by?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    is_deleted?: true
    user_code?: true
    name?: true
    display_name?: true
    company_id?: true
    company_branch_id?: true
    profile?: true
    email?: true
    password?: true
    phone?: true
    role_id?: true
    current_address?: true
    permanent_address?: true
    city?: true
    postcode?: true
    country?: true
    state?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    is_deleted?: true
    user_code?: true
    name?: true
    display_name?: true
    company_id?: true
    company_branch_id?: true
    profile?: true
    email?: true
    password?: true
    phone?: true
    role_id?: true
    current_address?: true
    permanent_address?: true
    city?: true
    postcode?: true
    country?: true
    state?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    is_deleted?: true
    user_code?: true
    name?: true
    display_name?: true
    company_id?: true
    company_branch_id?: true
    profile?: true
    email?: true
    password?: true
    phone?: true
    role_id?: true
    current_address?: true
    permanent_address?: true
    city?: true
    postcode?: true
    country?: true
    state?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
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
    id: bigint
    is_deleted: boolean
    user_code: string
    name: string
    display_name: string
    company_id: bigint
    company_branch_id: bigint
    profile: string | null
    email: string
    password: string
    phone: string
    role_id: number | null
    current_address: string | null
    permanent_address: string | null
    city: string | null
    postcode: number | null
    country: number
    state: number | null
    created_by: number | null
    created_at: Date | null
    updated_by: number | null
    updated_at: Date | null
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
    is_deleted?: boolean
    user_code?: boolean
    name?: boolean
    display_name?: boolean
    company_id?: boolean
    company_branch_id?: boolean
    profile?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role_id?: boolean
    current_address?: boolean
    permanent_address?: boolean
    city?: boolean
    postcode?: boolean
    country?: boolean
    state?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
    UserRole?: boolean | User$UserRoleArgs<ExtArgs>
    Company?: boolean | User$CompanyArgs<ExtArgs>
    CompanyBranch?: boolean | User$CompanyBranchArgs<ExtArgs>
    UserLoginLog?: boolean | User$UserLoginLogArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_deleted?: boolean
    user_code?: boolean
    name?: boolean
    display_name?: boolean
    company_id?: boolean
    company_branch_id?: boolean
    profile?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role_id?: boolean
    current_address?: boolean
    permanent_address?: boolean
    city?: boolean
    postcode?: boolean
    country?: boolean
    state?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
    UserRole?: boolean | User$UserRoleArgs<ExtArgs>
    Company?: boolean | User$CompanyArgs<ExtArgs>
    CompanyBranch?: boolean | User$CompanyBranchArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    is_deleted?: boolean
    user_code?: boolean
    name?: boolean
    display_name?: boolean
    company_id?: boolean
    company_branch_id?: boolean
    profile?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role_id?: boolean
    current_address?: boolean
    permanent_address?: boolean
    city?: boolean
    postcode?: boolean
    country?: boolean
    state?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserRole?: boolean | User$UserRoleArgs<ExtArgs>
    Company?: boolean | User$CompanyArgs<ExtArgs>
    CompanyBranch?: boolean | User$CompanyBranchArgs<ExtArgs>
    UserLoginLog?: boolean | User$UserLoginLogArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserRole?: boolean | User$UserRoleArgs<ExtArgs>
    Company?: boolean | User$CompanyArgs<ExtArgs>
    CompanyBranch?: boolean | User$CompanyBranchArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserRole: Prisma.$UserRolePayload<ExtArgs> | null
      Company: Prisma.$CompanyPayload<ExtArgs> | null
      CompanyBranch: Prisma.$CompanyBranchPayload<ExtArgs> | null
      UserLoginLog: Prisma.$UserLoginLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      is_deleted: boolean
      user_code: string
      name: string
      display_name: string
      company_id: bigint
      company_branch_id: bigint
      profile: string | null
      email: string
      password: string
      phone: string
      role_id: number | null
      current_address: string | null
      permanent_address: string | null
      city: string | null
      postcode: number | null
      country: number
      state: number | null
      created_by: number | null
      created_at: Date | null
      updated_by: number | null
      updated_at: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserRole<T extends User$UserRoleArgs<ExtArgs> = {}>(args?: Subset<T, User$UserRoleArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    Company<T extends User$CompanyArgs<ExtArgs> = {}>(args?: Subset<T, User$CompanyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    CompanyBranch<T extends User$CompanyBranchArgs<ExtArgs> = {}>(args?: Subset<T, User$CompanyBranchArgs<ExtArgs>>): Prisma__CompanyBranchClient<$Result.GetResult<Prisma.$CompanyBranchPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    UserLoginLog<T extends User$UserLoginLogArgs<ExtArgs> = {}>(args?: Subset<T, User$UserLoginLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLoginLogPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly id: FieldRef<"User", 'BigInt'>
    readonly is_deleted: FieldRef<"User", 'Boolean'>
    readonly user_code: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly display_name: FieldRef<"User", 'String'>
    readonly company_id: FieldRef<"User", 'BigInt'>
    readonly company_branch_id: FieldRef<"User", 'BigInt'>
    readonly profile: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role_id: FieldRef<"User", 'Int'>
    readonly current_address: FieldRef<"User", 'String'>
    readonly permanent_address: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly postcode: FieldRef<"User", 'Int'>
    readonly country: FieldRef<"User", 'Int'>
    readonly state: FieldRef<"User", 'Int'>
    readonly created_by: FieldRef<"User", 'Int'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_by: FieldRef<"User", 'Int'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
  }

  /**
   * User.UserRole
   */
  export type User$UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
  }

  /**
   * User.Company
   */
  export type User$CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * User.CompanyBranch
   */
  export type User$CompanyBranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyBranchInclude<ExtArgs> | null
    where?: CompanyBranchWhereInput
  }

  /**
   * User.UserLoginLog
   */
  export type User$UserLoginLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginLog
     */
    select?: UserLoginLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginLogInclude<ExtArgs> | null
    where?: UserLoginLogWhereInput
    orderBy?: UserLoginLogOrderByWithRelationInput | UserLoginLogOrderByWithRelationInput[]
    cursor?: UserLoginLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLoginLogScalarFieldEnum | UserLoginLogScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    id: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    id: number | null
    is_deleted: boolean | null
    name: string | null
    description: string | null
    created_by: number | null
    created_at: Date | null
    updated_by: number | null
    updated_at: Date | null
  }

  export type UserRoleMaxAggregateOutputType = {
    id: number | null
    is_deleted: boolean | null
    name: string | null
    description: string | null
    created_by: number | null
    created_at: Date | null
    updated_by: number | null
    updated_at: Date | null
  }

  export type UserRoleCountAggregateOutputType = {
    id: number
    is_deleted: number
    name: number
    description: number
    created_by: number
    created_at: number
    updated_by: number
    updated_at: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
  }

  export type UserRoleSumAggregateInputType = {
    id?: true
    created_by?: true
    updated_by?: true
  }

  export type UserRoleMinAggregateInputType = {
    id?: true
    is_deleted?: true
    name?: true
    description?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
  }

  export type UserRoleMaxAggregateInputType = {
    id?: true
    is_deleted?: true
    name?: true
    description?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
  }

  export type UserRoleCountAggregateInputType = {
    id?: true
    is_deleted?: true
    name?: true
    description?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    id: number
    is_deleted: boolean
    name: string
    description: string | null
    created_by: number | null
    created_at: Date
    updated_by: number | null
    updated_at: Date | null
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_deleted?: boolean
    name?: boolean
    description?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_deleted?: boolean
    name?: boolean
    description?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    id?: boolean
    is_deleted?: boolean
    name?: boolean
    description?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
  }

  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | UserRole$usersArgs<ExtArgs>
    _count?: boolean | UserRoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      is_deleted: boolean
      name: string
      description: string | null
      created_by: number | null
      created_at: Date
      updated_by: number | null
      updated_at: Date | null
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userRoleWithIdOnly = await prisma.userRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `id`
     * const userRoleWithIdOnly = await prisma.userRole.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
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
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends UserRole$usersArgs<ExtArgs> = {}>(args?: Subset<T, UserRole$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the UserRole model
   */ 
  interface UserRoleFieldRefs {
    readonly id: FieldRef<"UserRole", 'Int'>
    readonly is_deleted: FieldRef<"UserRole", 'Boolean'>
    readonly name: FieldRef<"UserRole", 'String'>
    readonly description: FieldRef<"UserRole", 'String'>
    readonly created_by: FieldRef<"UserRole", 'Int'>
    readonly created_at: FieldRef<"UserRole", 'DateTime'>
    readonly updated_by: FieldRef<"UserRole", 'Int'>
    readonly updated_at: FieldRef<"UserRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
  }

  /**
   * UserRole.users
   */
  export type UserRole$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model UserLoginLog
   */

  export type AggregateUserLoginLog = {
    _count: UserLoginLogCountAggregateOutputType | null
    _avg: UserLoginLogAvgAggregateOutputType | null
    _sum: UserLoginLogSumAggregateOutputType | null
    _min: UserLoginLogMinAggregateOutputType | null
    _max: UserLoginLogMaxAggregateOutputType | null
  }

  export type UserLoginLogAvgAggregateOutputType = {
    id: number | null
    status: number | null
    user_id: number | null
  }

  export type UserLoginLogSumAggregateOutputType = {
    id: bigint | null
    status: number | null
    user_id: bigint | null
  }

  export type UserLoginLogMinAggregateOutputType = {
    id: bigint | null
    is_deleted: boolean | null
    status: number | null
    mac_address: string | null
    user_id: bigint | null
    created_at: Date | null
  }

  export type UserLoginLogMaxAggregateOutputType = {
    id: bigint | null
    is_deleted: boolean | null
    status: number | null
    mac_address: string | null
    user_id: bigint | null
    created_at: Date | null
  }

  export type UserLoginLogCountAggregateOutputType = {
    id: number
    is_deleted: number
    status: number
    mac_address: number
    user_id: number
    system_info: number
    created_at: number
    _all: number
  }


  export type UserLoginLogAvgAggregateInputType = {
    id?: true
    status?: true
    user_id?: true
  }

  export type UserLoginLogSumAggregateInputType = {
    id?: true
    status?: true
    user_id?: true
  }

  export type UserLoginLogMinAggregateInputType = {
    id?: true
    is_deleted?: true
    status?: true
    mac_address?: true
    user_id?: true
    created_at?: true
  }

  export type UserLoginLogMaxAggregateInputType = {
    id?: true
    is_deleted?: true
    status?: true
    mac_address?: true
    user_id?: true
    created_at?: true
  }

  export type UserLoginLogCountAggregateInputType = {
    id?: true
    is_deleted?: true
    status?: true
    mac_address?: true
    user_id?: true
    system_info?: true
    created_at?: true
    _all?: true
  }

  export type UserLoginLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLoginLog to aggregate.
     */
    where?: UserLoginLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLoginLogs to fetch.
     */
    orderBy?: UserLoginLogOrderByWithRelationInput | UserLoginLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLoginLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLoginLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLoginLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLoginLogs
    **/
    _count?: true | UserLoginLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLoginLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLoginLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLoginLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLoginLogMaxAggregateInputType
  }

  export type GetUserLoginLogAggregateType<T extends UserLoginLogAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLoginLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLoginLog[P]>
      : GetScalarType<T[P], AggregateUserLoginLog[P]>
  }




  export type UserLoginLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLoginLogWhereInput
    orderBy?: UserLoginLogOrderByWithAggregationInput | UserLoginLogOrderByWithAggregationInput[]
    by: UserLoginLogScalarFieldEnum[] | UserLoginLogScalarFieldEnum
    having?: UserLoginLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLoginLogCountAggregateInputType | true
    _avg?: UserLoginLogAvgAggregateInputType
    _sum?: UserLoginLogSumAggregateInputType
    _min?: UserLoginLogMinAggregateInputType
    _max?: UserLoginLogMaxAggregateInputType
  }

  export type UserLoginLogGroupByOutputType = {
    id: bigint
    is_deleted: boolean
    status: number
    mac_address: string
    user_id: bigint
    system_info: JsonValue
    created_at: Date
    _count: UserLoginLogCountAggregateOutputType | null
    _avg: UserLoginLogAvgAggregateOutputType | null
    _sum: UserLoginLogSumAggregateOutputType | null
    _min: UserLoginLogMinAggregateOutputType | null
    _max: UserLoginLogMaxAggregateOutputType | null
  }

  type GetUserLoginLogGroupByPayload<T extends UserLoginLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLoginLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLoginLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLoginLogGroupByOutputType[P]>
            : GetScalarType<T[P], UserLoginLogGroupByOutputType[P]>
        }
      >
    >


  export type UserLoginLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_deleted?: boolean
    status?: boolean
    mac_address?: boolean
    user_id?: boolean
    system_info?: boolean
    created_at?: boolean
    user?: boolean | UserLoginLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["userLoginLog"]>

  export type UserLoginLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_deleted?: boolean
    status?: boolean
    mac_address?: boolean
    user_id?: boolean
    system_info?: boolean
    created_at?: boolean
    user?: boolean | UserLoginLog$userArgs<ExtArgs>
  }, ExtArgs["result"]["userLoginLog"]>

  export type UserLoginLogSelectScalar = {
    id?: boolean
    is_deleted?: boolean
    status?: boolean
    mac_address?: boolean
    user_id?: boolean
    system_info?: boolean
    created_at?: boolean
  }

  export type UserLoginLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserLoginLog$userArgs<ExtArgs>
  }
  export type UserLoginLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserLoginLog$userArgs<ExtArgs>
  }

  export type $UserLoginLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLoginLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      is_deleted: boolean
      status: number
      mac_address: string
      user_id: bigint
      system_info: Prisma.JsonValue
      created_at: Date
    }, ExtArgs["result"]["userLoginLog"]>
    composites: {}
  }

  type UserLoginLogGetPayload<S extends boolean | null | undefined | UserLoginLogDefaultArgs> = $Result.GetResult<Prisma.$UserLoginLogPayload, S>

  type UserLoginLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserLoginLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserLoginLogCountAggregateInputType | true
    }

  export interface UserLoginLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLoginLog'], meta: { name: 'UserLoginLog' } }
    /**
     * Find zero or one UserLoginLog that matches the filter.
     * @param {UserLoginLogFindUniqueArgs} args - Arguments to find a UserLoginLog
     * @example
     * // Get one UserLoginLog
     * const userLoginLog = await prisma.userLoginLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserLoginLogFindUniqueArgs>(args: SelectSubset<T, UserLoginLogFindUniqueArgs<ExtArgs>>): Prisma__UserLoginLogClient<$Result.GetResult<Prisma.$UserLoginLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserLoginLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserLoginLogFindUniqueOrThrowArgs} args - Arguments to find a UserLoginLog
     * @example
     * // Get one UserLoginLog
     * const userLoginLog = await prisma.userLoginLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserLoginLogFindUniqueOrThrowArgs>(args: SelectSubset<T, UserLoginLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserLoginLogClient<$Result.GetResult<Prisma.$UserLoginLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserLoginLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginLogFindFirstArgs} args - Arguments to find a UserLoginLog
     * @example
     * // Get one UserLoginLog
     * const userLoginLog = await prisma.userLoginLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserLoginLogFindFirstArgs>(args?: SelectSubset<T, UserLoginLogFindFirstArgs<ExtArgs>>): Prisma__UserLoginLogClient<$Result.GetResult<Prisma.$UserLoginLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserLoginLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginLogFindFirstOrThrowArgs} args - Arguments to find a UserLoginLog
     * @example
     * // Get one UserLoginLog
     * const userLoginLog = await prisma.userLoginLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserLoginLogFindFirstOrThrowArgs>(args?: SelectSubset<T, UserLoginLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserLoginLogClient<$Result.GetResult<Prisma.$UserLoginLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserLoginLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLoginLogs
     * const userLoginLogs = await prisma.userLoginLog.findMany()
     * 
     * // Get first 10 UserLoginLogs
     * const userLoginLogs = await prisma.userLoginLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLoginLogWithIdOnly = await prisma.userLoginLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserLoginLogFindManyArgs>(args?: SelectSubset<T, UserLoginLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLoginLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserLoginLog.
     * @param {UserLoginLogCreateArgs} args - Arguments to create a UserLoginLog.
     * @example
     * // Create one UserLoginLog
     * const UserLoginLog = await prisma.userLoginLog.create({
     *   data: {
     *     // ... data to create a UserLoginLog
     *   }
     * })
     * 
     */
    create<T extends UserLoginLogCreateArgs>(args: SelectSubset<T, UserLoginLogCreateArgs<ExtArgs>>): Prisma__UserLoginLogClient<$Result.GetResult<Prisma.$UserLoginLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserLoginLogs.
     * @param {UserLoginLogCreateManyArgs} args - Arguments to create many UserLoginLogs.
     * @example
     * // Create many UserLoginLogs
     * const userLoginLog = await prisma.userLoginLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserLoginLogCreateManyArgs>(args?: SelectSubset<T, UserLoginLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserLoginLogs and returns the data saved in the database.
     * @param {UserLoginLogCreateManyAndReturnArgs} args - Arguments to create many UserLoginLogs.
     * @example
     * // Create many UserLoginLogs
     * const userLoginLog = await prisma.userLoginLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserLoginLogs and only return the `id`
     * const userLoginLogWithIdOnly = await prisma.userLoginLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserLoginLogCreateManyAndReturnArgs>(args?: SelectSubset<T, UserLoginLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLoginLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserLoginLog.
     * @param {UserLoginLogDeleteArgs} args - Arguments to delete one UserLoginLog.
     * @example
     * // Delete one UserLoginLog
     * const UserLoginLog = await prisma.userLoginLog.delete({
     *   where: {
     *     // ... filter to delete one UserLoginLog
     *   }
     * })
     * 
     */
    delete<T extends UserLoginLogDeleteArgs>(args: SelectSubset<T, UserLoginLogDeleteArgs<ExtArgs>>): Prisma__UserLoginLogClient<$Result.GetResult<Prisma.$UserLoginLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserLoginLog.
     * @param {UserLoginLogUpdateArgs} args - Arguments to update one UserLoginLog.
     * @example
     * // Update one UserLoginLog
     * const userLoginLog = await prisma.userLoginLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserLoginLogUpdateArgs>(args: SelectSubset<T, UserLoginLogUpdateArgs<ExtArgs>>): Prisma__UserLoginLogClient<$Result.GetResult<Prisma.$UserLoginLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserLoginLogs.
     * @param {UserLoginLogDeleteManyArgs} args - Arguments to filter UserLoginLogs to delete.
     * @example
     * // Delete a few UserLoginLogs
     * const { count } = await prisma.userLoginLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserLoginLogDeleteManyArgs>(args?: SelectSubset<T, UserLoginLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLoginLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLoginLogs
     * const userLoginLog = await prisma.userLoginLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserLoginLogUpdateManyArgs>(args: SelectSubset<T, UserLoginLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLoginLog.
     * @param {UserLoginLogUpsertArgs} args - Arguments to update or create a UserLoginLog.
     * @example
     * // Update or create a UserLoginLog
     * const userLoginLog = await prisma.userLoginLog.upsert({
     *   create: {
     *     // ... data to create a UserLoginLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLoginLog we want to update
     *   }
     * })
     */
    upsert<T extends UserLoginLogUpsertArgs>(args: SelectSubset<T, UserLoginLogUpsertArgs<ExtArgs>>): Prisma__UserLoginLogClient<$Result.GetResult<Prisma.$UserLoginLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserLoginLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginLogCountArgs} args - Arguments to filter UserLoginLogs to count.
     * @example
     * // Count the number of UserLoginLogs
     * const count = await prisma.userLoginLog.count({
     *   where: {
     *     // ... the filter for the UserLoginLogs we want to count
     *   }
     * })
    **/
    count<T extends UserLoginLogCountArgs>(
      args?: Subset<T, UserLoginLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLoginLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLoginLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLoginLogAggregateArgs>(args: Subset<T, UserLoginLogAggregateArgs>): Prisma.PrismaPromise<GetUserLoginLogAggregateType<T>>

    /**
     * Group by UserLoginLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLoginLogGroupByArgs} args - Group by arguments.
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
      T extends UserLoginLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLoginLogGroupByArgs['orderBy'] }
        : { orderBy?: UserLoginLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserLoginLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLoginLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLoginLog model
   */
  readonly fields: UserLoginLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLoginLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLoginLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserLoginLog$userArgs<ExtArgs> = {}>(args?: Subset<T, UserLoginLog$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the UserLoginLog model
   */ 
  interface UserLoginLogFieldRefs {
    readonly id: FieldRef<"UserLoginLog", 'BigInt'>
    readonly is_deleted: FieldRef<"UserLoginLog", 'Boolean'>
    readonly status: FieldRef<"UserLoginLog", 'Int'>
    readonly mac_address: FieldRef<"UserLoginLog", 'String'>
    readonly user_id: FieldRef<"UserLoginLog", 'BigInt'>
    readonly system_info: FieldRef<"UserLoginLog", 'Json'>
    readonly created_at: FieldRef<"UserLoginLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserLoginLog findUnique
   */
  export type UserLoginLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginLog
     */
    select?: UserLoginLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLoginLog to fetch.
     */
    where: UserLoginLogWhereUniqueInput
  }

  /**
   * UserLoginLog findUniqueOrThrow
   */
  export type UserLoginLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginLog
     */
    select?: UserLoginLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLoginLog to fetch.
     */
    where: UserLoginLogWhereUniqueInput
  }

  /**
   * UserLoginLog findFirst
   */
  export type UserLoginLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginLog
     */
    select?: UserLoginLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLoginLog to fetch.
     */
    where?: UserLoginLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLoginLogs to fetch.
     */
    orderBy?: UserLoginLogOrderByWithRelationInput | UserLoginLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLoginLogs.
     */
    cursor?: UserLoginLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLoginLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLoginLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLoginLogs.
     */
    distinct?: UserLoginLogScalarFieldEnum | UserLoginLogScalarFieldEnum[]
  }

  /**
   * UserLoginLog findFirstOrThrow
   */
  export type UserLoginLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginLog
     */
    select?: UserLoginLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLoginLog to fetch.
     */
    where?: UserLoginLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLoginLogs to fetch.
     */
    orderBy?: UserLoginLogOrderByWithRelationInput | UserLoginLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLoginLogs.
     */
    cursor?: UserLoginLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLoginLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLoginLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLoginLogs.
     */
    distinct?: UserLoginLogScalarFieldEnum | UserLoginLogScalarFieldEnum[]
  }

  /**
   * UserLoginLog findMany
   */
  export type UserLoginLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginLog
     */
    select?: UserLoginLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginLogInclude<ExtArgs> | null
    /**
     * Filter, which UserLoginLogs to fetch.
     */
    where?: UserLoginLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLoginLogs to fetch.
     */
    orderBy?: UserLoginLogOrderByWithRelationInput | UserLoginLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLoginLogs.
     */
    cursor?: UserLoginLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLoginLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLoginLogs.
     */
    skip?: number
    distinct?: UserLoginLogScalarFieldEnum | UserLoginLogScalarFieldEnum[]
  }

  /**
   * UserLoginLog create
   */
  export type UserLoginLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginLog
     */
    select?: UserLoginLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginLogInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLoginLog.
     */
    data: XOR<UserLoginLogCreateInput, UserLoginLogUncheckedCreateInput>
  }

  /**
   * UserLoginLog createMany
   */
  export type UserLoginLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLoginLogs.
     */
    data: UserLoginLogCreateManyInput | UserLoginLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserLoginLog createManyAndReturn
   */
  export type UserLoginLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginLog
     */
    select?: UserLoginLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserLoginLogs.
     */
    data: UserLoginLogCreateManyInput | UserLoginLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserLoginLog update
   */
  export type UserLoginLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginLog
     */
    select?: UserLoginLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginLogInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLoginLog.
     */
    data: XOR<UserLoginLogUpdateInput, UserLoginLogUncheckedUpdateInput>
    /**
     * Choose, which UserLoginLog to update.
     */
    where: UserLoginLogWhereUniqueInput
  }

  /**
   * UserLoginLog updateMany
   */
  export type UserLoginLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLoginLogs.
     */
    data: XOR<UserLoginLogUpdateManyMutationInput, UserLoginLogUncheckedUpdateManyInput>
    /**
     * Filter which UserLoginLogs to update
     */
    where?: UserLoginLogWhereInput
  }

  /**
   * UserLoginLog upsert
   */
  export type UserLoginLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginLog
     */
    select?: UserLoginLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginLogInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLoginLog to update in case it exists.
     */
    where: UserLoginLogWhereUniqueInput
    /**
     * In case the UserLoginLog found by the `where` argument doesn't exist, create a new UserLoginLog with this data.
     */
    create: XOR<UserLoginLogCreateInput, UserLoginLogUncheckedCreateInput>
    /**
     * In case the UserLoginLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLoginLogUpdateInput, UserLoginLogUncheckedUpdateInput>
  }

  /**
   * UserLoginLog delete
   */
  export type UserLoginLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginLog
     */
    select?: UserLoginLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginLogInclude<ExtArgs> | null
    /**
     * Filter which UserLoginLog to delete.
     */
    where: UserLoginLogWhereUniqueInput
  }

  /**
   * UserLoginLog deleteMany
   */
  export type UserLoginLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLoginLogs to delete
     */
    where?: UserLoginLogWhereInput
  }

  /**
   * UserLoginLog.user
   */
  export type UserLoginLog$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * UserLoginLog without action
   */
  export type UserLoginLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLoginLog
     */
    select?: UserLoginLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserLoginLogInclude<ExtArgs> | null
  }


  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
    status: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: bigint | null
    status: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: bigint | null
    is_deleted: boolean | null
    name: string | null
    description: string | null
    status: number | null
    created_by: number | null
    created_at: Date | null
    updated_by: number | null
    updated_at: Date | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: bigint | null
    is_deleted: boolean | null
    name: string | null
    description: string | null
    status: number | null
    created_by: number | null
    created_at: Date | null
    updated_by: number | null
    updated_at: Date | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    is_deleted: number
    name: number
    description: number
    status: number
    system_info: number
    created_by: number
    created_at: number
    updated_by: number
    updated_at: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
    status?: true
    created_by?: true
    updated_by?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
    status?: true
    created_by?: true
    updated_by?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    is_deleted?: true
    name?: true
    description?: true
    status?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    is_deleted?: true
    name?: true
    description?: true
    status?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    is_deleted?: true
    name?: true
    description?: true
    status?: true
    system_info?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: bigint
    is_deleted: boolean
    name: string
    description: string | null
    status: number
    system_info: JsonValue
    created_by: number | null
    created_at: Date
    updated_by: number | null
    updated_at: Date | null
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_deleted?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    system_info?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
    users?: boolean | Company$usersArgs<ExtArgs>
    CompanyBranch?: boolean | Company$CompanyBranchArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_deleted?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    system_info?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    is_deleted?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    system_info?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
  }

  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Company$usersArgs<ExtArgs>
    CompanyBranch?: boolean | Company$CompanyBranchArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      CompanyBranch: Prisma.$CompanyBranchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      is_deleted: boolean
      name: string
      description: string | null
      status: number
      system_info: Prisma.JsonValue
      created_by: number | null
      created_at: Date
      updated_by: number | null
      updated_at: Date | null
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
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
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Company$usersArgs<ExtArgs> = {}>(args?: Subset<T, Company$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    CompanyBranch<T extends Company$CompanyBranchArgs<ExtArgs> = {}>(args?: Subset<T, Company$CompanyBranchArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyBranchPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'BigInt'>
    readonly is_deleted: FieldRef<"Company", 'Boolean'>
    readonly name: FieldRef<"Company", 'String'>
    readonly description: FieldRef<"Company", 'String'>
    readonly status: FieldRef<"Company", 'Int'>
    readonly system_info: FieldRef<"Company", 'Json'>
    readonly created_by: FieldRef<"Company", 'Int'>
    readonly created_at: FieldRef<"Company", 'DateTime'>
    readonly updated_by: FieldRef<"Company", 'Int'>
    readonly updated_at: FieldRef<"Company", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
  }

  /**
   * Company.users
   */
  export type Company$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Company.CompanyBranch
   */
  export type Company$CompanyBranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyBranchInclude<ExtArgs> | null
    where?: CompanyBranchWhereInput
    orderBy?: CompanyBranchOrderByWithRelationInput | CompanyBranchOrderByWithRelationInput[]
    cursor?: CompanyBranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompanyBranchScalarFieldEnum | CompanyBranchScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model CompanyBranch
   */

  export type AggregateCompanyBranch = {
    _count: CompanyBranchCountAggregateOutputType | null
    _avg: CompanyBranchAvgAggregateOutputType | null
    _sum: CompanyBranchSumAggregateOutputType | null
    _min: CompanyBranchMinAggregateOutputType | null
    _max: CompanyBranchMaxAggregateOutputType | null
  }

  export type CompanyBranchAvgAggregateOutputType = {
    id: number | null
    company_id: number | null
    status: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type CompanyBranchSumAggregateOutputType = {
    id: bigint | null
    company_id: bigint | null
    status: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type CompanyBranchMinAggregateOutputType = {
    id: bigint | null
    is_deleted: boolean | null
    company_id: bigint | null
    name: string | null
    description: string | null
    status: number | null
    created_by: number | null
    created_at: Date | null
    updated_by: number | null
    updated_at: Date | null
  }

  export type CompanyBranchMaxAggregateOutputType = {
    id: bigint | null
    is_deleted: boolean | null
    company_id: bigint | null
    name: string | null
    description: string | null
    status: number | null
    created_by: number | null
    created_at: Date | null
    updated_by: number | null
    updated_at: Date | null
  }

  export type CompanyBranchCountAggregateOutputType = {
    id: number
    is_deleted: number
    company_id: number
    name: number
    description: number
    status: number
    system_info: number
    created_by: number
    created_at: number
    updated_by: number
    updated_at: number
    _all: number
  }


  export type CompanyBranchAvgAggregateInputType = {
    id?: true
    company_id?: true
    status?: true
    created_by?: true
    updated_by?: true
  }

  export type CompanyBranchSumAggregateInputType = {
    id?: true
    company_id?: true
    status?: true
    created_by?: true
    updated_by?: true
  }

  export type CompanyBranchMinAggregateInputType = {
    id?: true
    is_deleted?: true
    company_id?: true
    name?: true
    description?: true
    status?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
  }

  export type CompanyBranchMaxAggregateInputType = {
    id?: true
    is_deleted?: true
    company_id?: true
    name?: true
    description?: true
    status?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
  }

  export type CompanyBranchCountAggregateInputType = {
    id?: true
    is_deleted?: true
    company_id?: true
    name?: true
    description?: true
    status?: true
    system_info?: true
    created_by?: true
    created_at?: true
    updated_by?: true
    updated_at?: true
    _all?: true
  }

  export type CompanyBranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyBranch to aggregate.
     */
    where?: CompanyBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBranches to fetch.
     */
    orderBy?: CompanyBranchOrderByWithRelationInput | CompanyBranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyBranches
    **/
    _count?: true | CompanyBranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyBranchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanyBranchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyBranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyBranchMaxAggregateInputType
  }

  export type GetCompanyBranchAggregateType<T extends CompanyBranchAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyBranch[P]>
      : GetScalarType<T[P], AggregateCompanyBranch[P]>
  }




  export type CompanyBranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyBranchWhereInput
    orderBy?: CompanyBranchOrderByWithAggregationInput | CompanyBranchOrderByWithAggregationInput[]
    by: CompanyBranchScalarFieldEnum[] | CompanyBranchScalarFieldEnum
    having?: CompanyBranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyBranchCountAggregateInputType | true
    _avg?: CompanyBranchAvgAggregateInputType
    _sum?: CompanyBranchSumAggregateInputType
    _min?: CompanyBranchMinAggregateInputType
    _max?: CompanyBranchMaxAggregateInputType
  }

  export type CompanyBranchGroupByOutputType = {
    id: bigint
    is_deleted: boolean
    company_id: bigint
    name: string
    description: string | null
    status: number
    system_info: JsonValue
    created_by: number | null
    created_at: Date
    updated_by: number | null
    updated_at: Date | null
    _count: CompanyBranchCountAggregateOutputType | null
    _avg: CompanyBranchAvgAggregateOutputType | null
    _sum: CompanyBranchSumAggregateOutputType | null
    _min: CompanyBranchMinAggregateOutputType | null
    _max: CompanyBranchMaxAggregateOutputType | null
  }

  type GetCompanyBranchGroupByPayload<T extends CompanyBranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyBranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyBranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyBranchGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyBranchGroupByOutputType[P]>
        }
      >
    >


  export type CompanyBranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_deleted?: boolean
    company_id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    system_info?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
    users?: boolean | CompanyBranch$usersArgs<ExtArgs>
    Company?: boolean | CompanyBranch$CompanyArgs<ExtArgs>
    _count?: boolean | CompanyBranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyBranch"]>

  export type CompanyBranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    is_deleted?: boolean
    company_id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    system_info?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
    Company?: boolean | CompanyBranch$CompanyArgs<ExtArgs>
  }, ExtArgs["result"]["companyBranch"]>

  export type CompanyBranchSelectScalar = {
    id?: boolean
    is_deleted?: boolean
    company_id?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    system_info?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_by?: boolean
    updated_at?: boolean
  }

  export type CompanyBranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | CompanyBranch$usersArgs<ExtArgs>
    Company?: boolean | CompanyBranch$CompanyArgs<ExtArgs>
    _count?: boolean | CompanyBranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyBranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Company?: boolean | CompanyBranch$CompanyArgs<ExtArgs>
  }

  export type $CompanyBranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyBranch"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      Company: Prisma.$CompanyPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      is_deleted: boolean
      company_id: bigint
      name: string
      description: string | null
      status: number
      system_info: Prisma.JsonValue
      created_by: number | null
      created_at: Date
      updated_by: number | null
      updated_at: Date | null
    }, ExtArgs["result"]["companyBranch"]>
    composites: {}
  }

  type CompanyBranchGetPayload<S extends boolean | null | undefined | CompanyBranchDefaultArgs> = $Result.GetResult<Prisma.$CompanyBranchPayload, S>

  type CompanyBranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CompanyBranchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CompanyBranchCountAggregateInputType | true
    }

  export interface CompanyBranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyBranch'], meta: { name: 'CompanyBranch' } }
    /**
     * Find zero or one CompanyBranch that matches the filter.
     * @param {CompanyBranchFindUniqueArgs} args - Arguments to find a CompanyBranch
     * @example
     * // Get one CompanyBranch
     * const companyBranch = await prisma.companyBranch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyBranchFindUniqueArgs>(args: SelectSubset<T, CompanyBranchFindUniqueArgs<ExtArgs>>): Prisma__CompanyBranchClient<$Result.GetResult<Prisma.$CompanyBranchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CompanyBranch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CompanyBranchFindUniqueOrThrowArgs} args - Arguments to find a CompanyBranch
     * @example
     * // Get one CompanyBranch
     * const companyBranch = await prisma.companyBranch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyBranchFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyBranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyBranchClient<$Result.GetResult<Prisma.$CompanyBranchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CompanyBranch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBranchFindFirstArgs} args - Arguments to find a CompanyBranch
     * @example
     * // Get one CompanyBranch
     * const companyBranch = await prisma.companyBranch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyBranchFindFirstArgs>(args?: SelectSubset<T, CompanyBranchFindFirstArgs<ExtArgs>>): Prisma__CompanyBranchClient<$Result.GetResult<Prisma.$CompanyBranchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CompanyBranch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBranchFindFirstOrThrowArgs} args - Arguments to find a CompanyBranch
     * @example
     * // Get one CompanyBranch
     * const companyBranch = await prisma.companyBranch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyBranchFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyBranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyBranchClient<$Result.GetResult<Prisma.$CompanyBranchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CompanyBranches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyBranches
     * const companyBranches = await prisma.companyBranch.findMany()
     * 
     * // Get first 10 CompanyBranches
     * const companyBranches = await prisma.companyBranch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyBranchWithIdOnly = await prisma.companyBranch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyBranchFindManyArgs>(args?: SelectSubset<T, CompanyBranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyBranchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CompanyBranch.
     * @param {CompanyBranchCreateArgs} args - Arguments to create a CompanyBranch.
     * @example
     * // Create one CompanyBranch
     * const CompanyBranch = await prisma.companyBranch.create({
     *   data: {
     *     // ... data to create a CompanyBranch
     *   }
     * })
     * 
     */
    create<T extends CompanyBranchCreateArgs>(args: SelectSubset<T, CompanyBranchCreateArgs<ExtArgs>>): Prisma__CompanyBranchClient<$Result.GetResult<Prisma.$CompanyBranchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CompanyBranches.
     * @param {CompanyBranchCreateManyArgs} args - Arguments to create many CompanyBranches.
     * @example
     * // Create many CompanyBranches
     * const companyBranch = await prisma.companyBranch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyBranchCreateManyArgs>(args?: SelectSubset<T, CompanyBranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyBranches and returns the data saved in the database.
     * @param {CompanyBranchCreateManyAndReturnArgs} args - Arguments to create many CompanyBranches.
     * @example
     * // Create many CompanyBranches
     * const companyBranch = await prisma.companyBranch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyBranches and only return the `id`
     * const companyBranchWithIdOnly = await prisma.companyBranch.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyBranchCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyBranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyBranchPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CompanyBranch.
     * @param {CompanyBranchDeleteArgs} args - Arguments to delete one CompanyBranch.
     * @example
     * // Delete one CompanyBranch
     * const CompanyBranch = await prisma.companyBranch.delete({
     *   where: {
     *     // ... filter to delete one CompanyBranch
     *   }
     * })
     * 
     */
    delete<T extends CompanyBranchDeleteArgs>(args: SelectSubset<T, CompanyBranchDeleteArgs<ExtArgs>>): Prisma__CompanyBranchClient<$Result.GetResult<Prisma.$CompanyBranchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CompanyBranch.
     * @param {CompanyBranchUpdateArgs} args - Arguments to update one CompanyBranch.
     * @example
     * // Update one CompanyBranch
     * const companyBranch = await prisma.companyBranch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyBranchUpdateArgs>(args: SelectSubset<T, CompanyBranchUpdateArgs<ExtArgs>>): Prisma__CompanyBranchClient<$Result.GetResult<Prisma.$CompanyBranchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CompanyBranches.
     * @param {CompanyBranchDeleteManyArgs} args - Arguments to filter CompanyBranches to delete.
     * @example
     * // Delete a few CompanyBranches
     * const { count } = await prisma.companyBranch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyBranchDeleteManyArgs>(args?: SelectSubset<T, CompanyBranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyBranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyBranches
     * const companyBranch = await prisma.companyBranch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyBranchUpdateManyArgs>(args: SelectSubset<T, CompanyBranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CompanyBranch.
     * @param {CompanyBranchUpsertArgs} args - Arguments to update or create a CompanyBranch.
     * @example
     * // Update or create a CompanyBranch
     * const companyBranch = await prisma.companyBranch.upsert({
     *   create: {
     *     // ... data to create a CompanyBranch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyBranch we want to update
     *   }
     * })
     */
    upsert<T extends CompanyBranchUpsertArgs>(args: SelectSubset<T, CompanyBranchUpsertArgs<ExtArgs>>): Prisma__CompanyBranchClient<$Result.GetResult<Prisma.$CompanyBranchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CompanyBranches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBranchCountArgs} args - Arguments to filter CompanyBranches to count.
     * @example
     * // Count the number of CompanyBranches
     * const count = await prisma.companyBranch.count({
     *   where: {
     *     // ... the filter for the CompanyBranches we want to count
     *   }
     * })
    **/
    count<T extends CompanyBranchCountArgs>(
      args?: Subset<T, CompanyBranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyBranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyBranch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyBranchAggregateArgs>(args: Subset<T, CompanyBranchAggregateArgs>): Prisma.PrismaPromise<GetCompanyBranchAggregateType<T>>

    /**
     * Group by CompanyBranch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyBranchGroupByArgs} args - Group by arguments.
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
      T extends CompanyBranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyBranchGroupByArgs['orderBy'] }
        : { orderBy?: CompanyBranchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompanyBranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyBranch model
   */
  readonly fields: CompanyBranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyBranch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyBranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends CompanyBranch$usersArgs<ExtArgs> = {}>(args?: Subset<T, CompanyBranch$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    Company<T extends CompanyBranch$CompanyArgs<ExtArgs> = {}>(args?: Subset<T, CompanyBranch$CompanyArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the CompanyBranch model
   */ 
  interface CompanyBranchFieldRefs {
    readonly id: FieldRef<"CompanyBranch", 'BigInt'>
    readonly is_deleted: FieldRef<"CompanyBranch", 'Boolean'>
    readonly company_id: FieldRef<"CompanyBranch", 'BigInt'>
    readonly name: FieldRef<"CompanyBranch", 'String'>
    readonly description: FieldRef<"CompanyBranch", 'String'>
    readonly status: FieldRef<"CompanyBranch", 'Int'>
    readonly system_info: FieldRef<"CompanyBranch", 'Json'>
    readonly created_by: FieldRef<"CompanyBranch", 'Int'>
    readonly created_at: FieldRef<"CompanyBranch", 'DateTime'>
    readonly updated_by: FieldRef<"CompanyBranch", 'Int'>
    readonly updated_at: FieldRef<"CompanyBranch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompanyBranch findUnique
   */
  export type CompanyBranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyBranchInclude<ExtArgs> | null
    /**
     * Filter, which CompanyBranch to fetch.
     */
    where: CompanyBranchWhereUniqueInput
  }

  /**
   * CompanyBranch findUniqueOrThrow
   */
  export type CompanyBranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyBranchInclude<ExtArgs> | null
    /**
     * Filter, which CompanyBranch to fetch.
     */
    where: CompanyBranchWhereUniqueInput
  }

  /**
   * CompanyBranch findFirst
   */
  export type CompanyBranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyBranchInclude<ExtArgs> | null
    /**
     * Filter, which CompanyBranch to fetch.
     */
    where?: CompanyBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBranches to fetch.
     */
    orderBy?: CompanyBranchOrderByWithRelationInput | CompanyBranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyBranches.
     */
    cursor?: CompanyBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyBranches.
     */
    distinct?: CompanyBranchScalarFieldEnum | CompanyBranchScalarFieldEnum[]
  }

  /**
   * CompanyBranch findFirstOrThrow
   */
  export type CompanyBranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyBranchInclude<ExtArgs> | null
    /**
     * Filter, which CompanyBranch to fetch.
     */
    where?: CompanyBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBranches to fetch.
     */
    orderBy?: CompanyBranchOrderByWithRelationInput | CompanyBranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyBranches.
     */
    cursor?: CompanyBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBranches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyBranches.
     */
    distinct?: CompanyBranchScalarFieldEnum | CompanyBranchScalarFieldEnum[]
  }

  /**
   * CompanyBranch findMany
   */
  export type CompanyBranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyBranchInclude<ExtArgs> | null
    /**
     * Filter, which CompanyBranches to fetch.
     */
    where?: CompanyBranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyBranches to fetch.
     */
    orderBy?: CompanyBranchOrderByWithRelationInput | CompanyBranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyBranches.
     */
    cursor?: CompanyBranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyBranches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyBranches.
     */
    skip?: number
    distinct?: CompanyBranchScalarFieldEnum | CompanyBranchScalarFieldEnum[]
  }

  /**
   * CompanyBranch create
   */
  export type CompanyBranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyBranchInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyBranch.
     */
    data: XOR<CompanyBranchCreateInput, CompanyBranchUncheckedCreateInput>
  }

  /**
   * CompanyBranch createMany
   */
  export type CompanyBranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyBranches.
     */
    data: CompanyBranchCreateManyInput | CompanyBranchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompanyBranch createManyAndReturn
   */
  export type CompanyBranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CompanyBranches.
     */
    data: CompanyBranchCreateManyInput | CompanyBranchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyBranchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyBranch update
   */
  export type CompanyBranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyBranchInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyBranch.
     */
    data: XOR<CompanyBranchUpdateInput, CompanyBranchUncheckedUpdateInput>
    /**
     * Choose, which CompanyBranch to update.
     */
    where: CompanyBranchWhereUniqueInput
  }

  /**
   * CompanyBranch updateMany
   */
  export type CompanyBranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyBranches.
     */
    data: XOR<CompanyBranchUpdateManyMutationInput, CompanyBranchUncheckedUpdateManyInput>
    /**
     * Filter which CompanyBranches to update
     */
    where?: CompanyBranchWhereInput
  }

  /**
   * CompanyBranch upsert
   */
  export type CompanyBranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyBranchInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyBranch to update in case it exists.
     */
    where: CompanyBranchWhereUniqueInput
    /**
     * In case the CompanyBranch found by the `where` argument doesn't exist, create a new CompanyBranch with this data.
     */
    create: XOR<CompanyBranchCreateInput, CompanyBranchUncheckedCreateInput>
    /**
     * In case the CompanyBranch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyBranchUpdateInput, CompanyBranchUncheckedUpdateInput>
  }

  /**
   * CompanyBranch delete
   */
  export type CompanyBranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyBranchInclude<ExtArgs> | null
    /**
     * Filter which CompanyBranch to delete.
     */
    where: CompanyBranchWhereUniqueInput
  }

  /**
   * CompanyBranch deleteMany
   */
  export type CompanyBranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyBranches to delete
     */
    where?: CompanyBranchWhereInput
  }

  /**
   * CompanyBranch.users
   */
  export type CompanyBranch$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * CompanyBranch.Company
   */
  export type CompanyBranch$CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    where?: CompanyWhereInput
  }

  /**
   * CompanyBranch without action
   */
  export type CompanyBranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyBranch
     */
    select?: CompanyBranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyBranchInclude<ExtArgs> | null
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
    is_deleted: 'is_deleted',
    user_code: 'user_code',
    name: 'name',
    display_name: 'display_name',
    company_id: 'company_id',
    company_branch_id: 'company_branch_id',
    profile: 'profile',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role_id: 'role_id',
    current_address: 'current_address',
    permanent_address: 'permanent_address',
    city: 'city',
    postcode: 'postcode',
    country: 'country',
    state: 'state',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_by: 'updated_by',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    id: 'id',
    is_deleted: 'is_deleted',
    name: 'name',
    description: 'description',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_by: 'updated_by',
    updated_at: 'updated_at'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const UserLoginLogScalarFieldEnum: {
    id: 'id',
    is_deleted: 'is_deleted',
    status: 'status',
    mac_address: 'mac_address',
    user_id: 'user_id',
    system_info: 'system_info',
    created_at: 'created_at'
  };

  export type UserLoginLogScalarFieldEnum = (typeof UserLoginLogScalarFieldEnum)[keyof typeof UserLoginLogScalarFieldEnum]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    is_deleted: 'is_deleted',
    name: 'name',
    description: 'description',
    status: 'status',
    system_info: 'system_info',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_by: 'updated_by',
    updated_at: 'updated_at'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const CompanyBranchScalarFieldEnum: {
    id: 'id',
    is_deleted: 'is_deleted',
    company_id: 'company_id',
    name: 'name',
    description: 'description',
    status: 'status',
    system_info: 'system_info',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_by: 'updated_by',
    updated_at: 'updated_at'
  };

  export type CompanyBranchScalarFieldEnum = (typeof CompanyBranchScalarFieldEnum)[keyof typeof CompanyBranchScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    is_deleted?: BoolFilter<"User"> | boolean
    user_code?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    display_name?: StringFilter<"User"> | string
    company_id?: BigIntFilter<"User"> | bigint | number
    company_branch_id?: BigIntFilter<"User"> | bigint | number
    profile?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    role_id?: IntNullableFilter<"User"> | number | null
    current_address?: StringNullableFilter<"User"> | string | null
    permanent_address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    postcode?: IntNullableFilter<"User"> | number | null
    country?: IntFilter<"User"> | number
    state?: IntNullableFilter<"User"> | number | null
    created_by?: IntNullableFilter<"User"> | number | null
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    updated_by?: IntNullableFilter<"User"> | number | null
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    UserRole?: XOR<UserRoleNullableRelationFilter, UserRoleWhereInput> | null
    Company?: XOR<CompanyNullableRelationFilter, CompanyWhereInput> | null
    CompanyBranch?: XOR<CompanyBranchNullableRelationFilter, CompanyBranchWhereInput> | null
    UserLoginLog?: UserLoginLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    user_code?: SortOrder
    name?: SortOrder
    display_name?: SortOrder
    company_id?: SortOrder
    company_branch_id?: SortOrder
    profile?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role_id?: SortOrderInput | SortOrder
    current_address?: SortOrderInput | SortOrder
    permanent_address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postcode?: SortOrderInput | SortOrder
    country?: SortOrder
    state?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    UserRole?: UserRoleOrderByWithRelationInput
    Company?: CompanyOrderByWithRelationInput
    CompanyBranch?: CompanyBranchOrderByWithRelationInput
    UserLoginLog?: UserLoginLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    is_deleted?: BoolFilter<"User"> | boolean
    user_code?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    display_name?: StringFilter<"User"> | string
    company_id?: BigIntFilter<"User"> | bigint | number
    company_branch_id?: BigIntFilter<"User"> | bigint | number
    profile?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role_id?: IntNullableFilter<"User"> | number | null
    current_address?: StringNullableFilter<"User"> | string | null
    permanent_address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    postcode?: IntNullableFilter<"User"> | number | null
    country?: IntFilter<"User"> | number
    state?: IntNullableFilter<"User"> | number | null
    created_by?: IntNullableFilter<"User"> | number | null
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    updated_by?: IntNullableFilter<"User"> | number | null
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
    UserRole?: XOR<UserRoleNullableRelationFilter, UserRoleWhereInput> | null
    Company?: XOR<CompanyNullableRelationFilter, CompanyWhereInput> | null
    CompanyBranch?: XOR<CompanyBranchNullableRelationFilter, CompanyBranchWhereInput> | null
    UserLoginLog?: UserLoginLogListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    user_code?: SortOrder
    name?: SortOrder
    display_name?: SortOrder
    company_id?: SortOrder
    company_branch_id?: SortOrder
    profile?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role_id?: SortOrderInput | SortOrder
    current_address?: SortOrderInput | SortOrder
    permanent_address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postcode?: SortOrderInput | SortOrder
    country?: SortOrder
    state?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
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
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    is_deleted?: BoolWithAggregatesFilter<"User"> | boolean
    user_code?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    display_name?: StringWithAggregatesFilter<"User"> | string
    company_id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    company_branch_id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    profile?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    role_id?: IntNullableWithAggregatesFilter<"User"> | number | null
    current_address?: StringNullableWithAggregatesFilter<"User"> | string | null
    permanent_address?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    postcode?: IntNullableWithAggregatesFilter<"User"> | number | null
    country?: IntWithAggregatesFilter<"User"> | number
    state?: IntNullableWithAggregatesFilter<"User"> | number | null
    created_by?: IntNullableWithAggregatesFilter<"User"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    updated_by?: IntNullableWithAggregatesFilter<"User"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    id?: IntFilter<"UserRole"> | number
    is_deleted?: BoolFilter<"UserRole"> | boolean
    name?: StringFilter<"UserRole"> | string
    description?: StringNullableFilter<"UserRole"> | string | null
    created_by?: IntNullableFilter<"UserRole"> | number | null
    created_at?: DateTimeFilter<"UserRole"> | Date | string
    updated_by?: IntNullableFilter<"UserRole"> | number | null
    updated_at?: DateTimeNullableFilter<"UserRole"> | Date | string | null
    users?: UserListRelationFilter
  }

  export type UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    is_deleted?: BoolFilter<"UserRole"> | boolean
    description?: StringNullableFilter<"UserRole"> | string | null
    created_by?: IntNullableFilter<"UserRole"> | number | null
    created_at?: DateTimeFilter<"UserRole"> | Date | string
    updated_by?: IntNullableFilter<"UserRole"> | number | null
    updated_at?: DateTimeNullableFilter<"UserRole"> | Date | string | null
    users?: UserListRelationFilter
  }, "id" | "name">

  export type UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _avg?: UserRoleAvgOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
    _sum?: UserRoleSumOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserRole"> | number
    is_deleted?: BoolWithAggregatesFilter<"UserRole"> | boolean
    name?: StringWithAggregatesFilter<"UserRole"> | string
    description?: StringNullableWithAggregatesFilter<"UserRole"> | string | null
    created_by?: IntNullableWithAggregatesFilter<"UserRole"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
    updated_by?: IntNullableWithAggregatesFilter<"UserRole"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"UserRole"> | Date | string | null
  }

  export type UserLoginLogWhereInput = {
    AND?: UserLoginLogWhereInput | UserLoginLogWhereInput[]
    OR?: UserLoginLogWhereInput[]
    NOT?: UserLoginLogWhereInput | UserLoginLogWhereInput[]
    id?: BigIntFilter<"UserLoginLog"> | bigint | number
    is_deleted?: BoolFilter<"UserLoginLog"> | boolean
    status?: IntFilter<"UserLoginLog"> | number
    mac_address?: StringFilter<"UserLoginLog"> | string
    user_id?: BigIntFilter<"UserLoginLog"> | bigint | number
    system_info?: JsonFilter<"UserLoginLog">
    created_at?: DateTimeFilter<"UserLoginLog"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type UserLoginLogOrderByWithRelationInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    status?: SortOrder
    mac_address?: SortOrder
    user_id?: SortOrder
    system_info?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserLoginLogWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserLoginLogWhereInput | UserLoginLogWhereInput[]
    OR?: UserLoginLogWhereInput[]
    NOT?: UserLoginLogWhereInput | UserLoginLogWhereInput[]
    is_deleted?: BoolFilter<"UserLoginLog"> | boolean
    status?: IntFilter<"UserLoginLog"> | number
    mac_address?: StringFilter<"UserLoginLog"> | string
    user_id?: BigIntFilter<"UserLoginLog"> | bigint | number
    system_info?: JsonFilter<"UserLoginLog">
    created_at?: DateTimeFilter<"UserLoginLog"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type UserLoginLogOrderByWithAggregationInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    status?: SortOrder
    mac_address?: SortOrder
    user_id?: SortOrder
    system_info?: SortOrder
    created_at?: SortOrder
    _count?: UserLoginLogCountOrderByAggregateInput
    _avg?: UserLoginLogAvgOrderByAggregateInput
    _max?: UserLoginLogMaxOrderByAggregateInput
    _min?: UserLoginLogMinOrderByAggregateInput
    _sum?: UserLoginLogSumOrderByAggregateInput
  }

  export type UserLoginLogScalarWhereWithAggregatesInput = {
    AND?: UserLoginLogScalarWhereWithAggregatesInput | UserLoginLogScalarWhereWithAggregatesInput[]
    OR?: UserLoginLogScalarWhereWithAggregatesInput[]
    NOT?: UserLoginLogScalarWhereWithAggregatesInput | UserLoginLogScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UserLoginLog"> | bigint | number
    is_deleted?: BoolWithAggregatesFilter<"UserLoginLog"> | boolean
    status?: IntWithAggregatesFilter<"UserLoginLog"> | number
    mac_address?: StringWithAggregatesFilter<"UserLoginLog"> | string
    user_id?: BigIntWithAggregatesFilter<"UserLoginLog"> | bigint | number
    system_info?: JsonWithAggregatesFilter<"UserLoginLog">
    created_at?: DateTimeWithAggregatesFilter<"UserLoginLog"> | Date | string
  }

  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: BigIntFilter<"Company"> | bigint | number
    is_deleted?: BoolFilter<"Company"> | boolean
    name?: StringFilter<"Company"> | string
    description?: StringNullableFilter<"Company"> | string | null
    status?: IntFilter<"Company"> | number
    system_info?: JsonFilter<"Company">
    created_by?: IntNullableFilter<"Company"> | number | null
    created_at?: DateTimeFilter<"Company"> | Date | string
    updated_by?: IntNullableFilter<"Company"> | number | null
    updated_at?: DateTimeNullableFilter<"Company"> | Date | string | null
    users?: UserListRelationFilter
    CompanyBranch?: CompanyBranchListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    system_info?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    CompanyBranch?: CompanyBranchOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    name?: string
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    is_deleted?: BoolFilter<"Company"> | boolean
    description?: StringNullableFilter<"Company"> | string | null
    status?: IntFilter<"Company"> | number
    system_info?: JsonFilter<"Company">
    created_by?: IntNullableFilter<"Company"> | number | null
    created_at?: DateTimeFilter<"Company"> | Date | string
    updated_by?: IntNullableFilter<"Company"> | number | null
    updated_at?: DateTimeNullableFilter<"Company"> | Date | string | null
    users?: UserListRelationFilter
    CompanyBranch?: CompanyBranchListRelationFilter
  }, "id" | "name">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    system_info?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Company"> | bigint | number
    is_deleted?: BoolWithAggregatesFilter<"Company"> | boolean
    name?: StringWithAggregatesFilter<"Company"> | string
    description?: StringNullableWithAggregatesFilter<"Company"> | string | null
    status?: IntWithAggregatesFilter<"Company"> | number
    system_info?: JsonWithAggregatesFilter<"Company">
    created_by?: IntNullableWithAggregatesFilter<"Company"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"Company"> | Date | string
    updated_by?: IntNullableWithAggregatesFilter<"Company"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Company"> | Date | string | null
  }

  export type CompanyBranchWhereInput = {
    AND?: CompanyBranchWhereInput | CompanyBranchWhereInput[]
    OR?: CompanyBranchWhereInput[]
    NOT?: CompanyBranchWhereInput | CompanyBranchWhereInput[]
    id?: BigIntFilter<"CompanyBranch"> | bigint | number
    is_deleted?: BoolFilter<"CompanyBranch"> | boolean
    company_id?: BigIntFilter<"CompanyBranch"> | bigint | number
    name?: StringFilter<"CompanyBranch"> | string
    description?: StringNullableFilter<"CompanyBranch"> | string | null
    status?: IntFilter<"CompanyBranch"> | number
    system_info?: JsonFilter<"CompanyBranch">
    created_by?: IntNullableFilter<"CompanyBranch"> | number | null
    created_at?: DateTimeFilter<"CompanyBranch"> | Date | string
    updated_by?: IntNullableFilter<"CompanyBranch"> | number | null
    updated_at?: DateTimeNullableFilter<"CompanyBranch"> | Date | string | null
    users?: UserListRelationFilter
    Company?: XOR<CompanyNullableRelationFilter, CompanyWhereInput> | null
  }

  export type CompanyBranchOrderByWithRelationInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    system_info?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    Company?: CompanyOrderByWithRelationInput
  }

  export type CompanyBranchWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    name?: string
    AND?: CompanyBranchWhereInput | CompanyBranchWhereInput[]
    OR?: CompanyBranchWhereInput[]
    NOT?: CompanyBranchWhereInput | CompanyBranchWhereInput[]
    is_deleted?: BoolFilter<"CompanyBranch"> | boolean
    company_id?: BigIntFilter<"CompanyBranch"> | bigint | number
    description?: StringNullableFilter<"CompanyBranch"> | string | null
    status?: IntFilter<"CompanyBranch"> | number
    system_info?: JsonFilter<"CompanyBranch">
    created_by?: IntNullableFilter<"CompanyBranch"> | number | null
    created_at?: DateTimeFilter<"CompanyBranch"> | Date | string
    updated_by?: IntNullableFilter<"CompanyBranch"> | number | null
    updated_at?: DateTimeNullableFilter<"CompanyBranch"> | Date | string | null
    users?: UserListRelationFilter
    Company?: XOR<CompanyNullableRelationFilter, CompanyWhereInput> | null
  }, "id" | "name">

  export type CompanyBranchOrderByWithAggregationInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    system_info?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: CompanyBranchCountOrderByAggregateInput
    _avg?: CompanyBranchAvgOrderByAggregateInput
    _max?: CompanyBranchMaxOrderByAggregateInput
    _min?: CompanyBranchMinOrderByAggregateInput
    _sum?: CompanyBranchSumOrderByAggregateInput
  }

  export type CompanyBranchScalarWhereWithAggregatesInput = {
    AND?: CompanyBranchScalarWhereWithAggregatesInput | CompanyBranchScalarWhereWithAggregatesInput[]
    OR?: CompanyBranchScalarWhereWithAggregatesInput[]
    NOT?: CompanyBranchScalarWhereWithAggregatesInput | CompanyBranchScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CompanyBranch"> | bigint | number
    is_deleted?: BoolWithAggregatesFilter<"CompanyBranch"> | boolean
    company_id?: BigIntWithAggregatesFilter<"CompanyBranch"> | bigint | number
    name?: StringWithAggregatesFilter<"CompanyBranch"> | string
    description?: StringNullableWithAggregatesFilter<"CompanyBranch"> | string | null
    status?: IntWithAggregatesFilter<"CompanyBranch"> | number
    system_info?: JsonWithAggregatesFilter<"CompanyBranch">
    created_by?: IntNullableWithAggregatesFilter<"CompanyBranch"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"CompanyBranch"> | Date | string
    updated_by?: IntNullableWithAggregatesFilter<"CompanyBranch"> | number | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"CompanyBranch"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: bigint | number
    is_deleted?: boolean
    user_code: string
    name: string
    display_name: string
    profile?: string | null
    email: string
    password: string
    phone: string
    current_address?: string | null
    permanent_address?: string | null
    city?: string | null
    postcode?: number | null
    country: number
    state?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_by?: number | null
    updated_at?: Date | string | null
    UserRole?: UserRoleCreateNestedOneWithoutUsersInput
    Company?: CompanyCreateNestedOneWithoutUsersInput
    CompanyBranch?: CompanyBranchCreateNestedOneWithoutUsersInput
    UserLoginLog?: UserLoginLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    is_deleted?: boolean
    user_code: string
    name: string
    display_name: string
    company_id: bigint | number
    company_branch_id: bigint | number
    profile?: string | null
    email: string
    password: string
    phone: string
    role_id?: number | null
    current_address?: string | null
    permanent_address?: string | null
    city?: string | null
    postcode?: number | null
    country: number
    state?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_by?: number | null
    updated_at?: Date | string | null
    UserLoginLog?: UserLoginLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserRole?: UserRoleUpdateOneWithoutUsersNestedInput
    Company?: CompanyUpdateOneWithoutUsersNestedInput
    CompanyBranch?: CompanyBranchUpdateOneWithoutUsersNestedInput
    UserLoginLog?: UserLoginLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    company_id?: BigIntFieldUpdateOperationsInput | bigint | number
    company_branch_id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserLoginLog?: UserLoginLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    is_deleted?: boolean
    user_code: string
    name: string
    display_name: string
    company_id: bigint | number
    company_branch_id: bigint | number
    profile?: string | null
    email: string
    password: string
    phone: string
    role_id?: number | null
    current_address?: string | null
    permanent_address?: string | null
    city?: string | null
    postcode?: number | null
    country: number
    state?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    company_id?: BigIntFieldUpdateOperationsInput | bigint | number
    company_branch_id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRoleCreateInput = {
    is_deleted?: boolean
    name: string
    description?: string | null
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
    users?: UserCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleUncheckedCreateInput = {
    id?: number
    is_deleted?: boolean
    name: string
    description?: string | null
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutUserRoleInput
  }

  export type UserRoleUpdateInput = {
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutUserRoleNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutUserRoleNestedInput
  }

  export type UserRoleCreateManyInput = {
    id?: number
    is_deleted?: boolean
    name: string
    description?: string | null
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type UserRoleUpdateManyMutationInput = {
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserLoginLogCreateInput = {
    id?: bigint | number
    is_deleted?: boolean
    status: number
    mac_address: string
    system_info: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
    user?: UserCreateNestedOneWithoutUserLoginLogInput
  }

  export type UserLoginLogUncheckedCreateInput = {
    id?: bigint | number
    is_deleted?: boolean
    status: number
    mac_address: string
    user_id: bigint | number
    system_info: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type UserLoginLogUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    mac_address?: StringFieldUpdateOperationsInput | string
    system_info?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutUserLoginLogNestedInput
  }

  export type UserLoginLogUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    mac_address?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLoginLogCreateManyInput = {
    id?: bigint | number
    is_deleted?: boolean
    status: number
    mac_address: string
    user_id: bigint | number
    system_info: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type UserLoginLogUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    mac_address?: StringFieldUpdateOperationsInput | string
    system_info?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLoginLogUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    mac_address?: StringFieldUpdateOperationsInput | string
    user_id?: BigIntFieldUpdateOperationsInput | bigint | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompanyCreateInput = {
    id?: bigint | number
    is_deleted?: boolean
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyInput
    CompanyBranch?: CompanyBranchCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: bigint | number
    is_deleted?: boolean
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
    CompanyBranch?: CompanyBranchUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyNestedInput
    CompanyBranch?: CompanyBranchUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
    CompanyBranch?: CompanyBranchUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: bigint | number
    is_deleted?: boolean
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type CompanyUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyBranchCreateInput = {
    id?: bigint | number
    is_deleted?: boolean
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyBranchInput
    Company?: CompanyCreateNestedOneWithoutCompanyBranchInput
  }

  export type CompanyBranchUncheckedCreateInput = {
    id?: bigint | number
    is_deleted?: boolean
    company_id: bigint | number
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyBranchNestedInput
    Company?: CompanyUpdateOneWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    company_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchCreateManyInput = {
    id?: bigint | number
    is_deleted?: boolean
    company_id: bigint | number
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type CompanyBranchUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyBranchUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    company_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UserRoleNullableRelationFilter = {
    is?: UserRoleWhereInput | null
    isNot?: UserRoleWhereInput | null
  }

  export type CompanyNullableRelationFilter = {
    is?: CompanyWhereInput | null
    isNot?: CompanyWhereInput | null
  }

  export type CompanyBranchNullableRelationFilter = {
    is?: CompanyBranchWhereInput | null
    isNot?: CompanyBranchWhereInput | null
  }

  export type UserLoginLogListRelationFilter = {
    every?: UserLoginLogWhereInput
    some?: UserLoginLogWhereInput
    none?: UserLoginLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserLoginLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    user_code?: SortOrder
    name?: SortOrder
    display_name?: SortOrder
    company_id?: SortOrder
    company_branch_id?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role_id?: SortOrder
    current_address?: SortOrder
    permanent_address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    country?: SortOrder
    state?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    company_branch_id?: SortOrder
    role_id?: SortOrder
    postcode?: SortOrder
    country?: SortOrder
    state?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    user_code?: SortOrder
    name?: SortOrder
    display_name?: SortOrder
    company_id?: SortOrder
    company_branch_id?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role_id?: SortOrder
    current_address?: SortOrder
    permanent_address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    country?: SortOrder
    state?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    user_code?: SortOrder
    name?: SortOrder
    display_name?: SortOrder
    company_id?: SortOrder
    company_branch_id?: SortOrder
    profile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role_id?: SortOrder
    current_address?: SortOrder
    permanent_address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    country?: SortOrder
    state?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    company_branch_id?: SortOrder
    role_id?: SortOrder
    postcode?: SortOrder
    country?: SortOrder
    state?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
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
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserLoginLogCountOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    status?: SortOrder
    mac_address?: SortOrder
    user_id?: SortOrder
    system_info?: SortOrder
    created_at?: SortOrder
  }

  export type UserLoginLogAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
  }

  export type UserLoginLogMaxOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    status?: SortOrder
    mac_address?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type UserLoginLogMinOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    status?: SortOrder
    mac_address?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
  }

  export type UserLoginLogSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    user_id?: SortOrder
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
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CompanyBranchListRelationFilter = {
    every?: CompanyBranchWhereInput
    some?: CompanyBranchWhereInput
    none?: CompanyBranchWhereInput
  }

  export type CompanyBranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    system_info?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type CompanyBranchCountOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    system_info?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyBranchAvgOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type CompanyBranchMaxOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyBranchMinOrderByAggregateInput = {
    id?: SortOrder
    is_deleted?: SortOrder
    company_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_by?: SortOrder
    updated_at?: SortOrder
  }

  export type CompanyBranchSumOrderByAggregateInput = {
    id?: SortOrder
    company_id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type UserRoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput
    connect?: UserRoleWhereUniqueInput
  }

  export type CompanyCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    connect?: CompanyWhereUniqueInput
  }

  export type CompanyBranchCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompanyBranchCreateWithoutUsersInput, CompanyBranchUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyBranchCreateOrConnectWithoutUsersInput
    connect?: CompanyBranchWhereUniqueInput
  }

  export type UserLoginLogCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLoginLogCreateWithoutUserInput, UserLoginLogUncheckedCreateWithoutUserInput> | UserLoginLogCreateWithoutUserInput[] | UserLoginLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLoginLogCreateOrConnectWithoutUserInput | UserLoginLogCreateOrConnectWithoutUserInput[]
    createMany?: UserLoginLogCreateManyUserInputEnvelope
    connect?: UserLoginLogWhereUniqueInput | UserLoginLogWhereUniqueInput[]
  }

  export type UserLoginLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLoginLogCreateWithoutUserInput, UserLoginLogUncheckedCreateWithoutUserInput> | UserLoginLogCreateWithoutUserInput[] | UserLoginLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLoginLogCreateOrConnectWithoutUserInput | UserLoginLogCreateOrConnectWithoutUserInput[]
    createMany?: UserLoginLogCreateManyUserInputEnvelope
    connect?: UserLoginLogWhereUniqueInput | UserLoginLogWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserRoleUpdateOneWithoutUsersNestedInput = {
    create?: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserRoleCreateOrConnectWithoutUsersInput
    upsert?: UserRoleUpsertWithoutUsersInput
    disconnect?: UserRoleWhereInput | boolean
    delete?: UserRoleWhereInput | boolean
    connect?: UserRoleWhereUniqueInput
    update?: XOR<XOR<UserRoleUpdateToOneWithWhereWithoutUsersInput, UserRoleUpdateWithoutUsersInput>, UserRoleUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutUsersInput
    upsert?: CompanyUpsertWithoutUsersInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutUsersInput, CompanyUpdateWithoutUsersInput>, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyBranchUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CompanyBranchCreateWithoutUsersInput, CompanyBranchUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompanyBranchCreateOrConnectWithoutUsersInput
    upsert?: CompanyBranchUpsertWithoutUsersInput
    disconnect?: CompanyBranchWhereInput | boolean
    delete?: CompanyBranchWhereInput | boolean
    connect?: CompanyBranchWhereUniqueInput
    update?: XOR<XOR<CompanyBranchUpdateToOneWithWhereWithoutUsersInput, CompanyBranchUpdateWithoutUsersInput>, CompanyBranchUncheckedUpdateWithoutUsersInput>
  }

  export type UserLoginLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLoginLogCreateWithoutUserInput, UserLoginLogUncheckedCreateWithoutUserInput> | UserLoginLogCreateWithoutUserInput[] | UserLoginLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLoginLogCreateOrConnectWithoutUserInput | UserLoginLogCreateOrConnectWithoutUserInput[]
    upsert?: UserLoginLogUpsertWithWhereUniqueWithoutUserInput | UserLoginLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLoginLogCreateManyUserInputEnvelope
    set?: UserLoginLogWhereUniqueInput | UserLoginLogWhereUniqueInput[]
    disconnect?: UserLoginLogWhereUniqueInput | UserLoginLogWhereUniqueInput[]
    delete?: UserLoginLogWhereUniqueInput | UserLoginLogWhereUniqueInput[]
    connect?: UserLoginLogWhereUniqueInput | UserLoginLogWhereUniqueInput[]
    update?: UserLoginLogUpdateWithWhereUniqueWithoutUserInput | UserLoginLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLoginLogUpdateManyWithWhereWithoutUserInput | UserLoginLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLoginLogScalarWhereInput | UserLoginLogScalarWhereInput[]
  }

  export type UserLoginLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLoginLogCreateWithoutUserInput, UserLoginLogUncheckedCreateWithoutUserInput> | UserLoginLogCreateWithoutUserInput[] | UserLoginLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLoginLogCreateOrConnectWithoutUserInput | UserLoginLogCreateOrConnectWithoutUserInput[]
    upsert?: UserLoginLogUpsertWithWhereUniqueWithoutUserInput | UserLoginLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLoginLogCreateManyUserInputEnvelope
    set?: UserLoginLogWhereUniqueInput | UserLoginLogWhereUniqueInput[]
    disconnect?: UserLoginLogWhereUniqueInput | UserLoginLogWhereUniqueInput[]
    delete?: UserLoginLogWhereUniqueInput | UserLoginLogWhereUniqueInput[]
    connect?: UserLoginLogWhereUniqueInput | UserLoginLogWhereUniqueInput[]
    update?: UserLoginLogUpdateWithWhereUniqueWithoutUserInput | UserLoginLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLoginLogUpdateManyWithWhereWithoutUserInput | UserLoginLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLoginLogScalarWhereInput | UserLoginLogScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutUserRoleInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUserRoleInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutUserRoleNestedInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUserRoleInput | UserUpsertWithWhereUniqueWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUserRoleInput | UserUpdateWithWhereUniqueWithoutUserRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUserRoleInput | UserUpdateManyWithWhereWithoutUserRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUserRoleNestedInput = {
    create?: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput> | UserCreateWithoutUserRoleInput[] | UserUncheckedCreateWithoutUserRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUserRoleInput | UserCreateOrConnectWithoutUserRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUserRoleInput | UserUpsertWithWhereUniqueWithoutUserRoleInput[]
    createMany?: UserCreateManyUserRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUserRoleInput | UserUpdateWithWhereUniqueWithoutUserRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUserRoleInput | UserUpdateManyWithWhereWithoutUserRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserLoginLogInput = {
    create?: XOR<UserCreateWithoutUserLoginLogInput, UserUncheckedCreateWithoutUserLoginLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserLoginLogInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutUserLoginLogNestedInput = {
    create?: XOR<UserCreateWithoutUserLoginLogInput, UserUncheckedCreateWithoutUserLoginLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserLoginLogInput
    upsert?: UserUpsertWithoutUserLoginLogInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserLoginLogInput, UserUpdateWithoutUserLoginLogInput>, UserUncheckedUpdateWithoutUserLoginLogInput>
  }

  export type UserCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CompanyBranchCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyBranchCreateWithoutCompanyInput, CompanyBranchUncheckedCreateWithoutCompanyInput> | CompanyBranchCreateWithoutCompanyInput[] | CompanyBranchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyBranchCreateOrConnectWithoutCompanyInput | CompanyBranchCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyBranchCreateManyCompanyInputEnvelope
    connect?: CompanyBranchWhereUniqueInput | CompanyBranchWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CompanyBranchUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CompanyBranchCreateWithoutCompanyInput, CompanyBranchUncheckedCreateWithoutCompanyInput> | CompanyBranchCreateWithoutCompanyInput[] | CompanyBranchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyBranchCreateOrConnectWithoutCompanyInput | CompanyBranchCreateOrConnectWithoutCompanyInput[]
    createMany?: CompanyBranchCreateManyCompanyInputEnvelope
    connect?: CompanyBranchWhereUniqueInput | CompanyBranchWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CompanyBranchUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyBranchCreateWithoutCompanyInput, CompanyBranchUncheckedCreateWithoutCompanyInput> | CompanyBranchCreateWithoutCompanyInput[] | CompanyBranchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyBranchCreateOrConnectWithoutCompanyInput | CompanyBranchCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyBranchUpsertWithWhereUniqueWithoutCompanyInput | CompanyBranchUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyBranchCreateManyCompanyInputEnvelope
    set?: CompanyBranchWhereUniqueInput | CompanyBranchWhereUniqueInput[]
    disconnect?: CompanyBranchWhereUniqueInput | CompanyBranchWhereUniqueInput[]
    delete?: CompanyBranchWhereUniqueInput | CompanyBranchWhereUniqueInput[]
    connect?: CompanyBranchWhereUniqueInput | CompanyBranchWhereUniqueInput[]
    update?: CompanyBranchUpdateWithWhereUniqueWithoutCompanyInput | CompanyBranchUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyBranchUpdateManyWithWhereWithoutCompanyInput | CompanyBranchUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyBranchScalarWhereInput | CompanyBranchScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput> | UserCreateWithoutCompanyInput[] | UserUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyInput | UserCreateOrConnectWithoutCompanyInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyInput | UserUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: UserCreateManyCompanyInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyInput | UserUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyInput | UserUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CompanyBranchUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CompanyBranchCreateWithoutCompanyInput, CompanyBranchUncheckedCreateWithoutCompanyInput> | CompanyBranchCreateWithoutCompanyInput[] | CompanyBranchUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CompanyBranchCreateOrConnectWithoutCompanyInput | CompanyBranchCreateOrConnectWithoutCompanyInput[]
    upsert?: CompanyBranchUpsertWithWhereUniqueWithoutCompanyInput | CompanyBranchUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CompanyBranchCreateManyCompanyInputEnvelope
    set?: CompanyBranchWhereUniqueInput | CompanyBranchWhereUniqueInput[]
    disconnect?: CompanyBranchWhereUniqueInput | CompanyBranchWhereUniqueInput[]
    delete?: CompanyBranchWhereUniqueInput | CompanyBranchWhereUniqueInput[]
    connect?: CompanyBranchWhereUniqueInput | CompanyBranchWhereUniqueInput[]
    update?: CompanyBranchUpdateWithWhereUniqueWithoutCompanyInput | CompanyBranchUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CompanyBranchUpdateManyWithWhereWithoutCompanyInput | CompanyBranchUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CompanyBranchScalarWhereInput | CompanyBranchScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutCompanyBranchInput = {
    create?: XOR<UserCreateWithoutCompanyBranchInput, UserUncheckedCreateWithoutCompanyBranchInput> | UserCreateWithoutCompanyBranchInput[] | UserUncheckedCreateWithoutCompanyBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyBranchInput | UserCreateOrConnectWithoutCompanyBranchInput[]
    createMany?: UserCreateManyCompanyBranchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CompanyCreateNestedOneWithoutCompanyBranchInput = {
    create?: XOR<CompanyCreateWithoutCompanyBranchInput, CompanyUncheckedCreateWithoutCompanyBranchInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCompanyBranchInput
    connect?: CompanyWhereUniqueInput
  }

  export type UserUncheckedCreateNestedManyWithoutCompanyBranchInput = {
    create?: XOR<UserCreateWithoutCompanyBranchInput, UserUncheckedCreateWithoutCompanyBranchInput> | UserCreateWithoutCompanyBranchInput[] | UserUncheckedCreateWithoutCompanyBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyBranchInput | UserCreateOrConnectWithoutCompanyBranchInput[]
    createMany?: UserCreateManyCompanyBranchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutCompanyBranchNestedInput = {
    create?: XOR<UserCreateWithoutCompanyBranchInput, UserUncheckedCreateWithoutCompanyBranchInput> | UserCreateWithoutCompanyBranchInput[] | UserUncheckedCreateWithoutCompanyBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyBranchInput | UserCreateOrConnectWithoutCompanyBranchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyBranchInput | UserUpsertWithWhereUniqueWithoutCompanyBranchInput[]
    createMany?: UserCreateManyCompanyBranchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyBranchInput | UserUpdateWithWhereUniqueWithoutCompanyBranchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyBranchInput | UserUpdateManyWithWhereWithoutCompanyBranchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CompanyUpdateOneWithoutCompanyBranchNestedInput = {
    create?: XOR<CompanyCreateWithoutCompanyBranchInput, CompanyUncheckedCreateWithoutCompanyBranchInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutCompanyBranchInput
    upsert?: CompanyUpsertWithoutCompanyBranchInput
    disconnect?: CompanyWhereInput | boolean
    delete?: CompanyWhereInput | boolean
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutCompanyBranchInput, CompanyUpdateWithoutCompanyBranchInput>, CompanyUncheckedUpdateWithoutCompanyBranchInput>
  }

  export type UserUncheckedUpdateManyWithoutCompanyBranchNestedInput = {
    create?: XOR<UserCreateWithoutCompanyBranchInput, UserUncheckedCreateWithoutCompanyBranchInput> | UserCreateWithoutCompanyBranchInput[] | UserUncheckedCreateWithoutCompanyBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCompanyBranchInput | UserCreateOrConnectWithoutCompanyBranchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCompanyBranchInput | UserUpsertWithWhereUniqueWithoutCompanyBranchInput[]
    createMany?: UserCreateManyCompanyBranchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCompanyBranchInput | UserUpdateWithWhereUniqueWithoutCompanyBranchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCompanyBranchInput | UserUpdateManyWithWhereWithoutCompanyBranchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserRoleCreateWithoutUsersInput = {
    is_deleted?: boolean
    name: string
    description?: string | null
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type UserRoleUncheckedCreateWithoutUsersInput = {
    id?: number
    is_deleted?: boolean
    name: string
    description?: string | null
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type UserRoleCreateOrConnectWithoutUsersInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
  }

  export type CompanyCreateWithoutUsersInput = {
    id?: bigint | number
    is_deleted?: boolean
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
    CompanyBranch?: CompanyBranchCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    is_deleted?: boolean
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
    CompanyBranch?: CompanyBranchUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutUsersInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
  }

  export type CompanyBranchCreateWithoutUsersInput = {
    id?: bigint | number
    is_deleted?: boolean
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
    Company?: CompanyCreateNestedOneWithoutCompanyBranchInput
  }

  export type CompanyBranchUncheckedCreateWithoutUsersInput = {
    id?: bigint | number
    is_deleted?: boolean
    company_id: bigint | number
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type CompanyBranchCreateOrConnectWithoutUsersInput = {
    where: CompanyBranchWhereUniqueInput
    create: XOR<CompanyBranchCreateWithoutUsersInput, CompanyBranchUncheckedCreateWithoutUsersInput>
  }

  export type UserLoginLogCreateWithoutUserInput = {
    id?: bigint | number
    is_deleted?: boolean
    status: number
    mac_address: string
    system_info: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type UserLoginLogUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    is_deleted?: boolean
    status: number
    mac_address: string
    system_info: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type UserLoginLogCreateOrConnectWithoutUserInput = {
    where: UserLoginLogWhereUniqueInput
    create: XOR<UserLoginLogCreateWithoutUserInput, UserLoginLogUncheckedCreateWithoutUserInput>
  }

  export type UserLoginLogCreateManyUserInputEnvelope = {
    data: UserLoginLogCreateManyUserInput | UserLoginLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithoutUsersInput = {
    update: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
    create: XOR<UserRoleCreateWithoutUsersInput, UserRoleUncheckedCreateWithoutUsersInput>
    where?: UserRoleWhereInput
  }

  export type UserRoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: UserRoleWhereInput
    data: XOR<UserRoleUpdateWithoutUsersInput, UserRoleUncheckedUpdateWithoutUsersInput>
  }

  export type UserRoleUpdateWithoutUsersInput = {
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserRoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyUpsertWithoutUsersInput = {
    update: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyCreateWithoutUsersInput, CompanyUncheckedCreateWithoutUsersInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutUsersInput, CompanyUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CompanyBranch?: CompanyBranchUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CompanyBranch?: CompanyBranchUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyBranchUpsertWithoutUsersInput = {
    update: XOR<CompanyBranchUpdateWithoutUsersInput, CompanyBranchUncheckedUpdateWithoutUsersInput>
    create: XOR<CompanyBranchCreateWithoutUsersInput, CompanyBranchUncheckedCreateWithoutUsersInput>
    where?: CompanyBranchWhereInput
  }

  export type CompanyBranchUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompanyBranchWhereInput
    data: XOR<CompanyBranchUpdateWithoutUsersInput, CompanyBranchUncheckedUpdateWithoutUsersInput>
  }

  export type CompanyBranchUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Company?: CompanyUpdateOneWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchUncheckedUpdateWithoutUsersInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    company_id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserLoginLogUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLoginLogWhereUniqueInput
    update: XOR<UserLoginLogUpdateWithoutUserInput, UserLoginLogUncheckedUpdateWithoutUserInput>
    create: XOR<UserLoginLogCreateWithoutUserInput, UserLoginLogUncheckedCreateWithoutUserInput>
  }

  export type UserLoginLogUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLoginLogWhereUniqueInput
    data: XOR<UserLoginLogUpdateWithoutUserInput, UserLoginLogUncheckedUpdateWithoutUserInput>
  }

  export type UserLoginLogUpdateManyWithWhereWithoutUserInput = {
    where: UserLoginLogScalarWhereInput
    data: XOR<UserLoginLogUpdateManyMutationInput, UserLoginLogUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLoginLogScalarWhereInput = {
    AND?: UserLoginLogScalarWhereInput | UserLoginLogScalarWhereInput[]
    OR?: UserLoginLogScalarWhereInput[]
    NOT?: UserLoginLogScalarWhereInput | UserLoginLogScalarWhereInput[]
    id?: BigIntFilter<"UserLoginLog"> | bigint | number
    is_deleted?: BoolFilter<"UserLoginLog"> | boolean
    status?: IntFilter<"UserLoginLog"> | number
    mac_address?: StringFilter<"UserLoginLog"> | string
    user_id?: BigIntFilter<"UserLoginLog"> | bigint | number
    system_info?: JsonFilter<"UserLoginLog">
    created_at?: DateTimeFilter<"UserLoginLog"> | Date | string
  }

  export type UserCreateWithoutUserRoleInput = {
    id?: bigint | number
    is_deleted?: boolean
    user_code: string
    name: string
    display_name: string
    profile?: string | null
    email: string
    password: string
    phone: string
    current_address?: string | null
    permanent_address?: string | null
    city?: string | null
    postcode?: number | null
    country: number
    state?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_by?: number | null
    updated_at?: Date | string | null
    Company?: CompanyCreateNestedOneWithoutUsersInput
    CompanyBranch?: CompanyBranchCreateNestedOneWithoutUsersInput
    UserLoginLog?: UserLoginLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserRoleInput = {
    id?: bigint | number
    is_deleted?: boolean
    user_code: string
    name: string
    display_name: string
    company_id: bigint | number
    company_branch_id: bigint | number
    profile?: string | null
    email: string
    password: string
    phone: string
    current_address?: string | null
    permanent_address?: string | null
    city?: string | null
    postcode?: number | null
    country: number
    state?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_by?: number | null
    updated_at?: Date | string | null
    UserLoginLog?: UserLoginLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
  }

  export type UserCreateManyUserRoleInputEnvelope = {
    data: UserCreateManyUserRoleInput | UserCreateManyUserRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
    create: XOR<UserCreateWithoutUserRoleInput, UserUncheckedCreateWithoutUserRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUserRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUserRoleInput, UserUncheckedUpdateWithoutUserRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutUserRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUserRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    is_deleted?: BoolFilter<"User"> | boolean
    user_code?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    display_name?: StringFilter<"User"> | string
    company_id?: BigIntFilter<"User"> | bigint | number
    company_branch_id?: BigIntFilter<"User"> | bigint | number
    profile?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    role_id?: IntNullableFilter<"User"> | number | null
    current_address?: StringNullableFilter<"User"> | string | null
    permanent_address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    postcode?: IntNullableFilter<"User"> | number | null
    country?: IntFilter<"User"> | number
    state?: IntNullableFilter<"User"> | number | null
    created_by?: IntNullableFilter<"User"> | number | null
    created_at?: DateTimeNullableFilter<"User"> | Date | string | null
    updated_by?: IntNullableFilter<"User"> | number | null
    updated_at?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserCreateWithoutUserLoginLogInput = {
    id?: bigint | number
    is_deleted?: boolean
    user_code: string
    name: string
    display_name: string
    profile?: string | null
    email: string
    password: string
    phone: string
    current_address?: string | null
    permanent_address?: string | null
    city?: string | null
    postcode?: number | null
    country: number
    state?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_by?: number | null
    updated_at?: Date | string | null
    UserRole?: UserRoleCreateNestedOneWithoutUsersInput
    Company?: CompanyCreateNestedOneWithoutUsersInput
    CompanyBranch?: CompanyBranchCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutUserLoginLogInput = {
    id?: bigint | number
    is_deleted?: boolean
    user_code: string
    name: string
    display_name: string
    company_id: bigint | number
    company_branch_id: bigint | number
    profile?: string | null
    email: string
    password: string
    phone: string
    role_id?: number | null
    current_address?: string | null
    permanent_address?: string | null
    city?: string | null
    postcode?: number | null
    country: number
    state?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type UserCreateOrConnectWithoutUserLoginLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserLoginLogInput, UserUncheckedCreateWithoutUserLoginLogInput>
  }

  export type UserUpsertWithoutUserLoginLogInput = {
    update: XOR<UserUpdateWithoutUserLoginLogInput, UserUncheckedUpdateWithoutUserLoginLogInput>
    create: XOR<UserCreateWithoutUserLoginLogInput, UserUncheckedCreateWithoutUserLoginLogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserLoginLogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserLoginLogInput, UserUncheckedUpdateWithoutUserLoginLogInput>
  }

  export type UserUpdateWithoutUserLoginLogInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserRole?: UserRoleUpdateOneWithoutUsersNestedInput
    Company?: CompanyUpdateOneWithoutUsersNestedInput
    CompanyBranch?: CompanyBranchUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutUserLoginLogInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    company_id?: BigIntFieldUpdateOperationsInput | bigint | number
    company_branch_id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateWithoutCompanyInput = {
    id?: bigint | number
    is_deleted?: boolean
    user_code: string
    name: string
    display_name: string
    profile?: string | null
    email: string
    password: string
    phone: string
    current_address?: string | null
    permanent_address?: string | null
    city?: string | null
    postcode?: number | null
    country: number
    state?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_by?: number | null
    updated_at?: Date | string | null
    UserRole?: UserRoleCreateNestedOneWithoutUsersInput
    CompanyBranch?: CompanyBranchCreateNestedOneWithoutUsersInput
    UserLoginLog?: UserLoginLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyInput = {
    id?: bigint | number
    is_deleted?: boolean
    user_code: string
    name: string
    display_name: string
    company_branch_id: bigint | number
    profile?: string | null
    email: string
    password: string
    phone: string
    role_id?: number | null
    current_address?: string | null
    permanent_address?: string | null
    city?: string | null
    postcode?: number | null
    country: number
    state?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_by?: number | null
    updated_at?: Date | string | null
    UserLoginLog?: UserLoginLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserCreateManyCompanyInputEnvelope = {
    data: UserCreateManyCompanyInput | UserCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type CompanyBranchCreateWithoutCompanyInput = {
    id?: bigint | number
    is_deleted?: boolean
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchUncheckedCreateWithoutCompanyInput = {
    id?: bigint | number
    is_deleted?: boolean
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyBranchInput
  }

  export type CompanyBranchCreateOrConnectWithoutCompanyInput = {
    where: CompanyBranchWhereUniqueInput
    create: XOR<CompanyBranchCreateWithoutCompanyInput, CompanyBranchUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyBranchCreateManyCompanyInputEnvelope = {
    data: CompanyBranchCreateManyCompanyInput | CompanyBranchCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
    create: XOR<UserCreateWithoutCompanyInput, UserUncheckedCreateWithoutCompanyInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyInput, UserUncheckedUpdateWithoutCompanyInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyBranchUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CompanyBranchWhereUniqueInput
    update: XOR<CompanyBranchUpdateWithoutCompanyInput, CompanyBranchUncheckedUpdateWithoutCompanyInput>
    create: XOR<CompanyBranchCreateWithoutCompanyInput, CompanyBranchUncheckedCreateWithoutCompanyInput>
  }

  export type CompanyBranchUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CompanyBranchWhereUniqueInput
    data: XOR<CompanyBranchUpdateWithoutCompanyInput, CompanyBranchUncheckedUpdateWithoutCompanyInput>
  }

  export type CompanyBranchUpdateManyWithWhereWithoutCompanyInput = {
    where: CompanyBranchScalarWhereInput
    data: XOR<CompanyBranchUpdateManyMutationInput, CompanyBranchUncheckedUpdateManyWithoutCompanyInput>
  }

  export type CompanyBranchScalarWhereInput = {
    AND?: CompanyBranchScalarWhereInput | CompanyBranchScalarWhereInput[]
    OR?: CompanyBranchScalarWhereInput[]
    NOT?: CompanyBranchScalarWhereInput | CompanyBranchScalarWhereInput[]
    id?: BigIntFilter<"CompanyBranch"> | bigint | number
    is_deleted?: BoolFilter<"CompanyBranch"> | boolean
    company_id?: BigIntFilter<"CompanyBranch"> | bigint | number
    name?: StringFilter<"CompanyBranch"> | string
    description?: StringNullableFilter<"CompanyBranch"> | string | null
    status?: IntFilter<"CompanyBranch"> | number
    system_info?: JsonFilter<"CompanyBranch">
    created_by?: IntNullableFilter<"CompanyBranch"> | number | null
    created_at?: DateTimeFilter<"CompanyBranch"> | Date | string
    updated_by?: IntNullableFilter<"CompanyBranch"> | number | null
    updated_at?: DateTimeNullableFilter<"CompanyBranch"> | Date | string | null
  }

  export type UserCreateWithoutCompanyBranchInput = {
    id?: bigint | number
    is_deleted?: boolean
    user_code: string
    name: string
    display_name: string
    profile?: string | null
    email: string
    password: string
    phone: string
    current_address?: string | null
    permanent_address?: string | null
    city?: string | null
    postcode?: number | null
    country: number
    state?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_by?: number | null
    updated_at?: Date | string | null
    UserRole?: UserRoleCreateNestedOneWithoutUsersInput
    Company?: CompanyCreateNestedOneWithoutUsersInput
    UserLoginLog?: UserLoginLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyBranchInput = {
    id?: bigint | number
    is_deleted?: boolean
    user_code: string
    name: string
    display_name: string
    company_id: bigint | number
    profile?: string | null
    email: string
    password: string
    phone: string
    role_id?: number | null
    current_address?: string | null
    permanent_address?: string | null
    city?: string | null
    postcode?: number | null
    country: number
    state?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_by?: number | null
    updated_at?: Date | string | null
    UserLoginLog?: UserLoginLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyBranchInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyBranchInput, UserUncheckedCreateWithoutCompanyBranchInput>
  }

  export type UserCreateManyCompanyBranchInputEnvelope = {
    data: UserCreateManyCompanyBranchInput | UserCreateManyCompanyBranchInput[]
    skipDuplicates?: boolean
  }

  export type CompanyCreateWithoutCompanyBranchInput = {
    id?: bigint | number
    is_deleted?: boolean
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
    users?: UserCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateWithoutCompanyBranchInput = {
    id?: bigint | number
    is_deleted?: boolean
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyCreateOrConnectWithoutCompanyBranchInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutCompanyBranchInput, CompanyUncheckedCreateWithoutCompanyBranchInput>
  }

  export type UserUpsertWithWhereUniqueWithoutCompanyBranchInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCompanyBranchInput, UserUncheckedUpdateWithoutCompanyBranchInput>
    create: XOR<UserCreateWithoutCompanyBranchInput, UserUncheckedCreateWithoutCompanyBranchInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCompanyBranchInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCompanyBranchInput, UserUncheckedUpdateWithoutCompanyBranchInput>
  }

  export type UserUpdateManyWithWhereWithoutCompanyBranchInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCompanyBranchInput>
  }

  export type CompanyUpsertWithoutCompanyBranchInput = {
    update: XOR<CompanyUpdateWithoutCompanyBranchInput, CompanyUncheckedUpdateWithoutCompanyBranchInput>
    create: XOR<CompanyCreateWithoutCompanyBranchInput, CompanyUncheckedCreateWithoutCompanyBranchInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutCompanyBranchInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutCompanyBranchInput, CompanyUncheckedUpdateWithoutCompanyBranchInput>
  }

  export type CompanyUpdateWithoutCompanyBranchInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateWithoutCompanyBranchInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserLoginLogCreateManyUserInput = {
    id?: bigint | number
    is_deleted?: boolean
    status: number
    mac_address: string
    system_info: JsonNullValueInput | InputJsonValue
    created_at?: Date | string
  }

  export type UserLoginLogUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    mac_address?: StringFieldUpdateOperationsInput | string
    system_info?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLoginLogUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    mac_address?: StringFieldUpdateOperationsInput | string
    system_info?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLoginLogUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    mac_address?: StringFieldUpdateOperationsInput | string
    system_info?: JsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyUserRoleInput = {
    id?: bigint | number
    is_deleted?: boolean
    user_code: string
    name: string
    display_name: string
    company_id: bigint | number
    company_branch_id: bigint | number
    profile?: string | null
    email: string
    password: string
    phone: string
    current_address?: string | null
    permanent_address?: string | null
    city?: string | null
    postcode?: number | null
    country: number
    state?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type UserUpdateWithoutUserRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Company?: CompanyUpdateOneWithoutUsersNestedInput
    CompanyBranch?: CompanyBranchUpdateOneWithoutUsersNestedInput
    UserLoginLog?: UserLoginLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    company_id?: BigIntFieldUpdateOperationsInput | bigint | number
    company_branch_id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserLoginLog?: UserLoginLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUserRoleInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    company_id?: BigIntFieldUpdateOperationsInput | bigint | number
    company_branch_id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyCompanyInput = {
    id?: bigint | number
    is_deleted?: boolean
    user_code: string
    name: string
    display_name: string
    company_branch_id: bigint | number
    profile?: string | null
    email: string
    password: string
    phone: string
    role_id?: number | null
    current_address?: string | null
    permanent_address?: string | null
    city?: string | null
    postcode?: number | null
    country: number
    state?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type CompanyBranchCreateManyCompanyInput = {
    id?: bigint | number
    is_deleted?: boolean
    name: string
    description?: string | null
    status: number
    system_info: JsonNullValueInput | InputJsonValue
    created_by?: number | null
    created_at?: Date | string
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type UserUpdateWithoutCompanyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserRole?: UserRoleUpdateOneWithoutUsersNestedInput
    CompanyBranch?: CompanyBranchUpdateOneWithoutUsersNestedInput
    UserLoginLog?: UserLoginLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    company_branch_id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserLoginLog?: UserLoginLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    company_branch_id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompanyBranchUpdateWithoutCompanyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchUncheckedUpdateWithoutCompanyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutCompanyBranchNestedInput
  }

  export type CompanyBranchUncheckedUpdateManyWithoutCompanyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    system_info?: JsonNullValueInput | InputJsonValue
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyCompanyBranchInput = {
    id?: bigint | number
    is_deleted?: boolean
    user_code: string
    name: string
    display_name: string
    company_id: bigint | number
    profile?: string | null
    email: string
    password: string
    phone: string
    role_id?: number | null
    current_address?: string | null
    permanent_address?: string | null
    city?: string | null
    postcode?: number | null
    country: number
    state?: number | null
    created_by?: number | null
    created_at?: Date | string | null
    updated_by?: number | null
    updated_at?: Date | string | null
  }

  export type UserUpdateWithoutCompanyBranchInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserRole?: UserRoleUpdateOneWithoutUsersNestedInput
    Company?: CompanyUpdateOneWithoutUsersNestedInput
    UserLoginLog?: UserLoginLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyBranchInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    company_id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UserLoginLog?: UserLoginLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCompanyBranchInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    is_deleted?: BoolFieldUpdateOperationsInput | boolean
    user_code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    display_name?: StringFieldUpdateOperationsInput | string
    company_id?: BigIntFieldUpdateOperationsInput | bigint | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role_id?: NullableIntFieldUpdateOperationsInput | number | null
    current_address?: NullableStringFieldUpdateOperationsInput | string | null
    permanent_address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postcode?: NullableIntFieldUpdateOperationsInput | number | null
    country?: IntFieldUpdateOperationsInput | number
    state?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserRoleCountOutputTypeDefaultArgs instead
     */
    export type UserRoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserRoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
     */
    export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyBranchCountOutputTypeDefaultArgs instead
     */
    export type CompanyBranchCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyBranchCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserRoleDefaultArgs instead
     */
    export type UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserLoginLogDefaultArgs instead
     */
    export type UserLoginLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserLoginLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyDefaultArgs instead
     */
    export type CompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CompanyBranchDefaultArgs instead
     */
    export type CompanyBranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CompanyBranchDefaultArgs<ExtArgs>

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