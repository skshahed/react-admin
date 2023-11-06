export const menu = [
    {
        id: 1,
        title:"main",
        listItems:[
            {
                id: 1,
                title: "Homepage",
                url: "/",
                icon: "home.svg",
            },
            {
                id: 2,
                title: "Profile",
                url: "/users/1",
                icon: "user.svg",
            },
        ],
    },
    {
        id: 2,
        title:"lists",
        listItems:[
            {
                id: 1,
                title: "Users",
                url: "/users",
                icon: "user.svg",
            },
            {
                id: 2,
                title: "Products",
                url: "/products",
                icon: "product.svg",
            },
            {
                id: 3,
                title: "Orders",
                url: "/oders",
                icon: "order.svg",
            },
            {
                id: 4,
                title: "Posts",
                url: "/posts",
                icon: "post2.svg",
            },
        ],
    },
    {
        id: 3,
        title:"general",
        listItems:[
            {
                id: 1,
                title: "Elements",
                url: "/",
                icon: "element.svg",
            },
            {
                id: 2,
                title: "Notes",
                url: "/",
                icon: "note.svg",
            },
            {
                id: 3,
                title: "Forms",
                url: "/",
                icon: "form.svg",
            },
            {
                id: 4,
                title: "Calendar",
                url: "/",
                icon: "calendar.svg",
            },
        ],
    },
    {
        id: 4,
        title:"Maintenance",
        listItems:[
            {
                id: 1,
                title: "Setting",
                url: "/",
                icon: "setting.svg",
            },
            {
                id: 2,
                title: "Backups",
                url: "/",
                icon: "backup.svg",
            },
        ],
    },
    {
        id: 5,
        title:"Analytics",
        listItems:[
            {
                id: 1,
                title: "Charts",
                url: "/",
                icon: "chart.svg",
            },
            {
                id: 2,
                title: "Logs",
                url: "/",
                icon: "log.svg",
            },
        ],
    },
    
];

export const topDealUsers = [
    {
        id: 1,
        img: "https://cdn.pixabay.com/photo/2014/04/03/10/32/user-310807_640.png",
        username: "Amber Joshy",
        email: "joshy@gmail.com",
        amount: "2.365",
    },
    {
        id: 2,
        img: "https://cdn.pixabay.com/photo/2017/02/25/22/04/user-icon-2098873_640.png",
        username: "Shahed Alam",
        email: "shahed@gmail.com",
        amount: "5.258",
    },
    {
        id: 3,
        img: "https://cdn.pixabay.com/photo/2014/04/02/10/54/person-304893_640.png",
        username: "Andrew Seber",
        email: "andrew@gmail.com",
        amount: "4.56",
    },
    {
        id: 4,
        img: "https://cdn.pixabay.com/photo/2016/11/08/15/21/user-1808597_640.png",
        username: "Sena Passy",
        email: "sena@gmail.com",
        amount: "2.586",
    },
    {
        id: 5,
        img: "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814050_640.png",
        username: "Plus One",
        email: "one@gmail.com",
        amount: "2.365",
    },
    {
        id: 6,
        img: "https://cdn.pixabay.com/photo/2017/05/19/10/43/matrix-2326147_640.jpg",
        username: "Disco Piter",
        email: "pitar@gmail.com",
        amount: "2.547",
    },
    {
        id: 7,
        img: "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png",
        username: "Mister smart",
        email: "smart@gmail.com",
        amount: "2.365",
    },
  
];

export const chartBoxUser = {
    color: "#8884d8",
    icon: "/userIcon.svg",
    title: "Total Users",
    number: "12.253",
    dataKey: "users",
    percentage: 37,
    chartData: [
        { name:"Sun", users: 400 },
        { name:"MOn", users: 600 },
        { name:"Tue", users: 500 },
        { name:"Wed", users: 700 },
        { name:"Thu", users: 400 },
        { name:"Fri", users: 500 },
        { name:"Sat", users: 450 },
    ],
};

export const chartBoxProduct = {
    color: "aqua",
    icon: "/productIcon.svg",
    title: "Total Products",
    number: "158",
    dataKey: "products",
    percentage: 24,
    chartData: [
        { name:"Sun", products: 400 },
        { name:"MOn", products: 600 },
        { name:"Tue", products: 500 },
        { name:"Wed", products: 700 },
        { name:"Thu", products: 400 },
        { name:"Fri", products: 500 },
        { name:"Sat", products: 450 },
    ],
};

export const chartBoxRevenue = {
    color: "teal",
    icon: "/revenueIcon.svg",
    title: "Total Revenue",
    number: "$48.853",
    dataKey: "revenue",
    percentage: -17,
    chartData: [
        { name:"Sun", revenue: 400 },
        { name:"MOn", revenue: 600 },
        { name:"Tue", revenue: 500 },
        { name:"Wed", revenue: 700 },
        { name:"Thu", revenue: 400 },
        { name:"Fri", revenue: 500 },
        { name:"Sat", revenue: 450 },
    ],
};

export const chartBoxConversion = {
    color: "gold",
    icon: "/conversionIcon.svg",
    title: "Total Ratio",
    number: "1.9",
    dataKey: "ratio",
    percentage: 19,
    chartData: [
        { name:"Sun", ratio: 400 },
        { name:"MOn", ratio: 600 },
        { name:"Tue", ratio: 500 },
        { name:"Wed", ratio: 700 },
        { name:"Thu", ratio: 400 },
        { name:"Fri", ratio: 500 },
        { name:"Sat", ratio: 450 },
    ],
};


export const barChartBoxRevenue ={
    title: "Profit Earned",
    color: "#8884d8",
    dataKey: "profit",
    chartData: [
        { name:"Sun", profit: 4000 },
        { name:"MOn", profit: 3000 },
        { name:"Tue", profit: 2000 },
        { name:"Wed", profit: 7000 },
        { name:"Thu", profit: 1890 },
        { name:"Fri", profit: 2390 },
        { name:"Sat", profit: 4500 },
    ],
};

export const barChartBoxVisit ={
    title: "Profit Earned",
    color: "#FF8042",
    dataKey: "visit",
    chartData: [
        { name:"Sun", visit: 4000 },
        { name:"MOn", visit: 3000 },
        { name:"Tue", visit: 2000 },
        { name:"Wed", visit: 7000 },
        { name:"Thu", visit: 1890 },
        { name:"Fri", visit: 2390 },
        { name:"Sat", visit: 4500 },
    ],
}