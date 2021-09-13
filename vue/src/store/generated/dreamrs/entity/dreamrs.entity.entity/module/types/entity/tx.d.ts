import { Reader, Writer } from 'protobufjs/minimal';
export declare const protobufPackage = "dreamrs.entity.entity";
/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateEntity {
    creator: string;
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
export interface MsgCreateEntityResponse {
    id: number;
}
export interface MsgUpdateEntity {
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
export interface MsgUpdateEntityResponse {
}
export interface MsgDeleteEntity {
    creator: string;
    id: number;
}
export interface MsgDeleteEntityResponse {
}
export declare const MsgCreateEntity: {
    encode(message: MsgCreateEntity, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateEntity;
    fromJSON(object: any): MsgCreateEntity;
    toJSON(message: MsgCreateEntity): unknown;
    fromPartial(object: DeepPartial<MsgCreateEntity>): MsgCreateEntity;
};
export declare const MsgCreateEntityResponse: {
    encode(message: MsgCreateEntityResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCreateEntityResponse;
    fromJSON(object: any): MsgCreateEntityResponse;
    toJSON(message: MsgCreateEntityResponse): unknown;
    fromPartial(object: DeepPartial<MsgCreateEntityResponse>): MsgCreateEntityResponse;
};
export declare const MsgUpdateEntity: {
    encode(message: MsgUpdateEntity, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateEntity;
    fromJSON(object: any): MsgUpdateEntity;
    toJSON(message: MsgUpdateEntity): unknown;
    fromPartial(object: DeepPartial<MsgUpdateEntity>): MsgUpdateEntity;
};
export declare const MsgUpdateEntityResponse: {
    encode(_: MsgUpdateEntityResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateEntityResponse;
    fromJSON(_: any): MsgUpdateEntityResponse;
    toJSON(_: MsgUpdateEntityResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateEntityResponse>): MsgUpdateEntityResponse;
};
export declare const MsgDeleteEntity: {
    encode(message: MsgDeleteEntity, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteEntity;
    fromJSON(object: any): MsgDeleteEntity;
    toJSON(message: MsgDeleteEntity): unknown;
    fromPartial(object: DeepPartial<MsgDeleteEntity>): MsgDeleteEntity;
};
export declare const MsgDeleteEntityResponse: {
    encode(_: MsgDeleteEntityResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDeleteEntityResponse;
    fromJSON(_: any): MsgDeleteEntityResponse;
    toJSON(_: MsgDeleteEntityResponse): unknown;
    fromPartial(_: DeepPartial<MsgDeleteEntityResponse>): MsgDeleteEntityResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    /** this line is used by starport scaffolding # proto/tx/rpc */
    CreateEntity(request: MsgCreateEntity): Promise<MsgCreateEntityResponse>;
    UpdateEntity(request: MsgUpdateEntity): Promise<MsgUpdateEntityResponse>;
    DeleteEntity(request: MsgDeleteEntity): Promise<MsgDeleteEntityResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    CreateEntity(request: MsgCreateEntity): Promise<MsgCreateEntityResponse>;
    UpdateEntity(request: MsgUpdateEntity): Promise<MsgUpdateEntityResponse>;
    DeleteEntity(request: MsgDeleteEntity): Promise<MsgDeleteEntityResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
