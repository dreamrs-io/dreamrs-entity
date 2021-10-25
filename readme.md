# Entity
**entity** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport).

## Get started

```
starport chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).

### Launch

To launch your blockchain live on multiple nodes, use `starport network` commands. Learn more about [Starport Network](https://github.com/tendermint/spn).

### Web Frontend

Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Starport front-end development](https://github.com/tendermint/vue).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.starport.network/dreamrs/entity@latest! | sudo bash
```
`dreamrs/entity` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Starport](https://github.com/tendermint/starport)
- [Starport Docs](https://docs.starport.network)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/W8trcGV)

## Instruction
Add custom types
```
starport scaffold list entity name founders entityGroup entityType geo urls initiateDate initiateDatePrecision jurisdictions industries tokenType --module entity
``` 

Build and delploy to aws
darwin/amd64 means macOS
```
$ starport chain build --release -t aws:linux2
#upload entity_darwin_amd64.tar.gz to ec2
$ tar -xf entity_darwin_amd64.tar.gz
# get entityd
```
Runing a node
```
1. initialize the chain
# The argument <moniker> is the custom username of your node, it should be human-readable.
# simd init <moniker> --chain-id my-test-chain

$ cd ~/chain
# -home ~/chain/.entityapp
$ ./entityd init dreamrChain --chain-id dreamr-main-chain

2. add new account in the keyring
# simd keys add my_validator --keyring-backend test
# --keyring-backend string   Select keyring's backend (os|file|test) (default "test")
# Put the generated address in a variable for later use.
# MY_VALIDATOR_ADDRESS=$(simd keys show my_validator -a --keyring-backend test)

$ ./entityd keys add main_node --keyring-backend os
# address: dreamrs1kzaevg0p62etuzuhk0qz9jdf5yd5z3p5krh8nl
# keyring passphrase for main_node: "check eyebrow input ridge retreat rail course outside sibling trumpet congress crawl hidden wise fashion jeans object holiday foil major reopen rice staff elbow"
# recover: "silly path key school rookie receive return stereo poem card nation quality frame fancy hair inherit wait double assist mouse exchange acoustic good happy"
$ main_mode_addr=$(./entityd keys show main_node -a --keyring-backend os)

3. grand tokens and stakes to new account
# simd add-genesis-account $MY_VALIDATOR_ADDRESS 100000000000stake
$ ./entityd add-genesis-account $main_mode_addr 100000000token,100000000000stake

4. add a validator to chain
# Create a gentx.
# simd gentx my_validator 100000000stake --chain-id my-test-chain --keyring-backend test
$ ./entityd gentx main_node 100000000stake --chain-id dreamr-main-chain --keyring-backend os

# Add the gentx to the genesis file.
# simd collect-gentxs
$ ./entityd collect-gentxs

5. enable rest api
# modify ~/.entity/config/app/toml
[api]
enable = true
swagger = true
address = "tcp://0.0.0.0:1317"

6. start the node, run a localnet
$  ./entityd start --rpc.laddr tcp://0.0.0.0:26657 --rpc.unsafe true
```


## test account

```
dd : 
find indicate prevent throw unit auto dwarf flight below culture surprise chimney drop rebuild horror version park dignity list blouse hammer cart repeat style
```