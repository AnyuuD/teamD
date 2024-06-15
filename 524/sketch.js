let font;   // 로봇폰트 변수
let 게임시작화면_start;     // 인트로 이미지들 
let 게임시작화면_startButton; 
let 성명입력_background;
let 성명입력_imnotaRobot; 
let 스토리설명_startButton2; 
let 스토리설명_story1;
let 스토리설명_story2; 
let popUpXL;              // 팝업 이미지들
let popUpL;
let popUpM;
let popUpS;
let popUpStar;
let 결과_Frame;            // 결과 이미지들
let 결과_결과화면용; 

let state = 0;            // 스위치 단계, 점수, 타이머         
let score = 0; 
let timer; 

let playbutton = false;
let anybutton = false;
let 화이팅버튼 = false; 
let 로봇이아닙니다버튼 = false; 
let 문제1다음버튼 = false;
let 문제2다음버튼 = false;
let 문제3다음버튼 = false;
let 문제4다음버튼 = false;
let 문제5다음버튼 = false;
let 문제6다음버튼 = false;
let 문제7다음버튼 = false;
let 문제8다음버튼 = false;
let 문제9다음버튼 = false;
let 리챠챠챠버튼 = false; 
let 결과버튼 = false; 



function preload() {
  font = loadFont('NeoDunggeunmoPro-Regular.ttf')    // 로봇폰트 불러오기
  게임시작화면_start = loadImage('인트로/start.png');    // 인트로 이미지 불러오기 
  게임시작화면_startButton = loadImage('인트로/startButton.png'); 
  성명입력_background = loadImage('인트로/background.png'); 
  성명입력_imnotaRobot = loadImage('인트로/imnotaRobot.png'); 
  스토리설명_startButton2 = loadImage('인트로/startButton2.png'); 
  스토리설명_story1 = loadImage('인트로/story1.png'); 
  스토리설명_story2 = loadImage('인트로/story2.png'); 
  결과_Frame = loadImage('결과/Frame 26.png');   // 아웃트로 이미지 불러오기 
  결과_결과화면용 = loadImage('결과/결과화면용.png');
  popUpXL = loadImage('팝업창/popUpXL..png');              // 팝업 이미지 불러오기 
  popUpL = loadImage('팝업창/popUpL.png');
  popUpM = loadImage('팝업창/popUpM..png');
  popUpS = loadImage('팝업창/popUpS.png');
  popUpStar = loadImage('팝업창/popUpStar.png');
}


function setup() {
  createCanvas(1280, 832);
  textFont(font);
  textAlign(CENTER, CENTER);
  imageMode(CENTER);

}




function draw() {
  background(255);

  switch (state) {
    case 0:                                                        // 인트로 1페이지
      image(게임시작화면_start, width/2, height/2);
      image(게임시작화면_startButton, width/2+25, 570);
      if (playbutton) {
      image(스토리설명_story1, width/2+250, height/2-150);
      if (anybutton) {
      image(스토리설명_story2, width/2-200, height/2); 
      if (anybutton) {
      image(스토리설명_startButton2, width/2+150, height/2+200);{
          if (화이팅버튼) state = 1;
         }   
        }
       }
     }
      break;

    case 1:                                                      //인트로 2페이지
         image(성명입력_background, width/2, height/2);
         image(성명입력_imnotaRobot, width/2+30, height/2+100);
         if (로봇이아닙니다버튼) state = 2; 
      break;

    case 2:                                                      //전반부 문제1 
          text('문제1',200,100);
          image(popUpXL, 180, 650);   // 타이머 
          timer.display(190, 650);    // 타이머
          if (timer.isFinished()) {}  // 타이머 
          if (문제1다음버튼) state = 3; 
      break;

    case 3:                                                     //전반부 문제2
          text('문제2',200,100);
          image(popUpXL, 180, 650);   // 타이머 
          timer.display(190, 650);    // 타이머
          if (timer.isFinished()) {}  // 타이머
          if (문제2다음버튼) state = 4;               
      break;

    case 4:                                                     //전반부 문제3
          text('문제3',200,100);
          image(popUpXL, 180, 650);   // 타이머 
          timer.display(190, 650);    // 타이머
          if (timer.isFinished()) {}  // 타이머 
          if (문제3다음버튼) state = 5;  
      break;

    case 5:                                                     //전반부 문제4
          text('문제4',200,100);
          image(popUpXL, 180, 650);   // 타이머 
          timer.display(190, 650);    // 타이머
          if (timer.isFinished()) {}  // 타이머 
          if (문제4다음버튼) state = 6; 
      break;

    case 6:                                                     //전반부 문제5  
          text('문제5',200,100);
          image(popUpXL, 180, 650);   // 타이머 
          timer.display(190, 650);    // 타이머
          if (timer.isFinished()) {}  // 타이머     
          if (문제5다음버튼) state = 7; 
      break;

    case 7:                                                     //후반부 문제6
          text('문제6',200,100);
          image(popUpXL, 180, 650);   // 타이머 
          timer.display(190, 650);    // 타이머
          if (timer.isFinished()) {}  // 타이머 
          if (문제6다음버튼) state = 8; 
      break;

    case 8:                                                     //후반부 문제7
          text('문제7',200,100);
          image(popUpXL, 180, 650);   // 타이머 
          timer.display(190, 650);    // 타이머
          if (timer.isFinished()) {}  // 타이머 
          if (문제7다음버튼) state = 9; 
      break;

    case 9:                                                     //후반부 문제8
          text('문제8',200,100);
          image(popUpXL, 180, 650);   // 타이머 
          timer.display(190, 650);    // 타이머
          if (timer.isFinished()) {}  // 타이머 
          if (문제8다음버튼) state = 10; 
      break;
      
    case 10:                                                    //후반부 문제9
          text('문제9',200,100);
          image(popUpXL, 180, 650);   // 타이머 
          timer.display(190, 650);    // 타이머
          if (timer.isFinished()) {}  // 타이머 
          if (문제9다음버튼) state = 11; 
      break;

    case 11:
      image(성명입력_background, width/2, height/2);             //마지막 직전 페이지 
      image(성명입력_imnotaRobot, width/2+30, height/2+100);
      image(결과_Frame, width/2, height/2);
      if (리챠챠챠버튼) state =12; 
      break;

    case 12:                                                    // (소정)마지막 페이지 
      image(결과_결과화면용, width/2, height/2);
      fill(5, 255, 0);
      textSize(30);
      text(score+'% 확률로 로봇이 의심되네요!', width/2, 250);
      if (결과버튼) {
        image(popUpXL, 250, 650);
        image(popUpXL, 1050, 200); 
      }
      break;
  }
}








function mouseClicked() {                                        // 각 단계의 버튼들
  if(state == 0) {
  if(505<mouseX && mouseX<820 && 540<mouseY && mouseY<600) {
    playbutton = true; 
  }
  }
  if(state == 0) {
  if(0<mouseX && mouseX<1280 && 0<mouseY && mouseY<832) {
    anybutton = true; 
  }
  }
  if(state == 0) {
  if(700<mouseX && mouseX<900 && 530<mouseY && mouseY<720) {
    화이팅버튼 = true; 
  }
}
  if(화이팅버튼 && state == 1) {
    if(485<mouseX && mouseX<510 && 500<mouseY && mouseY<522) {
    로봇이아닙니다버튼 = true; 
    timer = new Timer(11000);    // 다음 화면에서 10초부터 카운트됩니다
    }
  }
  if(로봇이아닙니다버튼 && state == 2) {
    문제1다음버튼 = true;
    timer = new Timer(11000); 
  }
  if(문제1다음버튼 && state == 3) {
    문제2다음버튼 = true;
    timer = new Timer(11000); 
  }

  if(문제2다음버튼 &&state == 4) {
    문제3다음버튼 = true;
    timer = new Timer(11000); 
  }
  if(문제3다음버튼 &&state == 5) {
    문제4다음버튼 = true;
    timer = new Timer(11000); 
  }
  if(문제4다음버튼 &&state == 6) {
    문제5다음버튼 = true;
    timer = new Timer(11000); 
  }
  if(문제5다음버튼 &&state == 7) {
    문제6다음버튼 = true;
    timer = new Timer(11000); 
  }
  if(문제6다음버튼 &&state==8) {
    문제7다음버튼 = true;
    timer = new Timer(11000); 
  }
  if(문제7다음버튼 &&state==9) {
    문제8다음버튼 = true;
    timer = new Timer(11000);
  }
  if(문제8다음버튼 &&state==10){
    문제9다음버튼 = true;
    timer = new Timer(11000); 
  }
  if(문제9다음버튼 &&state==11) {
  if(500<mouseX && mouseX<800 && 250<mouseY && mouseY<550) {
    리챠챠챠버튼 = true; 
  }
  }
  if(리챠챠챠버튼 && state==12) {
  if(0<mouseX && mouseX<1280 && 0<mouseY && mouseY<832) {
    결과버튼 = true; 
  }
}
}


