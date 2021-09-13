import { Writer, Reader } from 'protobufjs/minimal';
export declare const protobufPackage = "dreamrs.entity.entity";
export interface Entity {
    creator: string;
    id: number;
    name: string;
    founders: string;
    entityGroup: string;
    entityType: string;
    geo: string;
    urls: string;
    initiateDate: string;
    initiateDatePrecision: string;
    jurisdictions: string;
    industries: string;
    tokenType: string;
}
export declare const Entity: {
    encode(message: Entity, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): Entity;
    fromJSON(object: any): Entity;
    toJSON(message: Entity): unknown;
    fromPartial(object: DeepPartial<Entity>): Entity;
};
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
