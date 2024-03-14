import { LuTrees } from "react-icons/lu";
import { BiCameraMovie } from "react-icons/bi";
import { GoLaw } from "react-icons/go";
import { AiOutlineMedicineBox } from "react-icons/ai";
import { GiMaterialsScience } from "react-icons/gi";
import { TiMessages } from "react-icons/ti";
import { IoEarthOutline } from "react-icons/io5";
import { FaRegPenToSquare, FaLaptopCode } from "react-icons/fa6";
import { LuMicroscope } from "react-icons/lu";
import {
  MdCastForEducation,
  MdOutlineEngineering,
  MdOutlineDesignServices,
  MdOutlineBusinessCenter,
} from "react-icons/md";
import { RiShip2Line } from "react-icons/ri";

const disciplineItems = [
  {
    href: "disciplines/computer-science-and-it",
    icon: <FaLaptopCode className="text-5xl" />,
    title: "Computer Science & IT",
    universities: ["GIKI", "Virtual University of Pakistan", "University of Lahore", "University of Central Punjab", "Arid Agriculture University", "Balochistan University of Information Technology, Engineering and Management Sciences", "Sir Syed University of Engineering & Technology", "Preston University", "Pakistan Institute of Engineering & Applied Sciences (PIEAS)", "NED (University of Engeenering and Technology)", "NUST", "Mehran University of Engineering & Technology", "FAST NUCES", "COMSATS ", "City University of Science & Information Technology", "Beaconhouse National University", "Iqra University"]
  },
  {
    href: "disciplines/jourlism-and-media",
    icon: <BiCameraMovie className="text-5xl" />,
    title: "Journalism & Media",
    universities: ["LUMS", "University of Lahore", "Bahauddin Zakariya University"],
  },
  {
    href: "disciplines/law",
    icon: <GoLaw className="text-5xl" />,
    title: "Law",
    universities: ["Lahore College for Women University", "University of Lahore", "Islamia College University"],
  },
  {
    href: "disciplines/medicine-and-health",
    icon: <AiOutlineMedicineBox className="text-5xl" />,
    title: "Medicine & Health",
    universities: ["Allama Iqbal Open University"],
  },
  {
    href: "disciplines/natural-sciences-and-mathematics",
    icon: <GiMaterialsScience className="text-5xl" />,
    title: "Natural Sciences & Mathematics",
    universities: ["University of Agriculture", "National Textile University", "NUST", "Mehran University of Engineering & Technology"],
  },
  {
    href: "disciplines/social-sciences",
    icon: <TiMessages className="text-5xl" />,
    title: "Social Sciences",
    universities: ["University of Lahore", "Lahore College for Women University", "Jinnah University for Women", "Islamia College University", "Iqra University", "COMSATS ", "Beaconhouse National University", "Bahauddin Zakariya University", "Allama Iqbal Open University"],
  },
  {
    href: "disciplines/education-and-training",
    icon: <MdCastForEducation className="text-5xl" />,
    title: "Education & Training",
    universities: ["Allama Iqbal Open University"],
  },
  {
    href: "disciplines/engineering-and-technology",
    icon: <MdOutlineEngineering className="text-5xl" />,
    title: "Engineering & Technology",
    universities: ["GIKI", "University of Central Punjab", "Arid Agriculture University", "Balochistan University of Information Technology, Engineering and Management Sciences", "Sir Syed University of Engineering & Technology", "Preston University", "Pakistan Institute of Engineering & Applied Sciences (PIEAS)", "NED (University of Engeenering and Technology)", "NUST", "Mehran University of Engineering & Technology", "FAST NUCES", "COMSATS ", "City University of Science & Information Technology"],
  },
  {
    href: "disciplines/environmental-studies-and-earth-sciences",
    icon: <IoEarthOutline className="text-5xl" />,
    title: "Environmental Studies & Earth Sciences",
    universities: ["Arid Agriculture University"],
  },
  {
    href: "disciplines/hospitality-leisure-and-sports",
    icon: <RiShip2Line className="text-5xl" />,
    title: "Hospitality, Leisure & Sports",
    universities: ["Abbottabad University of Science and Technology (AUST)"],
  },
  {
    href: "disciplines/humanities",
    icon: <FaRegPenToSquare className="text-5xl" />,
    title: "Humanities",
    universities: ["Lahore College for Women University", "Islamia College University", "Iqra University", "Beaconhouse National University", "Bahauddin Zakariya University"],
  },

  {
    href: "disciplines/agriculture-and-forestry",
    icon: <LuTrees className="text-5xl" />,
    title: "Agriculture & Forestry",
    universities: ["University of Agriculture", "Arid Agriculture University"],
  },
  {
    href: "disciplines/appiled-sciences-and-professions",
    icon: <LuMicroscope className="text-5xl" />,
    title: "Applied Sciences & Professions",
    universities: ["GIKI", "Balochistan University of Information Technology, Engineering and Management Sciences", "Preston University", "Pakistan Institute of Engineering & Applied Sciences (PIEAS)", "NED (University of Engeenering and Technology)", "Mehran University of Engineering & Technology", "FAST NUCES", "COMSATS ", "City University of Science & Information Technology",],
  },
  {
    href: "disciplines/art-design-and-architecture",
    icon: <MdOutlineDesignServices className="text-5xl" />,
    title: "Arts, Design & Architecture",
    universities: ["Beaconhouse National University", "Bahauddin Zakariya University"],
  },
  {
    href: "disciplines/business-and-management",
    icon: <MdOutlineBusinessCenter className="text-5xl" />,
    title: "Business & Management",
    universities: ["LUMS"],
  },
];

export default disciplineItems;
