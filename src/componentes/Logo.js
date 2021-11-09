const Logo = () => {
    const mainLogo = document.createElement('div');
    mainLogo.className = 'textLogo';

    const appName = document.createElement('img');
    appName.src = './images/Logo.png';
    appName.className = 'nameLogo';
    mainLogo.appendChild(appName);
    return mainLogo;
};
export default Logo;