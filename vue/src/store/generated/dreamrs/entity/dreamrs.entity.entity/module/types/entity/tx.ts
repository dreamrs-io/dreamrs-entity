/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'dreamrs.entity.entity'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateEntity {
  creator: string
  name: string
  founders: string
  entityGroup: string
  entityType: string
  geo: string
  urls: string
  initiateDate: string
  initiateDatePrecision: string
  jurisdictions: string
  industries: string
  tokenType: string
}

export interface MsgCreateEntityResponse {
  id: number
}

export interface MsgUpdateEntity {
  creator: string
  id: number
  name: string
  founders: string
  entityGroup: string
  entityType: string
  geo: string
  urls: string
  initiateDate: string
  initiateDatePrecision: string
  jurisdictions: string
  industries: string
  tokenType: string
}

export interface MsgUpdateEntityResponse {}

export interface MsgDeleteEntity {
  creator: string
  id: number
}

export interface MsgDeleteEntityResponse {}

const baseMsgCreateEntity: object = {
  creator: '',
  name: '',
  founders: '',
  entityGroup: '',
  entityType: '',
  geo: '',
  urls: '',
  initiateDate: '',
  initiateDatePrecision: '',
  jurisdictions: '',
  industries: '',
  tokenType: ''
}

export const MsgCreateEntity = {
  encode(message: MsgCreateEntity, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.founders !== '') {
      writer.uint32(26).string(message.founders)
    }
    if (message.entityGroup !== '') {
      writer.uint32(34).string(message.entityGroup)
    }
    if (message.entityType !== '') {
      writer.uint32(42).string(message.entityType)
    }
    if (message.geo !== '') {
      writer.uint32(50).string(message.geo)
    }
    if (message.urls !== '') {
      writer.uint32(58).string(message.urls)
    }
    if (message.initiateDate !== '') {
      writer.uint32(66).string(message.initiateDate)
    }
    if (message.initiateDatePrecision !== '') {
      writer.uint32(74).string(message.initiateDatePrecision)
    }
    if (message.jurisdictions !== '') {
      writer.uint32(82).string(message.jurisdictions)
    }
    if (message.industries !== '') {
      writer.uint32(90).string(message.industries)
    }
    if (message.tokenType !== '') {
      writer.uint32(98).string(message.tokenType)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateEntity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateEntity } as MsgCreateEntity
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.founders = reader.string()
          break
        case 4:
          message.entityGroup = reader.string()
          break
        case 5:
          message.entityType = reader.string()
          break
        case 6:
          message.geo = reader.string()
          break
        case 7:
          message.urls = reader.string()
          break
        case 8:
          message.initiateDate = reader.string()
          break
        case 9:
          message.initiateDatePrecision = reader.string()
          break
        case 10:
          message.jurisdictions = reader.string()
          break
        case 11:
          message.industries = reader.string()
          break
        case 12:
          message.tokenType = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateEntity {
    const message = { ...baseMsgCreateEntity } as MsgCreateEntity
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.founders !== undefined && object.founders !== null) {
      message.founders = String(object.founders)
    } else {
      message.founders = ''
    }
    if (object.entityGroup !== undefined && object.entityGroup !== null) {
      message.entityGroup = String(object.entityGroup)
    } else {
      message.entityGroup = ''
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = String(object.entityType)
    } else {
      message.entityType = ''
    }
    if (object.geo !== undefined && object.geo !== null) {
      message.geo = String(object.geo)
    } else {
      message.geo = ''
    }
    if (object.urls !== undefined && object.urls !== null) {
      message.urls = String(object.urls)
    } else {
      message.urls = ''
    }
    if (object.initiateDate !== undefined && object.initiateDate !== null) {
      message.initiateDate = String(object.initiateDate)
    } else {
      message.initiateDate = ''
    }
    if (object.initiateDatePrecision !== undefined && object.initiateDatePrecision !== null) {
      message.initiateDatePrecision = String(object.initiateDatePrecision)
    } else {
      message.initiateDatePrecision = ''
    }
    if (object.jurisdictions !== undefined && object.jurisdictions !== null) {
      message.jurisdictions = String(object.jurisdictions)
    } else {
      message.jurisdictions = ''
    }
    if (object.industries !== undefined && object.industries !== null) {
      message.industries = String(object.industries)
    } else {
      message.industries = ''
    }
    if (object.tokenType !== undefined && object.tokenType !== null) {
      message.tokenType = String(object.tokenType)
    } else {
      message.tokenType = ''
    }
    return message
  },

  toJSON(message: MsgCreateEntity): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.founders !== undefined && (obj.founders = message.founders)
    message.entityGroup !== undefined && (obj.entityGroup = message.entityGroup)
    message.entityType !== undefined && (obj.entityType = message.entityType)
    message.geo !== undefined && (obj.geo = message.geo)
    message.urls !== undefined && (obj.urls = message.urls)
    message.initiateDate !== undefined && (obj.initiateDate = message.initiateDate)
    message.initiateDatePrecision !== undefined && (obj.initiateDatePrecision = message.initiateDatePrecision)
    message.jurisdictions !== undefined && (obj.jurisdictions = message.jurisdictions)
    message.industries !== undefined && (obj.industries = message.industries)
    message.tokenType !== undefined && (obj.tokenType = message.tokenType)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateEntity>): MsgCreateEntity {
    const message = { ...baseMsgCreateEntity } as MsgCreateEntity
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.founders !== undefined && object.founders !== null) {
      message.founders = object.founders
    } else {
      message.founders = ''
    }
    if (object.entityGroup !== undefined && object.entityGroup !== null) {
      message.entityGroup = object.entityGroup
    } else {
      message.entityGroup = ''
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = object.entityType
    } else {
      message.entityType = ''
    }
    if (object.geo !== undefined && object.geo !== null) {
      message.geo = object.geo
    } else {
      message.geo = ''
    }
    if (object.urls !== undefined && object.urls !== null) {
      message.urls = object.urls
    } else {
      message.urls = ''
    }
    if (object.initiateDate !== undefined && object.initiateDate !== null) {
      message.initiateDate = object.initiateDate
    } else {
      message.initiateDate = ''
    }
    if (object.initiateDatePrecision !== undefined && object.initiateDatePrecision !== null) {
      message.initiateDatePrecision = object.initiateDatePrecision
    } else {
      message.initiateDatePrecision = ''
    }
    if (object.jurisdictions !== undefined && object.jurisdictions !== null) {
      message.jurisdictions = object.jurisdictions
    } else {
      message.jurisdictions = ''
    }
    if (object.industries !== undefined && object.industries !== null) {
      message.industries = object.industries
    } else {
      message.industries = ''
    }
    if (object.tokenType !== undefined && object.tokenType !== null) {
      message.tokenType = object.tokenType
    } else {
      message.tokenType = ''
    }
    return message
  }
}

const baseMsgCreateEntityResponse: object = { id: 0 }

export const MsgCreateEntityResponse = {
  encode(message: MsgCreateEntityResponse, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateEntityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateEntityResponse } as MsgCreateEntityResponse
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

  fromJSON(object: any): MsgCreateEntityResponse {
    const message = { ...baseMsgCreateEntityResponse } as MsgCreateEntityResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateEntityResponse): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateEntityResponse>): MsgCreateEntityResponse {
    const message = { ...baseMsgCreateEntityResponse } as MsgCreateEntityResponse
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateEntity: object = {
  creator: '',
  id: 0,
  name: '',
  founders: '',
  entityGroup: '',
  entityType: '',
  geo: '',
  urls: '',
  initiateDate: '',
  initiateDatePrecision: '',
  jurisdictions: '',
  industries: '',
  tokenType: ''
}

export const MsgUpdateEntity = {
  encode(message: MsgUpdateEntity, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.founders !== '') {
      writer.uint32(34).string(message.founders)
    }
    if (message.entityGroup !== '') {
      writer.uint32(42).string(message.entityGroup)
    }
    if (message.entityType !== '') {
      writer.uint32(50).string(message.entityType)
    }
    if (message.geo !== '') {
      writer.uint32(58).string(message.geo)
    }
    if (message.urls !== '') {
      writer.uint32(66).string(message.urls)
    }
    if (message.initiateDate !== '') {
      writer.uint32(74).string(message.initiateDate)
    }
    if (message.initiateDatePrecision !== '') {
      writer.uint32(82).string(message.initiateDatePrecision)
    }
    if (message.jurisdictions !== '') {
      writer.uint32(90).string(message.jurisdictions)
    }
    if (message.industries !== '') {
      writer.uint32(98).string(message.industries)
    }
    if (message.tokenType !== '') {
      writer.uint32(106).string(message.tokenType)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateEntity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateEntity } as MsgUpdateEntity
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.name = reader.string()
          break
        case 4:
          message.founders = reader.string()
          break
        case 5:
          message.entityGroup = reader.string()
          break
        case 6:
          message.entityType = reader.string()
          break
        case 7:
          message.geo = reader.string()
          break
        case 8:
          message.urls = reader.string()
          break
        case 9:
          message.initiateDate = reader.string()
          break
        case 10:
          message.initiateDatePrecision = reader.string()
          break
        case 11:
          message.jurisdictions = reader.string()
          break
        case 12:
          message.industries = reader.string()
          break
        case 13:
          message.tokenType = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateEntity {
    const message = { ...baseMsgUpdateEntity } as MsgUpdateEntity
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.founders !== undefined && object.founders !== null) {
      message.founders = String(object.founders)
    } else {
      message.founders = ''
    }
    if (object.entityGroup !== undefined && object.entityGroup !== null) {
      message.entityGroup = String(object.entityGroup)
    } else {
      message.entityGroup = ''
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = String(object.entityType)
    } else {
      message.entityType = ''
    }
    if (object.geo !== undefined && object.geo !== null) {
      message.geo = String(object.geo)
    } else {
      message.geo = ''
    }
    if (object.urls !== undefined && object.urls !== null) {
      message.urls = String(object.urls)
    } else {
      message.urls = ''
    }
    if (object.initiateDate !== undefined && object.initiateDate !== null) {
      message.initiateDate = String(object.initiateDate)
    } else {
      message.initiateDate = ''
    }
    if (object.initiateDatePrecision !== undefined && object.initiateDatePrecision !== null) {
      message.initiateDatePrecision = String(object.initiateDatePrecision)
    } else {
      message.initiateDatePrecision = ''
    }
    if (object.jurisdictions !== undefined && object.jurisdictions !== null) {
      message.jurisdictions = String(object.jurisdictions)
    } else {
      message.jurisdictions = ''
    }
    if (object.industries !== undefined && object.industries !== null) {
      message.industries = String(object.industries)
    } else {
      message.industries = ''
    }
    if (object.tokenType !== undefined && object.tokenType !== null) {
      message.tokenType = String(object.tokenType)
    } else {
      message.tokenType = ''
    }
    return message
  },

  toJSON(message: MsgUpdateEntity): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.name !== undefined && (obj.name = message.name)
    message.founders !== undefined && (obj.founders = message.founders)
    message.entityGroup !== undefined && (obj.entityGroup = message.entityGroup)
    message.entityType !== undefined && (obj.entityType = message.entityType)
    message.geo !== undefined && (obj.geo = message.geo)
    message.urls !== undefined && (obj.urls = message.urls)
    message.initiateDate !== undefined && (obj.initiateDate = message.initiateDate)
    message.initiateDatePrecision !== undefined && (obj.initiateDatePrecision = message.initiateDatePrecision)
    message.jurisdictions !== undefined && (obj.jurisdictions = message.jurisdictions)
    message.industries !== undefined && (obj.industries = message.industries)
    message.tokenType !== undefined && (obj.tokenType = message.tokenType)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateEntity>): MsgUpdateEntity {
    const message = { ...baseMsgUpdateEntity } as MsgUpdateEntity
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.founders !== undefined && object.founders !== null) {
      message.founders = object.founders
    } else {
      message.founders = ''
    }
    if (object.entityGroup !== undefined && object.entityGroup !== null) {
      message.entityGroup = object.entityGroup
    } else {
      message.entityGroup = ''
    }
    if (object.entityType !== undefined && object.entityType !== null) {
      message.entityType = object.entityType
    } else {
      message.entityType = ''
    }
    if (object.geo !== undefined && object.geo !== null) {
      message.geo = object.geo
    } else {
      message.geo = ''
    }
    if (object.urls !== undefined && object.urls !== null) {
      message.urls = object.urls
    } else {
      message.urls = ''
    }
    if (object.initiateDate !== undefined && object.initiateDate !== null) {
      message.initiateDate = object.initiateDate
    } else {
      message.initiateDate = ''
    }
    if (object.initiateDatePrecision !== undefined && object.initiateDatePrecision !== null) {
      message.initiateDatePrecision = object.initiateDatePrecision
    } else {
      message.initiateDatePrecision = ''
    }
    if (object.jurisdictions !== undefined && object.jurisdictions !== null) {
      message.jurisdictions = object.jurisdictions
    } else {
      message.jurisdictions = ''
    }
    if (object.industries !== undefined && object.industries !== null) {
      message.industries = object.industries
    } else {
      message.industries = ''
    }
    if (object.tokenType !== undefined && object.tokenType !== null) {
      message.tokenType = object.tokenType
    } else {
      message.tokenType = ''
    }
    return message
  }
}

const baseMsgUpdateEntityResponse: object = {}

export const MsgUpdateEntityResponse = {
  encode(_: MsgUpdateEntityResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateEntityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateEntityResponse } as MsgUpdateEntityResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateEntityResponse {
    const message = { ...baseMsgUpdateEntityResponse } as MsgUpdateEntityResponse
    return message
  },

  toJSON(_: MsgUpdateEntityResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateEntityResponse>): MsgUpdateEntityResponse {
    const message = { ...baseMsgUpdateEntityResponse } as MsgUpdateEntityResponse
    return message
  }
}

const baseMsgDeleteEntity: object = { creator: '', id: 0 }

export const MsgDeleteEntity = {
  encode(message: MsgDeleteEntity, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteEntity {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteEntity } as MsgDeleteEntity
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteEntity {
    const message = { ...baseMsgDeleteEntity } as MsgDeleteEntity
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteEntity): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteEntity>): MsgDeleteEntity {
    const message = { ...baseMsgDeleteEntity } as MsgDeleteEntity
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteEntityResponse: object = {}

export const MsgDeleteEntityResponse = {
  encode(_: MsgDeleteEntityResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteEntityResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteEntityResponse } as MsgDeleteEntityResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteEntityResponse {
    const message = { ...baseMsgDeleteEntityResponse } as MsgDeleteEntityResponse
    return message
  },

  toJSON(_: MsgDeleteEntityResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteEntityResponse>): MsgDeleteEntityResponse {
    const message = { ...baseMsgDeleteEntityResponse } as MsgDeleteEntityResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateEntity(request: MsgCreateEntity): Promise<MsgCreateEntityResponse>
  UpdateEntity(request: MsgUpdateEntity): Promise<MsgUpdateEntityResponse>
  DeleteEntity(request: MsgDeleteEntity): Promise<MsgDeleteEntityResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateEntity(request: MsgCreateEntity): Promise<MsgCreateEntityResponse> {
    const data = MsgCreateEntity.encode(request).finish()
    const promise = this.rpc.request('dreamrs.entity.entity.Msg', 'CreateEntity', data)
    return promise.then((data) => MsgCreateEntityResponse.decode(new Reader(data)))
  }

  UpdateEntity(request: MsgUpdateEntity): Promise<MsgUpdateEntityResponse> {
    const data = MsgUpdateEntity.encode(request).finish()
    const promise = this.rpc.request('dreamrs.entity.entity.Msg', 'UpdateEntity', data)
    return promise.then((data) => MsgUpdateEntityResponse.decode(new Reader(data)))
  }

  DeleteEntity(request: MsgDeleteEntity): Promise<MsgDeleteEntityResponse> {
    const data = MsgDeleteEntity.encode(request).finish()
    const promise = this.rpc.request('dreamrs.entity.entity.Msg', 'DeleteEntity', data)
    return promise.then((data) => MsgDeleteEntityResponse.decode(new Reader(data)))
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
