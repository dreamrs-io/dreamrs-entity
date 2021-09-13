package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/cosmos/cosmos-sdk/types/query"
	"github.com/dreamrs/entity/x/entity/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) EntityAll(c context.Context, req *types.QueryAllEntityRequest) (*types.QueryAllEntityResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var entitys []*types.Entity
	ctx := sdk.UnwrapSDKContext(c)

	store := ctx.KVStore(k.storeKey)
	entityStore := prefix.NewStore(store, types.KeyPrefix(types.EntityKey))

	pageRes, err := query.Paginate(entityStore, req.Pagination, func(key []byte, value []byte) error {
		var entity types.Entity
		if err := k.cdc.UnmarshalBinaryBare(value, &entity); err != nil {
			return err
		}

		entitys = append(entitys, &entity)
		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAllEntityResponse{Entity: entitys, Pagination: pageRes}, nil
}

func (k Keeper) Entity(c context.Context, req *types.QueryGetEntityRequest) (*types.QueryGetEntityResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var entity types.Entity
	ctx := sdk.UnwrapSDKContext(c)

	if !k.HasEntity(ctx, req.Id) {
		return nil, sdkerrors.ErrKeyNotFound
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), types.KeyPrefix(types.EntityKey))
	k.cdc.MustUnmarshalBinaryBare(store.Get(GetEntityIDBytes(req.Id)), &entity)

	return &types.QueryGetEntityResponse{Entity: &entity}, nil
}
