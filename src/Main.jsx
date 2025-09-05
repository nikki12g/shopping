import Header from './Header.jsx';
import Banner from './Banner.jsx';
import Components from './Components.jsx';
import WomenComponents from './WomenComponents.jsx';
import KidsComponents from './KidsComponents.jsx';
import Footer from './Footer.jsx';
import {Men} from './object.js';
import {Women} from './objectwomen.js';
import {Kids} from './objectkids.js';
import {useState} from 'react';
const Main=()=>
{
    const [men,setMen]=useState(Men);
    const [women,setWomen]=useState(Women);
    const [kids,setKids]=useState(Kids);

    return(
        <div>
            <Header/>
            <Banner/>
            <Components gents={men}/>
            <WomenComponents women={women}/>
            <KidsComponents kids={kids}/>
            <Footer/>
        </div>
        )
    }
export default Main;