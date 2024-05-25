import { MENUS_LIST_TYPE } from './types';
import { IoMdMail } from 'react-icons/io';


// Will Handle It Through DB Config
export const MENU_LIST: MENUS_LIST_TYPE = [
  { id: 1, name: 'Invoice Data', icon: <IoMdMail />, isVisible: true },
  {
    id: 2,
    name: 'SpreadSheets',
    icon: <IoMdMail />,
    isVisible: true
  },
  {
    id: 3,
    name: 'Admin Panel',
    icon: <IoMdMail />,
    isVisible: true
  },
  {
    id: 4,
    name: 'Settings',
    icon: <IoMdMail />,
    isVisible: true
  },
  {
    id: 5,
    name: 'Profile',
    icon: <IoMdMail />,
    isVisible: true
  }
];
