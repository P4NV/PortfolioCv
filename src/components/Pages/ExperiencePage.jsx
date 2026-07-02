import Background from "../UI_Components/Background.jsx";
import PageTransition from "../UI_Components/PageTransition.jsx";
import BackButton from "../UI_Components/BackButton.jsx";

function ExperiencePage() {
    return (
        <PageTransition>
            <div className='relative w-screen h-screen overflow-y-auto'>
                <Background/>
                <div className='w-screen h-screen flex justify-center items-center'>
                    <div className='page shadow-xl glass rounded-4xl p-10 h-full'>
                        <div className='flex justify-between h-fit'>
                            <h1 className='text-5xl text-white tracking-tighter uppercase font-bold
                                           max-lg:text-4xl max-md:text-3xl'>
                                My Experience as a Programer
                            </h1>
                            <BackButton/>
                        </div>
                        <div className='flex justify-between h-full p-10 gap-10'>
                            <section className='max-w-2/5 text-center '>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium blanditiis consequuntur culpa cumque delectus deleniti dicta dolore dolorum ea eos eveniet expedita fuga illo illum impedit iusto labore laboriosam laudantium maxime, molestiae nemo neque porro possimus quasi quia quisquam quod rem repellat reprehenderit repudiandae sed suscipit unde veniam vitae voluptatem voluptatum. A dolor doloribus esse, et itaque, nihil nostrum obcaecati officia omnis porro quidem recusandae, saepe voluptatem. Autem doloremque, excepturi harum hic id odio voluptatum. Quae, quia quo? Dolore, eaque, est eveniet expedita ipsa iste labore laboriosam libero magni nemo nisi, nobis nostrum officia praesentium repellat rerum sapiente! Quibusdam.
                                </p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </PageTransition>
    )
}

export default ExperiencePage;