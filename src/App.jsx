import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Background from './components/UI_Components/Background'
import PageCurtain from './components/UI_Components/PageCurtain'
import MainContainer from './components/MainContainer'
import './App.css'
import ProjectsPage from "./components/Pages/ProjectsPage.jsx";
import PageTransition from "./components/UI_Components/PageTransition.jsx";
import ExperiencePage from "./components/Pages/ExperiencePage.jsx";

function AppContent() {
    const location = useLocation()

    return (
        <div className='relative w-screen min-h-screen overflow-y-auto'>
            <Background />
            <PageCurtain />

            <AnimatePresence mode='wait'>
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={
                        <PageTransition>
                            <MainContainer />
                        </PageTransition>
                    } />
                    <Route path='/components/Pages/ProjectsPage' element={
                        <PageTransition>
                            <ProjectsPage />
                        </PageTransition>
                    } />
                    <Route path='/components/Pages/ExperiencePage' element={
                        <PageTransition>
                            <ExperiencePage />
                        </PageTransition>
                    } />
                    {/* add more routes here */}
                </Routes>
            </AnimatePresence>
        </div>
    )
}

export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}