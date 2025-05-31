import React, { useState } from 'react';
import { MenuItem } from './MenuItem';
import { LayoutDashboard, Bell, Briefcase, Users, FileText, CheckSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Menu = () => {
  const navigate = useNavigate()
  const [activeMenuItem, setActiveMenuItem] = useState('jobs');
  const [expandedMenus, setExpandedMenus] = useState(['candidates']);

  const menuItems= [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      path: '/'
    },
    {
      id: 'notification',
      label: 'Notification',
      icon: <Bell size={20} />,
      path: '/notification'
    },
    {
      id: 'jobs',
      label: 'Jobs',
      icon: <Briefcase size={20} />,
      isActive: activeMenuItem === 'jobs',
      path: '/jobs'
    },
    {
      id: 'candidates',
      label: 'Candidates',
      icon: <Users size={20} />,
      isActive: activeMenuItem === 'candidates',
      path: '/candidate/registerd',
      children: [
        {
          id: 'registered',
          label: 'Registered',
          icon: <FileText size={20} />,
          count: 1101,
          path: '/candidate/registerd'
        },
        {
          id: 'shortlisted',
          label: 'Short listed',
          icon: <CheckSquare size={20} />,
          count: 86,
          path:  '/candidate/shortlisted-candidate'
        },
      ],
    },
  ];

  const handleMenuItemClick = (id, path) => {
    setActiveMenuItem(id);
    navigate(path)

  };

  const handleToggleExpand = (id) => {
    setExpandedMenus((prev) => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <nav className="py-2">
      {menuItems.map((item) => (
        <MenuItem
          key={item.id}
          item={item}
          isActive={item.id === activeMenuItem}
          isExpanded={expandedMenus.includes(item.id)}
          onClick={(path) => handleMenuItemClick(item.id, path ? path : item.path)}
          onToggleExpand={() => handleToggleExpand(item.id)}
        />
      ))}
    </nav>
  );
};