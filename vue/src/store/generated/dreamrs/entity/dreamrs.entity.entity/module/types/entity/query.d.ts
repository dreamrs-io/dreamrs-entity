import { Reader, Writer } from 'protobufjs/minimal';
import { Entity } from '../entity/entity';
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination';
export declare const protobufPackage = "dreamrs.entity.entity";
/** this line is used by starport scaffolding # 3 */
export interface QueryGetEntityRequest {
    id: number;
}
export interface QueryGetEntityResponse {
    Entity: Entity | undefined;
}
export interface QueryAllEntityRequest {
    pagination: PageRequest | undefined;
}
export interface QueryAllEntityResponse {
    Entity: Entity[];
    pagination: PageResponse | undefined;
}
export declare const QueryGetEntityRequest: {
    encode(message: QueryGetEntityRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetEntityRequest;
    fromJSON(object: any): QueryGetEntityRequest;
    toJSON(message: QueryGetEntityRequest): unknown;
    fromPartial(object: DeepPartial<QueryGetEntityRequest>): QueryGetEntityRequest;
};
export declare const QueryGetEntityResponse: {
    encode(message: QueryGetEntityResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryGetEntityResponse;
    fromJSON(object: any): QueryGetEntityResponse;
    toJSON(message: QueryGetEntityResponse): unknown;
    fromPartial(object: DeepPartial<QueryGetEntityResponse>): QueryGetEntityResponse;
};
export declare const QueryAllEntityRequest: {
    encode(message: QueryAllEntityRequest, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllEntityRequest;
    fromJSON(object: any): QueryAllEntityRequest;
    toJSON(message: QueryAllEntityRequest): unknown;
    fromPartial(object: DeepPartial<QueryAllEntityRequest>): QueryAllEntityRequest;
};
export declare const QueryAllEntityResponse: {
    encode(message: QueryAllEntityResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): QueryAllEntityResponse;
    fromJSON(object: any): QueryAllEntityResponse;
    toJSON(message: QueryAllEntityResponse): unknown;
    fromPartial(object: DeepPartial<QueryAllEntityResponse>): QueryAllEntityResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Queries a entity by id. */
    Entity(request: QueryGetEntityRequest): Promise<QueryGetEntityResponse>;
    /** Queries a list of entity items. */
    EntityAll(request: QueryAllEntityRequest): Promise<QueryAllEntityResponse>;
}
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    constructor(rpc: Rpc);
    Entity(request: QueryGetEntityRequest): Promise<QueryGetEntityResponse>;
    EntityAll(request: QueryAllEntityRequest): Promise<QueryAllEntityResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
declare type Builtin = Date | Function | Uint8Array | string | number | undefined;
export declare type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
