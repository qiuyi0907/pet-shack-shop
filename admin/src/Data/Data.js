// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
} from "@iconscout/react-unicons";

import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

import {
  randomCreatedDate,
  // randomTraderName,
  randomEmail,
  randomUpdatedDate,
  randomAddress,
  randomCity,
} from "@mui/x-data-grid-generator";

export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
    route: '/'
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
    route: '/orders'
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
    route: '/customers'
  },
  {
    icon: UilPackage,
    heading: "Products",
    route: '/products'
  },
  {
    icon: UilChart,
    heading: "Analytics",
    route: '/analytics'
  },
];

export const CardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    value: "25,970",
    difference: 20,
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    value: "14,270",
    difference: -10,
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    value: "4,270",
    difference: 30,
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];


export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "has received Samsung gadget for charging battery.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Iron Man",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 hours ago",
  },
];

export const UserRows = [
  {
    id: 1,
    userName: "randomname",
    firstName: "Annie",
    lastName: "Wang",
    profilePicture: img1,
    email: randomEmail(),
    birthday: '1999.07.28',
    address: randomAddress() + ", " + randomCity() + ", ON",
    phoneNumber: '613-583-6190',
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 2,
    userName: "randomname",
    firstName: "Annie",
    lastName: "Wang",
    profilePicture: img2,
    email: randomEmail(),
    birthday: '1999.07.28',
    address: randomAddress() + ", " + randomCity() + ", ON",
    phoneNumber: '613-583-6190',
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
  {
    id: 3,
    userName: "randomname",
    firstName: "Annie",
    lastName: "Wang",
    profilePicture: img3,
    email: randomEmail(),
    birthday: '1999.07.28',
    address: randomAddress() + ", " + randomCity() + ", ON",
    phoneNumber: '613-583-6190',
    dateCreated: randomCreatedDate(),
    lastLogin: randomUpdatedDate(),
  },
];