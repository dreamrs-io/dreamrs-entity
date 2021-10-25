// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateEntity } from "./types/entity/tx";
import { MsgCreateEntity } from "./types/entity/tx";
import { MsgDeleteEntity } from "./types/entity/tx";
const types = [
    ["/dreamrs.entity.entity.MsgUpdateEntity", MsgUpdateEntity],
    ["/dreamrs.entity.entity.MsgCreateEntity", MsgCreateEntity],
    ["/dreamrs.entity.entity.MsgDeleteEntity", MsgDeleteEntity],
];
export const MissingWalletError = new Error("wallet is required");
const registry = new Registry(types);
const defaultFee = {
    amount: [],
    gas: "200000",
};
const txClient = async (wallet, { addr: addr } = { addr: "http://localhost:26657" }) => {
    if (!wallet)
        throw MissingWalletError;
    const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgUpdateEntity: (data) => ({ typeUrl: "/dreamrs.entity.entity.MsgUpdateEntity", value: data }),
        msgCreateEntity: (data) => ({ typeUrl: "/dreamrs.entity.entity.MsgCreateEntity", value: data }),
        msgDeleteEntity: (data) => ({ typeUrl: "/dreamrs.entity.entity.MsgDeleteEntity", value: data }),
    };
};
const queryClient = async ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};
export { txClient, queryClient, };
