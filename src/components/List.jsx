import navList from '../statics/navList';

const List = ({navResult, onListClick, defaultResult}) => {
    if (navResult === navList.GITHUB || (!navResult && defaultResult === navList.GITHUB)) {
        return(
            <div className="list">
                <div className="listContent">
                    <p>Many of my projects live within <a href="https://github.com/raclim">my Github</a>.</p> 
                    <p className="tidbit">I love dogs, so my profile image is a shiba inu holding shiba inus.</p>
                </div>
            </div>
        )
    } else if (navResult === navList.PROJECTS || (!navResult && defaultResult === navList.PROJECTS)) {
        const categories = [
            "web",
            "craft",
            "hybrid", 
            "all"
        ];

        let namesList = categories.map((title) => {
            return <li key={title}><a onClick={onListClick}>{title}</a></li>;
        });
            return(
                <div className="list">
                    <ul>
                        {namesList}
                    </ul>
                </div>
            )
    } else if (navResult === navList.RESUME || (!navResult && defaultResult === navList.RESUME)) {
        return(
            <div className="list">
                <div className="listContent">
                    <p><a href="https://drive.google.com/file/d/13rVSc8YAzbk_JYJsq7exMFY6w5MPBd5A/view?usp=sharing" target="blank">Rachel's Resume</a></p> 
                    <p><a href="https://www.linkedin.com/in/rachel-lim-324a8ab6/">LinkedIn</a></p>
                    <p className="tidbit">I used to spend summer vacations working at an ice cream store. They specialized in matcha flavored products and teaware!</p>
                </div>
            </div>
        )
    } else if (navResult === navList.BLOG || (!navResult && defaultResult === navList.BLOG)) {
        return(
            <div className="list">
                <div className="listContent">
                    <p><a href="https://raclims.wordpress.com">My student blog</a> documents my experiments and projects, created during my time as a master's candidate at ITP.</p> 
                    <p className="tidbit">My go-to snack on campus was CHEEZ-IT.</p>
                </div>
            </div>
        )
    } else if (navResult === navList.NAME || (!navResult && defaultResult === navList.NAME)) {
        return(
            <div className="list">
                <div className="listContent">
                    <p>Yes that is my name!</p> 
                    <p className="tidbit">I love sushi</p>
                </div>
            </div>
        )
    } else if (navResult === navList.ERROR || (!navResult && defaultResult === navList.ERROR)) {
        return(
            <div className="list">
                ERROR: unidentified value huehue
            </div>
        )
    } else {
        return (
            <div className="list"></div>
        )
    }
}

export default List;