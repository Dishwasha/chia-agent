import {GetMessageType} from "../types";

import type {
  chia_farmer_service,
  get_reward_targets_command,
  get_signage_point_command,
  get_signage_points_command,
  set_reward_targets_command,
  TGetRewardTargetResponse,
  TGetSignagePointResponse,
  TGetSignagePointsResponse,
  TSetRewardTargetResponse,
} from "./farmer/index";

export * from "./farmer/index";

import type {
  chia_full_node_service,
  get_additions_and_removals_command,
  get_all_mempool_items_command,
  get_all_mempool_tx_ids_command,
  get_block_command,
  get_block_record_by_height_command,
  get_block_record_command,
  get_block_records_command,
  get_blockchain_state_command,
  get_blocks_command,
  get_coin_record_by_name_command,
  get_coin_records_by_puzzle_hash_command,
  get_coin_records_by_puzzle_hashes_command,
  get_initial_freeze_period_command,
  get_mempool_item_by_tx_id_command,
  get_network_info_command,
  get_network_space_command,
  get_unfinished_block_headers_command,
  push_tx_command,
  TGetAdditionsAndRemovalsResponse,
  TGetAllMempoolItemsResponse,
  TGetAllMempoolTxIdsResponse,
  TGetBlockRecordByHeightResponse,
  TGetBlockRecordResponse,
  TGetBlockRecordsResponse,
  TGetBlockResponse,
  TGetBlockchainStateResponse,
  TGetBlocksResponse,
  TGetCoinRecordByNameResponse,
  TGetCoinRecordsByPuzzleHashResponse,
  TGetCoinRecordsByPuzzleHashesResponse,
  TGetInitialFreezePeriodResponse,
  TGetMempoolItemByTxIdResponse,
  TGetNetworkInfoResponse,
  TGetNetworkSpaceResponse,
  TGetUnfinishedBlockHeadersResponse,
  TPushTxResponse,
} from "./full_node/index";

export * from "./full_node/index";

import type {
  chia_harvester_service,
  add_plot_directory_command,
  delete_plot_command,
  get_plot_directories_command,
  get_plots_command,
  refresh_plots_command,
  remove_plot_directory_command,
  TAddPlotDirectoryResponse,
  TDeletePlotResponse,
  TGetPlotDirectoriesResponse,
  TGetPlotsResponse,
  TRefreshPlotsResponse,
  TRemovePlotDirectoryResponse,
} from "./harvester/index";

export * from "./harvester/index";

import type {
  chia_wallet_service,
  add_key_command,
  add_rate_limited_funds_command,
  cancel_trade_command,
  cc_get_colour_command,
  cc_get_name_command,
  cc_set_name_command,
  cc_spend_command,
  create_backup_command,
  create_new_wallet_command,
  create_offer_for_ids_command,
  create_signed_transaction_command,
  delete_all_keys_command,
  delete_key_command,
  did_create_attest_command,
  did_create_backup_file_command,
  did_get_did_command,
  did_get_information_needed_for_recovery_command,
  did_get_pubkey_command,
  did_get_recovery_list_command,
  did_recovery_spend_command,
  did_spend_command,
  did_update_recovery_ids_command,
  farm_block_command,
  generate_mnemonic_command,
  get_all_trades_command,
  get_discrepancies_for_offer_command,
  get_farmed_amount_command,
  get_height_info_command,
  get_initial_freeze_period_command as get_initial_freeze_period_command_of_wallet,
  get_network_info_command as get_network_info_command_of_wallet,
  get_next_address_command,
  get_private_key_command,
  get_public_keys_command,
  get_sync_status_command,
  get_trade_command,
  get_transaction_command,
  get_transaction_count_command,
  get_transactions_command,
  get_wallet_balance_command,
  get_wallets_command,
  log_in_command,
  respond_to_offer_command,
  rl_set_user_info_command,
  send_clawback_transaction_command,
  send_transaction_command,
  TAddKeyResponse,
  TAddRateLimitedFundsResponse,
  TCancelTradeResponse,
  TCcGetColourResponse,
  TCcGetNameResponse,
  TCcSetNameResponse,
  TCcSpendResponse,
  TCreateBackupResponse,
  TCreateNewWalletResponse,
  TCreateOfferForIdsResponse,
  TCreateSignedTransactionResponse,
  TDeleteAllKeysResponse,
  TDeleteKeyResponse,
  TDidCreateAttestResponse,
  TDidCreateBackupFileResponse,
  TDidGetDidResponse,
  TDidGetInformationNeededForRecoveryResponse,
  TDidGetPubkeyResponse,
  TDidGetRecoveryListResponse,
  TDidRecoverySpendResponse,
  TDidSpendResponse,
  TDidUpdateRecoveryIdsResponse,
  TFarmBlockResponse,
  TGenerateMnemonicResponse,
  TGetAllTradesResponse,
  TGetDiscrepanciesForOfferResponse,
  TGetFarmedAmountResponse,
  TGetHeightInfoResponse,
  TGetInitialFreezePeriodResponse as TGetInitialFreezePeriodResponse_of_wallet,
  TGetNetworkInfoResponse as TGetNetworkInfoResponse_of_wallet,
  TGetNextAddressResponse,
  TGetPrivateKeyResponse,
  TGetPublicKeysResponse,
  TGetSyncStatusResponse,
  TGetTradeResponse,
  TGetTransactionCountResponse,
  TGetTransactionResponse,
  TGetTransactionsResponse,
  TGetWalletBalanceResponse,
  TGetWalletsResponse,
  TLoginResponse,
  TResponseToOfferResponse,
  TRlSetUserInfoResponse,
  TSendClawbackTransactionResponse,
  TSendTransactionResponse,
} from "./wallet/index";

export {
  add_key_command,
  add_rate_limited_funds_command,
  cancel_trade_command,
  cc_get_colour_command,
  cc_get_name_command,
  cc_set_name_command,
  cc_spend_command,
  create_backup_command,
  create_new_wallet_command,
  create_offer_for_ids_command,
  create_signed_transaction_command,
  delete_all_keys_command,
  delete_key_command,
  did_create_attest_command,
  did_create_backup_file_command,
  did_get_did_command,
  did_get_information_needed_for_recovery_command,
  did_get_pubkey_command,
  did_get_recovery_list_command,
  did_recovery_spend_command,
  did_spend_command,
  did_update_recovery_ids_command,
  farm_block_command,
  generate_mnemonic_command,
  get_all_trades_command,
  get_discrepancies_for_offer_command,
  get_farmed_amount_command,
  get_height_info_command,
  get_initial_freeze_period_command as get_initial_freeze_period_command_of_wallet,
  get_network_info_command as get_network_info_command_of_wallet,
  get_next_address_command,
  get_private_key_command,
  get_public_keys_command,
  get_sync_status_command,
  get_trade_command,
  get_transaction_command,
  get_transaction_count_command,
  get_transactions_command,
  get_wallet_balance_command,
  get_wallets_command,
  log_in_command,
  respond_to_offer_command,
  rl_set_user_info_command,
  send_clawback_transaction_command,
  send_transaction_command,
  TAddKeyRequest,
  TAddKeyResponse,
  TAddRateLimitedFundsRequest,
  TAddRateLimitedFundsResponse,
  TAdditions,
  TCancelTradeRequest,
  TCancelTradeResponse,
  TCcGetColourRequest,
  TCcGetColourResponse,
  TCcGetNameRequest,
  TCcGetNameResponse,
  TCcSetNameRequest,
  TCcSetNameResponse,
  TCcSpendRequest,
  TCcSpendResponse,
  TCreateBackupRequest,
  TCreateBackupResponse,
  TCreate_New_CC_WalletRequest,
  TCreate_New_CC_WalletResponse,
  TCreate_New_DID_WalletRequest,
  TCreate_New_DID_WalletResponse,
  TCreate_New_RC_WalletRequest,
  TCreate_New_RC_WalletResponse,
  TCreateNewWalletRequest,
  TCreateNewWalletResponse,
  TCreateOfferForIdsRequest,
  TCreateOfferForIdsResponse,
  TCreateSignedTransactionRequest,
  TCreateSignedTransactionResponse,
  TDeleteAllKeysRequest,
  TDeleteAllKeysResponse,
  TDeleteKeyRequest,
  TDeleteKeyResponse,
  TDidCreateAttestRequest,
  TDidCreateAttestResponse,
  TDidCreateBackupFileRequest,
  TDidCreateBackupFileResponse,
  TDidGetDidRequest,
  TDidGetDidResponse,
  TDidGetInformationNeededForRecoveryRequest,
  TDidGetInformationNeededForRecoveryResponse,
  TDidGetPubkeyRequest,
  TDidGetPubkeyResponse,
  TDidGetRecoveryListRequest,
  TDidGetRecoveryListResponse,
  TDidRecoverySpendRequest,
  TDidRecoverySpendResponse,
  TDidSpendRequest,
  TDidSpendResponse,
  TDidUpdateRecoveryIdsRequest,
  TDidUpdateRecoveryIdsResponse,
  TFarmBlockRequest,
  TFarmBlockResponse,
  TGenerateMnemonicRequest,
  TGenerateMnemonicResponse,
  TGetAllTradesRequest,
  TGetAllTradesResponse,
  TGetDiscrepanciesForOfferRequest,
  TGetDiscrepanciesForOfferResponse,
  TGetFarmedAmountRequest,
  TGetFarmedAmountResponse,
  TGetHeightInfoRequest,
  TGetHeightInfoResponse,
  TGetInitialFreezePeriodRequest as TGetInitialFreezePeriodRequest_of_wallet,
  TGetInitialFreezePeriodResponse as TGetInitialFreezePeriodResponse_of_wallet,
  TGetNetworkInfoRequest as TGetNetworkInfoRequest_of_wallet,
  TGetNetworkInfoResponse as TGetNetworkInfoResponse_of_wallet,
  TGetNextAddressRequest,
  TGetNextAddressResponse,
  TGetPrivateKeyRequest,
  TGetPrivateKeyResponse,
  TGetPublicKeysRequest,
  TGetPublicKeysResponse,
  TGetSyncStatusRequest,
  TGetSyncStatusResponse,
  TGetTradeRequest,
  TGetTradeResponse,
  TGetTransactionCountRequest,
  TGetTransactionCountResponse,
  TGetTransactionRequest,
  TGetTransactionResponse,
  TGetTransactionsRequest,
  TGetTransactionsResponse,
  TGetWalletBalanceRequest,
  TGetWalletBalanceResponse,
  TGetWalletsRequest,
  TGetWalletsResponse,
  TLoginRequest,
  TLoginResponse,
  TResponseToOfferRequest,
  TResponseToOfferResponse,
  TRlSetUserInfoRequest,
  TRlSetUserInfoResponse,
  TSendClawbackTransactionRequest,
  TSendClawbackTransactionResponse,
  TSendTransactionRequest,
  TSendTransactionResponse,
  TradeRecordInJson,
  chia_wallet_service,
  get_initial_freeze_period,
  get_network_info,
  add_key,
  add_rate_limited_funds,
  cancel_trade,
  cc_get_colour,
  cc_get_name,
  cc_set_name,
  cc_spend,
  create_backup,
  create_new_wallet,
  create_offer_for_ids,
  create_signed_transaction,
  delete_all_keys,
  delete_key,
  did_create_attest,
  did_create_backup_file,
  did_get_did,
  did_get_information_needed_for_recovery,
  did_get_pubkey,
  did_get_recovery_list,
  did_recovery_spend,
  did_spend,
  did_update_recovery_ids,
  farm_block,
  generate_mnemonic,
  get_all_trades,
  get_discrepancies_for_offer,
  get_farmed_amount,
  get_height_info,
  get_next_address,
  get_private_key,
  get_public_keys,
  get_sync_status,
  get_trade,
  get_transaction,
  get_transaction_count,
  get_transactions,
  get_wallet_balance,
  get_wallets,
  log_in,
  respond_to_offer,
  rl_set_user_info,
  send_clawback_transaction,
  send_transaction,
} from "./wallet/index";

export type RpcFarmerMessage =
  TGetRewardTargetResponse
  | TGetSignagePointResponse
  | TGetSignagePointsResponse
  | TSetRewardTargetResponse
;

export type RpcFullNodeMessage =
  TGetAdditionsAndRemovalsResponse
  | TGetAllMempoolItemsResponse
  | TGetAllMempoolTxIdsResponse
  | TGetBlockResponse
  | TGetBlockRecordByHeightResponse
  | TGetBlockRecordResponse
  | TGetBlockRecordsResponse
  | TGetBlockchainStateResponse
  | TGetBlocksResponse
  | TGetCoinRecordByNameResponse
  | TGetCoinRecordsByPuzzleHashResponse
  | TGetCoinRecordsByPuzzleHashesResponse
  | TGetInitialFreezePeriodResponse
  | TGetMempoolItemByTxIdResponse
  | TGetNetworkInfoResponse
  | TGetNetworkSpaceResponse
  | TGetUnfinishedBlockHeadersResponse
  | TPushTxResponse
;

export type RpcHarvesterMessage =
  TAddPlotDirectoryResponse
  | TDeletePlotResponse
  | TGetPlotDirectoriesResponse
  | TGetPlotsResponse
  | TRefreshPlotsResponse
  | TRemovePlotDirectoryResponse
;

export type RpcWalletMessage =
  TAddKeyResponse
  | TAddRateLimitedFundsResponse
  | TCancelTradeResponse
  | TCcGetColourResponse
  | TCcGetNameResponse
  | TCcSetNameResponse
  | TCcSpendResponse
  | TCreateBackupResponse
  | TCreateNewWalletResponse
  | TCreateOfferForIdsResponse
  | TCreateSignedTransactionResponse
  | TDeleteAllKeysResponse
  | TDeleteKeyResponse
  | TDidCreateAttestResponse
  | TDidCreateBackupFileResponse
  | TDidGetDidResponse
  | TDidGetInformationNeededForRecoveryResponse
  | TDidGetPubkeyResponse
  | TDidGetRecoveryListResponse
  | TDidRecoverySpendResponse
  | TDidSpendResponse
  | TDidUpdateRecoveryIdsResponse
  | TFarmBlockResponse
  | TGenerateMnemonicResponse
  | TGetAllTradesResponse
  | TGetDiscrepanciesForOfferResponse
  | TGetFarmedAmountResponse
  | TGetHeightInfoResponse
  | TGetInitialFreezePeriodResponse_of_wallet
  | TGetNetworkInfoResponse_of_wallet
  | TGetNextAddressResponse
  | TGetPrivateKeyResponse
  | TGetPublicKeysResponse
  | TGetSyncStatusResponse
  | TGetTradeResponse
  | TGetTransactionResponse
  | TGetTransactionCountResponse
  | TGetTransactionsResponse
  | TGetWalletBalanceResponse
  | TGetWalletsResponse
  | TLoginResponse
  | TResponseToOfferResponse
  | TRlSetUserInfoResponse
  | TSendClawbackTransactionResponse
  | TSendTransactionResponse
;

export type RpcMessage = RpcFarmerMessage | RpcFullNodeMessage | RpcHarvesterMessage | RpcWalletMessage;
