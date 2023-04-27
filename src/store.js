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
]
})