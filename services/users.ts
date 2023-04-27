import supabase from "../utils/supabaseClient";

const getUsers = async (): Promise<any> => {
    const { data, error } = await supabase.from("Profile").select("*");
    if (error) {
        return { error: error.message };
    }
    return data
}

export { getUsers };