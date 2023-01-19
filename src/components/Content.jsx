import navTitles from "../statics/navTitles";
import navList from '../statics/navList';

import chobani from '../chobani.png';

const Content = ({navResult, listResult, defaultResult}) => {
    const createProjectURL = (slug) => {
        return `/projects/${slug}`;
    }; 

    if (navResult === navList.PROJECTS || (!navResult && defaultResult === navList.PROJECTS)) {
        const allProjectsHolder = navTitles.allProjects.map(project => {
            return <div key={project.slug} className="projectItem"><a href={createProjectURL(project.slug)}>{project.title}</a><img src={'https:' + project.thumbnail} width={80} height={80} alt=""></img><p>[{project.tags}]</p></div>
        });

        const webProjectsHolder = navTitles.webProjects.map(project => {
            return <div key={project.slug} className="projectItem"><a href={createProjectURL(project.slug)}>{project.title}</a><img src={'https:' + project.thumbnail} width={80} height={80} alt=""></img><p>[{project.tags}]</p></div>
        });

        const craftProjectsHolder = navTitles.craftProjects.map(project => {
            return <div key={project.slug} className="projectItem"><a href={createProjectURL(project.slug)}>{project.title}</a><img src={'https:' + project.thumbnail} width={80} height={80} alt=""></img><p>[{project.tags}]</p></div>
        });

        const hybridProjectsHolder = navTitles.hybridProjects.map(project => {
            return <div key={project.slug} className="projectItem"><a href={createProjectURL(project.slug)}>{project.title}</a><img src={'https:' + project.thumbnail} width={80} height={80} alt=""></img><p>[{project.tags}]</p></div>
        });

        if (listResult === "web") {
            return(
                <div className="content">
                    <div className="projectContainer">
                        {webProjectsHolder}
                    </div>
                </div>
            )
        } else if (listResult === "craft") {
            return(
                <div className="content">
                    <div className="projectContainer">
                        {craftProjectsHolder}
                    </div>
                </div>
            )
        }  else if (listResult === "hybrid") {
            return(
                <div className="content">
                    <div className="projectContainer">
                        {hybridProjectsHolder}
                    </div>
                </div>
            )
        } else {
            return(
                <div className="content">
                    <div className="projectContainer">
                        {allProjectsHolder}
                    </div>
                </div>
            )
        }
    } else {
        return (
            <div className="content">
                <div className="defaultContent">
                    <h2>What have I been up to?</h2>
                        <div className="contentList">
                            <div className="listItem">
                                <p><strong>Bouldering.</strong> (along with what feels like everyone else &#128514;) I miss playing a sport within a tight-knit community, so I've been trying to go more consistently.</p>
                            </div>
                            <div className="listItem pushRight">
                                <p><strong>Nurturing more energy and space for the people I love and the things I advocate for.</strong></p> 
                            </div>
                            <div className="listItem">
                                <p><strong>Chobani® Flip® Greek Yogurt.</strong> My favorite flavor has been Key Lime Crumble. I acknowledge that the image below does not depict that flavor.</p>
                                <img src={chobani} className="contentImg" width="30%" alt="Coffee Brownie Bliss flavored Chobani Yogurt." />
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Content;