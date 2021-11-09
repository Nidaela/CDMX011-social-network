import MainContent from './MainContent.js';
import Logo from './Logo.js';
import Footer from './Footer.js';
import ImgMain from './ImgMain.js';

const Login = () => {
    const content = document.createElement('div');
    content.className = 'start';

    content.className = 'description';
    content.appendChild(Logo());
    content.appendChild(ImgMain());
    content.appendChild(MainContent());
    content.appendChild(Footer());
    
    return content;
};

export default Login;
