import { reactive } from "vue";

export const store = reactive({
    top_menu: [
        {
            id: 1,
            text: "Home"
        },
        {
            id: 2,
            text: "Pages"
        },
        {
            id: 3,
            text: "Course Formats"
        },
        {
            id: 4,
            text: "Courses"
        },
        {
            id: 5,
            text: "Demos"
        }
    ],
    top_menu_icons: [
        {
            id: 1,
            text: ""
        },
        {
            id: 2,
        },
        {
            id: 3,
            text: ""
        },
        {
            id: 4,
            text: ""
        },
        {
            id: 5,
            text: ""
        }
    ],
    jumbotron_bar: [
        {
            icon: "",
            text: "Business",
        },
        {
            icon: "",
            text: "Design",
        },
        {
            icon: "",
            text: "Development",
        },
        {
            icon: "",
            text: "Lifestyle",
        },
        {
            icon: "",
            text: "Office Productivity"
        },
    ],
    cosplays: [
        {
            id: 1,
            img: "./assets/img/cringe-cosplay-1.jpg",
            info: "",
            ogprice: "$69.99",
            discprice: "$35",
            filter: "Cringe",
            popular: true
        }, {
            img: "./assets/img/cringe-cosplay-1.jpg",
            info: "",
            ogprice: "$19.99",
            discprice: "$10",
            filter: "Disgusting",
            popular: true
        }, {
            id: 2,
            img: "./assets/img/cringe-cosplay-2.jpg",
            info: "",
            ogprice: "$19.99",
            discprice: "$19.99",
            filter: "Design",
            popular: false
        }, {
            id: 3,
            img: "./assets/img/cringe-cosplay-3.png",
            info: "",
            ogprice: "$69.99",
            discprice: "$35",
            filter: "Development",
            popular: true
        }, {
            id: 4,
            img: "./assets/img/cringe-cosplay-4.jpg",
            info: "",
            ogprice: "$34.99",
            discprice: "$18",
            filter: "Furry",
            popular: false,
        }, {
            id: 5,
            img: "./assets/img/cringe-cosplay-5.jpg",
            info: "",
            ogprice: "$49.99",
            discprice: "$25",
            filter: "2 Much Weeb",
            popular: true
        }, {
            id: 6,
            img: "./assets/img/cringe-cosplay-6.jpg",
            info: "",
            ogprice: "$19.99",
            discprice: "$19.99",
            filter: "Cringe",
            popular: false
        }, {
            id: 7,
            img: "./assets/img/cringe-cosplay-7.jpg",
            info: "",
            ogprice: "$99.99",
            discprice: "$45",
            filter: "Furry",
            popular: true
        }, {
            id: 8,
            img: "./assets/img/cringe-cosplay-8.jpg",
            info: "",
            ogprice: "--",
            discprice: "$199.99",
            filter: "Design",
            popular: false
        }, {
            id: 9,
            img: "./assets/img/cringe-cosplay-9.jpg",
            info: "",
            ogprice: "$139.99",
            discprice: "$70",
            filter: "Disgusting",
            popular: true
        }, {
            id: 10,
            img: "./assets/img/cringe-cosplay-10.png",
            info: "",
            ogprice: "$129.99",
            discprice: "$65",
            filter: "Cringe",
        }, {
            id: 11,
            img: "./assets/img/cringe-cosplay-11.jpg",
            info: "",
            ogprice: "$199.99",
            discprice: "$100",
            filter: "2 Much Weeb",
            popular: false
        }, {
            id: 12,
            img: "./assets/img/cringe-cosplay-12.jpg",
            info: "",
            ogprice: "$199.99",
            discprice: "$100",
            filter: "Cringe",
            popular: false
        },
    ]
})