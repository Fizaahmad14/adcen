


const universities = [
    {
        University: "GIKI",
        Tuition: "407500",
        Hostel: "0",
        Transport: "0",
        Food: "0",
    },
    {
        University: "Virtual University of Pakistan",
        Tuition: "12750",
        Hostel: "0",
        Transport: "0",
        Food: "0",
    },
    {
        University: "University of Lahore",
        Tuition: "74600",
        Hostel: "23800",
        Transport: "10000",
        Food: "5000",
    },
    {
        University: "University of Central Punjab",
        Tuition: "242600",
        Hostel: "0",
        Transport: "0",
        Food: "0",
    },
    {
        University: "ARID",
        Tuition: "14800",
        Hostel: "13000",
        Transport: "0",
        Food: "4500",
    },
    {
        University: "University of Agriculture",
        Tuition: "40570",
        Hostel: "18750",
        Transport: "9000",
        Food: "5000",
    },
    {
        University: "BUITEMS",
        Tuition: "48415",
        Hostel: "8000",
        Transport: "100",
        Food: "6000",
    },
    {
        University: "Sir Syed University of Engineering & Technology",
        Tuition: "75000",
        Hostel: "0",
        Transport: "0",
        Food: "0",
    },
    {
        University: "Preston",
        Tuition: "52500",
        Hostel: "0",
        Transport: "0",
        Food: "0",
    },
    {
        University: "PIEAS",
        Tuition: "52400",
        Hostel: "4400",
        Transport: "11000",
        Food: "0",
    },
    {
        University: "NED",
        Tuition: "37020",
        Hostel: "900",
        Transport: "500",
        Food: "500",
    },
    {
        University: "NUST",
        Tuition: "149000",
        Hostel: "34000",
        Transport: "0",
        Food: "13000",
    },
    {
        University: "National Textile University",
        Tuition: "62400",
        Hostel: "25000",
        Transport: "19000",
        Food: "9000",
    },
    {
        University:
            "Mehran University of Engineering & Technology, Jamshoro",
        Tuition: "18000",
        Hostel: "9000",
        Transport: "14000",
        Food: "5000",
    },
    {
        University: "LUMS",
        Tuition: "345398",
        Hostel: "71095",
        Transport: "18000",
        Food: "85000",
    },
    {
        University: "Lahore College for Women University, Lahore",
        Tuition: "43600",
        Hostel: "4500",
        Transport: "1000",
        Food: "5082",
    },
    {
        University: "Jinnah University for Women, Karachi",
        Tuition: "55000",
        Hostel: "7000",
        Transport: "0",
        Food: "3700",
    },
    {
        University: "Islamia College University, Peshawar",
        Tuition: "50000",
        Hostel: "8000",
        Transport: "1000",
        Food: "5000",
    },
    {
        University: "Iqra University",
        Tuition: "127120",
        Hostel: "7000",
        Transport: "0",
        Food: "3000",
    },
    {
        University: "FAST",
        Tuition: "135000",
        Hostel: "0",
        Transport: "40000",
        Food: "0",
    },
    {
        University: "COMSATS",
        Tuition: "129500",
        Hostel: "38500",
        Transport: "34000",
        Food: "17000",
    },
    {
        University:
            "City University of Science & Information Technology",
        Tuition: "26350",
        Hostel: "0",
        Transport: "0",
        Food: "0",
    },
    {
        University: "Beaconhouse National University, Lahore",
        Tuition: "282500",
        Hostel: "91000",
        Transport: "0",
        Food: "9000",
    },
    {
        University: "Bahauddin Zakariya University, Multan",
        Tuition: "19922",
        Hostel: "7200",
        Transport: "0",
        Food: "4000",
    },
    {
        University: "Bacha Khan University, Khyber Pakhtunkhwa",
        Tuition: "23800",
        Hostel: "0",
        Transport: "19000",
        Food: "0",
    },
    {
        University: "Allama Iqbal Open University, Islamabad",
        Tuition: "40020",
        Hostel: "6000",
        Transport: "0",
        Food: "5000",
    },
    {
        University:
            "Abbottabad University of Science and Technology (AUST)",
        Tuition: "40900",
        Hostel: "0",
        Transport: "10000",
        Food: "0",
    },
];

const maxCost = {
    Tuition: Math.max(
        ...universities.map((uni) => +(uni.Tuition))
    ),
    Hostel: Math.max(
        ...universities.map((uni) => +(uni.Hostel))
    ),
    Transport: Math.max(
        ...universities.map((uni) => +(uni.Transport))
    ),
    Food: Math.max(
        ...universities.map((uni) => +(uni.Food))
    ),
}



export { universities, maxCost };