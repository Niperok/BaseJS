'use strict';
let rows = [8, 7, 6, 5, 4, 3, 2, 1];
let cols = ["A", "B", "C", "D", "E", "F", "G", "H"];
let table = '';

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
    }
}

renderer.boardRender();