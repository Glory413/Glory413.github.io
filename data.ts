import { AiOutlineGithub } from 'react-icons/ai';
import {
  FaEye,
  FaRegListAlt,
  FaRegNewspaper,
  FaRegUser,
} from 'react-icons/fa';
import { MdComputer, MdDashboard } from 'react-icons/md';
import {
  SiBlockchaindotcom,
  SiDevexpress,
  SiAzureartifacts,
  SiNodedotjs,
} from 'react-icons/si';
import About from './components/aboutPage/About';
import Blogs from './components/blogsPage/Blogs';
import GuestBook from './components/guestbookPage/GuestBook';
import Resume from './components/resumePage/Resume';
import Stats from './components/statistics/Stats';
import Works from './components/worksPage/Works';
import {
  MenuData,
  ServiceData,
  SocialMedia,
  StatisticsData,
  TeamData
} from './types';

export const menus: MenuData[] = [
  {
    id: 1,
    label: 'about',
    Icon: FaRegUser,
    Component: About,
  },
  {
    id: 2,
    label: 'resume',
    Icon: FaRegListAlt,
    Component: Resume,
  },
  {
    id: 3,
    label: 'works',
    Icon: FaEye,
    Component: Works,
  },
  {
    id: 4,
    label: 'blog',
    Icon: FaRegNewspaper,
    Component: Blogs,
  },
  {
    id: 5,
    label: 'stats',
    Icon: MdDashboard,
    Component: Stats,
  },
  {
    id: 6,
    label: 'my review',
    Icon: MdComputer,
    Component: GuestBook,
  },
];

export const socialMedia: SocialMedia[] = [
  {
    id: 1,
    Icon: AiOutlineGithub,
    label: 'Github',
    logoColor: '#171515',
    mediaUrl: 'https://www.github.com/GloryDream413',
    info: 'Star my projects on Github',
  }
];

export const services: ServiceData[] = [
  {
    id: 1,
    title: 'Blockchain',
    Icon: SiBlockchaindotcom,
    description:
      'Ethereum and Solana blockchain DeFi, Dapp, meme coin Development',
  },
  {
    id: 2,
    title: 'Back-End',
    Icon: SiDevexpress,
    description:
      'Backend services using Rust, Golang, and Express.js',
  },
  {
    id: 3,
    title: 'AI Service',
    Icon: SiAzureartifacts,
    description:
      'AI image processing and chatbot development',
  },
  {
    id: 4,
    title: 'Front-End',
    Icon: SiNodedotjs,
    description:
      'Frontend services using React, Next.js, and Tailwind CSS',
  }
];

export const statisticsData: StatisticsData[] = [
  {
    title: 'stack',
    info: 'Blockchain | AI | FullStack',
  },
  {
    title: 'projects',
    info: '20+',
  },
  {
    title: 'clients',
    info: '20+',
  },
];

export const teamData: TeamData[] = [
  {
    userName: 'Yaroslav Podkopaiev',
    userStack: 'Blockchain | AI Developer',
    userImage: { url: '/images/yaroslav.png' }
  },
  {
    userName: 'Julian Dmytro Vanname',
    userStack: 'Blockchain | BackEnd Developer',
    userImage: { url: '/images/julian.jpeg' }
  },
  {
    userName: 'Marko Hakanjin',
    userStack: 'Blockchain | FullStack Developer',
    userImage: { url: '/images/marko.png' }
  },
  {
    userName: 'Vladislav',
    userStack: 'Blockchain | AI Developer',
    userImage: { url: '/images/vladislav.jpg' }
  },
  {
    userName: 'Hanyk Denys',
    userStack: 'Blockchain | FullStack Developer',
    userImage: { url: '/images/denys.png' }
  }
]