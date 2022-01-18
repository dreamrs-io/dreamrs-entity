# Dreamrs Entity

**entity** is a blockchain built using Cosmos SDK and Tendermint and created with [Starport](https://github.com/tendermint/starport), which is the all-in-one platform to build, launch, and maintain any crypto application on a sovereign and secured blockchain. It is a developer-friendly interface to the Cosmos SDK, the world's most widely-used blockchain application framework.

## Install Starport CLI on your local machine 
---
* Operating Systems : Linux/MaxOS/Windows
* [Go (version 1.16 or higher)](https://golang.org/doc/install)
* [Go environment variable setting](https://golang.org/doc/gopath_code#GOPATH)
* [Installing/Updating Startport](https://docs.starport.network/guide/install.html)

#### Go ENV setting for MacOS
```
export PATH=$PATH:/usr/local/go/bin
export GOPATH=$(go env GOPATH)
export PATH=$PATH:$(go env GOPATH)/bin

or 

source ~/.bashrc 
```
## Clone the repo and start a node locally for development
---
1. Clone[Github Repo](https://github.com/dreamrs-io/dreamrs-entity.git) to local.
2. Then
 ```
 cd entity
 starport chain serve
```
3. Command for custom types (entity types has already created, avoid if not a new project)
```
starport scaffold list entity name founders entityGroup entityType geo urls initiateDate initiateDatePrecision jurisdictions industries tokenType --module dreamrs
```

## Run locally
---
```
starport chain serve
```
`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

## Configure
---
App name and prefix setting [./app/app.go]
```
const (
	AccountAddressPrefix = "dreamrs"
	Name                 = "entity"
)
```

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Starport docs](https://docs.starport.network).


## Web Frontend with VUE
---
Starport has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

## Build and deployment
---
### Build a node binary
To build binaries for a release, use the --release flag. The app binaries for one or more specified [release targets](https://gist.github.com/asukakenji/f15ba7e588ac42795f421b48b8aede63) are built in a dist_dev/ dir under the app's source.
```
$ starport chain build --release -t [GOOS:GOARCH]
```
[Go (Golang) GOOS and GOARCH](https://gist.github.com/asukakenji/f15ba7e588ac42795f421b48b8aede63)

[Documentation](https://docs.starport.network/cli/#starport-chain-build)

### Deploying to AWS with Linux2
For Linux2 the release targets should be [linux:amd64]
```
$ starport chain build --release -t linux:amd64
```
Upload 'dist_dev/entity_linux_amd64.tar.gz' to AWS
Run the following command you will get an 'entityd'
```
$ tar -xf entity_darwin_amd64.tar.gz
```

## Running a node on a linux server
---
### Initialize the chain
Enterying the node binary folder:

```$ ./entityd init <moniker> --chain-id my-test-chain```

The argument <moniker> is the custom username of your node, it should be human-readable.

Sample command

```$ ./entityd init dreamrChain --chain-id dreamr-main-chain```

### Adding new account in the keyring

```$ ./entityd keys add my_validator --keyring-backend test```

* --keyring-backend string  Select keyring's backend (os|file|test) (default "test")

Sample command

```$ ./entityd keys add main_node --keyring-backend os```

Then it should generate an address, a keyring passphrase, and a recover mnemonic.
* Put the generated address in a variable for later use.
* MY_VALIDATOR_ADDRESS=$(simd keys show my_validator -a --keyring-backend test)
```$ main_mode_addr=$(./entityd keys show main_node -a --keyring-backend os)```

### Grand tokens and stakes to new account
```$ ./entityd add-genesis-account $main_mode_addr 100000000000stake,100000000000stake```

### Add a validator to chain
Create a gentx.

```$ ./entityd gentx main_node 100000000stake --chain-id dreamr-main-chain --keyring-backend os```

Add the gentx to the genesis file.
```$ ./entityd collect-gentxs```

### Enable rest api
Modify ./config/app.toml
```
[api]
enable = true
swagger = true
address = "tcp://0.0.0.0:1317"
```

### Enable SSL for RPC HTTPS server
Need to have all the Certificates ([domain].crt and [domain].ca-bundle) combined in a single '.crt' file.
```$ cat your_domain.crt > your_domain_chain.crt ; echo >> your_domain_chain.crt ; cat your_domain.ca-bundle >> your_domain_chain.crt```

Modify ./config/config.toml
```
tls_cert_file = "[combined_certificate].crt"
tls_key_file = "[private].key"
```

### Start / Restart node
```$  ./entityd start --rpc.laddr tcp://0.0.0.0:26657 true```

Stop node

```
$ ps -ef | grep entityd
$ kill -9 [pid]
```

## Frontend ENV setting
---
REST ENDPOINT:
* https://openapi.dreamrs.net/ or http://dreamrs.network:1317

RPC ENDPOINT / TENDERMINT API
* https://dreamrs.network:26657

WS ENDPOINT / TENDERMINT WS
* wss://dreamrs.network:26657/websocket

ADDRESS PREFIX
* dreamrs

Sample for build-in VUE
```
VUE_APP_API_COSMOS=http://dreamrs.network:1317
VUE_APP_WS_TENDERMINT=wss://dreamrs.network:26657/websocket
VUE_APP_API_TENDERMINT=https://dreamrs.network:26657
VUE_APP_ADDRESS_PREFIX=dreamrs
VUE_APP_CHAIN_ID=spn
VUE_APP_CHAIN_NAME="Dreamrs Entity Network"
```

## Resources
---
- [Starport](https://github.com/tendermint/starport)
- [Cosmos SDK documentation](https://docs.cosmos.network)
- [Cosmos SDK Tutorials](https://tutorials.cosmos.network)
- [Discord](https://discord.gg/W8trcGV)