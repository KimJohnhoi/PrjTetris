let board = {
    container: document.getElementsByClassName('board'),
    size:{
        height:20,
        width:10
    },
    body:[],
    init:() => {
        let line;
        while(board.container.children.length > 0){ // 컨테이너 비우기
            board.container.children[0].remove();
        }
        for(let x = 0 ; x < board.size.height + 2 ; x++){
            board.body[x] = [];
            line = document.createElement('div'); // 보드에 한 줄 추가
            board.container.appendChild(line); // 보드에 라인 추가
            for(let y = 0 ; y < board.size.width + 4 ; y++){
                board.body[x][y] = y < 2 || y > board.size.width + 1 ? 1 : 0; // 벽부분에 1을 설정함
                line.appendChild(document.createElement('span')); // 라인에 셀 추가
            }
        }
    },
    drawCell:() => {
        let line, cell
        for(let x = 0 ; x < board.size.height ; x++){
            line = board.container.children[x];
            for(let y = 0 ; y < board.size.width ; y++){
                cell = line.children[y + 2];
                // 보드의 2차원 배열을 참고하여 셀의 상태를 업데이트
            }
        }
    }
};

let piece = {
    position:{
        x:0,
        y:0
    },
    shape: [],
    rotate: () => { // 블럭을 회전하는 함수

    },
    stepDown: () => { // 블럭을 한 칸 아래로 이동시키는 함수
        let newY = piece.position.y + 1;
    }
}