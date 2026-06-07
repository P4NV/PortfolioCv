import './App.css'
import MainContainer from "./components/MainContainer.jsx";

function App() {

  return (
      <div className='relative w-screen h-screen'>
          <div className='absolute inset-0 -z-50 bg-cover bg-[url(/public/mount2.jpg)]'></div>
          <div className='flex justify-center items-center w-full h-full'>
              <MainContainer />
          </div>
      </div>
  )
}

export default App
