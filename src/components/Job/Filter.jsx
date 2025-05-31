import { RotateCw, Search } from "lucide-react";
import { useRef, useState } from "react";
import { FilterDropdown } from "../commonField/dropdown";

const jobProfiles = [
  { label: 'UI/UX Designer', value: 'uiux' },
  { label: 'Frontend Developer', value: 'frontend' },
  { label: 'Backend Developer', value: 'backend' },
  { label: 'Full Stack Developer', value: 'fullstack' },
];

const experienceLevels = [
{ label: '0 - 2 years', value: '0-2' },
  { label: '2 - 6 years', value: '2-6' },
  { label: '6+ years', value: '6+' },
];

const employmentTypes = [
  { label: 'Full Time', value: 'Full-time' },
  { label: 'Part Time', value: 'Part-time' },
  { label: 'Contract', value: 'Contract' },
  { label: 'Internship', value: 'Internship' },
];

export default function JobFilter({setFilters, filters, applyFilter}){
  const searchRef = useRef(null)
  const resetFilter = () => {
    let state = {title: '', profile: '', type: '', experience: ''}
    setFilters(state)
    applyFilter(state)
  }

  const handleFilterState = (key, value, isSearchField = false) => {
    let updatedFilter = {...filters, [key]: value}
    setFilters(updatedFilter)
    if(isSearchField){
      clearTimeout(searchRef.current)
      searchRef.current = setTimeout(() => {
        applyFilter(updatedFilter)
      }, 400);
    }else{
      applyFilter(updatedFilter)
    }
  }

  return (
    <div className="flex gap-4">
      <div className="relative flex-1 max-w-[250px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Enter a job title"
          value={filters.title}
          onChange={(e) => handleFilterState('title', e.target.value, true)}
          className="w-full min-w-[200px] pl-10 pr-4 py-2.5 bg-[#1a1a1a] rounded-lg text-gray-300 placeholder-gray-400 focus:outline-none"
        />
      </div>
      
      <div className="w-auto">
        <FilterDropdown
          options={jobProfiles}
          value={filters.profile}
          onChange={(value) => handleFilterState('profile', value)}
          placeholder="Job Profile"
        />
      </div>
      
      <div className="w-auto">
        <FilterDropdown
          options={experienceLevels}
          value={filters.experience}
          onChange={(value) => handleFilterState('experience', value)}
          placeholder="Experience"
        />
      </div>
      
      <div className="w-auto">
        <FilterDropdown
          options={employmentTypes}
          value={filters.type}
          onChange={(value) => handleFilterState('type', value)}
          placeholder="Employment type"
        />
      </div>
      
      <button onClick={resetFilter} className="p-2.5 cursor-pointer bg-[#1a1a1a] rounded-lg text-gray-300 hover:bg-[#252525] transition-colors">
        <RotateCw size={20} />
      </button>
    </div>
  );
};