import './App.css'
import MainContainer from "./components/MainContainer.jsx";

function App() {
    return (
        <div className='relative w-screen min-h-screen'>
            <div className='fixed inset-0 -z-50 bg-cover bg-center bg-[url(/public/mount2.jpg)]'></div>
            <div className='flex justify-center items-center w-full min-h-screen py-8 md:h-screen md:py-0'>
                <MainContainer />
            </div>
        </div>
    )
}

export default App