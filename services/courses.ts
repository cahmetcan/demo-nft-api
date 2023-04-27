import supabase from "../utils/supabaseClient";

const getCourses = async (): Promise<any> => {
    const { data, error } = await supabase.from("Course").select("*");
    if (error) {
        return { error: error.message };
    }
    return data;
}

export { getCourses };
