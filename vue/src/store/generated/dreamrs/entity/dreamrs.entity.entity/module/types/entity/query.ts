/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Entity } from '../entity/entity'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'dreamrs.entity.entity'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetEntityRequest {
  id: number
}

export interface QueryGetEntityResponse {
  Entity: Entity | undefined
}

export interface QueryAllEntityRequest {
  pagination: PageRequest | undefined
}

export interface QueryAllEntityResponse {
  Entity: Entity[]
  pagination: PageResponse | undefined
}

const baseQueryGetEntityRequest: object = { id: 0 }

export const QueryGetEntityRequest = {
  encode(message: QueryGetEntityRequest, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetEntityRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetEntityRequest } as QueryGetEntityRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetEntityRequest {
    const message = { ...baseQueryGetEntityRequest } as QueryGetEntityRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetEntityRequest): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetEntityRequest>): QueryGetEntityRequest {
    const message = { ...baseQueryGetEntityRequest } as QueryGetEntityRequest
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetEntityResponse: object = {}

export const QueryGetEntityResponse = {
  encode(message: QueryGetEntityResponse, writer: Writer = Writer.create()): Writer {
    if (message.Entity !== undefined) {
      Entity.encode(message.Entity, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetEntityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetEntityResponse } as QueryGetEntityResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Entity = Entity.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetEntityResponse {
    const message = { ...baseQueryGetEntityResponse } as QueryGetEntityResponse
    if (object.Entity !== undefined && object.Entity !== null) {
      message.Entity = Entity.fromJSON(object.Entity)
    } else {
      message.Entity = undefined
    }
    return message
  },

  toJSON(message: QueryGetEntityResponse): unknown {
    const obj: any = {}
    message.Entity !== undefined && (obj.Entity = message.Entity ? Entity.toJSON(message.Entity) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetEntityResponse>): QueryGetEntityResponse {
    const message = { ...baseQueryGetEntityResponse } as QueryGetEntityResponse
    if (object.Entity !== undefined && object.Entity !== null) {
      message.Entity = Entity.fromPartial(object.Entity)
    } else {
      message.Entity = undefined
    }
    return message
  }
}

const baseQueryAllEntityRequest: object = {}

export const QueryAllEntityRequest = {
  encode(message: QueryAllEntityRequest, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllEntityRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllEntityRequest } as QueryAllEntityRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllEntityRequest {
    const message = { ...baseQueryAllEntityRequest } as QueryAllEntityRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllEntityRequest): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllEntityRequest>): QueryAllEntityRequest {
    const message = { ...baseQueryAllEntityRequest } as QueryAllEntityRequest
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllEntityResponse: object = {}

export const QueryAllEntityResponse = {
  encode(message: QueryAllEntityResponse, writer: Writer = Writer.create()): Writer {
    for (const v of message.Entity) {
      Entity.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllEntityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllEntityResponse } as QueryAllEntityResponse
    message.Entity = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.Entity.push(Entity.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllEntityResponse {
    const message = { ...baseQueryAllEntityResponse } as QueryAllEntityResponse
    message.Entity = []
    if (object.Entity !== undefined && object.Entity !== null) {
      for (const e of object.Entity) {
        message.Entity.push(Entity.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllEntityResponse): unknown {
    const obj: any = {}
    if (message.Entity) {
      obj.Entity = message.Entity.map((e) => (e ? Entity.toJSON(e) : undefined))
    } else {
      obj.Entity = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllEntityResponse>): QueryAllEntityResponse {
    const message = { ...baseQueryAllEntityResponse } as QueryAllEntityResponse
    message.Entity = []
    if (object.Entity !== undefined && object.Entity !== null) {
      for (const e of object.Entity) {
        message.Entity.push(Entity.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a entity by id. */
  Entity(request: QueryGetEntityRequest): Promise<QueryGetEntityResponse>
  /** Queries a list of entity items. */
  EntityAll(request: QueryAllEntityRequest): Promise<QueryAllEntityResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  Entity(request: QueryGetEntityRequest): Promise<QueryGetEntityResponse> {
    const data = QueryGetEntityRequest.encode(request).finish()
    const promise = this.rpc.request('dreamrs.entity.entity.Query', 'Entity', data)
    return promise.then((data) => QueryGetEntityResponse.decode(new Reader(data)))
  }

  EntityAll(request: QueryAllEntityRequest): Promise<QueryAllEntityResponse> {
    const data = QueryAllEntityRequest.encode(request).finish()
    const promise = this.rpc.request('dreamrs.entity.entity.Query', 'EntityAll', data)
    return promise.then((data) => QueryAllEntityResponse.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
