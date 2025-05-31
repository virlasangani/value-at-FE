import { FileText, Plus } from 'lucide-react';

function StatCard({ title, value, icon, bgColor, iconBgColor }){
  return (
    <div className={`${bgColor} rounded-2xl p-6 flex items-start justify-between min-w-[300px]`}>
      <div>
        <h3 className="text-gray-200 text-lg mb-2">{title}</h3>
        <p className="text-white text-3xl font-semibold">{value}</p>
      </div>
      <div className={`${iconBgColor} p-2 rounded-lg`}>
        <img src={icon} alt={title} className="w-6 h-6" />
      </div>
    </div>
  );
};

export const JobStats = ({jobsState}) => {

  return (
    <div className="flex flex-wrap gap-4 mb-4 items-end">
      <StatCard
        title="Total Jobs Posted"
        value={jobsState.totalJobs}
        icon="/src/assets/briefcase-3.svg"
        bgColor="bg-[#1E2544]"
        iconBgColor="bg-[#242C55]"
      />
      <StatCard
        title="Application received"
        value={jobsState.totalApplied}
        icon="/src/assets/brifcase icon.svg"
        bgColor="bg-[#3D2427]"
        iconBgColor="bg-[#4A2C30]"
      />
      <StatCard
        title="Hired"
        value={jobsState.totalHired}
        icon="/src/assets/handshak icon.svg"
        bgColor="bg-[#0A2021]"
        iconBgColor="bg-[#0C2628]"
      />
      <div className="flex gap-2 items-end">
        <button className="h-[40px] flex items-center gap-2 px-6 py-3 bg-[#1E2544] text-gray-200 rounded-[20px] hover:bg-[#242C55] transition-colors">
          <FileText size={16} />
          <span className='text-sm'>Drafts</span>
          <span className="ml-2 text-gray-400">4</span>
        </button>
        
        <button className="h-[40px] flex items-center gap-2 px-6 py-3 bg-[#4F46E5] text-white rounded-[20px] hover:bg-[#4338CA] transition-colors">
          <Plus size={16} />
          <span className='text-sm'>Post New Job</span>
        </button>
      </div>
    </div>
    
  );
};