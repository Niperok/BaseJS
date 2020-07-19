window.addEventListener('load', () => {
    const settings = new Settings();
    const board = new Board();
    const controls = new Controls();

    board.init(settings);


    board.renderBoard();
    board.getCells();
    board.plantBombs();
    board.getBombCells();
    board.plantNumbers();

    document.oncontextmenu = function () { return false };
    controls.init(settings, board);
    controls.getControls();

}

);