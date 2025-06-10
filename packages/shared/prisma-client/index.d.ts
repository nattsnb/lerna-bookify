
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
 * Model AmenityToVenue
 * 
 */
export type AmenityToVenue = $Result.DefaultSelection<Prisma.$AmenityToVenuePayload>
/**
 * Model Amenity
 * 
 */
export type Amenity = $Result.DefaultSelection<Prisma.$AmenityPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Favourite
 * 
 */
export type Favourite = $Result.DefaultSelection<Prisma.$FavouritePayload>
/**
 * Model Occasion
 * 
 */
export type Occasion = $Result.DefaultSelection<Prisma.$OccasionPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model Reservation
 * 
 */
export type Reservation = $Result.DefaultSelection<Prisma.$ReservationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Venue
 * 
 */
export type Venue = $Result.DefaultSelection<Prisma.$VenuePayload>
/**
 * Model VenueType
 * 
 */
export type VenueType = $Result.DefaultSelection<Prisma.$VenueTypePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AmenityToVenues
 * const amenityToVenues = await prisma.amenityToVenue.findMany()
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
   * // Fetch zero or more AmenityToVenues
   * const amenityToVenues = await prisma.amenityToVenue.findMany()
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
   * `prisma.amenityToVenue`: Exposes CRUD operations for the **AmenityToVenue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AmenityToVenues
    * const amenityToVenues = await prisma.amenityToVenue.findMany()
    * ```
    */
  get amenityToVenue(): Prisma.AmenityToVenueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amenity`: Exposes CRUD operations for the **Amenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amenities
    * const amenities = await prisma.amenity.findMany()
    * ```
    */
  get amenity(): Prisma.AmenityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favourite`: Exposes CRUD operations for the **Favourite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favourites
    * const favourites = await prisma.favourite.findMany()
    * ```
    */
  get favourite(): Prisma.FavouriteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.occasion`: Exposes CRUD operations for the **Occasion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Occasions
    * const occasions = await prisma.occasion.findMany()
    * ```
    */
  get occasion(): Prisma.OccasionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reservation`: Exposes CRUD operations for the **Reservation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservations
    * const reservations = await prisma.reservation.findMany()
    * ```
    */
  get reservation(): Prisma.ReservationDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.venue`: Exposes CRUD operations for the **Venue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Venues
    * const venues = await prisma.venue.findMany()
    * ```
    */
  get venue(): Prisma.VenueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.venueType`: Exposes CRUD operations for the **VenueType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VenueTypes
    * const venueTypes = await prisma.venueType.findMany()
    * ```
    */
  get venueType(): Prisma.VenueTypeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    AmenityToVenue: 'AmenityToVenue',
    Amenity: 'Amenity',
    Category: 'Category',
    Favourite: 'Favourite',
    Occasion: 'Occasion',
    Rating: 'Rating',
    Reservation: 'Reservation',
    User: 'User',
    Venue: 'Venue',
    VenueType: 'VenueType'
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
      modelProps: "amenityToVenue" | "amenity" | "category" | "favourite" | "occasion" | "rating" | "reservation" | "user" | "venue" | "venueType"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AmenityToVenue: {
        payload: Prisma.$AmenityToVenuePayload<ExtArgs>
        fields: Prisma.AmenityToVenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmenityToVenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityToVenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmenityToVenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityToVenuePayload>
          }
          findFirst: {
            args: Prisma.AmenityToVenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityToVenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmenityToVenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityToVenuePayload>
          }
          findMany: {
            args: Prisma.AmenityToVenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityToVenuePayload>[]
          }
          create: {
            args: Prisma.AmenityToVenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityToVenuePayload>
          }
          createMany: {
            args: Prisma.AmenityToVenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmenityToVenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityToVenuePayload>[]
          }
          delete: {
            args: Prisma.AmenityToVenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityToVenuePayload>
          }
          update: {
            args: Prisma.AmenityToVenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityToVenuePayload>
          }
          deleteMany: {
            args: Prisma.AmenityToVenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmenityToVenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmenityToVenueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityToVenuePayload>[]
          }
          upsert: {
            args: Prisma.AmenityToVenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityToVenuePayload>
          }
          aggregate: {
            args: Prisma.AmenityToVenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmenityToVenue>
          }
          groupBy: {
            args: Prisma.AmenityToVenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmenityToVenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmenityToVenueCountArgs<ExtArgs>
            result: $Utils.Optional<AmenityToVenueCountAggregateOutputType> | number
          }
        }
      }
      Amenity: {
        payload: Prisma.$AmenityPayload<ExtArgs>
        fields: Prisma.AmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findFirst: {
            args: Prisma.AmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findMany: {
            args: Prisma.AmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          create: {
            args: Prisma.AmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          createMany: {
            args: Prisma.AmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AmenityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          delete: {
            args: Prisma.AmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          update: {
            args: Prisma.AmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          deleteMany: {
            args: Prisma.AmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AmenityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          upsert: {
            args: Prisma.AmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          aggregate: {
            args: Prisma.AmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmenity>
          }
          groupBy: {
            args: Prisma.AmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmenityCountArgs<ExtArgs>
            result: $Utils.Optional<AmenityCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Favourite: {
        payload: Prisma.$FavouritePayload<ExtArgs>
        fields: Prisma.FavouriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavouriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavouriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          findFirst: {
            args: Prisma.FavouriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavouriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          findMany: {
            args: Prisma.FavouriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>[]
          }
          create: {
            args: Prisma.FavouriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          createMany: {
            args: Prisma.FavouriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavouriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>[]
          }
          delete: {
            args: Prisma.FavouriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          update: {
            args: Prisma.FavouriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          deleteMany: {
            args: Prisma.FavouriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavouriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavouriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>[]
          }
          upsert: {
            args: Prisma.FavouriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritePayload>
          }
          aggregate: {
            args: Prisma.FavouriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavourite>
          }
          groupBy: {
            args: Prisma.FavouriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavouriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavouriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavouriteCountAggregateOutputType> | number
          }
        }
      }
      Occasion: {
        payload: Prisma.$OccasionPayload<ExtArgs>
        fields: Prisma.OccasionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OccasionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccasionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OccasionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccasionPayload>
          }
          findFirst: {
            args: Prisma.OccasionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccasionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OccasionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccasionPayload>
          }
          findMany: {
            args: Prisma.OccasionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccasionPayload>[]
          }
          create: {
            args: Prisma.OccasionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccasionPayload>
          }
          createMany: {
            args: Prisma.OccasionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OccasionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccasionPayload>[]
          }
          delete: {
            args: Prisma.OccasionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccasionPayload>
          }
          update: {
            args: Prisma.OccasionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccasionPayload>
          }
          deleteMany: {
            args: Prisma.OccasionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OccasionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OccasionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccasionPayload>[]
          }
          upsert: {
            args: Prisma.OccasionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OccasionPayload>
          }
          aggregate: {
            args: Prisma.OccasionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOccasion>
          }
          groupBy: {
            args: Prisma.OccasionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OccasionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OccasionCountArgs<ExtArgs>
            result: $Utils.Optional<OccasionCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      Reservation: {
        payload: Prisma.$ReservationPayload<ExtArgs>
        fields: Prisma.ReservationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findFirst: {
            args: Prisma.ReservationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          findMany: {
            args: Prisma.ReservationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          create: {
            args: Prisma.ReservationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          createMany: {
            args: Prisma.ReservationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          delete: {
            args: Prisma.ReservationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          update: {
            args: Prisma.ReservationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          deleteMany: {
            args: Prisma.ReservationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>[]
          }
          upsert: {
            args: Prisma.ReservationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservationPayload>
          }
          aggregate: {
            args: Prisma.ReservationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReservation>
          }
          groupBy: {
            args: Prisma.ReservationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservationCountArgs<ExtArgs>
            result: $Utils.Optional<ReservationCountAggregateOutputType> | number
          }
        }
      }
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
      Venue: {
        payload: Prisma.$VenuePayload<ExtArgs>
        fields: Prisma.VenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findFirst: {
            args: Prisma.VenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          findMany: {
            args: Prisma.VenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          create: {
            args: Prisma.VenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          createMany: {
            args: Prisma.VenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          delete: {
            args: Prisma.VenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          update: {
            args: Prisma.VenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          deleteMany: {
            args: Prisma.VenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>[]
          }
          upsert: {
            args: Prisma.VenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenuePayload>
          }
          aggregate: {
            args: Prisma.VenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenue>
          }
          groupBy: {
            args: Prisma.VenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueCountArgs<ExtArgs>
            result: $Utils.Optional<VenueCountAggregateOutputType> | number
          }
        }
      }
      VenueType: {
        payload: Prisma.$VenueTypePayload<ExtArgs>
        fields: Prisma.VenueTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VenueTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VenueTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>
          }
          findFirst: {
            args: Prisma.VenueTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VenueTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>
          }
          findMany: {
            args: Prisma.VenueTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>[]
          }
          create: {
            args: Prisma.VenueTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>
          }
          createMany: {
            args: Prisma.VenueTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VenueTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>[]
          }
          delete: {
            args: Prisma.VenueTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>
          }
          update: {
            args: Prisma.VenueTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>
          }
          deleteMany: {
            args: Prisma.VenueTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VenueTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VenueTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>[]
          }
          upsert: {
            args: Prisma.VenueTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VenueTypePayload>
          }
          aggregate: {
            args: Prisma.VenueTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVenueType>
          }
          groupBy: {
            args: Prisma.VenueTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VenueTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VenueTypeCountArgs<ExtArgs>
            result: $Utils.Optional<VenueTypeCountAggregateOutputType> | number
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
    amenityToVenue?: AmenityToVenueOmit
    amenity?: AmenityOmit
    category?: CategoryOmit
    favourite?: FavouriteOmit
    occasion?: OccasionOmit
    rating?: RatingOmit
    reservation?: ReservationOmit
    user?: UserOmit
    venue?: VenueOmit
    venueType?: VenueTypeOmit
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
   * Count Type AmenityCountOutputType
   */

  export type AmenityCountOutputType = {
    occasions: number
    amenityToVenues: number
  }

  export type AmenityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    occasions?: boolean | AmenityCountOutputTypeCountOccasionsArgs
    amenityToVenues?: boolean | AmenityCountOutputTypeCountAmenityToVenuesArgs
  }

  // Custom InputTypes
  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityCountOutputType
     */
    select?: AmenityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeCountOccasionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccasionWhereInput
  }

  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeCountAmenityToVenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityToVenueWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    amenities: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amenities?: boolean | CategoryCountOutputTypeCountAmenitiesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityWhereInput
  }


  /**
   * Count Type OccasionCountOutputType
   */

  export type OccasionCountOutputType = {
    amenities: number
  }

  export type OccasionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amenities?: boolean | OccasionCountOutputTypeCountAmenitiesArgs
  }

  // Custom InputTypes
  /**
   * OccasionCountOutputType without action
   */
  export type OccasionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OccasionCountOutputType
     */
    select?: OccasionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OccasionCountOutputType without action
   */
  export type OccasionCountOutputTypeCountAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    venues: number
    reservations: number
    favourites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venues?: boolean | UserCountOutputTypeCountVenuesArgs
    reservations?: boolean | UserCountOutputTypeCountReservationsArgs
    favourites?: boolean | UserCountOutputTypeCountFavouritesArgs
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
  export type UserCountOutputTypeCountVenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteWhereInput
  }


  /**
   * Count Type VenueCountOutputType
   */

  export type VenueCountOutputType = {
    reservations: number
    favourites: number
    amenityToVenues: number
  }

  export type VenueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservations?: boolean | VenueCountOutputTypeCountReservationsArgs
    favourites?: boolean | VenueCountOutputTypeCountFavouritesArgs
    amenityToVenues?: boolean | VenueCountOutputTypeCountAmenityToVenuesArgs
  }

  // Custom InputTypes
  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueCountOutputType
     */
    select?: VenueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountReservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteWhereInput
  }

  /**
   * VenueCountOutputType without action
   */
  export type VenueCountOutputTypeCountAmenityToVenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityToVenueWhereInput
  }


  /**
   * Count Type VenueTypeCountOutputType
   */

  export type VenueTypeCountOutputType = {
    venues: number
  }

  export type VenueTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venues?: boolean | VenueTypeCountOutputTypeCountVenuesArgs
  }

  // Custom InputTypes
  /**
   * VenueTypeCountOutputType without action
   */
  export type VenueTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueTypeCountOutputType
     */
    select?: VenueTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VenueTypeCountOutputType without action
   */
  export type VenueTypeCountOutputTypeCountVenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AmenityToVenue
   */

  export type AggregateAmenityToVenue = {
    _count: AmenityToVenueCountAggregateOutputType | null
    _avg: AmenityToVenueAvgAggregateOutputType | null
    _sum: AmenityToVenueSumAggregateOutputType | null
    _min: AmenityToVenueMinAggregateOutputType | null
    _max: AmenityToVenueMaxAggregateOutputType | null
  }

  export type AmenityToVenueAvgAggregateOutputType = {
    venueId: number | null
    amenityId: number | null
  }

  export type AmenityToVenueSumAggregateOutputType = {
    venueId: number | null
    amenityId: number | null
  }

  export type AmenityToVenueMinAggregateOutputType = {
    venueId: number | null
    amenityId: number | null
  }

  export type AmenityToVenueMaxAggregateOutputType = {
    venueId: number | null
    amenityId: number | null
  }

  export type AmenityToVenueCountAggregateOutputType = {
    venueId: number
    amenityId: number
    _all: number
  }


  export type AmenityToVenueAvgAggregateInputType = {
    venueId?: true
    amenityId?: true
  }

  export type AmenityToVenueSumAggregateInputType = {
    venueId?: true
    amenityId?: true
  }

  export type AmenityToVenueMinAggregateInputType = {
    venueId?: true
    amenityId?: true
  }

  export type AmenityToVenueMaxAggregateInputType = {
    venueId?: true
    amenityId?: true
  }

  export type AmenityToVenueCountAggregateInputType = {
    venueId?: true
    amenityId?: true
    _all?: true
  }

  export type AmenityToVenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AmenityToVenue to aggregate.
     */
    where?: AmenityToVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmenityToVenues to fetch.
     */
    orderBy?: AmenityToVenueOrderByWithRelationInput | AmenityToVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmenityToVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmenityToVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmenityToVenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AmenityToVenues
    **/
    _count?: true | AmenityToVenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmenityToVenueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmenityToVenueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmenityToVenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmenityToVenueMaxAggregateInputType
  }

  export type GetAmenityToVenueAggregateType<T extends AmenityToVenueAggregateArgs> = {
        [P in keyof T & keyof AggregateAmenityToVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmenityToVenue[P]>
      : GetScalarType<T[P], AggregateAmenityToVenue[P]>
  }




  export type AmenityToVenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityToVenueWhereInput
    orderBy?: AmenityToVenueOrderByWithAggregationInput | AmenityToVenueOrderByWithAggregationInput[]
    by: AmenityToVenueScalarFieldEnum[] | AmenityToVenueScalarFieldEnum
    having?: AmenityToVenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmenityToVenueCountAggregateInputType | true
    _avg?: AmenityToVenueAvgAggregateInputType
    _sum?: AmenityToVenueSumAggregateInputType
    _min?: AmenityToVenueMinAggregateInputType
    _max?: AmenityToVenueMaxAggregateInputType
  }

  export type AmenityToVenueGroupByOutputType = {
    venueId: number
    amenityId: number
    _count: AmenityToVenueCountAggregateOutputType | null
    _avg: AmenityToVenueAvgAggregateOutputType | null
    _sum: AmenityToVenueSumAggregateOutputType | null
    _min: AmenityToVenueMinAggregateOutputType | null
    _max: AmenityToVenueMaxAggregateOutputType | null
  }

  type GetAmenityToVenueGroupByPayload<T extends AmenityToVenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmenityToVenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmenityToVenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmenityToVenueGroupByOutputType[P]>
            : GetScalarType<T[P], AmenityToVenueGroupByOutputType[P]>
        }
      >
    >


  export type AmenityToVenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    venueId?: boolean
    amenityId?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenityToVenue"]>

  export type AmenityToVenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    venueId?: boolean
    amenityId?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenityToVenue"]>

  export type AmenityToVenueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    venueId?: boolean
    amenityId?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenityToVenue"]>

  export type AmenityToVenueSelectScalar = {
    venueId?: boolean
    amenityId?: boolean
  }

  export type AmenityToVenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"venueId" | "amenityId", ExtArgs["result"]["amenityToVenue"]>
  export type AmenityToVenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }
  export type AmenityToVenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }
  export type AmenityToVenueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }

  export type $AmenityToVenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AmenityToVenue"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      amenity: Prisma.$AmenityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      venueId: number
      amenityId: number
    }, ExtArgs["result"]["amenityToVenue"]>
    composites: {}
  }

  type AmenityToVenueGetPayload<S extends boolean | null | undefined | AmenityToVenueDefaultArgs> = $Result.GetResult<Prisma.$AmenityToVenuePayload, S>

  type AmenityToVenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmenityToVenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmenityToVenueCountAggregateInputType | true
    }

  export interface AmenityToVenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AmenityToVenue'], meta: { name: 'AmenityToVenue' } }
    /**
     * Find zero or one AmenityToVenue that matches the filter.
     * @param {AmenityToVenueFindUniqueArgs} args - Arguments to find a AmenityToVenue
     * @example
     * // Get one AmenityToVenue
     * const amenityToVenue = await prisma.amenityToVenue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmenityToVenueFindUniqueArgs>(args: SelectSubset<T, AmenityToVenueFindUniqueArgs<ExtArgs>>): Prisma__AmenityToVenueClient<$Result.GetResult<Prisma.$AmenityToVenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AmenityToVenue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmenityToVenueFindUniqueOrThrowArgs} args - Arguments to find a AmenityToVenue
     * @example
     * // Get one AmenityToVenue
     * const amenityToVenue = await prisma.amenityToVenue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmenityToVenueFindUniqueOrThrowArgs>(args: SelectSubset<T, AmenityToVenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmenityToVenueClient<$Result.GetResult<Prisma.$AmenityToVenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AmenityToVenue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityToVenueFindFirstArgs} args - Arguments to find a AmenityToVenue
     * @example
     * // Get one AmenityToVenue
     * const amenityToVenue = await prisma.amenityToVenue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmenityToVenueFindFirstArgs>(args?: SelectSubset<T, AmenityToVenueFindFirstArgs<ExtArgs>>): Prisma__AmenityToVenueClient<$Result.GetResult<Prisma.$AmenityToVenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AmenityToVenue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityToVenueFindFirstOrThrowArgs} args - Arguments to find a AmenityToVenue
     * @example
     * // Get one AmenityToVenue
     * const amenityToVenue = await prisma.amenityToVenue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmenityToVenueFindFirstOrThrowArgs>(args?: SelectSubset<T, AmenityToVenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmenityToVenueClient<$Result.GetResult<Prisma.$AmenityToVenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AmenityToVenues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityToVenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AmenityToVenues
     * const amenityToVenues = await prisma.amenityToVenue.findMany()
     * 
     * // Get first 10 AmenityToVenues
     * const amenityToVenues = await prisma.amenityToVenue.findMany({ take: 10 })
     * 
     * // Only select the `venueId`
     * const amenityToVenueWithVenueIdOnly = await prisma.amenityToVenue.findMany({ select: { venueId: true } })
     * 
     */
    findMany<T extends AmenityToVenueFindManyArgs>(args?: SelectSubset<T, AmenityToVenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityToVenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AmenityToVenue.
     * @param {AmenityToVenueCreateArgs} args - Arguments to create a AmenityToVenue.
     * @example
     * // Create one AmenityToVenue
     * const AmenityToVenue = await prisma.amenityToVenue.create({
     *   data: {
     *     // ... data to create a AmenityToVenue
     *   }
     * })
     * 
     */
    create<T extends AmenityToVenueCreateArgs>(args: SelectSubset<T, AmenityToVenueCreateArgs<ExtArgs>>): Prisma__AmenityToVenueClient<$Result.GetResult<Prisma.$AmenityToVenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AmenityToVenues.
     * @param {AmenityToVenueCreateManyArgs} args - Arguments to create many AmenityToVenues.
     * @example
     * // Create many AmenityToVenues
     * const amenityToVenue = await prisma.amenityToVenue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmenityToVenueCreateManyArgs>(args?: SelectSubset<T, AmenityToVenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AmenityToVenues and returns the data saved in the database.
     * @param {AmenityToVenueCreateManyAndReturnArgs} args - Arguments to create many AmenityToVenues.
     * @example
     * // Create many AmenityToVenues
     * const amenityToVenue = await prisma.amenityToVenue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AmenityToVenues and only return the `venueId`
     * const amenityToVenueWithVenueIdOnly = await prisma.amenityToVenue.createManyAndReturn({
     *   select: { venueId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmenityToVenueCreateManyAndReturnArgs>(args?: SelectSubset<T, AmenityToVenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityToVenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AmenityToVenue.
     * @param {AmenityToVenueDeleteArgs} args - Arguments to delete one AmenityToVenue.
     * @example
     * // Delete one AmenityToVenue
     * const AmenityToVenue = await prisma.amenityToVenue.delete({
     *   where: {
     *     // ... filter to delete one AmenityToVenue
     *   }
     * })
     * 
     */
    delete<T extends AmenityToVenueDeleteArgs>(args: SelectSubset<T, AmenityToVenueDeleteArgs<ExtArgs>>): Prisma__AmenityToVenueClient<$Result.GetResult<Prisma.$AmenityToVenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AmenityToVenue.
     * @param {AmenityToVenueUpdateArgs} args - Arguments to update one AmenityToVenue.
     * @example
     * // Update one AmenityToVenue
     * const amenityToVenue = await prisma.amenityToVenue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmenityToVenueUpdateArgs>(args: SelectSubset<T, AmenityToVenueUpdateArgs<ExtArgs>>): Prisma__AmenityToVenueClient<$Result.GetResult<Prisma.$AmenityToVenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AmenityToVenues.
     * @param {AmenityToVenueDeleteManyArgs} args - Arguments to filter AmenityToVenues to delete.
     * @example
     * // Delete a few AmenityToVenues
     * const { count } = await prisma.amenityToVenue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmenityToVenueDeleteManyArgs>(args?: SelectSubset<T, AmenityToVenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AmenityToVenues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityToVenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AmenityToVenues
     * const amenityToVenue = await prisma.amenityToVenue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmenityToVenueUpdateManyArgs>(args: SelectSubset<T, AmenityToVenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AmenityToVenues and returns the data updated in the database.
     * @param {AmenityToVenueUpdateManyAndReturnArgs} args - Arguments to update many AmenityToVenues.
     * @example
     * // Update many AmenityToVenues
     * const amenityToVenue = await prisma.amenityToVenue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AmenityToVenues and only return the `venueId`
     * const amenityToVenueWithVenueIdOnly = await prisma.amenityToVenue.updateManyAndReturn({
     *   select: { venueId: true },
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
    updateManyAndReturn<T extends AmenityToVenueUpdateManyAndReturnArgs>(args: SelectSubset<T, AmenityToVenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityToVenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AmenityToVenue.
     * @param {AmenityToVenueUpsertArgs} args - Arguments to update or create a AmenityToVenue.
     * @example
     * // Update or create a AmenityToVenue
     * const amenityToVenue = await prisma.amenityToVenue.upsert({
     *   create: {
     *     // ... data to create a AmenityToVenue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AmenityToVenue we want to update
     *   }
     * })
     */
    upsert<T extends AmenityToVenueUpsertArgs>(args: SelectSubset<T, AmenityToVenueUpsertArgs<ExtArgs>>): Prisma__AmenityToVenueClient<$Result.GetResult<Prisma.$AmenityToVenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AmenityToVenues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityToVenueCountArgs} args - Arguments to filter AmenityToVenues to count.
     * @example
     * // Count the number of AmenityToVenues
     * const count = await prisma.amenityToVenue.count({
     *   where: {
     *     // ... the filter for the AmenityToVenues we want to count
     *   }
     * })
    **/
    count<T extends AmenityToVenueCountArgs>(
      args?: Subset<T, AmenityToVenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmenityToVenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AmenityToVenue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityToVenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmenityToVenueAggregateArgs>(args: Subset<T, AmenityToVenueAggregateArgs>): Prisma.PrismaPromise<GetAmenityToVenueAggregateType<T>>

    /**
     * Group by AmenityToVenue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityToVenueGroupByArgs} args - Group by arguments.
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
      T extends AmenityToVenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmenityToVenueGroupByArgs['orderBy'] }
        : { orderBy?: AmenityToVenueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmenityToVenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmenityToVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AmenityToVenue model
   */
  readonly fields: AmenityToVenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AmenityToVenue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmenityToVenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    amenity<T extends AmenityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AmenityDefaultArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AmenityToVenue model
   */
  interface AmenityToVenueFieldRefs {
    readonly venueId: FieldRef<"AmenityToVenue", 'Int'>
    readonly amenityId: FieldRef<"AmenityToVenue", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AmenityToVenue findUnique
   */
  export type AmenityToVenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityToVenue
     */
    select?: AmenityToVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmenityToVenue
     */
    omit?: AmenityToVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityToVenueInclude<ExtArgs> | null
    /**
     * Filter, which AmenityToVenue to fetch.
     */
    where: AmenityToVenueWhereUniqueInput
  }

  /**
   * AmenityToVenue findUniqueOrThrow
   */
  export type AmenityToVenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityToVenue
     */
    select?: AmenityToVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmenityToVenue
     */
    omit?: AmenityToVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityToVenueInclude<ExtArgs> | null
    /**
     * Filter, which AmenityToVenue to fetch.
     */
    where: AmenityToVenueWhereUniqueInput
  }

  /**
   * AmenityToVenue findFirst
   */
  export type AmenityToVenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityToVenue
     */
    select?: AmenityToVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmenityToVenue
     */
    omit?: AmenityToVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityToVenueInclude<ExtArgs> | null
    /**
     * Filter, which AmenityToVenue to fetch.
     */
    where?: AmenityToVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmenityToVenues to fetch.
     */
    orderBy?: AmenityToVenueOrderByWithRelationInput | AmenityToVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AmenityToVenues.
     */
    cursor?: AmenityToVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmenityToVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmenityToVenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AmenityToVenues.
     */
    distinct?: AmenityToVenueScalarFieldEnum | AmenityToVenueScalarFieldEnum[]
  }

  /**
   * AmenityToVenue findFirstOrThrow
   */
  export type AmenityToVenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityToVenue
     */
    select?: AmenityToVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmenityToVenue
     */
    omit?: AmenityToVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityToVenueInclude<ExtArgs> | null
    /**
     * Filter, which AmenityToVenue to fetch.
     */
    where?: AmenityToVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmenityToVenues to fetch.
     */
    orderBy?: AmenityToVenueOrderByWithRelationInput | AmenityToVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AmenityToVenues.
     */
    cursor?: AmenityToVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmenityToVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmenityToVenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AmenityToVenues.
     */
    distinct?: AmenityToVenueScalarFieldEnum | AmenityToVenueScalarFieldEnum[]
  }

  /**
   * AmenityToVenue findMany
   */
  export type AmenityToVenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityToVenue
     */
    select?: AmenityToVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmenityToVenue
     */
    omit?: AmenityToVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityToVenueInclude<ExtArgs> | null
    /**
     * Filter, which AmenityToVenues to fetch.
     */
    where?: AmenityToVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AmenityToVenues to fetch.
     */
    orderBy?: AmenityToVenueOrderByWithRelationInput | AmenityToVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AmenityToVenues.
     */
    cursor?: AmenityToVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AmenityToVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AmenityToVenues.
     */
    skip?: number
    distinct?: AmenityToVenueScalarFieldEnum | AmenityToVenueScalarFieldEnum[]
  }

  /**
   * AmenityToVenue create
   */
  export type AmenityToVenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityToVenue
     */
    select?: AmenityToVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmenityToVenue
     */
    omit?: AmenityToVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityToVenueInclude<ExtArgs> | null
    /**
     * The data needed to create a AmenityToVenue.
     */
    data: XOR<AmenityToVenueCreateInput, AmenityToVenueUncheckedCreateInput>
  }

  /**
   * AmenityToVenue createMany
   */
  export type AmenityToVenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AmenityToVenues.
     */
    data: AmenityToVenueCreateManyInput | AmenityToVenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AmenityToVenue createManyAndReturn
   */
  export type AmenityToVenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityToVenue
     */
    select?: AmenityToVenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AmenityToVenue
     */
    omit?: AmenityToVenueOmit<ExtArgs> | null
    /**
     * The data used to create many AmenityToVenues.
     */
    data: AmenityToVenueCreateManyInput | AmenityToVenueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityToVenueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AmenityToVenue update
   */
  export type AmenityToVenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityToVenue
     */
    select?: AmenityToVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmenityToVenue
     */
    omit?: AmenityToVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityToVenueInclude<ExtArgs> | null
    /**
     * The data needed to update a AmenityToVenue.
     */
    data: XOR<AmenityToVenueUpdateInput, AmenityToVenueUncheckedUpdateInput>
    /**
     * Choose, which AmenityToVenue to update.
     */
    where: AmenityToVenueWhereUniqueInput
  }

  /**
   * AmenityToVenue updateMany
   */
  export type AmenityToVenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AmenityToVenues.
     */
    data: XOR<AmenityToVenueUpdateManyMutationInput, AmenityToVenueUncheckedUpdateManyInput>
    /**
     * Filter which AmenityToVenues to update
     */
    where?: AmenityToVenueWhereInput
    /**
     * Limit how many AmenityToVenues to update.
     */
    limit?: number
  }

  /**
   * AmenityToVenue updateManyAndReturn
   */
  export type AmenityToVenueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityToVenue
     */
    select?: AmenityToVenueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AmenityToVenue
     */
    omit?: AmenityToVenueOmit<ExtArgs> | null
    /**
     * The data used to update AmenityToVenues.
     */
    data: XOR<AmenityToVenueUpdateManyMutationInput, AmenityToVenueUncheckedUpdateManyInput>
    /**
     * Filter which AmenityToVenues to update
     */
    where?: AmenityToVenueWhereInput
    /**
     * Limit how many AmenityToVenues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityToVenueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AmenityToVenue upsert
   */
  export type AmenityToVenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityToVenue
     */
    select?: AmenityToVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmenityToVenue
     */
    omit?: AmenityToVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityToVenueInclude<ExtArgs> | null
    /**
     * The filter to search for the AmenityToVenue to update in case it exists.
     */
    where: AmenityToVenueWhereUniqueInput
    /**
     * In case the AmenityToVenue found by the `where` argument doesn't exist, create a new AmenityToVenue with this data.
     */
    create: XOR<AmenityToVenueCreateInput, AmenityToVenueUncheckedCreateInput>
    /**
     * In case the AmenityToVenue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmenityToVenueUpdateInput, AmenityToVenueUncheckedUpdateInput>
  }

  /**
   * AmenityToVenue delete
   */
  export type AmenityToVenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityToVenue
     */
    select?: AmenityToVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmenityToVenue
     */
    omit?: AmenityToVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityToVenueInclude<ExtArgs> | null
    /**
     * Filter which AmenityToVenue to delete.
     */
    where: AmenityToVenueWhereUniqueInput
  }

  /**
   * AmenityToVenue deleteMany
   */
  export type AmenityToVenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AmenityToVenues to delete
     */
    where?: AmenityToVenueWhereInput
    /**
     * Limit how many AmenityToVenues to delete.
     */
    limit?: number
  }

  /**
   * AmenityToVenue without action
   */
  export type AmenityToVenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityToVenue
     */
    select?: AmenityToVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmenityToVenue
     */
    omit?: AmenityToVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityToVenueInclude<ExtArgs> | null
  }


  /**
   * Model Amenity
   */

  export type AggregateAmenity = {
    _count: AmenityCountAggregateOutputType | null
    _avg: AmenityAvgAggregateOutputType | null
    _sum: AmenitySumAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  export type AmenityAvgAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type AmenitySumAggregateOutputType = {
    id: number | null
    categoryId: number | null
  }

  export type AmenityMinAggregateOutputType = {
    id: number | null
    name: string | null
    categoryId: number | null
  }

  export type AmenityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    categoryId: number | null
  }

  export type AmenityCountAggregateOutputType = {
    id: number
    name: number
    categoryId: number
    _all: number
  }


  export type AmenityAvgAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type AmenitySumAggregateInputType = {
    id?: true
    categoryId?: true
  }

  export type AmenityMinAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
  }

  export type AmenityMaxAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
  }

  export type AmenityCountAggregateInputType = {
    id?: true
    name?: true
    categoryId?: true
    _all?: true
  }

  export type AmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenity to aggregate.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amenities
    **/
    _count?: true | AmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmenityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmenitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmenityMaxAggregateInputType
  }

  export type GetAmenityAggregateType<T extends AmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmenity[P]>
      : GetScalarType<T[P], AggregateAmenity[P]>
  }




  export type AmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityWhereInput
    orderBy?: AmenityOrderByWithAggregationInput | AmenityOrderByWithAggregationInput[]
    by: AmenityScalarFieldEnum[] | AmenityScalarFieldEnum
    having?: AmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmenityCountAggregateInputType | true
    _avg?: AmenityAvgAggregateInputType
    _sum?: AmenitySumAggregateInputType
    _min?: AmenityMinAggregateInputType
    _max?: AmenityMaxAggregateInputType
  }

  export type AmenityGroupByOutputType = {
    id: number
    name: string
    categoryId: number
    _count: AmenityCountAggregateOutputType | null
    _avg: AmenityAvgAggregateOutputType | null
    _sum: AmenitySumAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  type GetAmenityGroupByPayload<T extends AmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmenityGroupByOutputType[P]>
            : GetScalarType<T[P], AmenityGroupByOutputType[P]>
        }
      >
    >


  export type AmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    occasions?: boolean | Amenity$occasionsArgs<ExtArgs>
    amenityToVenues?: boolean | Amenity$amenityToVenuesArgs<ExtArgs>
    _count?: boolean | AmenityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenity"]>

  export type AmenitySelectScalar = {
    id?: boolean
    name?: boolean
    categoryId?: boolean
  }

  export type AmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "categoryId", ExtArgs["result"]["amenity"]>
  export type AmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    occasions?: boolean | Amenity$occasionsArgs<ExtArgs>
    amenityToVenues?: boolean | Amenity$amenityToVenuesArgs<ExtArgs>
    _count?: boolean | AmenityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AmenityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type AmenityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $AmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amenity"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      occasions: Prisma.$OccasionPayload<ExtArgs>[]
      amenityToVenues: Prisma.$AmenityToVenuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      categoryId: number
    }, ExtArgs["result"]["amenity"]>
    composites: {}
  }

  type AmenityGetPayload<S extends boolean | null | undefined | AmenityDefaultArgs> = $Result.GetResult<Prisma.$AmenityPayload, S>

  type AmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmenityCountAggregateInputType | true
    }

  export interface AmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amenity'], meta: { name: 'Amenity' } }
    /**
     * Find zero or one Amenity that matches the filter.
     * @param {AmenityFindUniqueArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmenityFindUniqueArgs>(args: SelectSubset<T, AmenityFindUniqueArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmenityFindUniqueOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, AmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmenityFindFirstArgs>(args?: SelectSubset<T, AmenityFindFirstArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, AmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amenities
     * const amenities = await prisma.amenity.findMany()
     * 
     * // Get first 10 Amenities
     * const amenities = await prisma.amenity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amenityWithIdOnly = await prisma.amenity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmenityFindManyArgs>(args?: SelectSubset<T, AmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amenity.
     * @param {AmenityCreateArgs} args - Arguments to create a Amenity.
     * @example
     * // Create one Amenity
     * const Amenity = await prisma.amenity.create({
     *   data: {
     *     // ... data to create a Amenity
     *   }
     * })
     * 
     */
    create<T extends AmenityCreateArgs>(args: SelectSubset<T, AmenityCreateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amenities.
     * @param {AmenityCreateManyArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmenityCreateManyArgs>(args?: SelectSubset<T, AmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Amenities and returns the data saved in the database.
     * @param {AmenityCreateManyAndReturnArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Amenities and only return the `id`
     * const amenityWithIdOnly = await prisma.amenity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AmenityCreateManyAndReturnArgs>(args?: SelectSubset<T, AmenityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Amenity.
     * @param {AmenityDeleteArgs} args - Arguments to delete one Amenity.
     * @example
     * // Delete one Amenity
     * const Amenity = await prisma.amenity.delete({
     *   where: {
     *     // ... filter to delete one Amenity
     *   }
     * })
     * 
     */
    delete<T extends AmenityDeleteArgs>(args: SelectSubset<T, AmenityDeleteArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amenity.
     * @param {AmenityUpdateArgs} args - Arguments to update one Amenity.
     * @example
     * // Update one Amenity
     * const amenity = await prisma.amenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmenityUpdateArgs>(args: SelectSubset<T, AmenityUpdateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amenities.
     * @param {AmenityDeleteManyArgs} args - Arguments to filter Amenities to delete.
     * @example
     * // Delete a few Amenities
     * const { count } = await prisma.amenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmenityDeleteManyArgs>(args?: SelectSubset<T, AmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmenityUpdateManyArgs>(args: SelectSubset<T, AmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities and returns the data updated in the database.
     * @param {AmenityUpdateManyAndReturnArgs} args - Arguments to update many Amenities.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Amenities and only return the `id`
     * const amenityWithIdOnly = await prisma.amenity.updateManyAndReturn({
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
    updateManyAndReturn<T extends AmenityUpdateManyAndReturnArgs>(args: SelectSubset<T, AmenityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Amenity.
     * @param {AmenityUpsertArgs} args - Arguments to update or create a Amenity.
     * @example
     * // Update or create a Amenity
     * const amenity = await prisma.amenity.upsert({
     *   create: {
     *     // ... data to create a Amenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amenity we want to update
     *   }
     * })
     */
    upsert<T extends AmenityUpsertArgs>(args: SelectSubset<T, AmenityUpsertArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityCountArgs} args - Arguments to filter Amenities to count.
     * @example
     * // Count the number of Amenities
     * const count = await prisma.amenity.count({
     *   where: {
     *     // ... the filter for the Amenities we want to count
     *   }
     * })
    **/
    count<T extends AmenityCountArgs>(
      args?: Subset<T, AmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmenityAggregateArgs>(args: Subset<T, AmenityAggregateArgs>): Prisma.PrismaPromise<GetAmenityAggregateType<T>>

    /**
     * Group by Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityGroupByArgs} args - Group by arguments.
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
      T extends AmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmenityGroupByArgs['orderBy'] }
        : { orderBy?: AmenityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amenity model
   */
  readonly fields: AmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    occasions<T extends Amenity$occasionsArgs<ExtArgs> = {}>(args?: Subset<T, Amenity$occasionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccasionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amenityToVenues<T extends Amenity$amenityToVenuesArgs<ExtArgs> = {}>(args?: Subset<T, Amenity$amenityToVenuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityToVenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Amenity model
   */
  interface AmenityFieldRefs {
    readonly id: FieldRef<"Amenity", 'Int'>
    readonly name: FieldRef<"Amenity", 'String'>
    readonly categoryId: FieldRef<"Amenity", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Amenity findUnique
   */
  export type AmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findUniqueOrThrow
   */
  export type AmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findFirst
   */
  export type AmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findFirstOrThrow
   */
  export type AmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findMany
   */
  export type AmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenities to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity create
   */
  export type AmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a Amenity.
     */
    data: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
  }

  /**
   * Amenity createMany
   */
  export type AmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amenity createManyAndReturn
   */
  export type AmenityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Amenity update
   */
  export type AmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a Amenity.
     */
    data: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
    /**
     * Choose, which Amenity to update.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity updateMany
   */
  export type AmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
  }

  /**
   * Amenity updateManyAndReturn
   */
  export type AmenityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Amenity upsert
   */
  export type AmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the Amenity to update in case it exists.
     */
    where: AmenityWhereUniqueInput
    /**
     * In case the Amenity found by the `where` argument doesn't exist, create a new Amenity with this data.
     */
    create: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
    /**
     * In case the Amenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
  }

  /**
   * Amenity delete
   */
  export type AmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter which Amenity to delete.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity deleteMany
   */
  export type AmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenities to delete
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to delete.
     */
    limit?: number
  }

  /**
   * Amenity.occasions
   */
  export type Amenity$occasionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occasion
     */
    select?: OccasionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occasion
     */
    omit?: OccasionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccasionInclude<ExtArgs> | null
    where?: OccasionWhereInput
    orderBy?: OccasionOrderByWithRelationInput | OccasionOrderByWithRelationInput[]
    cursor?: OccasionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OccasionScalarFieldEnum | OccasionScalarFieldEnum[]
  }

  /**
   * Amenity.amenityToVenues
   */
  export type Amenity$amenityToVenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityToVenue
     */
    select?: AmenityToVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmenityToVenue
     */
    omit?: AmenityToVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityToVenueInclude<ExtArgs> | null
    where?: AmenityToVenueWhereInput
    orderBy?: AmenityToVenueOrderByWithRelationInput | AmenityToVenueOrderByWithRelationInput[]
    cursor?: AmenityToVenueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmenityToVenueScalarFieldEnum | AmenityToVenueScalarFieldEnum[]
  }

  /**
   * Amenity without action
   */
  export type AmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amenities?: boolean | Category$amenitiesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amenities?: boolean | Category$amenitiesArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      amenities: Prisma.$AmenityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    amenities<T extends Category$amenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Category$amenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.amenities
   */
  export type Category$amenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    where?: AmenityWhereInput
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    cursor?: AmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Favourite
   */

  export type AggregateFavourite = {
    _count: FavouriteCountAggregateOutputType | null
    _avg: FavouriteAvgAggregateOutputType | null
    _sum: FavouriteSumAggregateOutputType | null
    _min: FavouriteMinAggregateOutputType | null
    _max: FavouriteMaxAggregateOutputType | null
  }

  export type FavouriteAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    venueId: number | null
  }

  export type FavouriteSumAggregateOutputType = {
    id: number | null
    userId: number | null
    venueId: number | null
  }

  export type FavouriteMinAggregateOutputType = {
    id: number | null
    userId: number | null
    venueId: number | null
  }

  export type FavouriteMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    venueId: number | null
  }

  export type FavouriteCountAggregateOutputType = {
    id: number
    userId: number
    venueId: number
    _all: number
  }


  export type FavouriteAvgAggregateInputType = {
    id?: true
    userId?: true
    venueId?: true
  }

  export type FavouriteSumAggregateInputType = {
    id?: true
    userId?: true
    venueId?: true
  }

  export type FavouriteMinAggregateInputType = {
    id?: true
    userId?: true
    venueId?: true
  }

  export type FavouriteMaxAggregateInputType = {
    id?: true
    userId?: true
    venueId?: true
  }

  export type FavouriteCountAggregateInputType = {
    id?: true
    userId?: true
    venueId?: true
    _all?: true
  }

  export type FavouriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favourite to aggregate.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favourites
    **/
    _count?: true | FavouriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FavouriteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FavouriteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavouriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavouriteMaxAggregateInputType
  }

  export type GetFavouriteAggregateType<T extends FavouriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavourite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavourite[P]>
      : GetScalarType<T[P], AggregateFavourite[P]>
  }




  export type FavouriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouriteWhereInput
    orderBy?: FavouriteOrderByWithAggregationInput | FavouriteOrderByWithAggregationInput[]
    by: FavouriteScalarFieldEnum[] | FavouriteScalarFieldEnum
    having?: FavouriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavouriteCountAggregateInputType | true
    _avg?: FavouriteAvgAggregateInputType
    _sum?: FavouriteSumAggregateInputType
    _min?: FavouriteMinAggregateInputType
    _max?: FavouriteMaxAggregateInputType
  }

  export type FavouriteGroupByOutputType = {
    id: number
    userId: number
    venueId: number
    _count: FavouriteCountAggregateOutputType | null
    _avg: FavouriteAvgAggregateOutputType | null
    _sum: FavouriteSumAggregateOutputType | null
    _min: FavouriteMinAggregateOutputType | null
    _max: FavouriteMaxAggregateOutputType | null
  }

  type GetFavouriteGroupByPayload<T extends FavouriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavouriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavouriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavouriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavouriteGroupByOutputType[P]>
        }
      >
    >


  export type FavouriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    venueId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourite"]>

  export type FavouriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    venueId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourite"]>

  export type FavouriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    venueId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourite"]>

  export type FavouriteSelectScalar = {
    id?: boolean
    userId?: boolean
    venueId?: boolean
  }

  export type FavouriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "venueId", ExtArgs["result"]["favourite"]>
  export type FavouriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type FavouriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }
  export type FavouriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    venue?: boolean | VenueDefaultArgs<ExtArgs>
  }

  export type $FavouritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favourite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      venue: Prisma.$VenuePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      venueId: number
    }, ExtArgs["result"]["favourite"]>
    composites: {}
  }

  type FavouriteGetPayload<S extends boolean | null | undefined | FavouriteDefaultArgs> = $Result.GetResult<Prisma.$FavouritePayload, S>

  type FavouriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavouriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavouriteCountAggregateInputType | true
    }

  export interface FavouriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favourite'], meta: { name: 'Favourite' } }
    /**
     * Find zero or one Favourite that matches the filter.
     * @param {FavouriteFindUniqueArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavouriteFindUniqueArgs>(args: SelectSubset<T, FavouriteFindUniqueArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favourite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavouriteFindUniqueOrThrowArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavouriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavouriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteFindFirstArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavouriteFindFirstArgs>(args?: SelectSubset<T, FavouriteFindFirstArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favourite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteFindFirstOrThrowArgs} args - Arguments to find a Favourite
     * @example
     * // Get one Favourite
     * const favourite = await prisma.favourite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavouriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavouriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favourites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favourites
     * const favourites = await prisma.favourite.findMany()
     * 
     * // Get first 10 Favourites
     * const favourites = await prisma.favourite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favouriteWithIdOnly = await prisma.favourite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavouriteFindManyArgs>(args?: SelectSubset<T, FavouriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favourite.
     * @param {FavouriteCreateArgs} args - Arguments to create a Favourite.
     * @example
     * // Create one Favourite
     * const Favourite = await prisma.favourite.create({
     *   data: {
     *     // ... data to create a Favourite
     *   }
     * })
     * 
     */
    create<T extends FavouriteCreateArgs>(args: SelectSubset<T, FavouriteCreateArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favourites.
     * @param {FavouriteCreateManyArgs} args - Arguments to create many Favourites.
     * @example
     * // Create many Favourites
     * const favourite = await prisma.favourite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavouriteCreateManyArgs>(args?: SelectSubset<T, FavouriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favourites and returns the data saved in the database.
     * @param {FavouriteCreateManyAndReturnArgs} args - Arguments to create many Favourites.
     * @example
     * // Create many Favourites
     * const favourite = await prisma.favourite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favourites and only return the `id`
     * const favouriteWithIdOnly = await prisma.favourite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavouriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavouriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favourite.
     * @param {FavouriteDeleteArgs} args - Arguments to delete one Favourite.
     * @example
     * // Delete one Favourite
     * const Favourite = await prisma.favourite.delete({
     *   where: {
     *     // ... filter to delete one Favourite
     *   }
     * })
     * 
     */
    delete<T extends FavouriteDeleteArgs>(args: SelectSubset<T, FavouriteDeleteArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favourite.
     * @param {FavouriteUpdateArgs} args - Arguments to update one Favourite.
     * @example
     * // Update one Favourite
     * const favourite = await prisma.favourite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavouriteUpdateArgs>(args: SelectSubset<T, FavouriteUpdateArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favourites.
     * @param {FavouriteDeleteManyArgs} args - Arguments to filter Favourites to delete.
     * @example
     * // Delete a few Favourites
     * const { count } = await prisma.favourite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavouriteDeleteManyArgs>(args?: SelectSubset<T, FavouriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favourites
     * const favourite = await prisma.favourite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavouriteUpdateManyArgs>(args: SelectSubset<T, FavouriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favourites and returns the data updated in the database.
     * @param {FavouriteUpdateManyAndReturnArgs} args - Arguments to update many Favourites.
     * @example
     * // Update many Favourites
     * const favourite = await prisma.favourite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favourites and only return the `id`
     * const favouriteWithIdOnly = await prisma.favourite.updateManyAndReturn({
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
    updateManyAndReturn<T extends FavouriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavouriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favourite.
     * @param {FavouriteUpsertArgs} args - Arguments to update or create a Favourite.
     * @example
     * // Update or create a Favourite
     * const favourite = await prisma.favourite.upsert({
     *   create: {
     *     // ... data to create a Favourite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favourite we want to update
     *   }
     * })
     */
    upsert<T extends FavouriteUpsertArgs>(args: SelectSubset<T, FavouriteUpsertArgs<ExtArgs>>): Prisma__FavouriteClient<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteCountArgs} args - Arguments to filter Favourites to count.
     * @example
     * // Count the number of Favourites
     * const count = await prisma.favourite.count({
     *   where: {
     *     // ... the filter for the Favourites we want to count
     *   }
     * })
    **/
    count<T extends FavouriteCountArgs>(
      args?: Subset<T, FavouriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavouriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favourite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavouriteAggregateArgs>(args: Subset<T, FavouriteAggregateArgs>): Prisma.PrismaPromise<GetFavouriteAggregateType<T>>

    /**
     * Group by Favourite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouriteGroupByArgs} args - Group by arguments.
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
      T extends FavouriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavouriteGroupByArgs['orderBy'] }
        : { orderBy?: FavouriteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FavouriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavouriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favourite model
   */
  readonly fields: FavouriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favourite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavouriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Favourite model
   */
  interface FavouriteFieldRefs {
    readonly id: FieldRef<"Favourite", 'Int'>
    readonly userId: FieldRef<"Favourite", 'Int'>
    readonly venueId: FieldRef<"Favourite", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Favourite findUnique
   */
  export type FavouriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite findUniqueOrThrow
   */
  export type FavouriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite findFirst
   */
  export type FavouriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favourites.
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favourites.
     */
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Favourite findFirstOrThrow
   */
  export type FavouriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourite to fetch.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favourites.
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favourites.
     */
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Favourite findMany
   */
  export type FavouriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter, which Favourites to fetch.
     */
    where?: FavouriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favourites.
     */
    cursor?: FavouriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Favourite create
   */
  export type FavouriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favourite.
     */
    data: XOR<FavouriteCreateInput, FavouriteUncheckedCreateInput>
  }

  /**
   * Favourite createMany
   */
  export type FavouriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favourites.
     */
    data: FavouriteCreateManyInput | FavouriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favourite createManyAndReturn
   */
  export type FavouriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favourites.
     */
    data: FavouriteCreateManyInput | FavouriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favourite update
   */
  export type FavouriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favourite.
     */
    data: XOR<FavouriteUpdateInput, FavouriteUncheckedUpdateInput>
    /**
     * Choose, which Favourite to update.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite updateMany
   */
  export type FavouriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favourites.
     */
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyInput>
    /**
     * Filter which Favourites to update
     */
    where?: FavouriteWhereInput
    /**
     * Limit how many Favourites to update.
     */
    limit?: number
  }

  /**
   * Favourite updateManyAndReturn
   */
  export type FavouriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * The data used to update Favourites.
     */
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyInput>
    /**
     * Filter which Favourites to update
     */
    where?: FavouriteWhereInput
    /**
     * Limit how many Favourites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favourite upsert
   */
  export type FavouriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favourite to update in case it exists.
     */
    where: FavouriteWhereUniqueInput
    /**
     * In case the Favourite found by the `where` argument doesn't exist, create a new Favourite with this data.
     */
    create: XOR<FavouriteCreateInput, FavouriteUncheckedCreateInput>
    /**
     * In case the Favourite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavouriteUpdateInput, FavouriteUncheckedUpdateInput>
  }

  /**
   * Favourite delete
   */
  export type FavouriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    /**
     * Filter which Favourite to delete.
     */
    where: FavouriteWhereUniqueInput
  }

  /**
   * Favourite deleteMany
   */
  export type FavouriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favourites to delete
     */
    where?: FavouriteWhereInput
    /**
     * Limit how many Favourites to delete.
     */
    limit?: number
  }

  /**
   * Favourite without action
   */
  export type FavouriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
  }


  /**
   * Model Occasion
   */

  export type AggregateOccasion = {
    _count: OccasionCountAggregateOutputType | null
    _avg: OccasionAvgAggregateOutputType | null
    _sum: OccasionSumAggregateOutputType | null
    _min: OccasionMinAggregateOutputType | null
    _max: OccasionMaxAggregateOutputType | null
  }

  export type OccasionAvgAggregateOutputType = {
    id: number | null
  }

  export type OccasionSumAggregateOutputType = {
    id: number | null
  }

  export type OccasionMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OccasionMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OccasionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OccasionAvgAggregateInputType = {
    id?: true
  }

  export type OccasionSumAggregateInputType = {
    id?: true
  }

  export type OccasionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OccasionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OccasionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OccasionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Occasion to aggregate.
     */
    where?: OccasionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occasions to fetch.
     */
    orderBy?: OccasionOrderByWithRelationInput | OccasionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OccasionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occasions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occasions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Occasions
    **/
    _count?: true | OccasionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OccasionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OccasionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OccasionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OccasionMaxAggregateInputType
  }

  export type GetOccasionAggregateType<T extends OccasionAggregateArgs> = {
        [P in keyof T & keyof AggregateOccasion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOccasion[P]>
      : GetScalarType<T[P], AggregateOccasion[P]>
  }




  export type OccasionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OccasionWhereInput
    orderBy?: OccasionOrderByWithAggregationInput | OccasionOrderByWithAggregationInput[]
    by: OccasionScalarFieldEnum[] | OccasionScalarFieldEnum
    having?: OccasionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OccasionCountAggregateInputType | true
    _avg?: OccasionAvgAggregateInputType
    _sum?: OccasionSumAggregateInputType
    _min?: OccasionMinAggregateInputType
    _max?: OccasionMaxAggregateInputType
  }

  export type OccasionGroupByOutputType = {
    id: number
    name: string
    _count: OccasionCountAggregateOutputType | null
    _avg: OccasionAvgAggregateOutputType | null
    _sum: OccasionSumAggregateOutputType | null
    _min: OccasionMinAggregateOutputType | null
    _max: OccasionMaxAggregateOutputType | null
  }

  type GetOccasionGroupByPayload<T extends OccasionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OccasionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OccasionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OccasionGroupByOutputType[P]>
            : GetScalarType<T[P], OccasionGroupByOutputType[P]>
        }
      >
    >


  export type OccasionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amenities?: boolean | Occasion$amenitiesArgs<ExtArgs>
    _count?: boolean | OccasionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["occasion"]>

  export type OccasionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["occasion"]>

  export type OccasionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["occasion"]>

  export type OccasionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type OccasionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["occasion"]>
  export type OccasionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    amenities?: boolean | Occasion$amenitiesArgs<ExtArgs>
    _count?: boolean | OccasionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OccasionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type OccasionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $OccasionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Occasion"
    objects: {
      amenities: Prisma.$AmenityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["occasion"]>
    composites: {}
  }

  type OccasionGetPayload<S extends boolean | null | undefined | OccasionDefaultArgs> = $Result.GetResult<Prisma.$OccasionPayload, S>

  type OccasionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OccasionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OccasionCountAggregateInputType | true
    }

  export interface OccasionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Occasion'], meta: { name: 'Occasion' } }
    /**
     * Find zero or one Occasion that matches the filter.
     * @param {OccasionFindUniqueArgs} args - Arguments to find a Occasion
     * @example
     * // Get one Occasion
     * const occasion = await prisma.occasion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OccasionFindUniqueArgs>(args: SelectSubset<T, OccasionFindUniqueArgs<ExtArgs>>): Prisma__OccasionClient<$Result.GetResult<Prisma.$OccasionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Occasion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OccasionFindUniqueOrThrowArgs} args - Arguments to find a Occasion
     * @example
     * // Get one Occasion
     * const occasion = await prisma.occasion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OccasionFindUniqueOrThrowArgs>(args: SelectSubset<T, OccasionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OccasionClient<$Result.GetResult<Prisma.$OccasionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Occasion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccasionFindFirstArgs} args - Arguments to find a Occasion
     * @example
     * // Get one Occasion
     * const occasion = await prisma.occasion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OccasionFindFirstArgs>(args?: SelectSubset<T, OccasionFindFirstArgs<ExtArgs>>): Prisma__OccasionClient<$Result.GetResult<Prisma.$OccasionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Occasion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccasionFindFirstOrThrowArgs} args - Arguments to find a Occasion
     * @example
     * // Get one Occasion
     * const occasion = await prisma.occasion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OccasionFindFirstOrThrowArgs>(args?: SelectSubset<T, OccasionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OccasionClient<$Result.GetResult<Prisma.$OccasionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Occasions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccasionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Occasions
     * const occasions = await prisma.occasion.findMany()
     * 
     * // Get first 10 Occasions
     * const occasions = await prisma.occasion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const occasionWithIdOnly = await prisma.occasion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OccasionFindManyArgs>(args?: SelectSubset<T, OccasionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccasionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Occasion.
     * @param {OccasionCreateArgs} args - Arguments to create a Occasion.
     * @example
     * // Create one Occasion
     * const Occasion = await prisma.occasion.create({
     *   data: {
     *     // ... data to create a Occasion
     *   }
     * })
     * 
     */
    create<T extends OccasionCreateArgs>(args: SelectSubset<T, OccasionCreateArgs<ExtArgs>>): Prisma__OccasionClient<$Result.GetResult<Prisma.$OccasionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Occasions.
     * @param {OccasionCreateManyArgs} args - Arguments to create many Occasions.
     * @example
     * // Create many Occasions
     * const occasion = await prisma.occasion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OccasionCreateManyArgs>(args?: SelectSubset<T, OccasionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Occasions and returns the data saved in the database.
     * @param {OccasionCreateManyAndReturnArgs} args - Arguments to create many Occasions.
     * @example
     * // Create many Occasions
     * const occasion = await prisma.occasion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Occasions and only return the `id`
     * const occasionWithIdOnly = await prisma.occasion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OccasionCreateManyAndReturnArgs>(args?: SelectSubset<T, OccasionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccasionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Occasion.
     * @param {OccasionDeleteArgs} args - Arguments to delete one Occasion.
     * @example
     * // Delete one Occasion
     * const Occasion = await prisma.occasion.delete({
     *   where: {
     *     // ... filter to delete one Occasion
     *   }
     * })
     * 
     */
    delete<T extends OccasionDeleteArgs>(args: SelectSubset<T, OccasionDeleteArgs<ExtArgs>>): Prisma__OccasionClient<$Result.GetResult<Prisma.$OccasionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Occasion.
     * @param {OccasionUpdateArgs} args - Arguments to update one Occasion.
     * @example
     * // Update one Occasion
     * const occasion = await prisma.occasion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OccasionUpdateArgs>(args: SelectSubset<T, OccasionUpdateArgs<ExtArgs>>): Prisma__OccasionClient<$Result.GetResult<Prisma.$OccasionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Occasions.
     * @param {OccasionDeleteManyArgs} args - Arguments to filter Occasions to delete.
     * @example
     * // Delete a few Occasions
     * const { count } = await prisma.occasion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OccasionDeleteManyArgs>(args?: SelectSubset<T, OccasionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Occasions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccasionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Occasions
     * const occasion = await prisma.occasion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OccasionUpdateManyArgs>(args: SelectSubset<T, OccasionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Occasions and returns the data updated in the database.
     * @param {OccasionUpdateManyAndReturnArgs} args - Arguments to update many Occasions.
     * @example
     * // Update many Occasions
     * const occasion = await prisma.occasion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Occasions and only return the `id`
     * const occasionWithIdOnly = await prisma.occasion.updateManyAndReturn({
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
    updateManyAndReturn<T extends OccasionUpdateManyAndReturnArgs>(args: SelectSubset<T, OccasionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OccasionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Occasion.
     * @param {OccasionUpsertArgs} args - Arguments to update or create a Occasion.
     * @example
     * // Update or create a Occasion
     * const occasion = await prisma.occasion.upsert({
     *   create: {
     *     // ... data to create a Occasion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Occasion we want to update
     *   }
     * })
     */
    upsert<T extends OccasionUpsertArgs>(args: SelectSubset<T, OccasionUpsertArgs<ExtArgs>>): Prisma__OccasionClient<$Result.GetResult<Prisma.$OccasionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Occasions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccasionCountArgs} args - Arguments to filter Occasions to count.
     * @example
     * // Count the number of Occasions
     * const count = await prisma.occasion.count({
     *   where: {
     *     // ... the filter for the Occasions we want to count
     *   }
     * })
    **/
    count<T extends OccasionCountArgs>(
      args?: Subset<T, OccasionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OccasionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Occasion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccasionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OccasionAggregateArgs>(args: Subset<T, OccasionAggregateArgs>): Prisma.PrismaPromise<GetOccasionAggregateType<T>>

    /**
     * Group by Occasion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OccasionGroupByArgs} args - Group by arguments.
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
      T extends OccasionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OccasionGroupByArgs['orderBy'] }
        : { orderBy?: OccasionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OccasionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOccasionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Occasion model
   */
  readonly fields: OccasionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Occasion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OccasionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    amenities<T extends Occasion$amenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Occasion$amenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Occasion model
   */
  interface OccasionFieldRefs {
    readonly id: FieldRef<"Occasion", 'Int'>
    readonly name: FieldRef<"Occasion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Occasion findUnique
   */
  export type OccasionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occasion
     */
    select?: OccasionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occasion
     */
    omit?: OccasionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccasionInclude<ExtArgs> | null
    /**
     * Filter, which Occasion to fetch.
     */
    where: OccasionWhereUniqueInput
  }

  /**
   * Occasion findUniqueOrThrow
   */
  export type OccasionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occasion
     */
    select?: OccasionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occasion
     */
    omit?: OccasionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccasionInclude<ExtArgs> | null
    /**
     * Filter, which Occasion to fetch.
     */
    where: OccasionWhereUniqueInput
  }

  /**
   * Occasion findFirst
   */
  export type OccasionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occasion
     */
    select?: OccasionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occasion
     */
    omit?: OccasionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccasionInclude<ExtArgs> | null
    /**
     * Filter, which Occasion to fetch.
     */
    where?: OccasionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occasions to fetch.
     */
    orderBy?: OccasionOrderByWithRelationInput | OccasionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Occasions.
     */
    cursor?: OccasionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occasions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occasions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Occasions.
     */
    distinct?: OccasionScalarFieldEnum | OccasionScalarFieldEnum[]
  }

  /**
   * Occasion findFirstOrThrow
   */
  export type OccasionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occasion
     */
    select?: OccasionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occasion
     */
    omit?: OccasionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccasionInclude<ExtArgs> | null
    /**
     * Filter, which Occasion to fetch.
     */
    where?: OccasionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occasions to fetch.
     */
    orderBy?: OccasionOrderByWithRelationInput | OccasionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Occasions.
     */
    cursor?: OccasionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occasions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occasions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Occasions.
     */
    distinct?: OccasionScalarFieldEnum | OccasionScalarFieldEnum[]
  }

  /**
   * Occasion findMany
   */
  export type OccasionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occasion
     */
    select?: OccasionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occasion
     */
    omit?: OccasionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccasionInclude<ExtArgs> | null
    /**
     * Filter, which Occasions to fetch.
     */
    where?: OccasionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Occasions to fetch.
     */
    orderBy?: OccasionOrderByWithRelationInput | OccasionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Occasions.
     */
    cursor?: OccasionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Occasions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Occasions.
     */
    skip?: number
    distinct?: OccasionScalarFieldEnum | OccasionScalarFieldEnum[]
  }

  /**
   * Occasion create
   */
  export type OccasionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occasion
     */
    select?: OccasionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occasion
     */
    omit?: OccasionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccasionInclude<ExtArgs> | null
    /**
     * The data needed to create a Occasion.
     */
    data: XOR<OccasionCreateInput, OccasionUncheckedCreateInput>
  }

  /**
   * Occasion createMany
   */
  export type OccasionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Occasions.
     */
    data: OccasionCreateManyInput | OccasionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Occasion createManyAndReturn
   */
  export type OccasionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occasion
     */
    select?: OccasionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Occasion
     */
    omit?: OccasionOmit<ExtArgs> | null
    /**
     * The data used to create many Occasions.
     */
    data: OccasionCreateManyInput | OccasionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Occasion update
   */
  export type OccasionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occasion
     */
    select?: OccasionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occasion
     */
    omit?: OccasionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccasionInclude<ExtArgs> | null
    /**
     * The data needed to update a Occasion.
     */
    data: XOR<OccasionUpdateInput, OccasionUncheckedUpdateInput>
    /**
     * Choose, which Occasion to update.
     */
    where: OccasionWhereUniqueInput
  }

  /**
   * Occasion updateMany
   */
  export type OccasionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Occasions.
     */
    data: XOR<OccasionUpdateManyMutationInput, OccasionUncheckedUpdateManyInput>
    /**
     * Filter which Occasions to update
     */
    where?: OccasionWhereInput
    /**
     * Limit how many Occasions to update.
     */
    limit?: number
  }

  /**
   * Occasion updateManyAndReturn
   */
  export type OccasionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occasion
     */
    select?: OccasionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Occasion
     */
    omit?: OccasionOmit<ExtArgs> | null
    /**
     * The data used to update Occasions.
     */
    data: XOR<OccasionUpdateManyMutationInput, OccasionUncheckedUpdateManyInput>
    /**
     * Filter which Occasions to update
     */
    where?: OccasionWhereInput
    /**
     * Limit how many Occasions to update.
     */
    limit?: number
  }

  /**
   * Occasion upsert
   */
  export type OccasionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occasion
     */
    select?: OccasionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occasion
     */
    omit?: OccasionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccasionInclude<ExtArgs> | null
    /**
     * The filter to search for the Occasion to update in case it exists.
     */
    where: OccasionWhereUniqueInput
    /**
     * In case the Occasion found by the `where` argument doesn't exist, create a new Occasion with this data.
     */
    create: XOR<OccasionCreateInput, OccasionUncheckedCreateInput>
    /**
     * In case the Occasion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OccasionUpdateInput, OccasionUncheckedUpdateInput>
  }

  /**
   * Occasion delete
   */
  export type OccasionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occasion
     */
    select?: OccasionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occasion
     */
    omit?: OccasionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccasionInclude<ExtArgs> | null
    /**
     * Filter which Occasion to delete.
     */
    where: OccasionWhereUniqueInput
  }

  /**
   * Occasion deleteMany
   */
  export type OccasionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Occasions to delete
     */
    where?: OccasionWhereInput
    /**
     * Limit how many Occasions to delete.
     */
    limit?: number
  }

  /**
   * Occasion.amenities
   */
  export type Occasion$amenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    where?: AmenityWhereInput
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    cursor?: AmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Occasion without action
   */
  export type OccasionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Occasion
     */
    select?: OccasionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Occasion
     */
    omit?: OccasionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OccasionInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    id: number | null
    score: number | null
    reservationId: number | null
  }

  export type RatingSumAggregateOutputType = {
    id: number | null
    score: number | null
    reservationId: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: number | null
    score: number | null
    review: string | null
    createdAt: Date | null
    reservationId: number | null
  }

  export type RatingMaxAggregateOutputType = {
    id: number | null
    score: number | null
    review: string | null
    createdAt: Date | null
    reservationId: number | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    score: number
    review: number
    createdAt: number
    reservationId: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    id?: true
    score?: true
    reservationId?: true
  }

  export type RatingSumAggregateInputType = {
    id?: true
    score?: true
    reservationId?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    score?: true
    review?: true
    createdAt?: true
    reservationId?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    score?: true
    review?: true
    createdAt?: true
    reservationId?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    score?: true
    review?: true
    createdAt?: true
    reservationId?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: number
    score: number
    review: string | null
    createdAt: Date
    reservationId: number
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    review?: boolean
    createdAt?: boolean
    reservationId?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    review?: boolean
    createdAt?: boolean
    reservationId?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    score?: boolean
    review?: boolean
    createdAt?: boolean
    reservationId?: boolean
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    score?: boolean
    review?: boolean
    createdAt?: boolean
    reservationId?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "score" | "review" | "createdAt" | "reservationId", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservation?: boolean | ReservationDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      reservation: Prisma.$ReservationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      score: number
      review: string | null
      createdAt: Date
      reservationId: number
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
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
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservation<T extends ReservationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservationDefaultArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'Int'>
    readonly score: FieldRef<"Rating", 'Int'>
    readonly review: FieldRef<"Rating", 'String'>
    readonly createdAt: FieldRef<"Rating", 'DateTime'>
    readonly reservationId: FieldRef<"Rating", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Model Reservation
   */

  export type AggregateReservation = {
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  export type ReservationAvgAggregateOutputType = {
    id: number | null
    venueId: number | null
    userId: number | null
  }

  export type ReservationSumAggregateOutputType = {
    id: number | null
    venueId: number | null
    userId: number | null
  }

  export type ReservationMinAggregateOutputType = {
    id: number | null
    venueId: number | null
    userId: number | null
    dateStart: Date | null
    dateEnd: Date | null
    isPendingRating: boolean | null
  }

  export type ReservationMaxAggregateOutputType = {
    id: number | null
    venueId: number | null
    userId: number | null
    dateStart: Date | null
    dateEnd: Date | null
    isPendingRating: boolean | null
  }

  export type ReservationCountAggregateOutputType = {
    id: number
    venueId: number
    userId: number
    dateStart: number
    dateEnd: number
    isPendingRating: number
    _all: number
  }


  export type ReservationAvgAggregateInputType = {
    id?: true
    venueId?: true
    userId?: true
  }

  export type ReservationSumAggregateInputType = {
    id?: true
    venueId?: true
    userId?: true
  }

  export type ReservationMinAggregateInputType = {
    id?: true
    venueId?: true
    userId?: true
    dateStart?: true
    dateEnd?: true
    isPendingRating?: true
  }

  export type ReservationMaxAggregateInputType = {
    id?: true
    venueId?: true
    userId?: true
    dateStart?: true
    dateEnd?: true
    isPendingRating?: true
  }

  export type ReservationCountAggregateInputType = {
    id?: true
    venueId?: true
    userId?: true
    dateStart?: true
    dateEnd?: true
    isPendingRating?: true
    _all?: true
  }

  export type ReservationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservation to aggregate.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservations
    **/
    _count?: true | ReservationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservationMaxAggregateInputType
  }

  export type GetReservationAggregateType<T extends ReservationAggregateArgs> = {
        [P in keyof T & keyof AggregateReservation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReservation[P]>
      : GetScalarType<T[P], AggregateReservation[P]>
  }




  export type ReservationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithAggregationInput | ReservationOrderByWithAggregationInput[]
    by: ReservationScalarFieldEnum[] | ReservationScalarFieldEnum
    having?: ReservationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservationCountAggregateInputType | true
    _avg?: ReservationAvgAggregateInputType
    _sum?: ReservationSumAggregateInputType
    _min?: ReservationMinAggregateInputType
    _max?: ReservationMaxAggregateInputType
  }

  export type ReservationGroupByOutputType = {
    id: number
    venueId: number
    userId: number
    dateStart: Date
    dateEnd: Date
    isPendingRating: boolean
    _count: ReservationCountAggregateOutputType | null
    _avg: ReservationAvgAggregateOutputType | null
    _sum: ReservationSumAggregateOutputType | null
    _min: ReservationMinAggregateOutputType | null
    _max: ReservationMaxAggregateOutputType | null
  }

  type GetReservationGroupByPayload<T extends ReservationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservationGroupByOutputType[P]>
            : GetScalarType<T[P], ReservationGroupByOutputType[P]>
        }
      >
    >


  export type ReservationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    userId?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    isPendingRating?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    rating?: boolean | Reservation$ratingArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    userId?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    isPendingRating?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    venueId?: boolean
    userId?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    isPendingRating?: boolean
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reservation"]>

  export type ReservationSelectScalar = {
    id?: boolean
    venueId?: boolean
    userId?: boolean
    dateStart?: boolean
    dateEnd?: boolean
    isPendingRating?: boolean
  }

  export type ReservationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "venueId" | "userId" | "dateStart" | "dateEnd" | "isPendingRating", ExtArgs["result"]["reservation"]>
  export type ReservationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    rating?: boolean | Reservation$ratingArgs<ExtArgs>
  }
  export type ReservationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReservationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venue?: boolean | VenueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReservationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reservation"
    objects: {
      venue: Prisma.$VenuePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      rating: Prisma.$RatingPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      venueId: number
      userId: number
      dateStart: Date
      dateEnd: Date
      isPendingRating: boolean
    }, ExtArgs["result"]["reservation"]>
    composites: {}
  }

  type ReservationGetPayload<S extends boolean | null | undefined | ReservationDefaultArgs> = $Result.GetResult<Prisma.$ReservationPayload, S>

  type ReservationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservationCountAggregateInputType | true
    }

  export interface ReservationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reservation'], meta: { name: 'Reservation' } }
    /**
     * Find zero or one Reservation that matches the filter.
     * @param {ReservationFindUniqueArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservationFindUniqueArgs>(args: SelectSubset<T, ReservationFindUniqueArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reservation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservationFindUniqueOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservationFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservationFindFirstArgs>(args?: SelectSubset<T, ReservationFindFirstArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reservation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindFirstOrThrowArgs} args - Arguments to find a Reservation
     * @example
     * // Get one Reservation
     * const reservation = await prisma.reservation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservationFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservations
     * const reservations = await prisma.reservation.findMany()
     * 
     * // Get first 10 Reservations
     * const reservations = await prisma.reservation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservationWithIdOnly = await prisma.reservation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservationFindManyArgs>(args?: SelectSubset<T, ReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reservation.
     * @param {ReservationCreateArgs} args - Arguments to create a Reservation.
     * @example
     * // Create one Reservation
     * const Reservation = await prisma.reservation.create({
     *   data: {
     *     // ... data to create a Reservation
     *   }
     * })
     * 
     */
    create<T extends ReservationCreateArgs>(args: SelectSubset<T, ReservationCreateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservations.
     * @param {ReservationCreateManyArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservationCreateManyArgs>(args?: SelectSubset<T, ReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservations and returns the data saved in the database.
     * @param {ReservationCreateManyAndReturnArgs} args - Arguments to create many Reservations.
     * @example
     * // Create many Reservations
     * const reservation = await prisma.reservation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservationCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reservation.
     * @param {ReservationDeleteArgs} args - Arguments to delete one Reservation.
     * @example
     * // Delete one Reservation
     * const Reservation = await prisma.reservation.delete({
     *   where: {
     *     // ... filter to delete one Reservation
     *   }
     * })
     * 
     */
    delete<T extends ReservationDeleteArgs>(args: SelectSubset<T, ReservationDeleteArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reservation.
     * @param {ReservationUpdateArgs} args - Arguments to update one Reservation.
     * @example
     * // Update one Reservation
     * const reservation = await prisma.reservation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservationUpdateArgs>(args: SelectSubset<T, ReservationUpdateArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservations.
     * @param {ReservationDeleteManyArgs} args - Arguments to filter Reservations to delete.
     * @example
     * // Delete a few Reservations
     * const { count } = await prisma.reservation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservationDeleteManyArgs>(args?: SelectSubset<T, ReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservationUpdateManyArgs>(args: SelectSubset<T, ReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservations and returns the data updated in the database.
     * @param {ReservationUpdateManyAndReturnArgs} args - Arguments to update many Reservations.
     * @example
     * // Update many Reservations
     * const reservation = await prisma.reservation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservations and only return the `id`
     * const reservationWithIdOnly = await prisma.reservation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReservationUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reservation.
     * @param {ReservationUpsertArgs} args - Arguments to update or create a Reservation.
     * @example
     * // Update or create a Reservation
     * const reservation = await prisma.reservation.upsert({
     *   create: {
     *     // ... data to create a Reservation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reservation we want to update
     *   }
     * })
     */
    upsert<T extends ReservationUpsertArgs>(args: SelectSubset<T, ReservationUpsertArgs<ExtArgs>>): Prisma__ReservationClient<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationCountArgs} args - Arguments to filter Reservations to count.
     * @example
     * // Count the number of Reservations
     * const count = await prisma.reservation.count({
     *   where: {
     *     // ... the filter for the Reservations we want to count
     *   }
     * })
    **/
    count<T extends ReservationCountArgs>(
      args?: Subset<T, ReservationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReservationAggregateArgs>(args: Subset<T, ReservationAggregateArgs>): Prisma.PrismaPromise<GetReservationAggregateType<T>>

    /**
     * Group by Reservation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservationGroupByArgs} args - Group by arguments.
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
      T extends ReservationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservationGroupByArgs['orderBy'] }
        : { orderBy?: ReservationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reservation model
   */
  readonly fields: ReservationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reservation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venue<T extends VenueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueDefaultArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rating<T extends Reservation$ratingArgs<ExtArgs> = {}>(args?: Subset<T, Reservation$ratingArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reservation model
   */
  interface ReservationFieldRefs {
    readonly id: FieldRef<"Reservation", 'Int'>
    readonly venueId: FieldRef<"Reservation", 'Int'>
    readonly userId: FieldRef<"Reservation", 'Int'>
    readonly dateStart: FieldRef<"Reservation", 'DateTime'>
    readonly dateEnd: FieldRef<"Reservation", 'DateTime'>
    readonly isPendingRating: FieldRef<"Reservation", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Reservation findUnique
   */
  export type ReservationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findUniqueOrThrow
   */
  export type ReservationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation findFirst
   */
  export type ReservationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findFirstOrThrow
   */
  export type ReservationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservation to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservations.
     */
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation findMany
   */
  export type ReservationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter, which Reservations to fetch.
     */
    where?: ReservationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservations to fetch.
     */
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservations.
     */
    cursor?: ReservationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservations.
     */
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Reservation create
   */
  export type ReservationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to create a Reservation.
     */
    data: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
  }

  /**
   * Reservation createMany
   */
  export type ReservationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reservation createManyAndReturn
   */
  export type ReservationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to create many Reservations.
     */
    data: ReservationCreateManyInput | ReservationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation update
   */
  export type ReservationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The data needed to update a Reservation.
     */
    data: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
    /**
     * Choose, which Reservation to update.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation updateMany
   */
  export type ReservationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
  }

  /**
   * Reservation updateManyAndReturn
   */
  export type ReservationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * The data used to update Reservations.
     */
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyInput>
    /**
     * Filter which Reservations to update
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reservation upsert
   */
  export type ReservationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * The filter to search for the Reservation to update in case it exists.
     */
    where: ReservationWhereUniqueInput
    /**
     * In case the Reservation found by the `where` argument doesn't exist, create a new Reservation with this data.
     */
    create: XOR<ReservationCreateInput, ReservationUncheckedCreateInput>
    /**
     * In case the Reservation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservationUpdateInput, ReservationUncheckedUpdateInput>
  }

  /**
   * Reservation delete
   */
  export type ReservationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    /**
     * Filter which Reservation to delete.
     */
    where: ReservationWhereUniqueInput
  }

  /**
   * Reservation deleteMany
   */
  export type ReservationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservations to delete
     */
    where?: ReservationWhereInput
    /**
     * Limit how many Reservations to delete.
     */
    limit?: number
  }

  /**
   * Reservation.rating
   */
  export type Reservation$ratingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
  }

  /**
   * Reservation without action
   */
  export type ReservationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
  }


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
    name: string | null
    phoneNumber: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    phoneNumber: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    phoneNumber: number
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
    email?: true
    name?: true
    phoneNumber?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phoneNumber?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    phoneNumber?: true
    password?: true
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
    name: string
    phoneNumber: string
    password: string
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
    name?: boolean
    phoneNumber?: boolean
    password?: boolean
    venues?: boolean | User$venuesArgs<ExtArgs>
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    favourites?: boolean | User$favouritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    phoneNumber?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "phoneNumber" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venues?: boolean | User$venuesArgs<ExtArgs>
    reservations?: boolean | User$reservationsArgs<ExtArgs>
    favourites?: boolean | User$favouritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      venues: Prisma.$VenuePayload<ExtArgs>[]
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      favourites: Prisma.$FavouritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string
      phoneNumber: string
      password: string
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
    venues<T extends User$venuesArgs<ExtArgs> = {}>(args?: Subset<T, User$venuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reservations<T extends User$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, User$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favourites<T extends User$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
   * User.venues
   */
  export type User$venuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    cursor?: VenueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * User.reservations
   */
  export type User$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * User.favourites
   */
  export type User$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    where?: FavouriteWhereInput
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    cursor?: FavouriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
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
   * Model Venue
   */

  export type AggregateVenue = {
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  export type VenueAvgAggregateOutputType = {
    id: number | null
    pricePerNightInEURCent: number | null
    rating: number | null
    capacity: number | null
    amountsOfBeds: number | null
    checkInHour: number | null
    checkOutHour: number | null
    distanceFromCityCenterInMeters: number | null
    latitude: number | null
    longitude: number | null
    ownerId: number | null
    venueTypeId: number | null
  }

  export type VenueSumAggregateOutputType = {
    id: number | null
    pricePerNightInEURCent: number | null
    rating: number | null
    capacity: number | null
    amountsOfBeds: number | null
    checkInHour: number | null
    checkOutHour: number | null
    distanceFromCityCenterInMeters: number | null
    latitude: number | null
    longitude: number | null
    ownerId: number | null
    venueTypeId: number | null
  }

  export type VenueMinAggregateOutputType = {
    id: number | null
    pricePerNightInEURCent: number | null
    rating: number | null
    capacity: number | null
    amountsOfBeds: number | null
    extraSleepingDetails: string | null
    name: string | null
    description: string | null
    checkInHour: number | null
    checkOutHour: number | null
    distanceFromCityCenterInMeters: number | null
    facebookUrl: string | null
    instagramUrl: string | null
    twitterUrl: string | null
    websiteUrl: string | null
    streetNumber: string | null
    streetName: string | null
    postalCode: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    ownerId: number | null
    venueTypeId: number | null
  }

  export type VenueMaxAggregateOutputType = {
    id: number | null
    pricePerNightInEURCent: number | null
    rating: number | null
    capacity: number | null
    amountsOfBeds: number | null
    extraSleepingDetails: string | null
    name: string | null
    description: string | null
    checkInHour: number | null
    checkOutHour: number | null
    distanceFromCityCenterInMeters: number | null
    facebookUrl: string | null
    instagramUrl: string | null
    twitterUrl: string | null
    websiteUrl: string | null
    streetNumber: string | null
    streetName: string | null
    postalCode: string | null
    city: string | null
    latitude: number | null
    longitude: number | null
    ownerId: number | null
    venueTypeId: number | null
  }

  export type VenueCountAggregateOutputType = {
    id: number
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: number
    name: number
    images: number
    description: number
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl: number
    instagramUrl: number
    twitterUrl: number
    websiteUrl: number
    streetNumber: number
    streetName: number
    postalCode: number
    city: number
    latitude: number
    longitude: number
    ownerId: number
    venueTypeId: number
    _all: number
  }


  export type VenueAvgAggregateInputType = {
    id?: true
    pricePerNightInEURCent?: true
    rating?: true
    capacity?: true
    amountsOfBeds?: true
    checkInHour?: true
    checkOutHour?: true
    distanceFromCityCenterInMeters?: true
    latitude?: true
    longitude?: true
    ownerId?: true
    venueTypeId?: true
  }

  export type VenueSumAggregateInputType = {
    id?: true
    pricePerNightInEURCent?: true
    rating?: true
    capacity?: true
    amountsOfBeds?: true
    checkInHour?: true
    checkOutHour?: true
    distanceFromCityCenterInMeters?: true
    latitude?: true
    longitude?: true
    ownerId?: true
    venueTypeId?: true
  }

  export type VenueMinAggregateInputType = {
    id?: true
    pricePerNightInEURCent?: true
    rating?: true
    capacity?: true
    amountsOfBeds?: true
    extraSleepingDetails?: true
    name?: true
    description?: true
    checkInHour?: true
    checkOutHour?: true
    distanceFromCityCenterInMeters?: true
    facebookUrl?: true
    instagramUrl?: true
    twitterUrl?: true
    websiteUrl?: true
    streetNumber?: true
    streetName?: true
    postalCode?: true
    city?: true
    latitude?: true
    longitude?: true
    ownerId?: true
    venueTypeId?: true
  }

  export type VenueMaxAggregateInputType = {
    id?: true
    pricePerNightInEURCent?: true
    rating?: true
    capacity?: true
    amountsOfBeds?: true
    extraSleepingDetails?: true
    name?: true
    description?: true
    checkInHour?: true
    checkOutHour?: true
    distanceFromCityCenterInMeters?: true
    facebookUrl?: true
    instagramUrl?: true
    twitterUrl?: true
    websiteUrl?: true
    streetNumber?: true
    streetName?: true
    postalCode?: true
    city?: true
    latitude?: true
    longitude?: true
    ownerId?: true
    venueTypeId?: true
  }

  export type VenueCountAggregateInputType = {
    id?: true
    pricePerNightInEURCent?: true
    rating?: true
    capacity?: true
    amountsOfBeds?: true
    extraSleepingDetails?: true
    name?: true
    images?: true
    description?: true
    checkInHour?: true
    checkOutHour?: true
    distanceFromCityCenterInMeters?: true
    facebookUrl?: true
    instagramUrl?: true
    twitterUrl?: true
    websiteUrl?: true
    streetNumber?: true
    streetName?: true
    postalCode?: true
    city?: true
    latitude?: true
    longitude?: true
    ownerId?: true
    venueTypeId?: true
    _all?: true
  }

  export type VenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venue to aggregate.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Venues
    **/
    _count?: true | VenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueMaxAggregateInputType
  }

  export type GetVenueAggregateType<T extends VenueAggregateArgs> = {
        [P in keyof T & keyof AggregateVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenue[P]>
      : GetScalarType<T[P], AggregateVenue[P]>
  }




  export type VenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithAggregationInput | VenueOrderByWithAggregationInput[]
    by: VenueScalarFieldEnum[] | VenueScalarFieldEnum
    having?: VenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueCountAggregateInputType | true
    _avg?: VenueAvgAggregateInputType
    _sum?: VenueSumAggregateInputType
    _min?: VenueMinAggregateInputType
    _max?: VenueMaxAggregateInputType
  }

  export type VenueGroupByOutputType = {
    id: number
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl: string | null
    instagramUrl: string | null
    twitterUrl: string | null
    websiteUrl: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude: number | null
    longitude: number | null
    ownerId: number
    venueTypeId: number
    _count: VenueCountAggregateOutputType | null
    _avg: VenueAvgAggregateOutputType | null
    _sum: VenueSumAggregateOutputType | null
    _min: VenueMinAggregateOutputType | null
    _max: VenueMaxAggregateOutputType | null
  }

  type GetVenueGroupByPayload<T extends VenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueGroupByOutputType[P]>
            : GetScalarType<T[P], VenueGroupByOutputType[P]>
        }
      >
    >


  export type VenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricePerNightInEURCent?: boolean
    rating?: boolean
    capacity?: boolean
    amountsOfBeds?: boolean
    extraSleepingDetails?: boolean
    name?: boolean
    images?: boolean
    description?: boolean
    checkInHour?: boolean
    checkOutHour?: boolean
    distanceFromCityCenterInMeters?: boolean
    facebookUrl?: boolean
    instagramUrl?: boolean
    twitterUrl?: boolean
    websiteUrl?: boolean
    streetNumber?: boolean
    streetName?: boolean
    postalCode?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    ownerId?: boolean
    venueTypeId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    reservations?: boolean | Venue$reservationsArgs<ExtArgs>
    favourites?: boolean | Venue$favouritesArgs<ExtArgs>
    amenityToVenues?: boolean | Venue$amenityToVenuesArgs<ExtArgs>
    venueType?: boolean | VenueTypeDefaultArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricePerNightInEURCent?: boolean
    rating?: boolean
    capacity?: boolean
    amountsOfBeds?: boolean
    extraSleepingDetails?: boolean
    name?: boolean
    images?: boolean
    description?: boolean
    checkInHour?: boolean
    checkOutHour?: boolean
    distanceFromCityCenterInMeters?: boolean
    facebookUrl?: boolean
    instagramUrl?: boolean
    twitterUrl?: boolean
    websiteUrl?: boolean
    streetNumber?: boolean
    streetName?: boolean
    postalCode?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    ownerId?: boolean
    venueTypeId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    venueType?: boolean | VenueTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricePerNightInEURCent?: boolean
    rating?: boolean
    capacity?: boolean
    amountsOfBeds?: boolean
    extraSleepingDetails?: boolean
    name?: boolean
    images?: boolean
    description?: boolean
    checkInHour?: boolean
    checkOutHour?: boolean
    distanceFromCityCenterInMeters?: boolean
    facebookUrl?: boolean
    instagramUrl?: boolean
    twitterUrl?: boolean
    websiteUrl?: boolean
    streetNumber?: boolean
    streetName?: boolean
    postalCode?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    ownerId?: boolean
    venueTypeId?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    venueType?: boolean | VenueTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venue"]>

  export type VenueSelectScalar = {
    id?: boolean
    pricePerNightInEURCent?: boolean
    rating?: boolean
    capacity?: boolean
    amountsOfBeds?: boolean
    extraSleepingDetails?: boolean
    name?: boolean
    images?: boolean
    description?: boolean
    checkInHour?: boolean
    checkOutHour?: boolean
    distanceFromCityCenterInMeters?: boolean
    facebookUrl?: boolean
    instagramUrl?: boolean
    twitterUrl?: boolean
    websiteUrl?: boolean
    streetNumber?: boolean
    streetName?: boolean
    postalCode?: boolean
    city?: boolean
    latitude?: boolean
    longitude?: boolean
    ownerId?: boolean
    venueTypeId?: boolean
  }

  export type VenueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pricePerNightInEURCent" | "rating" | "capacity" | "amountsOfBeds" | "extraSleepingDetails" | "name" | "images" | "description" | "checkInHour" | "checkOutHour" | "distanceFromCityCenterInMeters" | "facebookUrl" | "instagramUrl" | "twitterUrl" | "websiteUrl" | "streetNumber" | "streetName" | "postalCode" | "city" | "latitude" | "longitude" | "ownerId" | "venueTypeId", ExtArgs["result"]["venue"]>
  export type VenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    reservations?: boolean | Venue$reservationsArgs<ExtArgs>
    favourites?: boolean | Venue$favouritesArgs<ExtArgs>
    amenityToVenues?: boolean | Venue$amenityToVenuesArgs<ExtArgs>
    venueType?: boolean | VenueTypeDefaultArgs<ExtArgs>
    _count?: boolean | VenueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    venueType?: boolean | VenueTypeDefaultArgs<ExtArgs>
  }
  export type VenueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    venueType?: boolean | VenueTypeDefaultArgs<ExtArgs>
  }

  export type $VenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Venue"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      reservations: Prisma.$ReservationPayload<ExtArgs>[]
      favourites: Prisma.$FavouritePayload<ExtArgs>[]
      amenityToVenues: Prisma.$AmenityToVenuePayload<ExtArgs>[]
      venueType: Prisma.$VenueTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pricePerNightInEURCent: number
      rating: number
      capacity: number
      amountsOfBeds: number
      extraSleepingDetails: string
      name: string
      images: Prisma.JsonValue
      description: string
      checkInHour: number
      checkOutHour: number
      distanceFromCityCenterInMeters: number
      facebookUrl: string | null
      instagramUrl: string | null
      twitterUrl: string | null
      websiteUrl: string | null
      streetNumber: string
      streetName: string
      postalCode: string
      city: string
      latitude: number | null
      longitude: number | null
      ownerId: number
      venueTypeId: number
    }, ExtArgs["result"]["venue"]>
    composites: {}
  }

  type VenueGetPayload<S extends boolean | null | undefined | VenueDefaultArgs> = $Result.GetResult<Prisma.$VenuePayload, S>

  type VenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueCountAggregateInputType | true
    }

  export interface VenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Venue'], meta: { name: 'Venue' } }
    /**
     * Find zero or one Venue that matches the filter.
     * @param {VenueFindUniqueArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueFindUniqueArgs>(args: SelectSubset<T, VenueFindUniqueArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Venue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueFindUniqueOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueFindFirstArgs>(args?: SelectSubset<T, VenueFindFirstArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Venue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindFirstOrThrowArgs} args - Arguments to find a Venue
     * @example
     * // Get one Venue
     * const venue = await prisma.venue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Venues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Venues
     * const venues = await prisma.venue.findMany()
     * 
     * // Get first 10 Venues
     * const venues = await prisma.venue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueWithIdOnly = await prisma.venue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueFindManyArgs>(args?: SelectSubset<T, VenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Venue.
     * @param {VenueCreateArgs} args - Arguments to create a Venue.
     * @example
     * // Create one Venue
     * const Venue = await prisma.venue.create({
     *   data: {
     *     // ... data to create a Venue
     *   }
     * })
     * 
     */
    create<T extends VenueCreateArgs>(args: SelectSubset<T, VenueCreateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Venues.
     * @param {VenueCreateManyArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueCreateManyArgs>(args?: SelectSubset<T, VenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Venues and returns the data saved in the database.
     * @param {VenueCreateManyAndReturnArgs} args - Arguments to create many Venues.
     * @example
     * // Create many Venues
     * const venue = await prisma.venue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Venue.
     * @param {VenueDeleteArgs} args - Arguments to delete one Venue.
     * @example
     * // Delete one Venue
     * const Venue = await prisma.venue.delete({
     *   where: {
     *     // ... filter to delete one Venue
     *   }
     * })
     * 
     */
    delete<T extends VenueDeleteArgs>(args: SelectSubset<T, VenueDeleteArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Venue.
     * @param {VenueUpdateArgs} args - Arguments to update one Venue.
     * @example
     * // Update one Venue
     * const venue = await prisma.venue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueUpdateArgs>(args: SelectSubset<T, VenueUpdateArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Venues.
     * @param {VenueDeleteManyArgs} args - Arguments to filter Venues to delete.
     * @example
     * // Delete a few Venues
     * const { count } = await prisma.venue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueDeleteManyArgs>(args?: SelectSubset<T, VenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueUpdateManyArgs>(args: SelectSubset<T, VenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Venues and returns the data updated in the database.
     * @param {VenueUpdateManyAndReturnArgs} args - Arguments to update many Venues.
     * @example
     * // Update many Venues
     * const venue = await prisma.venue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Venues and only return the `id`
     * const venueWithIdOnly = await prisma.venue.updateManyAndReturn({
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
    updateManyAndReturn<T extends VenueUpdateManyAndReturnArgs>(args: SelectSubset<T, VenueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Venue.
     * @param {VenueUpsertArgs} args - Arguments to update or create a Venue.
     * @example
     * // Update or create a Venue
     * const venue = await prisma.venue.upsert({
     *   create: {
     *     // ... data to create a Venue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Venue we want to update
     *   }
     * })
     */
    upsert<T extends VenueUpsertArgs>(args: SelectSubset<T, VenueUpsertArgs<ExtArgs>>): Prisma__VenueClient<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Venues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueCountArgs} args - Arguments to filter Venues to count.
     * @example
     * // Count the number of Venues
     * const count = await prisma.venue.count({
     *   where: {
     *     // ... the filter for the Venues we want to count
     *   }
     * })
    **/
    count<T extends VenueCountArgs>(
      args?: Subset<T, VenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenueAggregateArgs>(args: Subset<T, VenueAggregateArgs>): Prisma.PrismaPromise<GetVenueAggregateType<T>>

    /**
     * Group by Venue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueGroupByArgs} args - Group by arguments.
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
      T extends VenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueGroupByArgs['orderBy'] }
        : { orderBy?: VenueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Venue model
   */
  readonly fields: VenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Venue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reservations<T extends Venue$reservationsArgs<ExtArgs> = {}>(args?: Subset<T, Venue$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favourites<T extends Venue$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, Venue$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    amenityToVenues<T extends Venue$amenityToVenuesArgs<ExtArgs> = {}>(args?: Subset<T, Venue$amenityToVenuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityToVenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    venueType<T extends VenueTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VenueTypeDefaultArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Venue model
   */
  interface VenueFieldRefs {
    readonly id: FieldRef<"Venue", 'Int'>
    readonly pricePerNightInEURCent: FieldRef<"Venue", 'Int'>
    readonly rating: FieldRef<"Venue", 'Float'>
    readonly capacity: FieldRef<"Venue", 'Int'>
    readonly amountsOfBeds: FieldRef<"Venue", 'Int'>
    readonly extraSleepingDetails: FieldRef<"Venue", 'String'>
    readonly name: FieldRef<"Venue", 'String'>
    readonly images: FieldRef<"Venue", 'Json'>
    readonly description: FieldRef<"Venue", 'String'>
    readonly checkInHour: FieldRef<"Venue", 'Int'>
    readonly checkOutHour: FieldRef<"Venue", 'Int'>
    readonly distanceFromCityCenterInMeters: FieldRef<"Venue", 'Int'>
    readonly facebookUrl: FieldRef<"Venue", 'String'>
    readonly instagramUrl: FieldRef<"Venue", 'String'>
    readonly twitterUrl: FieldRef<"Venue", 'String'>
    readonly websiteUrl: FieldRef<"Venue", 'String'>
    readonly streetNumber: FieldRef<"Venue", 'String'>
    readonly streetName: FieldRef<"Venue", 'String'>
    readonly postalCode: FieldRef<"Venue", 'String'>
    readonly city: FieldRef<"Venue", 'String'>
    readonly latitude: FieldRef<"Venue", 'Float'>
    readonly longitude: FieldRef<"Venue", 'Float'>
    readonly ownerId: FieldRef<"Venue", 'Int'>
    readonly venueTypeId: FieldRef<"Venue", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Venue findUnique
   */
  export type VenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findUniqueOrThrow
   */
  export type VenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue findFirst
   */
  export type VenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findFirstOrThrow
   */
  export type VenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venue to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Venues.
     */
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue findMany
   */
  export type VenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter, which Venues to fetch.
     */
    where?: VenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Venues to fetch.
     */
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Venues.
     */
    cursor?: VenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Venues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Venues.
     */
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * Venue create
   */
  export type VenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to create a Venue.
     */
    data: XOR<VenueCreateInput, VenueUncheckedCreateInput>
  }

  /**
   * Venue createMany
   */
  export type VenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Venue createManyAndReturn
   */
  export type VenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to create many Venues.
     */
    data: VenueCreateManyInput | VenueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venue update
   */
  export type VenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The data needed to update a Venue.
     */
    data: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
    /**
     * Choose, which Venue to update.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue updateMany
   */
  export type VenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
  }

  /**
   * Venue updateManyAndReturn
   */
  export type VenueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * The data used to update Venues.
     */
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyInput>
    /**
     * Filter which Venues to update
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Venue upsert
   */
  export type VenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * The filter to search for the Venue to update in case it exists.
     */
    where: VenueWhereUniqueInput
    /**
     * In case the Venue found by the `where` argument doesn't exist, create a new Venue with this data.
     */
    create: XOR<VenueCreateInput, VenueUncheckedCreateInput>
    /**
     * In case the Venue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueUpdateInput, VenueUncheckedUpdateInput>
  }

  /**
   * Venue delete
   */
  export type VenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    /**
     * Filter which Venue to delete.
     */
    where: VenueWhereUniqueInput
  }

  /**
   * Venue deleteMany
   */
  export type VenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Venues to delete
     */
    where?: VenueWhereInput
    /**
     * Limit how many Venues to delete.
     */
    limit?: number
  }

  /**
   * Venue.reservations
   */
  export type Venue$reservationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reservation
     */
    select?: ReservationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reservation
     */
    omit?: ReservationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservationInclude<ExtArgs> | null
    where?: ReservationWhereInput
    orderBy?: ReservationOrderByWithRelationInput | ReservationOrderByWithRelationInput[]
    cursor?: ReservationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservationScalarFieldEnum | ReservationScalarFieldEnum[]
  }

  /**
   * Venue.favourites
   */
  export type Venue$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourite
     */
    select?: FavouriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favourite
     */
    omit?: FavouriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouriteInclude<ExtArgs> | null
    where?: FavouriteWhereInput
    orderBy?: FavouriteOrderByWithRelationInput | FavouriteOrderByWithRelationInput[]
    cursor?: FavouriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouriteScalarFieldEnum | FavouriteScalarFieldEnum[]
  }

  /**
   * Venue.amenityToVenues
   */
  export type Venue$amenityToVenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityToVenue
     */
    select?: AmenityToVenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AmenityToVenue
     */
    omit?: AmenityToVenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityToVenueInclude<ExtArgs> | null
    where?: AmenityToVenueWhereInput
    orderBy?: AmenityToVenueOrderByWithRelationInput | AmenityToVenueOrderByWithRelationInput[]
    cursor?: AmenityToVenueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AmenityToVenueScalarFieldEnum | AmenityToVenueScalarFieldEnum[]
  }

  /**
   * Venue without action
   */
  export type VenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
  }


  /**
   * Model VenueType
   */

  export type AggregateVenueType = {
    _count: VenueTypeCountAggregateOutputType | null
    _avg: VenueTypeAvgAggregateOutputType | null
    _sum: VenueTypeSumAggregateOutputType | null
    _min: VenueTypeMinAggregateOutputType | null
    _max: VenueTypeMaxAggregateOutputType | null
  }

  export type VenueTypeAvgAggregateOutputType = {
    id: number | null
  }

  export type VenueTypeSumAggregateOutputType = {
    id: number | null
  }

  export type VenueTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type VenueTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type VenueTypeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type VenueTypeAvgAggregateInputType = {
    id?: true
  }

  export type VenueTypeSumAggregateInputType = {
    id?: true
  }

  export type VenueTypeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type VenueTypeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type VenueTypeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type VenueTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueType to aggregate.
     */
    where?: VenueTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueTypes to fetch.
     */
    orderBy?: VenueTypeOrderByWithRelationInput | VenueTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VenueTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VenueTypes
    **/
    _count?: true | VenueTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VenueTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VenueTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VenueTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VenueTypeMaxAggregateInputType
  }

  export type GetVenueTypeAggregateType<T extends VenueTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateVenueType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVenueType[P]>
      : GetScalarType<T[P], AggregateVenueType[P]>
  }




  export type VenueTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VenueTypeWhereInput
    orderBy?: VenueTypeOrderByWithAggregationInput | VenueTypeOrderByWithAggregationInput[]
    by: VenueTypeScalarFieldEnum[] | VenueTypeScalarFieldEnum
    having?: VenueTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VenueTypeCountAggregateInputType | true
    _avg?: VenueTypeAvgAggregateInputType
    _sum?: VenueTypeSumAggregateInputType
    _min?: VenueTypeMinAggregateInputType
    _max?: VenueTypeMaxAggregateInputType
  }

  export type VenueTypeGroupByOutputType = {
    id: number
    name: string
    _count: VenueTypeCountAggregateOutputType | null
    _avg: VenueTypeAvgAggregateOutputType | null
    _sum: VenueTypeSumAggregateOutputType | null
    _min: VenueTypeMinAggregateOutputType | null
    _max: VenueTypeMaxAggregateOutputType | null
  }

  type GetVenueTypeGroupByPayload<T extends VenueTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VenueTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VenueTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VenueTypeGroupByOutputType[P]>
            : GetScalarType<T[P], VenueTypeGroupByOutputType[P]>
        }
      >
    >


  export type VenueTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    venues?: boolean | VenueType$venuesArgs<ExtArgs>
    _count?: boolean | VenueTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["venueType"]>

  export type VenueTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["venueType"]>

  export type VenueTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["venueType"]>

  export type VenueTypeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type VenueTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["venueType"]>
  export type VenueTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    venues?: boolean | VenueType$venuesArgs<ExtArgs>
    _count?: boolean | VenueTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VenueTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VenueTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VenueTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VenueType"
    objects: {
      venues: Prisma.$VenuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["venueType"]>
    composites: {}
  }

  type VenueTypeGetPayload<S extends boolean | null | undefined | VenueTypeDefaultArgs> = $Result.GetResult<Prisma.$VenueTypePayload, S>

  type VenueTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VenueTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VenueTypeCountAggregateInputType | true
    }

  export interface VenueTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VenueType'], meta: { name: 'VenueType' } }
    /**
     * Find zero or one VenueType that matches the filter.
     * @param {VenueTypeFindUniqueArgs} args - Arguments to find a VenueType
     * @example
     * // Get one VenueType
     * const venueType = await prisma.venueType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VenueTypeFindUniqueArgs>(args: SelectSubset<T, VenueTypeFindUniqueArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VenueType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VenueTypeFindUniqueOrThrowArgs} args - Arguments to find a VenueType
     * @example
     * // Get one VenueType
     * const venueType = await prisma.venueType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VenueTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, VenueTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VenueType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueTypeFindFirstArgs} args - Arguments to find a VenueType
     * @example
     * // Get one VenueType
     * const venueType = await prisma.venueType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VenueTypeFindFirstArgs>(args?: SelectSubset<T, VenueTypeFindFirstArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VenueType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueTypeFindFirstOrThrowArgs} args - Arguments to find a VenueType
     * @example
     * // Get one VenueType
     * const venueType = await prisma.venueType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VenueTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, VenueTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VenueTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VenueTypes
     * const venueTypes = await prisma.venueType.findMany()
     * 
     * // Get first 10 VenueTypes
     * const venueTypes = await prisma.venueType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const venueTypeWithIdOnly = await prisma.venueType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VenueTypeFindManyArgs>(args?: SelectSubset<T, VenueTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VenueType.
     * @param {VenueTypeCreateArgs} args - Arguments to create a VenueType.
     * @example
     * // Create one VenueType
     * const VenueType = await prisma.venueType.create({
     *   data: {
     *     // ... data to create a VenueType
     *   }
     * })
     * 
     */
    create<T extends VenueTypeCreateArgs>(args: SelectSubset<T, VenueTypeCreateArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VenueTypes.
     * @param {VenueTypeCreateManyArgs} args - Arguments to create many VenueTypes.
     * @example
     * // Create many VenueTypes
     * const venueType = await prisma.venueType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VenueTypeCreateManyArgs>(args?: SelectSubset<T, VenueTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VenueTypes and returns the data saved in the database.
     * @param {VenueTypeCreateManyAndReturnArgs} args - Arguments to create many VenueTypes.
     * @example
     * // Create many VenueTypes
     * const venueType = await prisma.venueType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VenueTypes and only return the `id`
     * const venueTypeWithIdOnly = await prisma.venueType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VenueTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, VenueTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VenueType.
     * @param {VenueTypeDeleteArgs} args - Arguments to delete one VenueType.
     * @example
     * // Delete one VenueType
     * const VenueType = await prisma.venueType.delete({
     *   where: {
     *     // ... filter to delete one VenueType
     *   }
     * })
     * 
     */
    delete<T extends VenueTypeDeleteArgs>(args: SelectSubset<T, VenueTypeDeleteArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VenueType.
     * @param {VenueTypeUpdateArgs} args - Arguments to update one VenueType.
     * @example
     * // Update one VenueType
     * const venueType = await prisma.venueType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VenueTypeUpdateArgs>(args: SelectSubset<T, VenueTypeUpdateArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VenueTypes.
     * @param {VenueTypeDeleteManyArgs} args - Arguments to filter VenueTypes to delete.
     * @example
     * // Delete a few VenueTypes
     * const { count } = await prisma.venueType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VenueTypeDeleteManyArgs>(args?: SelectSubset<T, VenueTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenueTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VenueTypes
     * const venueType = await prisma.venueType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VenueTypeUpdateManyArgs>(args: SelectSubset<T, VenueTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VenueTypes and returns the data updated in the database.
     * @param {VenueTypeUpdateManyAndReturnArgs} args - Arguments to update many VenueTypes.
     * @example
     * // Update many VenueTypes
     * const venueType = await prisma.venueType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VenueTypes and only return the `id`
     * const venueTypeWithIdOnly = await prisma.venueType.updateManyAndReturn({
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
    updateManyAndReturn<T extends VenueTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, VenueTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VenueType.
     * @param {VenueTypeUpsertArgs} args - Arguments to update or create a VenueType.
     * @example
     * // Update or create a VenueType
     * const venueType = await prisma.venueType.upsert({
     *   create: {
     *     // ... data to create a VenueType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VenueType we want to update
     *   }
     * })
     */
    upsert<T extends VenueTypeUpsertArgs>(args: SelectSubset<T, VenueTypeUpsertArgs<ExtArgs>>): Prisma__VenueTypeClient<$Result.GetResult<Prisma.$VenueTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VenueTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueTypeCountArgs} args - Arguments to filter VenueTypes to count.
     * @example
     * // Count the number of VenueTypes
     * const count = await prisma.venueType.count({
     *   where: {
     *     // ... the filter for the VenueTypes we want to count
     *   }
     * })
    **/
    count<T extends VenueTypeCountArgs>(
      args?: Subset<T, VenueTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VenueTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VenueType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VenueTypeAggregateArgs>(args: Subset<T, VenueTypeAggregateArgs>): Prisma.PrismaPromise<GetVenueTypeAggregateType<T>>

    /**
     * Group by VenueType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VenueTypeGroupByArgs} args - Group by arguments.
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
      T extends VenueTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VenueTypeGroupByArgs['orderBy'] }
        : { orderBy?: VenueTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VenueTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenueTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VenueType model
   */
  readonly fields: VenueTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VenueType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VenueTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    venues<T extends VenueType$venuesArgs<ExtArgs> = {}>(args?: Subset<T, VenueType$venuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VenuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the VenueType model
   */
  interface VenueTypeFieldRefs {
    readonly id: FieldRef<"VenueType", 'Int'>
    readonly name: FieldRef<"VenueType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VenueType findUnique
   */
  export type VenueTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * Filter, which VenueType to fetch.
     */
    where: VenueTypeWhereUniqueInput
  }

  /**
   * VenueType findUniqueOrThrow
   */
  export type VenueTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * Filter, which VenueType to fetch.
     */
    where: VenueTypeWhereUniqueInput
  }

  /**
   * VenueType findFirst
   */
  export type VenueTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * Filter, which VenueType to fetch.
     */
    where?: VenueTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueTypes to fetch.
     */
    orderBy?: VenueTypeOrderByWithRelationInput | VenueTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueTypes.
     */
    cursor?: VenueTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueTypes.
     */
    distinct?: VenueTypeScalarFieldEnum | VenueTypeScalarFieldEnum[]
  }

  /**
   * VenueType findFirstOrThrow
   */
  export type VenueTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * Filter, which VenueType to fetch.
     */
    where?: VenueTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueTypes to fetch.
     */
    orderBy?: VenueTypeOrderByWithRelationInput | VenueTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VenueTypes.
     */
    cursor?: VenueTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VenueTypes.
     */
    distinct?: VenueTypeScalarFieldEnum | VenueTypeScalarFieldEnum[]
  }

  /**
   * VenueType findMany
   */
  export type VenueTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * Filter, which VenueTypes to fetch.
     */
    where?: VenueTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VenueTypes to fetch.
     */
    orderBy?: VenueTypeOrderByWithRelationInput | VenueTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VenueTypes.
     */
    cursor?: VenueTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VenueTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VenueTypes.
     */
    skip?: number
    distinct?: VenueTypeScalarFieldEnum | VenueTypeScalarFieldEnum[]
  }

  /**
   * VenueType create
   */
  export type VenueTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a VenueType.
     */
    data: XOR<VenueTypeCreateInput, VenueTypeUncheckedCreateInput>
  }

  /**
   * VenueType createMany
   */
  export type VenueTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VenueTypes.
     */
    data: VenueTypeCreateManyInput | VenueTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VenueType createManyAndReturn
   */
  export type VenueTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * The data used to create many VenueTypes.
     */
    data: VenueTypeCreateManyInput | VenueTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VenueType update
   */
  export type VenueTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a VenueType.
     */
    data: XOR<VenueTypeUpdateInput, VenueTypeUncheckedUpdateInput>
    /**
     * Choose, which VenueType to update.
     */
    where: VenueTypeWhereUniqueInput
  }

  /**
   * VenueType updateMany
   */
  export type VenueTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VenueTypes.
     */
    data: XOR<VenueTypeUpdateManyMutationInput, VenueTypeUncheckedUpdateManyInput>
    /**
     * Filter which VenueTypes to update
     */
    where?: VenueTypeWhereInput
    /**
     * Limit how many VenueTypes to update.
     */
    limit?: number
  }

  /**
   * VenueType updateManyAndReturn
   */
  export type VenueTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * The data used to update VenueTypes.
     */
    data: XOR<VenueTypeUpdateManyMutationInput, VenueTypeUncheckedUpdateManyInput>
    /**
     * Filter which VenueTypes to update
     */
    where?: VenueTypeWhereInput
    /**
     * Limit how many VenueTypes to update.
     */
    limit?: number
  }

  /**
   * VenueType upsert
   */
  export type VenueTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the VenueType to update in case it exists.
     */
    where: VenueTypeWhereUniqueInput
    /**
     * In case the VenueType found by the `where` argument doesn't exist, create a new VenueType with this data.
     */
    create: XOR<VenueTypeCreateInput, VenueTypeUncheckedCreateInput>
    /**
     * In case the VenueType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VenueTypeUpdateInput, VenueTypeUncheckedUpdateInput>
  }

  /**
   * VenueType delete
   */
  export type VenueTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
    /**
     * Filter which VenueType to delete.
     */
    where: VenueTypeWhereUniqueInput
  }

  /**
   * VenueType deleteMany
   */
  export type VenueTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VenueTypes to delete
     */
    where?: VenueTypeWhereInput
    /**
     * Limit how many VenueTypes to delete.
     */
    limit?: number
  }

  /**
   * VenueType.venues
   */
  export type VenueType$venuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Venue
     */
    select?: VenueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Venue
     */
    omit?: VenueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueInclude<ExtArgs> | null
    where?: VenueWhereInput
    orderBy?: VenueOrderByWithRelationInput | VenueOrderByWithRelationInput[]
    cursor?: VenueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VenueScalarFieldEnum | VenueScalarFieldEnum[]
  }

  /**
   * VenueType without action
   */
  export type VenueTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VenueType
     */
    select?: VenueTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VenueType
     */
    omit?: VenueTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VenueTypeInclude<ExtArgs> | null
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


  export const AmenityToVenueScalarFieldEnum: {
    venueId: 'venueId',
    amenityId: 'amenityId'
  };

  export type AmenityToVenueScalarFieldEnum = (typeof AmenityToVenueScalarFieldEnum)[keyof typeof AmenityToVenueScalarFieldEnum]


  export const AmenityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    categoryId: 'categoryId'
  };

  export type AmenityScalarFieldEnum = (typeof AmenityScalarFieldEnum)[keyof typeof AmenityScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const FavouriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    venueId: 'venueId'
  };

  export type FavouriteScalarFieldEnum = (typeof FavouriteScalarFieldEnum)[keyof typeof FavouriteScalarFieldEnum]


  export const OccasionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OccasionScalarFieldEnum = (typeof OccasionScalarFieldEnum)[keyof typeof OccasionScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    score: 'score',
    review: 'review',
    createdAt: 'createdAt',
    reservationId: 'reservationId'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const ReservationScalarFieldEnum: {
    id: 'id',
    venueId: 'venueId',
    userId: 'userId',
    dateStart: 'dateStart',
    dateEnd: 'dateEnd',
    isPendingRating: 'isPendingRating'
  };

  export type ReservationScalarFieldEnum = (typeof ReservationScalarFieldEnum)[keyof typeof ReservationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    phoneNumber: 'phoneNumber',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VenueScalarFieldEnum: {
    id: 'id',
    pricePerNightInEURCent: 'pricePerNightInEURCent',
    rating: 'rating',
    capacity: 'capacity',
    amountsOfBeds: 'amountsOfBeds',
    extraSleepingDetails: 'extraSleepingDetails',
    name: 'name',
    images: 'images',
    description: 'description',
    checkInHour: 'checkInHour',
    checkOutHour: 'checkOutHour',
    distanceFromCityCenterInMeters: 'distanceFromCityCenterInMeters',
    facebookUrl: 'facebookUrl',
    instagramUrl: 'instagramUrl',
    twitterUrl: 'twitterUrl',
    websiteUrl: 'websiteUrl',
    streetNumber: 'streetNumber',
    streetName: 'streetName',
    postalCode: 'postalCode',
    city: 'city',
    latitude: 'latitude',
    longitude: 'longitude',
    ownerId: 'ownerId',
    venueTypeId: 'venueTypeId'
  };

  export type VenueScalarFieldEnum = (typeof VenueScalarFieldEnum)[keyof typeof VenueScalarFieldEnum]


  export const VenueTypeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type VenueTypeScalarFieldEnum = (typeof VenueTypeScalarFieldEnum)[keyof typeof VenueTypeScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type AmenityToVenueWhereInput = {
    AND?: AmenityToVenueWhereInput | AmenityToVenueWhereInput[]
    OR?: AmenityToVenueWhereInput[]
    NOT?: AmenityToVenueWhereInput | AmenityToVenueWhereInput[]
    venueId?: IntFilter<"AmenityToVenue"> | number
    amenityId?: IntFilter<"AmenityToVenue"> | number
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    amenity?: XOR<AmenityScalarRelationFilter, AmenityWhereInput>
  }

  export type AmenityToVenueOrderByWithRelationInput = {
    venueId?: SortOrder
    amenityId?: SortOrder
    venue?: VenueOrderByWithRelationInput
    amenity?: AmenityOrderByWithRelationInput
  }

  export type AmenityToVenueWhereUniqueInput = Prisma.AtLeast<{
    venueId_amenityId?: AmenityToVenueVenueIdAmenityIdCompoundUniqueInput
    AND?: AmenityToVenueWhereInput | AmenityToVenueWhereInput[]
    OR?: AmenityToVenueWhereInput[]
    NOT?: AmenityToVenueWhereInput | AmenityToVenueWhereInput[]
    venueId?: IntFilter<"AmenityToVenue"> | number
    amenityId?: IntFilter<"AmenityToVenue"> | number
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    amenity?: XOR<AmenityScalarRelationFilter, AmenityWhereInput>
  }, "venueId_amenityId">

  export type AmenityToVenueOrderByWithAggregationInput = {
    venueId?: SortOrder
    amenityId?: SortOrder
    _count?: AmenityToVenueCountOrderByAggregateInput
    _avg?: AmenityToVenueAvgOrderByAggregateInput
    _max?: AmenityToVenueMaxOrderByAggregateInput
    _min?: AmenityToVenueMinOrderByAggregateInput
    _sum?: AmenityToVenueSumOrderByAggregateInput
  }

  export type AmenityToVenueScalarWhereWithAggregatesInput = {
    AND?: AmenityToVenueScalarWhereWithAggregatesInput | AmenityToVenueScalarWhereWithAggregatesInput[]
    OR?: AmenityToVenueScalarWhereWithAggregatesInput[]
    NOT?: AmenityToVenueScalarWhereWithAggregatesInput | AmenityToVenueScalarWhereWithAggregatesInput[]
    venueId?: IntWithAggregatesFilter<"AmenityToVenue"> | number
    amenityId?: IntWithAggregatesFilter<"AmenityToVenue"> | number
  }

  export type AmenityWhereInput = {
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    id?: IntFilter<"Amenity"> | number
    name?: StringFilter<"Amenity"> | string
    categoryId?: IntFilter<"Amenity"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    occasions?: OccasionListRelationFilter
    amenityToVenues?: AmenityToVenueListRelationFilter
  }

  export type AmenityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    occasions?: OccasionOrderByRelationAggregateInput
    amenityToVenues?: AmenityToVenueOrderByRelationAggregateInput
  }

  export type AmenityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    name?: StringFilter<"Amenity"> | string
    categoryId?: IntFilter<"Amenity"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    occasions?: OccasionListRelationFilter
    amenityToVenues?: AmenityToVenueListRelationFilter
  }, "id">

  export type AmenityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
    _count?: AmenityCountOrderByAggregateInput
    _avg?: AmenityAvgOrderByAggregateInput
    _max?: AmenityMaxOrderByAggregateInput
    _min?: AmenityMinOrderByAggregateInput
    _sum?: AmenitySumOrderByAggregateInput
  }

  export type AmenityScalarWhereWithAggregatesInput = {
    AND?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    OR?: AmenityScalarWhereWithAggregatesInput[]
    NOT?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Amenity"> | number
    name?: StringWithAggregatesFilter<"Amenity"> | string
    categoryId?: IntWithAggregatesFilter<"Amenity"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    amenities?: AmenityListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    amenities?: AmenityOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    amenities?: AmenityListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type FavouriteWhereInput = {
    AND?: FavouriteWhereInput | FavouriteWhereInput[]
    OR?: FavouriteWhereInput[]
    NOT?: FavouriteWhereInput | FavouriteWhereInput[]
    id?: IntFilter<"Favourite"> | number
    userId?: IntFilter<"Favourite"> | number
    venueId?: IntFilter<"Favourite"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }

  export type FavouriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    user?: UserOrderByWithRelationInput
    venue?: VenueOrderByWithRelationInput
  }

  export type FavouriteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_venueId?: FavouriteUserIdVenueIdCompoundUniqueInput
    AND?: FavouriteWhereInput | FavouriteWhereInput[]
    OR?: FavouriteWhereInput[]
    NOT?: FavouriteWhereInput | FavouriteWhereInput[]
    userId?: IntFilter<"Favourite"> | number
    venueId?: IntFilter<"Favourite"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
  }, "id" | "userId_venueId">

  export type FavouriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
    _count?: FavouriteCountOrderByAggregateInput
    _avg?: FavouriteAvgOrderByAggregateInput
    _max?: FavouriteMaxOrderByAggregateInput
    _min?: FavouriteMinOrderByAggregateInput
    _sum?: FavouriteSumOrderByAggregateInput
  }

  export type FavouriteScalarWhereWithAggregatesInput = {
    AND?: FavouriteScalarWhereWithAggregatesInput | FavouriteScalarWhereWithAggregatesInput[]
    OR?: FavouriteScalarWhereWithAggregatesInput[]
    NOT?: FavouriteScalarWhereWithAggregatesInput | FavouriteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Favourite"> | number
    userId?: IntWithAggregatesFilter<"Favourite"> | number
    venueId?: IntWithAggregatesFilter<"Favourite"> | number
  }

  export type OccasionWhereInput = {
    AND?: OccasionWhereInput | OccasionWhereInput[]
    OR?: OccasionWhereInput[]
    NOT?: OccasionWhereInput | OccasionWhereInput[]
    id?: IntFilter<"Occasion"> | number
    name?: StringFilter<"Occasion"> | string
    amenities?: AmenityListRelationFilter
  }

  export type OccasionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    amenities?: AmenityOrderByRelationAggregateInput
  }

  export type OccasionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OccasionWhereInput | OccasionWhereInput[]
    OR?: OccasionWhereInput[]
    NOT?: OccasionWhereInput | OccasionWhereInput[]
    name?: StringFilter<"Occasion"> | string
    amenities?: AmenityListRelationFilter
  }, "id">

  export type OccasionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: OccasionCountOrderByAggregateInput
    _avg?: OccasionAvgOrderByAggregateInput
    _max?: OccasionMaxOrderByAggregateInput
    _min?: OccasionMinOrderByAggregateInput
    _sum?: OccasionSumOrderByAggregateInput
  }

  export type OccasionScalarWhereWithAggregatesInput = {
    AND?: OccasionScalarWhereWithAggregatesInput | OccasionScalarWhereWithAggregatesInput[]
    OR?: OccasionScalarWhereWithAggregatesInput[]
    NOT?: OccasionScalarWhereWithAggregatesInput | OccasionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Occasion"> | number
    name?: StringWithAggregatesFilter<"Occasion"> | string
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: IntFilter<"Rating"> | number
    score?: IntFilter<"Rating"> | number
    review?: StringNullableFilter<"Rating"> | string | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    reservationId?: IntFilter<"Rating"> | number
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    score?: SortOrder
    review?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reservationId?: SortOrder
    reservation?: ReservationOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reservationId?: number
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    score?: IntFilter<"Rating"> | number
    review?: StringNullableFilter<"Rating"> | string | null
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    reservation?: XOR<ReservationScalarRelationFilter, ReservationWhereInput>
  }, "id" | "reservationId">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    score?: SortOrder
    review?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    reservationId?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rating"> | number
    score?: IntWithAggregatesFilter<"Rating"> | number
    review?: StringNullableWithAggregatesFilter<"Rating"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
    reservationId?: IntWithAggregatesFilter<"Rating"> | number
  }

  export type ReservationWhereInput = {
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    id?: IntFilter<"Reservation"> | number
    venueId?: IntFilter<"Reservation"> | number
    userId?: IntFilter<"Reservation"> | number
    dateStart?: DateTimeFilter<"Reservation"> | Date | string
    dateEnd?: DateTimeFilter<"Reservation"> | Date | string
    isPendingRating?: BoolFilter<"Reservation"> | boolean
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rating?: XOR<RatingNullableScalarRelationFilter, RatingWhereInput> | null
  }

  export type ReservationOrderByWithRelationInput = {
    id?: SortOrder
    venueId?: SortOrder
    userId?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    isPendingRating?: SortOrder
    venue?: VenueOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    rating?: RatingOrderByWithRelationInput
  }

  export type ReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservationWhereInput | ReservationWhereInput[]
    OR?: ReservationWhereInput[]
    NOT?: ReservationWhereInput | ReservationWhereInput[]
    venueId?: IntFilter<"Reservation"> | number
    userId?: IntFilter<"Reservation"> | number
    dateStart?: DateTimeFilter<"Reservation"> | Date | string
    dateEnd?: DateTimeFilter<"Reservation"> | Date | string
    isPendingRating?: BoolFilter<"Reservation"> | boolean
    venue?: XOR<VenueScalarRelationFilter, VenueWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    rating?: XOR<RatingNullableScalarRelationFilter, RatingWhereInput> | null
  }, "id">

  export type ReservationOrderByWithAggregationInput = {
    id?: SortOrder
    venueId?: SortOrder
    userId?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    isPendingRating?: SortOrder
    _count?: ReservationCountOrderByAggregateInput
    _avg?: ReservationAvgOrderByAggregateInput
    _max?: ReservationMaxOrderByAggregateInput
    _min?: ReservationMinOrderByAggregateInput
    _sum?: ReservationSumOrderByAggregateInput
  }

  export type ReservationScalarWhereWithAggregatesInput = {
    AND?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    OR?: ReservationScalarWhereWithAggregatesInput[]
    NOT?: ReservationScalarWhereWithAggregatesInput | ReservationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reservation"> | number
    venueId?: IntWithAggregatesFilter<"Reservation"> | number
    userId?: IntWithAggregatesFilter<"Reservation"> | number
    dateStart?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    dateEnd?: DateTimeWithAggregatesFilter<"Reservation"> | Date | string
    isPendingRating?: BoolWithAggregatesFilter<"Reservation"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    venues?: VenueListRelationFilter
    reservations?: ReservationListRelationFilter
    favourites?: FavouriteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    venues?: VenueOrderByRelationAggregateInput
    reservations?: ReservationOrderByRelationAggregateInput
    favourites?: FavouriteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    phoneNumber?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    venues?: VenueListRelationFilter
    reservations?: ReservationListRelationFilter
    favourites?: FavouriteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type VenueWhereInput = {
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    id?: IntFilter<"Venue"> | number
    pricePerNightInEURCent?: IntFilter<"Venue"> | number
    rating?: FloatFilter<"Venue"> | number
    capacity?: IntFilter<"Venue"> | number
    amountsOfBeds?: IntFilter<"Venue"> | number
    extraSleepingDetails?: StringFilter<"Venue"> | string
    name?: StringFilter<"Venue"> | string
    images?: JsonFilter<"Venue">
    description?: StringFilter<"Venue"> | string
    checkInHour?: IntFilter<"Venue"> | number
    checkOutHour?: IntFilter<"Venue"> | number
    distanceFromCityCenterInMeters?: IntFilter<"Venue"> | number
    facebookUrl?: StringNullableFilter<"Venue"> | string | null
    instagramUrl?: StringNullableFilter<"Venue"> | string | null
    twitterUrl?: StringNullableFilter<"Venue"> | string | null
    websiteUrl?: StringNullableFilter<"Venue"> | string | null
    streetNumber?: StringFilter<"Venue"> | string
    streetName?: StringFilter<"Venue"> | string
    postalCode?: StringFilter<"Venue"> | string
    city?: StringFilter<"Venue"> | string
    latitude?: FloatNullableFilter<"Venue"> | number | null
    longitude?: FloatNullableFilter<"Venue"> | number | null
    ownerId?: IntFilter<"Venue"> | number
    venueTypeId?: IntFilter<"Venue"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    reservations?: ReservationListRelationFilter
    favourites?: FavouriteListRelationFilter
    amenityToVenues?: AmenityToVenueListRelationFilter
    venueType?: XOR<VenueTypeScalarRelationFilter, VenueTypeWhereInput>
  }

  export type VenueOrderByWithRelationInput = {
    id?: SortOrder
    pricePerNightInEURCent?: SortOrder
    rating?: SortOrder
    capacity?: SortOrder
    amountsOfBeds?: SortOrder
    extraSleepingDetails?: SortOrder
    name?: SortOrder
    images?: SortOrder
    description?: SortOrder
    checkInHour?: SortOrder
    checkOutHour?: SortOrder
    distanceFromCityCenterInMeters?: SortOrder
    facebookUrl?: SortOrderInput | SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    streetNumber?: SortOrder
    streetName?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    venueTypeId?: SortOrder
    owner?: UserOrderByWithRelationInput
    reservations?: ReservationOrderByRelationAggregateInput
    favourites?: FavouriteOrderByRelationAggregateInput
    amenityToVenues?: AmenityToVenueOrderByRelationAggregateInput
    venueType?: VenueTypeOrderByWithRelationInput
  }

  export type VenueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VenueWhereInput | VenueWhereInput[]
    OR?: VenueWhereInput[]
    NOT?: VenueWhereInput | VenueWhereInput[]
    pricePerNightInEURCent?: IntFilter<"Venue"> | number
    rating?: FloatFilter<"Venue"> | number
    capacity?: IntFilter<"Venue"> | number
    amountsOfBeds?: IntFilter<"Venue"> | number
    extraSleepingDetails?: StringFilter<"Venue"> | string
    name?: StringFilter<"Venue"> | string
    images?: JsonFilter<"Venue">
    description?: StringFilter<"Venue"> | string
    checkInHour?: IntFilter<"Venue"> | number
    checkOutHour?: IntFilter<"Venue"> | number
    distanceFromCityCenterInMeters?: IntFilter<"Venue"> | number
    facebookUrl?: StringNullableFilter<"Venue"> | string | null
    instagramUrl?: StringNullableFilter<"Venue"> | string | null
    twitterUrl?: StringNullableFilter<"Venue"> | string | null
    websiteUrl?: StringNullableFilter<"Venue"> | string | null
    streetNumber?: StringFilter<"Venue"> | string
    streetName?: StringFilter<"Venue"> | string
    postalCode?: StringFilter<"Venue"> | string
    city?: StringFilter<"Venue"> | string
    latitude?: FloatNullableFilter<"Venue"> | number | null
    longitude?: FloatNullableFilter<"Venue"> | number | null
    ownerId?: IntFilter<"Venue"> | number
    venueTypeId?: IntFilter<"Venue"> | number
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    reservations?: ReservationListRelationFilter
    favourites?: FavouriteListRelationFilter
    amenityToVenues?: AmenityToVenueListRelationFilter
    venueType?: XOR<VenueTypeScalarRelationFilter, VenueTypeWhereInput>
  }, "id">

  export type VenueOrderByWithAggregationInput = {
    id?: SortOrder
    pricePerNightInEURCent?: SortOrder
    rating?: SortOrder
    capacity?: SortOrder
    amountsOfBeds?: SortOrder
    extraSleepingDetails?: SortOrder
    name?: SortOrder
    images?: SortOrder
    description?: SortOrder
    checkInHour?: SortOrder
    checkOutHour?: SortOrder
    distanceFromCityCenterInMeters?: SortOrder
    facebookUrl?: SortOrderInput | SortOrder
    instagramUrl?: SortOrderInput | SortOrder
    twitterUrl?: SortOrderInput | SortOrder
    websiteUrl?: SortOrderInput | SortOrder
    streetNumber?: SortOrder
    streetName?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    ownerId?: SortOrder
    venueTypeId?: SortOrder
    _count?: VenueCountOrderByAggregateInput
    _avg?: VenueAvgOrderByAggregateInput
    _max?: VenueMaxOrderByAggregateInput
    _min?: VenueMinOrderByAggregateInput
    _sum?: VenueSumOrderByAggregateInput
  }

  export type VenueScalarWhereWithAggregatesInput = {
    AND?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    OR?: VenueScalarWhereWithAggregatesInput[]
    NOT?: VenueScalarWhereWithAggregatesInput | VenueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Venue"> | number
    pricePerNightInEURCent?: IntWithAggregatesFilter<"Venue"> | number
    rating?: FloatWithAggregatesFilter<"Venue"> | number
    capacity?: IntWithAggregatesFilter<"Venue"> | number
    amountsOfBeds?: IntWithAggregatesFilter<"Venue"> | number
    extraSleepingDetails?: StringWithAggregatesFilter<"Venue"> | string
    name?: StringWithAggregatesFilter<"Venue"> | string
    images?: JsonWithAggregatesFilter<"Venue">
    description?: StringWithAggregatesFilter<"Venue"> | string
    checkInHour?: IntWithAggregatesFilter<"Venue"> | number
    checkOutHour?: IntWithAggregatesFilter<"Venue"> | number
    distanceFromCityCenterInMeters?: IntWithAggregatesFilter<"Venue"> | number
    facebookUrl?: StringNullableWithAggregatesFilter<"Venue"> | string | null
    instagramUrl?: StringNullableWithAggregatesFilter<"Venue"> | string | null
    twitterUrl?: StringNullableWithAggregatesFilter<"Venue"> | string | null
    websiteUrl?: StringNullableWithAggregatesFilter<"Venue"> | string | null
    streetNumber?: StringWithAggregatesFilter<"Venue"> | string
    streetName?: StringWithAggregatesFilter<"Venue"> | string
    postalCode?: StringWithAggregatesFilter<"Venue"> | string
    city?: StringWithAggregatesFilter<"Venue"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Venue"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Venue"> | number | null
    ownerId?: IntWithAggregatesFilter<"Venue"> | number
    venueTypeId?: IntWithAggregatesFilter<"Venue"> | number
  }

  export type VenueTypeWhereInput = {
    AND?: VenueTypeWhereInput | VenueTypeWhereInput[]
    OR?: VenueTypeWhereInput[]
    NOT?: VenueTypeWhereInput | VenueTypeWhereInput[]
    id?: IntFilter<"VenueType"> | number
    name?: StringFilter<"VenueType"> | string
    venues?: VenueListRelationFilter
  }

  export type VenueTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    venues?: VenueOrderByRelationAggregateInput
  }

  export type VenueTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: VenueTypeWhereInput | VenueTypeWhereInput[]
    OR?: VenueTypeWhereInput[]
    NOT?: VenueTypeWhereInput | VenueTypeWhereInput[]
    venues?: VenueListRelationFilter
  }, "id" | "name">

  export type VenueTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: VenueTypeCountOrderByAggregateInput
    _avg?: VenueTypeAvgOrderByAggregateInput
    _max?: VenueTypeMaxOrderByAggregateInput
    _min?: VenueTypeMinOrderByAggregateInput
    _sum?: VenueTypeSumOrderByAggregateInput
  }

  export type VenueTypeScalarWhereWithAggregatesInput = {
    AND?: VenueTypeScalarWhereWithAggregatesInput | VenueTypeScalarWhereWithAggregatesInput[]
    OR?: VenueTypeScalarWhereWithAggregatesInput[]
    NOT?: VenueTypeScalarWhereWithAggregatesInput | VenueTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VenueType"> | number
    name?: StringWithAggregatesFilter<"VenueType"> | string
  }

  export type AmenityToVenueCreateInput = {
    venue: VenueCreateNestedOneWithoutAmenityToVenuesInput
    amenity: AmenityCreateNestedOneWithoutAmenityToVenuesInput
  }

  export type AmenityToVenueUncheckedCreateInput = {
    venueId: number
    amenityId: number
  }

  export type AmenityToVenueUpdateInput = {
    venue?: VenueUpdateOneRequiredWithoutAmenityToVenuesNestedInput
    amenity?: AmenityUpdateOneRequiredWithoutAmenityToVenuesNestedInput
  }

  export type AmenityToVenueUncheckedUpdateInput = {
    venueId?: IntFieldUpdateOperationsInput | number
    amenityId?: IntFieldUpdateOperationsInput | number
  }

  export type AmenityToVenueCreateManyInput = {
    venueId: number
    amenityId: number
  }

  export type AmenityToVenueUpdateManyMutationInput = {

  }

  export type AmenityToVenueUncheckedUpdateManyInput = {
    venueId?: IntFieldUpdateOperationsInput | number
    amenityId?: IntFieldUpdateOperationsInput | number
  }

  export type AmenityCreateInput = {
    name: string
    category: CategoryCreateNestedOneWithoutAmenitiesInput
    occasions?: OccasionCreateNestedManyWithoutAmenitiesInput
    amenityToVenues?: AmenityToVenueCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUncheckedCreateInput = {
    id?: number
    name: string
    categoryId: number
    occasions?: OccasionUncheckedCreateNestedManyWithoutAmenitiesInput
    amenityToVenues?: AmenityToVenueUncheckedCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutAmenitiesNestedInput
    occasions?: OccasionUpdateManyWithoutAmenitiesNestedInput
    amenityToVenues?: AmenityToVenueUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    occasions?: OccasionUncheckedUpdateManyWithoutAmenitiesNestedInput
    amenityToVenues?: AmenityToVenueUncheckedUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityCreateManyInput = {
    id?: number
    name: string
    categoryId: number
  }

  export type AmenityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    amenities?: AmenityCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    amenities?: AmenityUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    amenities?: AmenityUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amenities?: AmenityUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FavouriteCreateInput = {
    user: UserCreateNestedOneWithoutFavouritesInput
    venue: VenueCreateNestedOneWithoutFavouritesInput
  }

  export type FavouriteUncheckedCreateInput = {
    id?: number
    userId: number
    venueId: number
  }

  export type FavouriteUpdateInput = {
    user?: UserUpdateOneRequiredWithoutFavouritesNestedInput
    venue?: VenueUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type FavouriteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
  }

  export type FavouriteCreateManyInput = {
    id?: number
    userId: number
    venueId: number
  }

  export type FavouriteUpdateManyMutationInput = {

  }

  export type FavouriteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
  }

  export type OccasionCreateInput = {
    name: string
    amenities?: AmenityCreateNestedManyWithoutOccasionsInput
  }

  export type OccasionUncheckedCreateInput = {
    id?: number
    name: string
    amenities?: AmenityUncheckedCreateNestedManyWithoutOccasionsInput
  }

  export type OccasionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    amenities?: AmenityUpdateManyWithoutOccasionsNestedInput
  }

  export type OccasionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    amenities?: AmenityUncheckedUpdateManyWithoutOccasionsNestedInput
  }

  export type OccasionCreateManyInput = {
    id?: number
    name: string
  }

  export type OccasionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OccasionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RatingCreateInput = {
    score: number
    review?: string | null
    createdAt?: Date | string
    reservation: ReservationCreateNestedOneWithoutRatingInput
  }

  export type RatingUncheckedCreateInput = {
    id?: number
    score: number
    review?: string | null
    createdAt?: Date | string
    reservationId: number
  }

  export type RatingUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservation?: ReservationUpdateOneRequiredWithoutRatingNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationId?: IntFieldUpdateOperationsInput | number
  }

  export type RatingCreateManyInput = {
    id?: number
    score: number
    review?: string | null
    createdAt?: Date | string
    reservationId: number
  }

  export type RatingUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservationId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationCreateInput = {
    dateStart: Date | string
    dateEnd: Date | string
    isPendingRating: boolean
    venue: VenueCreateNestedOneWithoutReservationsInput
    user: UserCreateNestedOneWithoutReservationsInput
    rating?: RatingCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateInput = {
    id?: number
    venueId: number
    userId: number
    dateStart: Date | string
    dateEnd: Date | string
    isPendingRating: boolean
    rating?: RatingUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationUpdateInput = {
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isPendingRating?: BoolFieldUpdateOperationsInput | boolean
    venue?: VenueUpdateOneRequiredWithoutReservationsNestedInput
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    rating?: RatingUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isPendingRating?: BoolFieldUpdateOperationsInput | boolean
    rating?: RatingUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationCreateManyInput = {
    id?: number
    venueId: number
    userId: number
    dateStart: Date | string
    dateEnd: Date | string
    isPendingRating: boolean
  }

  export type ReservationUpdateManyMutationInput = {
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isPendingRating?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ReservationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isPendingRating?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    email: string
    name: string
    phoneNumber: string
    password: string
    venues?: VenueCreateNestedManyWithoutOwnerInput
    reservations?: ReservationCreateNestedManyWithoutUserInput
    favourites?: FavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name: string
    phoneNumber: string
    password: string
    venues?: VenueUncheckedCreateNestedManyWithoutOwnerInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    favourites?: FavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    venues?: VenueUpdateManyWithoutOwnerNestedInput
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    favourites?: FavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    venues?: VenueUncheckedUpdateManyWithoutOwnerNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    favourites?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name: string
    phoneNumber: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type VenueCreateInput = {
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    owner: UserCreateNestedOneWithoutVenuesInput
    reservations?: ReservationCreateNestedManyWithoutVenueInput
    favourites?: FavouriteCreateNestedManyWithoutVenueInput
    amenityToVenues?: AmenityToVenueCreateNestedManyWithoutVenueInput
    venueType: VenueTypeCreateNestedOneWithoutVenuesInput
  }

  export type VenueUncheckedCreateInput = {
    id?: number
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    ownerId: number
    venueTypeId: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutVenueInput
    favourites?: FavouriteUncheckedCreateNestedManyWithoutVenueInput
    amenityToVenues?: AmenityToVenueUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueUpdateInput = {
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    owner?: UserUpdateOneRequiredWithoutVenuesNestedInput
    reservations?: ReservationUpdateManyWithoutVenueNestedInput
    favourites?: FavouriteUpdateManyWithoutVenueNestedInput
    amenityToVenues?: AmenityToVenueUpdateManyWithoutVenueNestedInput
    venueType?: VenueTypeUpdateOneRequiredWithoutVenuesNestedInput
  }

  export type VenueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    venueTypeId?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutVenueNestedInput
    favourites?: FavouriteUncheckedUpdateManyWithoutVenueNestedInput
    amenityToVenues?: AmenityToVenueUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueCreateManyInput = {
    id?: number
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    ownerId: number
    venueTypeId: number
  }

  export type VenueUpdateManyMutationInput = {
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type VenueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    venueTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type VenueTypeCreateInput = {
    name: string
    venues?: VenueCreateNestedManyWithoutVenueTypeInput
  }

  export type VenueTypeUncheckedCreateInput = {
    id?: number
    name: string
    venues?: VenueUncheckedCreateNestedManyWithoutVenueTypeInput
  }

  export type VenueTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    venues?: VenueUpdateManyWithoutVenueTypeNestedInput
  }

  export type VenueTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    venues?: VenueUncheckedUpdateManyWithoutVenueTypeNestedInput
  }

  export type VenueTypeCreateManyInput = {
    id?: number
    name: string
  }

  export type VenueTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VenueTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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

  export type VenueScalarRelationFilter = {
    is?: VenueWhereInput
    isNot?: VenueWhereInput
  }

  export type AmenityScalarRelationFilter = {
    is?: AmenityWhereInput
    isNot?: AmenityWhereInput
  }

  export type AmenityToVenueVenueIdAmenityIdCompoundUniqueInput = {
    venueId: number
    amenityId: number
  }

  export type AmenityToVenueCountOrderByAggregateInput = {
    venueId?: SortOrder
    amenityId?: SortOrder
  }

  export type AmenityToVenueAvgOrderByAggregateInput = {
    venueId?: SortOrder
    amenityId?: SortOrder
  }

  export type AmenityToVenueMaxOrderByAggregateInput = {
    venueId?: SortOrder
    amenityId?: SortOrder
  }

  export type AmenityToVenueMinOrderByAggregateInput = {
    venueId?: SortOrder
    amenityId?: SortOrder
  }

  export type AmenityToVenueSumOrderByAggregateInput = {
    venueId?: SortOrder
    amenityId?: SortOrder
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

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type OccasionListRelationFilter = {
    every?: OccasionWhereInput
    some?: OccasionWhereInput
    none?: OccasionWhereInput
  }

  export type AmenityToVenueListRelationFilter = {
    every?: AmenityToVenueWhereInput
    some?: AmenityToVenueWhereInput
    none?: AmenityToVenueWhereInput
  }

  export type OccasionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AmenityToVenueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AmenityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type AmenityAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
  }

  export type AmenityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type AmenityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    categoryId?: SortOrder
  }

  export type AmenitySumOrderByAggregateInput = {
    id?: SortOrder
    categoryId?: SortOrder
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

  export type AmenityListRelationFilter = {
    every?: AmenityWhereInput
    some?: AmenityWhereInput
    none?: AmenityWhereInput
  }

  export type AmenityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FavouriteUserIdVenueIdCompoundUniqueInput = {
    userId: number
    venueId: number
  }

  export type FavouriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
  }

  export type FavouriteAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
  }

  export type FavouriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
  }

  export type FavouriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
  }

  export type FavouriteSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    venueId?: SortOrder
  }

  export type OccasionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OccasionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OccasionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OccasionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OccasionSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type ReservationScalarRelationFilter = {
    is?: ReservationWhereInput
    isNot?: ReservationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    reservationId?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    reservationId?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    reservationId?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    review?: SortOrder
    createdAt?: SortOrder
    reservationId?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    id?: SortOrder
    score?: SortOrder
    reservationId?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RatingNullableScalarRelationFilter = {
    is?: RatingWhereInput | null
    isNot?: RatingWhereInput | null
  }

  export type ReservationCountOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    userId?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    isPendingRating?: SortOrder
  }

  export type ReservationAvgOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    userId?: SortOrder
  }

  export type ReservationMaxOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    userId?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    isPendingRating?: SortOrder
  }

  export type ReservationMinOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    userId?: SortOrder
    dateStart?: SortOrder
    dateEnd?: SortOrder
    isPendingRating?: SortOrder
  }

  export type ReservationSumOrderByAggregateInput = {
    id?: SortOrder
    venueId?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type VenueListRelationFilter = {
    every?: VenueWhereInput
    some?: VenueWhereInput
    none?: VenueWhereInput
  }

  export type ReservationListRelationFilter = {
    every?: ReservationWhereInput
    some?: ReservationWhereInput
    none?: ReservationWhereInput
  }

  export type FavouriteListRelationFilter = {
    every?: FavouriteWhereInput
    some?: FavouriteWhereInput
    none?: FavouriteWhereInput
  }

  export type VenueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavouriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type VenueTypeScalarRelationFilter = {
    is?: VenueTypeWhereInput
    isNot?: VenueTypeWhereInput
  }

  export type VenueCountOrderByAggregateInput = {
    id?: SortOrder
    pricePerNightInEURCent?: SortOrder
    rating?: SortOrder
    capacity?: SortOrder
    amountsOfBeds?: SortOrder
    extraSleepingDetails?: SortOrder
    name?: SortOrder
    images?: SortOrder
    description?: SortOrder
    checkInHour?: SortOrder
    checkOutHour?: SortOrder
    distanceFromCityCenterInMeters?: SortOrder
    facebookUrl?: SortOrder
    instagramUrl?: SortOrder
    twitterUrl?: SortOrder
    websiteUrl?: SortOrder
    streetNumber?: SortOrder
    streetName?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ownerId?: SortOrder
    venueTypeId?: SortOrder
  }

  export type VenueAvgOrderByAggregateInput = {
    id?: SortOrder
    pricePerNightInEURCent?: SortOrder
    rating?: SortOrder
    capacity?: SortOrder
    amountsOfBeds?: SortOrder
    checkInHour?: SortOrder
    checkOutHour?: SortOrder
    distanceFromCityCenterInMeters?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ownerId?: SortOrder
    venueTypeId?: SortOrder
  }

  export type VenueMaxOrderByAggregateInput = {
    id?: SortOrder
    pricePerNightInEURCent?: SortOrder
    rating?: SortOrder
    capacity?: SortOrder
    amountsOfBeds?: SortOrder
    extraSleepingDetails?: SortOrder
    name?: SortOrder
    description?: SortOrder
    checkInHour?: SortOrder
    checkOutHour?: SortOrder
    distanceFromCityCenterInMeters?: SortOrder
    facebookUrl?: SortOrder
    instagramUrl?: SortOrder
    twitterUrl?: SortOrder
    websiteUrl?: SortOrder
    streetNumber?: SortOrder
    streetName?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ownerId?: SortOrder
    venueTypeId?: SortOrder
  }

  export type VenueMinOrderByAggregateInput = {
    id?: SortOrder
    pricePerNightInEURCent?: SortOrder
    rating?: SortOrder
    capacity?: SortOrder
    amountsOfBeds?: SortOrder
    extraSleepingDetails?: SortOrder
    name?: SortOrder
    description?: SortOrder
    checkInHour?: SortOrder
    checkOutHour?: SortOrder
    distanceFromCityCenterInMeters?: SortOrder
    facebookUrl?: SortOrder
    instagramUrl?: SortOrder
    twitterUrl?: SortOrder
    websiteUrl?: SortOrder
    streetNumber?: SortOrder
    streetName?: SortOrder
    postalCode?: SortOrder
    city?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ownerId?: SortOrder
    venueTypeId?: SortOrder
  }

  export type VenueSumOrderByAggregateInput = {
    id?: SortOrder
    pricePerNightInEURCent?: SortOrder
    rating?: SortOrder
    capacity?: SortOrder
    amountsOfBeds?: SortOrder
    checkInHour?: SortOrder
    checkOutHour?: SortOrder
    distanceFromCityCenterInMeters?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    ownerId?: SortOrder
    venueTypeId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type VenueTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type VenueTypeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VenueTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type VenueTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type VenueTypeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VenueCreateNestedOneWithoutAmenityToVenuesInput = {
    create?: XOR<VenueCreateWithoutAmenityToVenuesInput, VenueUncheckedCreateWithoutAmenityToVenuesInput>
    connectOrCreate?: VenueCreateOrConnectWithoutAmenityToVenuesInput
    connect?: VenueWhereUniqueInput
  }

  export type AmenityCreateNestedOneWithoutAmenityToVenuesInput = {
    create?: XOR<AmenityCreateWithoutAmenityToVenuesInput, AmenityUncheckedCreateWithoutAmenityToVenuesInput>
    connectOrCreate?: AmenityCreateOrConnectWithoutAmenityToVenuesInput
    connect?: AmenityWhereUniqueInput
  }

  export type VenueUpdateOneRequiredWithoutAmenityToVenuesNestedInput = {
    create?: XOR<VenueCreateWithoutAmenityToVenuesInput, VenueUncheckedCreateWithoutAmenityToVenuesInput>
    connectOrCreate?: VenueCreateOrConnectWithoutAmenityToVenuesInput
    upsert?: VenueUpsertWithoutAmenityToVenuesInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutAmenityToVenuesInput, VenueUpdateWithoutAmenityToVenuesInput>, VenueUncheckedUpdateWithoutAmenityToVenuesInput>
  }

  export type AmenityUpdateOneRequiredWithoutAmenityToVenuesNestedInput = {
    create?: XOR<AmenityCreateWithoutAmenityToVenuesInput, AmenityUncheckedCreateWithoutAmenityToVenuesInput>
    connectOrCreate?: AmenityCreateOrConnectWithoutAmenityToVenuesInput
    upsert?: AmenityUpsertWithoutAmenityToVenuesInput
    connect?: AmenityWhereUniqueInput
    update?: XOR<XOR<AmenityUpdateToOneWithWhereWithoutAmenityToVenuesInput, AmenityUpdateWithoutAmenityToVenuesInput>, AmenityUncheckedUpdateWithoutAmenityToVenuesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryCreateNestedOneWithoutAmenitiesInput = {
    create?: XOR<CategoryCreateWithoutAmenitiesInput, CategoryUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAmenitiesInput
    connect?: CategoryWhereUniqueInput
  }

  export type OccasionCreateNestedManyWithoutAmenitiesInput = {
    create?: XOR<OccasionCreateWithoutAmenitiesInput, OccasionUncheckedCreateWithoutAmenitiesInput> | OccasionCreateWithoutAmenitiesInput[] | OccasionUncheckedCreateWithoutAmenitiesInput[]
    connectOrCreate?: OccasionCreateOrConnectWithoutAmenitiesInput | OccasionCreateOrConnectWithoutAmenitiesInput[]
    connect?: OccasionWhereUniqueInput | OccasionWhereUniqueInput[]
  }

  export type AmenityToVenueCreateNestedManyWithoutAmenityInput = {
    create?: XOR<AmenityToVenueCreateWithoutAmenityInput, AmenityToVenueUncheckedCreateWithoutAmenityInput> | AmenityToVenueCreateWithoutAmenityInput[] | AmenityToVenueUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: AmenityToVenueCreateOrConnectWithoutAmenityInput | AmenityToVenueCreateOrConnectWithoutAmenityInput[]
    createMany?: AmenityToVenueCreateManyAmenityInputEnvelope
    connect?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
  }

  export type OccasionUncheckedCreateNestedManyWithoutAmenitiesInput = {
    create?: XOR<OccasionCreateWithoutAmenitiesInput, OccasionUncheckedCreateWithoutAmenitiesInput> | OccasionCreateWithoutAmenitiesInput[] | OccasionUncheckedCreateWithoutAmenitiesInput[]
    connectOrCreate?: OccasionCreateOrConnectWithoutAmenitiesInput | OccasionCreateOrConnectWithoutAmenitiesInput[]
    connect?: OccasionWhereUniqueInput | OccasionWhereUniqueInput[]
  }

  export type AmenityToVenueUncheckedCreateNestedManyWithoutAmenityInput = {
    create?: XOR<AmenityToVenueCreateWithoutAmenityInput, AmenityToVenueUncheckedCreateWithoutAmenityInput> | AmenityToVenueCreateWithoutAmenityInput[] | AmenityToVenueUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: AmenityToVenueCreateOrConnectWithoutAmenityInput | AmenityToVenueCreateOrConnectWithoutAmenityInput[]
    createMany?: AmenityToVenueCreateManyAmenityInputEnvelope
    connect?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CategoryUpdateOneRequiredWithoutAmenitiesNestedInput = {
    create?: XOR<CategoryCreateWithoutAmenitiesInput, CategoryUncheckedCreateWithoutAmenitiesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAmenitiesInput
    upsert?: CategoryUpsertWithoutAmenitiesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutAmenitiesInput, CategoryUpdateWithoutAmenitiesInput>, CategoryUncheckedUpdateWithoutAmenitiesInput>
  }

  export type OccasionUpdateManyWithoutAmenitiesNestedInput = {
    create?: XOR<OccasionCreateWithoutAmenitiesInput, OccasionUncheckedCreateWithoutAmenitiesInput> | OccasionCreateWithoutAmenitiesInput[] | OccasionUncheckedCreateWithoutAmenitiesInput[]
    connectOrCreate?: OccasionCreateOrConnectWithoutAmenitiesInput | OccasionCreateOrConnectWithoutAmenitiesInput[]
    upsert?: OccasionUpsertWithWhereUniqueWithoutAmenitiesInput | OccasionUpsertWithWhereUniqueWithoutAmenitiesInput[]
    set?: OccasionWhereUniqueInput | OccasionWhereUniqueInput[]
    disconnect?: OccasionWhereUniqueInput | OccasionWhereUniqueInput[]
    delete?: OccasionWhereUniqueInput | OccasionWhereUniqueInput[]
    connect?: OccasionWhereUniqueInput | OccasionWhereUniqueInput[]
    update?: OccasionUpdateWithWhereUniqueWithoutAmenitiesInput | OccasionUpdateWithWhereUniqueWithoutAmenitiesInput[]
    updateMany?: OccasionUpdateManyWithWhereWithoutAmenitiesInput | OccasionUpdateManyWithWhereWithoutAmenitiesInput[]
    deleteMany?: OccasionScalarWhereInput | OccasionScalarWhereInput[]
  }

  export type AmenityToVenueUpdateManyWithoutAmenityNestedInput = {
    create?: XOR<AmenityToVenueCreateWithoutAmenityInput, AmenityToVenueUncheckedCreateWithoutAmenityInput> | AmenityToVenueCreateWithoutAmenityInput[] | AmenityToVenueUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: AmenityToVenueCreateOrConnectWithoutAmenityInput | AmenityToVenueCreateOrConnectWithoutAmenityInput[]
    upsert?: AmenityToVenueUpsertWithWhereUniqueWithoutAmenityInput | AmenityToVenueUpsertWithWhereUniqueWithoutAmenityInput[]
    createMany?: AmenityToVenueCreateManyAmenityInputEnvelope
    set?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    disconnect?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    delete?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    connect?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    update?: AmenityToVenueUpdateWithWhereUniqueWithoutAmenityInput | AmenityToVenueUpdateWithWhereUniqueWithoutAmenityInput[]
    updateMany?: AmenityToVenueUpdateManyWithWhereWithoutAmenityInput | AmenityToVenueUpdateManyWithWhereWithoutAmenityInput[]
    deleteMany?: AmenityToVenueScalarWhereInput | AmenityToVenueScalarWhereInput[]
  }

  export type OccasionUncheckedUpdateManyWithoutAmenitiesNestedInput = {
    create?: XOR<OccasionCreateWithoutAmenitiesInput, OccasionUncheckedCreateWithoutAmenitiesInput> | OccasionCreateWithoutAmenitiesInput[] | OccasionUncheckedCreateWithoutAmenitiesInput[]
    connectOrCreate?: OccasionCreateOrConnectWithoutAmenitiesInput | OccasionCreateOrConnectWithoutAmenitiesInput[]
    upsert?: OccasionUpsertWithWhereUniqueWithoutAmenitiesInput | OccasionUpsertWithWhereUniqueWithoutAmenitiesInput[]
    set?: OccasionWhereUniqueInput | OccasionWhereUniqueInput[]
    disconnect?: OccasionWhereUniqueInput | OccasionWhereUniqueInput[]
    delete?: OccasionWhereUniqueInput | OccasionWhereUniqueInput[]
    connect?: OccasionWhereUniqueInput | OccasionWhereUniqueInput[]
    update?: OccasionUpdateWithWhereUniqueWithoutAmenitiesInput | OccasionUpdateWithWhereUniqueWithoutAmenitiesInput[]
    updateMany?: OccasionUpdateManyWithWhereWithoutAmenitiesInput | OccasionUpdateManyWithWhereWithoutAmenitiesInput[]
    deleteMany?: OccasionScalarWhereInput | OccasionScalarWhereInput[]
  }

  export type AmenityToVenueUncheckedUpdateManyWithoutAmenityNestedInput = {
    create?: XOR<AmenityToVenueCreateWithoutAmenityInput, AmenityToVenueUncheckedCreateWithoutAmenityInput> | AmenityToVenueCreateWithoutAmenityInput[] | AmenityToVenueUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: AmenityToVenueCreateOrConnectWithoutAmenityInput | AmenityToVenueCreateOrConnectWithoutAmenityInput[]
    upsert?: AmenityToVenueUpsertWithWhereUniqueWithoutAmenityInput | AmenityToVenueUpsertWithWhereUniqueWithoutAmenityInput[]
    createMany?: AmenityToVenueCreateManyAmenityInputEnvelope
    set?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    disconnect?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    delete?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    connect?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    update?: AmenityToVenueUpdateWithWhereUniqueWithoutAmenityInput | AmenityToVenueUpdateWithWhereUniqueWithoutAmenityInput[]
    updateMany?: AmenityToVenueUpdateManyWithWhereWithoutAmenityInput | AmenityToVenueUpdateManyWithWhereWithoutAmenityInput[]
    deleteMany?: AmenityToVenueScalarWhereInput | AmenityToVenueScalarWhereInput[]
  }

  export type AmenityCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AmenityCreateWithoutCategoryInput, AmenityUncheckedCreateWithoutCategoryInput> | AmenityCreateWithoutCategoryInput[] | AmenityUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutCategoryInput | AmenityCreateOrConnectWithoutCategoryInput[]
    createMany?: AmenityCreateManyCategoryInputEnvelope
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
  }

  export type AmenityUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AmenityCreateWithoutCategoryInput, AmenityUncheckedCreateWithoutCategoryInput> | AmenityCreateWithoutCategoryInput[] | AmenityUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutCategoryInput | AmenityCreateOrConnectWithoutCategoryInput[]
    createMany?: AmenityCreateManyCategoryInputEnvelope
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
  }

  export type AmenityUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AmenityCreateWithoutCategoryInput, AmenityUncheckedCreateWithoutCategoryInput> | AmenityCreateWithoutCategoryInput[] | AmenityUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutCategoryInput | AmenityCreateOrConnectWithoutCategoryInput[]
    upsert?: AmenityUpsertWithWhereUniqueWithoutCategoryInput | AmenityUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AmenityCreateManyCategoryInputEnvelope
    set?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    disconnect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    delete?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    update?: AmenityUpdateWithWhereUniqueWithoutCategoryInput | AmenityUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AmenityUpdateManyWithWhereWithoutCategoryInput | AmenityUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
  }

  export type AmenityUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AmenityCreateWithoutCategoryInput, AmenityUncheckedCreateWithoutCategoryInput> | AmenityCreateWithoutCategoryInput[] | AmenityUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutCategoryInput | AmenityCreateOrConnectWithoutCategoryInput[]
    upsert?: AmenityUpsertWithWhereUniqueWithoutCategoryInput | AmenityUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AmenityCreateManyCategoryInputEnvelope
    set?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    disconnect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    delete?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    update?: AmenityUpdateWithWhereUniqueWithoutCategoryInput | AmenityUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AmenityUpdateManyWithWhereWithoutCategoryInput | AmenityUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFavouritesInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput
    connect?: UserWhereUniqueInput
  }

  export type VenueCreateNestedOneWithoutFavouritesInput = {
    create?: XOR<VenueCreateWithoutFavouritesInput, VenueUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: VenueCreateOrConnectWithoutFavouritesInput
    connect?: VenueWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavouritesNestedInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput
    upsert?: UserUpsertWithoutFavouritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavouritesInput, UserUpdateWithoutFavouritesInput>, UserUncheckedUpdateWithoutFavouritesInput>
  }

  export type VenueUpdateOneRequiredWithoutFavouritesNestedInput = {
    create?: XOR<VenueCreateWithoutFavouritesInput, VenueUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: VenueCreateOrConnectWithoutFavouritesInput
    upsert?: VenueUpsertWithoutFavouritesInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutFavouritesInput, VenueUpdateWithoutFavouritesInput>, VenueUncheckedUpdateWithoutFavouritesInput>
  }

  export type AmenityCreateNestedManyWithoutOccasionsInput = {
    create?: XOR<AmenityCreateWithoutOccasionsInput, AmenityUncheckedCreateWithoutOccasionsInput> | AmenityCreateWithoutOccasionsInput[] | AmenityUncheckedCreateWithoutOccasionsInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutOccasionsInput | AmenityCreateOrConnectWithoutOccasionsInput[]
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
  }

  export type AmenityUncheckedCreateNestedManyWithoutOccasionsInput = {
    create?: XOR<AmenityCreateWithoutOccasionsInput, AmenityUncheckedCreateWithoutOccasionsInput> | AmenityCreateWithoutOccasionsInput[] | AmenityUncheckedCreateWithoutOccasionsInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutOccasionsInput | AmenityCreateOrConnectWithoutOccasionsInput[]
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
  }

  export type AmenityUpdateManyWithoutOccasionsNestedInput = {
    create?: XOR<AmenityCreateWithoutOccasionsInput, AmenityUncheckedCreateWithoutOccasionsInput> | AmenityCreateWithoutOccasionsInput[] | AmenityUncheckedCreateWithoutOccasionsInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutOccasionsInput | AmenityCreateOrConnectWithoutOccasionsInput[]
    upsert?: AmenityUpsertWithWhereUniqueWithoutOccasionsInput | AmenityUpsertWithWhereUniqueWithoutOccasionsInput[]
    set?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    disconnect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    delete?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    update?: AmenityUpdateWithWhereUniqueWithoutOccasionsInput | AmenityUpdateWithWhereUniqueWithoutOccasionsInput[]
    updateMany?: AmenityUpdateManyWithWhereWithoutOccasionsInput | AmenityUpdateManyWithWhereWithoutOccasionsInput[]
    deleteMany?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
  }

  export type AmenityUncheckedUpdateManyWithoutOccasionsNestedInput = {
    create?: XOR<AmenityCreateWithoutOccasionsInput, AmenityUncheckedCreateWithoutOccasionsInput> | AmenityCreateWithoutOccasionsInput[] | AmenityUncheckedCreateWithoutOccasionsInput[]
    connectOrCreate?: AmenityCreateOrConnectWithoutOccasionsInput | AmenityCreateOrConnectWithoutOccasionsInput[]
    upsert?: AmenityUpsertWithWhereUniqueWithoutOccasionsInput | AmenityUpsertWithWhereUniqueWithoutOccasionsInput[]
    set?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    disconnect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    delete?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    connect?: AmenityWhereUniqueInput | AmenityWhereUniqueInput[]
    update?: AmenityUpdateWithWhereUniqueWithoutOccasionsInput | AmenityUpdateWithWhereUniqueWithoutOccasionsInput[]
    updateMany?: AmenityUpdateManyWithWhereWithoutOccasionsInput | AmenityUpdateManyWithWhereWithoutOccasionsInput[]
    deleteMany?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
  }

  export type ReservationCreateNestedOneWithoutRatingInput = {
    create?: XOR<ReservationCreateWithoutRatingInput, ReservationUncheckedCreateWithoutRatingInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutRatingInput
    connect?: ReservationWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReservationUpdateOneRequiredWithoutRatingNestedInput = {
    create?: XOR<ReservationCreateWithoutRatingInput, ReservationUncheckedCreateWithoutRatingInput>
    connectOrCreate?: ReservationCreateOrConnectWithoutRatingInput
    upsert?: ReservationUpsertWithoutRatingInput
    connect?: ReservationWhereUniqueInput
    update?: XOR<XOR<ReservationUpdateToOneWithWhereWithoutRatingInput, ReservationUpdateWithoutRatingInput>, ReservationUncheckedUpdateWithoutRatingInput>
  }

  export type VenueCreateNestedOneWithoutReservationsInput = {
    create?: XOR<VenueCreateWithoutReservationsInput, VenueUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutReservationsInput
    connect?: VenueWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReservationsInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    connect?: UserWhereUniqueInput
  }

  export type RatingCreateNestedOneWithoutReservationInput = {
    create?: XOR<RatingCreateWithoutReservationInput, RatingUncheckedCreateWithoutReservationInput>
    connectOrCreate?: RatingCreateOrConnectWithoutReservationInput
    connect?: RatingWhereUniqueInput
  }

  export type RatingUncheckedCreateNestedOneWithoutReservationInput = {
    create?: XOR<RatingCreateWithoutReservationInput, RatingUncheckedCreateWithoutReservationInput>
    connectOrCreate?: RatingCreateOrConnectWithoutReservationInput
    connect?: RatingWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type VenueUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<VenueCreateWithoutReservationsInput, VenueUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: VenueCreateOrConnectWithoutReservationsInput
    upsert?: VenueUpsertWithoutReservationsInput
    connect?: VenueWhereUniqueInput
    update?: XOR<XOR<VenueUpdateToOneWithWhereWithoutReservationsInput, VenueUpdateWithoutReservationsInput>, VenueUncheckedUpdateWithoutReservationsInput>
  }

  export type UserUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReservationsInput
    upsert?: UserUpsertWithoutReservationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReservationsInput, UserUpdateWithoutReservationsInput>, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type RatingUpdateOneWithoutReservationNestedInput = {
    create?: XOR<RatingCreateWithoutReservationInput, RatingUncheckedCreateWithoutReservationInput>
    connectOrCreate?: RatingCreateOrConnectWithoutReservationInput
    upsert?: RatingUpsertWithoutReservationInput
    disconnect?: RatingWhereInput | boolean
    delete?: RatingWhereInput | boolean
    connect?: RatingWhereUniqueInput
    update?: XOR<XOR<RatingUpdateToOneWithWhereWithoutReservationInput, RatingUpdateWithoutReservationInput>, RatingUncheckedUpdateWithoutReservationInput>
  }

  export type RatingUncheckedUpdateOneWithoutReservationNestedInput = {
    create?: XOR<RatingCreateWithoutReservationInput, RatingUncheckedCreateWithoutReservationInput>
    connectOrCreate?: RatingCreateOrConnectWithoutReservationInput
    upsert?: RatingUpsertWithoutReservationInput
    disconnect?: RatingWhereInput | boolean
    delete?: RatingWhereInput | boolean
    connect?: RatingWhereUniqueInput
    update?: XOR<XOR<RatingUpdateToOneWithWhereWithoutReservationInput, RatingUpdateWithoutReservationInput>, RatingUncheckedUpdateWithoutReservationInput>
  }

  export type VenueCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VenueCreateWithoutOwnerInput, VenueUncheckedCreateWithoutOwnerInput> | VenueCreateWithoutOwnerInput[] | VenueUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutOwnerInput | VenueCreateOrConnectWithoutOwnerInput[]
    createMany?: VenueCreateManyOwnerInputEnvelope
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
  }

  export type ReservationCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type FavouriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type VenueUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<VenueCreateWithoutOwnerInput, VenueUncheckedCreateWithoutOwnerInput> | VenueCreateWithoutOwnerInput[] | VenueUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutOwnerInput | VenueCreateOrConnectWithoutOwnerInput[]
    createMany?: VenueCreateManyOwnerInputEnvelope
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
  }

  export type ReservationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type FavouriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type VenueUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VenueCreateWithoutOwnerInput, VenueUncheckedCreateWithoutOwnerInput> | VenueCreateWithoutOwnerInput[] | VenueUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutOwnerInput | VenueCreateOrConnectWithoutOwnerInput[]
    upsert?: VenueUpsertWithWhereUniqueWithoutOwnerInput | VenueUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VenueCreateManyOwnerInputEnvelope
    set?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    disconnect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    delete?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    update?: VenueUpdateWithWhereUniqueWithoutOwnerInput | VenueUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VenueUpdateManyWithWhereWithoutOwnerInput | VenueUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VenueScalarWhereInput | VenueScalarWhereInput[]
  }

  export type ReservationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type FavouriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutUserInput | FavouriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutUserInput | FavouriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutUserInput | FavouriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type VenueUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<VenueCreateWithoutOwnerInput, VenueUncheckedCreateWithoutOwnerInput> | VenueCreateWithoutOwnerInput[] | VenueUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutOwnerInput | VenueCreateOrConnectWithoutOwnerInput[]
    upsert?: VenueUpsertWithWhereUniqueWithoutOwnerInput | VenueUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: VenueCreateManyOwnerInputEnvelope
    set?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    disconnect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    delete?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    update?: VenueUpdateWithWhereUniqueWithoutOwnerInput | VenueUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: VenueUpdateManyWithWhereWithoutOwnerInput | VenueUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: VenueScalarWhereInput | VenueScalarWhereInput[]
  }

  export type ReservationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput> | ReservationCreateWithoutUserInput[] | ReservationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutUserInput | ReservationCreateOrConnectWithoutUserInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutUserInput | ReservationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReservationCreateManyUserInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutUserInput | ReservationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutUserInput | ReservationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type FavouriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput> | FavouriteCreateWithoutUserInput[] | FavouriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutUserInput | FavouriteCreateOrConnectWithoutUserInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutUserInput | FavouriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouriteCreateManyUserInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutUserInput | FavouriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutUserInput | FavouriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutVenuesInput = {
    create?: XOR<UserCreateWithoutVenuesInput, UserUncheckedCreateWithoutVenuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVenuesInput
    connect?: UserWhereUniqueInput
  }

  export type ReservationCreateNestedManyWithoutVenueInput = {
    create?: XOR<ReservationCreateWithoutVenueInput, ReservationUncheckedCreateWithoutVenueInput> | ReservationCreateWithoutVenueInput[] | ReservationUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVenueInput | ReservationCreateOrConnectWithoutVenueInput[]
    createMany?: ReservationCreateManyVenueInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type FavouriteCreateNestedManyWithoutVenueInput = {
    create?: XOR<FavouriteCreateWithoutVenueInput, FavouriteUncheckedCreateWithoutVenueInput> | FavouriteCreateWithoutVenueInput[] | FavouriteUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutVenueInput | FavouriteCreateOrConnectWithoutVenueInput[]
    createMany?: FavouriteCreateManyVenueInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type AmenityToVenueCreateNestedManyWithoutVenueInput = {
    create?: XOR<AmenityToVenueCreateWithoutVenueInput, AmenityToVenueUncheckedCreateWithoutVenueInput> | AmenityToVenueCreateWithoutVenueInput[] | AmenityToVenueUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: AmenityToVenueCreateOrConnectWithoutVenueInput | AmenityToVenueCreateOrConnectWithoutVenueInput[]
    createMany?: AmenityToVenueCreateManyVenueInputEnvelope
    connect?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
  }

  export type VenueTypeCreateNestedOneWithoutVenuesInput = {
    create?: XOR<VenueTypeCreateWithoutVenuesInput, VenueTypeUncheckedCreateWithoutVenuesInput>
    connectOrCreate?: VenueTypeCreateOrConnectWithoutVenuesInput
    connect?: VenueTypeWhereUniqueInput
  }

  export type ReservationUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<ReservationCreateWithoutVenueInput, ReservationUncheckedCreateWithoutVenueInput> | ReservationCreateWithoutVenueInput[] | ReservationUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVenueInput | ReservationCreateOrConnectWithoutVenueInput[]
    createMany?: ReservationCreateManyVenueInputEnvelope
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
  }

  export type FavouriteUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<FavouriteCreateWithoutVenueInput, FavouriteUncheckedCreateWithoutVenueInput> | FavouriteCreateWithoutVenueInput[] | FavouriteUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutVenueInput | FavouriteCreateOrConnectWithoutVenueInput[]
    createMany?: FavouriteCreateManyVenueInputEnvelope
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
  }

  export type AmenityToVenueUncheckedCreateNestedManyWithoutVenueInput = {
    create?: XOR<AmenityToVenueCreateWithoutVenueInput, AmenityToVenueUncheckedCreateWithoutVenueInput> | AmenityToVenueCreateWithoutVenueInput[] | AmenityToVenueUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: AmenityToVenueCreateOrConnectWithoutVenueInput | AmenityToVenueCreateOrConnectWithoutVenueInput[]
    createMany?: AmenityToVenueCreateManyVenueInputEnvelope
    connect?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutVenuesNestedInput = {
    create?: XOR<UserCreateWithoutVenuesInput, UserUncheckedCreateWithoutVenuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVenuesInput
    upsert?: UserUpsertWithoutVenuesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVenuesInput, UserUpdateWithoutVenuesInput>, UserUncheckedUpdateWithoutVenuesInput>
  }

  export type ReservationUpdateManyWithoutVenueNestedInput = {
    create?: XOR<ReservationCreateWithoutVenueInput, ReservationUncheckedCreateWithoutVenueInput> | ReservationCreateWithoutVenueInput[] | ReservationUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVenueInput | ReservationCreateOrConnectWithoutVenueInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutVenueInput | ReservationUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: ReservationCreateManyVenueInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutVenueInput | ReservationUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutVenueInput | ReservationUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type FavouriteUpdateManyWithoutVenueNestedInput = {
    create?: XOR<FavouriteCreateWithoutVenueInput, FavouriteUncheckedCreateWithoutVenueInput> | FavouriteCreateWithoutVenueInput[] | FavouriteUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutVenueInput | FavouriteCreateOrConnectWithoutVenueInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutVenueInput | FavouriteUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: FavouriteCreateManyVenueInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutVenueInput | FavouriteUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutVenueInput | FavouriteUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type AmenityToVenueUpdateManyWithoutVenueNestedInput = {
    create?: XOR<AmenityToVenueCreateWithoutVenueInput, AmenityToVenueUncheckedCreateWithoutVenueInput> | AmenityToVenueCreateWithoutVenueInput[] | AmenityToVenueUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: AmenityToVenueCreateOrConnectWithoutVenueInput | AmenityToVenueCreateOrConnectWithoutVenueInput[]
    upsert?: AmenityToVenueUpsertWithWhereUniqueWithoutVenueInput | AmenityToVenueUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: AmenityToVenueCreateManyVenueInputEnvelope
    set?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    disconnect?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    delete?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    connect?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    update?: AmenityToVenueUpdateWithWhereUniqueWithoutVenueInput | AmenityToVenueUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: AmenityToVenueUpdateManyWithWhereWithoutVenueInput | AmenityToVenueUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: AmenityToVenueScalarWhereInput | AmenityToVenueScalarWhereInput[]
  }

  export type VenueTypeUpdateOneRequiredWithoutVenuesNestedInput = {
    create?: XOR<VenueTypeCreateWithoutVenuesInput, VenueTypeUncheckedCreateWithoutVenuesInput>
    connectOrCreate?: VenueTypeCreateOrConnectWithoutVenuesInput
    upsert?: VenueTypeUpsertWithoutVenuesInput
    connect?: VenueTypeWhereUniqueInput
    update?: XOR<XOR<VenueTypeUpdateToOneWithWhereWithoutVenuesInput, VenueTypeUpdateWithoutVenuesInput>, VenueTypeUncheckedUpdateWithoutVenuesInput>
  }

  export type ReservationUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<ReservationCreateWithoutVenueInput, ReservationUncheckedCreateWithoutVenueInput> | ReservationCreateWithoutVenueInput[] | ReservationUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: ReservationCreateOrConnectWithoutVenueInput | ReservationCreateOrConnectWithoutVenueInput[]
    upsert?: ReservationUpsertWithWhereUniqueWithoutVenueInput | ReservationUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: ReservationCreateManyVenueInputEnvelope
    set?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    disconnect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    delete?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    connect?: ReservationWhereUniqueInput | ReservationWhereUniqueInput[]
    update?: ReservationUpdateWithWhereUniqueWithoutVenueInput | ReservationUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: ReservationUpdateManyWithWhereWithoutVenueInput | ReservationUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
  }

  export type FavouriteUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<FavouriteCreateWithoutVenueInput, FavouriteUncheckedCreateWithoutVenueInput> | FavouriteCreateWithoutVenueInput[] | FavouriteUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: FavouriteCreateOrConnectWithoutVenueInput | FavouriteCreateOrConnectWithoutVenueInput[]
    upsert?: FavouriteUpsertWithWhereUniqueWithoutVenueInput | FavouriteUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: FavouriteCreateManyVenueInputEnvelope
    set?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    disconnect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    delete?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    connect?: FavouriteWhereUniqueInput | FavouriteWhereUniqueInput[]
    update?: FavouriteUpdateWithWhereUniqueWithoutVenueInput | FavouriteUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: FavouriteUpdateManyWithWhereWithoutVenueInput | FavouriteUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
  }

  export type AmenityToVenueUncheckedUpdateManyWithoutVenueNestedInput = {
    create?: XOR<AmenityToVenueCreateWithoutVenueInput, AmenityToVenueUncheckedCreateWithoutVenueInput> | AmenityToVenueCreateWithoutVenueInput[] | AmenityToVenueUncheckedCreateWithoutVenueInput[]
    connectOrCreate?: AmenityToVenueCreateOrConnectWithoutVenueInput | AmenityToVenueCreateOrConnectWithoutVenueInput[]
    upsert?: AmenityToVenueUpsertWithWhereUniqueWithoutVenueInput | AmenityToVenueUpsertWithWhereUniqueWithoutVenueInput[]
    createMany?: AmenityToVenueCreateManyVenueInputEnvelope
    set?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    disconnect?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    delete?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    connect?: AmenityToVenueWhereUniqueInput | AmenityToVenueWhereUniqueInput[]
    update?: AmenityToVenueUpdateWithWhereUniqueWithoutVenueInput | AmenityToVenueUpdateWithWhereUniqueWithoutVenueInput[]
    updateMany?: AmenityToVenueUpdateManyWithWhereWithoutVenueInput | AmenityToVenueUpdateManyWithWhereWithoutVenueInput[]
    deleteMany?: AmenityToVenueScalarWhereInput | AmenityToVenueScalarWhereInput[]
  }

  export type VenueCreateNestedManyWithoutVenueTypeInput = {
    create?: XOR<VenueCreateWithoutVenueTypeInput, VenueUncheckedCreateWithoutVenueTypeInput> | VenueCreateWithoutVenueTypeInput[] | VenueUncheckedCreateWithoutVenueTypeInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutVenueTypeInput | VenueCreateOrConnectWithoutVenueTypeInput[]
    createMany?: VenueCreateManyVenueTypeInputEnvelope
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
  }

  export type VenueUncheckedCreateNestedManyWithoutVenueTypeInput = {
    create?: XOR<VenueCreateWithoutVenueTypeInput, VenueUncheckedCreateWithoutVenueTypeInput> | VenueCreateWithoutVenueTypeInput[] | VenueUncheckedCreateWithoutVenueTypeInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutVenueTypeInput | VenueCreateOrConnectWithoutVenueTypeInput[]
    createMany?: VenueCreateManyVenueTypeInputEnvelope
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
  }

  export type VenueUpdateManyWithoutVenueTypeNestedInput = {
    create?: XOR<VenueCreateWithoutVenueTypeInput, VenueUncheckedCreateWithoutVenueTypeInput> | VenueCreateWithoutVenueTypeInput[] | VenueUncheckedCreateWithoutVenueTypeInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutVenueTypeInput | VenueCreateOrConnectWithoutVenueTypeInput[]
    upsert?: VenueUpsertWithWhereUniqueWithoutVenueTypeInput | VenueUpsertWithWhereUniqueWithoutVenueTypeInput[]
    createMany?: VenueCreateManyVenueTypeInputEnvelope
    set?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    disconnect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    delete?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    update?: VenueUpdateWithWhereUniqueWithoutVenueTypeInput | VenueUpdateWithWhereUniqueWithoutVenueTypeInput[]
    updateMany?: VenueUpdateManyWithWhereWithoutVenueTypeInput | VenueUpdateManyWithWhereWithoutVenueTypeInput[]
    deleteMany?: VenueScalarWhereInput | VenueScalarWhereInput[]
  }

  export type VenueUncheckedUpdateManyWithoutVenueTypeNestedInput = {
    create?: XOR<VenueCreateWithoutVenueTypeInput, VenueUncheckedCreateWithoutVenueTypeInput> | VenueCreateWithoutVenueTypeInput[] | VenueUncheckedCreateWithoutVenueTypeInput[]
    connectOrCreate?: VenueCreateOrConnectWithoutVenueTypeInput | VenueCreateOrConnectWithoutVenueTypeInput[]
    upsert?: VenueUpsertWithWhereUniqueWithoutVenueTypeInput | VenueUpsertWithWhereUniqueWithoutVenueTypeInput[]
    createMany?: VenueCreateManyVenueTypeInputEnvelope
    set?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    disconnect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    delete?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    connect?: VenueWhereUniqueInput | VenueWhereUniqueInput[]
    update?: VenueUpdateWithWhereUniqueWithoutVenueTypeInput | VenueUpdateWithWhereUniqueWithoutVenueTypeInput[]
    updateMany?: VenueUpdateManyWithWhereWithoutVenueTypeInput | VenueUpdateManyWithWhereWithoutVenueTypeInput[]
    deleteMany?: VenueScalarWhereInput | VenueScalarWhereInput[]
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type VenueCreateWithoutAmenityToVenuesInput = {
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    owner: UserCreateNestedOneWithoutVenuesInput
    reservations?: ReservationCreateNestedManyWithoutVenueInput
    favourites?: FavouriteCreateNestedManyWithoutVenueInput
    venueType: VenueTypeCreateNestedOneWithoutVenuesInput
  }

  export type VenueUncheckedCreateWithoutAmenityToVenuesInput = {
    id?: number
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    ownerId: number
    venueTypeId: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutVenueInput
    favourites?: FavouriteUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutAmenityToVenuesInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutAmenityToVenuesInput, VenueUncheckedCreateWithoutAmenityToVenuesInput>
  }

  export type AmenityCreateWithoutAmenityToVenuesInput = {
    name: string
    category: CategoryCreateNestedOneWithoutAmenitiesInput
    occasions?: OccasionCreateNestedManyWithoutAmenitiesInput
  }

  export type AmenityUncheckedCreateWithoutAmenityToVenuesInput = {
    id?: number
    name: string
    categoryId: number
    occasions?: OccasionUncheckedCreateNestedManyWithoutAmenitiesInput
  }

  export type AmenityCreateOrConnectWithoutAmenityToVenuesInput = {
    where: AmenityWhereUniqueInput
    create: XOR<AmenityCreateWithoutAmenityToVenuesInput, AmenityUncheckedCreateWithoutAmenityToVenuesInput>
  }

  export type VenueUpsertWithoutAmenityToVenuesInput = {
    update: XOR<VenueUpdateWithoutAmenityToVenuesInput, VenueUncheckedUpdateWithoutAmenityToVenuesInput>
    create: XOR<VenueCreateWithoutAmenityToVenuesInput, VenueUncheckedCreateWithoutAmenityToVenuesInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutAmenityToVenuesInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutAmenityToVenuesInput, VenueUncheckedUpdateWithoutAmenityToVenuesInput>
  }

  export type VenueUpdateWithoutAmenityToVenuesInput = {
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    owner?: UserUpdateOneRequiredWithoutVenuesNestedInput
    reservations?: ReservationUpdateManyWithoutVenueNestedInput
    favourites?: FavouriteUpdateManyWithoutVenueNestedInput
    venueType?: VenueTypeUpdateOneRequiredWithoutVenuesNestedInput
  }

  export type VenueUncheckedUpdateWithoutAmenityToVenuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    venueTypeId?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutVenueNestedInput
    favourites?: FavouriteUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type AmenityUpsertWithoutAmenityToVenuesInput = {
    update: XOR<AmenityUpdateWithoutAmenityToVenuesInput, AmenityUncheckedUpdateWithoutAmenityToVenuesInput>
    create: XOR<AmenityCreateWithoutAmenityToVenuesInput, AmenityUncheckedCreateWithoutAmenityToVenuesInput>
    where?: AmenityWhereInput
  }

  export type AmenityUpdateToOneWithWhereWithoutAmenityToVenuesInput = {
    where?: AmenityWhereInput
    data: XOR<AmenityUpdateWithoutAmenityToVenuesInput, AmenityUncheckedUpdateWithoutAmenityToVenuesInput>
  }

  export type AmenityUpdateWithoutAmenityToVenuesInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutAmenitiesNestedInput
    occasions?: OccasionUpdateManyWithoutAmenitiesNestedInput
  }

  export type AmenityUncheckedUpdateWithoutAmenityToVenuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    occasions?: OccasionUncheckedUpdateManyWithoutAmenitiesNestedInput
  }

  export type CategoryCreateWithoutAmenitiesInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutAmenitiesInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutAmenitiesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutAmenitiesInput, CategoryUncheckedCreateWithoutAmenitiesInput>
  }

  export type OccasionCreateWithoutAmenitiesInput = {
    name: string
  }

  export type OccasionUncheckedCreateWithoutAmenitiesInput = {
    id?: number
    name: string
  }

  export type OccasionCreateOrConnectWithoutAmenitiesInput = {
    where: OccasionWhereUniqueInput
    create: XOR<OccasionCreateWithoutAmenitiesInput, OccasionUncheckedCreateWithoutAmenitiesInput>
  }

  export type AmenityToVenueCreateWithoutAmenityInput = {
    venue: VenueCreateNestedOneWithoutAmenityToVenuesInput
  }

  export type AmenityToVenueUncheckedCreateWithoutAmenityInput = {
    venueId: number
  }

  export type AmenityToVenueCreateOrConnectWithoutAmenityInput = {
    where: AmenityToVenueWhereUniqueInput
    create: XOR<AmenityToVenueCreateWithoutAmenityInput, AmenityToVenueUncheckedCreateWithoutAmenityInput>
  }

  export type AmenityToVenueCreateManyAmenityInputEnvelope = {
    data: AmenityToVenueCreateManyAmenityInput | AmenityToVenueCreateManyAmenityInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutAmenitiesInput = {
    update: XOR<CategoryUpdateWithoutAmenitiesInput, CategoryUncheckedUpdateWithoutAmenitiesInput>
    create: XOR<CategoryCreateWithoutAmenitiesInput, CategoryUncheckedCreateWithoutAmenitiesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutAmenitiesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutAmenitiesInput, CategoryUncheckedUpdateWithoutAmenitiesInput>
  }

  export type CategoryUpdateWithoutAmenitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutAmenitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OccasionUpsertWithWhereUniqueWithoutAmenitiesInput = {
    where: OccasionWhereUniqueInput
    update: XOR<OccasionUpdateWithoutAmenitiesInput, OccasionUncheckedUpdateWithoutAmenitiesInput>
    create: XOR<OccasionCreateWithoutAmenitiesInput, OccasionUncheckedCreateWithoutAmenitiesInput>
  }

  export type OccasionUpdateWithWhereUniqueWithoutAmenitiesInput = {
    where: OccasionWhereUniqueInput
    data: XOR<OccasionUpdateWithoutAmenitiesInput, OccasionUncheckedUpdateWithoutAmenitiesInput>
  }

  export type OccasionUpdateManyWithWhereWithoutAmenitiesInput = {
    where: OccasionScalarWhereInput
    data: XOR<OccasionUpdateManyMutationInput, OccasionUncheckedUpdateManyWithoutAmenitiesInput>
  }

  export type OccasionScalarWhereInput = {
    AND?: OccasionScalarWhereInput | OccasionScalarWhereInput[]
    OR?: OccasionScalarWhereInput[]
    NOT?: OccasionScalarWhereInput | OccasionScalarWhereInput[]
    id?: IntFilter<"Occasion"> | number
    name?: StringFilter<"Occasion"> | string
  }

  export type AmenityToVenueUpsertWithWhereUniqueWithoutAmenityInput = {
    where: AmenityToVenueWhereUniqueInput
    update: XOR<AmenityToVenueUpdateWithoutAmenityInput, AmenityToVenueUncheckedUpdateWithoutAmenityInput>
    create: XOR<AmenityToVenueCreateWithoutAmenityInput, AmenityToVenueUncheckedCreateWithoutAmenityInput>
  }

  export type AmenityToVenueUpdateWithWhereUniqueWithoutAmenityInput = {
    where: AmenityToVenueWhereUniqueInput
    data: XOR<AmenityToVenueUpdateWithoutAmenityInput, AmenityToVenueUncheckedUpdateWithoutAmenityInput>
  }

  export type AmenityToVenueUpdateManyWithWhereWithoutAmenityInput = {
    where: AmenityToVenueScalarWhereInput
    data: XOR<AmenityToVenueUpdateManyMutationInput, AmenityToVenueUncheckedUpdateManyWithoutAmenityInput>
  }

  export type AmenityToVenueScalarWhereInput = {
    AND?: AmenityToVenueScalarWhereInput | AmenityToVenueScalarWhereInput[]
    OR?: AmenityToVenueScalarWhereInput[]
    NOT?: AmenityToVenueScalarWhereInput | AmenityToVenueScalarWhereInput[]
    venueId?: IntFilter<"AmenityToVenue"> | number
    amenityId?: IntFilter<"AmenityToVenue"> | number
  }

  export type AmenityCreateWithoutCategoryInput = {
    name: string
    occasions?: OccasionCreateNestedManyWithoutAmenitiesInput
    amenityToVenues?: AmenityToVenueCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    occasions?: OccasionUncheckedCreateNestedManyWithoutAmenitiesInput
    amenityToVenues?: AmenityToVenueUncheckedCreateNestedManyWithoutAmenityInput
  }

  export type AmenityCreateOrConnectWithoutCategoryInput = {
    where: AmenityWhereUniqueInput
    create: XOR<AmenityCreateWithoutCategoryInput, AmenityUncheckedCreateWithoutCategoryInput>
  }

  export type AmenityCreateManyCategoryInputEnvelope = {
    data: AmenityCreateManyCategoryInput | AmenityCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type AmenityUpsertWithWhereUniqueWithoutCategoryInput = {
    where: AmenityWhereUniqueInput
    update: XOR<AmenityUpdateWithoutCategoryInput, AmenityUncheckedUpdateWithoutCategoryInput>
    create: XOR<AmenityCreateWithoutCategoryInput, AmenityUncheckedCreateWithoutCategoryInput>
  }

  export type AmenityUpdateWithWhereUniqueWithoutCategoryInput = {
    where: AmenityWhereUniqueInput
    data: XOR<AmenityUpdateWithoutCategoryInput, AmenityUncheckedUpdateWithoutCategoryInput>
  }

  export type AmenityUpdateManyWithWhereWithoutCategoryInput = {
    where: AmenityScalarWhereInput
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyWithoutCategoryInput>
  }

  export type AmenityScalarWhereInput = {
    AND?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
    OR?: AmenityScalarWhereInput[]
    NOT?: AmenityScalarWhereInput | AmenityScalarWhereInput[]
    id?: IntFilter<"Amenity"> | number
    name?: StringFilter<"Amenity"> | string
    categoryId?: IntFilter<"Amenity"> | number
  }

  export type UserCreateWithoutFavouritesInput = {
    email: string
    name: string
    phoneNumber: string
    password: string
    venues?: VenueCreateNestedManyWithoutOwnerInput
    reservations?: ReservationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavouritesInput = {
    id?: number
    email: string
    name: string
    phoneNumber: string
    password: string
    venues?: VenueUncheckedCreateNestedManyWithoutOwnerInput
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavouritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
  }

  export type VenueCreateWithoutFavouritesInput = {
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    owner: UserCreateNestedOneWithoutVenuesInput
    reservations?: ReservationCreateNestedManyWithoutVenueInput
    amenityToVenues?: AmenityToVenueCreateNestedManyWithoutVenueInput
    venueType: VenueTypeCreateNestedOneWithoutVenuesInput
  }

  export type VenueUncheckedCreateWithoutFavouritesInput = {
    id?: number
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    ownerId: number
    venueTypeId: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutVenueInput
    amenityToVenues?: AmenityToVenueUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutFavouritesInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutFavouritesInput, VenueUncheckedCreateWithoutFavouritesInput>
  }

  export type UserUpsertWithoutFavouritesInput = {
    update: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavouritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
  }

  export type UserUpdateWithoutFavouritesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    venues?: VenueUpdateManyWithoutOwnerNestedInput
    reservations?: ReservationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavouritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    venues?: VenueUncheckedUpdateManyWithoutOwnerNestedInput
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type VenueUpsertWithoutFavouritesInput = {
    update: XOR<VenueUpdateWithoutFavouritesInput, VenueUncheckedUpdateWithoutFavouritesInput>
    create: XOR<VenueCreateWithoutFavouritesInput, VenueUncheckedCreateWithoutFavouritesInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutFavouritesInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutFavouritesInput, VenueUncheckedUpdateWithoutFavouritesInput>
  }

  export type VenueUpdateWithoutFavouritesInput = {
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    owner?: UserUpdateOneRequiredWithoutVenuesNestedInput
    reservations?: ReservationUpdateManyWithoutVenueNestedInput
    amenityToVenues?: AmenityToVenueUpdateManyWithoutVenueNestedInput
    venueType?: VenueTypeUpdateOneRequiredWithoutVenuesNestedInput
  }

  export type VenueUncheckedUpdateWithoutFavouritesInput = {
    id?: IntFieldUpdateOperationsInput | number
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    venueTypeId?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutVenueNestedInput
    amenityToVenues?: AmenityToVenueUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type AmenityCreateWithoutOccasionsInput = {
    name: string
    category: CategoryCreateNestedOneWithoutAmenitiesInput
    amenityToVenues?: AmenityToVenueCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUncheckedCreateWithoutOccasionsInput = {
    id?: number
    name: string
    categoryId: number
    amenityToVenues?: AmenityToVenueUncheckedCreateNestedManyWithoutAmenityInput
  }

  export type AmenityCreateOrConnectWithoutOccasionsInput = {
    where: AmenityWhereUniqueInput
    create: XOR<AmenityCreateWithoutOccasionsInput, AmenityUncheckedCreateWithoutOccasionsInput>
  }

  export type AmenityUpsertWithWhereUniqueWithoutOccasionsInput = {
    where: AmenityWhereUniqueInput
    update: XOR<AmenityUpdateWithoutOccasionsInput, AmenityUncheckedUpdateWithoutOccasionsInput>
    create: XOR<AmenityCreateWithoutOccasionsInput, AmenityUncheckedCreateWithoutOccasionsInput>
  }

  export type AmenityUpdateWithWhereUniqueWithoutOccasionsInput = {
    where: AmenityWhereUniqueInput
    data: XOR<AmenityUpdateWithoutOccasionsInput, AmenityUncheckedUpdateWithoutOccasionsInput>
  }

  export type AmenityUpdateManyWithWhereWithoutOccasionsInput = {
    where: AmenityScalarWhereInput
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyWithoutOccasionsInput>
  }

  export type ReservationCreateWithoutRatingInput = {
    dateStart: Date | string
    dateEnd: Date | string
    isPendingRating: boolean
    venue: VenueCreateNestedOneWithoutReservationsInput
    user: UserCreateNestedOneWithoutReservationsInput
  }

  export type ReservationUncheckedCreateWithoutRatingInput = {
    id?: number
    venueId: number
    userId: number
    dateStart: Date | string
    dateEnd: Date | string
    isPendingRating: boolean
  }

  export type ReservationCreateOrConnectWithoutRatingInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutRatingInput, ReservationUncheckedCreateWithoutRatingInput>
  }

  export type ReservationUpsertWithoutRatingInput = {
    update: XOR<ReservationUpdateWithoutRatingInput, ReservationUncheckedUpdateWithoutRatingInput>
    create: XOR<ReservationCreateWithoutRatingInput, ReservationUncheckedCreateWithoutRatingInput>
    where?: ReservationWhereInput
  }

  export type ReservationUpdateToOneWithWhereWithoutRatingInput = {
    where?: ReservationWhereInput
    data: XOR<ReservationUpdateWithoutRatingInput, ReservationUncheckedUpdateWithoutRatingInput>
  }

  export type ReservationUpdateWithoutRatingInput = {
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isPendingRating?: BoolFieldUpdateOperationsInput | boolean
    venue?: VenueUpdateOneRequiredWithoutReservationsNestedInput
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
  }

  export type ReservationUncheckedUpdateWithoutRatingInput = {
    id?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isPendingRating?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VenueCreateWithoutReservationsInput = {
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    owner: UserCreateNestedOneWithoutVenuesInput
    favourites?: FavouriteCreateNestedManyWithoutVenueInput
    amenityToVenues?: AmenityToVenueCreateNestedManyWithoutVenueInput
    venueType: VenueTypeCreateNestedOneWithoutVenuesInput
  }

  export type VenueUncheckedCreateWithoutReservationsInput = {
    id?: number
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    ownerId: number
    venueTypeId: number
    favourites?: FavouriteUncheckedCreateNestedManyWithoutVenueInput
    amenityToVenues?: AmenityToVenueUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutReservationsInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutReservationsInput, VenueUncheckedCreateWithoutReservationsInput>
  }

  export type UserCreateWithoutReservationsInput = {
    email: string
    name: string
    phoneNumber: string
    password: string
    venues?: VenueCreateNestedManyWithoutOwnerInput
    favourites?: FavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReservationsInput = {
    id?: number
    email: string
    name: string
    phoneNumber: string
    password: string
    venues?: VenueUncheckedCreateNestedManyWithoutOwnerInput
    favourites?: FavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReservationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
  }

  export type RatingCreateWithoutReservationInput = {
    score: number
    review?: string | null
    createdAt?: Date | string
  }

  export type RatingUncheckedCreateWithoutReservationInput = {
    id?: number
    score: number
    review?: string | null
    createdAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutReservationInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutReservationInput, RatingUncheckedCreateWithoutReservationInput>
  }

  export type VenueUpsertWithoutReservationsInput = {
    update: XOR<VenueUpdateWithoutReservationsInput, VenueUncheckedUpdateWithoutReservationsInput>
    create: XOR<VenueCreateWithoutReservationsInput, VenueUncheckedCreateWithoutReservationsInput>
    where?: VenueWhereInput
  }

  export type VenueUpdateToOneWithWhereWithoutReservationsInput = {
    where?: VenueWhereInput
    data: XOR<VenueUpdateWithoutReservationsInput, VenueUncheckedUpdateWithoutReservationsInput>
  }

  export type VenueUpdateWithoutReservationsInput = {
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    owner?: UserUpdateOneRequiredWithoutVenuesNestedInput
    favourites?: FavouriteUpdateManyWithoutVenueNestedInput
    amenityToVenues?: AmenityToVenueUpdateManyWithoutVenueNestedInput
    venueType?: VenueTypeUpdateOneRequiredWithoutVenuesNestedInput
  }

  export type VenueUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    venueTypeId?: IntFieldUpdateOperationsInput | number
    favourites?: FavouriteUncheckedUpdateManyWithoutVenueNestedInput
    amenityToVenues?: AmenityToVenueUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type UserUpsertWithoutReservationsInput = {
    update: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
    create: XOR<UserCreateWithoutReservationsInput, UserUncheckedCreateWithoutReservationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReservationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReservationsInput, UserUncheckedUpdateWithoutReservationsInput>
  }

  export type UserUpdateWithoutReservationsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    venues?: VenueUpdateManyWithoutOwnerNestedInput
    favourites?: FavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReservationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    venues?: VenueUncheckedUpdateManyWithoutOwnerNestedInput
    favourites?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RatingUpsertWithoutReservationInput = {
    update: XOR<RatingUpdateWithoutReservationInput, RatingUncheckedUpdateWithoutReservationInput>
    create: XOR<RatingCreateWithoutReservationInput, RatingUncheckedCreateWithoutReservationInput>
    where?: RatingWhereInput
  }

  export type RatingUpdateToOneWithWhereWithoutReservationInput = {
    where?: RatingWhereInput
    data: XOR<RatingUpdateWithoutReservationInput, RatingUncheckedUpdateWithoutReservationInput>
  }

  export type RatingUpdateWithoutReservationInput = {
    score?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateWithoutReservationInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    review?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VenueCreateWithoutOwnerInput = {
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    reservations?: ReservationCreateNestedManyWithoutVenueInput
    favourites?: FavouriteCreateNestedManyWithoutVenueInput
    amenityToVenues?: AmenityToVenueCreateNestedManyWithoutVenueInput
    venueType: VenueTypeCreateNestedOneWithoutVenuesInput
  }

  export type VenueUncheckedCreateWithoutOwnerInput = {
    id?: number
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    venueTypeId: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutVenueInput
    favourites?: FavouriteUncheckedCreateNestedManyWithoutVenueInput
    amenityToVenues?: AmenityToVenueUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutOwnerInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutOwnerInput, VenueUncheckedCreateWithoutOwnerInput>
  }

  export type VenueCreateManyOwnerInputEnvelope = {
    data: VenueCreateManyOwnerInput | VenueCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type ReservationCreateWithoutUserInput = {
    dateStart: Date | string
    dateEnd: Date | string
    isPendingRating: boolean
    venue: VenueCreateNestedOneWithoutReservationsInput
    rating?: RatingCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutUserInput = {
    id?: number
    venueId: number
    dateStart: Date | string
    dateEnd: Date | string
    isPendingRating: boolean
    rating?: RatingUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutUserInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationCreateManyUserInputEnvelope = {
    data: ReservationCreateManyUserInput | ReservationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavouriteCreateWithoutUserInput = {
    venue: VenueCreateNestedOneWithoutFavouritesInput
  }

  export type FavouriteUncheckedCreateWithoutUserInput = {
    id?: number
    venueId: number
  }

  export type FavouriteCreateOrConnectWithoutUserInput = {
    where: FavouriteWhereUniqueInput
    create: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput>
  }

  export type FavouriteCreateManyUserInputEnvelope = {
    data: FavouriteCreateManyUserInput | FavouriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VenueUpsertWithWhereUniqueWithoutOwnerInput = {
    where: VenueWhereUniqueInput
    update: XOR<VenueUpdateWithoutOwnerInput, VenueUncheckedUpdateWithoutOwnerInput>
    create: XOR<VenueCreateWithoutOwnerInput, VenueUncheckedCreateWithoutOwnerInput>
  }

  export type VenueUpdateWithWhereUniqueWithoutOwnerInput = {
    where: VenueWhereUniqueInput
    data: XOR<VenueUpdateWithoutOwnerInput, VenueUncheckedUpdateWithoutOwnerInput>
  }

  export type VenueUpdateManyWithWhereWithoutOwnerInput = {
    where: VenueScalarWhereInput
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyWithoutOwnerInput>
  }

  export type VenueScalarWhereInput = {
    AND?: VenueScalarWhereInput | VenueScalarWhereInput[]
    OR?: VenueScalarWhereInput[]
    NOT?: VenueScalarWhereInput | VenueScalarWhereInput[]
    id?: IntFilter<"Venue"> | number
    pricePerNightInEURCent?: IntFilter<"Venue"> | number
    rating?: FloatFilter<"Venue"> | number
    capacity?: IntFilter<"Venue"> | number
    amountsOfBeds?: IntFilter<"Venue"> | number
    extraSleepingDetails?: StringFilter<"Venue"> | string
    name?: StringFilter<"Venue"> | string
    images?: JsonFilter<"Venue">
    description?: StringFilter<"Venue"> | string
    checkInHour?: IntFilter<"Venue"> | number
    checkOutHour?: IntFilter<"Venue"> | number
    distanceFromCityCenterInMeters?: IntFilter<"Venue"> | number
    facebookUrl?: StringNullableFilter<"Venue"> | string | null
    instagramUrl?: StringNullableFilter<"Venue"> | string | null
    twitterUrl?: StringNullableFilter<"Venue"> | string | null
    websiteUrl?: StringNullableFilter<"Venue"> | string | null
    streetNumber?: StringFilter<"Venue"> | string
    streetName?: StringFilter<"Venue"> | string
    postalCode?: StringFilter<"Venue"> | string
    city?: StringFilter<"Venue"> | string
    latitude?: FloatNullableFilter<"Venue"> | number | null
    longitude?: FloatNullableFilter<"Venue"> | number | null
    ownerId?: IntFilter<"Venue"> | number
    venueTypeId?: IntFilter<"Venue"> | number
  }

  export type ReservationUpsertWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
    create: XOR<ReservationCreateWithoutUserInput, ReservationUncheckedCreateWithoutUserInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutUserInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutUserInput, ReservationUncheckedUpdateWithoutUserInput>
  }

  export type ReservationUpdateManyWithWhereWithoutUserInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutUserInput>
  }

  export type ReservationScalarWhereInput = {
    AND?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    OR?: ReservationScalarWhereInput[]
    NOT?: ReservationScalarWhereInput | ReservationScalarWhereInput[]
    id?: IntFilter<"Reservation"> | number
    venueId?: IntFilter<"Reservation"> | number
    userId?: IntFilter<"Reservation"> | number
    dateStart?: DateTimeFilter<"Reservation"> | Date | string
    dateEnd?: DateTimeFilter<"Reservation"> | Date | string
    isPendingRating?: BoolFilter<"Reservation"> | boolean
  }

  export type FavouriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavouriteWhereUniqueInput
    update: XOR<FavouriteUpdateWithoutUserInput, FavouriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavouriteCreateWithoutUserInput, FavouriteUncheckedCreateWithoutUserInput>
  }

  export type FavouriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavouriteWhereUniqueInput
    data: XOR<FavouriteUpdateWithoutUserInput, FavouriteUncheckedUpdateWithoutUserInput>
  }

  export type FavouriteUpdateManyWithWhereWithoutUserInput = {
    where: FavouriteScalarWhereInput
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavouriteScalarWhereInput = {
    AND?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
    OR?: FavouriteScalarWhereInput[]
    NOT?: FavouriteScalarWhereInput | FavouriteScalarWhereInput[]
    id?: IntFilter<"Favourite"> | number
    userId?: IntFilter<"Favourite"> | number
    venueId?: IntFilter<"Favourite"> | number
  }

  export type UserCreateWithoutVenuesInput = {
    email: string
    name: string
    phoneNumber: string
    password: string
    reservations?: ReservationCreateNestedManyWithoutUserInput
    favourites?: FavouriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutVenuesInput = {
    id?: number
    email: string
    name: string
    phoneNumber: string
    password: string
    reservations?: ReservationUncheckedCreateNestedManyWithoutUserInput
    favourites?: FavouriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutVenuesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVenuesInput, UserUncheckedCreateWithoutVenuesInput>
  }

  export type ReservationCreateWithoutVenueInput = {
    dateStart: Date | string
    dateEnd: Date | string
    isPendingRating: boolean
    user: UserCreateNestedOneWithoutReservationsInput
    rating?: RatingCreateNestedOneWithoutReservationInput
  }

  export type ReservationUncheckedCreateWithoutVenueInput = {
    id?: number
    userId: number
    dateStart: Date | string
    dateEnd: Date | string
    isPendingRating: boolean
    rating?: RatingUncheckedCreateNestedOneWithoutReservationInput
  }

  export type ReservationCreateOrConnectWithoutVenueInput = {
    where: ReservationWhereUniqueInput
    create: XOR<ReservationCreateWithoutVenueInput, ReservationUncheckedCreateWithoutVenueInput>
  }

  export type ReservationCreateManyVenueInputEnvelope = {
    data: ReservationCreateManyVenueInput | ReservationCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type FavouriteCreateWithoutVenueInput = {
    user: UserCreateNestedOneWithoutFavouritesInput
  }

  export type FavouriteUncheckedCreateWithoutVenueInput = {
    id?: number
    userId: number
  }

  export type FavouriteCreateOrConnectWithoutVenueInput = {
    where: FavouriteWhereUniqueInput
    create: XOR<FavouriteCreateWithoutVenueInput, FavouriteUncheckedCreateWithoutVenueInput>
  }

  export type FavouriteCreateManyVenueInputEnvelope = {
    data: FavouriteCreateManyVenueInput | FavouriteCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type AmenityToVenueCreateWithoutVenueInput = {
    amenity: AmenityCreateNestedOneWithoutAmenityToVenuesInput
  }

  export type AmenityToVenueUncheckedCreateWithoutVenueInput = {
    amenityId: number
  }

  export type AmenityToVenueCreateOrConnectWithoutVenueInput = {
    where: AmenityToVenueWhereUniqueInput
    create: XOR<AmenityToVenueCreateWithoutVenueInput, AmenityToVenueUncheckedCreateWithoutVenueInput>
  }

  export type AmenityToVenueCreateManyVenueInputEnvelope = {
    data: AmenityToVenueCreateManyVenueInput | AmenityToVenueCreateManyVenueInput[]
    skipDuplicates?: boolean
  }

  export type VenueTypeCreateWithoutVenuesInput = {
    name: string
  }

  export type VenueTypeUncheckedCreateWithoutVenuesInput = {
    id?: number
    name: string
  }

  export type VenueTypeCreateOrConnectWithoutVenuesInput = {
    where: VenueTypeWhereUniqueInput
    create: XOR<VenueTypeCreateWithoutVenuesInput, VenueTypeUncheckedCreateWithoutVenuesInput>
  }

  export type UserUpsertWithoutVenuesInput = {
    update: XOR<UserUpdateWithoutVenuesInput, UserUncheckedUpdateWithoutVenuesInput>
    create: XOR<UserCreateWithoutVenuesInput, UserUncheckedCreateWithoutVenuesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVenuesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVenuesInput, UserUncheckedUpdateWithoutVenuesInput>
  }

  export type UserUpdateWithoutVenuesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUpdateManyWithoutUserNestedInput
    favourites?: FavouriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutVenuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    reservations?: ReservationUncheckedUpdateManyWithoutUserNestedInput
    favourites?: FavouriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReservationUpsertWithWhereUniqueWithoutVenueInput = {
    where: ReservationWhereUniqueInput
    update: XOR<ReservationUpdateWithoutVenueInput, ReservationUncheckedUpdateWithoutVenueInput>
    create: XOR<ReservationCreateWithoutVenueInput, ReservationUncheckedCreateWithoutVenueInput>
  }

  export type ReservationUpdateWithWhereUniqueWithoutVenueInput = {
    where: ReservationWhereUniqueInput
    data: XOR<ReservationUpdateWithoutVenueInput, ReservationUncheckedUpdateWithoutVenueInput>
  }

  export type ReservationUpdateManyWithWhereWithoutVenueInput = {
    where: ReservationScalarWhereInput
    data: XOR<ReservationUpdateManyMutationInput, ReservationUncheckedUpdateManyWithoutVenueInput>
  }

  export type FavouriteUpsertWithWhereUniqueWithoutVenueInput = {
    where: FavouriteWhereUniqueInput
    update: XOR<FavouriteUpdateWithoutVenueInput, FavouriteUncheckedUpdateWithoutVenueInput>
    create: XOR<FavouriteCreateWithoutVenueInput, FavouriteUncheckedCreateWithoutVenueInput>
  }

  export type FavouriteUpdateWithWhereUniqueWithoutVenueInput = {
    where: FavouriteWhereUniqueInput
    data: XOR<FavouriteUpdateWithoutVenueInput, FavouriteUncheckedUpdateWithoutVenueInput>
  }

  export type FavouriteUpdateManyWithWhereWithoutVenueInput = {
    where: FavouriteScalarWhereInput
    data: XOR<FavouriteUpdateManyMutationInput, FavouriteUncheckedUpdateManyWithoutVenueInput>
  }

  export type AmenityToVenueUpsertWithWhereUniqueWithoutVenueInput = {
    where: AmenityToVenueWhereUniqueInput
    update: XOR<AmenityToVenueUpdateWithoutVenueInput, AmenityToVenueUncheckedUpdateWithoutVenueInput>
    create: XOR<AmenityToVenueCreateWithoutVenueInput, AmenityToVenueUncheckedCreateWithoutVenueInput>
  }

  export type AmenityToVenueUpdateWithWhereUniqueWithoutVenueInput = {
    where: AmenityToVenueWhereUniqueInput
    data: XOR<AmenityToVenueUpdateWithoutVenueInput, AmenityToVenueUncheckedUpdateWithoutVenueInput>
  }

  export type AmenityToVenueUpdateManyWithWhereWithoutVenueInput = {
    where: AmenityToVenueScalarWhereInput
    data: XOR<AmenityToVenueUpdateManyMutationInput, AmenityToVenueUncheckedUpdateManyWithoutVenueInput>
  }

  export type VenueTypeUpsertWithoutVenuesInput = {
    update: XOR<VenueTypeUpdateWithoutVenuesInput, VenueTypeUncheckedUpdateWithoutVenuesInput>
    create: XOR<VenueTypeCreateWithoutVenuesInput, VenueTypeUncheckedCreateWithoutVenuesInput>
    where?: VenueTypeWhereInput
  }

  export type VenueTypeUpdateToOneWithWhereWithoutVenuesInput = {
    where?: VenueTypeWhereInput
    data: XOR<VenueTypeUpdateWithoutVenuesInput, VenueTypeUncheckedUpdateWithoutVenuesInput>
  }

  export type VenueTypeUpdateWithoutVenuesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VenueTypeUncheckedUpdateWithoutVenuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type VenueCreateWithoutVenueTypeInput = {
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    owner: UserCreateNestedOneWithoutVenuesInput
    reservations?: ReservationCreateNestedManyWithoutVenueInput
    favourites?: FavouriteCreateNestedManyWithoutVenueInput
    amenityToVenues?: AmenityToVenueCreateNestedManyWithoutVenueInput
  }

  export type VenueUncheckedCreateWithoutVenueTypeInput = {
    id?: number
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    ownerId: number
    reservations?: ReservationUncheckedCreateNestedManyWithoutVenueInput
    favourites?: FavouriteUncheckedCreateNestedManyWithoutVenueInput
    amenityToVenues?: AmenityToVenueUncheckedCreateNestedManyWithoutVenueInput
  }

  export type VenueCreateOrConnectWithoutVenueTypeInput = {
    where: VenueWhereUniqueInput
    create: XOR<VenueCreateWithoutVenueTypeInput, VenueUncheckedCreateWithoutVenueTypeInput>
  }

  export type VenueCreateManyVenueTypeInputEnvelope = {
    data: VenueCreateManyVenueTypeInput | VenueCreateManyVenueTypeInput[]
    skipDuplicates?: boolean
  }

  export type VenueUpsertWithWhereUniqueWithoutVenueTypeInput = {
    where: VenueWhereUniqueInput
    update: XOR<VenueUpdateWithoutVenueTypeInput, VenueUncheckedUpdateWithoutVenueTypeInput>
    create: XOR<VenueCreateWithoutVenueTypeInput, VenueUncheckedCreateWithoutVenueTypeInput>
  }

  export type VenueUpdateWithWhereUniqueWithoutVenueTypeInput = {
    where: VenueWhereUniqueInput
    data: XOR<VenueUpdateWithoutVenueTypeInput, VenueUncheckedUpdateWithoutVenueTypeInput>
  }

  export type VenueUpdateManyWithWhereWithoutVenueTypeInput = {
    where: VenueScalarWhereInput
    data: XOR<VenueUpdateManyMutationInput, VenueUncheckedUpdateManyWithoutVenueTypeInput>
  }

  export type AmenityToVenueCreateManyAmenityInput = {
    venueId: number
  }

  export type OccasionUpdateWithoutAmenitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OccasionUncheckedUpdateWithoutAmenitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OccasionUncheckedUpdateManyWithoutAmenitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityToVenueUpdateWithoutAmenityInput = {
    venue?: VenueUpdateOneRequiredWithoutAmenityToVenuesNestedInput
  }

  export type AmenityToVenueUncheckedUpdateWithoutAmenityInput = {
    venueId?: IntFieldUpdateOperationsInput | number
  }

  export type AmenityToVenueUncheckedUpdateManyWithoutAmenityInput = {
    venueId?: IntFieldUpdateOperationsInput | number
  }

  export type AmenityCreateManyCategoryInput = {
    id?: number
    name: string
  }

  export type AmenityUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    occasions?: OccasionUpdateManyWithoutAmenitiesNestedInput
    amenityToVenues?: AmenityToVenueUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    occasions?: OccasionUncheckedUpdateManyWithoutAmenitiesNestedInput
    amenityToVenues?: AmenityToVenueUncheckedUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AmenityUpdateWithoutOccasionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutAmenitiesNestedInput
    amenityToVenues?: AmenityToVenueUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityUncheckedUpdateWithoutOccasionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    amenityToVenues?: AmenityToVenueUncheckedUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityUncheckedUpdateManyWithoutOccasionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type VenueCreateManyOwnerInput = {
    id?: number
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    venueTypeId: number
  }

  export type ReservationCreateManyUserInput = {
    id?: number
    venueId: number
    dateStart: Date | string
    dateEnd: Date | string
    isPendingRating: boolean
  }

  export type FavouriteCreateManyUserInput = {
    id?: number
    venueId: number
  }

  export type VenueUpdateWithoutOwnerInput = {
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    reservations?: ReservationUpdateManyWithoutVenueNestedInput
    favourites?: FavouriteUpdateManyWithoutVenueNestedInput
    amenityToVenues?: AmenityToVenueUpdateManyWithoutVenueNestedInput
    venueType?: VenueTypeUpdateOneRequiredWithoutVenuesNestedInput
  }

  export type VenueUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    venueTypeId?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutVenueNestedInput
    favourites?: FavouriteUncheckedUpdateManyWithoutVenueNestedInput
    amenityToVenues?: AmenityToVenueUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateManyWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    venueTypeId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationUpdateWithoutUserInput = {
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isPendingRating?: BoolFieldUpdateOperationsInput | boolean
    venue?: VenueUpdateOneRequiredWithoutReservationsNestedInput
    rating?: RatingUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isPendingRating?: BoolFieldUpdateOperationsInput | boolean
    rating?: RatingUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isPendingRating?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FavouriteUpdateWithoutUserInput = {
    venue?: VenueUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type FavouriteUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
  }

  export type FavouriteUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    venueId?: IntFieldUpdateOperationsInput | number
  }

  export type ReservationCreateManyVenueInput = {
    id?: number
    userId: number
    dateStart: Date | string
    dateEnd: Date | string
    isPendingRating: boolean
  }

  export type FavouriteCreateManyVenueInput = {
    id?: number
    userId: number
  }

  export type AmenityToVenueCreateManyVenueInput = {
    amenityId: number
  }

  export type ReservationUpdateWithoutVenueInput = {
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isPendingRating?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutReservationsNestedInput
    rating?: RatingUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateWithoutVenueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isPendingRating?: BoolFieldUpdateOperationsInput | boolean
    rating?: RatingUncheckedUpdateOneWithoutReservationNestedInput
  }

  export type ReservationUncheckedUpdateManyWithoutVenueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    dateStart?: DateTimeFieldUpdateOperationsInput | Date | string
    dateEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    isPendingRating?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FavouriteUpdateWithoutVenueInput = {
    user?: UserUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type FavouriteUncheckedUpdateWithoutVenueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type FavouriteUncheckedUpdateManyWithoutVenueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AmenityToVenueUpdateWithoutVenueInput = {
    amenity?: AmenityUpdateOneRequiredWithoutAmenityToVenuesNestedInput
  }

  export type AmenityToVenueUncheckedUpdateWithoutVenueInput = {
    amenityId?: IntFieldUpdateOperationsInput | number
  }

  export type AmenityToVenueUncheckedUpdateManyWithoutVenueInput = {
    amenityId?: IntFieldUpdateOperationsInput | number
  }

  export type VenueCreateManyVenueTypeInput = {
    id?: number
    pricePerNightInEURCent: number
    rating: number
    capacity: number
    amountsOfBeds: number
    extraSleepingDetails: string
    name: string
    images: JsonNullValueInput | InputJsonValue
    description: string
    checkInHour: number
    checkOutHour: number
    distanceFromCityCenterInMeters: number
    facebookUrl?: string | null
    instagramUrl?: string | null
    twitterUrl?: string | null
    websiteUrl?: string | null
    streetNumber: string
    streetName: string
    postalCode: string
    city: string
    latitude?: number | null
    longitude?: number | null
    ownerId: number
  }

  export type VenueUpdateWithoutVenueTypeInput = {
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    owner?: UserUpdateOneRequiredWithoutVenuesNestedInput
    reservations?: ReservationUpdateManyWithoutVenueNestedInput
    favourites?: FavouriteUpdateManyWithoutVenueNestedInput
    amenityToVenues?: AmenityToVenueUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateWithoutVenueTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
    reservations?: ReservationUncheckedUpdateManyWithoutVenueNestedInput
    favourites?: FavouriteUncheckedUpdateManyWithoutVenueNestedInput
    amenityToVenues?: AmenityToVenueUncheckedUpdateManyWithoutVenueNestedInput
  }

  export type VenueUncheckedUpdateManyWithoutVenueTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    pricePerNightInEURCent?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    capacity?: IntFieldUpdateOperationsInput | number
    amountsOfBeds?: IntFieldUpdateOperationsInput | number
    extraSleepingDetails?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    images?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    checkInHour?: IntFieldUpdateOperationsInput | number
    checkOutHour?: IntFieldUpdateOperationsInput | number
    distanceFromCityCenterInMeters?: IntFieldUpdateOperationsInput | number
    facebookUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instagramUrl?: NullableStringFieldUpdateOperationsInput | string | null
    twitterUrl?: NullableStringFieldUpdateOperationsInput | string | null
    websiteUrl?: NullableStringFieldUpdateOperationsInput | string | null
    streetNumber?: StringFieldUpdateOperationsInput | string
    streetName?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    ownerId?: IntFieldUpdateOperationsInput | number
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