const MainContent = () => {
    const container = document.createElement('section');
    container.className = 'content';

   /* const networkImg = document.createElement('img');
    networkImg.className = 'mainImage';
    networkImg.src = './images/Logo.png';
    container.appendChild(networkImg);*/

    const about = document.createElement('h3');
    about.className = 'description';
    about.textContent = 'Conecta 🟢 Descubre 🟢 Crea';
    container.appendChild(about);

    const btnLogin = document.createElement('button');
    btnLogin.className = 'startbtn';
    btnLogin.textContent = 'Iniciar Sesión';
    container.appendChild(btnLogin);

    const newUser = document.createElement('h5');
    newUser.className = 'account';
    newUser.textContent = '¿Aun no tienes cuenta? Registrate aquí';
    container.appendChild(newUser);

    return container;
}

export default MainContent;
