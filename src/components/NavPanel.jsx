import React, {useState} from 'react';

import Content from './Content';
import List from './List';
import Nav from './Nav';

import navList from '../statics/navList';
import carrot from '../carrot.gif';

export default function NavPanel({currentPage}) {
    const [navResult, setNavResult] = useState();
    const [listResult, setListResult] = useState();

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
                    defaultResult={currentPage}
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
                <Content
                  navResult={navResult}
                  listResult={listResult}
                  defaultResult={currentPage}
                >
                </Content>
              </div>
            </div>
          </main>
        </div>
    );
}