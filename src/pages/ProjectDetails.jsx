import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {createClient} from 'contentful';
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import List from '../components/List';
import Nav from '../components/Nav';

import navList from '../statics/navList';
import carrot from '../carrot.gif';

const contentfulClient = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY
});

const getSinglePost = async (slug) => {
    try {
        let entry; 
        const entries = await contentfulClient.getEntries({
            content_type: "portfolioWork",
        });

        if (entries) {
            let items = entries.items;
            entry = items.find(item => item.fields.slug === slug);  
        }

        return entry.fields;
    } catch (error) {
        console.log(error);
    }
}

export default function ProjectDetails() {
    const [portfolioWork, setPortfolioWork] = useState(null);
    const id = useParams();
    const slug = id.slug;

    const [navResult, setNavResult] = useState();
    const [listResult, setListResult] = useState();

    useEffect(() => {
        getSinglePost(slug).then((res) => {
            setPortfolioWork(res);
        });
    }, [slug]);

    const getNavInput = (e) => {
        e.preventDefault();
        let value = e.target[0].value;

        let isWorks = value === "P" || value ==="p" || value === "Projects" || value === "projects";
        let isResume = value === "R" || value ==="r" || value === "Resume" || value === "resume";
        let isGithub = value === "G" || value ==="g" || value === "Github" || value === "github";
        let isStudentBlog = value === "B" || value ==="b" || value === "blog" || value === "Blog";
        let isName = value === "Rachel" || value === "rachel";

        let returnValue;

        if (isWorks) {
            returnValue = navList.PROJECTS;
        } else if (isResume) {
            returnValue = navList.RESUME;
        } else if (isGithub) {
            returnValue = navList.GITHUB;
        } else if (isStudentBlog) {
            returnValue = navList.BLOG;
        } else if (isName) {
        returnValue = navList.NAME;
        } else {
        returnValue = navList.ERROR;
        }

        setNavResult(returnValue);

        return returnValue;
    }

    const onListClick = (e) => {
      let value = e.target.innerText;

      setListResult(value);

      return value;
    }

    const options = {
        renderMark: {
            [MARKS.BOLD]: (text) => <b>{text}</b>
        },
        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => {
                if (children[0] !== "") {
                    return <p>{children}</p>;
                }
            },
            [BLOCKS.EMBEDDED_ASSET]: (node, children) => <img src={`https://${node.data.target.fields.file.url}`} height={node.data.target.fields.file.details.image.height} width={node.data.target.fields.file.details.image.width} alt={node.data.target.fields.description}></img>
        }
    };

    if (portfolioWork !== null) {
        return (
            <div className="home__container">
                <main>
                    <h1 className="home__title">
                        <a href="/">Rachel Lim.</a> 임아름. she/her.
                    </h1>
            
                    <div className="home__divider">
                        <div className="home__navHolder">
                            <div className="home__consoleHolder">
                                <Nav
                                    getNavInput={getNavInput}
                                ></Nav>
                                <List
                                    navResult={navResult}
                                    onListClick={onListClick}
                                >
                                </List>
                            </div>
                
                            <div className="home__about">
                                <p> I craft with humor and vulnerability, and love sharing a good giggle. 🌈 Currently working within the educational technology space as a developer and creative at heart.</p>
                                <p>I also enjoy running, historical dramas, and trivia.</p>
                            </div>
                    
                            <img src={carrot} className="home__logo" alt="An animated carrot running with hairy leg." />
                    
                            <footer>
                                <p>2023 ✨ Crafted with Care</p>
                            </footer>
                        </div>
                
                        <div className="home__contentHolder">
                            <div className="projectPage">
                                <div className="projectTitle">
                                    <h1>
                                        {portfolioWork.title}
                                    </h1>

                                    <p>[{portfolioWork.materials}]</p>
                                </div>

                                <div className="richText">
                                    {documentToReactComponents(portfolioWork.body, options)}
                                </div>

                                <div className="backLink">
                                    <a href="/projects">
                                        👈 Back to Projects
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}
