'use strict';
let rows = [8, 7, 6, 5, 4, 3, 2, 1];
let cols = ["A", "B", "C", "D", "E", "F", "G", "H"];
let table = '';
let tableRows;
let tableCols = [];

/** Рисует шахматную доску с нумерацией строк и столбцов
 *  в виде таблицы
 */
let renderer = {
    boardRender() {
        for (let y = 0; y <= rows.length; y++) {
            table += '<tr>';
            for (let x = -1; x < cols.length; x++) {
                if (x == -1) {
                    if (y == rows.length) {
                        table += '<td class="table__row white"></td>';
                    } else {
                        table += `<td class="table__row white">${rows[y]}</td>`;
                    }
                } else if (y == rows.length) {
                    table += `<td class="table__row white">${cols[x]}</td>`;
                } else if ((x + y) % 2 == 0) {
                    table += '<td class="table__row white"></td>';
                } else {
                    table += '<td class="table__row black"></td>';
                }
            }
            table += '</tr>';
        };
        document.body.insertAdjacentHTML('afterbegin', `<table class="table"><tbody>${table}</tbody></table>`);
    },

    /** Получает массив всех ячеек таблицы
     * 
     */
    getTable() {
        let i = 0;
        tableRows = document.querySelectorAll('tr');
        tableRows.forEach(function (tableRow) {
            tableCols[i] = tableRow.querySelectorAll('td');
            i++;
        })
    },

    /** Добавляет шахматные фигуры на доску
     * 
     */
    figureRender() {
        for (let y = 0; y <= rows.length; y++) {
            table += '<tr>';
            for (let x = -1; x < cols.length; x++) {
                if (y == 0 && x != -1) {
                    switch (x) {
                        case 0:
                        case 7:
                            tableCols[y][x + 1].insertAdjacentHTML('afterbegin', '<i class="fas fa-chess-rook blackFig"></i>');
                            break;
                        case 1:
                        case 6:
                            tableCols[y][x + 1].insertAdjacentHTML('afterbegin', '<i class="fas fa-chess-knight blackFig"></i>');
                            break;
                        case 2:
                        case 5:
                            tableCols[y][x + 1].insertAdjacentHTML('afterbegin', '<i class="fas fa-chess-bishop blackFig"></i>');
                            break;
                        case 3:
                            tableCols[y][x + 1].insertAdjacentHTML('afterbegin', '<i class="fas fa-chess-king blackFig"></i>');
                            break;
                        case 4:
                            tableCols[y][x + 1].insertAdjacentHTML('afterbegin', '<i class="fas fa-chess-queen blackFig"></i>');
                            break;
                    }
                }
                if (y == 1 && x != -1) {
                    tableCols[y][x + 1].insertAdjacentHTML('afterbegin', '<i class="fas fa-chess-pawn blackFig"></i>');
                }
                if (y == 6 && x != -1) {
                    tableCols[y][x + 1].insertAdjacentHTML('afterbegin', '<i class="fas fa-chess-pawn whiteFig"></i>');
                }
                if (y == 7 && x != -1) {
                    switch (x) {
                        case 0:
                        case 7:
                            tableCols[y][x + 1].insertAdjacentHTML('afterbegin', '<i class="fas fa-chess-rook whiteFig"></i>');
                            break;
                        case 1:
                        case 6:
                            tableCols[y][x + 1].insertAdjacentHTML('afterbegin', '<i class="fas fa-chess-knight whiteFig"></i>');
                            break;
                        case 2:
                        case 5:
                            tableCols[y][x + 1].insertAdjacentHTML('afterbegin', '<i class="fas fa-chess-bishop whiteFig"></i>');
                            break;
                        case 3:
                            tableCols[y][x + 1].insertAdjacentHTML('afterbegin', '<i class="fas fa-chess-king whiteFig"></i>');
                            break;
                        case 4:
                            tableCols[y][x + 1].insertAdjacentHTML('afterbegin', '<i class="fas fa-chess-queen whiteFig"></i>');
                            break;
                    }
                }
            }
        }

    }
}

renderer.boardRender();
renderer.getTable();
renderer.figureRender();
