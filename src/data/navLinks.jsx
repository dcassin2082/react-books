import { BsFillGearFill, BsStar, BsEmojiLaughing } from "react-icons/bs";

import { BiMovie } from "react-icons/bi";
import {
  MdAnimation,
  MdFamilyRestroom,
  MdMiscellaneousServices,
  MdTravelExplore,
} from "react-icons/md";
import { TbHourglass, TbHearts } from "react-icons/tb";
import {
  PiFilmSlateLight,
  PiSmileySadBold,
  PiFlyingSaucerLight,
  PiCactus,
  PiSpeedometerLight,
  PiTelevisionSimpleLight,
} from "react-icons/pi";
import {
  GiBloodyStash,
  GiCrimeSceneTape,
  GiIronHulledWarship,
  GiSpy,
} from "react-icons/gi";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { FaFantasyFlightGames, FaFilm } from "react-icons/fa6";

import { TbBooks } from "react-icons/tb";
import { IoBookSharp } from "react-icons/io5";
import { SiBookstack } from "react-icons/si";
import { SiAudiobookshelf } from "react-icons/si";
import { SiWikibooks } from "react-icons/si";
import { GiBookshelf } from "react-icons/gi";
import { GiBookStorm } from "react-icons/gi";
import { IoMdBook } from "react-icons/io";
import { MdOutlineHowToReg } from "react-icons/md";
import { TiFlowChildren } from "react-icons/ti";
import { PiBooks } from "react-icons/pi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { MdLibraryBooks } from "react-icons/md";
import { IoMdBusiness } from "react-icons/io";
import { FcSportsMode } from "react-icons/fc";
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdOutlineScience } from "react-icons/md";

export const navLinkCategories = [
  {
    id: 1,
    to: "/fiction",
    text: "fiction",
    icon: <FaFilm className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 2,
    to: "/non_fiction",
    text: "non fiction",
    icon: <BsStar className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 3,
    to: "/hardcover_fiction",
    text: "hardcover fiction",
    icon: <BiMovie className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
];
export const hardcoverCategories = [
  {
    id: 3,
    to: "/hardcover_fiction",
    text: "fiction",
    icon: <GiBookshelf className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 4,
    to: "/hardcover_nonfiction",
    text: "non fiction",
    icon: <TbBooks className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 10,
    to: "/hardcover_advice",
    text: "Advice",
    icon: <SiWikibooks className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 14,
    to: "/young_adult_hardcover",
    text: "Young Adult ",
    icon: <GiSpy className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 12,
    to: "/childrens_middle_grade_hardcover",
    text: "children's middle grade ",
    icon: <TiFlowChildren className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
];
export const paperbackCategories = [
  {
    id: 5,
    to: "/trade_fiction_paperback",
    text: "trade fiction",
    icon: <IoBookSharp className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 6,
    to: "/mass_market_paperback",
    text: "Mass Market",
    icon: <IoMdBook className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 22,
    to: "/paperback_nonfiction",
    text: "Non Fiction",
    icon: <TbBooks className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 11,
    to: "/paperback_advice",
    text: "advice",
    icon: <MdOutlineHowToReg className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },

  {
    id: 13,
    to: "/childrens_middle_grade_paperback",
    text: "children's middle grade",
    icon: <TiFlowChildren className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },

  {
    id: 15,
    to: "/young_adult_paperback",
    text: "Young Adult",
    icon: <GiSpy className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
];
export const ebookCategories = [
  {
    id: 8,
    to: "/e_book_nonfiction",
    text: "E-Book Nonfiction",
    icon: <SiAudiobookshelf className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 9,
    to: "/e_book_fiction",
    text: "E-Book fiction",
    icon: <SiAudiobookshelf className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  // {
  //   id: 1,
  //   to: "/combined_print_and_e_book_fiction",
  //   text: "Print & E-Book Fiction",
  //   icon: <MdLibraryBooks className="inline-block w-6 h-6 mr-2 -mt-2" />,
  // },
  // {
  //   id: 2,
  //   to: "/combined_print_and_e_book_nonfiction",
  //   text: "Print & E-Book non fiction",
  //   icon: <MdOutlineLibraryBooks className="inline-block w-6 h-6 mr-2 -mt-2" />,
  // },
];
export const miscellaneousCategories = [
  {
    id: 17,
    to: "/advice_how_to_and_miscellaneous",
    text: "advice, how-to & misc",
    icon: <SiWikibooks className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 18,
    to: "/business_books",
    text: "business books",
    icon: <IoMdBusiness className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 20,
    to: "/sports",
    text: "sports",
    icon: <FcSportsMode className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
  {
    id: 21,
    to: "/travel",
    text: "travel",
    icon: <MdTravelExplore className="inline-block w-6 h-6 mr-2 -mt-2" />,
  },
];
