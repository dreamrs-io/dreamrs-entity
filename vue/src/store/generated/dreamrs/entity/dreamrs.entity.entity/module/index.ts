// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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

const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;

  const client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgUpdateEntity: (data: MsgUpdateEntity): EncodeObject => ({ typeUrl: "/dreamrs.entity.entity.MsgUpdateEntity", value: data }),
    msgCreateEntity: (data: MsgCreateEntity): EncodeObject => ({ typeUrl: "/dreamrs.entity.entity.MsgCreateEntity", value: data }),
    msgDeleteEntity: (data: MsgDeleteEntity): EncodeObject => ({ typeUrl: "/dreamrs.entity.entity.MsgDeleteEntity", value: data }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
