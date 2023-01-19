import React from 'react';

export default function Nav({getNavInput}) {
    return (
        <div className="nav__container">
            <ul className="nav__bar">
                < li className="nav__item">
                    <a href="/projects">
                        [P] Projects
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/resume">
                        [R] Resume
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/github">
                        [G] Github
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/blog">
                        [B] Blog (from my time as a student)
                    </a>
                </li>
            </ul>

            <form className="nav__inputFormat" onSubmit={getNavInput}>
                <label htmlFor="choice">[8:88 PM] Enter your choice:  </label>
                <input id="nav__input" name="choice" type="text" />
            </form>
        </div>
    )
}