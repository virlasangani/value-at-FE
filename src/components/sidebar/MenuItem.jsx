import { ChevronUp, ChevronDown } from 'lucide-react';

export const MenuItem = ({
  item,
  isActive,
  isExpanded,
  onClick,
  onToggleExpand,
}) => {
  const hasChildren = item.children && item.children.length > 0;
  
  const handleClick = () => {
    onClick();
    if (hasChildren && onToggleExpand) {
      onToggleExpand();
    }
  };

  return (
    <>
      <div
        className={`
          relative flex items-center px-6 py-3 cursor-pointer transition-colors
          ${isActive ? 'bg-[#1E2027]' : 'hover:bg-[#1E2027]'}
        `}
        onClick={handleClick}
      >
        {isActive && (
          <div className="absolute left-0 top-0 w-1 h-full bg-[#0033FF]" />
        )}
        
        <span className="flex items-center text-gray-300">
          {item.icon}
        </span>
        
        <span className="ml-3 text-gray-200">{item.label}</span>
        
        {item.count !== undefined && (
          <span className="ml-auto px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded-full">
            {item.count}
          </span>
        )}
        
        {hasChildren && (
          <span className="ml-auto pl-2">
            {isExpanded ? (
              <ChevronUp size={20} className="text-gray-400" />
            ) : (
              <ChevronDown size={20} className="text-gray-400" />
            )}
          </span>
        )}
      </div>
      
      {hasChildren && isExpanded && (
        <div className="relative ml-8 mt-2">
          {item.children?.map((child) => (
            <div
              key={child.id}
              className="flex items-center px-4 py-3 cursor-pointer border-l border-dashed border-gray-700 hover:bg-gray-800/50"
              onClick={(e) => {
                e.stopPropagation();
                onClick(child.path);
              }}
            >
              <span className="flex items-center text-gray-400">
                {child.icon}
              </span>
              
              <span className="ml-3 text-gray-300">{child.label}</span>
              
              {child.count !== undefined && (
                <span className="ml-auto px-2 py-0.5 bg-gray-700 text-gray-300 text-xs rounded-full">
                  {child.count}
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};