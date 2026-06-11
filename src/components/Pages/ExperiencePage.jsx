import Background from "../UI_Components/Background.jsx";
import PageTransition from "../UI_Components/PageTransition.jsx";
import BackButton from "../UI_Components/BackButton.jsx";

function ExperiencePage() {
    return (
        <PageTransition>
            <div className='relative w-screen min-h-screen overflow-y-auto'>
                <Background/>
                <div className='w-screen min-h-screen flex justify-center items-center '>
                    <div className='page border glass rounded-4xl p-10'>
                        <div className=''>
                            <BackButton/>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}

export default ExperiencePage;