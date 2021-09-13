/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal';
import * as Long from 'long';
export const protobufPackage = 'dreamrs.entity.entity';
const baseMsgCreateEntity = {
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
};
export const MsgCreateEntity = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        if (message.founders !== '') {
            writer.uint32(26).string(message.founders);
        }
        if (message.entityGroup !== '') {
            writer.uint32(34).string(message.entityGroup);
        }
        if (message.entityType !== '') {
            writer.uint32(42).string(message.entityType);
        }
        if (message.geo !== '') {
            writer.uint32(50).string(message.geo);
        }
        if (message.urls !== '') {
            writer.uint32(58).string(message.urls);
        }
        if (message.initiateDate !== '') {
            writer.uint32(66).string(message.initiateDate);
        }
        if (message.initiateDatePrecision !== '') {
            writer.uint32(74).string(message.initiateDatePrecision);
        }
        if (message.jurisdictions !== '') {
            writer.uint32(82).string(message.jurisdictions);
        }
        if (message.industries !== '') {
            writer.uint32(90).string(message.industries);
        }
        if (message.tokenType !== '') {
            writer.uint32(98).string(message.tokenType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateEntity };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.founders = reader.string();
                    break;
                case 4:
                    message.entityGroup = reader.string();
                    break;
                case 5:
                    message.entityType = reader.string();
                    break;
                case 6:
                    message.geo = reader.string();
                    break;
                case 7:
                    message.urls = reader.string();
                    break;
                case 8:
                    message.initiateDate = reader.string();
                    break;
                case 9:
                    message.initiateDatePrecision = reader.string();
                    break;
                case 10:
                    message.jurisdictions = reader.string();
                    break;
                case 11:
                    message.industries = reader.string();
                    break;
                case 12:
                    message.tokenType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateEntity };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.founders !== undefined && object.founders !== null) {
            message.founders = String(object.founders);
        }
        else {
            message.founders = '';
        }
        if (object.entityGroup !== undefined && object.entityGroup !== null) {
            message.entityGroup = String(object.entityGroup);
        }
        else {
            message.entityGroup = '';
        }
        if (object.entityType !== undefined && object.entityType !== null) {
            message.entityType = String(object.entityType);
        }
        else {
            message.entityType = '';
        }
        if (object.geo !== undefined && object.geo !== null) {
            message.geo = String(object.geo);
        }
        else {
            message.geo = '';
        }
        if (object.urls !== undefined && object.urls !== null) {
            message.urls = String(object.urls);
        }
        else {
            message.urls = '';
        }
        if (object.initiateDate !== undefined && object.initiateDate !== null) {
            message.initiateDate = String(object.initiateDate);
        }
        else {
            message.initiateDate = '';
        }
        if (object.initiateDatePrecision !== undefined && object.initiateDatePrecision !== null) {
            message.initiateDatePrecision = String(object.initiateDatePrecision);
        }
        else {
            message.initiateDatePrecision = '';
        }
        if (object.jurisdictions !== undefined && object.jurisdictions !== null) {
            message.jurisdictions = String(object.jurisdictions);
        }
        else {
            message.jurisdictions = '';
        }
        if (object.industries !== undefined && object.industries !== null) {
            message.industries = String(object.industries);
        }
        else {
            message.industries = '';
        }
        if (object.tokenType !== undefined && object.tokenType !== null) {
            message.tokenType = String(object.tokenType);
        }
        else {
            message.tokenType = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.founders !== undefined && (obj.founders = message.founders);
        message.entityGroup !== undefined && (obj.entityGroup = message.entityGroup);
        message.entityType !== undefined && (obj.entityType = message.entityType);
        message.geo !== undefined && (obj.geo = message.geo);
        message.urls !== undefined && (obj.urls = message.urls);
        message.initiateDate !== undefined && (obj.initiateDate = message.initiateDate);
        message.initiateDatePrecision !== undefined && (obj.initiateDatePrecision = message.initiateDatePrecision);
        message.jurisdictions !== undefined && (obj.jurisdictions = message.jurisdictions);
        message.industries !== undefined && (obj.industries = message.industries);
        message.tokenType !== undefined && (obj.tokenType = message.tokenType);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateEntity };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.founders !== undefined && object.founders !== null) {
            message.founders = object.founders;
        }
        else {
            message.founders = '';
        }
        if (object.entityGroup !== undefined && object.entityGroup !== null) {
            message.entityGroup = object.entityGroup;
        }
        else {
            message.entityGroup = '';
        }
        if (object.entityType !== undefined && object.entityType !== null) {
            message.entityType = object.entityType;
        }
        else {
            message.entityType = '';
        }
        if (object.geo !== undefined && object.geo !== null) {
            message.geo = object.geo;
        }
        else {
            message.geo = '';
        }
        if (object.urls !== undefined && object.urls !== null) {
            message.urls = object.urls;
        }
        else {
            message.urls = '';
        }
        if (object.initiateDate !== undefined && object.initiateDate !== null) {
            message.initiateDate = object.initiateDate;
        }
        else {
            message.initiateDate = '';
        }
        if (object.initiateDatePrecision !== undefined && object.initiateDatePrecision !== null) {
            message.initiateDatePrecision = object.initiateDatePrecision;
        }
        else {
            message.initiateDatePrecision = '';
        }
        if (object.jurisdictions !== undefined && object.jurisdictions !== null) {
            message.jurisdictions = object.jurisdictions;
        }
        else {
            message.jurisdictions = '';
        }
        if (object.industries !== undefined && object.industries !== null) {
            message.industries = object.industries;
        }
        else {
            message.industries = '';
        }
        if (object.tokenType !== undefined && object.tokenType !== null) {
            message.tokenType = object.tokenType;
        }
        else {
            message.tokenType = '';
        }
        return message;
    }
};
const baseMsgCreateEntityResponse = { id: 0 };
export const MsgCreateEntityResponse = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCreateEntityResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgCreateEntityResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCreateEntityResponse };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgUpdateEntity = {
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
};
export const MsgUpdateEntity = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        if (message.name !== '') {
            writer.uint32(26).string(message.name);
        }
        if (message.founders !== '') {
            writer.uint32(34).string(message.founders);
        }
        if (message.entityGroup !== '') {
            writer.uint32(42).string(message.entityGroup);
        }
        if (message.entityType !== '') {
            writer.uint32(50).string(message.entityType);
        }
        if (message.geo !== '') {
            writer.uint32(58).string(message.geo);
        }
        if (message.urls !== '') {
            writer.uint32(66).string(message.urls);
        }
        if (message.initiateDate !== '') {
            writer.uint32(74).string(message.initiateDate);
        }
        if (message.initiateDatePrecision !== '') {
            writer.uint32(82).string(message.initiateDatePrecision);
        }
        if (message.jurisdictions !== '') {
            writer.uint32(90).string(message.jurisdictions);
        }
        if (message.industries !== '') {
            writer.uint32(98).string(message.industries);
        }
        if (message.tokenType !== '') {
            writer.uint32(106).string(message.tokenType);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateEntity };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                case 3:
                    message.name = reader.string();
                    break;
                case 4:
                    message.founders = reader.string();
                    break;
                case 5:
                    message.entityGroup = reader.string();
                    break;
                case 6:
                    message.entityType = reader.string();
                    break;
                case 7:
                    message.geo = reader.string();
                    break;
                case 8:
                    message.urls = reader.string();
                    break;
                case 9:
                    message.initiateDate = reader.string();
                    break;
                case 10:
                    message.initiateDatePrecision = reader.string();
                    break;
                case 11:
                    message.jurisdictions = reader.string();
                    break;
                case 12:
                    message.industries = reader.string();
                    break;
                case 13:
                    message.tokenType = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateEntity };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = '';
        }
        if (object.founders !== undefined && object.founders !== null) {
            message.founders = String(object.founders);
        }
        else {
            message.founders = '';
        }
        if (object.entityGroup !== undefined && object.entityGroup !== null) {
            message.entityGroup = String(object.entityGroup);
        }
        else {
            message.entityGroup = '';
        }
        if (object.entityType !== undefined && object.entityType !== null) {
            message.entityType = String(object.entityType);
        }
        else {
            message.entityType = '';
        }
        if (object.geo !== undefined && object.geo !== null) {
            message.geo = String(object.geo);
        }
        else {
            message.geo = '';
        }
        if (object.urls !== undefined && object.urls !== null) {
            message.urls = String(object.urls);
        }
        else {
            message.urls = '';
        }
        if (object.initiateDate !== undefined && object.initiateDate !== null) {
            message.initiateDate = String(object.initiateDate);
        }
        else {
            message.initiateDate = '';
        }
        if (object.initiateDatePrecision !== undefined && object.initiateDatePrecision !== null) {
            message.initiateDatePrecision = String(object.initiateDatePrecision);
        }
        else {
            message.initiateDatePrecision = '';
        }
        if (object.jurisdictions !== undefined && object.jurisdictions !== null) {
            message.jurisdictions = String(object.jurisdictions);
        }
        else {
            message.jurisdictions = '';
        }
        if (object.industries !== undefined && object.industries !== null) {
            message.industries = String(object.industries);
        }
        else {
            message.industries = '';
        }
        if (object.tokenType !== undefined && object.tokenType !== null) {
            message.tokenType = String(object.tokenType);
        }
        else {
            message.tokenType = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.founders !== undefined && (obj.founders = message.founders);
        message.entityGroup !== undefined && (obj.entityGroup = message.entityGroup);
        message.entityType !== undefined && (obj.entityType = message.entityType);
        message.geo !== undefined && (obj.geo = message.geo);
        message.urls !== undefined && (obj.urls = message.urls);
        message.initiateDate !== undefined && (obj.initiateDate = message.initiateDate);
        message.initiateDatePrecision !== undefined && (obj.initiateDatePrecision = message.initiateDatePrecision);
        message.jurisdictions !== undefined && (obj.jurisdictions = message.jurisdictions);
        message.industries !== undefined && (obj.industries = message.industries);
        message.tokenType !== undefined && (obj.tokenType = message.tokenType);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateEntity };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = '';
        }
        if (object.founders !== undefined && object.founders !== null) {
            message.founders = object.founders;
        }
        else {
            message.founders = '';
        }
        if (object.entityGroup !== undefined && object.entityGroup !== null) {
            message.entityGroup = object.entityGroup;
        }
        else {
            message.entityGroup = '';
        }
        if (object.entityType !== undefined && object.entityType !== null) {
            message.entityType = object.entityType;
        }
        else {
            message.entityType = '';
        }
        if (object.geo !== undefined && object.geo !== null) {
            message.geo = object.geo;
        }
        else {
            message.geo = '';
        }
        if (object.urls !== undefined && object.urls !== null) {
            message.urls = object.urls;
        }
        else {
            message.urls = '';
        }
        if (object.initiateDate !== undefined && object.initiateDate !== null) {
            message.initiateDate = object.initiateDate;
        }
        else {
            message.initiateDate = '';
        }
        if (object.initiateDatePrecision !== undefined && object.initiateDatePrecision !== null) {
            message.initiateDatePrecision = object.initiateDatePrecision;
        }
        else {
            message.initiateDatePrecision = '';
        }
        if (object.jurisdictions !== undefined && object.jurisdictions !== null) {
            message.jurisdictions = object.jurisdictions;
        }
        else {
            message.jurisdictions = '';
        }
        if (object.industries !== undefined && object.industries !== null) {
            message.industries = object.industries;
        }
        else {
            message.industries = '';
        }
        if (object.tokenType !== undefined && object.tokenType !== null) {
            message.tokenType = object.tokenType;
        }
        else {
            message.tokenType = '';
        }
        return message;
    }
};
const baseMsgUpdateEntityResponse = {};
export const MsgUpdateEntityResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateEntityResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgUpdateEntityResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgUpdateEntityResponse };
        return message;
    }
};
const baseMsgDeleteEntity = { creator: '', id: 0 };
export const MsgDeleteEntity = {
    encode(message, writer = Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== 0) {
            writer.uint32(16).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteEntity };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgDeleteEntity };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDeleteEntity };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    }
};
const baseMsgDeleteEntityResponse = {};
export const MsgDeleteEntityResponse = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDeleteEntityResponse };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(_) {
        const message = { ...baseMsgDeleteEntityResponse };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseMsgDeleteEntityResponse };
        return message;
    }
};
export class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    CreateEntity(request) {
        const data = MsgCreateEntity.encode(request).finish();
        const promise = this.rpc.request('dreamrs.entity.entity.Msg', 'CreateEntity', data);
        return promise.then((data) => MsgCreateEntityResponse.decode(new Reader(data)));
    }
    UpdateEntity(request) {
        const data = MsgUpdateEntity.encode(request).finish();
        const promise = this.rpc.request('dreamrs.entity.entity.Msg', 'UpdateEntity', data);
        return promise.then((data) => MsgUpdateEntityResponse.decode(new Reader(data)));
    }
    DeleteEntity(request) {
        const data = MsgDeleteEntity.encode(request).finish();
        const promise = this.rpc.request('dreamrs.entity.entity.Msg', 'DeleteEntity', data);
        return promise.then((data) => MsgDeleteEntityResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}
