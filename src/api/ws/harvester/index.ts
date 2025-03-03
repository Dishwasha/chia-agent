import {Plot} from "../../chia/harvester/harvester";
import {TDaemon} from "../../../daemon/index";
import {GetMessageType, TConnectionGeneral, wallet_ui_service, metrics_service} from "../../types";
import {float, int, str} from "../../chia/types/_python_types_";

export const chia_harvester_service = "chia_harvester";
export type chia_harvester_service = typeof chia_harvester_service;

export const get_connections_command = "get_connections";
export type get_connections_command = typeof get_connections_command;
export type TGetConnectionsBroadCast = {
  connections: TConnectionGeneral[];
};
export type WsGetConnectionsHarvesterMessage = GetMessageType<chia_harvester_service, get_connections_command, TGetConnectionsBroadCast>;
export async function on_get_connections(daemon: TDaemon, callback: (e: WsGetConnectionsHarvesterMessage) => unknown){
  await daemon.subscribe(wallet_ui_service);
  const messageListener = (e: WsHarvesterMessage) => {
    if(e.origin === chia_harvester_service && e.command === get_connections_command){
      callback(e);
    }
  };
  return daemon.addMessageListener(chia_harvester_service, messageListener);
}

export const get_plots_command = "get_plots";
export type get_plots_command = typeof get_plots_command;
export type TGetPlotsBroadCast = {
  plots: Plot[];
  failed_to_open_filenames: string[];
  not_found_filenames: string[];
};
export type WsGetPlotsMessage = GetMessageType<chia_harvester_service, get_plots_command, TGetPlotsBroadCast>;
export async function on_get_plots(daemon: TDaemon, callback: (e: WsGetPlotsMessage) => unknown){
  await daemon.subscribe(wallet_ui_service);
  const messageListener = (e: WsHarvesterMessage) => {
    if(e.origin === chia_harvester_service && e.command === get_plots_command){
      callback(e);
    }
  };
  return daemon.addMessageListener(chia_harvester_service, messageListener);
}

export const farming_info_command = "farming_info";
export type farming_info_command = typeof farming_info_command;
export type TFarmingInfoBroadCast = {
  challenge_hash: str;
  total_plots: int;
  found_proofs: int;
  eligible_plots: int;
  time: float;
};
export type WsFarmingInfoMessage = GetMessageType<chia_harvester_service, farming_info_command, TFarmingInfoBroadCast>;
export async function on_farming_info(daemon: TDaemon, callback: (e: GetMessageType<chia_harvester_service, farming_info_command, TFarmingInfoBroadCast>) => unknown){
  await daemon.subscribe(metrics_service);
  const messageListener = (e: WsHarvesterMessage) => {
    if(e.origin === chia_harvester_service && e.command === farming_info_command){
      callback(e);
    }
  };
  return daemon.addMessageListener(chia_harvester_service, messageListener);
}

export type WsHarvesterMessage = WsGetConnectionsHarvesterMessage
  | WsGetPlotsMessage
  | WsFarmingInfoMessage
;
// Whole commands for the service
export type chia_harvester_commands = get_plots_command | farming_info_command | get_connections_command;
export type TChiaHarvesterBroadcast = TGetPlotsBroadCast  | TFarmingInfoBroadCast | TGetConnectionsBroadCast;
export async function on_message_from_harvester(daemon: TDaemon, callback: (e: WsHarvesterMessage) => unknown){
  await daemon.subscribe(wallet_ui_service);
  const messageListener = (e: WsHarvesterMessage) => {
    if(e.origin === chia_harvester_service){
      callback(e);
    }
  };
  return daemon.addMessageListener(chia_harvester_service, messageListener);
}