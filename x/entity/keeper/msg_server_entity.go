package keeper

import (
	"context"
	"fmt"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
	"github.com/dreamrs/entity/x/entity/types"
)

func (k msgServer) CreateEntity(goCtx context.Context, msg *types.MsgCreateEntity) (*types.MsgCreateEntityResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var entity = types.Entity{
		Creator:               msg.Creator,
		Name:                  msg.Name,
		Founders:              msg.Founders,
		EntityGroup:           msg.EntityGroup,
		EntityType:            msg.EntityType,
		Geo:                   msg.Geo,
		Urls:                  msg.Urls,
		InitiateDate:          msg.InitiateDate,
		InitiateDatePrecision: msg.InitiateDatePrecision,
		Jurisdictions:         msg.Jurisdictions,
		Industries:            msg.Industries,
		TokenType:             msg.TokenType,
	}

	id := k.AppendEntity(
		ctx,
		entity,
	)

	return &types.MsgCreateEntityResponse{
		Id: id,
	}, nil
}

func (k msgServer) UpdateEntity(goCtx context.Context, msg *types.MsgUpdateEntity) (*types.MsgUpdateEntityResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var entity = types.Entity{
		Creator:               msg.Creator,
		Id:                    msg.Id,
		Name:                  msg.Name,
		Founders:              msg.Founders,
		EntityGroup:           msg.EntityGroup,
		EntityType:            msg.EntityType,
		Geo:                   msg.Geo,
		Urls:                  msg.Urls,
		InitiateDate:          msg.InitiateDate,
		InitiateDatePrecision: msg.InitiateDatePrecision,
		Jurisdictions:         msg.Jurisdictions,
		Industries:            msg.Industries,
		TokenType:             msg.TokenType,
	}

	// Checks that the element exists
	if !k.HasEntity(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}

	// Checks if the the msg sender is the same as the current owner
	if msg.Creator != k.GetEntityOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.SetEntity(ctx, entity)

	return &types.MsgUpdateEntityResponse{}, nil
}

func (k msgServer) DeleteEntity(goCtx context.Context, msg *types.MsgDeleteEntity) (*types.MsgDeleteEntityResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if !k.HasEntity(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrKeyNotFound, fmt.Sprintf("key %d doesn't exist", msg.Id))
	}
	if msg.Creator != k.GetEntityOwner(ctx, msg.Id) {
		return nil, sdkerrors.Wrap(sdkerrors.ErrUnauthorized, "incorrect owner")
	}

	k.RemoveEntity(ctx, msg.Id)

	return &types.MsgDeleteEntityResponse{}, nil
}
