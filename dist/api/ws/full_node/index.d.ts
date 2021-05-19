import { BlockRecord } from "../../chia/consensus/block_record";
import { bool, int, uint128, uint32, uint64 } from "../../chia/types/_python_types_";
import { TDaemon } from "../../../daemon/index";
import { GetMessageType } from "../../types";
export declare const chia_full_node_service = "chia_full_node";
export declare type chia_full_node_service = typeof chia_full_node_service;
export declare const get_blockchain_state_command = "get_blockchain_state";
export declare type get_blockchain_state_command = typeof get_blockchain_state_command;
export declare type TGetBlockchainStateBroadCast = {
    blockchain_state: {
        peak: BlockRecord;
        genesis_challenge_initialized: bool;
        sync: {
            sync_mode: bool;
            synced: bool;
            sync_tip_height: uint32;
            sync_progress_height: uint32;
        };
        difficulty: uint64;
        sub_slot_iters: uint64;
        space: uint128;
        mempool_size: int;
    };
};
export declare function on_get_blockchain_state(daemon: TDaemon, callback: (e: GetMessageType<chia_full_node_service, get_blockchain_state_command, TGetBlockchainStateBroadCast>) => unknown): Promise<() => void>;
export declare type chia_full_node_commands = get_blockchain_state_command;
export declare type TChiaFullNodeBroadcast = TGetBlockchainStateBroadCast;
export declare function on_message_from_full_node(daemon: TDaemon, callback: (e: GetMessageType<chia_full_node_service, chia_full_node_commands, TChiaFullNodeBroadcast>) => unknown): Promise<() => void>;
