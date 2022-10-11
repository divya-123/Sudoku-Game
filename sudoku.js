let numSelected = null;
let tileSelected = null;

let errors = 0;

let board = [
    "----14--3",
    "--32---1-",
    "-2198-4--",
    "28--95--4",
    "---428---",
    "9--67--25",
    "--5-4678-",
    "-4---26--",
    "6--83----"
];

const solution = [
    "869514273",
    "453267918",
    "721983456",
    "287395164",
    "516428397",
    "934671825",
    "395146782",
    "148752639",
    "672839541"
];

window.onload = function(){
    setGame();
};

function setGame() {
    //Digits 1-9
    for (let i=1; i<=9; i++){
        // <div id="1" class="number">1</div>
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
        number.addEventListener("click", selectNumber);
    }

    //Board 9X9
    for (let r=0; r<9; r++){
        for (let c=0; c<9; c++){
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            if(board[r][c]!="-"){
            tile.innerText = board[r][c];
            tile.classList.add("tile-start");
            }
            if(r==2 || r==5 ){
                tile.classList.add("horizontal-line");
            }
            if(c==2 || c==5 ){
                tile.classList.add("vertical-line");
            }
            document.getElementById("board").append(tile);
            tile.addEventListener("click", selectTile);
        }
    }
}

function selectNumber() {
    if(numSelected != null){
        numSelected.classList.remove("number-selected");
    }
    numSelected = this;
    numSelected.classList.add("number-selected");
}

function selectTile() {
    
    if(numSelected){
        tileSelected = this;
        if(tileSelected.innerText != ""){
            return;
        }
   

    let coords = this.id.split("-");
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if(solution[r][c] == numSelected.id){
        tileSelected.innerText = numSelected.id;
    }
    else {
        errors+=1;
        document.getElementById("errors").innerText = errors;
    }
    }

}