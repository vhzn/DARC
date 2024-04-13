// all the included instructions are here, mostly instructions for operations
import { OperationStruct, PluginStruct, PluginStructWithNode, VotingRuleStruct } from "../types/basicTypes";
import { BigNumber } from "ethers";
import { objectMethod } from "@babel/types";

import {
  OPCODE_ID_1_BATCH_MINT_TOKENS,
  OPCODE_ID_2_BATCH_CREATE_TOKEN_CLASSES,
  OPCODE_ID_3_BATCH_TRANSFER_TOKENS,
  OPCODE_ID_4_BATCH_TRANSFER_TOKENS_FROM_TO,
  OPCODE_ID_5_BATCH_BURN_TOKENS,
  OPCODE_ID_6_BATCH_BURN_TOKENS_FROM,
  OPCODE_ID_7_BATCH_ADD_MEMBERSHIPS,
  OPCODE_ID_8_BATCH_SUSPEND_MEMBERSHIPS,
  OPCODE_ID_9_BATCH_RESUME_MEMBERSHIPS,
  OPCODE_ID_10_BATCH_CHANGE_MEMBER_ROLES,
  OPCODE_ID_11_BATCH_CHANGE_MEMBER_NAMES,
  OPCODE_ID_12_BATCH_ADD_PLUGINS,
  OPCODE_ID_13_BATCH_ENABLE_PLUGINS,
  OPCODE_ID_14_BATCH_DISABLE_PLUGINS,
  OPCODE_ID_15_BATCH_ADD_AND_ENABLE_PLUGINS,
  OPCODE_ID_16_BATCH_SET_PARAMETERS,
  OPCODE_ID_17_BATCH_ADD_WITHDRAWABLE_BALANCES,
  OPCODE_ID_18_BATCH_REDUCE_WITHDRAWABLE_BALANCES,
  OPCODE_ID_19_BATCH_ADD_VOTING_RULES,
  OPCODE_ID_20_BATCH_PAY_TO_MINT_TOKENS,
  OPCODE_ID_21_BATCH_PAY_TO_TRANSFER_TOKENS,
  OPCODE_ID_22_ADD_EMERGENCY,
  OPCODE_ID_24_CALL_EMERGENCY,
  OPCODE_ID_25_CALL_CONTRACT_ABI,
  OPCODE_ID_26_PAY_CASH,
  OPCODE_ID_27_OFFER_DIVIDENDS,
  OPCODE_ID_29_SET_APPROVAL_FOR_ALL_OPERATIONS,
  OPCODE_ID_30_BATCH_BURN_TOKENS_AND_REFUND,
  OPCODE_ID_31_ADD_STORAGE_STRING,
  OPCODE_ID_32_VOTE,
  OPCODE_ID_33_EXECUTE_PENDING_PROGRAM,
  OPCODE_ID_34_END_EMERGENCY,
  OPCODE_ID_35_UPGRADE_TO_ADDRESS,
  OPCODE_ID_36_CONFIRM_UPGRAED_FROM_ADDRESS,
  OPCODE_ID_37_UPGRADE_TO_THE_LATEST
} from "./opcodes/opcodeTable";

/**
 * Below are return types
 */
export let UNDEFINED = 0;
export let SANDBOX_NEEDED = 1;
export let NO = 2;
export let VOTING_NEEDED = 3;
export let YES_AND_SKIP_SANDBOX = 4;
export let YES = 5;

export enum EnumReturnType {
  UNDEFINED = 0,
  SANDBOX_NEEDED = 1,
  NO = 2,
  VOTING_NEEDED = 3,
  YES_AND_SKIP_SANDBOX = 4,
  YES = 5
}


/**
 * The list of operations to be executed
 * When an operation function is called, it will add an operation to this list
 */
export let operationList: OperationStruct[] = [];

/**
 * The notes for the program
 */
export let programNotes: string = "";

export { BigNumber };

/**
 * The basic node for the program
 */
export { Node, expression, TRUE, FALSE, AND, OR, and, or, not, NOT, boolean_true, boolean_false } from "./Node";

/**
 * The setter for the program notes
 * @param note The notes for the program
 */
export function setNote(note:string) {
  programNotes = note;
}

export function batch_mint_tokens(addressArray: string[], tokenClassArray: bigint[] | number[], amountArray: bigint[] | number[]) {
  let operation = OPCODE_ID_1_BATCH_MINT_TOKENS(addressArray, tokenClassArray, amountArray);
  operationList.push(operation);
}

export function batch_create_token_classes(nameArray: string[], tokenIndexArray: bigint[] | number[], votingWeightArray: bigint[] | number[], dividendWeightArray: bigint[] | number[]) {
  let operation = OPCODE_ID_2_BATCH_CREATE_TOKEN_CLASSES(nameArray, tokenIndexArray, votingWeightArray, dividendWeightArray);
  operationList.push(operation);
}
 
export function batch_transfer_tokens(addressArray: string[], tokenClassArray: bigint[] | number[], amountArray: bigint[] | number[]) {
  let operation = OPCODE_ID_3_BATCH_TRANSFER_TOKENS(addressArray, tokenClassArray, amountArray);
  operationList.push(operation);
}

export function batch_transfer_tokens_from_to(fromAddressArray: string[], toAddressArray: string[], tokenClassArray: bigint[] | number[], amountArray: bigint[] | number[]) {
  let operation = OPCODE_ID_4_BATCH_TRANSFER_TOKENS_FROM_TO(fromAddressArray, toAddressArray, tokenClassArray, amountArray);
  operationList.push(operation);
}

export function batch_burn_tokens(tokenClassArray: bigint[] | number[], amountArray: bigint[] | number[]) {
  let operation = OPCODE_ID_5_BATCH_BURN_TOKENS(tokenClassArray, amountArray);
  operationList.push(operation);
}

export function batch_burn_tokens_from(addressArray: string[], tokenClassArray: bigint[] | number[], amountArray: bigint[] | number[]) {
  let operation = OPCODE_ID_6_BATCH_BURN_TOKENS_FROM(addressArray, tokenClassArray, amountArray);
  operationList.push(operation);
}

export function batch_add_memberships(addressArray: string[], roleArray: bigint[] | number[], nameArray: string[]) {
  let operation = OPCODE_ID_7_BATCH_ADD_MEMBERSHIPS(addressArray, roleArray, nameArray);
  operationList.push(operation);
}

export function batch_suspend_memberships(addressArray: string[]) {
  let operation = OPCODE_ID_8_BATCH_SUSPEND_MEMBERSHIPS(addressArray);
  operationList.push(operation);
}

export function batch_resume_memberships(addressArray: string[]) {
  let operation = OPCODE_ID_9_BATCH_RESUME_MEMBERSHIPS(addressArray);
  operationList.push(operation);
}

export function batch_change_member_roles(addressArray: string[], roleArray: bigint[] | number[]) {
  let operation = OPCODE_ID_10_BATCH_CHANGE_MEMBER_ROLES(addressArray, roleArray);
  operationList.push(operation);
}

export function batch_change_member_names(addressArray: string[], nameArray: string[]) {
  let operation = OPCODE_ID_11_BATCH_CHANGE_MEMBER_NAMES(addressArray, nameArray);
  operationList.push(operation);
}

export function batch_add_plugins(pluginArray: PluginStruct[] | PluginStructWithNode[]) {
  let operation = OPCODE_ID_12_BATCH_ADD_PLUGINS(pluginArray);
  operationList.push(operation);
}

export function batch_enable_plugins(pluginIndexArray: bigint[] | number[], isBeforeOperationArray: boolean[]) {
  let operation = OPCODE_ID_13_BATCH_ENABLE_PLUGINS(pluginIndexArray, isBeforeOperationArray);
  operationList.push(operation);
}

export function batch_disable_plugins(pluginIndexArray: bigint[] | number[], isBeforeOperationArray: boolean[]) {
  let operation = OPCODE_ID_14_BATCH_DISABLE_PLUGINS(pluginIndexArray, isBeforeOperationArray);
  operationList.push(operation);
}

export function batch_add_and_enable_plugins(pluginArray: PluginStruct[] | PluginStructWithNode[]) {
  let operation = OPCODE_ID_15_BATCH_ADD_AND_ENABLE_PLUGINS(pluginArray);
  operationList.push(operation);
}

export function batch_set_parameters(parameterIndexArray: bigint[] | number[], parameterValueArray: bigint[] | number[]) {
  let operation = OPCODE_ID_16_BATCH_SET_PARAMETERS(parameterIndexArray, parameterValueArray);
  operationList.push(operation);
}

export function batch_add_withdrawable_balances(addressArray: string[], amountArray: bigint[] | number[]) {
  let operation = OPCODE_ID_17_BATCH_ADD_WITHDRAWABLE_BALANCES(addressArray, amountArray);
  operationList.push(operation);
}

export function batch_reduce_withdrawable_balances(addressArray: string[], amountArray: bigint[] | number[]) {
  let operation = OPCODE_ID_18_BATCH_REDUCE_WITHDRAWABLE_BALANCES(addressArray, amountArray);
  operationList.push(operation);
}

export function batch_add_voting_rules(ruleArray: VotingRuleStruct[]) {
  let operation = OPCODE_ID_19_BATCH_ADD_VOTING_RULES(ruleArray);
  operationList.push(operation);
}

export function batch_pay_to_mint_tokens(addressArray: string[], tokenClassArray: bigint[] | number[], amountArray: bigint[] | number[], priceArray: bigint[] | number[], dividendable: bigint) {
  let operation = OPCODE_ID_20_BATCH_PAY_TO_MINT_TOKENS(addressArray, tokenClassArray, amountArray, priceArray, dividendable);
  operationList.push(operation);
}

export function batch_pay_to_transfer_tokens( toAddressArray: string[], tokenClassArray: bigint[] | number[], amountArray: bigint[] | number[], priceArray: bigint[] | number[], dividendable: bigint) {
  let operation = OPCODE_ID_21_BATCH_PAY_TO_TRANSFER_TOKENS(toAddressArray, tokenClassArray, amountArray, priceArray, dividendable);
  operationList.push(operation);
}

export function add_emergency(emergencyAddressArray: string[]) {
  let operation = OPCODE_ID_22_ADD_EMERGENCY(emergencyAddressArray);
  operationList.push(operation);
}

export function call_emergency(emergencyAddressArrayIndex: bigint[] | number[]) {
  let operation = OPCODE_ID_24_CALL_EMERGENCY(emergencyAddressArrayIndex);
  operationList.push(operation);
}

export function call_contract_abi(contractAddress: string, abi: string | Uint8Array, value: bigint) {
  let operation = OPCODE_ID_25_CALL_CONTRACT_ABI(contractAddress, abi, value);
  operationList.push(operation);
}

export function pay_cash(amount: bigint, paymentType: bigint, dividendable: bigint) {
  let operation = OPCODE_ID_26_PAY_CASH(amount, paymentType, dividendable);
  operationList.push(operation);
}

export function offer_dividends() {
  let operation = OPCODE_ID_27_OFFER_DIVIDENDS();
  operationList.push(operation);
}

export function set_approval_for_all_operations(address: string) {
  let operation = OPCODE_ID_29_SET_APPROVAL_FOR_ALL_OPERATIONS(address);
  operationList.push(operation);
}

export function batch_burn_tokens_and_refund(tokenClassArray: bigint[] | number[], amountArray: bigint[] | number[], priceArray: bigint[] | number[]) {
  let operation = OPCODE_ID_30_BATCH_BURN_TOKENS_AND_REFUND(tokenClassArray, amountArray, priceArray);
  operationList.push(operation);
}

export function add_storage_string(value: string) {
  let operation = OPCODE_ID_31_ADD_STORAGE_STRING(value);
  operationList.push(operation);
}

export function vote(voteArray: boolean[]) {
  let operation = OPCODE_ID_32_VOTE(voteArray);
  operationList.push(operation);
}

export function execute_pending_program() {
  let operation = OPCODE_ID_33_EXECUTE_PENDING_PROGRAM();
  operationList.push(operation);
}

export function end_emergency() {
  let operation = OPCODE_ID_34_END_EMERGENCY();
  operationList.push(operation);
}

export function upgrade_to_address(newAddress: string) {
  let operation = OPCODE_ID_35_UPGRADE_TO_ADDRESS(newAddress);
  operationList.push(operation);
}

export function confirm_upgrade_from_address(newAddress: string) {
  let operation = OPCODE_ID_36_CONFIRM_UPGRAED_FROM_ADDRESS(newAddress);
  operationList.push(operation);
}

export function upgrade_to_the_latest() {
  let operation = OPCODE_ID_37_UPGRADE_TO_THE_LATEST();
  operationList.push(operation);
}

// below are the condition nodes

export {
  batch_op_size_greater_than,
  batch_op_size_less_than,
  batch_op_size_in_range,
  batch_op_size_equals,
  batch_op_each_target_addresses_equals,
  batch_op_each_target_addresses_in_list,
  batch_op_each_target_addresses_in_member_role,
  batch_op_any_target_address_equals,
  batch_op_any_target_address_in_list,
  batch_op_any_target_address_in_member_role,
  batch_op_each_target_address_to_itself,
  batch_op_any_target_address_to_itself,
  batch_op_each_source_address_equals,
  batch_op_each_source_address_in_list,
  batch_op_each_source_address_in_member_role,
  batch_op_any_source_address_equal,
  batch_op_any_source_address_in_list,
  batch_op_any_source_address_in_member_role,
  batch_op_each_source_address_from_itself,
  batch_op_any_source_address_from_itself,
  batch_op_each_token_class_equals,
  batch_op_each_token_class_in_list,
  batch_op_each_token_class_in_range,
  batch_op_each_token_class_greater_than,
  batch_op_each_token_class_less_than,
  batch_op_total_token_amount_greater_than,
  batch_op_total_token_amount_less_than,
  batch_op_total_token_amount_in_range,
  batch_op_total_token_amount_equals,
  batch_op_any_token_amount_greater_than,
  batch_op_any_token_amount_less_than,
  batch_op_any_token_amount_in_range,
  batch_op_any_token_amount_equals,
  batch_op_any_token_class_greater_than,
  batch_op_any_token_class_less_than,
  batch_op_any_token_class_in_range,
  batch_op_any_token_class_equals,
  batch_op_any_token_class_in_list,
  batch_op_each_source_address_in_member_role_list,
  batch_op_any_source_address_in_member_role_list,
  batch_op_each_target_address_in_member_role_list,
  batch_op_any_target_address_in_member_role_list,
  batch_op_each_target_address_withdrawable_cash_greater_than,
  batch_op_each_target_address_withdrawable_cash_less_than,
  batch_op_each_target_address_withdrawable_cash_in_range,
  batch_op_each_target_address_withdrawable_cash_equals,
  batch_op_any_target_address_withdrawable_cash_greater_than,
  batch_op_any_target_address_withdrawable_cash_less_than,
  batch_op_any_target_address_withdrawable_cash_in_range,
  batch_op_each_target_address_total_voting_weight_greater_than,
  batch_op_each_target_address_total_voting_weight_less_than,
  batch_op_each_target_address_total_voting_weight_in_range,
  batch_op_each_target_address_total_voting_weight_equals,
  batch_op_any_target_address_total_voting_weight_greater_than,
  batch_op_any_target_address_total_voting_weight_less_than,
  batch_op_any_target_address_total_voting_weight_in_range,
  batch_op_each_target_address_total_dividend_weight_greater_than,
  batch_op_each_target_address_total_dividend_weight_less_than,
  batch_op_each_target_address_total_dividend_weight_in_range,
  batch_op_any_target_address_total_dividend_weight_greater_than,
  batch_op_any_target_address_total_dividend_weight_less_than,
  batch_op_any_target_address_total_dividend_weight_in_range,
  batch_op_each_target_address_owns_token_x_greater_than,
  batch_op_each_target_address_owns_token_x_less_than,
  batch_op_each_target_address_owns_token_x_in_range,
  batch_op_any_target_address_owns_token_x_greater_than,
  batch_op_any_target_address_owns_token_x_less_than,
  batch_op_any_target_address_owns_token_x_in_range
} from "./conditionNodes/Condition_BatchOp";

export {
  create_token_classes_any_token_dividend_weight_greater_than,
  create_token_classes_any_token_dividend_weight_less_than,
  create_token_classes_any_token_dividend_weight_in_range,
  create_token_classes_any_token_dividend_weight_equals,
  create_token_classes_any_voting_weight_greater_than,
  create_token_classes_any_voting_weight_less_than,
  create_token_classes_any_voting_weight_in_range,
  create_token_classes_any_voting_weight_equals
} from "./conditionNodes/Condition_CreateTokenClass";

export {
  timestamp_greater_than,
  timestamp_less_than,
  timestamp_in_range,
  date_year_greater_than,
  date_year_less_than,
  date_year_in_range,
  date_month_greater_than,
  date_month_less_than,
  date_month_in_range,
  date_day_greater_than,
  date_day_less_than,
  date_day_in_range,
  date_hour_greater_than,
  date_hour_less_than,
  date_hour_in_range,
  address_voting_weight_greater_than,
  address_voting_weight_less_than,
  address_voting_weight_in_range,
  address_dividend_weight_greater_than,
  address_dividend_weight_less_than,
  address_dividend_weight_in_range,
  address_token_x_greater_than,
  address_token_x_less_than,
  address_token_x_in_range,
  total_voting_weight_greater_than,
  total_voting_weight_less_than,
  total_voting_weight_in_range,
  total_dividend_weight_greater_than,
  total_dividend_weight_less_than,
  total_dividend_weight_in_range,
  total_cash_greater_than,
  total_cash_less_than,
  total_cash_in_range,
  total_cash_equals,
  token_in_list_voting_weight_greater_than,
  token_in_list_voting_weight_less_than,
  token_in_list_voting_weight_in_range,
  token_in_list_dividend_weight_greater_than,
  token_in_list_dividend_weight_less_than,
  token_in_list_dividend_weight_in_range,
  token_in_list_amount_greater_than,
  token_in_list_amount_less_than,
  token_in_list_amount_in_range,
  token_in_list_amount_equals,
  address_voting_weight_percenrage_greater_than,
  address_voting_weight_percenrage_less_than,
  address_voting_weight_percenrage_in_range,
  address_dividend_weight_percenrage_greater_than,
  address_dividend_weight_percenrage_less_than,
  address_dividend_weight_percenrage_in_range
} from "./conditionNodes/Condition_MachineState";

export { change_member_role_to_any_role_equals, change_member_role_to_any_role_in_list, change_member_role_to_any_role_in_range, change_member_name_to_any_string_in_list, change_member_name_to_any_string_contains } from "./conditionNodes/Condition_MembershipOp";

export { operation_equals, operation_in_list, EnumOpcode } from "./conditionNodes/Condition_Operation";

export {
  operation_by_operator_since_last_time_greater_than,
  operation_by_operator_since_last_time_less_than,
  operation_by_operator_since_last_time_in_range,
  operation_global_since_last_time_greater_than,
  operation_global_since_last_time_less_than,
  operation_global_since_last_time_in_range,
  operation_by_any_address_in_list_since_last_time_greater_than,
  operation_by_any_address_in_list_since_last_time_less_than,
  operation_by_any_address_in_list_since_last_time_in_range,
  operation_by_each_address_in_list_since_last_time_greater_than,
  operation_by_each_address_in_list_since_last_time_less_than,
  operation_by_each_address_in_list_since_last_time_in_range
} from "./conditionNodes/Condition_OperationLog";

export {
  operator_name_equals,
  operator_role_equals,
  operator_address_equals,
  operator_role_greater_than,
  operator_role_less_than,
  operator_role_in_range,
  operator_role_in_list,
  operator_token_x_amount_greater_than,
  operator_token_x_amount_less_than,
  operator_token_x_amount_in_range,
  operator_token_x_amount_equals,
  operator_token_x_percentage_greater_than,
  operator_token_x_percentage_less_than,
  operator_token_x_percentage_in_range,
  operator_token_x_percentage_equals,
  operator_voting_weight_greater_than,
  operator_voting_weight_less_than,
  operator_voting_weight_in_range,
  operator_dividend_weight_greater_than,
  operator_dividend_weight_less_than,
  operator_dividend_weight_in_range,
  operator_withdrawable_cash_greater_than,
  operator_withdrawable_cash_less_than,
  operator_withdrawable_cash_in_range,
  operator_withdrawable_dividends_greater_than,
  operator_withdrawable_dividends_less_than,
  operator_withdrawable_dividends_in_range,
  operator_address_in_list
} from "./conditionNodes/Condition_Operator";

export {
  enable_any_before_op_plugin_index_in_list,
  enable_any_after_op_plugin_index_in_list,
  enable_each_before_op_plugin_index_in_list,
  enable_each_after_op_plugin_index_in_list,
  disable_any_before_op_plugin_index_in_list,
  disable_any_after_op_plugin_index_in_list,
  disable_each_before_op_plugin_index_in_list,
  disable_each_after_op_plugin_index_in_list,
  enable_any_before_op_plugin_index_in_range,
  enable_any_after_op_plugin_index_in_range,
  enable_each_before_op_plugin_index_in_range,
  enable_each_after_op_plugin_index_in_range,
  disable_any_before_op_plugin_index_in_range,
  disable_any_after_op_plugin_index_in_range,
  disable_each_before_op_plugin_index_in_range,
  disable_each_after_op_plugin_index_in_range,
  are_all_plugins_before_operation,
  are_all_plugins_after_operation,
  is_any_plugin_before_operation,
  is_any_plugin_after_operation,
  add_plugin_any_level_equals,
  add_plugin_any_level_in_list,
  add_plugin_any_level_in_range,
  add_plugin_any_level_greater_than,
  add_plugin_any_level_less_than,
  add_plugin_any_return_type_equals,
  add_plugin_any_voting_rule_index_in_list,
  add_any_voting_rule_is_absolute_majority,
  add_any_voting_rule_approval_percentage_in_range,
  add_any_voting_rule_token_class_contains
} from "./conditionNodes/Condition_PluginAndVoting";

export { program_op_length_greater_than, program_op_length_less_than, program_op_length_in_range, program_op_length_equals, program_contains_op, program_contains_op_in_list, program_every_op_equals, program_every_op_in_list } from "./conditionNodes/Condition_Program";

export { token_x_op_any_price_greater_than, token_x_op_any_price_less_than, token_x_op_any_price_in_range, token_x_op_any_price_equals } from "./conditionNodes/Condition_TokenAndCash";

export {
  add_withdrawable_balance_any_amount_greater_than,
  add_withdrawable_balance_any_amount_less_than,
  add_withdrawable_balance_any_amount_in_range,
  add_withdrawable_balance_any_amount_equals,
  reduce_withdrawable_balance_any_amount_greater_than,
  reduce_withdrawable_balance_any_amount_less_than,
  reduce_withdrawable_balance_any_amount_in_range,
  reduce_withdrawable_balance_any_amount_equals
} from "./conditionNodes/Condition_Withdrawable";