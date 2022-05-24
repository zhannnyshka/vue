import { createRouter, createWebHistory } from 'vue-router'
import MyHome from "@/pages/MyHome";
import MyDoctors from "@/pages/MyDoctors";
import MyDiagnosis from "@/pages/MyDiagnosis";
import MyPatients from "@/pages/MyPatients";
import MyReception from "@/pages/MyReception";
import MyServices from "@/pages/MyServices";


const routes = [
    {
        path: '/',
        name: 'home',
        component: MyHome
    },
    {
        path: '/doctors',
        name: 'doctors',
        component: MyDoctors
    },
    {
        path: '/diagnosis',
        name: 'diagnosis',
        component: MyDiagnosis
    },
    {
        path: '/patients',
        name: 'patients',
        component: MyPatients
    },
    {
        path: '/reception',
        name: 'reception',
        component: MyReception
    },
    {
        path: '/services',
        name: 'services',
        component: MyServices
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router