import './App.css'
import MainContainer from "./components/MainContainer.jsx";

function App() {
    return (
        <div className='relative w-screen min-h-screen'>
            <div className='fixed inset-0 -z-50 bg-cover bg-center bg-[url(/mount2.jpg)]'></div>
            <MainContainer />
        </div>
    )
}

export default App