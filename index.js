let area = document.getElementById('area');
let cell = document.getElementsByClassName('cell');
let currentPlayer = document.getElementById('curPlayer')

let player = 'player_x';


let stat = {
    'x': 0,
    'o': 0,
    'd': 0
};

let winIndex = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

for (let i = 1; i <= 9; i++) { 
    area.innerHTML += "<div class='cell' pos=" + i + " ></div>";
}
for (let i = 0; i < cell.length; i++) { 
    cell[i].addEventListener('click', cellClick, false)
}
function cellClick() {
    let data = [];
    

    // Проверяем, есть ли у элемента класс "myClass"
    if (!this.classList.contains(player)) {
        this.classList.add(player);
        let img = document.createElement("img"); // Создаем новый элемент <img>
        img.src = `img/${player}.svg`; // Устанавливаем путь к изображению
        this.appendChild(img); // Добавляем изображение к текущему элементу
        console.log("Элемент имеет класс 'myClass'");
    } else {
        alert('ячейка занята')
        return;
    }

    // if (!this.innerHTML) {
    //     this.innerHTML = player;
    // } else { 
    //     alert('ячейка занята')
    //     return;
    // }

    // for (let i in cell) { 
    //     if (cell[i].innerHTML == player) { 
    //         data.push(parseInt(cell[i].getAttribute('pos')));
    //     }
    // }
    
    // if (CheckWin(data)) {
    //     stat[player] += 1;
    //     restart('Выиграл:' + player)
    // } else { 
    //     let draw = true;
    //     for (let i in cell) { 
    //         if (cell[i].innerHTML == '') { 
    //             draw = false;
    //         }
    //     }
    //     if (draw) { 
    //         stat.d += 1;
    //         restart('ничья')
    //     }
    // }
    player = player == 'player_x' ? 'player_o' : 'player_x';
    currentPlayer.innerHTML = player.toUpperCase();
}

    // function CheckWin(data) {
    //     for (let i in winIndex) { 
    //         let win = true;
    //         for (let j in winIndex[i]) {
    //             let id = winIndex[i][j];
    //             let ind = data.indexOf(id);

    //             if (ind == -1) {
    //                 win = false
    //             }
    //         }

    //         if (win) return true
    //     }
    //     return false
    // }

    // function restart(text) {
    //     alert(text);
    //     updateStat();
    //     for (let i =0 ; i <= cell.length; i++) {
    //         cell[i].innerHTML = '';
    //     }
        
    // }
    // function updateStat() {
    //     document.getElementById('sX').innerHTML = stat.x;
    //     document.getElementById('sO').innerHTML = stat.o;
    //     document.getElementById('sD').innerHTML = stat.d;
    // }

