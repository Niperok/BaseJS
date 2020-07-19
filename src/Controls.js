class Controls {
    /** 
     * Инициализация класса
     * @param {object} settings 
     */
    init(settings, board) {
        this.settings = settings;
        this.board = board;
        this.text = document.querySelector('.text');
    }

    /**
     * Назначает слушатели событий на ячейки
     */
    getControls() {
        this.board.cellsEl.forEach(cell => {
            cell.addEventListener('click', this.clickFn.bind(this));
            cell.addEventListener('contextmenu', this.rightClickFn.bind(this));
        });
    }

    /**
     * Вызывает методы для правого клика мыши
     * @param {MouseEvent} event 
     */
    rightClickFn(event) {
        this.flagPlant(event.currentTarget);
        if (this.isGameWon()) {
            this.text.insertAdjacentHTML('afterbegin', 'Вы выиграли!')
        };
    }

    /**
     * Вызывает методы для левого клика мыши
     * @param {MouseEvent} event 
     */
    clickFn(event) {
        this.openCell(event.currentTarget);
    }

    /**
     * Открывает необходимые ячейки
     * @param {Node} cell 
     */
    openCell(cell) {
        if (cell.classList.contains('close')) {
            cell.classList.remove('close');
            if (cell.classList.contains('bomb')) {
                this.text.insertAdjacentHTML('afterbegin', 'Вы проиграли!')
                cell.removeChild(cell.firstChild);
                cell.classList.add('blast');
                cell.insertAdjacentHTML('afterbegin', '<i class="fas fa-fire-alt"></i>');
                this.openAllCells();
            } else if (!cell.classList.contains('number')) {
                (this.board.getNeighborCells(cell)).forEach(nextCell => {
                    this.openCell(nextCell);
                });
            }
        }
    }

    /**
     * Устнавливает / удаляет флаг
     * @param {Node} cell 
     */
    flagPlant(cell) {
        if (!cell.classList.contains('flag')) {
            cell.classList.add('flag');
            cell.insertAdjacentHTML('afterbegin', '<i class="fas fa-flag-checkered flag-i"></i>');
            this.board.flagsCount++;
        } else {
            cell.classList.remove('flag');
            cell.removeChild(cell.firstChild);
            this.board.flagsCount--;
        }
    }

    /**
     * Открывает все ячейки
     */
    openAllCells() {
        this.board.cellsEl.forEach(cell => {
            cell.classList.remove('close');
        })
    }

    /**
     * Проверяет, выиграна ли игра
     */
    isGameWon() {
        return ((this.board.flagsCount == this.board.bombCellsEl.length) && this.board.bombCellsEl.every(cell => {
            return cell.classList.contains('flag');
        }));
    }
}