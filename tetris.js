let board, piece, motion

board = {
    container: document.getElementsByClassName('board'),
    size:{ width: 10, height: 20 },
    body:[],
    init:() => {
        let line;
        
        while(board.container.children.length > 0){ // 초기화
            board.container.children[0].remove();
        }
        for(let x = 0; x < board.size.height + 2; x++){
            board.body[x] = [];
            line  = document.createElement('div'); // 보드에 라인 추가
            board.appendChild(line);
            for(let y = 0; y < board.size.width + 4; y++){ 
                board.body[x][y] = y < 2 || y > board.size.width + 1 ? 1 : 0 // 허수 부분: 벽부분에 1을 설정함
                line.appendChild(document.createElement('span')); // 라인에 셀 추가


            }
        }
    },
    drawCell:() => {

    }
}

piece = {
    position: { x: 0, y: 0 },
    shape: ["I", "O", "T", "J", "L", "N", "S"],
    color: {
        I: '#00ffff',
        O: '#ffff00',
        T: '#ff00ff',
        J: '#0066ff',
        L: '#ff9933',
        N: '#ff3300',
        S: '#00e600'
    },
    getBlock:() => {
        let rChoice = null;

        rChoice = Math.floor(Math.random() * piece.shape.length); // 랜덤 블럭 선택
        console.log('rChoice: '+rChoice);
        //board.drawCell();
    },
    rotate:() => { // 블록 회전 함수

    },
    stepDown:() => { // 블록을 한칸 아래로 이동시키는 함수
        let newY = piece.position.y + 1;
    }
} // End of block

motion = {
    start:() => { 
        let intervalId = null;

        setTimeout(() => {
            clearInterval(intervalId);
            intervalId = setInterval(piece.getBlock, 200); // random 으로 블럭을 계속 생성한다.
        }, 3000);
    }
} // End of motion

init = () => {
    motion.start();
} // End of init