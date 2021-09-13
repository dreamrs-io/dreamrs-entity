package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateEntity{}

func NewMsgCreateEntity(creator string, name string, founders string, entityGroup string, entityType string, geo string, urls string, initiateDate string, initiateDatePrecision string, jurisdictions string, industries string, tokenType string) *MsgCreateEntity {
	return &MsgCreateEntity{
		Creator:               creator,
		Name:                  name,
		Founders:              founders,
		EntityGroup:           entityGroup,
		EntityType:            entityType,
		Geo:                   geo,
		Urls:                  urls,
		InitiateDate:          initiateDate,
		InitiateDatePrecision: initiateDatePrecision,
		Jurisdictions:         jurisdictions,
		Industries:            industries,
		TokenType:             tokenType,
	}
}

func (msg *MsgCreateEntity) Route() string {
	return RouterKey
}

func (msg *MsgCreateEntity) Type() string {
	return "CreateEntity"
}

func (msg *MsgCreateEntity) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateEntity) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateEntity) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgUpdateEntity{}

func NewMsgUpdateEntity(creator string, id uint64, name string, founders string, entityGroup string, entityType string, geo string, urls string, initiateDate string, initiateDatePrecision string, jurisdictions string, industries string, tokenType string) *MsgUpdateEntity {
	return &MsgUpdateEntity{
		Id:                    id,
		Creator:               creator,
		Name:                  name,
		Founders:              founders,
		EntityGroup:           entityGroup,
		EntityType:            entityType,
		Geo:                   geo,
		Urls:                  urls,
		InitiateDate:          initiateDate,
		InitiateDatePrecision: initiateDatePrecision,
		Jurisdictions:         jurisdictions,
		Industries:            industries,
		TokenType:             tokenType,
	}
}

func (msg *MsgUpdateEntity) Route() string {
	return RouterKey
}

func (msg *MsgUpdateEntity) Type() string {
	return "UpdateEntity"
}

func (msg *MsgUpdateEntity) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgUpdateEntity) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgUpdateEntity) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}

var _ sdk.Msg = &MsgDeleteEntity{}

func NewMsgDeleteEntity(creator string, id uint64) *MsgDeleteEntity {
	return &MsgDeleteEntity{
		Id:      id,
		Creator: creator,
	}
}
func (msg *MsgDeleteEntity) Route() string {
	return RouterKey
}

func (msg *MsgDeleteEntity) Type() string {
	return "DeleteEntity"
}

func (msg *MsgDeleteEntity) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgDeleteEntity) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgDeleteEntity) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
