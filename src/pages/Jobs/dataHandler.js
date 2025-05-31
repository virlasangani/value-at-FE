import fetchApi from "../../APIInterceptor"

export const fetchJobs = async (paylaod) => {
    try{

        const queryParams = new URLSearchParams(
        Object.entries(paylaod || {}).filter(([_, value]) => value != null)
        );
       const queryString = queryParams.toString();

        let response = await fetchApi.get(`/api/jobs?${queryString}` )
        if(response?.code === 200){
            return response?.data
        }
    }catch(error){
        return error.message
    }
}