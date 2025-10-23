let block, motion

block = {
    blockName: ["I", "O", "T", "J", "L", "N", "S"],
    blockFill: {
        O: [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]
    },
    blockColor: {
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

        rChoice = Math.floor(Math.random() * block.blockName.length); // 랜덤 블럭 선택
        console.log('rChoice: '+rChoice);
        block.drawBlock(rChoice);
    },
    drawBlock: x => {
        let rName = null, els = document.getElementsByClassName('play').getElementsByClassName('dropblock')[0];
        
        rName = block.blockName[x]; // 블럭 이름 조회
        for(let i = 1; i < 5; i++){
            for(let j = 1; j < 5; j++){
                if(block.blockFill.rName[i-1][j-1] === 1){
                    let temp = 0;
                    

                    els.getElementsByClassName('item')[temp].backgroundColor = block.blockColor[rName];
                }
            }
        }
        console.log('rName: '+rName);
    }
} // End of block

motion = {
    start:() => { 
        let intervalId = null;

        setTimeout(() => {
            clearInterval(intervalId);
            intervalId = setInterval(block.getBlock, 200); // random 으로 블럭을 계속 생성한다.
        }, 3000);
    }

} // End of motion

init = () => {
    motion.start();
} // End of init