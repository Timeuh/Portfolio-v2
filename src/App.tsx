import {createContext, useState} from 'react';
import {lang, theme} from '@/utils/AppTypes';
import Home from '@/components/home/Home';
import Navbar from '@/components/Navbar';
import {isLight} from '@/utils/AppFuncs';
import About from '@/components/about/About';
import Experience from '@/components/experience/Experience';
import Skills from '@/components/skills/Skills';
import Projects from '@/components/projects/Projects';
import Contact from '@/components/contact/Contact';

// context for app theme
export const ThemeContext = createContext<theme>('light');
// context for app langage
export const LangContext = createContext<lang>('fr');

export default function App() {
  // create and init theme context
  const [theme, setTheme] = useState<theme>('light');
  // create and init lang context
  const [lang, setLang] = useState<lang>('fr');

  // function to change theme in components
  const changeTheme = () => {
    isLight(theme) ? setTheme('dark') : setTheme('light');
  };

  // function to change lang in components
  const changeLang = () => {
    lang === 'fr' ? setLang('en') : setLang('fr');
  };

  return (
    <div id='App' className={'font-Wix'}>
      <ThemeContext.Provider value={theme}>
        <LangContext.Provider value={lang}>
          <Navbar changeTheme={changeTheme} changeLang={changeLang}/>
          <Home />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </LangContext.Provider>
      </ThemeContext.Provider>
    </div>
  );
}
