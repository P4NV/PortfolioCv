import Card from "./UI_Components/Card.jsx";
import ProfileCard from "./Cards/ProfileCard.jsx";
import SkillsCard from "./Cards/SkillsCard.jsx";
import ProjectsCard from "./Cards/ProjectsCard.jsx";
import ExperienceCard from "./Cards/ExperienceCard.jsx";
import TerminalCard from "./Cards/TerminalCard.jsx";

export default function MainContainer() {
    return (
        <div className='w-screen min-h-screen flex justify-center items-center'>
            <div className='bento'>
                {/* Big profile card — spans 8 cols, 4 rows */}
                <Card className='profile-card p-10 max-xl:p-5 max-sm:p-2'>
                    <ProfileCard />
                </Card>

                {/* Skills — spans 4 cols, tall (4 rows) */}
                <Card className='skills-card p-10 max-xl:p-5 max-sm:p-2'>
                    <SkillsCard/>
                </Card>

                {/* 3 smaller cards on the right */}
                <Card className='small-card-a p-5 max-sm:px-2 max-sm:py-1'>
                    <ProjectsCard/>
                </Card>

                <Card className='small-card-b p-5 max-sm:px-2 max-sm:py-1'>
                    <ExperienceCard/>
                </Card>

                <Card className='small-card-c overflow-clip'>
                    <TerminalCard/>
                </Card>

            </div>
        </div>
    )
}