import { useEffect, useState } from "react";
import JobFilter from "../../components/Job/Filter";
import JobCard from "../../components/Job/JobCard";
import { JobStats } from "../../components/Job/JobState";
import { fetchJobs } from "./dataHandler";
import { toast } from "react-toastify";
import { Pagination } from "@mui/material";
import fetchApi from "../../APIInterceptor";

export default function Jobs() {
  //Filter states
  const [filters, setFilters] = useState({
    title: "",
    profile: "",
    experience: "",
    tyep: "",
  });

  //Job List
  const [jobs, setJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState(0);
  const [totalPages, setTotalPages] = useState(0)

  //Pagination State
  const [pagination, setPagination] = useState({
    currentPage: 1,
    limit: 10,
  });

  const [jobsState, setJobsState] = useState({totalJobs: 0, totalHired: 0,totalApplied: 0})

  //Filter Handler
  const handleApplyFilter = async (filters) => {
    jobsList(filters, pagination?.currentPage, pagination?.limit)
  };

  const handlePagination = (page) => {
    setPagination({ ...pagination, currentPage: page });
    jobsList(filters, page, pagination.limit);
  };

  //Fetch Jobs based on filter and pagination
  const jobsList = async (filters, page, limit) => {
    let paylaod = { ...filters, page, limit };
    try {
      let data = await fetchJobs(paylaod);
      if (typeof data === "object") {
        let jobs = data?.jobs ?? []
        let total = data?.total ?? jobs.length;
        setJobs(jobs)
        setTotalJobs(total)
        setTotalPages(data?.pages)
      } else if (typeof data === "string") {
        toast.error(data);
      }
    } catch (erro) {}
  };

  const applyJob = async (id) => {
    try{
      if(!id){
        return
      }

      let response = await fetchApi.post(`/api/jobs/${id}`)
      if(response?.code == 200){
        toast.success(response?.message)
        getJobState()
      }
    }catch(error){
      toast.error(error.message)
    }
  }

  const getJobState = async () => {
      try{
        let response = await fetchApi.get('/api/jobs/stats')
        if(response?.code == 200){
          let data = response?.data ?? {totalJobs: 0, totalHired: 0,totalApplied: 0}
          setJobsState(data)
        }
      }catch(error){
        toast.error(error.message)
      }
    }

  useEffect(() => {
    jobsList();
    getJobState()
  }, []);

  return (
    <div className="bg-black w-full p-6 h-[100vh] overflow-auto">
      <h1 className="text-3xl font-semibold text-gray-200 mb-6 tracking-widest">
        JOBS
      </h1>
      <JobStats jobsState={jobsState}/>
      <JobFilter
        setFilters={setFilters}
        filters={filters}
        applyFilter={handleApplyFilter}
      />
      <div className="flex flex-wrap gap-4 mt-4">
        {jobs.map((item) => {
          return <JobCard {...item} applyJob={applyJob}/>;
        })}
      </div>
      {totalPages >= 1 && <div className="flex justify-center w-full mt-6">
        <Pagination
        page={pagination.currentPage}
        count={totalPages}
        onChange={handlePagination}
        color="primary"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
            borderColor: "#555",
          },
          "& .MuiPaginationItem-root:hover": {
            backgroundColor: "#333",
          },
          "& .Mui-selected": {
            backgroundColor: "primary.main",
            color: "#fff",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          },
        }}
      />
      </div>}
      
    </div>
  );
}
