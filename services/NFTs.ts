import supabase from "../utils/supabaseClient";
import { ErrorResponse, NFTModel } from "../types/profile";

const getNFTs = async ()  => {

    const data = await supabase.from("NFT").select("*");

    if (data.error) {
        return { error: { message: data.error.message } };
        }

    return { data };
};

const getTransactions = async (): Promise<any> => {
  const { data, error } = await supabase.from("Transaction").select("*");
  if (error) {
    return { error: { message: error.message } };
  }
  return { data };
};

export { getNFTs, getTransactions };
