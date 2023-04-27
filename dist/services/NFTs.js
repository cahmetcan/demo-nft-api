"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactions = exports.getNFTs = void 0;
const supabaseClient_1 = __importDefault(require("../utils/supabaseClient"));
const getNFTs = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield supabaseClient_1.default.from("NFT").select("*");
    if (data.error) {
        return { error: { message: data.error.message } };
    }
    return { data };
});
exports.getNFTs = getNFTs;
const getTransactions = () => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield supabaseClient_1.default.from("Transaction").select("*");
    if (error) {
        return { error: { message: error.message } };
    }
    return { data };
});
exports.getTransactions = getTransactions;
