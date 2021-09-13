package cli

import (
	"strconv"

	"github.com/spf13/cobra"

	"github.com/spf13/cast"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/dreamrs/entity/x/entity/types"
)

func CmdCreateEntity() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-entity [name] [founders] [entityGroup] [entityType] [geo] [urls] [initiateDate] [initiateDatePrecision] [jurisdictions] [industries] [tokenType]",
		Short: "Create a new entity",
		Args:  cobra.ExactArgs(11),
		RunE: func(cmd *cobra.Command, args []string) error {
			argsName, err := cast.ToStringE(args[0])
			if err != nil {
				return err
			}
			argsFounders, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}
			argsEntityGroup, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}
			argsEntityType, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}
			argsGeo, err := cast.ToStringE(args[4])
			if err != nil {
				return err
			}
			argsUrls, err := cast.ToStringE(args[5])
			if err != nil {
				return err
			}
			argsInitiateDate, err := cast.ToStringE(args[6])
			if err != nil {
				return err
			}
			argsInitiateDatePrecision, err := cast.ToStringE(args[7])
			if err != nil {
				return err
			}
			argsJurisdictions, err := cast.ToStringE(args[8])
			if err != nil {
				return err
			}
			argsIndustries, err := cast.ToStringE(args[9])
			if err != nil {
				return err
			}
			argsTokenType, err := cast.ToStringE(args[10])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateEntity(clientCtx.GetFromAddress().String(), argsName, argsFounders, argsEntityGroup, argsEntityType, argsGeo, argsUrls, argsInitiateDate, argsInitiateDatePrecision, argsJurisdictions, argsIndustries, argsTokenType)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdUpdateEntity() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "update-entity [id] [name] [founders] [entityGroup] [entityType] [geo] [urls] [initiateDate] [initiateDatePrecision] [jurisdictions] [industries] [tokenType]",
		Short: "Update a entity",
		Args:  cobra.ExactArgs(12),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			argsName, err := cast.ToStringE(args[1])
			if err != nil {
				return err
			}

			argsFounders, err := cast.ToStringE(args[2])
			if err != nil {
				return err
			}

			argsEntityGroup, err := cast.ToStringE(args[3])
			if err != nil {
				return err
			}

			argsEntityType, err := cast.ToStringE(args[4])
			if err != nil {
				return err
			}

			argsGeo, err := cast.ToStringE(args[5])
			if err != nil {
				return err
			}

			argsUrls, err := cast.ToStringE(args[6])
			if err != nil {
				return err
			}

			argsInitiateDate, err := cast.ToStringE(args[7])
			if err != nil {
				return err
			}

			argsInitiateDatePrecision, err := cast.ToStringE(args[8])
			if err != nil {
				return err
			}

			argsJurisdictions, err := cast.ToStringE(args[9])
			if err != nil {
				return err
			}

			argsIndustries, err := cast.ToStringE(args[10])
			if err != nil {
				return err
			}

			argsTokenType, err := cast.ToStringE(args[11])
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUpdateEntity(clientCtx.GetFromAddress().String(), id, argsName, argsFounders, argsEntityGroup, argsEntityType, argsGeo, argsUrls, argsInitiateDate, argsInitiateDatePrecision, argsJurisdictions, argsIndustries, argsTokenType)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}

func CmdDeleteEntity() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "delete-entity [id]",
		Short: "Delete a entity by id",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) error {
			id, err := strconv.ParseUint(args[0], 10, 64)
			if err != nil {
				return err
			}

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgDeleteEntity(clientCtx.GetFromAddress().String(), id)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
