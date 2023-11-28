let area = document.getElementById('area');
let cell = document.getElementsByClassName('cell');
let currentPlayer = document.getElementById('curPlayer')


let player = 'player_x';


let stat = {
    'player_x': 0,
    'player_o': 0,
    'draw': 0
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
    

    
    if (!this.classList.contains(player)) {
        this.classList.add(player);
        let img = document.createElement("img"); 
        img.src = `img/${player}.svg`; 
        img.width = 150;
        img.height = 150;
        img.classList.add('img-player');
        this.style.backgroundImage = 'none'
        this.appendChild(img); 
        
    } else {
        alert('ячейка занята')
        return;
    }

    for (let cellElement of cell) {
        if (cellElement.classList.contains(player)) {
            data.push(parseInt(cellElement.getAttribute('pos')));
        }
    }
    console.log(data);
    
    
    if (CheckWin(data)) {
        stat[player] += 1;
        restart('Выиграл:' + player)
    }
    //else { 
        //      let draw = true;
        //      for (let i in cell) {
                
        //      }
        
        //     if (draw) {
        //         stat.draw += 1;
        //        restart('ничья')
        //   }
        // }
    player = player == 'player_x' ? 'player_o' : 'player_x';
    currentPlayer.innerHTML = player.toUpperCase();
 
   
}

function CheckWin(data) {
    for (let i in winIndex) { 
        let win = true;
        for (let j in winIndex[i]) {
            let id = winIndex[i][j];
            let ind = data.indexOf(id);

            if (ind == -1) {
                win = false
            }
        }

        if (win) return true
    }
    return false
}

    function restart(text) {
        alert(text);
        updateStat()
        let images = document.getElementsByClassName('img-player');
        
        while (images.length > 0) {

            let parentCell = images[0].parentNode;
            parentCell.removeChild(images[0]);
            parentCell.classList.remove('player_x');
            parentCell.classList.remove('player_o');
            parentCell.style.backgroundImage = 'url(../img/Neon-border.svg';
        }

    }
    function updateStat() {
        document.getElementById('sX').innerHTML = stat.player_x;
        document.getElementById('sO').innerHTML = stat.player_o;
        document.getElementById('sD').innerHTML = stat.draw;
    }




