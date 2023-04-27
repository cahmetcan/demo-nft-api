import { Request, Response } from "express";
import { getNFTs, getTransactions } from "../services/NFTs";

const listNFTs = async (req: Request, res: Response): Promise<any> => {
    const NFTs = await getNFTs();
    res.json({ NFT: NFTs });
};

const listTransactions = async (req: Request, res: Response): Promise<any> => {
    const transactions: string = await getTransactions();
    res.json({ Transactions: transactions });
};

export { listNFTs, listTransactions };