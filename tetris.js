let board, piece, motion

board = {
    no: null,
    container: null,
    size: { width: 10, height: 20 },
    body: [],
    init:() => {
        let line;

        while(board.container.children.length > 0){ // 컨테이너비우기
            board.container.children[0].remove();
        }
        for(let x = 0; x < board.size.height + 2; x++){
            board.body[x] = [];
            if(x < 20) line = document.createElement('div');
            board.container.appendChild(line); // 보드에 한 줄 추가 
            for(let y = 0; y < board.size.width + 4; y++){
                board.body[x][y] = y < 2 || y > board.size.width + 1 ? 1 : 0  // 벽부분(허수)에 1을 설정
                if(y < 10 && x < 20) line.appendChild(document.createElement('span')); //라인에 셀 추가
            }
        }
    }, // End of init()
    getCell:() => {
        no = piece.setNew(); // 랜덤 블록의 값을 가져온다
        board.drawCell();
    }, //End of getCell()
    drawCell:() => {
        let line, cell;
        let tempX, tempY, temp // 랜덤 블록 보드 시작위치에 나타낼 좌표

        for(let x = 0; x < board.size.height; x++){
            line = board.container.children[x];
            for(let y = 0; y < board.size.width; y++){
                cell = line.children[y];
                // console.log(`x:${x}/y:${y}`)
                // 보드의 2차원 배열을 참고하여 셀의 상태를 업데이트
                if(board.body[x+2][y+2] > 0) cell.className = "cell-" + (board.body[x+2][y+2]);
                else cell.className = "";
            }
        }
        // 드롭되는 랜덤블록 보드에 맵핑
        for(let i = 0; i < piece.shape.length; i++){
            tempX = i + 2;
            for(let j = 0; j < piece.shape.length; j++){
                tempY = j + 3;
                temp = tempX + "" + tempY;
                temp = temp * 1;
                cell = document.getElementsByTagName('span')[temp];

                if(piece.shape[i][j] > 0) { 
                    cell.className = "cell-" + (no+1);
                }
            }
        }
    } // End of drawCell()
}

piece = {
    position: { 
        x: 0, 
        y: 0 
    },
    shape: [],
    roate: () => { // 블럭 회전
       let n = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
       n[0][0] = piece.shape[0][3];
       n[0][1] = piece.shape[1][3];
       n[0][2] = piece.shape[2][3];
       n[0][3] = piece.shape[3][3];
       n[1][0] = piece.shape[0][2];
       n[1][1] = piece.shape[1][2];
       n[1][2] = piece.shape[2][2];
       n[1][3] = piece.shape[3][2];
       n[2][0] = piece.shape[0][1];
       n[2][1] = piece.shape[1][1];
       n[2][2] = piece.shape[2][1];
       n[2][3] = piece.shape[3][1];
       n[3][0] = piece.shape[0][0];
       n[3][1] = piece.shape[1][0];
       n[3][2] = piece.shape[2][0];
       n[3][3] = piece.shape[3][0];
       piece.shape = n;
    },
    stepDown:() => { // 블럭 한칸 아래로 이동
        let newY = piece.position.y + 1;
    }, // End of stepDown()
    setNew:() => {
        let no, blocks = [
            [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]], // "I" - 0 
            [[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]], // "O" - 1
            [[0,0,0,0],[1,1,1,0],[0,1,0,0],[0,0,0,0]], // "T" - 2
            [[0,0,0,0],[0,0,1,0],[0,0,1,0],[0,1,1,0]], // "J" - 3
            [[0,0,0,0],[0,1,0,0],[0,1,0,0],[0,1,1,0]], // "L" - 4
            [[0,0,0,0],[1,1,0,0],[0,1,1,0],[0,0,0,0]], // "N" - 5
            [[0,0,0,0],[0,1,0,0],[0,1,1,0],[0,0,1,0]]  // "S" - 6
        ]

        no = Math.floor(Math.random() * blocks.length); // 랜덤으로 블럭 뽑기
        piece.position.x = 3;
        piece.shape = blocks[no];

        return no;
    } // End of setNew()
}

motion = {
    start:() => { 
        let intervalId = null;

        setTimeout(() => {
            clearInterval(intervalId);
            intervalId = setInterval(piece.setNew, 200); // random 으로 블럭을 계속 생성한다.
        }, 3000);
    } // End of start()
}

init = () => {
    //motion.start();
    board.container = document.getElementsByClassName('board')[0];
    
    let el, els;
    els = document.getElementsByClassName('wrap')[0].getElementsByClassName('button')[0];
    el = els.children[1]; 

    el.onclick = e => { // 회전버튼을 클릭했을 시
        piece.roate();
        board.drawCell();
    }
} // End of init