import './App.css'
import MainContainer from "./components/MainContainer.jsx";

function App() {
    return (
        <div className='relative w-screen min-h-screen overflow-y-auto'>
            <div className='fixed inset-0 -z-50 bg-cover bg-center bg-[url(/mount2.jpg)]'></div>
            <div className='m-auto'>
            <MainContainer />
            </div>
        </div>
    )
}

export default App