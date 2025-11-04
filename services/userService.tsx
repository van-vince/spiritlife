import { supabase } from "../lib/supabase"


export const getUserdata = async (userId: string) => {
    try {

        const {data, error } = await supabase
        .from('users')
        .select()
        .eq('id', userId)
        .single()

        if(error){
             console.log('get error', error)
        }
        return {success: true, data}
        
    } catch (error: any) {
        console.log('get error', error)
        return {success: false, msg: error.message}
    }
}