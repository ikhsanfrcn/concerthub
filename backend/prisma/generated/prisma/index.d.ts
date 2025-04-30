
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
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventSession
 * 
 */
export type EventSession = $Result.DefaultSelection<Prisma.$EventSessionPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>
/**
 * Model PurchasedTicket
 * 
 */
export type PurchasedTicket = $Result.DefaultSelection<Prisma.$PurchasedTicketPayload>
/**
 * Model Promotion
 * 
 */
export type Promotion = $Result.DefaultSelection<Prisma.$PromotionPayload>
/**
 * Model Point
 * 
 */
export type Point = $Result.DefaultSelection<Prisma.$PointPayload>
/**
 * Model Voucher
 * 
 */
export type Voucher = $Result.DefaultSelection<Prisma.$VoucherPayload>
/**
 * Model ReferralUsage
 * 
 */
export type ReferralUsage = $Result.DefaultSelection<Prisma.$ReferralUsagePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Artist
 * 
 */
export type Artist = $Result.DefaultSelection<Prisma.$ArtistPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CUSTOMER: 'CUSTOMER',
  ORGANIZER: 'ORGANIZER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const EventCategory: {
  POP: 'POP',
  FOLK: 'FOLK',
  JAZZ: 'JAZZ',
  CLASSIC: 'CLASSIC',
  ROCK: 'ROCK'
};

export type EventCategory = (typeof EventCategory)[keyof typeof EventCategory]


export const TicketCategory: {
  REGULAR: 'REGULAR',
  PREMIUM: 'PREMIUM',
  VIP: 'VIP'
};

export type TicketCategory = (typeof TicketCategory)[keyof typeof TicketCategory]


export const statusTransaction: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  EXPIRED: 'EXPIRED',
  CANCEL: 'CANCEL'
};

export type statusTransaction = (typeof statusTransaction)[keyof typeof statusTransaction]


export const PromotionType: {
  DATE_BASED: 'DATE_BASED'
};

export type PromotionType = (typeof PromotionType)[keyof typeof PromotionType]


export const voucherType: {
  REFERRAL: 'REFERRAL'
};

export type voucherType = (typeof voucherType)[keyof typeof voucherType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type EventCategory = $Enums.EventCategory

export const EventCategory: typeof $Enums.EventCategory

export type TicketCategory = $Enums.TicketCategory

export const TicketCategory: typeof $Enums.TicketCategory

export type statusTransaction = $Enums.statusTransaction

export const statusTransaction: typeof $Enums.statusTransaction

export type PromotionType = $Enums.PromotionType

export const PromotionType: typeof $Enums.PromotionType

export type voucherType = $Enums.voucherType

export const voucherType: typeof $Enums.voucherType

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
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventSession`: Exposes CRUD operations for the **EventSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventSessions
    * const eventSessions = await prisma.eventSession.findMany()
    * ```
    */
  get eventSession(): Prisma.EventSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.purchasedTicket`: Exposes CRUD operations for the **PurchasedTicket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PurchasedTickets
    * const purchasedTickets = await prisma.purchasedTicket.findMany()
    * ```
    */
  get purchasedTicket(): Prisma.PurchasedTicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.promotion`: Exposes CRUD operations for the **Promotion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Promotions
    * const promotions = await prisma.promotion.findMany()
    * ```
    */
  get promotion(): Prisma.PromotionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.point`: Exposes CRUD operations for the **Point** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.point.findMany()
    * ```
    */
  get point(): Prisma.PointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voucher`: Exposes CRUD operations for the **Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.voucher.findMany()
    * ```
    */
  get voucher(): Prisma.VoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referralUsage`: Exposes CRUD operations for the **ReferralUsage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferralUsages
    * const referralUsages = await prisma.referralUsage.findMany()
    * ```
    */
  get referralUsage(): Prisma.ReferralUsageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<ExtArgs, ClientOptions>;
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
    Event: 'Event',
    EventSession: 'EventSession',
    Ticket: 'Ticket',
    Transaction: 'Transaction',
    PurchasedTicket: 'PurchasedTicket',
    Promotion: 'Promotion',
    Point: 'Point',
    Voucher: 'Voucher',
    ReferralUsage: 'ReferralUsage',
    Review: 'Review',
    Artist: 'Artist'
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
      modelProps: "user" | "event" | "eventSession" | "ticket" | "transaction" | "purchasedTicket" | "promotion" | "point" | "voucher" | "referralUsage" | "review" | "artist"
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
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventSession: {
        payload: Prisma.$EventSessionPayload<ExtArgs>
        fields: Prisma.EventSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSessionPayload>
          }
          findFirst: {
            args: Prisma.EventSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSessionPayload>
          }
          findMany: {
            args: Prisma.EventSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSessionPayload>[]
          }
          create: {
            args: Prisma.EventSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSessionPayload>
          }
          createMany: {
            args: Prisma.EventSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSessionPayload>[]
          }
          delete: {
            args: Prisma.EventSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSessionPayload>
          }
          update: {
            args: Prisma.EventSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSessionPayload>
          }
          deleteMany: {
            args: Prisma.EventSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSessionPayload>[]
          }
          upsert: {
            args: Prisma.EventSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventSessionPayload>
          }
          aggregate: {
            args: Prisma.EventSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventSession>
          }
          groupBy: {
            args: Prisma.EventSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventSessionCountArgs<ExtArgs>
            result: $Utils.Optional<EventSessionCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      PurchasedTicket: {
        payload: Prisma.$PurchasedTicketPayload<ExtArgs>
        fields: Prisma.PurchasedTicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PurchasedTicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedTicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PurchasedTicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedTicketPayload>
          }
          findFirst: {
            args: Prisma.PurchasedTicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedTicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PurchasedTicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedTicketPayload>
          }
          findMany: {
            args: Prisma.PurchasedTicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedTicketPayload>[]
          }
          create: {
            args: Prisma.PurchasedTicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedTicketPayload>
          }
          createMany: {
            args: Prisma.PurchasedTicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PurchasedTicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedTicketPayload>[]
          }
          delete: {
            args: Prisma.PurchasedTicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedTicketPayload>
          }
          update: {
            args: Prisma.PurchasedTicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedTicketPayload>
          }
          deleteMany: {
            args: Prisma.PurchasedTicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PurchasedTicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PurchasedTicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedTicketPayload>[]
          }
          upsert: {
            args: Prisma.PurchasedTicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PurchasedTicketPayload>
          }
          aggregate: {
            args: Prisma.PurchasedTicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePurchasedTicket>
          }
          groupBy: {
            args: Prisma.PurchasedTicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<PurchasedTicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.PurchasedTicketCountArgs<ExtArgs>
            result: $Utils.Optional<PurchasedTicketCountAggregateOutputType> | number
          }
        }
      }
      Promotion: {
        payload: Prisma.$PromotionPayload<ExtArgs>
        fields: Prisma.PromotionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PromotionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PromotionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findFirst: {
            args: Prisma.PromotionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PromotionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          findMany: {
            args: Prisma.PromotionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          create: {
            args: Prisma.PromotionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          createMany: {
            args: Prisma.PromotionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PromotionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          delete: {
            args: Prisma.PromotionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          update: {
            args: Prisma.PromotionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          deleteMany: {
            args: Prisma.PromotionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PromotionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PromotionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>[]
          }
          upsert: {
            args: Prisma.PromotionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PromotionPayload>
          }
          aggregate: {
            args: Prisma.PromotionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePromotion>
          }
          groupBy: {
            args: Prisma.PromotionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PromotionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PromotionCountArgs<ExtArgs>
            result: $Utils.Optional<PromotionCountAggregateOutputType> | number
          }
        }
      }
      Point: {
        payload: Prisma.$PointPayload<ExtArgs>
        fields: Prisma.PointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findFirst: {
            args: Prisma.PointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findMany: {
            args: Prisma.PointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          create: {
            args: Prisma.PointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          createMany: {
            args: Prisma.PointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          delete: {
            args: Prisma.PointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          update: {
            args: Prisma.PointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          deleteMany: {
            args: Prisma.PointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          upsert: {
            args: Prisma.PointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          aggregate: {
            args: Prisma.PointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoint>
          }
          groupBy: {
            args: Prisma.PointGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointCountArgs<ExtArgs>
            result: $Utils.Optional<PointCountAggregateOutputType> | number
          }
        }
      }
      Voucher: {
        payload: Prisma.$VoucherPayload<ExtArgs>
        fields: Prisma.VoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findFirst: {
            args: Prisma.VoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findMany: {
            args: Prisma.VoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          create: {
            args: Prisma.VoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          createMany: {
            args: Prisma.VoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoucherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          delete: {
            args: Prisma.VoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          update: {
            args: Prisma.VoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          deleteMany: {
            args: Prisma.VoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoucherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          upsert: {
            args: Prisma.VoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          aggregate: {
            args: Prisma.VoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoucher>
          }
          groupBy: {
            args: Prisma.VoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoucherCountArgs<ExtArgs>
            result: $Utils.Optional<VoucherCountAggregateOutputType> | number
          }
        }
      }
      ReferralUsage: {
        payload: Prisma.$ReferralUsagePayload<ExtArgs>
        fields: Prisma.ReferralUsageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralUsageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralUsageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>
          }
          findFirst: {
            args: Prisma.ReferralUsageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralUsageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>
          }
          findMany: {
            args: Prisma.ReferralUsageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>[]
          }
          create: {
            args: Prisma.ReferralUsageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>
          }
          createMany: {
            args: Prisma.ReferralUsageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralUsageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>[]
          }
          delete: {
            args: Prisma.ReferralUsageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>
          }
          update: {
            args: Prisma.ReferralUsageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>
          }
          deleteMany: {
            args: Prisma.ReferralUsageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralUsageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferralUsageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>[]
          }
          upsert: {
            args: Prisma.ReferralUsageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralUsagePayload>
          }
          aggregate: {
            args: Prisma.ReferralUsageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferralUsage>
          }
          groupBy: {
            args: Prisma.ReferralUsageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralUsageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralUsageCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralUsageCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Artist: {
        payload: Prisma.$ArtistPayload<ExtArgs>
        fields: Prisma.ArtistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findFirst: {
            args: Prisma.ArtistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          findMany: {
            args: Prisma.ArtistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          create: {
            args: Prisma.ArtistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          createMany: {
            args: Prisma.ArtistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          delete: {
            args: Prisma.ArtistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          update: {
            args: Prisma.ArtistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          deleteMany: {
            args: Prisma.ArtistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>[]
          }
          upsert: {
            args: Prisma.ArtistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistPayload>
          }
          aggregate: {
            args: Prisma.ArtistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtist>
          }
          groupBy: {
            args: Prisma.ArtistGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistCountAggregateOutputType> | number
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
    event?: EventOmit
    eventSession?: EventSessionOmit
    ticket?: TicketOmit
    transaction?: TransactionOmit
    purchasedTicket?: PurchasedTicketOmit
    promotion?: PromotionOmit
    point?: PointOmit
    voucher?: VoucherOmit
    referralUsage?: ReferralUsageOmit
    review?: ReviewOmit
    artist?: ArtistOmit
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
    events: number
    points: number
    referred: number
    referrer: number
    reviews: number
    transactions: number
    vouchers: number
    purchased: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | UserCountOutputTypeCountEventsArgs
    points?: boolean | UserCountOutputTypeCountPointsArgs
    referred?: boolean | UserCountOutputTypeCountReferredArgs
    referrer?: boolean | UserCountOutputTypeCountReferrerArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    transactions?: boolean | UserCountOutputTypeCountTransactionsArgs
    vouchers?: boolean | UserCountOutputTypeCountVouchersArgs
    purchased?: boolean | UserCountOutputTypeCountPurchasedArgs
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
  export type UserCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralUsageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferrerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralUsageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountVouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPurchasedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasedTicketWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    eventSessions: number
    promotions: number
    reviews: number
    tickets: number
    transactions: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    eventSessions?: boolean | EventCountOutputTypeCountEventSessionsArgs
    promotions?: boolean | EventCountOutputTypeCountPromotionsArgs
    reviews?: boolean | EventCountOutputTypeCountReviewsArgs
    tickets?: boolean | EventCountOutputTypeCountTicketsArgs
    transactions?: boolean | EventCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventSessionWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountPromotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type EventSessionCountOutputType
   */

  export type EventSessionCountOutputType = {
    tickets: number
    PurchasedTicket: number
  }

  export type EventSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | EventSessionCountOutputTypeCountTicketsArgs
    PurchasedTicket?: boolean | EventSessionCountOutputTypeCountPurchasedTicketArgs
  }

  // Custom InputTypes
  /**
   * EventSessionCountOutputType without action
   */
  export type EventSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSessionCountOutputType
     */
    select?: EventSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventSessionCountOutputType without action
   */
  export type EventSessionCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * EventSessionCountOutputType without action
   */
  export type EventSessionCountOutputTypeCountPurchasedTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasedTicketWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    transactions: number
    purchased: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | TicketCountOutputTypeCountTransactionsArgs
    purchased?: boolean | TicketCountOutputTypeCountPurchasedArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountPurchasedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasedTicketWhereInput
  }


  /**
   * Count Type TransactionCountOutputType
   */

  export type TransactionCountOutputType = {
    purchased: number
  }

  export type TransactionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    purchased?: boolean | TransactionCountOutputTypeCountPurchasedArgs
  }

  // Custom InputTypes
  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCountOutputType
     */
    select?: TransactionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TransactionCountOutputType without action
   */
  export type TransactionCountOutputTypeCountPurchasedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasedTicketWhereInput
  }


  /**
   * Count Type PurchasedTicketCountOutputType
   */

  export type PurchasedTicketCountOutputType = {
    Review: number
  }

  export type PurchasedTicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Review?: boolean | PurchasedTicketCountOutputTypeCountReviewArgs
  }

  // Custom InputTypes
  /**
   * PurchasedTicketCountOutputType without action
   */
  export type PurchasedTicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicketCountOutputType
     */
    select?: PurchasedTicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PurchasedTicketCountOutputType without action
   */
  export type PurchasedTicketCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type PointCountOutputType
   */

  export type PointCountOutputType = {
    Transaction: number
  }

  export type PointCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | PointCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * PointCountOutputType without action
   */
  export type PointCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PointCountOutputType
     */
    select?: PointCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PointCountOutputType without action
   */
  export type PointCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type VoucherCountOutputType
   */

  export type VoucherCountOutputType = {
    ReferralUsage: number
    Transaction: number
  }

  export type VoucherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ReferralUsage?: boolean | VoucherCountOutputTypeCountReferralUsageArgs
    Transaction?: boolean | VoucherCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherCountOutputType
     */
    select?: VoucherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeCountReferralUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralUsageWhereInput
  }

  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    referralCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isVerify: boolean | null
    ReferredById: string | null
    city: string | null
    dob: string | null
    houseNumber: string | null
    lastName: string | null
    state: string | null
    street: string | null
    zipCode: string | null
    regionNumber: string | null
    phoneNumber: string | null
    avatar: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    referralCode: string | null
    createdAt: Date | null
    updatedAt: Date | null
    isVerify: boolean | null
    ReferredById: string | null
    city: string | null
    dob: string | null
    houseNumber: string | null
    lastName: string | null
    state: string | null
    street: string | null
    zipCode: string | null
    regionNumber: string | null
    phoneNumber: string | null
    avatar: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    referralCode: number
    createdAt: number
    updatedAt: number
    isVerify: number
    ReferredById: number
    city: number
    dob: number
    houseNumber: number
    lastName: number
    state: number
    street: number
    zipCode: number
    regionNumber: number
    phoneNumber: number
    avatar: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    referralCode?: true
    createdAt?: true
    updatedAt?: true
    isVerify?: true
    ReferredById?: true
    city?: true
    dob?: true
    houseNumber?: true
    lastName?: true
    state?: true
    street?: true
    zipCode?: true
    regionNumber?: true
    phoneNumber?: true
    avatar?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    referralCode?: true
    createdAt?: true
    updatedAt?: true
    isVerify?: true
    ReferredById?: true
    city?: true
    dob?: true
    houseNumber?: true
    lastName?: true
    state?: true
    street?: true
    zipCode?: true
    regionNumber?: true
    phoneNumber?: true
    avatar?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    referralCode?: true
    createdAt?: true
    updatedAt?: true
    isVerify?: true
    ReferredById?: true
    city?: true
    dob?: true
    houseNumber?: true
    lastName?: true
    state?: true
    street?: true
    zipCode?: true
    regionNumber?: true
    phoneNumber?: true
    avatar?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    referralCode: string
    createdAt: Date
    updatedAt: Date
    isVerify: boolean
    ReferredById: string | null
    city: string | null
    dob: string | null
    houseNumber: string | null
    lastName: string | null
    state: string | null
    street: string | null
    zipCode: string | null
    regionNumber: string | null
    phoneNumber: string | null
    avatar: string | null
    _count: UserCountAggregateOutputType | null
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
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    referralCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isVerify?: boolean
    ReferredById?: boolean
    city?: boolean
    dob?: boolean
    houseNumber?: boolean
    lastName?: boolean
    state?: boolean
    street?: boolean
    zipCode?: boolean
    regionNumber?: boolean
    phoneNumber?: boolean
    avatar?: boolean
    events?: boolean | User$eventsArgs<ExtArgs>
    points?: boolean | User$pointsArgs<ExtArgs>
    referred?: boolean | User$referredArgs<ExtArgs>
    referrer?: boolean | User$referrerArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    vouchers?: boolean | User$vouchersArgs<ExtArgs>
    purchased?: boolean | User$purchasedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    referralCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isVerify?: boolean
    ReferredById?: boolean
    city?: boolean
    dob?: boolean
    houseNumber?: boolean
    lastName?: boolean
    state?: boolean
    street?: boolean
    zipCode?: boolean
    regionNumber?: boolean
    phoneNumber?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    referralCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isVerify?: boolean
    ReferredById?: boolean
    city?: boolean
    dob?: boolean
    houseNumber?: boolean
    lastName?: boolean
    state?: boolean
    street?: boolean
    zipCode?: boolean
    regionNumber?: boolean
    phoneNumber?: boolean
    avatar?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    referralCode?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isVerify?: boolean
    ReferredById?: boolean
    city?: boolean
    dob?: boolean
    houseNumber?: boolean
    lastName?: boolean
    state?: boolean
    street?: boolean
    zipCode?: boolean
    regionNumber?: boolean
    phoneNumber?: boolean
    avatar?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "referralCode" | "createdAt" | "updatedAt" | "isVerify" | "ReferredById" | "city" | "dob" | "houseNumber" | "lastName" | "state" | "street" | "zipCode" | "regionNumber" | "phoneNumber" | "avatar", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | User$eventsArgs<ExtArgs>
    points?: boolean | User$pointsArgs<ExtArgs>
    referred?: boolean | User$referredArgs<ExtArgs>
    referrer?: boolean | User$referrerArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    transactions?: boolean | User$transactionsArgs<ExtArgs>
    vouchers?: boolean | User$vouchersArgs<ExtArgs>
    purchased?: boolean | User$purchasedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>[]
      points: Prisma.$PointPayload<ExtArgs>[]
      referred: Prisma.$ReferralUsagePayload<ExtArgs>[]
      referrer: Prisma.$ReferralUsagePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      vouchers: Prisma.$VoucherPayload<ExtArgs>[]
      purchased: Prisma.$PurchasedTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      referralCode: string
      createdAt: Date
      updatedAt: Date
      isVerify: boolean
      ReferredById: string | null
      city: string | null
      dob: string | null
      houseNumber: string | null
      lastName: string | null
      state: string | null
      street: string | null
      zipCode: string | null
      regionNumber: string | null
      phoneNumber: string | null
      avatar: string | null
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
    events<T extends User$eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    points<T extends User$pointsArgs<ExtArgs> = {}>(args?: Subset<T, User$pointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referred<T extends User$referredArgs<ExtArgs> = {}>(args?: Subset<T, User$referredArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    referrer<T extends User$referrerArgs<ExtArgs> = {}>(args?: Subset<T, User$referrerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends User$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vouchers<T extends User$vouchersArgs<ExtArgs> = {}>(args?: Subset<T, User$vouchersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchased<T extends User$purchasedArgs<ExtArgs> = {}>(args?: Subset<T, User$purchasedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly referralCode: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly isVerify: FieldRef<"User", 'Boolean'>
    readonly ReferredById: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly dob: FieldRef<"User", 'String'>
    readonly houseNumber: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly state: FieldRef<"User", 'String'>
    readonly street: FieldRef<"User", 'String'>
    readonly zipCode: FieldRef<"User", 'String'>
    readonly regionNumber: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
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
   * User.events
   */
  export type User$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.points
   */
  export type User$pointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    where?: PointWhereInput
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    cursor?: PointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * User.referred
   */
  export type User$referredArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    where?: ReferralUsageWhereInput
    orderBy?: ReferralUsageOrderByWithRelationInput | ReferralUsageOrderByWithRelationInput[]
    cursor?: ReferralUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralUsageScalarFieldEnum | ReferralUsageScalarFieldEnum[]
  }

  /**
   * User.referrer
   */
  export type User$referrerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    where?: ReferralUsageWhereInput
    orderBy?: ReferralUsageOrderByWithRelationInput | ReferralUsageOrderByWithRelationInput[]
    cursor?: ReferralUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralUsageScalarFieldEnum | ReferralUsageScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.transactions
   */
  export type User$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.vouchers
   */
  export type User$vouchersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * User.purchased
   */
  export type User$purchasedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketInclude<ExtArgs> | null
    where?: PurchasedTicketWhereInput
    orderBy?: PurchasedTicketOrderByWithRelationInput | PurchasedTicketOrderByWithRelationInput[]
    cursor?: PurchasedTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasedTicketScalarFieldEnum | PurchasedTicketScalarFieldEnum[]
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
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    totalIncome: number | null
    attendees: number | null
  }

  export type EventSumAggregateOutputType = {
    totalIncome: number | null
    attendees: number | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    organizerId: string | null
    title: string | null
    totalIncome: number | null
    category: $Enums.EventCategory | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    attendees: number | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    organizerId: string | null
    title: string | null
    totalIncome: number | null
    category: $Enums.EventCategory | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
    attendees: number | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    organizerId: number
    title: number
    totalIncome: number
    category: number
    image: number
    createdAt: number
    updatedAt: number
    attendees: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    totalIncome?: true
    attendees?: true
  }

  export type EventSumAggregateInputType = {
    totalIncome?: true
    attendees?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    organizerId?: true
    title?: true
    totalIncome?: true
    category?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    attendees?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    organizerId?: true
    title?: true
    totalIncome?: true
    category?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    attendees?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    organizerId?: true
    title?: true
    totalIncome?: true
    category?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    attendees?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    organizerId: string
    title: string
    totalIncome: number
    category: $Enums.EventCategory
    image: string
    createdAt: Date
    updatedAt: Date
    attendees: number
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    title?: boolean
    totalIncome?: boolean
    category?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendees?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    eventSessions?: boolean | Event$eventSessionsArgs<ExtArgs>
    promotions?: boolean | Event$promotionsArgs<ExtArgs>
    reviews?: boolean | Event$reviewsArgs<ExtArgs>
    tickets?: boolean | Event$ticketsArgs<ExtArgs>
    transactions?: boolean | Event$transactionsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    title?: boolean
    totalIncome?: boolean
    category?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendees?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizerId?: boolean
    title?: boolean
    totalIncome?: boolean
    category?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendees?: boolean
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    organizerId?: boolean
    title?: boolean
    totalIncome?: boolean
    category?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    attendees?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizerId" | "title" | "totalIncome" | "category" | "image" | "createdAt" | "updatedAt" | "attendees", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
    eventSessions?: boolean | Event$eventSessionsArgs<ExtArgs>
    promotions?: boolean | Event$promotionsArgs<ExtArgs>
    reviews?: boolean | Event$reviewsArgs<ExtArgs>
    tickets?: boolean | Event$ticketsArgs<ExtArgs>
    transactions?: boolean | Event$transactionsArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organizer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      organizer: Prisma.$UserPayload<ExtArgs>
      eventSessions: Prisma.$EventSessionPayload<ExtArgs>[]
      promotions: Prisma.$PromotionPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizerId: string
      title: string
      totalIncome: number
      category: $Enums.EventCategory
      image: string
      createdAt: Date
      updatedAt: Date
      attendees: number
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organizer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    eventSessions<T extends Event$eventSessionsArgs<ExtArgs> = {}>(args?: Subset<T, Event$eventSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    promotions<T extends Event$promotionsArgs<ExtArgs> = {}>(args?: Subset<T, Event$promotionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Event$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Event$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Event$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Event$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Event$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Event$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly organizerId: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly totalIncome: FieldRef<"Event", 'Int'>
    readonly category: FieldRef<"Event", 'EventCategory'>
    readonly image: FieldRef<"Event", 'String'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
    readonly updatedAt: FieldRef<"Event", 'DateTime'>
    readonly attendees: FieldRef<"Event", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.eventSessions
   */
  export type Event$eventSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSession
     */
    select?: EventSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSession
     */
    omit?: EventSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSessionInclude<ExtArgs> | null
    where?: EventSessionWhereInput
    orderBy?: EventSessionOrderByWithRelationInput | EventSessionOrderByWithRelationInput[]
    cursor?: EventSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventSessionScalarFieldEnum | EventSessionScalarFieldEnum[]
  }

  /**
   * Event.promotions
   */
  export type Event$promotionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    cursor?: PromotionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Event.reviews
   */
  export type Event$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Event.tickets
   */
  export type Event$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Event.transactions
   */
  export type Event$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventSession
   */

  export type AggregateEventSession = {
    _count: EventSessionCountAggregateOutputType | null
    _min: EventSessionMinAggregateOutputType | null
    _max: EventSessionMaxAggregateOutputType | null
  }

  export type EventSessionMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    date: string | null
    time: string | null
    location: string | null
  }

  export type EventSessionMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    date: string | null
    time: string | null
    location: string | null
  }

  export type EventSessionCountAggregateOutputType = {
    id: number
    eventId: number
    date: number
    time: number
    location: number
    _all: number
  }


  export type EventSessionMinAggregateInputType = {
    id?: true
    eventId?: true
    date?: true
    time?: true
    location?: true
  }

  export type EventSessionMaxAggregateInputType = {
    id?: true
    eventId?: true
    date?: true
    time?: true
    location?: true
  }

  export type EventSessionCountAggregateInputType = {
    id?: true
    eventId?: true
    date?: true
    time?: true
    location?: true
    _all?: true
  }

  export type EventSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventSession to aggregate.
     */
    where?: EventSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSessions to fetch.
     */
    orderBy?: EventSessionOrderByWithRelationInput | EventSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventSessions
    **/
    _count?: true | EventSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventSessionMaxAggregateInputType
  }

  export type GetEventSessionAggregateType<T extends EventSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateEventSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventSession[P]>
      : GetScalarType<T[P], AggregateEventSession[P]>
  }




  export type EventSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventSessionWhereInput
    orderBy?: EventSessionOrderByWithAggregationInput | EventSessionOrderByWithAggregationInput[]
    by: EventSessionScalarFieldEnum[] | EventSessionScalarFieldEnum
    having?: EventSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventSessionCountAggregateInputType | true
    _min?: EventSessionMinAggregateInputType
    _max?: EventSessionMaxAggregateInputType
  }

  export type EventSessionGroupByOutputType = {
    id: string
    eventId: string
    date: string
    time: string
    location: string
    _count: EventSessionCountAggregateOutputType | null
    _min: EventSessionMinAggregateOutputType | null
    _max: EventSessionMaxAggregateOutputType | null
  }

  type GetEventSessionGroupByPayload<T extends EventSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventSessionGroupByOutputType[P]>
            : GetScalarType<T[P], EventSessionGroupByOutputType[P]>
        }
      >
    >


  export type EventSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    tickets?: boolean | EventSession$ticketsArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    PurchasedTicket?: boolean | EventSession$PurchasedTicketArgs<ExtArgs>
    _count?: boolean | EventSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventSession"]>

  export type EventSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventSession"]>

  export type EventSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventSession"]>

  export type EventSessionSelectScalar = {
    id?: boolean
    eventId?: boolean
    date?: boolean
    time?: boolean
    location?: boolean
  }

  export type EventSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "date" | "time" | "location", ExtArgs["result"]["eventSession"]>
  export type EventSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | EventSession$ticketsArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    PurchasedTicket?: boolean | EventSession$PurchasedTicketArgs<ExtArgs>
    _count?: boolean | EventSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventSession"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      event: Prisma.$EventPayload<ExtArgs>
      PurchasedTicket: Prisma.$PurchasedTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      date: string
      time: string
      location: string
    }, ExtArgs["result"]["eventSession"]>
    composites: {}
  }

  type EventSessionGetPayload<S extends boolean | null | undefined | EventSessionDefaultArgs> = $Result.GetResult<Prisma.$EventSessionPayload, S>

  type EventSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventSessionCountAggregateInputType | true
    }

  export interface EventSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventSession'], meta: { name: 'EventSession' } }
    /**
     * Find zero or one EventSession that matches the filter.
     * @param {EventSessionFindUniqueArgs} args - Arguments to find a EventSession
     * @example
     * // Get one EventSession
     * const eventSession = await prisma.eventSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventSessionFindUniqueArgs>(args: SelectSubset<T, EventSessionFindUniqueArgs<ExtArgs>>): Prisma__EventSessionClient<$Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventSessionFindUniqueOrThrowArgs} args - Arguments to find a EventSession
     * @example
     * // Get one EventSession
     * const eventSession = await prisma.eventSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, EventSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventSessionClient<$Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSessionFindFirstArgs} args - Arguments to find a EventSession
     * @example
     * // Get one EventSession
     * const eventSession = await prisma.eventSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventSessionFindFirstArgs>(args?: SelectSubset<T, EventSessionFindFirstArgs<ExtArgs>>): Prisma__EventSessionClient<$Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSessionFindFirstOrThrowArgs} args - Arguments to find a EventSession
     * @example
     * // Get one EventSession
     * const eventSession = await prisma.eventSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, EventSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventSessionClient<$Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventSessions
     * const eventSessions = await prisma.eventSession.findMany()
     * 
     * // Get first 10 EventSessions
     * const eventSessions = await prisma.eventSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventSessionWithIdOnly = await prisma.eventSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventSessionFindManyArgs>(args?: SelectSubset<T, EventSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventSession.
     * @param {EventSessionCreateArgs} args - Arguments to create a EventSession.
     * @example
     * // Create one EventSession
     * const EventSession = await prisma.eventSession.create({
     *   data: {
     *     // ... data to create a EventSession
     *   }
     * })
     * 
     */
    create<T extends EventSessionCreateArgs>(args: SelectSubset<T, EventSessionCreateArgs<ExtArgs>>): Prisma__EventSessionClient<$Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventSessions.
     * @param {EventSessionCreateManyArgs} args - Arguments to create many EventSessions.
     * @example
     * // Create many EventSessions
     * const eventSession = await prisma.eventSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventSessionCreateManyArgs>(args?: SelectSubset<T, EventSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventSessions and returns the data saved in the database.
     * @param {EventSessionCreateManyAndReturnArgs} args - Arguments to create many EventSessions.
     * @example
     * // Create many EventSessions
     * const eventSession = await prisma.eventSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventSessions and only return the `id`
     * const eventSessionWithIdOnly = await prisma.eventSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, EventSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventSession.
     * @param {EventSessionDeleteArgs} args - Arguments to delete one EventSession.
     * @example
     * // Delete one EventSession
     * const EventSession = await prisma.eventSession.delete({
     *   where: {
     *     // ... filter to delete one EventSession
     *   }
     * })
     * 
     */
    delete<T extends EventSessionDeleteArgs>(args: SelectSubset<T, EventSessionDeleteArgs<ExtArgs>>): Prisma__EventSessionClient<$Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventSession.
     * @param {EventSessionUpdateArgs} args - Arguments to update one EventSession.
     * @example
     * // Update one EventSession
     * const eventSession = await prisma.eventSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventSessionUpdateArgs>(args: SelectSubset<T, EventSessionUpdateArgs<ExtArgs>>): Prisma__EventSessionClient<$Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventSessions.
     * @param {EventSessionDeleteManyArgs} args - Arguments to filter EventSessions to delete.
     * @example
     * // Delete a few EventSessions
     * const { count } = await prisma.eventSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventSessionDeleteManyArgs>(args?: SelectSubset<T, EventSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventSessions
     * const eventSession = await prisma.eventSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventSessionUpdateManyArgs>(args: SelectSubset<T, EventSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventSessions and returns the data updated in the database.
     * @param {EventSessionUpdateManyAndReturnArgs} args - Arguments to update many EventSessions.
     * @example
     * // Update many EventSessions
     * const eventSession = await prisma.eventSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventSessions and only return the `id`
     * const eventSessionWithIdOnly = await prisma.eventSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends EventSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, EventSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventSession.
     * @param {EventSessionUpsertArgs} args - Arguments to update or create a EventSession.
     * @example
     * // Update or create a EventSession
     * const eventSession = await prisma.eventSession.upsert({
     *   create: {
     *     // ... data to create a EventSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventSession we want to update
     *   }
     * })
     */
    upsert<T extends EventSessionUpsertArgs>(args: SelectSubset<T, EventSessionUpsertArgs<ExtArgs>>): Prisma__EventSessionClient<$Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSessionCountArgs} args - Arguments to filter EventSessions to count.
     * @example
     * // Count the number of EventSessions
     * const count = await prisma.eventSession.count({
     *   where: {
     *     // ... the filter for the EventSessions we want to count
     *   }
     * })
    **/
    count<T extends EventSessionCountArgs>(
      args?: Subset<T, EventSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventSessionAggregateArgs>(args: Subset<T, EventSessionAggregateArgs>): Prisma.PrismaPromise<GetEventSessionAggregateType<T>>

    /**
     * Group by EventSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventSessionGroupByArgs} args - Group by arguments.
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
      T extends EventSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventSessionGroupByArgs['orderBy'] }
        : { orderBy?: EventSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventSession model
   */
  readonly fields: EventSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends EventSession$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, EventSession$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    PurchasedTicket<T extends EventSession$PurchasedTicketArgs<ExtArgs> = {}>(args?: Subset<T, EventSession$PurchasedTicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EventSession model
   */
  interface EventSessionFieldRefs {
    readonly id: FieldRef<"EventSession", 'String'>
    readonly eventId: FieldRef<"EventSession", 'String'>
    readonly date: FieldRef<"EventSession", 'String'>
    readonly time: FieldRef<"EventSession", 'String'>
    readonly location: FieldRef<"EventSession", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EventSession findUnique
   */
  export type EventSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSession
     */
    select?: EventSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSession
     */
    omit?: EventSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSessionInclude<ExtArgs> | null
    /**
     * Filter, which EventSession to fetch.
     */
    where: EventSessionWhereUniqueInput
  }

  /**
   * EventSession findUniqueOrThrow
   */
  export type EventSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSession
     */
    select?: EventSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSession
     */
    omit?: EventSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSessionInclude<ExtArgs> | null
    /**
     * Filter, which EventSession to fetch.
     */
    where: EventSessionWhereUniqueInput
  }

  /**
   * EventSession findFirst
   */
  export type EventSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSession
     */
    select?: EventSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSession
     */
    omit?: EventSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSessionInclude<ExtArgs> | null
    /**
     * Filter, which EventSession to fetch.
     */
    where?: EventSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSessions to fetch.
     */
    orderBy?: EventSessionOrderByWithRelationInput | EventSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventSessions.
     */
    cursor?: EventSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventSessions.
     */
    distinct?: EventSessionScalarFieldEnum | EventSessionScalarFieldEnum[]
  }

  /**
   * EventSession findFirstOrThrow
   */
  export type EventSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSession
     */
    select?: EventSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSession
     */
    omit?: EventSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSessionInclude<ExtArgs> | null
    /**
     * Filter, which EventSession to fetch.
     */
    where?: EventSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSessions to fetch.
     */
    orderBy?: EventSessionOrderByWithRelationInput | EventSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventSessions.
     */
    cursor?: EventSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventSessions.
     */
    distinct?: EventSessionScalarFieldEnum | EventSessionScalarFieldEnum[]
  }

  /**
   * EventSession findMany
   */
  export type EventSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSession
     */
    select?: EventSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSession
     */
    omit?: EventSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSessionInclude<ExtArgs> | null
    /**
     * Filter, which EventSessions to fetch.
     */
    where?: EventSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventSessions to fetch.
     */
    orderBy?: EventSessionOrderByWithRelationInput | EventSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventSessions.
     */
    cursor?: EventSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventSessions.
     */
    skip?: number
    distinct?: EventSessionScalarFieldEnum | EventSessionScalarFieldEnum[]
  }

  /**
   * EventSession create
   */
  export type EventSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSession
     */
    select?: EventSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSession
     */
    omit?: EventSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a EventSession.
     */
    data: XOR<EventSessionCreateInput, EventSessionUncheckedCreateInput>
  }

  /**
   * EventSession createMany
   */
  export type EventSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventSessions.
     */
    data: EventSessionCreateManyInput | EventSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventSession createManyAndReturn
   */
  export type EventSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSession
     */
    select?: EventSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventSession
     */
    omit?: EventSessionOmit<ExtArgs> | null
    /**
     * The data used to create many EventSessions.
     */
    data: EventSessionCreateManyInput | EventSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventSession update
   */
  export type EventSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSession
     */
    select?: EventSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSession
     */
    omit?: EventSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a EventSession.
     */
    data: XOR<EventSessionUpdateInput, EventSessionUncheckedUpdateInput>
    /**
     * Choose, which EventSession to update.
     */
    where: EventSessionWhereUniqueInput
  }

  /**
   * EventSession updateMany
   */
  export type EventSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventSessions.
     */
    data: XOR<EventSessionUpdateManyMutationInput, EventSessionUncheckedUpdateManyInput>
    /**
     * Filter which EventSessions to update
     */
    where?: EventSessionWhereInput
    /**
     * Limit how many EventSessions to update.
     */
    limit?: number
  }

  /**
   * EventSession updateManyAndReturn
   */
  export type EventSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSession
     */
    select?: EventSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventSession
     */
    omit?: EventSessionOmit<ExtArgs> | null
    /**
     * The data used to update EventSessions.
     */
    data: XOR<EventSessionUpdateManyMutationInput, EventSessionUncheckedUpdateManyInput>
    /**
     * Filter which EventSessions to update
     */
    where?: EventSessionWhereInput
    /**
     * Limit how many EventSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventSession upsert
   */
  export type EventSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSession
     */
    select?: EventSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSession
     */
    omit?: EventSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the EventSession to update in case it exists.
     */
    where: EventSessionWhereUniqueInput
    /**
     * In case the EventSession found by the `where` argument doesn't exist, create a new EventSession with this data.
     */
    create: XOR<EventSessionCreateInput, EventSessionUncheckedCreateInput>
    /**
     * In case the EventSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventSessionUpdateInput, EventSessionUncheckedUpdateInput>
  }

  /**
   * EventSession delete
   */
  export type EventSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSession
     */
    select?: EventSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSession
     */
    omit?: EventSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSessionInclude<ExtArgs> | null
    /**
     * Filter which EventSession to delete.
     */
    where: EventSessionWhereUniqueInput
  }

  /**
   * EventSession deleteMany
   */
  export type EventSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventSessions to delete
     */
    where?: EventSessionWhereInput
    /**
     * Limit how many EventSessions to delete.
     */
    limit?: number
  }

  /**
   * EventSession.tickets
   */
  export type EventSession$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * EventSession.PurchasedTicket
   */
  export type EventSession$PurchasedTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketInclude<ExtArgs> | null
    where?: PurchasedTicketWhereInput
    orderBy?: PurchasedTicketOrderByWithRelationInput | PurchasedTicketOrderByWithRelationInput[]
    cursor?: PurchasedTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasedTicketScalarFieldEnum | PurchasedTicketScalarFieldEnum[]
  }

  /**
   * EventSession without action
   */
  export type EventSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventSession
     */
    select?: EventSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventSession
     */
    omit?: EventSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventSessionInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    price: number | null
    seatAvailable: number | null
  }

  export type TicketSumAggregateOutputType = {
    price: number | null
    seatAvailable: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    eventId: string | null
    price: number | null
    category: $Enums.TicketCategory | null
    seatAvailable: number | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    eventId: string | null
    price: number | null
    category: $Enums.TicketCategory | null
    seatAvailable: number | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    sessionId: number
    eventId: number
    price: number
    category: number
    seatAvailable: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    price?: true
    seatAvailable?: true
  }

  export type TicketSumAggregateInputType = {
    price?: true
    seatAvailable?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    sessionId?: true
    eventId?: true
    price?: true
    category?: true
    seatAvailable?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    sessionId?: true
    eventId?: true
    price?: true
    category?: true
    seatAvailable?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    sessionId?: true
    eventId?: true
    price?: true
    category?: true
    seatAvailable?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    sessionId: string
    eventId: string | null
    price: number
    category: $Enums.TicketCategory
    seatAvailable: number
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    eventId?: boolean
    price?: boolean
    category?: boolean
    seatAvailable?: boolean
    session?: boolean | EventSessionDefaultArgs<ExtArgs>
    transactions?: boolean | Ticket$transactionsArgs<ExtArgs>
    purchased?: boolean | Ticket$purchasedArgs<ExtArgs>
    Event?: boolean | Ticket$EventArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    eventId?: boolean
    price?: boolean
    category?: boolean
    seatAvailable?: boolean
    session?: boolean | EventSessionDefaultArgs<ExtArgs>
    Event?: boolean | Ticket$EventArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    eventId?: boolean
    price?: boolean
    category?: boolean
    seatAvailable?: boolean
    session?: boolean | EventSessionDefaultArgs<ExtArgs>
    Event?: boolean | Ticket$EventArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    sessionId?: boolean
    eventId?: boolean
    price?: boolean
    category?: boolean
    seatAvailable?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "eventId" | "price" | "category" | "seatAvailable", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | EventSessionDefaultArgs<ExtArgs>
    transactions?: boolean | Ticket$transactionsArgs<ExtArgs>
    purchased?: boolean | Ticket$purchasedArgs<ExtArgs>
    Event?: boolean | Ticket$EventArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | EventSessionDefaultArgs<ExtArgs>
    Event?: boolean | Ticket$EventArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | EventSessionDefaultArgs<ExtArgs>
    Event?: boolean | Ticket$EventArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      session: Prisma.$EventSessionPayload<ExtArgs>
      transactions: Prisma.$TransactionPayload<ExtArgs>[]
      purchased: Prisma.$PurchasedTicketPayload<ExtArgs>[]
      Event: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      eventId: string | null
      price: number
      category: $Enums.TicketCategory
      seatAvailable: number
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
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
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends EventSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventSessionDefaultArgs<ExtArgs>>): Prisma__EventSessionClient<$Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends Ticket$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    purchased<T extends Ticket$purchasedArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$purchasedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Event<T extends Ticket$EventArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$EventArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly sessionId: FieldRef<"Ticket", 'String'>
    readonly eventId: FieldRef<"Ticket", 'String'>
    readonly price: FieldRef<"Ticket", 'Int'>
    readonly category: FieldRef<"Ticket", 'TicketCategory'>
    readonly seatAvailable: FieldRef<"Ticket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.transactions
   */
  export type Ticket$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Ticket.purchased
   */
  export type Ticket$purchasedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketInclude<ExtArgs> | null
    where?: PurchasedTicketWhereInput
    orderBy?: PurchasedTicketOrderByWithRelationInput | PurchasedTicketOrderByWithRelationInput[]
    cursor?: PurchasedTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasedTicketScalarFieldEnum | PurchasedTicketScalarFieldEnum[]
  }

  /**
   * Ticket.Event
   */
  export type Ticket$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    quantity: number | null
    totalPrice: number | null
  }

  export type TransactionSumAggregateOutputType = {
    quantity: number | null
    totalPrice: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    ticketId: string | null
    quantity: number | null
    totalPrice: number | null
    voucherId: string | null
    pointId: string | null
    status: $Enums.statusTransaction | null
    invoiceUrl: string | null
    createdAt: Date | null
    expireAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    ticketId: string | null
    quantity: number | null
    totalPrice: number | null
    voucherId: string | null
    pointId: string | null
    status: $Enums.statusTransaction | null
    invoiceUrl: string | null
    createdAt: Date | null
    expireAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    ticketId: number
    quantity: number
    totalPrice: number
    voucherId: number
    pointId: number
    status: number
    invoiceUrl: number
    createdAt: number
    expireAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    quantity?: true
    totalPrice?: true
  }

  export type TransactionSumAggregateInputType = {
    quantity?: true
    totalPrice?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    ticketId?: true
    quantity?: true
    totalPrice?: true
    voucherId?: true
    pointId?: true
    status?: true
    invoiceUrl?: true
    createdAt?: true
    expireAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    ticketId?: true
    quantity?: true
    totalPrice?: true
    voucherId?: true
    pointId?: true
    status?: true
    invoiceUrl?: true
    createdAt?: true
    expireAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    ticketId?: true
    quantity?: true
    totalPrice?: true
    voucherId?: true
    pointId?: true
    status?: true
    invoiceUrl?: true
    createdAt?: true
    expireAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    eventId: string
    ticketId: string
    quantity: number
    totalPrice: number
    voucherId: string | null
    pointId: string | null
    status: $Enums.statusTransaction
    invoiceUrl: string | null
    createdAt: Date
    expireAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    ticketId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    voucherId?: boolean
    pointId?: boolean
    status?: boolean
    invoiceUrl?: boolean
    createdAt?: boolean
    expireAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
    point?: boolean | Transaction$pointArgs<ExtArgs>
    purchased?: boolean | Transaction$purchasedArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    ticketId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    voucherId?: boolean
    pointId?: boolean
    status?: boolean
    invoiceUrl?: boolean
    createdAt?: boolean
    expireAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
    point?: boolean | Transaction$pointArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    ticketId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    voucherId?: boolean
    pointId?: boolean
    status?: boolean
    invoiceUrl?: boolean
    createdAt?: boolean
    expireAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
    point?: boolean | Transaction$pointArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
    ticketId?: boolean
    quantity?: boolean
    totalPrice?: boolean
    voucherId?: boolean
    pointId?: boolean
    status?: boolean
    invoiceUrl?: boolean
    createdAt?: boolean
    expireAt?: boolean
    updatedAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventId" | "ticketId" | "quantity" | "totalPrice" | "voucherId" | "pointId" | "status" | "invoiceUrl" | "createdAt" | "expireAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
    point?: boolean | Transaction$pointArgs<ExtArgs>
    purchased?: boolean | Transaction$purchasedArgs<ExtArgs>
    _count?: boolean | TransactionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
    point?: boolean | Transaction$pointArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    event?: boolean | EventDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    voucher?: boolean | Transaction$voucherArgs<ExtArgs>
    point?: boolean | Transaction$pointArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      event: Prisma.$EventPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs>
      voucher: Prisma.$VoucherPayload<ExtArgs> | null
      point: Prisma.$PointPayload<ExtArgs> | null
      purchased: Prisma.$PurchasedTicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      eventId: string
      ticketId: string
      quantity: number
      totalPrice: number
      voucherId: string | null
      pointId: string | null
      status: $Enums.statusTransaction
      invoiceUrl: string | null
      createdAt: Date
      expireAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voucher<T extends Transaction$voucherArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$voucherArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    point<T extends Transaction$pointArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$pointArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    purchased<T extends Transaction$purchasedArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$purchasedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly eventId: FieldRef<"Transaction", 'String'>
    readonly ticketId: FieldRef<"Transaction", 'String'>
    readonly quantity: FieldRef<"Transaction", 'Int'>
    readonly totalPrice: FieldRef<"Transaction", 'Int'>
    readonly voucherId: FieldRef<"Transaction", 'String'>
    readonly pointId: FieldRef<"Transaction", 'String'>
    readonly status: FieldRef<"Transaction", 'statusTransaction'>
    readonly invoiceUrl: FieldRef<"Transaction", 'String'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
    readonly expireAt: FieldRef<"Transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.voucher
   */
  export type Transaction$voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
  }

  /**
   * Transaction.point
   */
  export type Transaction$pointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    where?: PointWhereInput
  }

  /**
   * Transaction.purchased
   */
  export type Transaction$purchasedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketInclude<ExtArgs> | null
    where?: PurchasedTicketWhereInput
    orderBy?: PurchasedTicketOrderByWithRelationInput | PurchasedTicketOrderByWithRelationInput[]
    cursor?: PurchasedTicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PurchasedTicketScalarFieldEnum | PurchasedTicketScalarFieldEnum[]
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
  }


  /**
   * Model PurchasedTicket
   */

  export type AggregatePurchasedTicket = {
    _count: PurchasedTicketCountAggregateOutputType | null
    _min: PurchasedTicketMinAggregateOutputType | null
    _max: PurchasedTicketMaxAggregateOutputType | null
  }

  export type PurchasedTicketMinAggregateOutputType = {
    id: string | null
    transactionId: string | null
    ticketId: string | null
    sessionId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type PurchasedTicketMaxAggregateOutputType = {
    id: string | null
    transactionId: string | null
    ticketId: string | null
    sessionId: string | null
    userId: string | null
    createdAt: Date | null
  }

  export type PurchasedTicketCountAggregateOutputType = {
    id: number
    transactionId: number
    ticketId: number
    sessionId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type PurchasedTicketMinAggregateInputType = {
    id?: true
    transactionId?: true
    ticketId?: true
    sessionId?: true
    userId?: true
    createdAt?: true
  }

  export type PurchasedTicketMaxAggregateInputType = {
    id?: true
    transactionId?: true
    ticketId?: true
    sessionId?: true
    userId?: true
    createdAt?: true
  }

  export type PurchasedTicketCountAggregateInputType = {
    id?: true
    transactionId?: true
    ticketId?: true
    sessionId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type PurchasedTicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchasedTicket to aggregate.
     */
    where?: PurchasedTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasedTickets to fetch.
     */
    orderBy?: PurchasedTicketOrderByWithRelationInput | PurchasedTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PurchasedTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasedTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasedTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PurchasedTickets
    **/
    _count?: true | PurchasedTicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PurchasedTicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PurchasedTicketMaxAggregateInputType
  }

  export type GetPurchasedTicketAggregateType<T extends PurchasedTicketAggregateArgs> = {
        [P in keyof T & keyof AggregatePurchasedTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePurchasedTicket[P]>
      : GetScalarType<T[P], AggregatePurchasedTicket[P]>
  }




  export type PurchasedTicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PurchasedTicketWhereInput
    orderBy?: PurchasedTicketOrderByWithAggregationInput | PurchasedTicketOrderByWithAggregationInput[]
    by: PurchasedTicketScalarFieldEnum[] | PurchasedTicketScalarFieldEnum
    having?: PurchasedTicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PurchasedTicketCountAggregateInputType | true
    _min?: PurchasedTicketMinAggregateInputType
    _max?: PurchasedTicketMaxAggregateInputType
  }

  export type PurchasedTicketGroupByOutputType = {
    id: string
    transactionId: string
    ticketId: string
    sessionId: string
    userId: string
    createdAt: Date
    _count: PurchasedTicketCountAggregateOutputType | null
    _min: PurchasedTicketMinAggregateOutputType | null
    _max: PurchasedTicketMaxAggregateOutputType | null
  }

  type GetPurchasedTicketGroupByPayload<T extends PurchasedTicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PurchasedTicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PurchasedTicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PurchasedTicketGroupByOutputType[P]>
            : GetScalarType<T[P], PurchasedTicketGroupByOutputType[P]>
        }
      >
    >


  export type PurchasedTicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    ticketId?: boolean
    sessionId?: boolean
    userId?: boolean
    createdAt?: boolean
    session?: boolean | EventSessionDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Review?: boolean | PurchasedTicket$ReviewArgs<ExtArgs>
    _count?: boolean | PurchasedTicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchasedTicket"]>

  export type PurchasedTicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    ticketId?: boolean
    sessionId?: boolean
    userId?: boolean
    createdAt?: boolean
    session?: boolean | EventSessionDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchasedTicket"]>

  export type PurchasedTicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    ticketId?: boolean
    sessionId?: boolean
    userId?: boolean
    createdAt?: boolean
    session?: boolean | EventSessionDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["purchasedTicket"]>

  export type PurchasedTicketSelectScalar = {
    id?: boolean
    transactionId?: boolean
    ticketId?: boolean
    sessionId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type PurchasedTicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "ticketId" | "sessionId" | "userId" | "createdAt", ExtArgs["result"]["purchasedTicket"]>
  export type PurchasedTicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | EventSessionDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    Review?: boolean | PurchasedTicket$ReviewArgs<ExtArgs>
    _count?: boolean | PurchasedTicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PurchasedTicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | EventSessionDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PurchasedTicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | EventSessionDefaultArgs<ExtArgs>
    transaction?: boolean | TransactionDefaultArgs<ExtArgs>
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PurchasedTicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PurchasedTicket"
    objects: {
      session: Prisma.$EventSessionPayload<ExtArgs>
      transaction: Prisma.$TransactionPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      Review: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transactionId: string
      ticketId: string
      sessionId: string
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["purchasedTicket"]>
    composites: {}
  }

  type PurchasedTicketGetPayload<S extends boolean | null | undefined | PurchasedTicketDefaultArgs> = $Result.GetResult<Prisma.$PurchasedTicketPayload, S>

  type PurchasedTicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PurchasedTicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PurchasedTicketCountAggregateInputType | true
    }

  export interface PurchasedTicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PurchasedTicket'], meta: { name: 'PurchasedTicket' } }
    /**
     * Find zero or one PurchasedTicket that matches the filter.
     * @param {PurchasedTicketFindUniqueArgs} args - Arguments to find a PurchasedTicket
     * @example
     * // Get one PurchasedTicket
     * const purchasedTicket = await prisma.purchasedTicket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PurchasedTicketFindUniqueArgs>(args: SelectSubset<T, PurchasedTicketFindUniqueArgs<ExtArgs>>): Prisma__PurchasedTicketClient<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PurchasedTicket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PurchasedTicketFindUniqueOrThrowArgs} args - Arguments to find a PurchasedTicket
     * @example
     * // Get one PurchasedTicket
     * const purchasedTicket = await prisma.purchasedTicket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PurchasedTicketFindUniqueOrThrowArgs>(args: SelectSubset<T, PurchasedTicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PurchasedTicketClient<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchasedTicket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedTicketFindFirstArgs} args - Arguments to find a PurchasedTicket
     * @example
     * // Get one PurchasedTicket
     * const purchasedTicket = await prisma.purchasedTicket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PurchasedTicketFindFirstArgs>(args?: SelectSubset<T, PurchasedTicketFindFirstArgs<ExtArgs>>): Prisma__PurchasedTicketClient<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PurchasedTicket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedTicketFindFirstOrThrowArgs} args - Arguments to find a PurchasedTicket
     * @example
     * // Get one PurchasedTicket
     * const purchasedTicket = await prisma.purchasedTicket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PurchasedTicketFindFirstOrThrowArgs>(args?: SelectSubset<T, PurchasedTicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__PurchasedTicketClient<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PurchasedTickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedTicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PurchasedTickets
     * const purchasedTickets = await prisma.purchasedTicket.findMany()
     * 
     * // Get first 10 PurchasedTickets
     * const purchasedTickets = await prisma.purchasedTicket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const purchasedTicketWithIdOnly = await prisma.purchasedTicket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PurchasedTicketFindManyArgs>(args?: SelectSubset<T, PurchasedTicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PurchasedTicket.
     * @param {PurchasedTicketCreateArgs} args - Arguments to create a PurchasedTicket.
     * @example
     * // Create one PurchasedTicket
     * const PurchasedTicket = await prisma.purchasedTicket.create({
     *   data: {
     *     // ... data to create a PurchasedTicket
     *   }
     * })
     * 
     */
    create<T extends PurchasedTicketCreateArgs>(args: SelectSubset<T, PurchasedTicketCreateArgs<ExtArgs>>): Prisma__PurchasedTicketClient<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PurchasedTickets.
     * @param {PurchasedTicketCreateManyArgs} args - Arguments to create many PurchasedTickets.
     * @example
     * // Create many PurchasedTickets
     * const purchasedTicket = await prisma.purchasedTicket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PurchasedTicketCreateManyArgs>(args?: SelectSubset<T, PurchasedTicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PurchasedTickets and returns the data saved in the database.
     * @param {PurchasedTicketCreateManyAndReturnArgs} args - Arguments to create many PurchasedTickets.
     * @example
     * // Create many PurchasedTickets
     * const purchasedTicket = await prisma.purchasedTicket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PurchasedTickets and only return the `id`
     * const purchasedTicketWithIdOnly = await prisma.purchasedTicket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PurchasedTicketCreateManyAndReturnArgs>(args?: SelectSubset<T, PurchasedTicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PurchasedTicket.
     * @param {PurchasedTicketDeleteArgs} args - Arguments to delete one PurchasedTicket.
     * @example
     * // Delete one PurchasedTicket
     * const PurchasedTicket = await prisma.purchasedTicket.delete({
     *   where: {
     *     // ... filter to delete one PurchasedTicket
     *   }
     * })
     * 
     */
    delete<T extends PurchasedTicketDeleteArgs>(args: SelectSubset<T, PurchasedTicketDeleteArgs<ExtArgs>>): Prisma__PurchasedTicketClient<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PurchasedTicket.
     * @param {PurchasedTicketUpdateArgs} args - Arguments to update one PurchasedTicket.
     * @example
     * // Update one PurchasedTicket
     * const purchasedTicket = await prisma.purchasedTicket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PurchasedTicketUpdateArgs>(args: SelectSubset<T, PurchasedTicketUpdateArgs<ExtArgs>>): Prisma__PurchasedTicketClient<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PurchasedTickets.
     * @param {PurchasedTicketDeleteManyArgs} args - Arguments to filter PurchasedTickets to delete.
     * @example
     * // Delete a few PurchasedTickets
     * const { count } = await prisma.purchasedTicket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PurchasedTicketDeleteManyArgs>(args?: SelectSubset<T, PurchasedTicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchasedTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedTicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PurchasedTickets
     * const purchasedTicket = await prisma.purchasedTicket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PurchasedTicketUpdateManyArgs>(args: SelectSubset<T, PurchasedTicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PurchasedTickets and returns the data updated in the database.
     * @param {PurchasedTicketUpdateManyAndReturnArgs} args - Arguments to update many PurchasedTickets.
     * @example
     * // Update many PurchasedTickets
     * const purchasedTicket = await prisma.purchasedTicket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PurchasedTickets and only return the `id`
     * const purchasedTicketWithIdOnly = await prisma.purchasedTicket.updateManyAndReturn({
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
    updateManyAndReturn<T extends PurchasedTicketUpdateManyAndReturnArgs>(args: SelectSubset<T, PurchasedTicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PurchasedTicket.
     * @param {PurchasedTicketUpsertArgs} args - Arguments to update or create a PurchasedTicket.
     * @example
     * // Update or create a PurchasedTicket
     * const purchasedTicket = await prisma.purchasedTicket.upsert({
     *   create: {
     *     // ... data to create a PurchasedTicket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PurchasedTicket we want to update
     *   }
     * })
     */
    upsert<T extends PurchasedTicketUpsertArgs>(args: SelectSubset<T, PurchasedTicketUpsertArgs<ExtArgs>>): Prisma__PurchasedTicketClient<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PurchasedTickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedTicketCountArgs} args - Arguments to filter PurchasedTickets to count.
     * @example
     * // Count the number of PurchasedTickets
     * const count = await prisma.purchasedTicket.count({
     *   where: {
     *     // ... the filter for the PurchasedTickets we want to count
     *   }
     * })
    **/
    count<T extends PurchasedTicketCountArgs>(
      args?: Subset<T, PurchasedTicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PurchasedTicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PurchasedTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedTicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PurchasedTicketAggregateArgs>(args: Subset<T, PurchasedTicketAggregateArgs>): Prisma.PrismaPromise<GetPurchasedTicketAggregateType<T>>

    /**
     * Group by PurchasedTicket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PurchasedTicketGroupByArgs} args - Group by arguments.
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
      T extends PurchasedTicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PurchasedTicketGroupByArgs['orderBy'] }
        : { orderBy?: PurchasedTicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PurchasedTicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPurchasedTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PurchasedTicket model
   */
  readonly fields: PurchasedTicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PurchasedTicket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PurchasedTicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends EventSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventSessionDefaultArgs<ExtArgs>>): Prisma__EventSessionClient<$Result.GetResult<Prisma.$EventSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends TransactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TransactionDefaultArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Review<T extends PurchasedTicket$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, PurchasedTicket$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PurchasedTicket model
   */
  interface PurchasedTicketFieldRefs {
    readonly id: FieldRef<"PurchasedTicket", 'String'>
    readonly transactionId: FieldRef<"PurchasedTicket", 'String'>
    readonly ticketId: FieldRef<"PurchasedTicket", 'String'>
    readonly sessionId: FieldRef<"PurchasedTicket", 'String'>
    readonly userId: FieldRef<"PurchasedTicket", 'String'>
    readonly createdAt: FieldRef<"PurchasedTicket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PurchasedTicket findUnique
   */
  export type PurchasedTicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedTicket to fetch.
     */
    where: PurchasedTicketWhereUniqueInput
  }

  /**
   * PurchasedTicket findUniqueOrThrow
   */
  export type PurchasedTicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedTicket to fetch.
     */
    where: PurchasedTicketWhereUniqueInput
  }

  /**
   * PurchasedTicket findFirst
   */
  export type PurchasedTicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedTicket to fetch.
     */
    where?: PurchasedTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasedTickets to fetch.
     */
    orderBy?: PurchasedTicketOrderByWithRelationInput | PurchasedTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchasedTickets.
     */
    cursor?: PurchasedTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasedTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasedTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchasedTickets.
     */
    distinct?: PurchasedTicketScalarFieldEnum | PurchasedTicketScalarFieldEnum[]
  }

  /**
   * PurchasedTicket findFirstOrThrow
   */
  export type PurchasedTicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedTicket to fetch.
     */
    where?: PurchasedTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasedTickets to fetch.
     */
    orderBy?: PurchasedTicketOrderByWithRelationInput | PurchasedTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PurchasedTickets.
     */
    cursor?: PurchasedTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasedTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasedTickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PurchasedTickets.
     */
    distinct?: PurchasedTicketScalarFieldEnum | PurchasedTicketScalarFieldEnum[]
  }

  /**
   * PurchasedTicket findMany
   */
  export type PurchasedTicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketInclude<ExtArgs> | null
    /**
     * Filter, which PurchasedTickets to fetch.
     */
    where?: PurchasedTicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PurchasedTickets to fetch.
     */
    orderBy?: PurchasedTicketOrderByWithRelationInput | PurchasedTicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PurchasedTickets.
     */
    cursor?: PurchasedTicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PurchasedTickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PurchasedTickets.
     */
    skip?: number
    distinct?: PurchasedTicketScalarFieldEnum | PurchasedTicketScalarFieldEnum[]
  }

  /**
   * PurchasedTicket create
   */
  export type PurchasedTicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketInclude<ExtArgs> | null
    /**
     * The data needed to create a PurchasedTicket.
     */
    data: XOR<PurchasedTicketCreateInput, PurchasedTicketUncheckedCreateInput>
  }

  /**
   * PurchasedTicket createMany
   */
  export type PurchasedTicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PurchasedTickets.
     */
    data: PurchasedTicketCreateManyInput | PurchasedTicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PurchasedTicket createManyAndReturn
   */
  export type PurchasedTicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * The data used to create many PurchasedTickets.
     */
    data: PurchasedTicketCreateManyInput | PurchasedTicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchasedTicket update
   */
  export type PurchasedTicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketInclude<ExtArgs> | null
    /**
     * The data needed to update a PurchasedTicket.
     */
    data: XOR<PurchasedTicketUpdateInput, PurchasedTicketUncheckedUpdateInput>
    /**
     * Choose, which PurchasedTicket to update.
     */
    where: PurchasedTicketWhereUniqueInput
  }

  /**
   * PurchasedTicket updateMany
   */
  export type PurchasedTicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PurchasedTickets.
     */
    data: XOR<PurchasedTicketUpdateManyMutationInput, PurchasedTicketUncheckedUpdateManyInput>
    /**
     * Filter which PurchasedTickets to update
     */
    where?: PurchasedTicketWhereInput
    /**
     * Limit how many PurchasedTickets to update.
     */
    limit?: number
  }

  /**
   * PurchasedTicket updateManyAndReturn
   */
  export type PurchasedTicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * The data used to update PurchasedTickets.
     */
    data: XOR<PurchasedTicketUpdateManyMutationInput, PurchasedTicketUncheckedUpdateManyInput>
    /**
     * Filter which PurchasedTickets to update
     */
    where?: PurchasedTicketWhereInput
    /**
     * Limit how many PurchasedTickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PurchasedTicket upsert
   */
  export type PurchasedTicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketInclude<ExtArgs> | null
    /**
     * The filter to search for the PurchasedTicket to update in case it exists.
     */
    where: PurchasedTicketWhereUniqueInput
    /**
     * In case the PurchasedTicket found by the `where` argument doesn't exist, create a new PurchasedTicket with this data.
     */
    create: XOR<PurchasedTicketCreateInput, PurchasedTicketUncheckedCreateInput>
    /**
     * In case the PurchasedTicket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PurchasedTicketUpdateInput, PurchasedTicketUncheckedUpdateInput>
  }

  /**
   * PurchasedTicket delete
   */
  export type PurchasedTicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketInclude<ExtArgs> | null
    /**
     * Filter which PurchasedTicket to delete.
     */
    where: PurchasedTicketWhereUniqueInput
  }

  /**
   * PurchasedTicket deleteMany
   */
  export type PurchasedTicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PurchasedTickets to delete
     */
    where?: PurchasedTicketWhereInput
    /**
     * Limit how many PurchasedTickets to delete.
     */
    limit?: number
  }

  /**
   * PurchasedTicket.Review
   */
  export type PurchasedTicket$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * PurchasedTicket without action
   */
  export type PurchasedTicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PurchasedTicket
     */
    select?: PurchasedTicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PurchasedTicket
     */
    omit?: PurchasedTicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PurchasedTicketInclude<ExtArgs> | null
  }


  /**
   * Model Promotion
   */

  export type AggregatePromotion = {
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  export type PromotionAvgAggregateOutputType = {
    discountValue: number | null
    maxUsage: number | null
    usageCount: number | null
  }

  export type PromotionSumAggregateOutputType = {
    discountValue: number | null
    maxUsage: number | null
    usageCount: number | null
  }

  export type PromotionMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    type: $Enums.PromotionType | null
    code: string | null
    discountValue: number | null
    maxUsage: number | null
    usageCount: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PromotionMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    type: $Enums.PromotionType | null
    code: string | null
    discountValue: number | null
    maxUsage: number | null
    usageCount: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type PromotionCountAggregateOutputType = {
    id: number
    eventId: number
    type: number
    code: number
    discountValue: number
    maxUsage: number
    usageCount: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type PromotionAvgAggregateInputType = {
    discountValue?: true
    maxUsage?: true
    usageCount?: true
  }

  export type PromotionSumAggregateInputType = {
    discountValue?: true
    maxUsage?: true
    usageCount?: true
  }

  export type PromotionMinAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    code?: true
    discountValue?: true
    maxUsage?: true
    usageCount?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PromotionMaxAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    code?: true
    discountValue?: true
    maxUsage?: true
    usageCount?: true
    expiresAt?: true
    createdAt?: true
  }

  export type PromotionCountAggregateInputType = {
    id?: true
    eventId?: true
    type?: true
    code?: true
    discountValue?: true
    maxUsage?: true
    usageCount?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type PromotionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotion to aggregate.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Promotions
    **/
    _count?: true | PromotionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PromotionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PromotionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PromotionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PromotionMaxAggregateInputType
  }

  export type GetPromotionAggregateType<T extends PromotionAggregateArgs> = {
        [P in keyof T & keyof AggregatePromotion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePromotion[P]>
      : GetScalarType<T[P], AggregatePromotion[P]>
  }




  export type PromotionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PromotionWhereInput
    orderBy?: PromotionOrderByWithAggregationInput | PromotionOrderByWithAggregationInput[]
    by: PromotionScalarFieldEnum[] | PromotionScalarFieldEnum
    having?: PromotionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PromotionCountAggregateInputType | true
    _avg?: PromotionAvgAggregateInputType
    _sum?: PromotionSumAggregateInputType
    _min?: PromotionMinAggregateInputType
    _max?: PromotionMaxAggregateInputType
  }

  export type PromotionGroupByOutputType = {
    id: string
    eventId: string
    type: $Enums.PromotionType
    code: string
    discountValue: number
    maxUsage: number | null
    usageCount: number
    expiresAt: Date
    createdAt: Date
    _count: PromotionCountAggregateOutputType | null
    _avg: PromotionAvgAggregateOutputType | null
    _sum: PromotionSumAggregateOutputType | null
    _min: PromotionMinAggregateOutputType | null
    _max: PromotionMaxAggregateOutputType | null
  }

  type GetPromotionGroupByPayload<T extends PromotionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PromotionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PromotionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PromotionGroupByOutputType[P]>
            : GetScalarType<T[P], PromotionGroupByOutputType[P]>
        }
      >
    >


  export type PromotionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    type?: boolean
    code?: boolean
    discountValue?: boolean
    maxUsage?: boolean
    usageCount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    type?: boolean
    code?: boolean
    discountValue?: boolean
    maxUsage?: boolean
    usageCount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    type?: boolean
    code?: boolean
    discountValue?: boolean
    maxUsage?: boolean
    usageCount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["promotion"]>

  export type PromotionSelectScalar = {
    id?: boolean
    eventId?: boolean
    type?: boolean
    code?: boolean
    discountValue?: boolean
    maxUsage?: boolean
    usageCount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type PromotionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "type" | "code" | "discountValue" | "maxUsage" | "usageCount" | "expiresAt" | "createdAt", ExtArgs["result"]["promotion"]>
  export type PromotionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type PromotionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type PromotionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $PromotionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Promotion"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      type: $Enums.PromotionType
      code: string
      discountValue: number
      maxUsage: number | null
      usageCount: number
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["promotion"]>
    composites: {}
  }

  type PromotionGetPayload<S extends boolean | null | undefined | PromotionDefaultArgs> = $Result.GetResult<Prisma.$PromotionPayload, S>

  type PromotionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PromotionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PromotionCountAggregateInputType | true
    }

  export interface PromotionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Promotion'], meta: { name: 'Promotion' } }
    /**
     * Find zero or one Promotion that matches the filter.
     * @param {PromotionFindUniqueArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PromotionFindUniqueArgs>(args: SelectSubset<T, PromotionFindUniqueArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Promotion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PromotionFindUniqueOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PromotionFindUniqueOrThrowArgs>(args: SelectSubset<T, PromotionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PromotionFindFirstArgs>(args?: SelectSubset<T, PromotionFindFirstArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Promotion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindFirstOrThrowArgs} args - Arguments to find a Promotion
     * @example
     * // Get one Promotion
     * const promotion = await prisma.promotion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PromotionFindFirstOrThrowArgs>(args?: SelectSubset<T, PromotionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Promotions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Promotions
     * const promotions = await prisma.promotion.findMany()
     * 
     * // Get first 10 Promotions
     * const promotions = await prisma.promotion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const promotionWithIdOnly = await prisma.promotion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PromotionFindManyArgs>(args?: SelectSubset<T, PromotionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Promotion.
     * @param {PromotionCreateArgs} args - Arguments to create a Promotion.
     * @example
     * // Create one Promotion
     * const Promotion = await prisma.promotion.create({
     *   data: {
     *     // ... data to create a Promotion
     *   }
     * })
     * 
     */
    create<T extends PromotionCreateArgs>(args: SelectSubset<T, PromotionCreateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Promotions.
     * @param {PromotionCreateManyArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PromotionCreateManyArgs>(args?: SelectSubset<T, PromotionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Promotions and returns the data saved in the database.
     * @param {PromotionCreateManyAndReturnArgs} args - Arguments to create many Promotions.
     * @example
     * // Create many Promotions
     * const promotion = await prisma.promotion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Promotions and only return the `id`
     * const promotionWithIdOnly = await prisma.promotion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PromotionCreateManyAndReturnArgs>(args?: SelectSubset<T, PromotionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Promotion.
     * @param {PromotionDeleteArgs} args - Arguments to delete one Promotion.
     * @example
     * // Delete one Promotion
     * const Promotion = await prisma.promotion.delete({
     *   where: {
     *     // ... filter to delete one Promotion
     *   }
     * })
     * 
     */
    delete<T extends PromotionDeleteArgs>(args: SelectSubset<T, PromotionDeleteArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Promotion.
     * @param {PromotionUpdateArgs} args - Arguments to update one Promotion.
     * @example
     * // Update one Promotion
     * const promotion = await prisma.promotion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PromotionUpdateArgs>(args: SelectSubset<T, PromotionUpdateArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Promotions.
     * @param {PromotionDeleteManyArgs} args - Arguments to filter Promotions to delete.
     * @example
     * // Delete a few Promotions
     * const { count } = await prisma.promotion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PromotionDeleteManyArgs>(args?: SelectSubset<T, PromotionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PromotionUpdateManyArgs>(args: SelectSubset<T, PromotionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Promotions and returns the data updated in the database.
     * @param {PromotionUpdateManyAndReturnArgs} args - Arguments to update many Promotions.
     * @example
     * // Update many Promotions
     * const promotion = await prisma.promotion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Promotions and only return the `id`
     * const promotionWithIdOnly = await prisma.promotion.updateManyAndReturn({
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
    updateManyAndReturn<T extends PromotionUpdateManyAndReturnArgs>(args: SelectSubset<T, PromotionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Promotion.
     * @param {PromotionUpsertArgs} args - Arguments to update or create a Promotion.
     * @example
     * // Update or create a Promotion
     * const promotion = await prisma.promotion.upsert({
     *   create: {
     *     // ... data to create a Promotion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Promotion we want to update
     *   }
     * })
     */
    upsert<T extends PromotionUpsertArgs>(args: SelectSubset<T, PromotionUpsertArgs<ExtArgs>>): Prisma__PromotionClient<$Result.GetResult<Prisma.$PromotionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Promotions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionCountArgs} args - Arguments to filter Promotions to count.
     * @example
     * // Count the number of Promotions
     * const count = await prisma.promotion.count({
     *   where: {
     *     // ... the filter for the Promotions we want to count
     *   }
     * })
    **/
    count<T extends PromotionCountArgs>(
      args?: Subset<T, PromotionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PromotionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PromotionAggregateArgs>(args: Subset<T, PromotionAggregateArgs>): Prisma.PrismaPromise<GetPromotionAggregateType<T>>

    /**
     * Group by Promotion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PromotionGroupByArgs} args - Group by arguments.
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
      T extends PromotionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PromotionGroupByArgs['orderBy'] }
        : { orderBy?: PromotionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PromotionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Promotion model
   */
  readonly fields: PromotionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Promotion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PromotionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Promotion model
   */
  interface PromotionFieldRefs {
    readonly id: FieldRef<"Promotion", 'String'>
    readonly eventId: FieldRef<"Promotion", 'String'>
    readonly type: FieldRef<"Promotion", 'PromotionType'>
    readonly code: FieldRef<"Promotion", 'String'>
    readonly discountValue: FieldRef<"Promotion", 'Int'>
    readonly maxUsage: FieldRef<"Promotion", 'Int'>
    readonly usageCount: FieldRef<"Promotion", 'Int'>
    readonly expiresAt: FieldRef<"Promotion", 'DateTime'>
    readonly createdAt: FieldRef<"Promotion", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Promotion findUnique
   */
  export type PromotionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findUniqueOrThrow
   */
  export type PromotionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion findFirst
   */
  export type PromotionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findFirstOrThrow
   */
  export type PromotionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotion to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Promotions.
     */
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion findMany
   */
  export type PromotionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter, which Promotions to fetch.
     */
    where?: PromotionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Promotions to fetch.
     */
    orderBy?: PromotionOrderByWithRelationInput | PromotionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Promotions.
     */
    cursor?: PromotionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Promotions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Promotions.
     */
    skip?: number
    distinct?: PromotionScalarFieldEnum | PromotionScalarFieldEnum[]
  }

  /**
   * Promotion create
   */
  export type PromotionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to create a Promotion.
     */
    data: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
  }

  /**
   * Promotion createMany
   */
  export type PromotionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Promotion createManyAndReturn
   */
  export type PromotionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * The data used to create many Promotions.
     */
    data: PromotionCreateManyInput | PromotionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Promotion update
   */
  export type PromotionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The data needed to update a Promotion.
     */
    data: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
    /**
     * Choose, which Promotion to update.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion updateMany
   */
  export type PromotionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to update.
     */
    limit?: number
  }

  /**
   * Promotion updateManyAndReturn
   */
  export type PromotionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * The data used to update Promotions.
     */
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyInput>
    /**
     * Filter which Promotions to update
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Promotion upsert
   */
  export type PromotionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * The filter to search for the Promotion to update in case it exists.
     */
    where: PromotionWhereUniqueInput
    /**
     * In case the Promotion found by the `where` argument doesn't exist, create a new Promotion with this data.
     */
    create: XOR<PromotionCreateInput, PromotionUncheckedCreateInput>
    /**
     * In case the Promotion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PromotionUpdateInput, PromotionUncheckedUpdateInput>
  }

  /**
   * Promotion delete
   */
  export type PromotionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
    /**
     * Filter which Promotion to delete.
     */
    where: PromotionWhereUniqueInput
  }

  /**
   * Promotion deleteMany
   */
  export type PromotionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Promotions to delete
     */
    where?: PromotionWhereInput
    /**
     * Limit how many Promotions to delete.
     */
    limit?: number
  }

  /**
   * Promotion without action
   */
  export type PromotionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Promotion
     */
    select?: PromotionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Promotion
     */
    omit?: PromotionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PromotionInclude<ExtArgs> | null
  }


  /**
   * Model Point
   */

  export type AggregatePoint = {
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  export type PointAvgAggregateOutputType = {
    amount: number | null
  }

  export type PointSumAggregateOutputType = {
    amount: number | null
  }

  export type PointMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    expiresAt: Date | null
    createdAt: Date | null
    used: boolean | null
  }

  export type PointMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    expiresAt: Date | null
    createdAt: Date | null
    used: boolean | null
  }

  export type PointCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    expiresAt: number
    createdAt: number
    used: number
    _all: number
  }


  export type PointAvgAggregateInputType = {
    amount?: true
  }

  export type PointSumAggregateInputType = {
    amount?: true
  }

  export type PointMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    expiresAt?: true
    createdAt?: true
    used?: true
  }

  export type PointMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    expiresAt?: true
    createdAt?: true
    used?: true
  }

  export type PointCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    expiresAt?: true
    createdAt?: true
    used?: true
    _all?: true
  }

  export type PointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Point to aggregate.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points
    **/
    _count?: true | PointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointMaxAggregateInputType
  }

  export type GetPointAggregateType<T extends PointAggregateArgs> = {
        [P in keyof T & keyof AggregatePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoint[P]>
      : GetScalarType<T[P], AggregatePoint[P]>
  }




  export type PointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
    orderBy?: PointOrderByWithAggregationInput | PointOrderByWithAggregationInput[]
    by: PointScalarFieldEnum[] | PointScalarFieldEnum
    having?: PointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointCountAggregateInputType | true
    _avg?: PointAvgAggregateInputType
    _sum?: PointSumAggregateInputType
    _min?: PointMinAggregateInputType
    _max?: PointMaxAggregateInputType
  }

  export type PointGroupByOutputType = {
    id: string
    userId: string
    amount: number
    expiresAt: Date
    createdAt: Date
    used: boolean
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  type GetPointGroupByPayload<T extends PointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointGroupByOutputType[P]>
            : GetScalarType<T[P], PointGroupByOutputType[P]>
        }
      >
    >


  export type PointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Transaction?: boolean | Point$TransactionArgs<ExtArgs>
    _count?: boolean | PointCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    amount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    used?: boolean
  }

  export type PointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "expiresAt" | "createdAt" | "used", ExtArgs["result"]["point"]>
  export type PointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Transaction?: boolean | Point$TransactionArgs<ExtArgs>
    _count?: boolean | PointCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Point"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      expiresAt: Date
      createdAt: Date
      used: boolean
    }, ExtArgs["result"]["point"]>
    composites: {}
  }

  type PointGetPayload<S extends boolean | null | undefined | PointDefaultArgs> = $Result.GetResult<Prisma.$PointPayload, S>

  type PointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointCountAggregateInputType | true
    }

  export interface PointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Point'], meta: { name: 'Point' } }
    /**
     * Find zero or one Point that matches the filter.
     * @param {PointFindUniqueArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointFindUniqueArgs>(args: SelectSubset<T, PointFindUniqueArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Point that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointFindUniqueOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointFindUniqueOrThrowArgs>(args: SelectSubset<T, PointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointFindFirstArgs>(args?: SelectSubset<T, PointFindFirstArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointFindFirstOrThrowArgs>(args?: SelectSubset<T, PointFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.point.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.point.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointWithIdOnly = await prisma.point.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointFindManyArgs>(args?: SelectSubset<T, PointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Point.
     * @param {PointCreateArgs} args - Arguments to create a Point.
     * @example
     * // Create one Point
     * const Point = await prisma.point.create({
     *   data: {
     *     // ... data to create a Point
     *   }
     * })
     * 
     */
    create<T extends PointCreateArgs>(args: SelectSubset<T, PointCreateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Points.
     * @param {PointCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointCreateManyArgs>(args?: SelectSubset<T, PointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {PointCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `id`
     * const pointWithIdOnly = await prisma.point.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointCreateManyAndReturnArgs>(args?: SelectSubset<T, PointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Point.
     * @param {PointDeleteArgs} args - Arguments to delete one Point.
     * @example
     * // Delete one Point
     * const Point = await prisma.point.delete({
     *   where: {
     *     // ... filter to delete one Point
     *   }
     * })
     * 
     */
    delete<T extends PointDeleteArgs>(args: SelectSubset<T, PointDeleteArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Point.
     * @param {PointUpdateArgs} args - Arguments to update one Point.
     * @example
     * // Update one Point
     * const point = await prisma.point.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointUpdateArgs>(args: SelectSubset<T, PointUpdateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Points.
     * @param {PointDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.point.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointDeleteManyArgs>(args?: SelectSubset<T, PointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointUpdateManyArgs>(args: SelectSubset<T, PointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points and returns the data updated in the database.
     * @param {PointUpdateManyAndReturnArgs} args - Arguments to update many Points.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Points and only return the `id`
     * const pointWithIdOnly = await prisma.point.updateManyAndReturn({
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
    updateManyAndReturn<T extends PointUpdateManyAndReturnArgs>(args: SelectSubset<T, PointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Point.
     * @param {PointUpsertArgs} args - Arguments to update or create a Point.
     * @example
     * // Update or create a Point
     * const point = await prisma.point.upsert({
     *   create: {
     *     // ... data to create a Point
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Point we want to update
     *   }
     * })
     */
    upsert<T extends PointUpsertArgs>(args: SelectSubset<T, PointUpsertArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.point.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends PointCountArgs>(
      args?: Subset<T, PointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointAggregateArgs>(args: Subset<T, PointAggregateArgs>): Prisma.PrismaPromise<GetPointAggregateType<T>>

    /**
     * Group by Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointGroupByArgs} args - Group by arguments.
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
      T extends PointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointGroupByArgs['orderBy'] }
        : { orderBy?: PointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Point model
   */
  readonly fields: PointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Point.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Transaction<T extends Point$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Point$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Point model
   */
  interface PointFieldRefs {
    readonly id: FieldRef<"Point", 'String'>
    readonly userId: FieldRef<"Point", 'String'>
    readonly amount: FieldRef<"Point", 'Int'>
    readonly expiresAt: FieldRef<"Point", 'DateTime'>
    readonly createdAt: FieldRef<"Point", 'DateTime'>
    readonly used: FieldRef<"Point", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Point findUnique
   */
  export type PointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findUniqueOrThrow
   */
  export type PointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findFirst
   */
  export type PointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findFirstOrThrow
   */
  export type PointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findMany
   */
  export type PointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point create
   */
  export type PointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to create a Point.
     */
    data: XOR<PointCreateInput, PointUncheckedCreateInput>
  }

  /**
   * Point createMany
   */
  export type PointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Point createManyAndReturn
   */
  export type PointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point update
   */
  export type PointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to update a Point.
     */
    data: XOR<PointUpdateInput, PointUncheckedUpdateInput>
    /**
     * Choose, which Point to update.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point updateMany
   */
  export type PointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
  }

  /**
   * Point updateManyAndReturn
   */
  export type PointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point upsert
   */
  export type PointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The filter to search for the Point to update in case it exists.
     */
    where: PointWhereUniqueInput
    /**
     * In case the Point found by the `where` argument doesn't exist, create a new Point with this data.
     */
    create: XOR<PointCreateInput, PointUncheckedCreateInput>
    /**
     * In case the Point was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointUpdateInput, PointUncheckedUpdateInput>
  }

  /**
   * Point delete
   */
  export type PointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter which Point to delete.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point deleteMany
   */
  export type PointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to delete
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to delete.
     */
    limit?: number
  }

  /**
   * Point.Transaction
   */
  export type Point$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Point without action
   */
  export type PointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
  }


  /**
   * Model Voucher
   */

  export type AggregateVoucher = {
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  export type VoucherAvgAggregateOutputType = {
    discountPercent: number | null
  }

  export type VoucherSumAggregateOutputType = {
    discountPercent: number | null
  }

  export type VoucherMinAggregateOutputType = {
    id: string | null
    voucherType: $Enums.voucherType | null
    userId: string | null
    discountPercent: number | null
    expiresAt: Date | null
    createdAt: Date | null
    used: boolean | null
  }

  export type VoucherMaxAggregateOutputType = {
    id: string | null
    voucherType: $Enums.voucherType | null
    userId: string | null
    discountPercent: number | null
    expiresAt: Date | null
    createdAt: Date | null
    used: boolean | null
  }

  export type VoucherCountAggregateOutputType = {
    id: number
    voucherType: number
    userId: number
    discountPercent: number
    expiresAt: number
    createdAt: number
    used: number
    _all: number
  }


  export type VoucherAvgAggregateInputType = {
    discountPercent?: true
  }

  export type VoucherSumAggregateInputType = {
    discountPercent?: true
  }

  export type VoucherMinAggregateInputType = {
    id?: true
    voucherType?: true
    userId?: true
    discountPercent?: true
    expiresAt?: true
    createdAt?: true
    used?: true
  }

  export type VoucherMaxAggregateInputType = {
    id?: true
    voucherType?: true
    userId?: true
    discountPercent?: true
    expiresAt?: true
    createdAt?: true
    used?: true
  }

  export type VoucherCountAggregateInputType = {
    id?: true
    voucherType?: true
    userId?: true
    discountPercent?: true
    expiresAt?: true
    createdAt?: true
    used?: true
    _all?: true
  }

  export type VoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voucher to aggregate.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoucherMaxAggregateInputType
  }

  export type GetVoucherAggregateType<T extends VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucher[P]>
      : GetScalarType<T[P], AggregateVoucher[P]>
  }




  export type VoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithAggregationInput | VoucherOrderByWithAggregationInput[]
    by: VoucherScalarFieldEnum[] | VoucherScalarFieldEnum
    having?: VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoucherCountAggregateInputType | true
    _avg?: VoucherAvgAggregateInputType
    _sum?: VoucherSumAggregateInputType
    _min?: VoucherMinAggregateInputType
    _max?: VoucherMaxAggregateInputType
  }

  export type VoucherGroupByOutputType = {
    id: string
    voucherType: $Enums.voucherType
    userId: string
    discountPercent: number
    expiresAt: Date
    createdAt: Date
    used: boolean
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  type GetVoucherGroupByPayload<T extends VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], VoucherGroupByOutputType[P]>
        }
      >
    >


  export type VoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voucherType?: boolean
    userId?: boolean
    discountPercent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ReferralUsage?: boolean | Voucher$ReferralUsageArgs<ExtArgs>
    Transaction?: boolean | Voucher$TransactionArgs<ExtArgs>
    _count?: boolean | VoucherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voucherType?: boolean
    userId?: boolean
    discountPercent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    voucherType?: boolean
    userId?: boolean
    discountPercent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    used?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectScalar = {
    id?: boolean
    voucherType?: boolean
    userId?: boolean
    discountPercent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    used?: boolean
  }

  export type VoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "voucherType" | "userId" | "discountPercent" | "expiresAt" | "createdAt" | "used", ExtArgs["result"]["voucher"]>
  export type VoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ReferralUsage?: boolean | Voucher$ReferralUsageArgs<ExtArgs>
    Transaction?: boolean | Voucher$TransactionArgs<ExtArgs>
    _count?: boolean | VoucherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VoucherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VoucherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voucher"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ReferralUsage: Prisma.$ReferralUsagePayload<ExtArgs>[]
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      voucherType: $Enums.voucherType
      userId: string
      discountPercent: number
      expiresAt: Date
      createdAt: Date
      used: boolean
    }, ExtArgs["result"]["voucher"]>
    composites: {}
  }

  type VoucherGetPayload<S extends boolean | null | undefined | VoucherDefaultArgs> = $Result.GetResult<Prisma.$VoucherPayload, S>

  type VoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoucherCountAggregateInputType | true
    }

  export interface VoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voucher'], meta: { name: 'Voucher' } }
    /**
     * Find zero or one Voucher that matches the filter.
     * @param {VoucherFindUniqueArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoucherFindUniqueArgs>(args: SelectSubset<T, VoucherFindUniqueArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voucher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoucherFindUniqueOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoucherFindFirstArgs>(args?: SelectSubset<T, VoucherFindFirstArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.voucher.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.voucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voucherWithIdOnly = await prisma.voucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoucherFindManyArgs>(args?: SelectSubset<T, VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voucher.
     * @param {VoucherCreateArgs} args - Arguments to create a Voucher.
     * @example
     * // Create one Voucher
     * const Voucher = await prisma.voucher.create({
     *   data: {
     *     // ... data to create a Voucher
     *   }
     * })
     * 
     */
    create<T extends VoucherCreateArgs>(args: SelectSubset<T, VoucherCreateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {VoucherCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoucherCreateManyArgs>(args?: SelectSubset<T, VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vouchers and returns the data saved in the database.
     * @param {VoucherCreateManyAndReturnArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoucherCreateManyAndReturnArgs>(args?: SelectSubset<T, VoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voucher.
     * @param {VoucherDeleteArgs} args - Arguments to delete one Voucher.
     * @example
     * // Delete one Voucher
     * const Voucher = await prisma.voucher.delete({
     *   where: {
     *     // ... filter to delete one Voucher
     *   }
     * })
     * 
     */
    delete<T extends VoucherDeleteArgs>(args: SelectSubset<T, VoucherDeleteArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voucher.
     * @param {VoucherUpdateArgs} args - Arguments to update one Voucher.
     * @example
     * // Update one Voucher
     * const voucher = await prisma.voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoucherUpdateArgs>(args: SelectSubset<T, VoucherUpdateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {VoucherDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoucherDeleteManyArgs>(args?: SelectSubset<T, VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoucherUpdateManyArgs>(args: SelectSubset<T, VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers and returns the data updated in the database.
     * @param {VoucherUpdateManyAndReturnArgs} args - Arguments to update many Vouchers.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.updateManyAndReturn({
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
    updateManyAndReturn<T extends VoucherUpdateManyAndReturnArgs>(args: SelectSubset<T, VoucherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voucher.
     * @param {VoucherUpsertArgs} args - Arguments to update or create a Voucher.
     * @example
     * // Update or create a Voucher
     * const voucher = await prisma.voucher.upsert({
     *   create: {
     *     // ... data to create a Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voucher we want to update
     *   }
     * })
     */
    upsert<T extends VoucherUpsertArgs>(args: SelectSubset<T, VoucherUpsertArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.voucher.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VoucherCountArgs>(
      args?: Subset<T, VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoucherAggregateArgs>(args: Subset<T, VoucherAggregateArgs>): Prisma.PrismaPromise<GetVoucherAggregateType<T>>

    /**
     * Group by Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherGroupByArgs} args - Group by arguments.
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
      T extends VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoucherGroupByArgs['orderBy'] }
        : { orderBy?: VoucherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voucher model
   */
  readonly fields: VoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ReferralUsage<T extends Voucher$ReferralUsageArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$ReferralUsageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Transaction<T extends Voucher$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Voucher model
   */
  interface VoucherFieldRefs {
    readonly id: FieldRef<"Voucher", 'String'>
    readonly voucherType: FieldRef<"Voucher", 'voucherType'>
    readonly userId: FieldRef<"Voucher", 'String'>
    readonly discountPercent: FieldRef<"Voucher", 'Int'>
    readonly expiresAt: FieldRef<"Voucher", 'DateTime'>
    readonly createdAt: FieldRef<"Voucher", 'DateTime'>
    readonly used: FieldRef<"Voucher", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Voucher findUnique
   */
  export type VoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findUniqueOrThrow
   */
  export type VoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findFirst
   */
  export type VoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findFirstOrThrow
   */
  export type VoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findMany
   */
  export type VoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher create
   */
  export type VoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a Voucher.
     */
    data: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
  }

  /**
   * Voucher createMany
   */
  export type VoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voucher createManyAndReturn
   */
  export type VoucherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voucher update
   */
  export type VoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a Voucher.
     */
    data: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
    /**
     * Choose, which Voucher to update.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher updateMany
   */
  export type VoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Voucher updateManyAndReturn
   */
  export type VoucherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voucher upsert
   */
  export type VoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the Voucher to update in case it exists.
     */
    where: VoucherWhereUniqueInput
    /**
     * In case the Voucher found by the `where` argument doesn't exist, create a new Voucher with this data.
     */
    create: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
    /**
     * In case the Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
  }

  /**
   * Voucher delete
   */
  export type VoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter which Voucher to delete.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher deleteMany
   */
  export type VoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to delete.
     */
    limit?: number
  }

  /**
   * Voucher.ReferralUsage
   */
  export type Voucher$ReferralUsageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    where?: ReferralUsageWhereInput
    orderBy?: ReferralUsageOrderByWithRelationInput | ReferralUsageOrderByWithRelationInput[]
    cursor?: ReferralUsageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralUsageScalarFieldEnum | ReferralUsageScalarFieldEnum[]
  }

  /**
   * Voucher.Transaction
   */
  export type Voucher$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Voucher without action
   */
  export type VoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
  }


  /**
   * Model ReferralUsage
   */

  export type AggregateReferralUsage = {
    _count: ReferralUsageCountAggregateOutputType | null
    _min: ReferralUsageMinAggregateOutputType | null
    _max: ReferralUsageMaxAggregateOutputType | null
  }

  export type ReferralUsageMinAggregateOutputType = {
    id: string | null
    referrerId: string | null
    referredId: string | null
    voucherId: string | null
    createdAt: Date | null
  }

  export type ReferralUsageMaxAggregateOutputType = {
    id: string | null
    referrerId: string | null
    referredId: string | null
    voucherId: string | null
    createdAt: Date | null
  }

  export type ReferralUsageCountAggregateOutputType = {
    id: number
    referrerId: number
    referredId: number
    voucherId: number
    createdAt: number
    _all: number
  }


  export type ReferralUsageMinAggregateInputType = {
    id?: true
    referrerId?: true
    referredId?: true
    voucherId?: true
    createdAt?: true
  }

  export type ReferralUsageMaxAggregateInputType = {
    id?: true
    referrerId?: true
    referredId?: true
    voucherId?: true
    createdAt?: true
  }

  export type ReferralUsageCountAggregateInputType = {
    id?: true
    referrerId?: true
    referredId?: true
    voucherId?: true
    createdAt?: true
    _all?: true
  }

  export type ReferralUsageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralUsage to aggregate.
     */
    where?: ReferralUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralUsages to fetch.
     */
    orderBy?: ReferralUsageOrderByWithRelationInput | ReferralUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferralUsages
    **/
    _count?: true | ReferralUsageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralUsageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralUsageMaxAggregateInputType
  }

  export type GetReferralUsageAggregateType<T extends ReferralUsageAggregateArgs> = {
        [P in keyof T & keyof AggregateReferralUsage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferralUsage[P]>
      : GetScalarType<T[P], AggregateReferralUsage[P]>
  }




  export type ReferralUsageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralUsageWhereInput
    orderBy?: ReferralUsageOrderByWithAggregationInput | ReferralUsageOrderByWithAggregationInput[]
    by: ReferralUsageScalarFieldEnum[] | ReferralUsageScalarFieldEnum
    having?: ReferralUsageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralUsageCountAggregateInputType | true
    _min?: ReferralUsageMinAggregateInputType
    _max?: ReferralUsageMaxAggregateInputType
  }

  export type ReferralUsageGroupByOutputType = {
    id: string
    referrerId: string
    referredId: string
    voucherId: string | null
    createdAt: Date
    _count: ReferralUsageCountAggregateOutputType | null
    _min: ReferralUsageMinAggregateOutputType | null
    _max: ReferralUsageMaxAggregateOutputType | null
  }

  type GetReferralUsageGroupByPayload<T extends ReferralUsageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralUsageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralUsageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralUsageGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralUsageGroupByOutputType[P]>
        }
      >
    >


  export type ReferralUsageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    voucherId?: boolean
    createdAt?: boolean
    referred?: boolean | UserDefaultArgs<ExtArgs>
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | ReferralUsage$voucherArgs<ExtArgs>
  }, ExtArgs["result"]["referralUsage"]>

  export type ReferralUsageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    voucherId?: boolean
    createdAt?: boolean
    referred?: boolean | UserDefaultArgs<ExtArgs>
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | ReferralUsage$voucherArgs<ExtArgs>
  }, ExtArgs["result"]["referralUsage"]>

  export type ReferralUsageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    voucherId?: boolean
    createdAt?: boolean
    referred?: boolean | UserDefaultArgs<ExtArgs>
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | ReferralUsage$voucherArgs<ExtArgs>
  }, ExtArgs["result"]["referralUsage"]>

  export type ReferralUsageSelectScalar = {
    id?: boolean
    referrerId?: boolean
    referredId?: boolean
    voucherId?: boolean
    createdAt?: boolean
  }

  export type ReferralUsageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referrerId" | "referredId" | "voucherId" | "createdAt", ExtArgs["result"]["referralUsage"]>
  export type ReferralUsageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referred?: boolean | UserDefaultArgs<ExtArgs>
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | ReferralUsage$voucherArgs<ExtArgs>
  }
  export type ReferralUsageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referred?: boolean | UserDefaultArgs<ExtArgs>
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | ReferralUsage$voucherArgs<ExtArgs>
  }
  export type ReferralUsageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referred?: boolean | UserDefaultArgs<ExtArgs>
    referrer?: boolean | UserDefaultArgs<ExtArgs>
    voucher?: boolean | ReferralUsage$voucherArgs<ExtArgs>
  }

  export type $ReferralUsagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReferralUsage"
    objects: {
      referred: Prisma.$UserPayload<ExtArgs>
      referrer: Prisma.$UserPayload<ExtArgs>
      voucher: Prisma.$VoucherPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referrerId: string
      referredId: string
      voucherId: string | null
      createdAt: Date
    }, ExtArgs["result"]["referralUsage"]>
    composites: {}
  }

  type ReferralUsageGetPayload<S extends boolean | null | undefined | ReferralUsageDefaultArgs> = $Result.GetResult<Prisma.$ReferralUsagePayload, S>

  type ReferralUsageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralUsageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralUsageCountAggregateInputType | true
    }

  export interface ReferralUsageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferralUsage'], meta: { name: 'ReferralUsage' } }
    /**
     * Find zero or one ReferralUsage that matches the filter.
     * @param {ReferralUsageFindUniqueArgs} args - Arguments to find a ReferralUsage
     * @example
     * // Get one ReferralUsage
     * const referralUsage = await prisma.referralUsage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralUsageFindUniqueArgs>(args: SelectSubset<T, ReferralUsageFindUniqueArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReferralUsage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralUsageFindUniqueOrThrowArgs} args - Arguments to find a ReferralUsage
     * @example
     * // Get one ReferralUsage
     * const referralUsage = await prisma.referralUsage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralUsageFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralUsageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralUsage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUsageFindFirstArgs} args - Arguments to find a ReferralUsage
     * @example
     * // Get one ReferralUsage
     * const referralUsage = await prisma.referralUsage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralUsageFindFirstArgs>(args?: SelectSubset<T, ReferralUsageFindFirstArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralUsage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUsageFindFirstOrThrowArgs} args - Arguments to find a ReferralUsage
     * @example
     * // Get one ReferralUsage
     * const referralUsage = await prisma.referralUsage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralUsageFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralUsageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReferralUsages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUsageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferralUsages
     * const referralUsages = await prisma.referralUsage.findMany()
     * 
     * // Get first 10 ReferralUsages
     * const referralUsages = await prisma.referralUsage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralUsageWithIdOnly = await prisma.referralUsage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralUsageFindManyArgs>(args?: SelectSubset<T, ReferralUsageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReferralUsage.
     * @param {ReferralUsageCreateArgs} args - Arguments to create a ReferralUsage.
     * @example
     * // Create one ReferralUsage
     * const ReferralUsage = await prisma.referralUsage.create({
     *   data: {
     *     // ... data to create a ReferralUsage
     *   }
     * })
     * 
     */
    create<T extends ReferralUsageCreateArgs>(args: SelectSubset<T, ReferralUsageCreateArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReferralUsages.
     * @param {ReferralUsageCreateManyArgs} args - Arguments to create many ReferralUsages.
     * @example
     * // Create many ReferralUsages
     * const referralUsage = await prisma.referralUsage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralUsageCreateManyArgs>(args?: SelectSubset<T, ReferralUsageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReferralUsages and returns the data saved in the database.
     * @param {ReferralUsageCreateManyAndReturnArgs} args - Arguments to create many ReferralUsages.
     * @example
     * // Create many ReferralUsages
     * const referralUsage = await prisma.referralUsage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReferralUsages and only return the `id`
     * const referralUsageWithIdOnly = await prisma.referralUsage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralUsageCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralUsageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReferralUsage.
     * @param {ReferralUsageDeleteArgs} args - Arguments to delete one ReferralUsage.
     * @example
     * // Delete one ReferralUsage
     * const ReferralUsage = await prisma.referralUsage.delete({
     *   where: {
     *     // ... filter to delete one ReferralUsage
     *   }
     * })
     * 
     */
    delete<T extends ReferralUsageDeleteArgs>(args: SelectSubset<T, ReferralUsageDeleteArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReferralUsage.
     * @param {ReferralUsageUpdateArgs} args - Arguments to update one ReferralUsage.
     * @example
     * // Update one ReferralUsage
     * const referralUsage = await prisma.referralUsage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralUsageUpdateArgs>(args: SelectSubset<T, ReferralUsageUpdateArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReferralUsages.
     * @param {ReferralUsageDeleteManyArgs} args - Arguments to filter ReferralUsages to delete.
     * @example
     * // Delete a few ReferralUsages
     * const { count } = await prisma.referralUsage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralUsageDeleteManyArgs>(args?: SelectSubset<T, ReferralUsageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUsageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferralUsages
     * const referralUsage = await prisma.referralUsage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralUsageUpdateManyArgs>(args: SelectSubset<T, ReferralUsageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralUsages and returns the data updated in the database.
     * @param {ReferralUsageUpdateManyAndReturnArgs} args - Arguments to update many ReferralUsages.
     * @example
     * // Update many ReferralUsages
     * const referralUsage = await prisma.referralUsage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReferralUsages and only return the `id`
     * const referralUsageWithIdOnly = await prisma.referralUsage.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReferralUsageUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferralUsageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReferralUsage.
     * @param {ReferralUsageUpsertArgs} args - Arguments to update or create a ReferralUsage.
     * @example
     * // Update or create a ReferralUsage
     * const referralUsage = await prisma.referralUsage.upsert({
     *   create: {
     *     // ... data to create a ReferralUsage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferralUsage we want to update
     *   }
     * })
     */
    upsert<T extends ReferralUsageUpsertArgs>(args: SelectSubset<T, ReferralUsageUpsertArgs<ExtArgs>>): Prisma__ReferralUsageClient<$Result.GetResult<Prisma.$ReferralUsagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReferralUsages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUsageCountArgs} args - Arguments to filter ReferralUsages to count.
     * @example
     * // Count the number of ReferralUsages
     * const count = await prisma.referralUsage.count({
     *   where: {
     *     // ... the filter for the ReferralUsages we want to count
     *   }
     * })
    **/
    count<T extends ReferralUsageCountArgs>(
      args?: Subset<T, ReferralUsageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralUsageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferralUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUsageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferralUsageAggregateArgs>(args: Subset<T, ReferralUsageAggregateArgs>): Prisma.PrismaPromise<GetReferralUsageAggregateType<T>>

    /**
     * Group by ReferralUsage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralUsageGroupByArgs} args - Group by arguments.
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
      T extends ReferralUsageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralUsageGroupByArgs['orderBy'] }
        : { orderBy?: ReferralUsageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferralUsageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralUsageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferralUsage model
   */
  readonly fields: ReferralUsageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferralUsage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralUsageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referred<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    referrer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    voucher<T extends ReferralUsage$voucherArgs<ExtArgs> = {}>(args?: Subset<T, ReferralUsage$voucherArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReferralUsage model
   */
  interface ReferralUsageFieldRefs {
    readonly id: FieldRef<"ReferralUsage", 'String'>
    readonly referrerId: FieldRef<"ReferralUsage", 'String'>
    readonly referredId: FieldRef<"ReferralUsage", 'String'>
    readonly voucherId: FieldRef<"ReferralUsage", 'String'>
    readonly createdAt: FieldRef<"ReferralUsage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReferralUsage findUnique
   */
  export type ReferralUsageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralUsage to fetch.
     */
    where: ReferralUsageWhereUniqueInput
  }

  /**
   * ReferralUsage findUniqueOrThrow
   */
  export type ReferralUsageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralUsage to fetch.
     */
    where: ReferralUsageWhereUniqueInput
  }

  /**
   * ReferralUsage findFirst
   */
  export type ReferralUsageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralUsage to fetch.
     */
    where?: ReferralUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralUsages to fetch.
     */
    orderBy?: ReferralUsageOrderByWithRelationInput | ReferralUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralUsages.
     */
    cursor?: ReferralUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralUsages.
     */
    distinct?: ReferralUsageScalarFieldEnum | ReferralUsageScalarFieldEnum[]
  }

  /**
   * ReferralUsage findFirstOrThrow
   */
  export type ReferralUsageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralUsage to fetch.
     */
    where?: ReferralUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralUsages to fetch.
     */
    orderBy?: ReferralUsageOrderByWithRelationInput | ReferralUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralUsages.
     */
    cursor?: ReferralUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralUsages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralUsages.
     */
    distinct?: ReferralUsageScalarFieldEnum | ReferralUsageScalarFieldEnum[]
  }

  /**
   * ReferralUsage findMany
   */
  export type ReferralUsageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * Filter, which ReferralUsages to fetch.
     */
    where?: ReferralUsageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralUsages to fetch.
     */
    orderBy?: ReferralUsageOrderByWithRelationInput | ReferralUsageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferralUsages.
     */
    cursor?: ReferralUsageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralUsages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralUsages.
     */
    skip?: number
    distinct?: ReferralUsageScalarFieldEnum | ReferralUsageScalarFieldEnum[]
  }

  /**
   * ReferralUsage create
   */
  export type ReferralUsageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * The data needed to create a ReferralUsage.
     */
    data: XOR<ReferralUsageCreateInput, ReferralUsageUncheckedCreateInput>
  }

  /**
   * ReferralUsage createMany
   */
  export type ReferralUsageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferralUsages.
     */
    data: ReferralUsageCreateManyInput | ReferralUsageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReferralUsage createManyAndReturn
   */
  export type ReferralUsageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * The data used to create many ReferralUsages.
     */
    data: ReferralUsageCreateManyInput | ReferralUsageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralUsage update
   */
  export type ReferralUsageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * The data needed to update a ReferralUsage.
     */
    data: XOR<ReferralUsageUpdateInput, ReferralUsageUncheckedUpdateInput>
    /**
     * Choose, which ReferralUsage to update.
     */
    where: ReferralUsageWhereUniqueInput
  }

  /**
   * ReferralUsage updateMany
   */
  export type ReferralUsageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferralUsages.
     */
    data: XOR<ReferralUsageUpdateManyMutationInput, ReferralUsageUncheckedUpdateManyInput>
    /**
     * Filter which ReferralUsages to update
     */
    where?: ReferralUsageWhereInput
    /**
     * Limit how many ReferralUsages to update.
     */
    limit?: number
  }

  /**
   * ReferralUsage updateManyAndReturn
   */
  export type ReferralUsageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * The data used to update ReferralUsages.
     */
    data: XOR<ReferralUsageUpdateManyMutationInput, ReferralUsageUncheckedUpdateManyInput>
    /**
     * Filter which ReferralUsages to update
     */
    where?: ReferralUsageWhereInput
    /**
     * Limit how many ReferralUsages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralUsage upsert
   */
  export type ReferralUsageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * The filter to search for the ReferralUsage to update in case it exists.
     */
    where: ReferralUsageWhereUniqueInput
    /**
     * In case the ReferralUsage found by the `where` argument doesn't exist, create a new ReferralUsage with this data.
     */
    create: XOR<ReferralUsageCreateInput, ReferralUsageUncheckedCreateInput>
    /**
     * In case the ReferralUsage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralUsageUpdateInput, ReferralUsageUncheckedUpdateInput>
  }

  /**
   * ReferralUsage delete
   */
  export type ReferralUsageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
    /**
     * Filter which ReferralUsage to delete.
     */
    where: ReferralUsageWhereUniqueInput
  }

  /**
   * ReferralUsage deleteMany
   */
  export type ReferralUsageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralUsages to delete
     */
    where?: ReferralUsageWhereInput
    /**
     * Limit how many ReferralUsages to delete.
     */
    limit?: number
  }

  /**
   * ReferralUsage.voucher
   */
  export type ReferralUsage$voucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
  }

  /**
   * ReferralUsage without action
   */
  export type ReferralUsageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralUsage
     */
    select?: ReferralUsageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralUsage
     */
    omit?: ReferralUsageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralUsageInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    purchasedTicketId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    purchasedTicketId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    purchasedTicketId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    purchasedTicketId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    purchasedTicketId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    purchasedTicketId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    eventId: string
    userId: string
    purchasedTicketId: string
    rating: number
    comment: string
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    purchasedTicketId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchasedTicket?: boolean | PurchasedTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    purchasedTicketId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchasedTicket?: boolean | PurchasedTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    purchasedTicketId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchasedTicket?: boolean | PurchasedTicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
    purchasedTicketId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "userId" | "purchasedTicketId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchasedTicket?: boolean | PurchasedTicketDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchasedTicket?: boolean | PurchasedTicketDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    purchasedTicket?: boolean | PurchasedTicketDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      purchasedTicket: Prisma.$PurchasedTicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      userId: string
      purchasedTicketId: string
      rating: number
      comment: string
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    purchasedTicket<T extends PurchasedTicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PurchasedTicketDefaultArgs<ExtArgs>>): Prisma__PurchasedTicketClient<$Result.GetResult<Prisma.$PurchasedTicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly eventId: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly purchasedTicketId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Artist
   */

  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistMinAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: string | null
    name: string | null
    image: string | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    name: number
    image: number
    _all: number
  }


  export type ArtistMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    _all?: true
  }

  export type ArtistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistWhereInput
    orderBy?: ArtistOrderByWithAggregationInput | ArtistOrderByWithAggregationInput[]
    by: ArtistScalarFieldEnum[] | ArtistScalarFieldEnum
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }

  export type ArtistGroupByOutputType = {
    id: string
    name: string
    image: string
    _count: ArtistCountAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
  }, ExtArgs["result"]["artist"]>

  export type ArtistSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
  }

  export type ArtistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image", ExtArgs["result"]["artist"]>

  export type $ArtistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      image: string
    }, ExtArgs["result"]["artist"]>
    composites: {}
  }

  type ArtistGetPayload<S extends boolean | null | undefined | ArtistDefaultArgs> = $Result.GetResult<Prisma.$ArtistPayload, S>

  type ArtistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artist'], meta: { name: 'Artist' } }
    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistFindUniqueArgs>(args: SelectSubset<T, ArtistFindUniqueArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistFindFirstArgs>(args?: SelectSubset<T, ArtistFindFirstArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistFindManyArgs>(args?: SelectSubset<T, ArtistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
     */
    create<T extends ArtistCreateArgs>(args: SelectSubset<T, ArtistCreateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artists.
     * @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistCreateManyArgs>(args?: SelectSubset<T, ArtistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artists and returns the data saved in the database.
     * @param {ArtistCreateManyAndReturnArgs} args - Arguments to create many Artists.
     * @example
     * // Create many Artists
     * const artist = await prisma.artist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
     */
    delete<T extends ArtistDeleteArgs>(args: SelectSubset<T, ArtistDeleteArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistUpdateArgs>(args: SelectSubset<T, ArtistUpdateArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistDeleteManyArgs>(args?: SelectSubset<T, ArtistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistUpdateManyArgs>(args: SelectSubset<T, ArtistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists and returns the data updated in the database.
     * @param {ArtistUpdateManyAndReturnArgs} args - Arguments to update many Artists.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artists and only return the `id`
     * const artistWithIdOnly = await prisma.artist.updateManyAndReturn({
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
    updateManyAndReturn<T extends ArtistUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
     */
    upsert<T extends ArtistUpsertArgs>(args: SelectSubset<T, ArtistUpsertArgs<ExtArgs>>): Prisma__ArtistClient<$Result.GetResult<Prisma.$ArtistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
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
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artist model
   */
  readonly fields: ArtistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Artist model
   */
  interface ArtistFieldRefs {
    readonly id: FieldRef<"Artist", 'String'>
    readonly name: FieldRef<"Artist", 'String'>
    readonly image: FieldRef<"Artist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Artist findUnique
   */
  export type ArtistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findFirst
   */
  export type ArtistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistOrderByWithRelationInput | ArtistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistScalarFieldEnum | ArtistScalarFieldEnum[]
  }

  /**
   * Artist create
   */
  export type ArtistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }

  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist createManyAndReturn
   */
  export type ArtistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to create many Artists.
     */
    data: ArtistCreateManyInput | ArtistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artist update
   */
  export type ArtistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist updateManyAndReturn
   */
  export type ArtistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to update.
     */
    limit?: number
  }

  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }

  /**
   * Artist delete
   */
  export type ArtistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
    /**
     * Limit how many Artists to delete.
     */
    limit?: number
  }

  /**
   * Artist without action
   */
  export type ArtistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artist
     */
    omit?: ArtistOmit<ExtArgs> | null
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
    password: 'password',
    role: 'role',
    referralCode: 'referralCode',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isVerify: 'isVerify',
    ReferredById: 'ReferredById',
    city: 'city',
    dob: 'dob',
    houseNumber: 'houseNumber',
    lastName: 'lastName',
    state: 'state',
    street: 'street',
    zipCode: 'zipCode',
    regionNumber: 'regionNumber',
    phoneNumber: 'phoneNumber',
    avatar: 'avatar'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    organizerId: 'organizerId',
    title: 'title',
    totalIncome: 'totalIncome',
    category: 'category',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    attendees: 'attendees'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventSessionScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    date: 'date',
    time: 'time',
    location: 'location'
  };

  export type EventSessionScalarFieldEnum = (typeof EventSessionScalarFieldEnum)[keyof typeof EventSessionScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    eventId: 'eventId',
    price: 'price',
    category: 'category',
    seatAvailable: 'seatAvailable'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId',
    ticketId: 'ticketId',
    quantity: 'quantity',
    totalPrice: 'totalPrice',
    voucherId: 'voucherId',
    pointId: 'pointId',
    status: 'status',
    invoiceUrl: 'invoiceUrl',
    createdAt: 'createdAt',
    expireAt: 'expireAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const PurchasedTicketScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    ticketId: 'ticketId',
    sessionId: 'sessionId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type PurchasedTicketScalarFieldEnum = (typeof PurchasedTicketScalarFieldEnum)[keyof typeof PurchasedTicketScalarFieldEnum]


  export const PromotionScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    type: 'type',
    code: 'code',
    discountValue: 'discountValue',
    maxUsage: 'maxUsage',
    usageCount: 'usageCount',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type PromotionScalarFieldEnum = (typeof PromotionScalarFieldEnum)[keyof typeof PromotionScalarFieldEnum]


  export const PointScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    used: 'used'
  };

  export type PointScalarFieldEnum = (typeof PointScalarFieldEnum)[keyof typeof PointScalarFieldEnum]


  export const VoucherScalarFieldEnum: {
    id: 'id',
    voucherType: 'voucherType',
    userId: 'userId',
    discountPercent: 'discountPercent',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    used: 'used'
  };

  export type VoucherScalarFieldEnum = (typeof VoucherScalarFieldEnum)[keyof typeof VoucherScalarFieldEnum]


  export const ReferralUsageScalarFieldEnum: {
    id: 'id',
    referrerId: 'referrerId',
    referredId: 'referredId',
    voucherId: 'voucherId',
    createdAt: 'createdAt'
  };

  export type ReferralUsageScalarFieldEnum = (typeof ReferralUsageScalarFieldEnum)[keyof typeof ReferralUsageScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    purchasedTicketId: 'purchasedTicketId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'EventCategory'
   */
  export type EnumEventCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventCategory'>
    


  /**
   * Reference to a field of type 'EventCategory[]'
   */
  export type ListEnumEventCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EventCategory[]'>
    


  /**
   * Reference to a field of type 'TicketCategory'
   */
  export type EnumTicketCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketCategory'>
    


  /**
   * Reference to a field of type 'TicketCategory[]'
   */
  export type ListEnumTicketCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketCategory[]'>
    


  /**
   * Reference to a field of type 'statusTransaction'
   */
  export type EnumstatusTransactionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusTransaction'>
    


  /**
   * Reference to a field of type 'statusTransaction[]'
   */
  export type ListEnumstatusTransactionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusTransaction[]'>
    


  /**
   * Reference to a field of type 'PromotionType'
   */
  export type EnumPromotionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromotionType'>
    


  /**
   * Reference to a field of type 'PromotionType[]'
   */
  export type ListEnumPromotionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PromotionType[]'>
    


  /**
   * Reference to a field of type 'voucherType'
   */
  export type EnumvoucherTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'voucherType'>
    


  /**
   * Reference to a field of type 'voucherType[]'
   */
  export type ListEnumvoucherTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'voucherType[]'>
    


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
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    referralCode?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isVerify?: BoolFilter<"User"> | boolean
    ReferredById?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    dob?: StringNullableFilter<"User"> | string | null
    houseNumber?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    street?: StringNullableFilter<"User"> | string | null
    zipCode?: StringNullableFilter<"User"> | string | null
    regionNumber?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    events?: EventListRelationFilter
    points?: PointListRelationFilter
    referred?: ReferralUsageListRelationFilter
    referrer?: ReferralUsageListRelationFilter
    reviews?: ReviewListRelationFilter
    transactions?: TransactionListRelationFilter
    vouchers?: VoucherListRelationFilter
    purchased?: PurchasedTicketListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isVerify?: SortOrder
    ReferredById?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    houseNumber?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    regionNumber?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    events?: EventOrderByRelationAggregateInput
    points?: PointOrderByRelationAggregateInput
    referred?: ReferralUsageOrderByRelationAggregateInput
    referrer?: ReferralUsageOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
    vouchers?: VoucherOrderByRelationAggregateInput
    purchased?: PurchasedTicketOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    referralCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    isVerify?: BoolFilter<"User"> | boolean
    ReferredById?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    dob?: StringNullableFilter<"User"> | string | null
    houseNumber?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    street?: StringNullableFilter<"User"> | string | null
    zipCode?: StringNullableFilter<"User"> | string | null
    regionNumber?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    events?: EventListRelationFilter
    points?: PointListRelationFilter
    referred?: ReferralUsageListRelationFilter
    referrer?: ReferralUsageListRelationFilter
    reviews?: ReviewListRelationFilter
    transactions?: TransactionListRelationFilter
    vouchers?: VoucherListRelationFilter
    purchased?: PurchasedTicketListRelationFilter
  }, "id" | "email" | "referralCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isVerify?: SortOrder
    ReferredById?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    houseNumber?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    street?: SortOrderInput | SortOrder
    zipCode?: SortOrderInput | SortOrder
    regionNumber?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    referralCode?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    isVerify?: BoolWithAggregatesFilter<"User"> | boolean
    ReferredById?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    dob?: StringNullableWithAggregatesFilter<"User"> | string | null
    houseNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    state?: StringNullableWithAggregatesFilter<"User"> | string | null
    street?: StringNullableWithAggregatesFilter<"User"> | string | null
    zipCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    regionNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    organizerId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    totalIncome?: IntFilter<"Event"> | number
    category?: EnumEventCategoryFilter<"Event"> | $Enums.EventCategory
    image?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    attendees?: IntFilter<"Event"> | number
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    eventSessions?: EventSessionListRelationFilter
    promotions?: PromotionListRelationFilter
    reviews?: ReviewListRelationFilter
    tickets?: TicketListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    totalIncome?: SortOrder
    category?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendees?: SortOrder
    organizer?: UserOrderByWithRelationInput
    eventSessions?: EventSessionOrderByRelationAggregateInput
    promotions?: PromotionOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    transactions?: TransactionOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    organizerId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    totalIncome?: IntFilter<"Event"> | number
    category?: EnumEventCategoryFilter<"Event"> | $Enums.EventCategory
    image?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    attendees?: IntFilter<"Event"> | number
    organizer?: XOR<UserScalarRelationFilter, UserWhereInput>
    eventSessions?: EventSessionListRelationFilter
    promotions?: PromotionListRelationFilter
    reviews?: ReviewListRelationFilter
    tickets?: TicketListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    totalIncome?: SortOrder
    category?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendees?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    organizerId?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    totalIncome?: IntWithAggregatesFilter<"Event"> | number
    category?: EnumEventCategoryWithAggregatesFilter<"Event"> | $Enums.EventCategory
    image?: StringWithAggregatesFilter<"Event"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    attendees?: IntWithAggregatesFilter<"Event"> | number
  }

  export type EventSessionWhereInput = {
    AND?: EventSessionWhereInput | EventSessionWhereInput[]
    OR?: EventSessionWhereInput[]
    NOT?: EventSessionWhereInput | EventSessionWhereInput[]
    id?: StringFilter<"EventSession"> | string
    eventId?: StringFilter<"EventSession"> | string
    date?: StringFilter<"EventSession"> | string
    time?: StringFilter<"EventSession"> | string
    location?: StringFilter<"EventSession"> | string
    tickets?: TicketListRelationFilter
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    PurchasedTicket?: PurchasedTicketListRelationFilter
  }

  export type EventSessionOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
    event?: EventOrderByWithRelationInput
    PurchasedTicket?: PurchasedTicketOrderByRelationAggregateInput
  }

  export type EventSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventSessionWhereInput | EventSessionWhereInput[]
    OR?: EventSessionWhereInput[]
    NOT?: EventSessionWhereInput | EventSessionWhereInput[]
    eventId?: StringFilter<"EventSession"> | string
    date?: StringFilter<"EventSession"> | string
    time?: StringFilter<"EventSession"> | string
    location?: StringFilter<"EventSession"> | string
    tickets?: TicketListRelationFilter
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    PurchasedTicket?: PurchasedTicketListRelationFilter
  }, "id">

  export type EventSessionOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
    _count?: EventSessionCountOrderByAggregateInput
    _max?: EventSessionMaxOrderByAggregateInput
    _min?: EventSessionMinOrderByAggregateInput
  }

  export type EventSessionScalarWhereWithAggregatesInput = {
    AND?: EventSessionScalarWhereWithAggregatesInput | EventSessionScalarWhereWithAggregatesInput[]
    OR?: EventSessionScalarWhereWithAggregatesInput[]
    NOT?: EventSessionScalarWhereWithAggregatesInput | EventSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventSession"> | string
    eventId?: StringWithAggregatesFilter<"EventSession"> | string
    date?: StringWithAggregatesFilter<"EventSession"> | string
    time?: StringWithAggregatesFilter<"EventSession"> | string
    location?: StringWithAggregatesFilter<"EventSession"> | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    sessionId?: StringFilter<"Ticket"> | string
    eventId?: StringNullableFilter<"Ticket"> | string | null
    price?: IntFilter<"Ticket"> | number
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    seatAvailable?: IntFilter<"Ticket"> | number
    session?: XOR<EventSessionScalarRelationFilter, EventSessionWhereInput>
    transactions?: TransactionListRelationFilter
    purchased?: PurchasedTicketListRelationFilter
    Event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    eventId?: SortOrderInput | SortOrder
    price?: SortOrder
    category?: SortOrder
    seatAvailable?: SortOrder
    session?: EventSessionOrderByWithRelationInput
    transactions?: TransactionOrderByRelationAggregateInput
    purchased?: PurchasedTicketOrderByRelationAggregateInput
    Event?: EventOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    sessionId?: StringFilter<"Ticket"> | string
    eventId?: StringNullableFilter<"Ticket"> | string | null
    price?: IntFilter<"Ticket"> | number
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    seatAvailable?: IntFilter<"Ticket"> | number
    session?: XOR<EventSessionScalarRelationFilter, EventSessionWhereInput>
    transactions?: TransactionListRelationFilter
    purchased?: PurchasedTicketListRelationFilter
    Event?: XOR<EventNullableScalarRelationFilter, EventWhereInput> | null
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    eventId?: SortOrderInput | SortOrder
    price?: SortOrder
    category?: SortOrder
    seatAvailable?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    sessionId?: StringWithAggregatesFilter<"Ticket"> | string
    eventId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    price?: IntWithAggregatesFilter<"Ticket"> | number
    category?: EnumTicketCategoryWithAggregatesFilter<"Ticket"> | $Enums.TicketCategory
    seatAvailable?: IntWithAggregatesFilter<"Ticket"> | number
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    eventId?: StringFilter<"Transaction"> | string
    ticketId?: StringFilter<"Transaction"> | string
    quantity?: IntFilter<"Transaction"> | number
    totalPrice?: IntFilter<"Transaction"> | number
    voucherId?: StringNullableFilter<"Transaction"> | string | null
    pointId?: StringNullableFilter<"Transaction"> | string | null
    status?: EnumstatusTransactionFilter<"Transaction"> | $Enums.statusTransaction
    invoiceUrl?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    expireAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    voucher?: XOR<VoucherNullableScalarRelationFilter, VoucherWhereInput> | null
    point?: XOR<PointNullableScalarRelationFilter, PointWhereInput> | null
    purchased?: PurchasedTicketListRelationFilter
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    voucherId?: SortOrderInput | SortOrder
    pointId?: SortOrderInput | SortOrder
    status?: SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expireAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    event?: EventOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
    voucher?: VoucherOrderByWithRelationInput
    point?: PointOrderByWithRelationInput
    purchased?: PurchasedTicketOrderByRelationAggregateInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    eventId?: StringFilter<"Transaction"> | string
    ticketId?: StringFilter<"Transaction"> | string
    quantity?: IntFilter<"Transaction"> | number
    totalPrice?: IntFilter<"Transaction"> | number
    voucherId?: StringNullableFilter<"Transaction"> | string | null
    pointId?: StringNullableFilter<"Transaction"> | string | null
    status?: EnumstatusTransactionFilter<"Transaction"> | $Enums.statusTransaction
    invoiceUrl?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    expireAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    voucher?: XOR<VoucherNullableScalarRelationFilter, VoucherWhereInput> | null
    point?: XOR<PointNullableScalarRelationFilter, PointWhereInput> | null
    purchased?: PurchasedTicketListRelationFilter
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    voucherId?: SortOrderInput | SortOrder
    pointId?: SortOrderInput | SortOrder
    status?: SortOrder
    invoiceUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    expireAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    eventId?: StringWithAggregatesFilter<"Transaction"> | string
    ticketId?: StringWithAggregatesFilter<"Transaction"> | string
    quantity?: IntWithAggregatesFilter<"Transaction"> | number
    totalPrice?: IntWithAggregatesFilter<"Transaction"> | number
    voucherId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    pointId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    status?: EnumstatusTransactionWithAggregatesFilter<"Transaction"> | $Enums.statusTransaction
    invoiceUrl?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    expireAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type PurchasedTicketWhereInput = {
    AND?: PurchasedTicketWhereInput | PurchasedTicketWhereInput[]
    OR?: PurchasedTicketWhereInput[]
    NOT?: PurchasedTicketWhereInput | PurchasedTicketWhereInput[]
    id?: StringFilter<"PurchasedTicket"> | string
    transactionId?: StringFilter<"PurchasedTicket"> | string
    ticketId?: StringFilter<"PurchasedTicket"> | string
    sessionId?: StringFilter<"PurchasedTicket"> | string
    userId?: StringFilter<"PurchasedTicket"> | string
    createdAt?: DateTimeFilter<"PurchasedTicket"> | Date | string
    session?: XOR<EventSessionScalarRelationFilter, EventSessionWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Review?: ReviewListRelationFilter
  }

  export type PurchasedTicketOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    ticketId?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    session?: EventSessionOrderByWithRelationInput
    transaction?: TransactionOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    Review?: ReviewOrderByRelationAggregateInput
  }

  export type PurchasedTicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PurchasedTicketWhereInput | PurchasedTicketWhereInput[]
    OR?: PurchasedTicketWhereInput[]
    NOT?: PurchasedTicketWhereInput | PurchasedTicketWhereInput[]
    transactionId?: StringFilter<"PurchasedTicket"> | string
    ticketId?: StringFilter<"PurchasedTicket"> | string
    sessionId?: StringFilter<"PurchasedTicket"> | string
    userId?: StringFilter<"PurchasedTicket"> | string
    createdAt?: DateTimeFilter<"PurchasedTicket"> | Date | string
    session?: XOR<EventSessionScalarRelationFilter, EventSessionWhereInput>
    transaction?: XOR<TransactionScalarRelationFilter, TransactionWhereInput>
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Review?: ReviewListRelationFilter
  }, "id">

  export type PurchasedTicketOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    ticketId?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: PurchasedTicketCountOrderByAggregateInput
    _max?: PurchasedTicketMaxOrderByAggregateInput
    _min?: PurchasedTicketMinOrderByAggregateInput
  }

  export type PurchasedTicketScalarWhereWithAggregatesInput = {
    AND?: PurchasedTicketScalarWhereWithAggregatesInput | PurchasedTicketScalarWhereWithAggregatesInput[]
    OR?: PurchasedTicketScalarWhereWithAggregatesInput[]
    NOT?: PurchasedTicketScalarWhereWithAggregatesInput | PurchasedTicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PurchasedTicket"> | string
    transactionId?: StringWithAggregatesFilter<"PurchasedTicket"> | string
    ticketId?: StringWithAggregatesFilter<"PurchasedTicket"> | string
    sessionId?: StringWithAggregatesFilter<"PurchasedTicket"> | string
    userId?: StringWithAggregatesFilter<"PurchasedTicket"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PurchasedTicket"> | Date | string
  }

  export type PromotionWhereInput = {
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    id?: StringFilter<"Promotion"> | string
    eventId?: StringFilter<"Promotion"> | string
    type?: EnumPromotionTypeFilter<"Promotion"> | $Enums.PromotionType
    code?: StringFilter<"Promotion"> | string
    discountValue?: IntFilter<"Promotion"> | number
    maxUsage?: IntNullableFilter<"Promotion"> | number | null
    usageCount?: IntFilter<"Promotion"> | number
    expiresAt?: DateTimeFilter<"Promotion"> | Date | string
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type PromotionOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    maxUsage?: SortOrderInput | SortOrder
    usageCount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
  }

  export type PromotionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PromotionWhereInput | PromotionWhereInput[]
    OR?: PromotionWhereInput[]
    NOT?: PromotionWhereInput | PromotionWhereInput[]
    eventId?: StringFilter<"Promotion"> | string
    type?: EnumPromotionTypeFilter<"Promotion"> | $Enums.PromotionType
    discountValue?: IntFilter<"Promotion"> | number
    maxUsage?: IntNullableFilter<"Promotion"> | number | null
    usageCount?: IntFilter<"Promotion"> | number
    expiresAt?: DateTimeFilter<"Promotion"> | Date | string
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id" | "code">

  export type PromotionOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    maxUsage?: SortOrderInput | SortOrder
    usageCount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: PromotionCountOrderByAggregateInput
    _avg?: PromotionAvgOrderByAggregateInput
    _max?: PromotionMaxOrderByAggregateInput
    _min?: PromotionMinOrderByAggregateInput
    _sum?: PromotionSumOrderByAggregateInput
  }

  export type PromotionScalarWhereWithAggregatesInput = {
    AND?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    OR?: PromotionScalarWhereWithAggregatesInput[]
    NOT?: PromotionScalarWhereWithAggregatesInput | PromotionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Promotion"> | string
    eventId?: StringWithAggregatesFilter<"Promotion"> | string
    type?: EnumPromotionTypeWithAggregatesFilter<"Promotion"> | $Enums.PromotionType
    code?: StringWithAggregatesFilter<"Promotion"> | string
    discountValue?: IntWithAggregatesFilter<"Promotion"> | number
    maxUsage?: IntNullableWithAggregatesFilter<"Promotion"> | number | null
    usageCount?: IntWithAggregatesFilter<"Promotion"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Promotion"> | Date | string
  }

  export type PointWhereInput = {
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    id?: StringFilter<"Point"> | string
    userId?: StringFilter<"Point"> | string
    amount?: IntFilter<"Point"> | number
    expiresAt?: DateTimeFilter<"Point"> | Date | string
    createdAt?: DateTimeFilter<"Point"> | Date | string
    used?: BoolFilter<"Point"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Transaction?: TransactionListRelationFilter
  }

  export type PointOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
    user?: UserOrderByWithRelationInput
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type PointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    userId?: StringFilter<"Point"> | string
    amount?: IntFilter<"Point"> | number
    expiresAt?: DateTimeFilter<"Point"> | Date | string
    createdAt?: DateTimeFilter<"Point"> | Date | string
    used?: BoolFilter<"Point"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Transaction?: TransactionListRelationFilter
  }, "id">

  export type PointOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
    _count?: PointCountOrderByAggregateInput
    _avg?: PointAvgOrderByAggregateInput
    _max?: PointMaxOrderByAggregateInput
    _min?: PointMinOrderByAggregateInput
    _sum?: PointSumOrderByAggregateInput
  }

  export type PointScalarWhereWithAggregatesInput = {
    AND?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    OR?: PointScalarWhereWithAggregatesInput[]
    NOT?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Point"> | string
    userId?: StringWithAggregatesFilter<"Point"> | string
    amount?: IntWithAggregatesFilter<"Point"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"Point"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Point"> | Date | string
    used?: BoolWithAggregatesFilter<"Point"> | boolean
  }

  export type VoucherWhereInput = {
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    id?: StringFilter<"Voucher"> | string
    voucherType?: EnumvoucherTypeFilter<"Voucher"> | $Enums.voucherType
    userId?: StringFilter<"Voucher"> | string
    discountPercent?: IntFilter<"Voucher"> | number
    expiresAt?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    used?: BoolFilter<"Voucher"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ReferralUsage?: ReferralUsageListRelationFilter
    Transaction?: TransactionListRelationFilter
  }

  export type VoucherOrderByWithRelationInput = {
    id?: SortOrder
    voucherType?: SortOrder
    userId?: SortOrder
    discountPercent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
    user?: UserOrderByWithRelationInput
    ReferralUsage?: ReferralUsageOrderByRelationAggregateInput
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type VoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    voucherType?: EnumvoucherTypeFilter<"Voucher"> | $Enums.voucherType
    userId?: StringFilter<"Voucher"> | string
    discountPercent?: IntFilter<"Voucher"> | number
    expiresAt?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    used?: BoolFilter<"Voucher"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ReferralUsage?: ReferralUsageListRelationFilter
    Transaction?: TransactionListRelationFilter
  }, "id">

  export type VoucherOrderByWithAggregationInput = {
    id?: SortOrder
    voucherType?: SortOrder
    userId?: SortOrder
    discountPercent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
    _count?: VoucherCountOrderByAggregateInput
    _avg?: VoucherAvgOrderByAggregateInput
    _max?: VoucherMaxOrderByAggregateInput
    _min?: VoucherMinOrderByAggregateInput
    _sum?: VoucherSumOrderByAggregateInput
  }

  export type VoucherScalarWhereWithAggregatesInput = {
    AND?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    OR?: VoucherScalarWhereWithAggregatesInput[]
    NOT?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Voucher"> | string
    voucherType?: EnumvoucherTypeWithAggregatesFilter<"Voucher"> | $Enums.voucherType
    userId?: StringWithAggregatesFilter<"Voucher"> | string
    discountPercent?: IntWithAggregatesFilter<"Voucher"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
    used?: BoolWithAggregatesFilter<"Voucher"> | boolean
  }

  export type ReferralUsageWhereInput = {
    AND?: ReferralUsageWhereInput | ReferralUsageWhereInput[]
    OR?: ReferralUsageWhereInput[]
    NOT?: ReferralUsageWhereInput | ReferralUsageWhereInput[]
    id?: StringFilter<"ReferralUsage"> | string
    referrerId?: StringFilter<"ReferralUsage"> | string
    referredId?: StringFilter<"ReferralUsage"> | string
    voucherId?: StringNullableFilter<"ReferralUsage"> | string | null
    createdAt?: DateTimeFilter<"ReferralUsage"> | Date | string
    referred?: XOR<UserScalarRelationFilter, UserWhereInput>
    referrer?: XOR<UserScalarRelationFilter, UserWhereInput>
    voucher?: XOR<VoucherNullableScalarRelationFilter, VoucherWhereInput> | null
  }

  export type ReferralUsageOrderByWithRelationInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    voucherId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    referred?: UserOrderByWithRelationInput
    referrer?: UserOrderByWithRelationInput
    voucher?: VoucherOrderByWithRelationInput
  }

  export type ReferralUsageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReferralUsageWhereInput | ReferralUsageWhereInput[]
    OR?: ReferralUsageWhereInput[]
    NOT?: ReferralUsageWhereInput | ReferralUsageWhereInput[]
    referrerId?: StringFilter<"ReferralUsage"> | string
    referredId?: StringFilter<"ReferralUsage"> | string
    voucherId?: StringNullableFilter<"ReferralUsage"> | string | null
    createdAt?: DateTimeFilter<"ReferralUsage"> | Date | string
    referred?: XOR<UserScalarRelationFilter, UserWhereInput>
    referrer?: XOR<UserScalarRelationFilter, UserWhereInput>
    voucher?: XOR<VoucherNullableScalarRelationFilter, VoucherWhereInput> | null
  }, "id">

  export type ReferralUsageOrderByWithAggregationInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    voucherId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReferralUsageCountOrderByAggregateInput
    _max?: ReferralUsageMaxOrderByAggregateInput
    _min?: ReferralUsageMinOrderByAggregateInput
  }

  export type ReferralUsageScalarWhereWithAggregatesInput = {
    AND?: ReferralUsageScalarWhereWithAggregatesInput | ReferralUsageScalarWhereWithAggregatesInput[]
    OR?: ReferralUsageScalarWhereWithAggregatesInput[]
    NOT?: ReferralUsageScalarWhereWithAggregatesInput | ReferralUsageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReferralUsage"> | string
    referrerId?: StringWithAggregatesFilter<"ReferralUsage"> | string
    referredId?: StringWithAggregatesFilter<"ReferralUsage"> | string
    voucherId?: StringNullableWithAggregatesFilter<"ReferralUsage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReferralUsage"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    eventId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    purchasedTicketId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    purchasedTicket?: XOR<PurchasedTicketScalarRelationFilter, PurchasedTicketWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    purchasedTicketId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    purchasedTicket?: PurchasedTicketOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    eventId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    purchasedTicketId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    purchasedTicket?: XOR<PurchasedTicketScalarRelationFilter, PurchasedTicketWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    purchasedTicketId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    eventId?: StringWithAggregatesFilter<"Review"> | string
    userId?: StringWithAggregatesFilter<"Review"> | string
    purchasedTicketId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type ArtistWhereInput = {
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    id?: StringFilter<"Artist"> | string
    name?: StringFilter<"Artist"> | string
    image?: StringFilter<"Artist"> | string
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type ArtistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ArtistWhereInput | ArtistWhereInput[]
    OR?: ArtistWhereInput[]
    NOT?: ArtistWhereInput | ArtistWhereInput[]
    name?: StringFilter<"Artist"> | string
    image?: StringFilter<"Artist"> | string
  }, "id">

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    OR?: ArtistScalarWhereWithAggregatesInput[]
    NOT?: ArtistScalarWhereWithAggregatesInput | ArtistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artist"> | string
    name?: StringWithAggregatesFilter<"Artist"> | string
    image?: StringWithAggregatesFilter<"Artist"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventCreateNestedManyWithoutOrganizerInput
    points?: PointCreateNestedManyWithoutUserInput
    referred?: ReferralUsageCreateNestedManyWithoutReferredInput
    referrer?: ReferralUsageCreateNestedManyWithoutReferrerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    referred?: ReferralUsageUncheckedCreateNestedManyWithoutReferredInput
    referrer?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUpdateManyWithoutOrganizerNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    referred?: ReferralUsageUpdateManyWithoutReferredNestedInput
    referrer?: ReferralUsageUpdateManyWithoutReferrerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    referred?: ReferralUsageUncheckedUpdateManyWithoutReferredNestedInput
    referrer?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateInput = {
    id?: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
    organizer: UserCreateNestedOneWithoutEventsInput
    eventSessions?: EventSessionCreateNestedManyWithoutEventInput
    promotions?: PromotionCreateNestedManyWithoutEventInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    organizerId: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
    eventSessions?: EventSessionUncheckedCreateNestedManyWithoutEventInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutEventInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    eventSessions?: EventSessionUpdateManyWithoutEventNestedInput
    promotions?: PromotionUpdateManyWithoutEventNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
    eventSessions?: EventSessionUncheckedUpdateManyWithoutEventNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutEventNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    organizerId: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
  }

  export type EventSessionCreateInput = {
    id?: string
    date: string
    time: string
    location: string
    tickets?: TicketCreateNestedManyWithoutSessionInput
    event: EventCreateNestedOneWithoutEventSessionsInput
    PurchasedTicket?: PurchasedTicketCreateNestedManyWithoutSessionInput
  }

  export type EventSessionUncheckedCreateInput = {
    id?: string
    eventId: string
    date: string
    time: string
    location: string
    tickets?: TicketUncheckedCreateNestedManyWithoutSessionInput
    PurchasedTicket?: PurchasedTicketUncheckedCreateNestedManyWithoutSessionInput
  }

  export type EventSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutSessionNestedInput
    event?: EventUpdateOneRequiredWithoutEventSessionsNestedInput
    PurchasedTicket?: PurchasedTicketUpdateManyWithoutSessionNestedInput
  }

  export type EventSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutSessionNestedInput
    PurchasedTicket?: PurchasedTicketUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type EventSessionCreateManyInput = {
    id?: string
    eventId: string
    date: string
    time: string
    location: string
  }

  export type EventSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type EventSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateInput = {
    id?: string
    price: number
    category: $Enums.TicketCategory
    seatAvailable: number
    session: EventSessionCreateNestedOneWithoutTicketsInput
    transactions?: TransactionCreateNestedManyWithoutTicketInput
    purchased?: PurchasedTicketCreateNestedManyWithoutTicketInput
    Event?: EventCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    sessionId: string
    eventId?: string | null
    price: number
    category: $Enums.TicketCategory
    seatAvailable: number
    transactions?: TransactionUncheckedCreateNestedManyWithoutTicketInput
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    seatAvailable?: IntFieldUpdateOperationsInput | number
    session?: EventSessionUpdateOneRequiredWithoutTicketsNestedInput
    transactions?: TransactionUpdateManyWithoutTicketNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutTicketNestedInput
    Event?: EventUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    seatAvailable?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    sessionId: string
    eventId?: string | null
    price: number
    category: $Enums.TicketCategory
    seatAvailable: number
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    seatAvailable?: IntFieldUpdateOperationsInput | number
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    seatAvailable?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionCreateInput = {
    id?: string
    quantity: number
    totalPrice: number
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    event: EventCreateNestedOneWithoutTransactionsInput
    ticket: TicketCreateNestedOneWithoutTransactionsInput
    voucher?: VoucherCreateNestedOneWithoutTransactionInput
    point?: PointCreateNestedOneWithoutTransactionInput
    purchased?: PurchasedTicketCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    eventId: string
    ticketId: string
    quantity: number
    totalPrice: number
    voucherId?: string | null
    pointId?: string | null
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    ticket?: TicketUpdateOneRequiredWithoutTransactionsNestedInput
    voucher?: VoucherUpdateOneWithoutTransactionNestedInput
    point?: PointUpdateOneWithoutTransactionNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    eventId: string
    ticketId: string
    quantity: number
    totalPrice: number
    voucherId?: string | null
    pointId?: string | null
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedTicketCreateInput = {
    id?: string
    createdAt?: Date | string
    session: EventSessionCreateNestedOneWithoutPurchasedTicketInput
    transaction: TransactionCreateNestedOneWithoutPurchasedInput
    ticket: TicketCreateNestedOneWithoutPurchasedInput
    user: UserCreateNestedOneWithoutPurchasedInput
    Review?: ReviewCreateNestedManyWithoutPurchasedTicketInput
  }

  export type PurchasedTicketUncheckedCreateInput = {
    id?: string
    transactionId: string
    ticketId: string
    sessionId: string
    userId: string
    createdAt?: Date | string
    Review?: ReviewUncheckedCreateNestedManyWithoutPurchasedTicketInput
  }

  export type PurchasedTicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: EventSessionUpdateOneRequiredWithoutPurchasedTicketNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutPurchasedNestedInput
    ticket?: TicketUpdateOneRequiredWithoutPurchasedNestedInput
    user?: UserUpdateOneRequiredWithoutPurchasedNestedInput
    Review?: ReviewUpdateManyWithoutPurchasedTicketNestedInput
  }

  export type PurchasedTicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Review?: ReviewUncheckedUpdateManyWithoutPurchasedTicketNestedInput
  }

  export type PurchasedTicketCreateManyInput = {
    id?: string
    transactionId: string
    ticketId: string
    sessionId: string
    userId: string
    createdAt?: Date | string
  }

  export type PurchasedTicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedTicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateInput = {
    id?: string
    type: $Enums.PromotionType
    code: string
    discountValue: number
    maxUsage?: number | null
    usageCount?: number
    expiresAt: Date | string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutPromotionsInput
  }

  export type PromotionUncheckedCreateInput = {
    id?: string
    eventId: string
    type: $Enums.PromotionType
    code: string
    discountValue: number
    maxUsage?: number | null
    usageCount?: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PromotionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    maxUsage?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutPromotionsNestedInput
  }

  export type PromotionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    maxUsage?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionCreateManyInput = {
    id?: string
    eventId: string
    type: $Enums.PromotionType
    code: string
    discountValue: number
    maxUsage?: number | null
    usageCount?: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PromotionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    maxUsage?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    maxUsage?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointCreateInput = {
    id?: string
    amount: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
    user: UserCreateNestedOneWithoutPointsInput
    Transaction?: TransactionCreateNestedManyWithoutPointInput
  }

  export type PointUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
    Transaction?: TransactionUncheckedCreateNestedManyWithoutPointInput
  }

  export type PointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPointsNestedInput
    Transaction?: TransactionUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    Transaction?: TransactionUncheckedUpdateManyWithoutPointNestedInput
  }

  export type PointCreateManyInput = {
    id?: string
    userId: string
    amount: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
  }

  export type PointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoucherCreateInput = {
    id?: string
    voucherType?: $Enums.voucherType
    discountPercent: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
    user: UserCreateNestedOneWithoutVouchersInput
    ReferralUsage?: ReferralUsageCreateNestedManyWithoutVoucherInput
    Transaction?: TransactionCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUncheckedCreateInput = {
    id?: string
    voucherType?: $Enums.voucherType
    userId: string
    discountPercent: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
    ReferralUsage?: ReferralUsageUncheckedCreateNestedManyWithoutVoucherInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherType?: EnumvoucherTypeFieldUpdateOperationsInput | $Enums.voucherType
    discountPercent?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutVouchersNestedInput
    ReferralUsage?: ReferralUsageUpdateManyWithoutVoucherNestedInput
    Transaction?: TransactionUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherType?: EnumvoucherTypeFieldUpdateOperationsInput | $Enums.voucherType
    userId?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    ReferralUsage?: ReferralUsageUncheckedUpdateManyWithoutVoucherNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherCreateManyInput = {
    id?: string
    voucherType?: $Enums.voucherType
    userId: string
    discountPercent: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
  }

  export type VoucherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherType?: EnumvoucherTypeFieldUpdateOperationsInput | $Enums.voucherType
    discountPercent?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VoucherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherType?: EnumvoucherTypeFieldUpdateOperationsInput | $Enums.voucherType
    userId?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReferralUsageCreateInput = {
    id?: string
    createdAt?: Date | string
    referred: UserCreateNestedOneWithoutReferredInput
    referrer: UserCreateNestedOneWithoutReferrerInput
    voucher?: VoucherCreateNestedOneWithoutReferralUsageInput
  }

  export type ReferralUsageUncheckedCreateInput = {
    id?: string
    referrerId: string
    referredId: string
    voucherId?: string | null
    createdAt?: Date | string
  }

  export type ReferralUsageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referred?: UserUpdateOneRequiredWithoutReferredNestedInput
    referrer?: UserUpdateOneRequiredWithoutReferrerNestedInput
    voucher?: VoucherUpdateOneWithoutReferralUsageNestedInput
  }

  export type ReferralUsageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUsageCreateManyInput = {
    id?: string
    referrerId: string
    referredId: string
    voucherId?: string | null
    createdAt?: Date | string
  }

  export type ReferralUsageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUsageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
    purchasedTicket: PurchasedTicketCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    eventId: string
    userId: string
    purchasedTicketId: string
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    purchasedTicket?: PurchasedTicketUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purchasedTicketId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    eventId: string
    userId: string
    purchasedTicketId: string
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purchasedTicketId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistCreateInput = {
    id?: string
    name: string
    image: string
  }

  export type ArtistUncheckedCreateInput = {
    id?: string
    name: string
    image: string
  }

  export type ArtistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistCreateManyInput = {
    id?: string
    name: string
    image: string
  }

  export type ArtistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type PointListRelationFilter = {
    every?: PointWhereInput
    some?: PointWhereInput
    none?: PointWhereInput
  }

  export type ReferralUsageListRelationFilter = {
    every?: ReferralUsageWhereInput
    some?: ReferralUsageWhereInput
    none?: ReferralUsageWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type VoucherListRelationFilter = {
    every?: VoucherWhereInput
    some?: VoucherWhereInput
    none?: VoucherWhereInput
  }

  export type PurchasedTicketListRelationFilter = {
    every?: PurchasedTicketWhereInput
    some?: PurchasedTicketWhereInput
    none?: PurchasedTicketWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferralUsageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PurchasedTicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isVerify?: SortOrder
    ReferredById?: SortOrder
    city?: SortOrder
    dob?: SortOrder
    houseNumber?: SortOrder
    lastName?: SortOrder
    state?: SortOrder
    street?: SortOrder
    zipCode?: SortOrder
    regionNumber?: SortOrder
    phoneNumber?: SortOrder
    avatar?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isVerify?: SortOrder
    ReferredById?: SortOrder
    city?: SortOrder
    dob?: SortOrder
    houseNumber?: SortOrder
    lastName?: SortOrder
    state?: SortOrder
    street?: SortOrder
    zipCode?: SortOrder
    regionNumber?: SortOrder
    phoneNumber?: SortOrder
    avatar?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    referralCode?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isVerify?: SortOrder
    ReferredById?: SortOrder
    city?: SortOrder
    dob?: SortOrder
    houseNumber?: SortOrder
    lastName?: SortOrder
    state?: SortOrder
    street?: SortOrder
    zipCode?: SortOrder
    regionNumber?: SortOrder
    phoneNumber?: SortOrder
    avatar?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type EnumEventCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryFilter<$PrismaModel> | $Enums.EventCategory
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EventSessionListRelationFilter = {
    every?: EventSessionWhereInput
    some?: EventSessionWhereInput
    none?: EventSessionWhereInput
  }

  export type PromotionListRelationFilter = {
    every?: PromotionWhereInput
    some?: PromotionWhereInput
    none?: PromotionWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type EventSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PromotionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    totalIncome?: SortOrder
    category?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendees?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    totalIncome?: SortOrder
    attendees?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    totalIncome?: SortOrder
    category?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendees?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    organizerId?: SortOrder
    title?: SortOrder
    totalIncome?: SortOrder
    category?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    attendees?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    totalIncome?: SortOrder
    attendees?: SortOrder
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

  export type EnumEventCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel> | $Enums.EventCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventCategoryFilter<$PrismaModel>
    _max?: NestedEnumEventCategoryFilter<$PrismaModel>
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventSessionCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
  }

  export type EventSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
  }

  export type EventSessionMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    location?: SortOrder
  }

  export type EnumTicketCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryFilter<$PrismaModel> | $Enums.TicketCategory
  }

  export type EventSessionScalarRelationFilter = {
    is?: EventSessionWhereInput
    isNot?: EventSessionWhereInput
  }

  export type EventNullableScalarRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    eventId?: SortOrder
    price?: SortOrder
    category?: SortOrder
    seatAvailable?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    price?: SortOrder
    seatAvailable?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    eventId?: SortOrder
    price?: SortOrder
    category?: SortOrder
    seatAvailable?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    eventId?: SortOrder
    price?: SortOrder
    category?: SortOrder
    seatAvailable?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    price?: SortOrder
    seatAvailable?: SortOrder
  }

  export type EnumTicketCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TicketCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketCategoryFilter<$PrismaModel>
    _max?: NestedEnumTicketCategoryFilter<$PrismaModel>
  }

  export type EnumstatusTransactionFilter<$PrismaModel = never> = {
    equals?: $Enums.statusTransaction | EnumstatusTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.statusTransaction[] | ListEnumstatusTransactionFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusTransaction[] | ListEnumstatusTransactionFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusTransactionFilter<$PrismaModel> | $Enums.statusTransaction
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type VoucherNullableScalarRelationFilter = {
    is?: VoucherWhereInput | null
    isNot?: VoucherWhereInput | null
  }

  export type PointNullableScalarRelationFilter = {
    is?: PointWhereInput | null
    isNot?: PointWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    voucherId?: SortOrder
    pointId?: SortOrder
    status?: SortOrder
    invoiceUrl?: SortOrder
    createdAt?: SortOrder
    expireAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    voucherId?: SortOrder
    pointId?: SortOrder
    status?: SortOrder
    invoiceUrl?: SortOrder
    createdAt?: SortOrder
    expireAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    quantity?: SortOrder
    totalPrice?: SortOrder
    voucherId?: SortOrder
    pointId?: SortOrder
    status?: SortOrder
    invoiceUrl?: SortOrder
    createdAt?: SortOrder
    expireAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    quantity?: SortOrder
    totalPrice?: SortOrder
  }

  export type EnumstatusTransactionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusTransaction | EnumstatusTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.statusTransaction[] | ListEnumstatusTransactionFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusTransaction[] | ListEnumstatusTransactionFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusTransactionWithAggregatesFilter<$PrismaModel> | $Enums.statusTransaction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusTransactionFilter<$PrismaModel>
    _max?: NestedEnumstatusTransactionFilter<$PrismaModel>
  }

  export type TransactionScalarRelationFilter = {
    is?: TransactionWhereInput
    isNot?: TransactionWhereInput
  }

  export type PurchasedTicketCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    ticketId?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchasedTicketMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    ticketId?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchasedTicketMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    ticketId?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPromotionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeFilter<$PrismaModel> | $Enums.PromotionType
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

  export type PromotionCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    maxUsage?: SortOrder
    usageCount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PromotionAvgOrderByAggregateInput = {
    discountValue?: SortOrder
    maxUsage?: SortOrder
    usageCount?: SortOrder
  }

  export type PromotionMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    maxUsage?: SortOrder
    usageCount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PromotionMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    type?: SortOrder
    code?: SortOrder
    discountValue?: SortOrder
    maxUsage?: SortOrder
    usageCount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type PromotionSumOrderByAggregateInput = {
    discountValue?: SortOrder
    maxUsage?: SortOrder
    usageCount?: SortOrder
  }

  export type EnumPromotionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PromotionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromotionTypeFilter<$PrismaModel>
    _max?: NestedEnumPromotionTypeFilter<$PrismaModel>
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

  export type PointCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
  }

  export type PointAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PointMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
  }

  export type PointMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
  }

  export type PointSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumvoucherTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.voucherType | EnumvoucherTypeFieldRefInput<$PrismaModel>
    in?: $Enums.voucherType[] | ListEnumvoucherTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.voucherType[] | ListEnumvoucherTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumvoucherTypeFilter<$PrismaModel> | $Enums.voucherType
  }

  export type VoucherCountOrderByAggregateInput = {
    id?: SortOrder
    voucherType?: SortOrder
    userId?: SortOrder
    discountPercent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
  }

  export type VoucherAvgOrderByAggregateInput = {
    discountPercent?: SortOrder
  }

  export type VoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    voucherType?: SortOrder
    userId?: SortOrder
    discountPercent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
  }

  export type VoucherMinOrderByAggregateInput = {
    id?: SortOrder
    voucherType?: SortOrder
    userId?: SortOrder
    discountPercent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    used?: SortOrder
  }

  export type VoucherSumOrderByAggregateInput = {
    discountPercent?: SortOrder
  }

  export type EnumvoucherTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.voucherType | EnumvoucherTypeFieldRefInput<$PrismaModel>
    in?: $Enums.voucherType[] | ListEnumvoucherTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.voucherType[] | ListEnumvoucherTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumvoucherTypeWithAggregatesFilter<$PrismaModel> | $Enums.voucherType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvoucherTypeFilter<$PrismaModel>
    _max?: NestedEnumvoucherTypeFilter<$PrismaModel>
  }

  export type ReferralUsageCountOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    voucherId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralUsageMaxOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    voucherId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralUsageMinOrderByAggregateInput = {
    id?: SortOrder
    referrerId?: SortOrder
    referredId?: SortOrder
    voucherId?: SortOrder
    createdAt?: SortOrder
  }

  export type PurchasedTicketScalarRelationFilter = {
    is?: PurchasedTicketWhereInput
    isNot?: PurchasedTicketWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    purchasedTicketId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    purchasedTicketId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    purchasedTicketId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type EventCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type PointCreateNestedManyWithoutUserInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type ReferralUsageCreateNestedManyWithoutReferredInput = {
    create?: XOR<ReferralUsageCreateWithoutReferredInput, ReferralUsageUncheckedCreateWithoutReferredInput> | ReferralUsageCreateWithoutReferredInput[] | ReferralUsageUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferredInput | ReferralUsageCreateOrConnectWithoutReferredInput[]
    createMany?: ReferralUsageCreateManyReferredInputEnvelope
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
  }

  export type ReferralUsageCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralUsageCreateWithoutReferrerInput, ReferralUsageUncheckedCreateWithoutReferrerInput> | ReferralUsageCreateWithoutReferrerInput[] | ReferralUsageUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferrerInput | ReferralUsageCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralUsageCreateManyReferrerInputEnvelope
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type VoucherCreateNestedManyWithoutUserInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type PurchasedTicketCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchasedTicketCreateWithoutUserInput, PurchasedTicketUncheckedCreateWithoutUserInput> | PurchasedTicketCreateWithoutUserInput[] | PurchasedTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutUserInput | PurchasedTicketCreateOrConnectWithoutUserInput[]
    createMany?: PurchasedTicketCreateManyUserInputEnvelope
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutOrganizerInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type PointUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type ReferralUsageUncheckedCreateNestedManyWithoutReferredInput = {
    create?: XOR<ReferralUsageCreateWithoutReferredInput, ReferralUsageUncheckedCreateWithoutReferredInput> | ReferralUsageCreateWithoutReferredInput[] | ReferralUsageUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferredInput | ReferralUsageCreateOrConnectWithoutReferredInput[]
    createMany?: ReferralUsageCreateManyReferredInputEnvelope
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
  }

  export type ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput = {
    create?: XOR<ReferralUsageCreateWithoutReferrerInput, ReferralUsageUncheckedCreateWithoutReferrerInput> | ReferralUsageCreateWithoutReferrerInput[] | ReferralUsageUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferrerInput | ReferralUsageCreateOrConnectWithoutReferrerInput[]
    createMany?: ReferralUsageCreateManyReferrerInputEnvelope
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type VoucherUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type PurchasedTicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PurchasedTicketCreateWithoutUserInput, PurchasedTicketUncheckedCreateWithoutUserInput> | PurchasedTicketCreateWithoutUserInput[] | PurchasedTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutUserInput | PurchasedTicketCreateOrConnectWithoutUserInput[]
    createMany?: PurchasedTicketCreateManyUserInputEnvelope
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EventUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type PointUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutUserInput | PointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutUserInput | PointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointUpdateManyWithWhereWithoutUserInput | PointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type ReferralUsageUpdateManyWithoutReferredNestedInput = {
    create?: XOR<ReferralUsageCreateWithoutReferredInput, ReferralUsageUncheckedCreateWithoutReferredInput> | ReferralUsageCreateWithoutReferredInput[] | ReferralUsageUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferredInput | ReferralUsageCreateOrConnectWithoutReferredInput[]
    upsert?: ReferralUsageUpsertWithWhereUniqueWithoutReferredInput | ReferralUsageUpsertWithWhereUniqueWithoutReferredInput[]
    createMany?: ReferralUsageCreateManyReferredInputEnvelope
    set?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    disconnect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    delete?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    update?: ReferralUsageUpdateWithWhereUniqueWithoutReferredInput | ReferralUsageUpdateWithWhereUniqueWithoutReferredInput[]
    updateMany?: ReferralUsageUpdateManyWithWhereWithoutReferredInput | ReferralUsageUpdateManyWithWhereWithoutReferredInput[]
    deleteMany?: ReferralUsageScalarWhereInput | ReferralUsageScalarWhereInput[]
  }

  export type ReferralUsageUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralUsageCreateWithoutReferrerInput, ReferralUsageUncheckedCreateWithoutReferrerInput> | ReferralUsageCreateWithoutReferrerInput[] | ReferralUsageUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferrerInput | ReferralUsageCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralUsageUpsertWithWhereUniqueWithoutReferrerInput | ReferralUsageUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralUsageCreateManyReferrerInputEnvelope
    set?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    disconnect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    delete?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    update?: ReferralUsageUpdateWithWhereUniqueWithoutReferrerInput | ReferralUsageUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralUsageUpdateManyWithWhereWithoutReferrerInput | ReferralUsageUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralUsageScalarWhereInput | ReferralUsageScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type VoucherUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutUserInput | VoucherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutUserInput | VoucherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutUserInput | VoucherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type PurchasedTicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchasedTicketCreateWithoutUserInput, PurchasedTicketUncheckedCreateWithoutUserInput> | PurchasedTicketCreateWithoutUserInput[] | PurchasedTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutUserInput | PurchasedTicketCreateOrConnectWithoutUserInput[]
    upsert?: PurchasedTicketUpsertWithWhereUniqueWithoutUserInput | PurchasedTicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchasedTicketCreateManyUserInputEnvelope
    set?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    disconnect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    delete?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    update?: PurchasedTicketUpdateWithWhereUniqueWithoutUserInput | PurchasedTicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchasedTicketUpdateManyWithWhereWithoutUserInput | PurchasedTicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchasedTicketScalarWhereInput | PurchasedTicketScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutOrganizerNestedInput = {
    create?: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput> | EventCreateWithoutOrganizerInput[] | EventUncheckedCreateWithoutOrganizerInput[]
    connectOrCreate?: EventCreateOrConnectWithoutOrganizerInput | EventCreateOrConnectWithoutOrganizerInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutOrganizerInput | EventUpsertWithWhereUniqueWithoutOrganizerInput[]
    createMany?: EventCreateManyOrganizerInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutOrganizerInput | EventUpdateWithWhereUniqueWithoutOrganizerInput[]
    updateMany?: EventUpdateManyWithWhereWithoutOrganizerInput | EventUpdateManyWithWhereWithoutOrganizerInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type PointUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutUserInput | PointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutUserInput | PointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointUpdateManyWithWhereWithoutUserInput | PointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type ReferralUsageUncheckedUpdateManyWithoutReferredNestedInput = {
    create?: XOR<ReferralUsageCreateWithoutReferredInput, ReferralUsageUncheckedCreateWithoutReferredInput> | ReferralUsageCreateWithoutReferredInput[] | ReferralUsageUncheckedCreateWithoutReferredInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferredInput | ReferralUsageCreateOrConnectWithoutReferredInput[]
    upsert?: ReferralUsageUpsertWithWhereUniqueWithoutReferredInput | ReferralUsageUpsertWithWhereUniqueWithoutReferredInput[]
    createMany?: ReferralUsageCreateManyReferredInputEnvelope
    set?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    disconnect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    delete?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    update?: ReferralUsageUpdateWithWhereUniqueWithoutReferredInput | ReferralUsageUpdateWithWhereUniqueWithoutReferredInput[]
    updateMany?: ReferralUsageUpdateManyWithWhereWithoutReferredInput | ReferralUsageUpdateManyWithWhereWithoutReferredInput[]
    deleteMany?: ReferralUsageScalarWhereInput | ReferralUsageScalarWhereInput[]
  }

  export type ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput = {
    create?: XOR<ReferralUsageCreateWithoutReferrerInput, ReferralUsageUncheckedCreateWithoutReferrerInput> | ReferralUsageCreateWithoutReferrerInput[] | ReferralUsageUncheckedCreateWithoutReferrerInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutReferrerInput | ReferralUsageCreateOrConnectWithoutReferrerInput[]
    upsert?: ReferralUsageUpsertWithWhereUniqueWithoutReferrerInput | ReferralUsageUpsertWithWhereUniqueWithoutReferrerInput[]
    createMany?: ReferralUsageCreateManyReferrerInputEnvelope
    set?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    disconnect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    delete?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    update?: ReferralUsageUpdateWithWhereUniqueWithoutReferrerInput | ReferralUsageUpdateWithWhereUniqueWithoutReferrerInput[]
    updateMany?: ReferralUsageUpdateManyWithWhereWithoutReferrerInput | ReferralUsageUpdateManyWithWhereWithoutReferrerInput[]
    deleteMany?: ReferralUsageScalarWhereInput | ReferralUsageScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type VoucherUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput> | VoucherCreateWithoutUserInput[] | VoucherUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutUserInput | VoucherCreateOrConnectWithoutUserInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutUserInput | VoucherUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VoucherCreateManyUserInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutUserInput | VoucherUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutUserInput | VoucherUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type PurchasedTicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PurchasedTicketCreateWithoutUserInput, PurchasedTicketUncheckedCreateWithoutUserInput> | PurchasedTicketCreateWithoutUserInput[] | PurchasedTicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutUserInput | PurchasedTicketCreateOrConnectWithoutUserInput[]
    upsert?: PurchasedTicketUpsertWithWhereUniqueWithoutUserInput | PurchasedTicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PurchasedTicketCreateManyUserInputEnvelope
    set?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    disconnect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    delete?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    update?: PurchasedTicketUpdateWithWhereUniqueWithoutUserInput | PurchasedTicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PurchasedTicketUpdateManyWithWhereWithoutUserInput | PurchasedTicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PurchasedTicketScalarWhereInput | PurchasedTicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEventsInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    connect?: UserWhereUniqueInput
  }

  export type EventSessionCreateNestedManyWithoutEventInput = {
    create?: XOR<EventSessionCreateWithoutEventInput, EventSessionUncheckedCreateWithoutEventInput> | EventSessionCreateWithoutEventInput[] | EventSessionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSessionCreateOrConnectWithoutEventInput | EventSessionCreateOrConnectWithoutEventInput[]
    createMany?: EventSessionCreateManyEventInputEnvelope
    connect?: EventSessionWhereUniqueInput | EventSessionWhereUniqueInput[]
  }

  export type PromotionCreateNestedManyWithoutEventInput = {
    create?: XOR<PromotionCreateWithoutEventInput, PromotionUncheckedCreateWithoutEventInput> | PromotionCreateWithoutEventInput[] | PromotionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutEventInput | PromotionCreateOrConnectWithoutEventInput[]
    createMany?: PromotionCreateManyEventInputEnvelope
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutEventInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EventSessionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventSessionCreateWithoutEventInput, EventSessionUncheckedCreateWithoutEventInput> | EventSessionCreateWithoutEventInput[] | EventSessionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSessionCreateOrConnectWithoutEventInput | EventSessionCreateOrConnectWithoutEventInput[]
    createMany?: EventSessionCreateManyEventInputEnvelope
    connect?: EventSessionWhereUniqueInput | EventSessionWhereUniqueInput[]
  }

  export type PromotionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<PromotionCreateWithoutEventInput, PromotionUncheckedCreateWithoutEventInput> | PromotionCreateWithoutEventInput[] | PromotionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutEventInput | PromotionCreateOrConnectWithoutEventInput[]
    createMany?: PromotionCreateManyEventInputEnvelope
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumEventCategoryFieldUpdateOperationsInput = {
    set?: $Enums.EventCategory
  }

  export type UserUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventsInput
    upsert?: UserUpsertWithoutEventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventsInput, UserUpdateWithoutEventsInput>, UserUncheckedUpdateWithoutEventsInput>
  }

  export type EventSessionUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventSessionCreateWithoutEventInput, EventSessionUncheckedCreateWithoutEventInput> | EventSessionCreateWithoutEventInput[] | EventSessionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSessionCreateOrConnectWithoutEventInput | EventSessionCreateOrConnectWithoutEventInput[]
    upsert?: EventSessionUpsertWithWhereUniqueWithoutEventInput | EventSessionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventSessionCreateManyEventInputEnvelope
    set?: EventSessionWhereUniqueInput | EventSessionWhereUniqueInput[]
    disconnect?: EventSessionWhereUniqueInput | EventSessionWhereUniqueInput[]
    delete?: EventSessionWhereUniqueInput | EventSessionWhereUniqueInput[]
    connect?: EventSessionWhereUniqueInput | EventSessionWhereUniqueInput[]
    update?: EventSessionUpdateWithWhereUniqueWithoutEventInput | EventSessionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventSessionUpdateManyWithWhereWithoutEventInput | EventSessionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventSessionScalarWhereInput | EventSessionScalarWhereInput[]
  }

  export type PromotionUpdateManyWithoutEventNestedInput = {
    create?: XOR<PromotionCreateWithoutEventInput, PromotionUncheckedCreateWithoutEventInput> | PromotionCreateWithoutEventInput[] | PromotionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutEventInput | PromotionCreateOrConnectWithoutEventInput[]
    upsert?: PromotionUpsertWithWhereUniqueWithoutEventInput | PromotionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PromotionCreateManyEventInputEnvelope
    set?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    disconnect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    delete?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    update?: PromotionUpdateWithWhereUniqueWithoutEventInput | PromotionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PromotionUpdateManyWithWhereWithoutEventInput | PromotionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutEventNestedInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutEventInput | TransactionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutEventInput | TransactionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutEventInput | TransactionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type EventSessionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventSessionCreateWithoutEventInput, EventSessionUncheckedCreateWithoutEventInput> | EventSessionCreateWithoutEventInput[] | EventSessionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventSessionCreateOrConnectWithoutEventInput | EventSessionCreateOrConnectWithoutEventInput[]
    upsert?: EventSessionUpsertWithWhereUniqueWithoutEventInput | EventSessionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventSessionCreateManyEventInputEnvelope
    set?: EventSessionWhereUniqueInput | EventSessionWhereUniqueInput[]
    disconnect?: EventSessionWhereUniqueInput | EventSessionWhereUniqueInput[]
    delete?: EventSessionWhereUniqueInput | EventSessionWhereUniqueInput[]
    connect?: EventSessionWhereUniqueInput | EventSessionWhereUniqueInput[]
    update?: EventSessionUpdateWithWhereUniqueWithoutEventInput | EventSessionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventSessionUpdateManyWithWhereWithoutEventInput | EventSessionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventSessionScalarWhereInput | EventSessionScalarWhereInput[]
  }

  export type PromotionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<PromotionCreateWithoutEventInput, PromotionUncheckedCreateWithoutEventInput> | PromotionCreateWithoutEventInput[] | PromotionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: PromotionCreateOrConnectWithoutEventInput | PromotionCreateOrConnectWithoutEventInput[]
    upsert?: PromotionUpsertWithWhereUniqueWithoutEventInput | PromotionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: PromotionCreateManyEventInputEnvelope
    set?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    disconnect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    delete?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    connect?: PromotionWhereUniqueInput | PromotionWhereUniqueInput[]
    update?: PromotionUpdateWithWhereUniqueWithoutEventInput | PromotionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: PromotionUpdateManyWithWhereWithoutEventInput | PromotionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutEventInput | TransactionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutEventInput | TransactionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutEventInput | TransactionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutSessionInput = {
    create?: XOR<TicketCreateWithoutSessionInput, TicketUncheckedCreateWithoutSessionInput> | TicketCreateWithoutSessionInput[] | TicketUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSessionInput | TicketCreateOrConnectWithoutSessionInput[]
    createMany?: TicketCreateManySessionInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EventCreateNestedOneWithoutEventSessionsInput = {
    create?: XOR<EventCreateWithoutEventSessionsInput, EventUncheckedCreateWithoutEventSessionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventSessionsInput
    connect?: EventWhereUniqueInput
  }

  export type PurchasedTicketCreateNestedManyWithoutSessionInput = {
    create?: XOR<PurchasedTicketCreateWithoutSessionInput, PurchasedTicketUncheckedCreateWithoutSessionInput> | PurchasedTicketCreateWithoutSessionInput[] | PurchasedTicketUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutSessionInput | PurchasedTicketCreateOrConnectWithoutSessionInput[]
    createMany?: PurchasedTicketCreateManySessionInputEnvelope
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<TicketCreateWithoutSessionInput, TicketUncheckedCreateWithoutSessionInput> | TicketCreateWithoutSessionInput[] | TicketUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSessionInput | TicketCreateOrConnectWithoutSessionInput[]
    createMany?: TicketCreateManySessionInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type PurchasedTicketUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<PurchasedTicketCreateWithoutSessionInput, PurchasedTicketUncheckedCreateWithoutSessionInput> | PurchasedTicketCreateWithoutSessionInput[] | PurchasedTicketUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutSessionInput | PurchasedTicketCreateOrConnectWithoutSessionInput[]
    createMany?: PurchasedTicketCreateManySessionInputEnvelope
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TicketCreateWithoutSessionInput, TicketUncheckedCreateWithoutSessionInput> | TicketCreateWithoutSessionInput[] | TicketUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSessionInput | TicketCreateOrConnectWithoutSessionInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSessionInput | TicketUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TicketCreateManySessionInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSessionInput | TicketUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSessionInput | TicketUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type EventUpdateOneRequiredWithoutEventSessionsNestedInput = {
    create?: XOR<EventCreateWithoutEventSessionsInput, EventUncheckedCreateWithoutEventSessionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventSessionsInput
    upsert?: EventUpsertWithoutEventSessionsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventSessionsInput, EventUpdateWithoutEventSessionsInput>, EventUncheckedUpdateWithoutEventSessionsInput>
  }

  export type PurchasedTicketUpdateManyWithoutSessionNestedInput = {
    create?: XOR<PurchasedTicketCreateWithoutSessionInput, PurchasedTicketUncheckedCreateWithoutSessionInput> | PurchasedTicketCreateWithoutSessionInput[] | PurchasedTicketUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutSessionInput | PurchasedTicketCreateOrConnectWithoutSessionInput[]
    upsert?: PurchasedTicketUpsertWithWhereUniqueWithoutSessionInput | PurchasedTicketUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: PurchasedTicketCreateManySessionInputEnvelope
    set?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    disconnect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    delete?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    update?: PurchasedTicketUpdateWithWhereUniqueWithoutSessionInput | PurchasedTicketUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: PurchasedTicketUpdateManyWithWhereWithoutSessionInput | PurchasedTicketUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: PurchasedTicketScalarWhereInput | PurchasedTicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TicketCreateWithoutSessionInput, TicketUncheckedCreateWithoutSessionInput> | TicketCreateWithoutSessionInput[] | TicketUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutSessionInput | TicketCreateOrConnectWithoutSessionInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutSessionInput | TicketUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TicketCreateManySessionInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutSessionInput | TicketUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutSessionInput | TicketUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type PurchasedTicketUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<PurchasedTicketCreateWithoutSessionInput, PurchasedTicketUncheckedCreateWithoutSessionInput> | PurchasedTicketCreateWithoutSessionInput[] | PurchasedTicketUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutSessionInput | PurchasedTicketCreateOrConnectWithoutSessionInput[]
    upsert?: PurchasedTicketUpsertWithWhereUniqueWithoutSessionInput | PurchasedTicketUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: PurchasedTicketCreateManySessionInputEnvelope
    set?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    disconnect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    delete?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    update?: PurchasedTicketUpdateWithWhereUniqueWithoutSessionInput | PurchasedTicketUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: PurchasedTicketUpdateManyWithWhereWithoutSessionInput | PurchasedTicketUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: PurchasedTicketScalarWhereInput | PurchasedTicketScalarWhereInput[]
  }

  export type EventSessionCreateNestedOneWithoutTicketsInput = {
    create?: XOR<EventSessionCreateWithoutTicketsInput, EventSessionUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventSessionCreateOrConnectWithoutTicketsInput
    connect?: EventSessionWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutTicketInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PurchasedTicketCreateNestedManyWithoutTicketInput = {
    create?: XOR<PurchasedTicketCreateWithoutTicketInput, PurchasedTicketUncheckedCreateWithoutTicketInput> | PurchasedTicketCreateWithoutTicketInput[] | PurchasedTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutTicketInput | PurchasedTicketCreateOrConnectWithoutTicketInput[]
    createMany?: PurchasedTicketCreateManyTicketInputEnvelope
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
  }

  export type EventCreateNestedOneWithoutTicketsInput = {
    create?: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketsInput
    connect?: EventWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type PurchasedTicketUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<PurchasedTicketCreateWithoutTicketInput, PurchasedTicketUncheckedCreateWithoutTicketInput> | PurchasedTicketCreateWithoutTicketInput[] | PurchasedTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutTicketInput | PurchasedTicketCreateOrConnectWithoutTicketInput[]
    createMany?: PurchasedTicketCreateManyTicketInputEnvelope
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
  }

  export type EnumTicketCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TicketCategory
  }

  export type EventSessionUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<EventSessionCreateWithoutTicketsInput, EventSessionUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventSessionCreateOrConnectWithoutTicketsInput
    upsert?: EventSessionUpsertWithoutTicketsInput
    connect?: EventSessionWhereUniqueInput
    update?: XOR<XOR<EventSessionUpdateToOneWithWhereWithoutTicketsInput, EventSessionUpdateWithoutTicketsInput>, EventSessionUncheckedUpdateWithoutTicketsInput>
  }

  export type TransactionUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTicketInput | TransactionUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTicketInput | TransactionUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTicketInput | TransactionUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PurchasedTicketUpdateManyWithoutTicketNestedInput = {
    create?: XOR<PurchasedTicketCreateWithoutTicketInput, PurchasedTicketUncheckedCreateWithoutTicketInput> | PurchasedTicketCreateWithoutTicketInput[] | PurchasedTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutTicketInput | PurchasedTicketCreateOrConnectWithoutTicketInput[]
    upsert?: PurchasedTicketUpsertWithWhereUniqueWithoutTicketInput | PurchasedTicketUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: PurchasedTicketCreateManyTicketInputEnvelope
    set?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    disconnect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    delete?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    update?: PurchasedTicketUpdateWithWhereUniqueWithoutTicketInput | PurchasedTicketUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: PurchasedTicketUpdateManyWithWhereWithoutTicketInput | PurchasedTicketUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: PurchasedTicketScalarWhereInput | PurchasedTicketScalarWhereInput[]
  }

  export type EventUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketsInput
    upsert?: EventUpsertWithoutTicketsInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketsInput, EventUpdateWithoutTicketsInput>, EventUncheckedUpdateWithoutTicketsInput>
  }

  export type TransactionUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTicketInput | TransactionUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTicketInput | TransactionUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTicketInput | TransactionUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type PurchasedTicketUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<PurchasedTicketCreateWithoutTicketInput, PurchasedTicketUncheckedCreateWithoutTicketInput> | PurchasedTicketCreateWithoutTicketInput[] | PurchasedTicketUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutTicketInput | PurchasedTicketCreateOrConnectWithoutTicketInput[]
    upsert?: PurchasedTicketUpsertWithWhereUniqueWithoutTicketInput | PurchasedTicketUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: PurchasedTicketCreateManyTicketInputEnvelope
    set?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    disconnect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    delete?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    update?: PurchasedTicketUpdateWithWhereUniqueWithoutTicketInput | PurchasedTicketUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: PurchasedTicketUpdateManyWithWhereWithoutTicketInput | PurchasedTicketUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: PurchasedTicketScalarWhereInput | PurchasedTicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTransactionsInput
    connect?: EventWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<TicketCreateWithoutTransactionsInput, TicketUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTransactionsInput
    connect?: TicketWhereUniqueInput
  }

  export type VoucherCreateNestedOneWithoutTransactionInput = {
    create?: XOR<VoucherCreateWithoutTransactionInput, VoucherUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutTransactionInput
    connect?: VoucherWhereUniqueInput
  }

  export type PointCreateNestedOneWithoutTransactionInput = {
    create?: XOR<PointCreateWithoutTransactionInput, PointUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: PointCreateOrConnectWithoutTransactionInput
    connect?: PointWhereUniqueInput
  }

  export type PurchasedTicketCreateNestedManyWithoutTransactionInput = {
    create?: XOR<PurchasedTicketCreateWithoutTransactionInput, PurchasedTicketUncheckedCreateWithoutTransactionInput> | PurchasedTicketCreateWithoutTransactionInput[] | PurchasedTicketUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutTransactionInput | PurchasedTicketCreateOrConnectWithoutTransactionInput[]
    createMany?: PurchasedTicketCreateManyTransactionInputEnvelope
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
  }

  export type PurchasedTicketUncheckedCreateNestedManyWithoutTransactionInput = {
    create?: XOR<PurchasedTicketCreateWithoutTransactionInput, PurchasedTicketUncheckedCreateWithoutTransactionInput> | PurchasedTicketCreateWithoutTransactionInput[] | PurchasedTicketUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutTransactionInput | PurchasedTicketCreateOrConnectWithoutTransactionInput[]
    createMany?: PurchasedTicketCreateManyTransactionInputEnvelope
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
  }

  export type EnumstatusTransactionFieldUpdateOperationsInput = {
    set?: $Enums.statusTransaction
  }

  export type UserUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsInput
    upsert?: UserUpsertWithoutTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsInput, UserUpdateWithoutTransactionsInput>, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type EventUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutTransactionsInput
    upsert?: EventUpsertWithoutTransactionsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTransactionsInput, EventUpdateWithoutTransactionsInput>, EventUncheckedUpdateWithoutTransactionsInput>
  }

  export type TicketUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<TicketCreateWithoutTransactionsInput, TicketUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTransactionsInput
    upsert?: TicketUpsertWithoutTransactionsInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutTransactionsInput, TicketUpdateWithoutTransactionsInput>, TicketUncheckedUpdateWithoutTransactionsInput>
  }

  export type VoucherUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<VoucherCreateWithoutTransactionInput, VoucherUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutTransactionInput
    upsert?: VoucherUpsertWithoutTransactionInput
    disconnect?: VoucherWhereInput | boolean
    delete?: VoucherWhereInput | boolean
    connect?: VoucherWhereUniqueInput
    update?: XOR<XOR<VoucherUpdateToOneWithWhereWithoutTransactionInput, VoucherUpdateWithoutTransactionInput>, VoucherUncheckedUpdateWithoutTransactionInput>
  }

  export type PointUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<PointCreateWithoutTransactionInput, PointUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: PointCreateOrConnectWithoutTransactionInput
    upsert?: PointUpsertWithoutTransactionInput
    disconnect?: PointWhereInput | boolean
    delete?: PointWhereInput | boolean
    connect?: PointWhereUniqueInput
    update?: XOR<XOR<PointUpdateToOneWithWhereWithoutTransactionInput, PointUpdateWithoutTransactionInput>, PointUncheckedUpdateWithoutTransactionInput>
  }

  export type PurchasedTicketUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<PurchasedTicketCreateWithoutTransactionInput, PurchasedTicketUncheckedCreateWithoutTransactionInput> | PurchasedTicketCreateWithoutTransactionInput[] | PurchasedTicketUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutTransactionInput | PurchasedTicketCreateOrConnectWithoutTransactionInput[]
    upsert?: PurchasedTicketUpsertWithWhereUniqueWithoutTransactionInput | PurchasedTicketUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: PurchasedTicketCreateManyTransactionInputEnvelope
    set?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    disconnect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    delete?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    update?: PurchasedTicketUpdateWithWhereUniqueWithoutTransactionInput | PurchasedTicketUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: PurchasedTicketUpdateManyWithWhereWithoutTransactionInput | PurchasedTicketUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: PurchasedTicketScalarWhereInput | PurchasedTicketScalarWhereInput[]
  }

  export type PurchasedTicketUncheckedUpdateManyWithoutTransactionNestedInput = {
    create?: XOR<PurchasedTicketCreateWithoutTransactionInput, PurchasedTicketUncheckedCreateWithoutTransactionInput> | PurchasedTicketCreateWithoutTransactionInput[] | PurchasedTicketUncheckedCreateWithoutTransactionInput[]
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutTransactionInput | PurchasedTicketCreateOrConnectWithoutTransactionInput[]
    upsert?: PurchasedTicketUpsertWithWhereUniqueWithoutTransactionInput | PurchasedTicketUpsertWithWhereUniqueWithoutTransactionInput[]
    createMany?: PurchasedTicketCreateManyTransactionInputEnvelope
    set?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    disconnect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    delete?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    connect?: PurchasedTicketWhereUniqueInput | PurchasedTicketWhereUniqueInput[]
    update?: PurchasedTicketUpdateWithWhereUniqueWithoutTransactionInput | PurchasedTicketUpdateWithWhereUniqueWithoutTransactionInput[]
    updateMany?: PurchasedTicketUpdateManyWithWhereWithoutTransactionInput | PurchasedTicketUpdateManyWithWhereWithoutTransactionInput[]
    deleteMany?: PurchasedTicketScalarWhereInput | PurchasedTicketScalarWhereInput[]
  }

  export type EventSessionCreateNestedOneWithoutPurchasedTicketInput = {
    create?: XOR<EventSessionCreateWithoutPurchasedTicketInput, EventSessionUncheckedCreateWithoutPurchasedTicketInput>
    connectOrCreate?: EventSessionCreateOrConnectWithoutPurchasedTicketInput
    connect?: EventSessionWhereUniqueInput
  }

  export type TransactionCreateNestedOneWithoutPurchasedInput = {
    create?: XOR<TransactionCreateWithoutPurchasedInput, TransactionUncheckedCreateWithoutPurchasedInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutPurchasedInput
    connect?: TransactionWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutPurchasedInput = {
    create?: XOR<TicketCreateWithoutPurchasedInput, TicketUncheckedCreateWithoutPurchasedInput>
    connectOrCreate?: TicketCreateOrConnectWithoutPurchasedInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPurchasedInput = {
    create?: XOR<UserCreateWithoutPurchasedInput, UserUncheckedCreateWithoutPurchasedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasedInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutPurchasedTicketInput = {
    create?: XOR<ReviewCreateWithoutPurchasedTicketInput, ReviewUncheckedCreateWithoutPurchasedTicketInput> | ReviewCreateWithoutPurchasedTicketInput[] | ReviewUncheckedCreateWithoutPurchasedTicketInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPurchasedTicketInput | ReviewCreateOrConnectWithoutPurchasedTicketInput[]
    createMany?: ReviewCreateManyPurchasedTicketInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutPurchasedTicketInput = {
    create?: XOR<ReviewCreateWithoutPurchasedTicketInput, ReviewUncheckedCreateWithoutPurchasedTicketInput> | ReviewCreateWithoutPurchasedTicketInput[] | ReviewUncheckedCreateWithoutPurchasedTicketInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPurchasedTicketInput | ReviewCreateOrConnectWithoutPurchasedTicketInput[]
    createMany?: ReviewCreateManyPurchasedTicketInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EventSessionUpdateOneRequiredWithoutPurchasedTicketNestedInput = {
    create?: XOR<EventSessionCreateWithoutPurchasedTicketInput, EventSessionUncheckedCreateWithoutPurchasedTicketInput>
    connectOrCreate?: EventSessionCreateOrConnectWithoutPurchasedTicketInput
    upsert?: EventSessionUpsertWithoutPurchasedTicketInput
    connect?: EventSessionWhereUniqueInput
    update?: XOR<XOR<EventSessionUpdateToOneWithWhereWithoutPurchasedTicketInput, EventSessionUpdateWithoutPurchasedTicketInput>, EventSessionUncheckedUpdateWithoutPurchasedTicketInput>
  }

  export type TransactionUpdateOneRequiredWithoutPurchasedNestedInput = {
    create?: XOR<TransactionCreateWithoutPurchasedInput, TransactionUncheckedCreateWithoutPurchasedInput>
    connectOrCreate?: TransactionCreateOrConnectWithoutPurchasedInput
    upsert?: TransactionUpsertWithoutPurchasedInput
    connect?: TransactionWhereUniqueInput
    update?: XOR<XOR<TransactionUpdateToOneWithWhereWithoutPurchasedInput, TransactionUpdateWithoutPurchasedInput>, TransactionUncheckedUpdateWithoutPurchasedInput>
  }

  export type TicketUpdateOneRequiredWithoutPurchasedNestedInput = {
    create?: XOR<TicketCreateWithoutPurchasedInput, TicketUncheckedCreateWithoutPurchasedInput>
    connectOrCreate?: TicketCreateOrConnectWithoutPurchasedInput
    upsert?: TicketUpsertWithoutPurchasedInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutPurchasedInput, TicketUpdateWithoutPurchasedInput>, TicketUncheckedUpdateWithoutPurchasedInput>
  }

  export type UserUpdateOneRequiredWithoutPurchasedNestedInput = {
    create?: XOR<UserCreateWithoutPurchasedInput, UserUncheckedCreateWithoutPurchasedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPurchasedInput
    upsert?: UserUpsertWithoutPurchasedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPurchasedInput, UserUpdateWithoutPurchasedInput>, UserUncheckedUpdateWithoutPurchasedInput>
  }

  export type ReviewUpdateManyWithoutPurchasedTicketNestedInput = {
    create?: XOR<ReviewCreateWithoutPurchasedTicketInput, ReviewUncheckedCreateWithoutPurchasedTicketInput> | ReviewCreateWithoutPurchasedTicketInput[] | ReviewUncheckedCreateWithoutPurchasedTicketInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPurchasedTicketInput | ReviewCreateOrConnectWithoutPurchasedTicketInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPurchasedTicketInput | ReviewUpsertWithWhereUniqueWithoutPurchasedTicketInput[]
    createMany?: ReviewCreateManyPurchasedTicketInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPurchasedTicketInput | ReviewUpdateWithWhereUniqueWithoutPurchasedTicketInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPurchasedTicketInput | ReviewUpdateManyWithWhereWithoutPurchasedTicketInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutPurchasedTicketNestedInput = {
    create?: XOR<ReviewCreateWithoutPurchasedTicketInput, ReviewUncheckedCreateWithoutPurchasedTicketInput> | ReviewCreateWithoutPurchasedTicketInput[] | ReviewUncheckedCreateWithoutPurchasedTicketInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutPurchasedTicketInput | ReviewCreateOrConnectWithoutPurchasedTicketInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutPurchasedTicketInput | ReviewUpsertWithWhereUniqueWithoutPurchasedTicketInput[]
    createMany?: ReviewCreateManyPurchasedTicketInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutPurchasedTicketInput | ReviewUpdateWithWhereUniqueWithoutPurchasedTicketInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutPurchasedTicketInput | ReviewUpdateManyWithWhereWithoutPurchasedTicketInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutPromotionsInput = {
    create?: XOR<EventCreateWithoutPromotionsInput, EventUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutPromotionsInput
    connect?: EventWhereUniqueInput
  }

  export type EnumPromotionTypeFieldUpdateOperationsInput = {
    set?: $Enums.PromotionType
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateOneRequiredWithoutPromotionsNestedInput = {
    create?: XOR<EventCreateWithoutPromotionsInput, EventUncheckedCreateWithoutPromotionsInput>
    connectOrCreate?: EventCreateOrConnectWithoutPromotionsInput
    upsert?: EventUpsertWithoutPromotionsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutPromotionsInput, EventUpdateWithoutPromotionsInput>, EventUncheckedUpdateWithoutPromotionsInput>
  }

  export type UserCreateNestedOneWithoutPointsInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutPointInput = {
    create?: XOR<TransactionCreateWithoutPointInput, TransactionUncheckedCreateWithoutPointInput> | TransactionCreateWithoutPointInput[] | TransactionUncheckedCreateWithoutPointInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPointInput | TransactionCreateOrConnectWithoutPointInput[]
    createMany?: TransactionCreateManyPointInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutPointInput = {
    create?: XOR<TransactionCreateWithoutPointInput, TransactionUncheckedCreateWithoutPointInput> | TransactionCreateWithoutPointInput[] | TransactionUncheckedCreateWithoutPointInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPointInput | TransactionCreateOrConnectWithoutPointInput[]
    createMany?: TransactionCreateManyPointInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPointsNestedInput = {
    create?: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointsInput
    upsert?: UserUpsertWithoutPointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPointsInput, UserUpdateWithoutPointsInput>, UserUncheckedUpdateWithoutPointsInput>
  }

  export type TransactionUpdateManyWithoutPointNestedInput = {
    create?: XOR<TransactionCreateWithoutPointInput, TransactionUncheckedCreateWithoutPointInput> | TransactionCreateWithoutPointInput[] | TransactionUncheckedCreateWithoutPointInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPointInput | TransactionCreateOrConnectWithoutPointInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPointInput | TransactionUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: TransactionCreateManyPointInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPointInput | TransactionUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPointInput | TransactionUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutPointNestedInput = {
    create?: XOR<TransactionCreateWithoutPointInput, TransactionUncheckedCreateWithoutPointInput> | TransactionCreateWithoutPointInput[] | TransactionUncheckedCreateWithoutPointInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutPointInput | TransactionCreateOrConnectWithoutPointInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutPointInput | TransactionUpsertWithWhereUniqueWithoutPointInput[]
    createMany?: TransactionCreateManyPointInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutPointInput | TransactionUpdateWithWhereUniqueWithoutPointInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutPointInput | TransactionUpdateManyWithWhereWithoutPointInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVouchersInput = {
    create?: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchersInput
    connect?: UserWhereUniqueInput
  }

  export type ReferralUsageCreateNestedManyWithoutVoucherInput = {
    create?: XOR<ReferralUsageCreateWithoutVoucherInput, ReferralUsageUncheckedCreateWithoutVoucherInput> | ReferralUsageCreateWithoutVoucherInput[] | ReferralUsageUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutVoucherInput | ReferralUsageCreateOrConnectWithoutVoucherInput[]
    createMany?: ReferralUsageCreateManyVoucherInputEnvelope
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutVoucherInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ReferralUsageUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<ReferralUsageCreateWithoutVoucherInput, ReferralUsageUncheckedCreateWithoutVoucherInput> | ReferralUsageCreateWithoutVoucherInput[] | ReferralUsageUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutVoucherInput | ReferralUsageCreateOrConnectWithoutVoucherInput[]
    createMany?: ReferralUsageCreateManyVoucherInputEnvelope
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumvoucherTypeFieldUpdateOperationsInput = {
    set?: $Enums.voucherType
  }

  export type UserUpdateOneRequiredWithoutVouchersNestedInput = {
    create?: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    connectOrCreate?: UserCreateOrConnectWithoutVouchersInput
    upsert?: UserUpsertWithoutVouchersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVouchersInput, UserUpdateWithoutVouchersInput>, UserUncheckedUpdateWithoutVouchersInput>
  }

  export type ReferralUsageUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<ReferralUsageCreateWithoutVoucherInput, ReferralUsageUncheckedCreateWithoutVoucherInput> | ReferralUsageCreateWithoutVoucherInput[] | ReferralUsageUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutVoucherInput | ReferralUsageCreateOrConnectWithoutVoucherInput[]
    upsert?: ReferralUsageUpsertWithWhereUniqueWithoutVoucherInput | ReferralUsageUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: ReferralUsageCreateManyVoucherInputEnvelope
    set?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    disconnect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    delete?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    update?: ReferralUsageUpdateWithWhereUniqueWithoutVoucherInput | ReferralUsageUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: ReferralUsageUpdateManyWithWhereWithoutVoucherInput | ReferralUsageUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: ReferralUsageScalarWhereInput | ReferralUsageScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVoucherInput | TransactionUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVoucherInput | TransactionUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVoucherInput | TransactionUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ReferralUsageUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<ReferralUsageCreateWithoutVoucherInput, ReferralUsageUncheckedCreateWithoutVoucherInput> | ReferralUsageCreateWithoutVoucherInput[] | ReferralUsageUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: ReferralUsageCreateOrConnectWithoutVoucherInput | ReferralUsageCreateOrConnectWithoutVoucherInput[]
    upsert?: ReferralUsageUpsertWithWhereUniqueWithoutVoucherInput | ReferralUsageUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: ReferralUsageCreateManyVoucherInputEnvelope
    set?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    disconnect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    delete?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    connect?: ReferralUsageWhereUniqueInput | ReferralUsageWhereUniqueInput[]
    update?: ReferralUsageUpdateWithWhereUniqueWithoutVoucherInput | ReferralUsageUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: ReferralUsageUpdateManyWithWhereWithoutVoucherInput | ReferralUsageUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: ReferralUsageScalarWhereInput | ReferralUsageScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVoucherInput | TransactionUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVoucherInput | TransactionUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVoucherInput | TransactionUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReferredInput = {
    create?: XOR<UserCreateWithoutReferredInput, UserUncheckedCreateWithoutReferredInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferredInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReferrerInput = {
    create?: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferrerInput
    connect?: UserWhereUniqueInput
  }

  export type VoucherCreateNestedOneWithoutReferralUsageInput = {
    create?: XOR<VoucherCreateWithoutReferralUsageInput, VoucherUncheckedCreateWithoutReferralUsageInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutReferralUsageInput
    connect?: VoucherWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReferredNestedInput = {
    create?: XOR<UserCreateWithoutReferredInput, UserUncheckedCreateWithoutReferredInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferredInput
    upsert?: UserUpsertWithoutReferredInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferredInput, UserUpdateWithoutReferredInput>, UserUncheckedUpdateWithoutReferredInput>
  }

  export type UserUpdateOneRequiredWithoutReferrerNestedInput = {
    create?: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferrerInput
    upsert?: UserUpsertWithoutReferrerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferrerInput, UserUpdateWithoutReferrerInput>, UserUncheckedUpdateWithoutReferrerInput>
  }

  export type VoucherUpdateOneWithoutReferralUsageNestedInput = {
    create?: XOR<VoucherCreateWithoutReferralUsageInput, VoucherUncheckedCreateWithoutReferralUsageInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutReferralUsageInput
    upsert?: VoucherUpsertWithoutReferralUsageInput
    disconnect?: VoucherWhereInput | boolean
    delete?: VoucherWhereInput | boolean
    connect?: VoucherWhereUniqueInput
    update?: XOR<XOR<VoucherUpdateToOneWithWhereWithoutReferralUsageInput, VoucherUpdateWithoutReferralUsageInput>, VoucherUncheckedUpdateWithoutReferralUsageInput>
  }

  export type EventCreateNestedOneWithoutReviewsInput = {
    create?: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewsInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type PurchasedTicketCreateNestedOneWithoutReviewInput = {
    create?: XOR<PurchasedTicketCreateWithoutReviewInput, PurchasedTicketUncheckedCreateWithoutReviewInput>
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutReviewInput
    connect?: PurchasedTicketWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewsInput
    upsert?: EventUpsertWithoutReviewsInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutReviewsInput, EventUpdateWithoutReviewsInput>, EventUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type PurchasedTicketUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<PurchasedTicketCreateWithoutReviewInput, PurchasedTicketUncheckedCreateWithoutReviewInput>
    connectOrCreate?: PurchasedTicketCreateOrConnectWithoutReviewInput
    upsert?: PurchasedTicketUpsertWithoutReviewInput
    connect?: PurchasedTicketWhereUniqueInput
    update?: XOR<XOR<PurchasedTicketUpdateToOneWithWhereWithoutReviewInput, PurchasedTicketUpdateWithoutReviewInput>, PurchasedTicketUncheckedUpdateWithoutReviewInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumEventCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryFilter<$PrismaModel> | $Enums.EventCategory
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

  export type NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EventCategory | EnumEventCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.EventCategory[] | ListEnumEventCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumEventCategoryWithAggregatesFilter<$PrismaModel> | $Enums.EventCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEventCategoryFilter<$PrismaModel>
    _max?: NestedEnumEventCategoryFilter<$PrismaModel>
  }

  export type NestedEnumTicketCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryFilter<$PrismaModel> | $Enums.TicketCategory
  }

  export type NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TicketCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketCategoryFilter<$PrismaModel>
    _max?: NestedEnumTicketCategoryFilter<$PrismaModel>
  }

  export type NestedEnumstatusTransactionFilter<$PrismaModel = never> = {
    equals?: $Enums.statusTransaction | EnumstatusTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.statusTransaction[] | ListEnumstatusTransactionFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusTransaction[] | ListEnumstatusTransactionFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusTransactionFilter<$PrismaModel> | $Enums.statusTransaction
  }

  export type NestedEnumstatusTransactionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusTransaction | EnumstatusTransactionFieldRefInput<$PrismaModel>
    in?: $Enums.statusTransaction[] | ListEnumstatusTransactionFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusTransaction[] | ListEnumstatusTransactionFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusTransactionWithAggregatesFilter<$PrismaModel> | $Enums.statusTransaction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusTransactionFilter<$PrismaModel>
    _max?: NestedEnumstatusTransactionFilter<$PrismaModel>
  }

  export type NestedEnumPromotionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeFilter<$PrismaModel> | $Enums.PromotionType
  }

  export type NestedEnumPromotionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PromotionType | EnumPromotionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PromotionType[] | ListEnumPromotionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPromotionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PromotionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPromotionTypeFilter<$PrismaModel>
    _max?: NestedEnumPromotionTypeFilter<$PrismaModel>
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

  export type NestedEnumvoucherTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.voucherType | EnumvoucherTypeFieldRefInput<$PrismaModel>
    in?: $Enums.voucherType[] | ListEnumvoucherTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.voucherType[] | ListEnumvoucherTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumvoucherTypeFilter<$PrismaModel> | $Enums.voucherType
  }

  export type NestedEnumvoucherTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.voucherType | EnumvoucherTypeFieldRefInput<$PrismaModel>
    in?: $Enums.voucherType[] | ListEnumvoucherTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.voucherType[] | ListEnumvoucherTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumvoucherTypeWithAggregatesFilter<$PrismaModel> | $Enums.voucherType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumvoucherTypeFilter<$PrismaModel>
    _max?: NestedEnumvoucherTypeFilter<$PrismaModel>
  }

  export type EventCreateWithoutOrganizerInput = {
    id?: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
    eventSessions?: EventSessionCreateNestedManyWithoutEventInput
    promotions?: PromotionCreateNestedManyWithoutEventInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutOrganizerInput = {
    id?: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
    eventSessions?: EventSessionUncheckedCreateNestedManyWithoutEventInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutEventInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventCreateManyOrganizerInputEnvelope = {
    data: EventCreateManyOrganizerInput | EventCreateManyOrganizerInput[]
    skipDuplicates?: boolean
  }

  export type PointCreateWithoutUserInput = {
    id?: string
    amount: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
    Transaction?: TransactionCreateNestedManyWithoutPointInput
  }

  export type PointUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
    Transaction?: TransactionUncheckedCreateNestedManyWithoutPointInput
  }

  export type PointCreateOrConnectWithoutUserInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput>
  }

  export type PointCreateManyUserInputEnvelope = {
    data: PointCreateManyUserInput | PointCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReferralUsageCreateWithoutReferredInput = {
    id?: string
    createdAt?: Date | string
    referrer: UserCreateNestedOneWithoutReferrerInput
    voucher?: VoucherCreateNestedOneWithoutReferralUsageInput
  }

  export type ReferralUsageUncheckedCreateWithoutReferredInput = {
    id?: string
    referrerId: string
    voucherId?: string | null
    createdAt?: Date | string
  }

  export type ReferralUsageCreateOrConnectWithoutReferredInput = {
    where: ReferralUsageWhereUniqueInput
    create: XOR<ReferralUsageCreateWithoutReferredInput, ReferralUsageUncheckedCreateWithoutReferredInput>
  }

  export type ReferralUsageCreateManyReferredInputEnvelope = {
    data: ReferralUsageCreateManyReferredInput | ReferralUsageCreateManyReferredInput[]
    skipDuplicates?: boolean
  }

  export type ReferralUsageCreateWithoutReferrerInput = {
    id?: string
    createdAt?: Date | string
    referred: UserCreateNestedOneWithoutReferredInput
    voucher?: VoucherCreateNestedOneWithoutReferralUsageInput
  }

  export type ReferralUsageUncheckedCreateWithoutReferrerInput = {
    id?: string
    referredId: string
    voucherId?: string | null
    createdAt?: Date | string
  }

  export type ReferralUsageCreateOrConnectWithoutReferrerInput = {
    where: ReferralUsageWhereUniqueInput
    create: XOR<ReferralUsageCreateWithoutReferrerInput, ReferralUsageUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralUsageCreateManyReferrerInputEnvelope = {
    data: ReferralUsageCreateManyReferrerInput | ReferralUsageCreateManyReferrerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutReviewsInput
    purchasedTicket: PurchasedTicketCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    purchasedTicketId: string
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    quantity: number
    totalPrice: number
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
    event: EventCreateNestedOneWithoutTransactionsInput
    ticket: TicketCreateNestedOneWithoutTransactionsInput
    voucher?: VoucherCreateNestedOneWithoutTransactionInput
    point?: PointCreateNestedOneWithoutTransactionInput
    purchased?: PurchasedTicketCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    ticketId: string
    quantity: number
    totalPrice: number
    voucherId?: string | null
    pointId?: string | null
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VoucherCreateWithoutUserInput = {
    id?: string
    voucherType?: $Enums.voucherType
    discountPercent: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
    ReferralUsage?: ReferralUsageCreateNestedManyWithoutVoucherInput
    Transaction?: TransactionCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUncheckedCreateWithoutUserInput = {
    id?: string
    voucherType?: $Enums.voucherType
    discountPercent: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
    ReferralUsage?: ReferralUsageUncheckedCreateNestedManyWithoutVoucherInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherCreateOrConnectWithoutUserInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput>
  }

  export type VoucherCreateManyUserInputEnvelope = {
    data: VoucherCreateManyUserInput | VoucherCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PurchasedTicketCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    session: EventSessionCreateNestedOneWithoutPurchasedTicketInput
    transaction: TransactionCreateNestedOneWithoutPurchasedInput
    ticket: TicketCreateNestedOneWithoutPurchasedInput
    Review?: ReviewCreateNestedManyWithoutPurchasedTicketInput
  }

  export type PurchasedTicketUncheckedCreateWithoutUserInput = {
    id?: string
    transactionId: string
    ticketId: string
    sessionId: string
    createdAt?: Date | string
    Review?: ReviewUncheckedCreateNestedManyWithoutPurchasedTicketInput
  }

  export type PurchasedTicketCreateOrConnectWithoutUserInput = {
    where: PurchasedTicketWhereUniqueInput
    create: XOR<PurchasedTicketCreateWithoutUserInput, PurchasedTicketUncheckedCreateWithoutUserInput>
  }

  export type PurchasedTicketCreateManyUserInputEnvelope = {
    data: PurchasedTicketCreateManyUserInput | PurchasedTicketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
    create: XOR<EventCreateWithoutOrganizerInput, EventUncheckedCreateWithoutOrganizerInput>
  }

  export type EventUpdateWithWhereUniqueWithoutOrganizerInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutOrganizerInput, EventUncheckedUpdateWithoutOrganizerInput>
  }

  export type EventUpdateManyWithWhereWithoutOrganizerInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutOrganizerInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    organizerId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    totalIncome?: IntFilter<"Event"> | number
    category?: EnumEventCategoryFilter<"Event"> | $Enums.EventCategory
    image?: StringFilter<"Event"> | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    updatedAt?: DateTimeFilter<"Event"> | Date | string
    attendees?: IntFilter<"Event"> | number
  }

  export type PointUpsertWithWhereUniqueWithoutUserInput = {
    where: PointWhereUniqueInput
    update: XOR<PointUpdateWithoutUserInput, PointUncheckedUpdateWithoutUserInput>
    create: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput>
  }

  export type PointUpdateWithWhereUniqueWithoutUserInput = {
    where: PointWhereUniqueInput
    data: XOR<PointUpdateWithoutUserInput, PointUncheckedUpdateWithoutUserInput>
  }

  export type PointUpdateManyWithWhereWithoutUserInput = {
    where: PointScalarWhereInput
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyWithoutUserInput>
  }

  export type PointScalarWhereInput = {
    AND?: PointScalarWhereInput | PointScalarWhereInput[]
    OR?: PointScalarWhereInput[]
    NOT?: PointScalarWhereInput | PointScalarWhereInput[]
    id?: StringFilter<"Point"> | string
    userId?: StringFilter<"Point"> | string
    amount?: IntFilter<"Point"> | number
    expiresAt?: DateTimeFilter<"Point"> | Date | string
    createdAt?: DateTimeFilter<"Point"> | Date | string
    used?: BoolFilter<"Point"> | boolean
  }

  export type ReferralUsageUpsertWithWhereUniqueWithoutReferredInput = {
    where: ReferralUsageWhereUniqueInput
    update: XOR<ReferralUsageUpdateWithoutReferredInput, ReferralUsageUncheckedUpdateWithoutReferredInput>
    create: XOR<ReferralUsageCreateWithoutReferredInput, ReferralUsageUncheckedCreateWithoutReferredInput>
  }

  export type ReferralUsageUpdateWithWhereUniqueWithoutReferredInput = {
    where: ReferralUsageWhereUniqueInput
    data: XOR<ReferralUsageUpdateWithoutReferredInput, ReferralUsageUncheckedUpdateWithoutReferredInput>
  }

  export type ReferralUsageUpdateManyWithWhereWithoutReferredInput = {
    where: ReferralUsageScalarWhereInput
    data: XOR<ReferralUsageUpdateManyMutationInput, ReferralUsageUncheckedUpdateManyWithoutReferredInput>
  }

  export type ReferralUsageScalarWhereInput = {
    AND?: ReferralUsageScalarWhereInput | ReferralUsageScalarWhereInput[]
    OR?: ReferralUsageScalarWhereInput[]
    NOT?: ReferralUsageScalarWhereInput | ReferralUsageScalarWhereInput[]
    id?: StringFilter<"ReferralUsage"> | string
    referrerId?: StringFilter<"ReferralUsage"> | string
    referredId?: StringFilter<"ReferralUsage"> | string
    voucherId?: StringNullableFilter<"ReferralUsage"> | string | null
    createdAt?: DateTimeFilter<"ReferralUsage"> | Date | string
  }

  export type ReferralUsageUpsertWithWhereUniqueWithoutReferrerInput = {
    where: ReferralUsageWhereUniqueInput
    update: XOR<ReferralUsageUpdateWithoutReferrerInput, ReferralUsageUncheckedUpdateWithoutReferrerInput>
    create: XOR<ReferralUsageCreateWithoutReferrerInput, ReferralUsageUncheckedCreateWithoutReferrerInput>
  }

  export type ReferralUsageUpdateWithWhereUniqueWithoutReferrerInput = {
    where: ReferralUsageWhereUniqueInput
    data: XOR<ReferralUsageUpdateWithoutReferrerInput, ReferralUsageUncheckedUpdateWithoutReferrerInput>
  }

  export type ReferralUsageUpdateManyWithWhereWithoutReferrerInput = {
    where: ReferralUsageScalarWhereInput
    data: XOR<ReferralUsageUpdateManyMutationInput, ReferralUsageUncheckedUpdateManyWithoutReferrerInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    eventId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    purchasedTicketId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    eventId?: StringFilter<"Transaction"> | string
    ticketId?: StringFilter<"Transaction"> | string
    quantity?: IntFilter<"Transaction"> | number
    totalPrice?: IntFilter<"Transaction"> | number
    voucherId?: StringNullableFilter<"Transaction"> | string | null
    pointId?: StringNullableFilter<"Transaction"> | string | null
    status?: EnumstatusTransactionFilter<"Transaction"> | $Enums.statusTransaction
    invoiceUrl?: StringNullableFilter<"Transaction"> | string | null
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    expireAt?: DateTimeFilter<"Transaction"> | Date | string
    updatedAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type VoucherUpsertWithWhereUniqueWithoutUserInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutUserInput, VoucherUncheckedUpdateWithoutUserInput>
    create: XOR<VoucherCreateWithoutUserInput, VoucherUncheckedCreateWithoutUserInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutUserInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutUserInput, VoucherUncheckedUpdateWithoutUserInput>
  }

  export type VoucherUpdateManyWithWhereWithoutUserInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutUserInput>
  }

  export type VoucherScalarWhereInput = {
    AND?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    OR?: VoucherScalarWhereInput[]
    NOT?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    id?: StringFilter<"Voucher"> | string
    voucherType?: EnumvoucherTypeFilter<"Voucher"> | $Enums.voucherType
    userId?: StringFilter<"Voucher"> | string
    discountPercent?: IntFilter<"Voucher"> | number
    expiresAt?: DateTimeFilter<"Voucher"> | Date | string
    createdAt?: DateTimeFilter<"Voucher"> | Date | string
    used?: BoolFilter<"Voucher"> | boolean
  }

  export type PurchasedTicketUpsertWithWhereUniqueWithoutUserInput = {
    where: PurchasedTicketWhereUniqueInput
    update: XOR<PurchasedTicketUpdateWithoutUserInput, PurchasedTicketUncheckedUpdateWithoutUserInput>
    create: XOR<PurchasedTicketCreateWithoutUserInput, PurchasedTicketUncheckedCreateWithoutUserInput>
  }

  export type PurchasedTicketUpdateWithWhereUniqueWithoutUserInput = {
    where: PurchasedTicketWhereUniqueInput
    data: XOR<PurchasedTicketUpdateWithoutUserInput, PurchasedTicketUncheckedUpdateWithoutUserInput>
  }

  export type PurchasedTicketUpdateManyWithWhereWithoutUserInput = {
    where: PurchasedTicketScalarWhereInput
    data: XOR<PurchasedTicketUpdateManyMutationInput, PurchasedTicketUncheckedUpdateManyWithoutUserInput>
  }

  export type PurchasedTicketScalarWhereInput = {
    AND?: PurchasedTicketScalarWhereInput | PurchasedTicketScalarWhereInput[]
    OR?: PurchasedTicketScalarWhereInput[]
    NOT?: PurchasedTicketScalarWhereInput | PurchasedTicketScalarWhereInput[]
    id?: StringFilter<"PurchasedTicket"> | string
    transactionId?: StringFilter<"PurchasedTicket"> | string
    ticketId?: StringFilter<"PurchasedTicket"> | string
    sessionId?: StringFilter<"PurchasedTicket"> | string
    userId?: StringFilter<"PurchasedTicket"> | string
    createdAt?: DateTimeFilter<"PurchasedTicket"> | Date | string
  }

  export type UserCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    points?: PointCreateNestedManyWithoutUserInput
    referred?: ReferralUsageCreateNestedManyWithoutReferredInput
    referrer?: ReferralUsageCreateNestedManyWithoutReferrerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    referred?: ReferralUsageUncheckedCreateNestedManyWithoutReferredInput
    referrer?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
  }

  export type EventSessionCreateWithoutEventInput = {
    id?: string
    date: string
    time: string
    location: string
    tickets?: TicketCreateNestedManyWithoutSessionInput
    PurchasedTicket?: PurchasedTicketCreateNestedManyWithoutSessionInput
  }

  export type EventSessionUncheckedCreateWithoutEventInput = {
    id?: string
    date: string
    time: string
    location: string
    tickets?: TicketUncheckedCreateNestedManyWithoutSessionInput
    PurchasedTicket?: PurchasedTicketUncheckedCreateNestedManyWithoutSessionInput
  }

  export type EventSessionCreateOrConnectWithoutEventInput = {
    where: EventSessionWhereUniqueInput
    create: XOR<EventSessionCreateWithoutEventInput, EventSessionUncheckedCreateWithoutEventInput>
  }

  export type EventSessionCreateManyEventInputEnvelope = {
    data: EventSessionCreateManyEventInput | EventSessionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type PromotionCreateWithoutEventInput = {
    id?: string
    type: $Enums.PromotionType
    code: string
    discountValue: number
    maxUsage?: number | null
    usageCount?: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PromotionUncheckedCreateWithoutEventInput = {
    id?: string
    type: $Enums.PromotionType
    code: string
    discountValue: number
    maxUsage?: number | null
    usageCount?: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PromotionCreateOrConnectWithoutEventInput = {
    where: PromotionWhereUniqueInput
    create: XOR<PromotionCreateWithoutEventInput, PromotionUncheckedCreateWithoutEventInput>
  }

  export type PromotionCreateManyEventInputEnvelope = {
    data: PromotionCreateManyEventInput | PromotionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutEventInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    purchasedTicket: PurchasedTicketCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    purchasedTicketId: string
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutEventInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewCreateManyEventInputEnvelope = {
    data: ReviewCreateManyEventInput | ReviewCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutEventInput = {
    id?: string
    price: number
    category: $Enums.TicketCategory
    seatAvailable: number
    session: EventSessionCreateNestedOneWithoutTicketsInput
    transactions?: TransactionCreateNestedManyWithoutTicketInput
    purchased?: PurchasedTicketCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutEventInput = {
    id?: string
    sessionId: string
    price: number
    category: $Enums.TicketCategory
    seatAvailable: number
    transactions?: TransactionUncheckedCreateNestedManyWithoutTicketInput
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutEventInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateManyEventInputEnvelope = {
    data: TicketCreateManyEventInput | TicketCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutEventInput = {
    id?: string
    quantity: number
    totalPrice: number
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    ticket: TicketCreateNestedOneWithoutTransactionsInput
    voucher?: VoucherCreateNestedOneWithoutTransactionInput
    point?: PointCreateNestedOneWithoutTransactionInput
    purchased?: PurchasedTicketCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    ticketId: string
    quantity: number
    totalPrice: number
    voucherId?: string | null
    pointId?: string | null
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutEventInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput>
  }

  export type TransactionCreateManyEventInputEnvelope = {
    data: TransactionCreateManyEventInput | TransactionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventsInput = {
    update: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
    create: XOR<UserCreateWithoutEventsInput, UserUncheckedCreateWithoutEventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventsInput, UserUncheckedUpdateWithoutEventsInput>
  }

  export type UserUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: PointUpdateManyWithoutUserNestedInput
    referred?: ReferralUsageUpdateManyWithoutReferredNestedInput
    referrer?: ReferralUsageUpdateManyWithoutReferrerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    referred?: ReferralUsageUncheckedUpdateManyWithoutReferredNestedInput
    referrer?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventSessionUpsertWithWhereUniqueWithoutEventInput = {
    where: EventSessionWhereUniqueInput
    update: XOR<EventSessionUpdateWithoutEventInput, EventSessionUncheckedUpdateWithoutEventInput>
    create: XOR<EventSessionCreateWithoutEventInput, EventSessionUncheckedCreateWithoutEventInput>
  }

  export type EventSessionUpdateWithWhereUniqueWithoutEventInput = {
    where: EventSessionWhereUniqueInput
    data: XOR<EventSessionUpdateWithoutEventInput, EventSessionUncheckedUpdateWithoutEventInput>
  }

  export type EventSessionUpdateManyWithWhereWithoutEventInput = {
    where: EventSessionScalarWhereInput
    data: XOR<EventSessionUpdateManyMutationInput, EventSessionUncheckedUpdateManyWithoutEventInput>
  }

  export type EventSessionScalarWhereInput = {
    AND?: EventSessionScalarWhereInput | EventSessionScalarWhereInput[]
    OR?: EventSessionScalarWhereInput[]
    NOT?: EventSessionScalarWhereInput | EventSessionScalarWhereInput[]
    id?: StringFilter<"EventSession"> | string
    eventId?: StringFilter<"EventSession"> | string
    date?: StringFilter<"EventSession"> | string
    time?: StringFilter<"EventSession"> | string
    location?: StringFilter<"EventSession"> | string
  }

  export type PromotionUpsertWithWhereUniqueWithoutEventInput = {
    where: PromotionWhereUniqueInput
    update: XOR<PromotionUpdateWithoutEventInput, PromotionUncheckedUpdateWithoutEventInput>
    create: XOR<PromotionCreateWithoutEventInput, PromotionUncheckedCreateWithoutEventInput>
  }

  export type PromotionUpdateWithWhereUniqueWithoutEventInput = {
    where: PromotionWhereUniqueInput
    data: XOR<PromotionUpdateWithoutEventInput, PromotionUncheckedUpdateWithoutEventInput>
  }

  export type PromotionUpdateManyWithWhereWithoutEventInput = {
    where: PromotionScalarWhereInput
    data: XOR<PromotionUpdateManyMutationInput, PromotionUncheckedUpdateManyWithoutEventInput>
  }

  export type PromotionScalarWhereInput = {
    AND?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
    OR?: PromotionScalarWhereInput[]
    NOT?: PromotionScalarWhereInput | PromotionScalarWhereInput[]
    id?: StringFilter<"Promotion"> | string
    eventId?: StringFilter<"Promotion"> | string
    type?: EnumPromotionTypeFilter<"Promotion"> | $Enums.PromotionType
    code?: StringFilter<"Promotion"> | string
    discountValue?: IntFilter<"Promotion"> | number
    maxUsage?: IntNullableFilter<"Promotion"> | number | null
    usageCount?: IntFilter<"Promotion"> | number
    expiresAt?: DateTimeFilter<"Promotion"> | Date | string
    createdAt?: DateTimeFilter<"Promotion"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
  }

  export type ReviewUpdateManyWithWhereWithoutEventInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateManyWithWhereWithoutEventInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    sessionId?: StringFilter<"Ticket"> | string
    eventId?: StringNullableFilter<"Ticket"> | string | null
    price?: IntFilter<"Ticket"> | number
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    seatAvailable?: IntFilter<"Ticket"> | number
  }

  export type TransactionUpsertWithWhereUniqueWithoutEventInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutEventInput, TransactionUncheckedUpdateWithoutEventInput>
    create: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutEventInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutEventInput, TransactionUncheckedUpdateWithoutEventInput>
  }

  export type TransactionUpdateManyWithWhereWithoutEventInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutEventInput>
  }

  export type TicketCreateWithoutSessionInput = {
    id?: string
    price: number
    category: $Enums.TicketCategory
    seatAvailable: number
    transactions?: TransactionCreateNestedManyWithoutTicketInput
    purchased?: PurchasedTicketCreateNestedManyWithoutTicketInput
    Event?: EventCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutSessionInput = {
    id?: string
    eventId?: string | null
    price: number
    category: $Enums.TicketCategory
    seatAvailable: number
    transactions?: TransactionUncheckedCreateNestedManyWithoutTicketInput
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutSessionInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutSessionInput, TicketUncheckedCreateWithoutSessionInput>
  }

  export type TicketCreateManySessionInputEnvelope = {
    data: TicketCreateManySessionInput | TicketCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutEventSessionsInput = {
    id?: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
    organizer: UserCreateNestedOneWithoutEventsInput
    promotions?: PromotionCreateNestedManyWithoutEventInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventSessionsInput = {
    id?: string
    organizerId: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
    promotions?: PromotionUncheckedCreateNestedManyWithoutEventInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventSessionsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventSessionsInput, EventUncheckedCreateWithoutEventSessionsInput>
  }

  export type PurchasedTicketCreateWithoutSessionInput = {
    id?: string
    createdAt?: Date | string
    transaction: TransactionCreateNestedOneWithoutPurchasedInput
    ticket: TicketCreateNestedOneWithoutPurchasedInput
    user: UserCreateNestedOneWithoutPurchasedInput
    Review?: ReviewCreateNestedManyWithoutPurchasedTicketInput
  }

  export type PurchasedTicketUncheckedCreateWithoutSessionInput = {
    id?: string
    transactionId: string
    ticketId: string
    userId: string
    createdAt?: Date | string
    Review?: ReviewUncheckedCreateNestedManyWithoutPurchasedTicketInput
  }

  export type PurchasedTicketCreateOrConnectWithoutSessionInput = {
    where: PurchasedTicketWhereUniqueInput
    create: XOR<PurchasedTicketCreateWithoutSessionInput, PurchasedTicketUncheckedCreateWithoutSessionInput>
  }

  export type PurchasedTicketCreateManySessionInputEnvelope = {
    data: PurchasedTicketCreateManySessionInput | PurchasedTicketCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutSessionInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutSessionInput, TicketUncheckedUpdateWithoutSessionInput>
    create: XOR<TicketCreateWithoutSessionInput, TicketUncheckedCreateWithoutSessionInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutSessionInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutSessionInput, TicketUncheckedUpdateWithoutSessionInput>
  }

  export type TicketUpdateManyWithWhereWithoutSessionInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutSessionInput>
  }

  export type EventUpsertWithoutEventSessionsInput = {
    update: XOR<EventUpdateWithoutEventSessionsInput, EventUncheckedUpdateWithoutEventSessionsInput>
    create: XOR<EventCreateWithoutEventSessionsInput, EventUncheckedCreateWithoutEventSessionsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventSessionsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventSessionsInput, EventUncheckedUpdateWithoutEventSessionsInput>
  }

  export type EventUpdateWithoutEventSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    promotions?: PromotionUpdateManyWithoutEventNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
    promotions?: PromotionUncheckedUpdateManyWithoutEventNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type PurchasedTicketUpsertWithWhereUniqueWithoutSessionInput = {
    where: PurchasedTicketWhereUniqueInput
    update: XOR<PurchasedTicketUpdateWithoutSessionInput, PurchasedTicketUncheckedUpdateWithoutSessionInput>
    create: XOR<PurchasedTicketCreateWithoutSessionInput, PurchasedTicketUncheckedCreateWithoutSessionInput>
  }

  export type PurchasedTicketUpdateWithWhereUniqueWithoutSessionInput = {
    where: PurchasedTicketWhereUniqueInput
    data: XOR<PurchasedTicketUpdateWithoutSessionInput, PurchasedTicketUncheckedUpdateWithoutSessionInput>
  }

  export type PurchasedTicketUpdateManyWithWhereWithoutSessionInput = {
    where: PurchasedTicketScalarWhereInput
    data: XOR<PurchasedTicketUpdateManyMutationInput, PurchasedTicketUncheckedUpdateManyWithoutSessionInput>
  }

  export type EventSessionCreateWithoutTicketsInput = {
    id?: string
    date: string
    time: string
    location: string
    event: EventCreateNestedOneWithoutEventSessionsInput
    PurchasedTicket?: PurchasedTicketCreateNestedManyWithoutSessionInput
  }

  export type EventSessionUncheckedCreateWithoutTicketsInput = {
    id?: string
    eventId: string
    date: string
    time: string
    location: string
    PurchasedTicket?: PurchasedTicketUncheckedCreateNestedManyWithoutSessionInput
  }

  export type EventSessionCreateOrConnectWithoutTicketsInput = {
    where: EventSessionWhereUniqueInput
    create: XOR<EventSessionCreateWithoutTicketsInput, EventSessionUncheckedCreateWithoutTicketsInput>
  }

  export type TransactionCreateWithoutTicketInput = {
    id?: string
    quantity: number
    totalPrice: number
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    event: EventCreateNestedOneWithoutTransactionsInput
    voucher?: VoucherCreateNestedOneWithoutTransactionInput
    point?: PointCreateNestedOneWithoutTransactionInput
    purchased?: PurchasedTicketCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutTicketInput = {
    id?: string
    userId: string
    eventId: string
    quantity: number
    totalPrice: number
    voucherId?: string | null
    pointId?: string | null
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutTicketInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput>
  }

  export type TransactionCreateManyTicketInputEnvelope = {
    data: TransactionCreateManyTicketInput | TransactionCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type PurchasedTicketCreateWithoutTicketInput = {
    id?: string
    createdAt?: Date | string
    session: EventSessionCreateNestedOneWithoutPurchasedTicketInput
    transaction: TransactionCreateNestedOneWithoutPurchasedInput
    user: UserCreateNestedOneWithoutPurchasedInput
    Review?: ReviewCreateNestedManyWithoutPurchasedTicketInput
  }

  export type PurchasedTicketUncheckedCreateWithoutTicketInput = {
    id?: string
    transactionId: string
    sessionId: string
    userId: string
    createdAt?: Date | string
    Review?: ReviewUncheckedCreateNestedManyWithoutPurchasedTicketInput
  }

  export type PurchasedTicketCreateOrConnectWithoutTicketInput = {
    where: PurchasedTicketWhereUniqueInput
    create: XOR<PurchasedTicketCreateWithoutTicketInput, PurchasedTicketUncheckedCreateWithoutTicketInput>
  }

  export type PurchasedTicketCreateManyTicketInputEnvelope = {
    data: PurchasedTicketCreateManyTicketInput | PurchasedTicketCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type EventCreateWithoutTicketsInput = {
    id?: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
    organizer: UserCreateNestedOneWithoutEventsInput
    eventSessions?: EventSessionCreateNestedManyWithoutEventInput
    promotions?: PromotionCreateNestedManyWithoutEventInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTicketsInput = {
    id?: string
    organizerId: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
    eventSessions?: EventSessionUncheckedCreateNestedManyWithoutEventInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutEventInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicketsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
  }

  export type EventSessionUpsertWithoutTicketsInput = {
    update: XOR<EventSessionUpdateWithoutTicketsInput, EventSessionUncheckedUpdateWithoutTicketsInput>
    create: XOR<EventSessionCreateWithoutTicketsInput, EventSessionUncheckedCreateWithoutTicketsInput>
    where?: EventSessionWhereInput
  }

  export type EventSessionUpdateToOneWithWhereWithoutTicketsInput = {
    where?: EventSessionWhereInput
    data: XOR<EventSessionUpdateWithoutTicketsInput, EventSessionUncheckedUpdateWithoutTicketsInput>
  }

  export type EventSessionUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    event?: EventUpdateOneRequiredWithoutEventSessionsNestedInput
    PurchasedTicket?: PurchasedTicketUpdateManyWithoutSessionNestedInput
  }

  export type EventSessionUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    PurchasedTicket?: PurchasedTicketUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutTicketInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutTicketInput, TransactionUncheckedUpdateWithoutTicketInput>
    create: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutTicketInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutTicketInput, TransactionUncheckedUpdateWithoutTicketInput>
  }

  export type TransactionUpdateManyWithWhereWithoutTicketInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTicketInput>
  }

  export type PurchasedTicketUpsertWithWhereUniqueWithoutTicketInput = {
    where: PurchasedTicketWhereUniqueInput
    update: XOR<PurchasedTicketUpdateWithoutTicketInput, PurchasedTicketUncheckedUpdateWithoutTicketInput>
    create: XOR<PurchasedTicketCreateWithoutTicketInput, PurchasedTicketUncheckedCreateWithoutTicketInput>
  }

  export type PurchasedTicketUpdateWithWhereUniqueWithoutTicketInput = {
    where: PurchasedTicketWhereUniqueInput
    data: XOR<PurchasedTicketUpdateWithoutTicketInput, PurchasedTicketUncheckedUpdateWithoutTicketInput>
  }

  export type PurchasedTicketUpdateManyWithWhereWithoutTicketInput = {
    where: PurchasedTicketScalarWhereInput
    data: XOR<PurchasedTicketUpdateManyMutationInput, PurchasedTicketUncheckedUpdateManyWithoutTicketInput>
  }

  export type EventUpsertWithoutTicketsInput = {
    update: XOR<EventUpdateWithoutTicketsInput, EventUncheckedUpdateWithoutTicketsInput>
    create: XOR<EventCreateWithoutTicketsInput, EventUncheckedCreateWithoutTicketsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketsInput, EventUncheckedUpdateWithoutTicketsInput>
  }

  export type EventUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    eventSessions?: EventSessionUpdateManyWithoutEventNestedInput
    promotions?: PromotionUpdateManyWithoutEventNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
    eventSessions?: EventSessionUncheckedUpdateManyWithoutEventNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutEventNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventCreateNestedManyWithoutOrganizerInput
    points?: PointCreateNestedManyWithoutUserInput
    referred?: ReferralUsageCreateNestedManyWithoutReferredInput
    referrer?: ReferralUsageCreateNestedManyWithoutReferrerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    referred?: ReferralUsageUncheckedCreateNestedManyWithoutReferredInput
    referrer?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
  }

  export type EventCreateWithoutTransactionsInput = {
    id?: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
    organizer: UserCreateNestedOneWithoutEventsInput
    eventSessions?: EventSessionCreateNestedManyWithoutEventInput
    promotions?: PromotionCreateNestedManyWithoutEventInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTransactionsInput = {
    id?: string
    organizerId: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
    eventSessions?: EventSessionUncheckedCreateNestedManyWithoutEventInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutEventInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTransactionsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
  }

  export type TicketCreateWithoutTransactionsInput = {
    id?: string
    price: number
    category: $Enums.TicketCategory
    seatAvailable: number
    session: EventSessionCreateNestedOneWithoutTicketsInput
    purchased?: PurchasedTicketCreateNestedManyWithoutTicketInput
    Event?: EventCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutTransactionsInput = {
    id?: string
    sessionId: string
    eventId?: string | null
    price: number
    category: $Enums.TicketCategory
    seatAvailable: number
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTransactionsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTransactionsInput, TicketUncheckedCreateWithoutTransactionsInput>
  }

  export type VoucherCreateWithoutTransactionInput = {
    id?: string
    voucherType?: $Enums.voucherType
    discountPercent: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
    user: UserCreateNestedOneWithoutVouchersInput
    ReferralUsage?: ReferralUsageCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUncheckedCreateWithoutTransactionInput = {
    id?: string
    voucherType?: $Enums.voucherType
    userId: string
    discountPercent: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
    ReferralUsage?: ReferralUsageUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherCreateOrConnectWithoutTransactionInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutTransactionInput, VoucherUncheckedCreateWithoutTransactionInput>
  }

  export type PointCreateWithoutTransactionInput = {
    id?: string
    amount: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
    user: UserCreateNestedOneWithoutPointsInput
  }

  export type PointUncheckedCreateWithoutTransactionInput = {
    id?: string
    userId: string
    amount: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
  }

  export type PointCreateOrConnectWithoutTransactionInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutTransactionInput, PointUncheckedCreateWithoutTransactionInput>
  }

  export type PurchasedTicketCreateWithoutTransactionInput = {
    id?: string
    createdAt?: Date | string
    session: EventSessionCreateNestedOneWithoutPurchasedTicketInput
    ticket: TicketCreateNestedOneWithoutPurchasedInput
    user: UserCreateNestedOneWithoutPurchasedInput
    Review?: ReviewCreateNestedManyWithoutPurchasedTicketInput
  }

  export type PurchasedTicketUncheckedCreateWithoutTransactionInput = {
    id?: string
    ticketId: string
    sessionId: string
    userId: string
    createdAt?: Date | string
    Review?: ReviewUncheckedCreateNestedManyWithoutPurchasedTicketInput
  }

  export type PurchasedTicketCreateOrConnectWithoutTransactionInput = {
    where: PurchasedTicketWhereUniqueInput
    create: XOR<PurchasedTicketCreateWithoutTransactionInput, PurchasedTicketUncheckedCreateWithoutTransactionInput>
  }

  export type PurchasedTicketCreateManyTransactionInputEnvelope = {
    data: PurchasedTicketCreateManyTransactionInput | PurchasedTicketCreateManyTransactionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTransactionsInput = {
    update: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
    create: XOR<UserCreateWithoutTransactionsInput, UserUncheckedCreateWithoutTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsInput, UserUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUpdateManyWithoutOrganizerNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    referred?: ReferralUsageUpdateManyWithoutReferredNestedInput
    referrer?: ReferralUsageUpdateManyWithoutReferrerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    referred?: ReferralUsageUncheckedUpdateManyWithoutReferredNestedInput
    referrer?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutTransactionsInput = {
    update: XOR<EventUpdateWithoutTransactionsInput, EventUncheckedUpdateWithoutTransactionsInput>
    create: XOR<EventCreateWithoutTransactionsInput, EventUncheckedCreateWithoutTransactionsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTransactionsInput, EventUncheckedUpdateWithoutTransactionsInput>
  }

  export type EventUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    eventSessions?: EventSessionUpdateManyWithoutEventNestedInput
    promotions?: PromotionUpdateManyWithoutEventNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
    eventSessions?: EventSessionUncheckedUpdateManyWithoutEventNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutEventNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TicketUpsertWithoutTransactionsInput = {
    update: XOR<TicketUpdateWithoutTransactionsInput, TicketUncheckedUpdateWithoutTransactionsInput>
    create: XOR<TicketCreateWithoutTransactionsInput, TicketUncheckedCreateWithoutTransactionsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutTransactionsInput, TicketUncheckedUpdateWithoutTransactionsInput>
  }

  export type TicketUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    seatAvailable?: IntFieldUpdateOperationsInput | number
    session?: EventSessionUpdateOneRequiredWithoutTicketsNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutTicketNestedInput
    Event?: EventUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    seatAvailable?: IntFieldUpdateOperationsInput | number
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type VoucherUpsertWithoutTransactionInput = {
    update: XOR<VoucherUpdateWithoutTransactionInput, VoucherUncheckedUpdateWithoutTransactionInput>
    create: XOR<VoucherCreateWithoutTransactionInput, VoucherUncheckedCreateWithoutTransactionInput>
    where?: VoucherWhereInput
  }

  export type VoucherUpdateToOneWithWhereWithoutTransactionInput = {
    where?: VoucherWhereInput
    data: XOR<VoucherUpdateWithoutTransactionInput, VoucherUncheckedUpdateWithoutTransactionInput>
  }

  export type VoucherUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherType?: EnumvoucherTypeFieldUpdateOperationsInput | $Enums.voucherType
    discountPercent?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutVouchersNestedInput
    ReferralUsage?: ReferralUsageUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherType?: EnumvoucherTypeFieldUpdateOperationsInput | $Enums.voucherType
    userId?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    ReferralUsage?: ReferralUsageUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type PointUpsertWithoutTransactionInput = {
    update: XOR<PointUpdateWithoutTransactionInput, PointUncheckedUpdateWithoutTransactionInput>
    create: XOR<PointCreateWithoutTransactionInput, PointUncheckedCreateWithoutTransactionInput>
    where?: PointWhereInput
  }

  export type PointUpdateToOneWithWhereWithoutTransactionInput = {
    where?: PointWhereInput
    data: XOR<PointUpdateWithoutTransactionInput, PointUncheckedUpdateWithoutTransactionInput>
  }

  export type PointUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutPointsNestedInput
  }

  export type PointUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchasedTicketUpsertWithWhereUniqueWithoutTransactionInput = {
    where: PurchasedTicketWhereUniqueInput
    update: XOR<PurchasedTicketUpdateWithoutTransactionInput, PurchasedTicketUncheckedUpdateWithoutTransactionInput>
    create: XOR<PurchasedTicketCreateWithoutTransactionInput, PurchasedTicketUncheckedCreateWithoutTransactionInput>
  }

  export type PurchasedTicketUpdateWithWhereUniqueWithoutTransactionInput = {
    where: PurchasedTicketWhereUniqueInput
    data: XOR<PurchasedTicketUpdateWithoutTransactionInput, PurchasedTicketUncheckedUpdateWithoutTransactionInput>
  }

  export type PurchasedTicketUpdateManyWithWhereWithoutTransactionInput = {
    where: PurchasedTicketScalarWhereInput
    data: XOR<PurchasedTicketUpdateManyMutationInput, PurchasedTicketUncheckedUpdateManyWithoutTransactionInput>
  }

  export type EventSessionCreateWithoutPurchasedTicketInput = {
    id?: string
    date: string
    time: string
    location: string
    tickets?: TicketCreateNestedManyWithoutSessionInput
    event: EventCreateNestedOneWithoutEventSessionsInput
  }

  export type EventSessionUncheckedCreateWithoutPurchasedTicketInput = {
    id?: string
    eventId: string
    date: string
    time: string
    location: string
    tickets?: TicketUncheckedCreateNestedManyWithoutSessionInput
  }

  export type EventSessionCreateOrConnectWithoutPurchasedTicketInput = {
    where: EventSessionWhereUniqueInput
    create: XOR<EventSessionCreateWithoutPurchasedTicketInput, EventSessionUncheckedCreateWithoutPurchasedTicketInput>
  }

  export type TransactionCreateWithoutPurchasedInput = {
    id?: string
    quantity: number
    totalPrice: number
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    event: EventCreateNestedOneWithoutTransactionsInput
    ticket: TicketCreateNestedOneWithoutTransactionsInput
    voucher?: VoucherCreateNestedOneWithoutTransactionInput
    point?: PointCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutPurchasedInput = {
    id?: string
    userId: string
    eventId: string
    ticketId: string
    quantity: number
    totalPrice: number
    voucherId?: string | null
    pointId?: string | null
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutPurchasedInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPurchasedInput, TransactionUncheckedCreateWithoutPurchasedInput>
  }

  export type TicketCreateWithoutPurchasedInput = {
    id?: string
    price: number
    category: $Enums.TicketCategory
    seatAvailable: number
    session: EventSessionCreateNestedOneWithoutTicketsInput
    transactions?: TransactionCreateNestedManyWithoutTicketInput
    Event?: EventCreateNestedOneWithoutTicketsInput
  }

  export type TicketUncheckedCreateWithoutPurchasedInput = {
    id?: string
    sessionId: string
    eventId?: string | null
    price: number
    category: $Enums.TicketCategory
    seatAvailable: number
    transactions?: TransactionUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutPurchasedInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutPurchasedInput, TicketUncheckedCreateWithoutPurchasedInput>
  }

  export type UserCreateWithoutPurchasedInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventCreateNestedManyWithoutOrganizerInput
    points?: PointCreateNestedManyWithoutUserInput
    referred?: ReferralUsageCreateNestedManyWithoutReferredInput
    referrer?: ReferralUsageCreateNestedManyWithoutReferrerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPurchasedInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    referred?: ReferralUsageUncheckedCreateNestedManyWithoutReferredInput
    referrer?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPurchasedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPurchasedInput, UserUncheckedCreateWithoutPurchasedInput>
  }

  export type ReviewCreateWithoutPurchasedTicketInput = {
    id?: string
    rating: number
    comment: string
    createdAt?: Date | string
    event: EventCreateNestedOneWithoutReviewsInput
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutPurchasedTicketInput = {
    id?: string
    eventId: string
    userId: string
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutPurchasedTicketInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutPurchasedTicketInput, ReviewUncheckedCreateWithoutPurchasedTicketInput>
  }

  export type ReviewCreateManyPurchasedTicketInputEnvelope = {
    data: ReviewCreateManyPurchasedTicketInput | ReviewCreateManyPurchasedTicketInput[]
    skipDuplicates?: boolean
  }

  export type EventSessionUpsertWithoutPurchasedTicketInput = {
    update: XOR<EventSessionUpdateWithoutPurchasedTicketInput, EventSessionUncheckedUpdateWithoutPurchasedTicketInput>
    create: XOR<EventSessionCreateWithoutPurchasedTicketInput, EventSessionUncheckedCreateWithoutPurchasedTicketInput>
    where?: EventSessionWhereInput
  }

  export type EventSessionUpdateToOneWithWhereWithoutPurchasedTicketInput = {
    where?: EventSessionWhereInput
    data: XOR<EventSessionUpdateWithoutPurchasedTicketInput, EventSessionUncheckedUpdateWithoutPurchasedTicketInput>
  }

  export type EventSessionUpdateWithoutPurchasedTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutSessionNestedInput
    event?: EventUpdateOneRequiredWithoutEventSessionsNestedInput
  }

  export type EventSessionUncheckedUpdateWithoutPurchasedTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type TransactionUpsertWithoutPurchasedInput = {
    update: XOR<TransactionUpdateWithoutPurchasedInput, TransactionUncheckedUpdateWithoutPurchasedInput>
    create: XOR<TransactionCreateWithoutPurchasedInput, TransactionUncheckedCreateWithoutPurchasedInput>
    where?: TransactionWhereInput
  }

  export type TransactionUpdateToOneWithWhereWithoutPurchasedInput = {
    where?: TransactionWhereInput
    data: XOR<TransactionUpdateWithoutPurchasedInput, TransactionUncheckedUpdateWithoutPurchasedInput>
  }

  export type TransactionUpdateWithoutPurchasedInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    ticket?: TicketUpdateOneRequiredWithoutTransactionsNestedInput
    voucher?: VoucherUpdateOneWithoutTransactionNestedInput
    point?: PointUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPurchasedInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpsertWithoutPurchasedInput = {
    update: XOR<TicketUpdateWithoutPurchasedInput, TicketUncheckedUpdateWithoutPurchasedInput>
    create: XOR<TicketCreateWithoutPurchasedInput, TicketUncheckedCreateWithoutPurchasedInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutPurchasedInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutPurchasedInput, TicketUncheckedUpdateWithoutPurchasedInput>
  }

  export type TicketUpdateWithoutPurchasedInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    seatAvailable?: IntFieldUpdateOperationsInput | number
    session?: EventSessionUpdateOneRequiredWithoutTicketsNestedInput
    transactions?: TransactionUpdateManyWithoutTicketNestedInput
    Event?: EventUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutPurchasedInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    seatAvailable?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type UserUpsertWithoutPurchasedInput = {
    update: XOR<UserUpdateWithoutPurchasedInput, UserUncheckedUpdateWithoutPurchasedInput>
    create: XOR<UserCreateWithoutPurchasedInput, UserUncheckedCreateWithoutPurchasedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPurchasedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPurchasedInput, UserUncheckedUpdateWithoutPurchasedInput>
  }

  export type UserUpdateWithoutPurchasedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUpdateManyWithoutOrganizerNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    referred?: ReferralUsageUpdateManyWithoutReferredNestedInput
    referrer?: ReferralUsageUpdateManyWithoutReferrerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPurchasedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    referred?: ReferralUsageUncheckedUpdateManyWithoutReferredNestedInput
    referrer?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutPurchasedTicketInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutPurchasedTicketInput, ReviewUncheckedUpdateWithoutPurchasedTicketInput>
    create: XOR<ReviewCreateWithoutPurchasedTicketInput, ReviewUncheckedCreateWithoutPurchasedTicketInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutPurchasedTicketInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutPurchasedTicketInput, ReviewUncheckedUpdateWithoutPurchasedTicketInput>
  }

  export type ReviewUpdateManyWithWhereWithoutPurchasedTicketInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutPurchasedTicketInput>
  }

  export type EventCreateWithoutPromotionsInput = {
    id?: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
    organizer: UserCreateNestedOneWithoutEventsInput
    eventSessions?: EventSessionCreateNestedManyWithoutEventInput
    reviews?: ReviewCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutPromotionsInput = {
    id?: string
    organizerId: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
    eventSessions?: EventSessionUncheckedCreateNestedManyWithoutEventInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutPromotionsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutPromotionsInput, EventUncheckedCreateWithoutPromotionsInput>
  }

  export type EventUpsertWithoutPromotionsInput = {
    update: XOR<EventUpdateWithoutPromotionsInput, EventUncheckedUpdateWithoutPromotionsInput>
    create: XOR<EventCreateWithoutPromotionsInput, EventUncheckedCreateWithoutPromotionsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutPromotionsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutPromotionsInput, EventUncheckedUpdateWithoutPromotionsInput>
  }

  export type EventUpdateWithoutPromotionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    eventSessions?: EventSessionUpdateManyWithoutEventNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutPromotionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
    eventSessions?: EventSessionUncheckedUpdateManyWithoutEventNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserCreateWithoutPointsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventCreateNestedManyWithoutOrganizerInput
    referred?: ReferralUsageCreateNestedManyWithoutReferredInput
    referrer?: ReferralUsageCreateNestedManyWithoutReferrerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPointsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    referred?: ReferralUsageUncheckedCreateNestedManyWithoutReferredInput
    referrer?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
  }

  export type TransactionCreateWithoutPointInput = {
    id?: string
    quantity: number
    totalPrice: number
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    event: EventCreateNestedOneWithoutTransactionsInput
    ticket: TicketCreateNestedOneWithoutTransactionsInput
    voucher?: VoucherCreateNestedOneWithoutTransactionInput
    purchased?: PurchasedTicketCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutPointInput = {
    id?: string
    userId: string
    eventId: string
    ticketId: string
    quantity: number
    totalPrice: number
    voucherId?: string | null
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutPointInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutPointInput, TransactionUncheckedCreateWithoutPointInput>
  }

  export type TransactionCreateManyPointInputEnvelope = {
    data: TransactionCreateManyPointInput | TransactionCreateManyPointInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPointsInput = {
    update: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
    create: XOR<UserCreateWithoutPointsInput, UserUncheckedCreateWithoutPointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPointsInput, UserUncheckedUpdateWithoutPointsInput>
  }

  export type UserUpdateWithoutPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUpdateManyWithoutOrganizerNestedInput
    referred?: ReferralUsageUpdateManyWithoutReferredNestedInput
    referrer?: ReferralUsageUpdateManyWithoutReferrerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    referred?: ReferralUsageUncheckedUpdateManyWithoutReferredNestedInput
    referrer?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutPointInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutPointInput, TransactionUncheckedUpdateWithoutPointInput>
    create: XOR<TransactionCreateWithoutPointInput, TransactionUncheckedCreateWithoutPointInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutPointInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutPointInput, TransactionUncheckedUpdateWithoutPointInput>
  }

  export type TransactionUpdateManyWithWhereWithoutPointInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutPointInput>
  }

  export type UserCreateWithoutVouchersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventCreateNestedManyWithoutOrganizerInput
    points?: PointCreateNestedManyWithoutUserInput
    referred?: ReferralUsageCreateNestedManyWithoutReferredInput
    referrer?: ReferralUsageCreateNestedManyWithoutReferrerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVouchersInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    referred?: ReferralUsageUncheckedCreateNestedManyWithoutReferredInput
    referrer?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVouchersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
  }

  export type ReferralUsageCreateWithoutVoucherInput = {
    id?: string
    createdAt?: Date | string
    referred: UserCreateNestedOneWithoutReferredInput
    referrer: UserCreateNestedOneWithoutReferrerInput
  }

  export type ReferralUsageUncheckedCreateWithoutVoucherInput = {
    id?: string
    referrerId: string
    referredId: string
    createdAt?: Date | string
  }

  export type ReferralUsageCreateOrConnectWithoutVoucherInput = {
    where: ReferralUsageWhereUniqueInput
    create: XOR<ReferralUsageCreateWithoutVoucherInput, ReferralUsageUncheckedCreateWithoutVoucherInput>
  }

  export type ReferralUsageCreateManyVoucherInputEnvelope = {
    data: ReferralUsageCreateManyVoucherInput | ReferralUsageCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutVoucherInput = {
    id?: string
    quantity: number
    totalPrice: number
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTransactionsInput
    event: EventCreateNestedOneWithoutTransactionsInput
    ticket: TicketCreateNestedOneWithoutTransactionsInput
    point?: PointCreateNestedOneWithoutTransactionInput
    purchased?: PurchasedTicketCreateNestedManyWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutVoucherInput = {
    id?: string
    userId: string
    eventId: string
    ticketId: string
    quantity: number
    totalPrice: number
    pointId?: string | null
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutTransactionInput
  }

  export type TransactionCreateOrConnectWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput>
  }

  export type TransactionCreateManyVoucherInputEnvelope = {
    data: TransactionCreateManyVoucherInput | TransactionCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutVouchersInput = {
    update: XOR<UserUpdateWithoutVouchersInput, UserUncheckedUpdateWithoutVouchersInput>
    create: XOR<UserCreateWithoutVouchersInput, UserUncheckedCreateWithoutVouchersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVouchersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVouchersInput, UserUncheckedUpdateWithoutVouchersInput>
  }

  export type UserUpdateWithoutVouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUpdateManyWithoutOrganizerNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    referred?: ReferralUsageUpdateManyWithoutReferredNestedInput
    referrer?: ReferralUsageUpdateManyWithoutReferrerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVouchersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    referred?: ReferralUsageUncheckedUpdateManyWithoutReferredNestedInput
    referrer?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReferralUsageUpsertWithWhereUniqueWithoutVoucherInput = {
    where: ReferralUsageWhereUniqueInput
    update: XOR<ReferralUsageUpdateWithoutVoucherInput, ReferralUsageUncheckedUpdateWithoutVoucherInput>
    create: XOR<ReferralUsageCreateWithoutVoucherInput, ReferralUsageUncheckedCreateWithoutVoucherInput>
  }

  export type ReferralUsageUpdateWithWhereUniqueWithoutVoucherInput = {
    where: ReferralUsageWhereUniqueInput
    data: XOR<ReferralUsageUpdateWithoutVoucherInput, ReferralUsageUncheckedUpdateWithoutVoucherInput>
  }

  export type ReferralUsageUpdateManyWithWhereWithoutVoucherInput = {
    where: ReferralUsageScalarWhereInput
    data: XOR<ReferralUsageUpdateManyMutationInput, ReferralUsageUncheckedUpdateManyWithoutVoucherInput>
  }

  export type TransactionUpsertWithWhereUniqueWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutVoucherInput, TransactionUncheckedUpdateWithoutVoucherInput>
    create: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutVoucherInput, TransactionUncheckedUpdateWithoutVoucherInput>
  }

  export type TransactionUpdateManyWithWhereWithoutVoucherInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutVoucherInput>
  }

  export type UserCreateWithoutReferredInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventCreateNestedManyWithoutOrganizerInput
    points?: PointCreateNestedManyWithoutUserInput
    referrer?: ReferralUsageCreateNestedManyWithoutReferrerInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferredInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    referrer?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferredInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferredInput, UserUncheckedCreateWithoutReferredInput>
  }

  export type UserCreateWithoutReferrerInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventCreateNestedManyWithoutOrganizerInput
    points?: PointCreateNestedManyWithoutUserInput
    referred?: ReferralUsageCreateNestedManyWithoutReferredInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferrerInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    referred?: ReferralUsageUncheckedCreateNestedManyWithoutReferredInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferrerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput>
  }

  export type VoucherCreateWithoutReferralUsageInput = {
    id?: string
    voucherType?: $Enums.voucherType
    discountPercent: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
    user: UserCreateNestedOneWithoutVouchersInput
    Transaction?: TransactionCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUncheckedCreateWithoutReferralUsageInput = {
    id?: string
    voucherType?: $Enums.voucherType
    userId: string
    discountPercent: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
    Transaction?: TransactionUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherCreateOrConnectWithoutReferralUsageInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutReferralUsageInput, VoucherUncheckedCreateWithoutReferralUsageInput>
  }

  export type UserUpsertWithoutReferredInput = {
    update: XOR<UserUpdateWithoutReferredInput, UserUncheckedUpdateWithoutReferredInput>
    create: XOR<UserCreateWithoutReferredInput, UserUncheckedCreateWithoutReferredInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferredInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferredInput, UserUncheckedUpdateWithoutReferredInput>
  }

  export type UserUpdateWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUpdateManyWithoutOrganizerNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    referrer?: ReferralUsageUpdateManyWithoutReferrerNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    referrer?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutReferrerInput = {
    update: XOR<UserUpdateWithoutReferrerInput, UserUncheckedUpdateWithoutReferrerInput>
    create: XOR<UserCreateWithoutReferrerInput, UserUncheckedCreateWithoutReferrerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferrerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferrerInput, UserUncheckedUpdateWithoutReferrerInput>
  }

  export type UserUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUpdateManyWithoutOrganizerNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    referred?: ReferralUsageUpdateManyWithoutReferredNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    referred?: ReferralUsageUncheckedUpdateManyWithoutReferredNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VoucherUpsertWithoutReferralUsageInput = {
    update: XOR<VoucherUpdateWithoutReferralUsageInput, VoucherUncheckedUpdateWithoutReferralUsageInput>
    create: XOR<VoucherCreateWithoutReferralUsageInput, VoucherUncheckedCreateWithoutReferralUsageInput>
    where?: VoucherWhereInput
  }

  export type VoucherUpdateToOneWithWhereWithoutReferralUsageInput = {
    where?: VoucherWhereInput
    data: XOR<VoucherUpdateWithoutReferralUsageInput, VoucherUncheckedUpdateWithoutReferralUsageInput>
  }

  export type VoucherUpdateWithoutReferralUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherType?: EnumvoucherTypeFieldUpdateOperationsInput | $Enums.voucherType
    discountPercent?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutVouchersNestedInput
    Transaction?: TransactionUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateWithoutReferralUsageInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherType?: EnumvoucherTypeFieldUpdateOperationsInput | $Enums.voucherType
    userId?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    Transaction?: TransactionUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type EventCreateWithoutReviewsInput = {
    id?: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
    organizer: UserCreateNestedOneWithoutEventsInput
    eventSessions?: EventSessionCreateNestedManyWithoutEventInput
    promotions?: PromotionCreateNestedManyWithoutEventInput
    tickets?: TicketCreateNestedManyWithoutEventInput
    transactions?: TransactionCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutReviewsInput = {
    id?: string
    organizerId: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
    eventSessions?: EventSessionUncheckedCreateNestedManyWithoutEventInput
    promotions?: PromotionUncheckedCreateNestedManyWithoutEventInput
    tickets?: TicketUncheckedCreateNestedManyWithoutEventInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutReviewsInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventCreateNestedManyWithoutOrganizerInput
    points?: PointCreateNestedManyWithoutUserInput
    referred?: ReferralUsageCreateNestedManyWithoutReferredInput
    referrer?: ReferralUsageCreateNestedManyWithoutReferrerInput
    transactions?: TransactionCreateNestedManyWithoutUserInput
    vouchers?: VoucherCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    referralCode: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isVerify?: boolean
    ReferredById?: string | null
    city?: string | null
    dob?: string | null
    houseNumber?: string | null
    lastName?: string | null
    state?: string | null
    street?: string | null
    zipCode?: string | null
    regionNumber?: string | null
    phoneNumber?: string | null
    avatar?: string | null
    events?: EventUncheckedCreateNestedManyWithoutOrganizerInput
    points?: PointUncheckedCreateNestedManyWithoutUserInput
    referred?: ReferralUsageUncheckedCreateNestedManyWithoutReferredInput
    referrer?: ReferralUsageUncheckedCreateNestedManyWithoutReferrerInput
    transactions?: TransactionUncheckedCreateNestedManyWithoutUserInput
    vouchers?: VoucherUncheckedCreateNestedManyWithoutUserInput
    purchased?: PurchasedTicketUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type PurchasedTicketCreateWithoutReviewInput = {
    id?: string
    createdAt?: Date | string
    session: EventSessionCreateNestedOneWithoutPurchasedTicketInput
    transaction: TransactionCreateNestedOneWithoutPurchasedInput
    ticket: TicketCreateNestedOneWithoutPurchasedInput
    user: UserCreateNestedOneWithoutPurchasedInput
  }

  export type PurchasedTicketUncheckedCreateWithoutReviewInput = {
    id?: string
    transactionId: string
    ticketId: string
    sessionId: string
    userId: string
    createdAt?: Date | string
  }

  export type PurchasedTicketCreateOrConnectWithoutReviewInput = {
    where: PurchasedTicketWhereUniqueInput
    create: XOR<PurchasedTicketCreateWithoutReviewInput, PurchasedTicketUncheckedCreateWithoutReviewInput>
  }

  export type EventUpsertWithoutReviewsInput = {
    update: XOR<EventUpdateWithoutReviewsInput, EventUncheckedUpdateWithoutReviewsInput>
    create: XOR<EventCreateWithoutReviewsInput, EventUncheckedCreateWithoutReviewsInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutReviewsInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutReviewsInput, EventUncheckedUpdateWithoutReviewsInput>
  }

  export type EventUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
    organizer?: UserUpdateOneRequiredWithoutEventsNestedInput
    eventSessions?: EventSessionUpdateManyWithoutEventNestedInput
    promotions?: PromotionUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizerId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
    eventSessions?: EventSessionUncheckedUpdateManyWithoutEventNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUpdateManyWithoutOrganizerNestedInput
    points?: PointUpdateManyWithoutUserNestedInput
    referred?: ReferralUsageUpdateManyWithoutReferredNestedInput
    referrer?: ReferralUsageUpdateManyWithoutReferrerNestedInput
    transactions?: TransactionUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    referralCode?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isVerify?: BoolFieldUpdateOperationsInput | boolean
    ReferredById?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableStringFieldUpdateOperationsInput | string | null
    houseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    street?: NullableStringFieldUpdateOperationsInput | string | null
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    regionNumber?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUncheckedUpdateManyWithoutOrganizerNestedInput
    points?: PointUncheckedUpdateManyWithoutUserNestedInput
    referred?: ReferralUsageUncheckedUpdateManyWithoutReferredNestedInput
    referrer?: ReferralUsageUncheckedUpdateManyWithoutReferrerNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    vouchers?: VoucherUncheckedUpdateManyWithoutUserNestedInput
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PurchasedTicketUpsertWithoutReviewInput = {
    update: XOR<PurchasedTicketUpdateWithoutReviewInput, PurchasedTicketUncheckedUpdateWithoutReviewInput>
    create: XOR<PurchasedTicketCreateWithoutReviewInput, PurchasedTicketUncheckedCreateWithoutReviewInput>
    where?: PurchasedTicketWhereInput
  }

  export type PurchasedTicketUpdateToOneWithWhereWithoutReviewInput = {
    where?: PurchasedTicketWhereInput
    data: XOR<PurchasedTicketUpdateWithoutReviewInput, PurchasedTicketUncheckedUpdateWithoutReviewInput>
  }

  export type PurchasedTicketUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: EventSessionUpdateOneRequiredWithoutPurchasedTicketNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutPurchasedNestedInput
    ticket?: TicketUpdateOneRequiredWithoutPurchasedNestedInput
    user?: UserUpdateOneRequiredWithoutPurchasedNestedInput
  }

  export type PurchasedTicketUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateManyOrganizerInput = {
    id?: string
    title: string
    totalIncome?: number
    category?: $Enums.EventCategory
    image: string
    createdAt?: Date | string
    updatedAt?: Date | string
    attendees?: number
  }

  export type PointCreateManyUserInput = {
    id?: string
    amount: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
  }

  export type ReferralUsageCreateManyReferredInput = {
    id?: string
    referrerId: string
    voucherId?: string | null
    createdAt?: Date | string
  }

  export type ReferralUsageCreateManyReferrerInput = {
    id?: string
    referredId: string
    voucherId?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    eventId: string
    purchasedTicketId: string
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    eventId: string
    ticketId: string
    quantity: number
    totalPrice: number
    voucherId?: string | null
    pointId?: string | null
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
  }

  export type VoucherCreateManyUserInput = {
    id?: string
    voucherType?: $Enums.voucherType
    discountPercent: number
    expiresAt: Date | string
    createdAt?: Date | string
    used?: boolean
  }

  export type PurchasedTicketCreateManyUserInput = {
    id?: string
    transactionId: string
    ticketId: string
    sessionId: string
    createdAt?: Date | string
  }

  export type EventUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
    eventSessions?: EventSessionUpdateManyWithoutEventNestedInput
    promotions?: PromotionUpdateManyWithoutEventNestedInput
    reviews?: ReviewUpdateManyWithoutEventNestedInput
    tickets?: TicketUpdateManyWithoutEventNestedInput
    transactions?: TransactionUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
    eventSessions?: EventSessionUncheckedUpdateManyWithoutEventNestedInput
    promotions?: PromotionUncheckedUpdateManyWithoutEventNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutEventNestedInput
    transactions?: TransactionUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutOrganizerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    totalIncome?: IntFieldUpdateOperationsInput | number
    category?: EnumEventCategoryFieldUpdateOperationsInput | $Enums.EventCategory
    image?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    attendees?: IntFieldUpdateOperationsInput | number
  }

  export type PointUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    Transaction?: TransactionUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    Transaction?: TransactionUncheckedUpdateManyWithoutPointNestedInput
  }

  export type PointUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReferralUsageUpdateWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referrer?: UserUpdateOneRequiredWithoutReferrerNestedInput
    voucher?: VoucherUpdateOneWithoutReferralUsageNestedInput
  }

  export type ReferralUsageUncheckedUpdateWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUsageUncheckedUpdateManyWithoutReferredInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUsageUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referred?: UserUpdateOneRequiredWithoutReferredNestedInput
    voucher?: VoucherUpdateOneWithoutReferralUsageNestedInput
  }

  export type ReferralUsageUncheckedUpdateWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUsageUncheckedUpdateManyWithoutReferrerInput = {
    id?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutReviewsNestedInput
    purchasedTicket?: PurchasedTicketUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    purchasedTicketId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    purchasedTicketId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    ticket?: TicketUpdateOneRequiredWithoutTransactionsNestedInput
    voucher?: VoucherUpdateOneWithoutTransactionNestedInput
    point?: PointUpdateOneWithoutTransactionNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherType?: EnumvoucherTypeFieldUpdateOperationsInput | $Enums.voucherType
    discountPercent?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    ReferralUsage?: ReferralUsageUpdateManyWithoutVoucherNestedInput
    Transaction?: TransactionUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherType?: EnumvoucherTypeFieldUpdateOperationsInput | $Enums.voucherType
    discountPercent?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
    ReferralUsage?: ReferralUsageUncheckedUpdateManyWithoutVoucherNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    voucherType?: EnumvoucherTypeFieldUpdateOperationsInput | $Enums.voucherType
    discountPercent?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    used?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PurchasedTicketUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: EventSessionUpdateOneRequiredWithoutPurchasedTicketNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutPurchasedNestedInput
    ticket?: TicketUpdateOneRequiredWithoutPurchasedNestedInput
    Review?: ReviewUpdateManyWithoutPurchasedTicketNestedInput
  }

  export type PurchasedTicketUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Review?: ReviewUncheckedUpdateManyWithoutPurchasedTicketNestedInput
  }

  export type PurchasedTicketUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventSessionCreateManyEventInput = {
    id?: string
    date: string
    time: string
    location: string
  }

  export type PromotionCreateManyEventInput = {
    id?: string
    type: $Enums.PromotionType
    code: string
    discountValue: number
    maxUsage?: number | null
    usageCount?: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type ReviewCreateManyEventInput = {
    id?: string
    userId: string
    purchasedTicketId: string
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type TicketCreateManyEventInput = {
    id?: string
    sessionId: string
    price: number
    category: $Enums.TicketCategory
    seatAvailable: number
  }

  export type TransactionCreateManyEventInput = {
    id?: string
    userId: string
    ticketId: string
    quantity: number
    totalPrice: number
    voucherId?: string | null
    pointId?: string | null
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
  }

  export type EventSessionUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUpdateManyWithoutSessionNestedInput
    PurchasedTicket?: PurchasedTicketUpdateManyWithoutSessionNestedInput
  }

  export type EventSessionUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    tickets?: TicketUncheckedUpdateManyWithoutSessionNestedInput
    PurchasedTicket?: PurchasedTicketUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type EventSessionUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: StringFieldUpdateOperationsInput | string
    time?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type PromotionUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    maxUsage?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    maxUsage?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PromotionUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumPromotionTypeFieldUpdateOperationsInput | $Enums.PromotionType
    code?: StringFieldUpdateOperationsInput | string
    discountValue?: IntFieldUpdateOperationsInput | number
    maxUsage?: NullableIntFieldUpdateOperationsInput | number | null
    usageCount?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    purchasedTicket?: PurchasedTicketUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purchasedTicketId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    purchasedTicketId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    seatAvailable?: IntFieldUpdateOperationsInput | number
    session?: EventSessionUpdateOneRequiredWithoutTicketsNestedInput
    transactions?: TransactionUpdateManyWithoutTicketNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    seatAvailable?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    seatAvailable?: IntFieldUpdateOperationsInput | number
  }

  export type TransactionUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    ticket?: TicketUpdateOneRequiredWithoutTransactionsNestedInput
    voucher?: VoucherUpdateOneWithoutTransactionNestedInput
    point?: PointUpdateOneWithoutTransactionNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManySessionInput = {
    id?: string
    eventId?: string | null
    price: number
    category: $Enums.TicketCategory
    seatAvailable: number
  }

  export type PurchasedTicketCreateManySessionInput = {
    id?: string
    transactionId: string
    ticketId: string
    userId: string
    createdAt?: Date | string
  }

  export type TicketUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    seatAvailable?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionUpdateManyWithoutTicketNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutTicketNestedInput
    Event?: EventUpdateOneWithoutTicketsNestedInput
  }

  export type TicketUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    seatAvailable?: IntFieldUpdateOperationsInput | number
    transactions?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: NullableStringFieldUpdateOperationsInput | string | null
    price?: IntFieldUpdateOperationsInput | number
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    seatAvailable?: IntFieldUpdateOperationsInput | number
  }

  export type PurchasedTicketUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: TransactionUpdateOneRequiredWithoutPurchasedNestedInput
    ticket?: TicketUpdateOneRequiredWithoutPurchasedNestedInput
    user?: UserUpdateOneRequiredWithoutPurchasedNestedInput
    Review?: ReviewUpdateManyWithoutPurchasedTicketNestedInput
  }

  export type PurchasedTicketUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Review?: ReviewUncheckedUpdateManyWithoutPurchasedTicketNestedInput
  }

  export type PurchasedTicketUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyTicketInput = {
    id?: string
    userId: string
    eventId: string
    quantity: number
    totalPrice: number
    voucherId?: string | null
    pointId?: string | null
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
  }

  export type PurchasedTicketCreateManyTicketInput = {
    id?: string
    transactionId: string
    sessionId: string
    userId: string
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    voucher?: VoucherUpdateOneWithoutTransactionNestedInput
    point?: PointUpdateOneWithoutTransactionNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedTicketUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: EventSessionUpdateOneRequiredWithoutPurchasedTicketNestedInput
    transaction?: TransactionUpdateOneRequiredWithoutPurchasedNestedInput
    user?: UserUpdateOneRequiredWithoutPurchasedNestedInput
    Review?: ReviewUpdateManyWithoutPurchasedTicketNestedInput
  }

  export type PurchasedTicketUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Review?: ReviewUncheckedUpdateManyWithoutPurchasedTicketNestedInput
  }

  export type PurchasedTicketUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PurchasedTicketCreateManyTransactionInput = {
    id?: string
    ticketId: string
    sessionId: string
    userId: string
    createdAt?: Date | string
  }

  export type PurchasedTicketUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: EventSessionUpdateOneRequiredWithoutPurchasedTicketNestedInput
    ticket?: TicketUpdateOneRequiredWithoutPurchasedNestedInput
    user?: UserUpdateOneRequiredWithoutPurchasedNestedInput
    Review?: ReviewUpdateManyWithoutPurchasedTicketNestedInput
  }

  export type PurchasedTicketUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Review?: ReviewUncheckedUpdateManyWithoutPurchasedTicketNestedInput
  }

  export type PurchasedTicketUncheckedUpdateManyWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyPurchasedTicketInput = {
    id?: string
    eventId: string
    userId: string
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type ReviewUpdateWithoutPurchasedTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutReviewsNestedInput
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutPurchasedTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutPurchasedTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyPointInput = {
    id?: string
    userId: string
    eventId: string
    ticketId: string
    quantity: number
    totalPrice: number
    voucherId?: string | null
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
  }

  export type TransactionUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    ticket?: TicketUpdateOneRequiredWithoutTransactionsNestedInput
    voucher?: VoucherUpdateOneWithoutTransactionNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUsageCreateManyVoucherInput = {
    id?: string
    referrerId: string
    referredId: string
    createdAt?: Date | string
  }

  export type TransactionCreateManyVoucherInput = {
    id?: string
    userId: string
    eventId: string
    ticketId: string
    quantity: number
    totalPrice: number
    pointId?: string | null
    status?: $Enums.statusTransaction
    invoiceUrl?: string | null
    createdAt?: Date | string
    expireAt: Date | string
    updatedAt?: Date | string
  }

  export type ReferralUsageUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referred?: UserUpdateOneRequiredWithoutReferredNestedInput
    referrer?: UserUpdateOneRequiredWithoutReferrerNestedInput
  }

  export type ReferralUsageUncheckedUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralUsageUncheckedUpdateManyWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    referrerId?: StringFieldUpdateOperationsInput | string
    referredId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTransactionsNestedInput
    event?: EventUpdateOneRequiredWithoutTransactionsNestedInput
    ticket?: TicketUpdateOneRequiredWithoutTransactionsNestedInput
    point?: PointUpdateOneWithoutTransactionNestedInput
    purchased?: PurchasedTicketUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    purchased?: PurchasedTicketUncheckedUpdateManyWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateManyWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalPrice?: IntFieldUpdateOperationsInput | number
    pointId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumstatusTransactionFieldUpdateOperationsInput | $Enums.statusTransaction
    invoiceUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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