import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from './pages/LandingPage.vue'
import Login from './pages/Login.vue'
import Register from './pages/Register.vue'
import DashboardLayout from './layouts/DashboardLayout.vue'
import DashboardHome from './pages/dashboard/Home.vue'
import AssignmentAssistant from './pages/dashboard/AssignmentAssistant.vue'
import ResearchAssistant from './pages/dashboard/ResearchAssistant.vue'
import PlagiarismChecker from './pages/dashboard/PlagiarismChecker.vue'
import ThesisBuilder from './pages/dashboard/ThesisBuilder.vue'

const routes = [
    { path: '/', component: LandingPage },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    {
        path: '/dashboard',
        component: DashboardLayout,
        children: [
            { path: '', component: DashboardHome },
            { path: 'assignments', component: AssignmentAssistant },
            { path: 'research', component: ResearchAssistant },
            { path: 'plagiarism', component: PlagiarismChecker },
            { path: 'thesis-builder', component: ThesisBuilder }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
