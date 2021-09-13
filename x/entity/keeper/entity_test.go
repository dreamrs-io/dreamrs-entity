package keeper

import (
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/dreamrs/entity/x/entity/types"
	"github.com/stretchr/testify/assert"
)

func createNEntity(keeper *Keeper, ctx sdk.Context, n int) []types.Entity {
	items := make([]types.Entity, n)
	for i := range items {
		items[i].Creator = "any"
		items[i].Id = keeper.AppendEntity(ctx, items[i])
	}
	return items
}

func TestEntityGet(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNEntity(keeper, ctx, 10)
	for _, item := range items {
		assert.Equal(t, item, keeper.GetEntity(ctx, item.Id))
	}
}

func TestEntityExist(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNEntity(keeper, ctx, 10)
	for _, item := range items {
		assert.True(t, keeper.HasEntity(ctx, item.Id))
	}
}

func TestEntityRemove(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNEntity(keeper, ctx, 10)
	for _, item := range items {
		keeper.RemoveEntity(ctx, item.Id)
		assert.False(t, keeper.HasEntity(ctx, item.Id))
	}
}

func TestEntityGetAll(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNEntity(keeper, ctx, 10)
	assert.Equal(t, items, keeper.GetAllEntity(ctx))
}

func TestEntityCount(t *testing.T) {
	keeper, ctx := setupKeeper(t)
	items := createNEntity(keeper, ctx, 10)
	count := uint64(len(items))
	assert.Equal(t, count, keeper.GetEntityCount(ctx))
}
