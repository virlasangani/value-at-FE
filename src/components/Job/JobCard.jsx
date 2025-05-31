import { MoreVertical, Clock, SignalMedium, Banknote } from 'lucide-react';
import moment from 'moment/moment';


export default function JobCard({
  title,
  postedAt,
  contractType,
  salary,
  experience,
  description,
  stats,
  applyJob,
  _id
}){
  return (
    <div className="bg-[#1a1a1a] rounded-xl w-[450px]" onClick={() => applyJob(_id)}>
      <div className="flex justify-between items-start p-4">
        <div>
          <h3 className="text-xl text-white font-semibold">{title}</h3>
          <div className="italic flex items-center gap-2 text-gray-400 text-sm mb-4">
            <span>Posted :</span>
            <span>{moment(postedAt).format('MM/DD/YYY hh:mm A')}</span>
          </div>
          
          <div className="flex gap-3">
            <span className="flex items-center gap-2 px-3 py-1 bg-[#252525] rounded-[5px] text-gray-300 text-sm">
              <Clock size={16}/>{contractType}
            </span>
            <span className="flex items-center gap-2 px-3 py-1 bg-[#252525] rounded-[5px] text-gray-300 text-sm">
              <Banknote size={16}/>{salary}
            </span>
            <span className="flex items-center  px-3 py-1 bg-[#252525] rounded-[5px] text-gray-300 text-sm">
              <SignalMedium size={18}/>{experience}
            </span>
          </div>
        </div>
        <button className="text-gray-400 hover:text-gray-300 transition-colors">
          <MoreVertical size={20} />
        </button>
      </div>

      <p className="p-4 text-gray-400 mb-3 line-clamp-2 max-h-[65px]">{description}</p>

      <div className="flex p-1">
        <div className="bg-black flex w-full gap-8 rounded-xl justify-between items-center py-3 px-6">
          <div className="text-center">
            <div className="text-xl font-semibold text-white">{stats.applied}</div>
            <div className="text-lg text-gray-400">Applied</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-semibold text-white">{stats.clicked}</div>
            <div className="text-lg text-gray-400">Clicked</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-semibold text-white">{stats.underProcess}</div>
            <div className="text-lg text-gray-400">Under process</div>
          </div>
        </div>
      </div>
      <div className='h-[1px]'></div>

    </div>
  );
};