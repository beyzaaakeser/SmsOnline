import { RiInboxArchiveLine } from 'react-icons/ri';
import { LuHandshake } from 'react-icons/lu';
import { MdDiversity2 } from 'react-icons/md';
import { MdOutlineStorefront } from 'react-icons/md';
import { MdOutlineGroup } from 'react-icons/md';
import { MdOutlineHub } from 'react-icons/md';
import { FaRegMap } from 'react-icons/fa';
import { TbDeviceRemote } from 'react-icons/tb';
import { MdOutlinePayments } from 'react-icons/md';
import { MdAddchart } from 'react-icons/md';
import { HiOutlineChartBarSquare } from 'react-icons/hi2';
import { MdOutlineCode } from 'react-icons/md';
import { IoReceiptOutline } from 'react-icons/io5';
import { MdSupportAgent } from 'react-icons/md';

export const inputs = [
  {
    image: <RiInboxArchiveLine className="text-orange-500" />,
    title: 'Independent suppliers',
    list1: 'Multiple sim card owners',
    list2: 'Direct relationship',
    list3: 'Exclusive locations',
  },
  {
    image: <LuHandshake className="text-orange-500" />,
    title: 'Connectivity partners',
    list1: 'Multiple partners',
    list2: 'Dedicated uplinks',
    list3: 'Exclusive terms',
  },
  {
    image: <MdDiversity2 className="text-orange-500" />,
    title: 'Own network',
    list1: 'Hosting own sim-cards',
    list2: 'Dedicated network',
    list3: 'Rare locations',
  },
];

export const clients = [
  {
    image: <MdOutlineStorefront className="text-orange-500" />,
    title: 'Small retail client',
    list1: 'Pay as you go',
    list2: 'Micro-payments',
    list3: 'No contracts',
  },
  {
    image: <MdOutlineGroup className="text-orange-500" />,
    title: 'Bulk users and agencies',
    list1: 'Scale your operation',
    list2: 'API for automation',
    list3: 'Volume discounts',
  },
  {
    image: <MdOutlineHub className="text-orange-500" />,
    title: 'Enterprise level',
    list1: 'Access to a global real-sim network',
    list2: 'Exclusive terms, prices and dedicated support',
    list3: 'Financial and corporate compliance',
  },
];

export const process = [
  {
    image: <FaRegMap className="text-orange-500" />,
    title: 'Service mapping',
    desc: 'Reducing activation costs x5-10 times using smart mapping',
  },
  {
    image: <TbDeviceRemote className="text-orange-500" />,
    title: 'Quality control',
    desc: 'Ongoing validation of suppliers and quality assurance powered by Machine learning and big data',
  },
  {
    image: <MdOutlinePayments className="text-orange-500" />,
    title: 'Pricing powered by AI',
    desc: 'Real-time AI-powered pricing system to perfect match supply and demand',
  },
  {
    image: <MdAddchart className="text-orange-500" />,
    title: 'Robust infrastructure',
    desc: 'A high-speed, enterprise-level infrastructure that handles thousands of requests per second',
  },
];

export const outputs = [
  {
    image: <HiOutlineChartBarSquare className="text-orange-500" />,
    title: 'Unified user-interface',
    desc: 'Easy-to-use web and mobile apps for ordering numbers from thousands of suppliers',
  },
  {
    image: <MdOutlineCode className="text-orange-500" />,
    title: 'Advanced API',
    desc: 'The Robust API allows you to scale tasks and automate workflows with ease',
  },
  {
    image: <IoReceiptOutline className="text-orange-500" />,
    title: 'Simple and transparent billing',
    desc: 'Simple and transparent billing for every activation, from small amounts to large enterprise contracts',
  },
  {
    image: <MdSupportAgent className="text-orange-500" />,
    title: '24x7 Support',
    desc: 'Taking care of most support cases very fast and in the most convenient way possible',
  },
];
