package entity

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/dreamrs/entity/x/entity/keeper"
	"github.com/dreamrs/entity/x/entity/types"
)

// InitGenesis initializes the capability module's state from a provided genesis
// state.
func InitGenesis(ctx sdk.Context, k keeper.Keeper, genState types.GenesisState) {
	// this line is used by starport scaffolding # genesis/module/init
	// Set all the entity
	for _, elem := range genState.EntityList {
		k.SetEntity(ctx, *elem)
	}

	// Set entity count
	k.SetEntityCount(ctx, genState.EntityCount)

	// this line is used by starport scaffolding # ibc/genesis/init
}

// ExportGenesis returns the capability module's exported genesis.
func ExportGenesis(ctx sdk.Context, k keeper.Keeper) *types.GenesisState {
	genesis := types.DefaultGenesis()

	// this line is used by starport scaffolding # genesis/module/export
	// Get all entity
	entityList := k.GetAllEntity(ctx)
	for _, elem := range entityList {
		elem := elem
		genesis.EntityList = append(genesis.EntityList, &elem)
	}

	// Set the current count
	genesis.EntityCount = k.GetEntityCount(ctx)

	// this line is used by starport scaffolding # ibc/genesis/export

	return genesis
}
