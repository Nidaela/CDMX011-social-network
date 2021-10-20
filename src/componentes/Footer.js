const Footer = () => {
    const legal = document.createElement('div');
    legal.className = 'legalArea';
    legal.textContent = 'Todos los derechos son reservados';
    return legal;
}
export default Footer;