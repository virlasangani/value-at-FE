import fetchApi from "../../APIInterceptor"

export const fetchJobs = async (paylaod) => {
    try{

        const queryParams = new URLSearchParams(
        Object.entries(paylaod || {}).filter(([_, value]) => value != null)
        );
       const queryString = queryParams.toString();
        // if(paylaod?.title){
        //     queryParams += queryParams ? '&title=' + paylaod.title : ''
        // }
        // if(paylaod?.profile){
        //     queryParams += queryParams ? '&profile=' + paylaod.profile : ''
        // }
        // if(paylaod?.employmentType){
        //     queryParams += queryParams ? '&employmentType=' + paylaod.employmentType : ''
        // }
        // if(paylaod?.exp){
        //     queryParams += queryParams ? '&exp=' + paylaod.exp : ''
        // }
        // if(paylaod?.page){
        //     queryParams += queryParams ? '&page=' + paylaod.page : ''
        // }
        // if(paylaod?.limit){
        //     queryParams += queryParams ? '&limit=' + paylaod.limit : ''
        // }

        let response = await fetchApi.get(`/api/jobs?${queryString}` )
        if(response?.code === 200){
            return response?.data
        }
    }catch(error){
        return error.message
    }
}