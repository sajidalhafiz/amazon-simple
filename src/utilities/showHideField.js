const handleShowHide = (event) => {
    const showHide = event.target.textContent;
    if (showHide == 'show') {
        document.getElementById('password').type = 'text';
        event.target.textContent = 'hide';
        return;
    }
    document.getElementById('password').type = 'password';
    event.target.textContent = 'show';
    return;
}

export default handleShowHide;