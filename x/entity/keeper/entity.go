package keeper

import (
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/dreamrs/entity/x/entity/types"
	"strconv"
)

// GetEntityCount get the total number of TypeName.LowerCamel
func (k Keeper) GetEntityCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EntityCountKey))
	byteKey := types.KeyPrefix(types.EntityCountKey)
	bz := store.Get(byteKey)

	// Count doesn't exist: no element
	if bz == nil {
		return 0
	}

	// Parse bytes
	count, err := strconv.ParseUint(string(bz), 10, 64)
	if err != nil {
		// Panic because the count should be always formattable to uint64
		panic("cannot decode count")
	}

	return count
}

// SetEntityCount set the total number of entity
func (k Keeper) SetEntityCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EntityCountKey))
	byteKey := types.KeyPrefix(types.EntityCountKey)
	bz := []byte(strconv.FormatUint(count, 10))
	store.Set(byteKey, bz)
}

// AppendEntity appends a entity in the store with a new id and update the count
func (k Keeper) AppendEntity(
	ctx sdk.Context,
	entity types.Entity,
) uint64 {
	// Create the entity
	count := k.GetEntityCount(ctx)

	// Set the ID of the appended value
	entity.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EntityKey))
	appendedValue := k.cdc.MustMarshalBinaryBare(&entity)
	store.Set(GetEntityIDBytes(entity.Id), appendedValue)

	// Update entity count
	k.SetEntityCount(ctx, count+1)

	return count
}

// SetEntity set a specific entity in the store
func (k Keeper) SetEntity(ctx sdk.Context, entity types.Entity) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EntityKey))
	b := k.cdc.MustMarshalBinaryBare(&entity)
	store.Set(GetEntityIDBytes(entity.Id), b)
}

// GetEntity returns a entity from its id
func (k Keeper) GetEntity(ctx sdk.Context, id uint64) types.Entity {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EntityKey))
	var entity types.Entity
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetEntityIDBytes(id)), &entity)
	return entity
}

// HasEntity checks if the entity exists in the store
func (k Keeper) HasEntity(ctx sdk.Context, id uint64) bool {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EntityKey))
	return store.Has(GetEntityIDBytes(id))
}

// GetEntityOwner returns the creator of the
func (k Keeper) GetEntityOwner(ctx sdk.Context, id uint64) string {
	return k.GetEntity(ctx, id).Creator
}

// RemoveEntity removes a entity from the store
func (k Keeper) RemoveEntity(ctx sdk.Context, id uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EntityKey))
	store.Delete(GetEntityIDBytes(id))
}

// GetAllEntity returns all entity
func (k Keeper) GetAllEntity(ctx sdk.Context) (list []types.Entity) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EntityKey))
	iterator := sdk.KVStorePrefixIterator(store, []byte{})

	defer iterator.Close()

	for ; iterator.Valid(); iterator.Next() {
		var val types.Entity
		k.cdc.MustUnmarshalBinaryBare(iterator.Value(), &val)
		list = append(list, val)
	}

	return
}

// GetEntityIDBytes returns the byte representation of the ID
func GetEntityIDBytes(id uint64) []byte {
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, id)
	return bz
}

// GetEntityIDFromBytes returns ID in uint64 format from a byte array
func GetEntityIDFromBytes(bz []byte) uint64 {
	return binary.BigEndian.Uint64(bz)
}
