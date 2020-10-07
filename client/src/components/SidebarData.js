import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as VscIcons from 'react-icons/vsc';
import * as MdIcons from 'react-icons/md';
import '../pages/Job_it'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'แจ้งงาน IT',
    path: '../pages/Job_it',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'แจ้งงาน Marketing',
    path: '/products',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Create Event Issue',
    path: '/team',
    icon: <IoIcons.IoIosCreate />,
    cName: 'nav-text'
  },
  {
    title: 'Create Project Issue',
    path: '/messages',
    icon: <MdIcons.MdCreateNewFolder />,
    cName: 'nav-text'
  },
  {
    title: 'Report KPI 04',
    path: '/support',
    icon: <VscIcons.VscReport />,
    cName: 'nav-text'
  },
  {
    title: 'จัดการคลัง',
    path: '/stock',
    icon: <FaIcons.FaWarehouse />,
    cName: 'nav-text'
  },
]
