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
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTransactions = exports.listNFTs = void 0;
const NFTs_1 = require("../services/NFTs");
const listNFTs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const NFTs = yield (0, NFTs_1.getNFTs)();
    res.json({ NFT: NFTs });
});
exports.listNFTs = listNFTs;
const listTransactions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const transactions = yield (0, NFTs_1.getTransactions)();
    res.json({ Transactions: transactions });
});
exports.listTransactions = listTransactions;
