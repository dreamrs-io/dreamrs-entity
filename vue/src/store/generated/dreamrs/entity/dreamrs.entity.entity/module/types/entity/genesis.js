/* eslint-disable */
import * as Long from 'long';
import { util, configure, Writer, Reader } from 'protobufjs/minimal';
import { Entity } from '../entity/entity';
export const protobufPackage = 'dreamrs.entity.entity';
const baseGenesisState = { entityCount: 0 };
export const GenesisState = {
    encode(message, writer = Writer.create()) {
        for (const v of message.entityList) {
            Entity.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.entityCount !== 0) {
            writer.uint32(16).uint64(message.entityCount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseGenesisState };
        message.entityList = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.entityList.push(Entity.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.entityCount = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseGenesisState };
        message.entityList = [];
        if (object.entityList !== undefined && object.entityList !== null) {
            for (const e of object.entityList) {
                message.entityList.push(Entity.fromJSON(e));
            }
        }
        if (object.entityCount !== undefined && object.entityCount !== null) {
            message.entityCount = Number(object.entityCount);
        }
        else {
            message.entityCount = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.entityList) {
            obj.entityList = message.entityList.map((e) => (e ? Entity.toJSON(e) : undefined));
        }
        else {
            obj.entityList = [];
        }
        message.entityCount !== undefined && (obj.entityCount = message.entityCount);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseGenesisState };
        message.entityList = [];
        if (object.entityList !== undefined && object.entityList !== null) {
            for (const e of object.entityList) {
                message.entityList.push(Entity.fromPartial(e));
            }
        }
        if (object.entityCount !== undefined && object.entityCount !== null) {
            message.entityCount = object.entityCount;
        }
        else {
            message.entityCount = 0;
        }
        return message;
    }
};
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
