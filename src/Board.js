class Board {
    constructor() {
        this.boardEl = document.querySelector('tbody');
        this.boardContent = "";
        this.flagsCount = 0;
    }

    /** 
     * Инициализация класса
     * @param {object} settings 
     */
    init(settings) {
        this.settings = settings;
    }

    /** 
     * Метод генерирует и выводит на экран пустое 
     * игровое поле с закрытыми ячейками
     */
    renderBoard() {
        for (let y = 0; y < this.settings.rowsCount; y++) {
            this.boardContent += '<tr>';
            for (let x = 0; x < this.settings.colsCount; x++) {
                this.boardContent += `<td data-x="${x}" data-y="${y}" class="close"></td>`;
            }
            this.boardContent += '</tr>';
        }
        this.boardEl.insertAdjacentHTML('afterbegin', this.boardContent);
    }

    /** 
     * Метод создаёт коллекцию всех ячеек игрового поля
     */
    getCells() {
        this.cellsEl = document.querySelectorAll('td');
    }

    /** 
     * Размещает бомбы на игровом поле
     */
    plantBombs() {
        for (let i = 0; i < this.settings.bombsCount; i++) {
            let emptyCellsEl = this.getEmptyCells();
            let randomEmptyCell = this.getRandomTd(emptyCellsEl);
            randomEmptyCell.classList.add('bomb');
            randomEmptyCell.insertAdjacentHTML('afterbegin', '<i class="fas fa-bomb"></i>');
        }
    }

    /** 
     * Размещает цифры-подсказки на игровом поле
     */
    plantNumbers() {
        let emptyCellsEl = this.getEmptyCells();
        emptyCellsEl.forEach(cell => this.calculateNumbers(cell));
    }

    /**
     * Возвращает массив ячеек игрового поля, не содержащих 
     * бомбы.
     */
    getEmptyCells() {
        return Array.from(this.cellsEl).filter(cell => !cell.classList.contains('bomb'));
    }

    /**
     * Метод создаёт массив всех ячеек с бомбами
     */
    getBombCells() {
        this.bombCellsEl = Array.from(document.querySelectorAll('.bomb'));
    }

    /**
     * Возвращает случайную ячейку из переданного массива
     * @param {Array | NodeList} cellsEl 
     */
    getRandomTd(cellsEl) {
        let randomCell = cellsEl[Math.floor(Math.random() * cellsEl.length)];
        return randomCell;
    }

    /**
     * Считает количество бомб в соседних клетках и 
     * выставляет полученное число в ячейку
     * @param {Node} cell 
     */
    calculateNumbers(cell) {
        let count = 0;
        let neighborCells = this.getNeighborCells(cell);
        neighborCells.forEach(function (cell) {
            if (cell.classList.contains('bomb')) {
                count++;
            }
        });
        if (count > 0) {
            cell.classList.add('number');
            cell.insertAdjacentHTML('afterbegin', `${count}`);
        }
    }

    /**
     * Возвращает массив с соседними ячейками переданной 
     * ячейки
     * @param {Node} cell 
     */
    getNeighborCells(cell) {
        let neighborCells = [];
        let x = +cell.dataset.x;
        let y = +cell.dataset.y;
        if (x - 1 >= 0) {
            neighborCells.push(this.getCellDataset((x - 1), y));
            if (y - 1 >= 0) {
                neighborCells.push(this.getCellDataset((x - 1), (y - 1)));
            }
            if (y + 1 < this.settings.rowsCount) {
                neighborCells.push(this.getCellDataset((x - 1), (y + 1)));
            }
        }
        if (x + 1 < this.settings.colsCount) {
            neighborCells.push(this.getCellDataset((x + 1), y));
            if (y - 1 >= 0) {
                neighborCells.push(this.getCellDataset((x + 1), (y - 1)));
            }
            if (y + 1 < this.settings.rowsCount) {
                neighborCells.push(this.getCellDataset((x + 1), (y + 1)));
            }
        }
        if (y - 1 >= 0) {
            neighborCells.push(this.getCellDataset(x, (y - 1)));
        }
        if (y + 1 < this.settings.rowsCount) {
            neighborCells.push(this.getCellDataset(x, (y + 1)));
        }
        return neighborCells;
    }

    /**
     * Если ячейка с переданными координатами есть, то возвращается ее объект,
     * а иначе null.
     * @param {{x: number, y: number}} position объект с координатами.
     * @returns {HTMLTableCellElement|null} объект ячейки если есть, в противном случае null.
     */
    getCellDataset(x, y) {
        return document.querySelector(`[data-x="${x}"][data-y="${y}"]`);
    }

}