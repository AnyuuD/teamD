let font;
let 게임시작화면_start;
let 게임시작화면_startButton;
let 성명입력_background;
let 성명입력_imnotaRobot;
let 스토리설명_startButton2;
let 스토리설명_story1;
let 스토리설명_story2;
let popUpXL;
let popUpL;
let popUpM;
let popUpS;
let popUpStar;
let popUpRed;
let 결과_로딩;
let 결과_로딩창;
let 결과_Frame;
let 결과_결과화면용;
let result_human;
let result_robot;
let result_halfRobot;
let nameinput;
let nameinput_button;
let username = "";
let nameEntered = false;
let buttonEntered = false;
let greeting = "";
let song;
let soundeffect;
let soundeffect_isplayed = false;
let reloadButton;

//------------ 채현 추가
let clickSound;
let imgCaptcha;
let detail = 0;
let bg;
let choice2;
let choiceButtonWhite;
let choiceButtonPink;
let buttonOk;
let buttonNext;
let buttonNextD;
let buttonWait;
let dataChecking;
let dataComplete;
let imgDisabled;

let airbnb;
let air1;
let air2;
let air3;
let ktx;
let ktx1;
let ktx2;
let lion;
let lion1;
let lion2;
let mom;
let mom1;
let mom2;
let logoImage;
let mousearrow;
let mousehand;

//-----------  수빈 추가

let choiceCaptcha;
let textCaptcha;
let imageCaptcha;
let 푸들;
let 여자;
let 숙소;

let boxes = [];
let clickedBoxes = [];
let boxSize = 98;
let bar;
let frame;
let successPopup1;
let successPopup2;
let successPopup3;
let failedPopup1;
let failedPopup2;
let failedPopup3;
let resultRobot;
let resultHuman;
let 교수님;

let successPopupFlag = false;
let failedPopupFlag = false;

let 현재이미지;
let 이미지전환시간 = 1000;
let imageStartTime = null;
let imageStartTime1 = null;
let imageStartTime2 = null;
let imageLogoRotation = 0;

let changeInterval = 16; // 이미지가 깜빡이는 간격(프레임 수) 30에서 200밀리초에 가까운 16로 변경
let currentImage = "A";

let C = false;

///////////////////////////////////////

let state = 0; // 스위치 단계, 점수, 타이머
let score = 0;
let timer;
//case0
let buttonPink;
let playbutton = false;
let anybutton = false;
let 화이팅버튼 = false;
let startTime = null; //팝업 딜레이

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

////유진 문제 1
let q1; // Q1 인스턴스 변수 추가
let q2; // Q2 인스턴스 변수 추가

let dontType; //문제 1 입력하지마시오
let imaRobot; //문제 2 저는로봇입니다

//----로딩
let textDisabledImg;
let disabledImg;
let abledImg;
let logo;

//==================================여기서 이미지 추가=================================
//==================================여기서 이미지 추가=================================
//==================================여기서 이미지 추가=================================
//==================================여기서 이미지 추가=================================
function preload() {
  font = loadFont("NeoDunggeunmoPro-Regular.ttf");
  soundFormats("ogg", "mp3");
  song = loadSound("MusMus-BGM-174.mp3");
  soundeffect = loadSound("soundEffect.mp3");
  게임시작화면_start = loadImage("intro/start.png");
  게임시작화면_startButton = loadImage("intro/startButton.png");
  성명입력_background = loadImage("intro/background.png");
  성명입력_imnotaRobot = loadImage("intro/imnotaRobot.png");
  스토리설명_startButton2 = loadImage("intro/startButton2.png");
  스토리설명_story1 = loadImage("intro/story1.png");
  스토리설명_story2 = loadImage("intro/story2.png");
  결과_로딩 = loadImage("result/Group1.png");
  결과_로딩창 = loadImage("result/reCHACHACHA.png");
  결과_Frame = loadImage("result/Frame 26.png");
  결과_결과화면용 = loadImage("result/resultpage.png");
  result_human = loadImage("result/human.png");
  result_robot = loadImage("result/robot.png");
  result_halfRobot = loadImage("result/halfRobot.png");
  popUpXL = loadImage("popUp/popUpXL.png");
  popUpL = loadImage("popUp/popUpL.png");
  popUpM = loadImage("popUp/popUpM.png");
  popUpS = loadImage("popUp/popUpS.png");
  popUpStar = loadImage("popUp/popUpStar.png");
  popUpRed = loadImage("popUp/popUpRed.png");

  //----- 채현 추가

  clickSound = loadSound("pick.mp3");
  bg = loadImage("choice2/background.png");
  choice2 = loadImage("choice2/choice2.png");
  choiceButtonPink = loadImage("choice2/choiceButtonPink.png");
  choiceButtonWhite = loadImage("choice2/choiceButtonWhite.png");
  buttonOk = loadImage("choice2/mgButtonGreen.png");
  buttonNext = loadImage("choice2/imgButtonPink.png");
  buttonNextD = loadImage("choice2/buttonNextD.png");
  buttonWait = loadImage("choice2/imgButtonGrey.png");
  dataChecking = loadImage("choice2/dataChecking.png");
  dataComplete = loadImage("choice2/dataComplete.png");
  imgDisabled = loadImage("choice2/imgDisabled.png");
  imgCaptcha = loadImage("choice2/imageCaptcha.png");

  airbnb = loadImage("choice4x/airbnb.png");
  air1 = loadImage("choice4x/air1.png");
  air2 = loadImage("choice4x/air2.png");
  air3 = loadImage("choice4x/air3.png");
  ktx = loadImage("choice4x/ktx.png");
  ktx1 = loadImage("choice4x/ktx1.png");
  ktx2 = loadImage("choice4x/ktx2.png");
  lion = loadImage("choice4x/lion.png");
  lion1 = loadImage("choice4x/lion1.png");
  lion2 = loadImage("choice4x/lion2.png");
  mom = loadImage("choice4x/mom.png");
  mom1 = loadImage("choice4x/mom1.png");
  mom2 = loadImage("choice4x/mom2.png");
  logoImage = loadImage("textCaptcha/logo.png");
  mousearrow = loadImage("choice2/mousearrow.png");
  mousehand = loadImage("choice2/mousehand.png");

  //------ 수빈 추가

  숙소 = loadImage("subin/visit.PNG");
  푸들 = loadImage("subin/new poodle.png");
  여자 = loadImage("subin/new women.png");
  교수님 = loadImage("subin/new oh.png");
  resultRobot = loadImage("subin/resultRobot.png");
  resultHuman = loadImage("subin/resultHuman.png");
  buttonPink = loadImage("Button/textButtonPink.png");
  bar = loadImage("bar/bar.png");
  frame = loadImage("subin/Rectangle 23.png");
  successPopup1 = loadImage("subin/successPopup1.png");
  successPopup2 = loadImage("subin/successPopup2.png");
  successPopup3 = loadImage("subin/successPopup3.png");
  failedPopup1 = loadImage("subin/failedPopup1.png");
  failedPopup2 = loadImage("subin/failedPopup2.png");
  failedPopup3 = loadImage("subin/failedPopup3.png");
  //logo = loadImage("subin/Group 1.png");

  //유진 전반부 문제 1 수정
  imgTextC = loadImage("textCaptcha/text_C.png");
  buttonGreenT = loadImage("textCaptcha/textButtonGreen.png");
  buttonPinkT = loadImage("textCaptcha/textButtonPink.png");
  buttonGreyT = loadImage("textCaptcha/textButtonGrey.png");
  textPinkD = loadImage("textCaptcha/textPinkD.png");
  dontType = loadImage("textCaptcha/dontType.png");
  //문제 2
  imaRobot = loadImage("textCaptcha/imaRobot.png");
  //----로딩
  textDisabledImg = loadImage("disabled/textdisabledImg.png");
  disabledImg = loadImage("disabled/disabledImg.png");
  abledImg = loadImage("disabled/abledImg.png");
  logo = loadImage("disabled/logo.png");
}
//==========================================================================
//==========================================================================
//==========================================================================
//==========================================================================

function setup() {
  let canvas = createCanvas(1280, 832);

  textFont(font);
  textFont(font);
  textAlign(CENTER, CENTER);
  imageMode(CENTER);
  BGM();

  //------- 소정 추가(재시작버튼)

  reloadButton = createButton("R E T R Y");
  reloadButton.style("padding", "10px 20px");
  reloadButton.style("font-size", "50px");
  reloadButton.style("background-color", "#FF4FD8");
  reloadButton.style("color", "white");
  reloadButton.style("border", "none");
  reloadButton.style("border-radius", "5px");
  reloadButton.style("cursor", "pointer");
  reloadButton.style("font-family", "NeoDunggeunmoPro-Regular");
  reloadButton.style("display", "none");
  reloadButton.position(1000, 700);
  reloadButton.mousePressed(() => {
    location.reload();
  });

  //------ 수빈 추가

  input1 = createInput();
  input1.position(width / 2 - 185, height / 2 + 95);
  input1.size(200, 30);
  input1.style("font-size", "28px");
  input1.style("font-family", "NeoDunggeunmoPro");
  input1.style("border", "none");
  input1.hide();

  input2 = createInput();
  input2.position(width / 2 - 185, height / 2 + 95);
  input2.size(200, 30);
  input2.style("font-size", "28px");
  input2.style("font-family", "NeoDunggeunmoPro");
  input2.style("border", "none");
  input2.hide();

  // 박스 생성
  for (let i = 0; i < 9; i++) {
    let x = (i % 3) * boxSize + width / 2 - boxSize * 1.39;
    let y = floor(i / 3) * boxSize + height / 2 - boxSize * 1.32;
    boxes.push(new Box(x, y, boxSize, i + 1, frame));
  }
  현재이미지 = dataChecking;

  //------ 소정 추가 (사용자 이름 입력)

  nameinput = createInput();
  nameinput.position(445, 415);
  nameinput.size(200, 30);
  nameinput.style("font-size", "25px");
  nameinput.style("font-family", "NeoDunggeunmoPro-Regular");
  nameinput.style("border", "none");
  nameinput.hide();
  nameinput_button = createButton("확인");
  nameinput_button.position(660, 410);
  nameinput_button.size(80, 40);
  nameinput_button.style("border", "none");
  nameinput_button.style("border-radius", "10px");
  nameinput_button.style("background-color", "#FF4FD8");
  nameinput_button.style("font-size", "25px");
  nameinput_button.style("font-family", "NeoDunggeunmoPro-Regular");
  nameinput_button.mousePressed(handleSubmit);
  nameinput_button.changed(handleSubmit);
  nameinput_button.hide();
  nameinput.changed(handleSubmit);

  // q1
  q1 = new Q1(
    ["입력하지 마시오", "입력하지마시오"],
    textDisabledImg,
    disabledImg,
    abledImg,
    logo,
    loadImage("textCaptcha/dontType.png"),
    "고민도 없이 따라쓰시는군요?\n일단 정답입니다.", // 성공 시 텍스트
    "어? 이거 챗지피티는 알아보던데?" // 실패 시 텍스트
  );

  q1.input.hide(); // 초반에 input 창 숨기기

  // q2
  q2 = new Q1(
    ["저는 로봇입니다.", "저는로봇입니다."],
    textDisabledImg,
    disabledImg,
    abledImg,
    logo, //돌아가는 로고
    loadImage("textCaptcha/imaRobot.png"),
    "아니..로봇이세요??\n정답이긴 한데...", // 성공 시 텍스트
    "로봇도 알아보는 텍스트를 틀렸는데요?!" // 실패 시 텍스트
  );
  q2.input.hide(); // 초반에 input 창 숨기기

  //--------------------채현추가
  setInterval(changeImage, interval);
  noCursor();
}

function draw() {
  if (frameCount % changeInterval < changeInterval / 2) {
    currentImage = "A";
  } else {
    currentImage = "B";
  }

  background(255);

  switch (state) {
    case 0:
      image(게임시작화면_start, width / 2, height / 2);
      image(게임시작화면_startButton, width / 2 + 25, 570);
      if (playbutton) {
        if (startTime === null) {
          startTime = millis(); // 게임 시작 버튼이 눌린 후 startTime 설정
        }
        image(스토리설명_story1, width / 2 + 250, height / 2 - 150);
        if (millis() > startTime + 1500) {
          image(스토리설명_story2, width / 2 - 300, height / 2);
        }
        if (millis() > startTime + 2500) {
          image(스토리설명_startButton2, width / 2 + 250, height / 2 + 230);
          if (화이팅버튼) state = 1;
        }
      }
      cursorChange();
      break;

    case 1:
      image(성명입력_background, width / 2, height / 2);
      image(성명입력_imnotaRobot, width / 2 + 30, height / 2 + 100);
      nameinput.show();
      nameinput_button.show();

      if (nameEntered) {
        if (nameinput_button.mousePressed() || nameinput.changed()) {
          fill(0, 255, 10);
          textSize(40);
          text(greeting, width / 2 + 50, 350);
          image(popUpL, 1050, 500);
          textSize(25);
          text("시간이 초과되지 않도록", 1050, 480);
          text("주의하세요!", 1050, 520);
          stroke(255, 79, 216);
          strokeWeight(6);
          noFill();
          rect(487, 500, 22, 22);
          noStroke();
        }
      }
      noCursor();
      cursorChange();
      break;

    //-------------------------문제시작------------------------------
    //-------------------------문제시작------------------------------
    //-------------------------문제시작------------------------------

    case 2: //전반부 문제1
      nameinput.hide(); //이름입력창 더이상 안보이게 가려주는 역할
      nameinput_button.hide();
      image(bg, width / 2, height / 2);

      //bar 문제1
      rectMode(CORNER);
      fill(255, 79, 216);
      rect(width / 2 - 240, height / 2 - 360, 28, 60);
      image(bar, width / 2, height / 2 - 330);
      textSize(35);
      text("1/9", width / 2 + 220, height / 2 - 330);

      //유진 문제 1
      if (로봇이아닙니다버튼) {
        q1.input.show(); // input 창을 보여줌
        q1.display();
      }

      if (timer.isLessThan(4)) {
        image(popUpRed, 180, 650); // 남은 시간이 3초 이하일 때
      } else {
        image(popUpXL, 180, 650); // 남은 시간이 3초 이상일 때
      }
      timer.display(190, 650);

      noCursor();
      cursorChange();
      break;

    case 3: //전반부 문제2
      q1.input.hide();

      image(bg, width / 2, height / 2);

      //bar문제2
      rectMode(CORNER);
      fill(255, 79, 216);
      rect(width / 2 - 240, height / 2 - 360, 28 + 50, 60);
      image(bar, width / 2, height / 2 - 330);
      textSize(35);
      text("2/9", width / 2 + 220, height / 2 - 330);
      //

      //유진 문제 2
      q2.input.show(); // input 창을 보여줌
      q2.display();

      if (timer.isLessThan(4)) {
        image(popUpRed, 180, 650); // 남은 시간이 3초 이하일 때
      } else {
        image(popUpXL, 180, 650); // 남은 시간이 3초 이상일 때
      }
      timer.display(190, 650);

      noCursor();
      cursorChange();
      break;

    //-------------------------이미지 캡챠------------------------------
    //-------------------------이미지 캡챠------------------------------
    //-------------------------이미지 캡챠------------------------------

    case 4: //전반부 문제3
      q2.input.hide();

      //bar문제3
      rectMode(CORNER);
      fill(255, 79, 216);
      rect(width / 2 - 240, height / 2 - 360, 150, 60);
      image(bar, width / 2, height / 2 - 330);
      textSize(35);
      text("3/9", width / 2 + 220, height / 2 - 330);
      //

      image(bg, width / 2, height / 2);
      image(푸들, width / 2, height / 2 + 20);

      if (!C && timer.isFinished()) {
        timer.timeOut();
      }

      for (let box of boxes) {
        box.show();
      }
      if (successPopupFlag) {
        image(successPopup1, 1003, 178, 337, 323);
        image(resultHuman, 858 + 158, 493 + 76);
        image(imgDisabled, width / 2 + 10, height / 2 + 10);

        if (imageStartTime === null) {
          imageStartTime = millis();
        }
        let elapsedTime = millis() - imageStartTime;
        let progress = (millis() - imageStartTime) / 이미지전환시간;
        //-----------------------------------------------------
        if (elapsedTime < 이미지전환시간) {
          image(buttonWait, width / 2 + 117, height / 2 + 184 + 20);
          image(현재이미지, width / 2 + 11, height / 2);
        }
        imageLogoRotation = progress * TWO_PI;
        push();
        translate(width / 2 + 11, height / 2 - 20);
        rotate(imageLogoRotation);
        image(logoImage, 0, 0); // 적절한 크기로 조정
        pop();

        if (elapsedTime > 이미지전환시간) {
          image(dataComplete, width / 2 + 11, height / 2);
          image(logoImage, width / 2 + 11, height / 2 - 20);

          if (currentImage === "A") {
            image(buttonNext, width / 2 + 117, height / 2 + 184 + 20);
          } else {
            image(buttonNextD, width / 2 + 117, height / 2 + 184 + 20);
          }

          console.log("현재 millis 값:", millis());
        }
        //------------------------------------------------------
      }
      if (failedPopupFlag) {
        image(failedPopup1, 1003, 178, 337, 323);
        image(resultRobot, 858 + 158, 493 + 76);
        image(imgDisabled, width / 2 + 10, height / 2 + 10);

        if (imageStartTime === null) {
          imageStartTime = millis();
        }
        let elapsedTime = millis() - imageStartTime;
        let progress = (millis() - imageStartTime) / 이미지전환시간;
        //-----------------------------------------------------
        if (elapsedTime < 이미지전환시간) {
          image(buttonWait, width / 2 + 117, height / 2 + 184 + 20);
          image(현재이미지, width / 2 + 11, height / 2);
        }
        imageLogoRotation = progress * TWO_PI;
        push();
        translate(width / 2 + 11, height / 2 - 20);
        rotate(imageLogoRotation);
        image(logoImage, 0, 0); // 적절한 크기로 조정
        pop();

        if (elapsedTime > 이미지전환시간) {
          현재이미지 = dataComplete;
          image(현재이미지, width / 2 + 11, height / 2);
          image(logoImage, width / 2 + 11, height / 2 - 20);
          if (currentImage === "A") {
            image(buttonNext, width / 2 + 117, height / 2 + 184 + 20);
          } else {
            image(buttonNextD, width / 2 + 117, height / 2 + 184 + 20);
          }

          console.log("현재 millis 값:", millis());
        }
      }
      //------------------------------------------------------
      if (
        clickedBoxes.includes(2) &&
        clickedBoxes.includes(5) &&
        clickedBoxes.includes(7) &&
        clickedBoxes.includes(9) &&
        clickedBoxes.length == 4
      ) {
      }

      if (timer.isLessThan(4)) {
        image(popUpRed, 180, 650); // 남은 시간이 3초 이하일 때
      } else {
        image(popUpXL, 180, 650); // 남은 시간이 3초 이상일 때
      }
      timer.display(190, 650);

      if (timer.isFinished()) {
        if (!successPopupFlag) {
          failedPopupFlag = true;
        }
      } // 타이머

      if (문제3다음버튼) {
        C = false;
        state = 5;
      }

      noCursor();
      cursorChange();
      break;

    case 5: //전반부 문제4
      //bar문제4
      rectMode(CORNER);
      fill(255, 79, 216);
      rect(width / 2 - 240, height / 2 - 360, 150 + 50, 60);
      image(bar, width / 2, height / 2 - 330);
      textSize(35);
      text("4/9", width / 2 + 220, height / 2 - 330);
      //

      image(bg, width / 2, height / 2);
      image(여자, width / 2, height / 2 + 20);

      if (!C && timer.isFinished()) {
        timer.timeOut();
      }

      for (let box of boxes) {
        box.show();
      }

      if (successPopupFlag) {
        image(successPopup2, 1003, 178, 337, 323);
        image(resultHuman, 858 + 158, 493 + 76);
        image(imgDisabled, width / 2 + 10, height / 2 + 10);

        if (imageStartTime1 === null) {
          imageStartTime1 = millis();
        }
        let elapsedTime = millis() - imageStartTime1;
        let progress = (millis() - imageStartTime1) / 이미지전환시간;
        //-----------------------------------------------------
        if (elapsedTime < 이미지전환시간) {
          image(buttonWait, width / 2 + 117, height / 2 + 184 + 20);
          image(dataChecking, width / 2 + 11, height / 2);
        }
        imageLogoRotation = progress * TWO_PI;
        push();
        translate(width / 2 + 11, height / 2 - 20);
        rotate(imageLogoRotation);
        image(logoImage, 0, 0); // 적절한 크기로 조정
        pop();
        if (elapsedTime > 이미지전환시간) {
          현재이미지 = dataComplete;
          image(현재이미지, width / 2 + 11, height / 2);
          image(logoImage, width / 2 + 11, height / 2 - 20);

          if (currentImage === "A") {
            image(buttonNext, width / 2 + 117, height / 2 + 184 + 20);
          } else {
            image(buttonNextD, width / 2 + 117, height / 2 + 184 + 20);
          }

          console.log("현재 millis 값:", millis());
        }
        //------------------------------------------------------
      }
      if (failedPopupFlag) {
        image(failedPopup2, 1003, 178, 337, 323);
        image(resultRobot, 858 + 158, 493 + 76);
        image(imgDisabled, width / 2 + 10, height / 2 + 10);

        if (imageStartTime1 === null) {
          imageStartTime1 = millis();
        }
        let elapsedTime = millis() - imageStartTime1;
        let progress = (millis() - imageStartTime1) / 이미지전환시간;

        //-----------------------------------------------------
        if (elapsedTime < 이미지전환시간) {
          image(buttonWait, width / 2 + 117, height / 2 + 184 + 20);
          image(dataChecking, width / 2 + 11, height / 2);
        }
        imageLogoRotation = progress * TWO_PI;
        push();
        translate(width / 2 + 11, height / 2 - 20);
        rotate(imageLogoRotation);
        image(logoImage, 0, 0); // 적절한 크기로 조정
        pop();

        if (elapsedTime > 이미지전환시간) {
          image(dataComplete, width / 2 + 11, height / 2);
          image(logoImage, width / 2 + 11, height / 2 - 20);
          if (currentImage === "A") {
            image(buttonNext, width / 2 + 117, height / 2 + 184 + 20);
          } else {
            image(buttonNextD, width / 2 + 117, height / 2 + 184 + 20);
          }
          console.log("현재 millis 값:", millis());
        }
      }
      //------------------------------------------------------
      if (
        clickedBoxes.includes(5) &&
        clickedBoxes.includes(6) &&
        clickedBoxes.includes(8) &&
        clickedBoxes.length == 3
      ) {
      }

      if (timer.isLessThan(4)) {
        image(popUpRed, 180, 650); // 남은 시간이 3초 이하일 때
      } else {
        image(popUpXL, 180, 650); // 남은 시간이 3초 이상일 때
      }
      timer.display(190, 650);

      if (timer.isFinished()) {
        if (!successPopupFlag) {
          failedPopupFlag = true;
        }
        // state = 6;
        // timer.reset(11000);
        // initializeBoxes()
      } // 타이머
      if (문제4다음버튼) {
        C = false;
        state = 6;
      }

      noCursor();
      cursorChange();
      break;

    //-------------------------숙소------------------------------
    //-------------------------숙소------------------------------
    //-------------------------숙소------------------------------

    case 6: //전반부 문제5
      selectQ(5);

      //bar문제5
      rectMode(CORNER);
      fill(255, 79, 216);
      rect(width / 2 - 240, height / 2 - 360, 272, 60);
      image(bar, width / 2, height / 2 - 330);
      textSize(35);
      textAlign(CENTER, CENTER);
      text("5/9", width / 2 + 220, height / 2 - 330);
      //

      if (timer.isLessThan(4)) {
        image(popUpRed, 180, 650); // 남은 시간이 3초 이하일 때
      } else {
        image(popUpXL, 180, 650); // 남은 시간이 3초 이상일 때
      }
      timer.display(190, 650);

      noCursor();
      cursorChange();
      break;

    //-------------------------밸런스게임------------------------------
    //-------------------------밸런스게임------------------------------
    //-------------------------밸런스게임------------------------------

    case 7: //후반부 문제6
      selectQ(6);

      //bar 문제6
      rectMode(CORNER);
      fill(255, 79, 216);
      rect(width / 2 - 240, height / 2 - 360, 272 + 20 + 15, 60);
      image(bar, width / 2, height / 2 - 330);
      textSize(35);
      textAlign(CENTER, CENTER);
      text("6/9", width / 2 + 220, height / 2 - 330);
      //

      if (timer.isLessThan(4)) {
        image(popUpRed, 180, 650); // 남은 시간이 3초 이하일 때
      } else {
        image(popUpXL, 180, 650); // 남은 시간이 3초 이상일 때
      }
      timer.display(190, 650);

      noCursor();
      cursorChange();
      break;

    case 8: //후반부 문제7
      selectQ(7);

      // bar 문제7
      rectMode(CORNER);
      fill(255, 79, 216);
      rect(width / 2 - 240, height / 2 - 360, 272 + 40 + 15, 60);
      image(bar, width / 2, height / 2 - 330);
      textSize(35);
      textAlign(CENTER, CENTER);
      text("7/9", width / 2 + 220, height / 2 - 330);

      if (timer.isLessThan(4)) {
        image(popUpRed, 180, 650); // 남은 시간이 3초 이하일 때
      } else {
        image(popUpXL, 180, 650); // 남은 시간이 3초 이상일 때
      }
      timer.display(190, 650);

      noCursor();
      cursorChange();
      break;

    case 9: //후반부 문제8
      selectQ(8);

      //bar 문제8
      rectMode(CORNER);
      fill(255, 79, 216);
      rect(width / 2 - 240, height / 2 - 360, 272 + 60 + 15, 60);
      image(bar, width / 2, height / 2 - 330);
      textSize(35);
      textAlign(CENTER, CENTER);
      text("8/9", width / 2 + 220, height / 2 - 330);

      if (timer.isLessThan(4)) {
        image(popUpRed, 180, 650); // 남은 시간이 3초 이하일 때
      } else {
        image(popUpXL, 180, 650); // 남은 시간이 3초 이상일 때
      }
      timer.display(190, 650);

      noCursor();
      cursorChange();
      break;

    case 10: //후반부 문제9
      rectMode(CORNER);
      fill(255, 79, 216);
      rect(width / 2 - 240, height / 2 - 360, 420, 60);
      image(bar, width / 2, height / 2 - 330);
      textSize(35);
      text("9/9", width / 2 + 220, height / 2 - 330);
      //

      image(bg, width / 2, height / 2);
      image(교수님, width / 2, height / 2 + 20);

      if (!C && timer.isFinished()) {
        timer.timeOut();
      }

      for (let box of boxes) {
        box.show();
      }
      if (successPopupFlag) {
        image(successPopup3, 1003, 178, 337, 323);
        image(resultHuman, 858 + 158, 493 + 76);
        image(imgDisabled, width / 2 + 10, height / 2 + 10);

        if (imageStartTime2 === null) {
          imageStartTime2 = millis();
        }
        let elapsedTime = millis() - imageStartTime2;
        let progress = (millis() - imageStartTime2) / 이미지전환시간;

        //-----------------------------------------------------
        if (elapsedTime < 이미지전환시간) {
          image(buttonWait, width / 2 + 117, height / 2 + 184 + 20);
          image(dataChecking, width / 2 + 11, height / 2);
        }
        imageLogoRotation = progress * TWO_PI;
        push();
        translate(width / 2 + 11, height / 2 - 20);
        rotate(imageLogoRotation);
        image(logoImage, 0, 0);
        pop();

        if (elapsedTime > 이미지전환시간) {
          image(dataComplete, width / 2 + 11, height / 2);
          image(logoImage, width / 2 + 11, height / 2 - 20);
          if (currentImage === "A") {
            image(buttonNext, width / 2 + 117, height / 2 + 184 + 20);
          } else {
            image(buttonNextD, width / 2 + 117, height / 2 + 184 + 20);
          }
          console.log("현재 millis 값:", millis());
        }

        //------------------------------------------------------
      }
      if (failedPopupFlag) {
        image(failedPopup3, 1003, 178, 337, 323);
        image(resultRobot, 858 + 158, 493 + 76);
        image(imgDisabled, width / 2 + 10, height / 2 + 10);

        if (imageStartTime2 === null) {
          imageStartTime2 = millis();
        }
        let elapsedTime = millis() - imageStartTime2;
        let progress = (millis() - imageStartTime2) / 이미지전환시간;
        //-----------------------------------------------------
        if (elapsedTime < 이미지전환시간) {
          image(buttonWait, width / 2 + 117, height / 2 + 184 + 20);
          image(현재이미지, width / 2 + 11, height / 2);
        }
        imageLogoRotation = progress * TWO_PI;
        push();
        translate(width / 2 + 11, height / 2 - 20);
        rotate(imageLogoRotation);
        image(logoImage, 0, 0); // 적절한 크기로 조정
        pop();

        if (elapsedTime > 이미지전환시간) {
          image(dataComplete, width / 2 + 11, height / 2);
          image(logoImage, width / 2 + 11, height / 2 - 20);
          if (currentImage === "A") {
            image(buttonNext, width / 2 + 117, height / 2 + 184 + 20);
          } else {
            image(buttonNextD, width / 2 + 117, height / 2 + 184 + 20);
          }
          console.log("현재 millis 값:", millis());
        }
      }
      //------------------------------------------------------
      if (
        clickedBoxes.includes(2) &&
        clickedBoxes.includes(6) &&
        clickedBoxes.includes(7) &&
        clickedBoxes.length == 3
      ) {
      }
      if (timer.isLessThan(4)) {
        image(popUpRed, 180, 650); // 남은 시간이 3초 이하일 때
      } else {
        image(popUpXL, 180, 650); // 남은 시간이 3초 이상일 때
      }
      timer.display(190, 650);

      if (timer.isFinished()) {
        if (!successPopupFlag) {
          failedPopupFlag = true;
        }
        // state = 5;
        // timer.reset(11000);
      } // 타이머

      if (문제9다음버튼) state = 11;

      noCursor();
      cursorChange();
      break;

    //--------------------------결과화면---------------------------------
    //--------------------------결과화면---------------------------------
    //--------------------------결과화면---------------------------------

    case 11:
      if (!this.state11StartTime) {
        this.state11StartTime = millis(); // case 11에 진입 시 시작 시간 초기화
      }
      image(성명입력_background, width / 2, height / 2);
      image(성명입력_imnotaRobot, width / 2 + 30, height / 2 + 100);
      image(결과_로딩창, width / 2, height / 2);

      let current_time = millis();
      logo_angle = ((current_time - startTime) / 2000) * 360;
      push();
      translate(width / 2 + 11, height / 2 - 20);
      rotate(radians(logo_angle));
      image(결과_로딩, 0, 0);
      pop();

      if (millis() > this.state11StartTime + 3000) {
        state = 12; // 3초 후에 state 12로 전환
        this.state11StartTime = null; // 상태 전환 후 초기화
      }
      noCursor();
      cursorChange();
      break;

    case 12:
      BGM();
      playMusicOnce();
      image(결과_결과화면용, width / 2, height / 2);
      image(popUpL, 170, 170);
      image(popUpXL, 1100, 670);
      textSize(40);
      fill(255, 79, 216);
      text("「BGM : MusMus」", 180, 750);
      fill(5, 255, 0);
      total_score = 100 - score;
      text(yourname + total_score + "%", width / 2, height / 2 - 170);
      reloadButton.style("display", "block");
      textSize(22);

      if (70 <= total_score) {
        image(result_robot, width / 2, height / 2 + 45);
        text('"자네는 로봇임이 분명하니', 180, 150);
        text('과제를 받을 수 없네!"', 180, 200);
        text("chat GPT가 당신보단", 1110, 600);
        text("더 인간다울 거예요...", 1110, 650);
      } else if (30 <= total_score) {
        image(result_halfRobot, width / 2, height / 2 + 45);
        text('"자네는 로봇인가 인간인가?', 180, 150);
        text('거참 애매하구먼!"', 180, 200);
        text("당신은 설마", 1110, 600);
        text("휴머노이드??", 1110, 650);
      } else {
        image(result_human, width / 2, height / 2 + 45);
        text('"자네는 확실히 인간이군!', 180, 150);
        text('과제를 받아주겠네."', 180, 200);
        text("이번엔", 1110, 600);
        text("로봇 도전?", 1110, 650);
      }
      noCursor();
      cursorChange();
      break;
  }
}

function mouseClicked() {
  clickSound.play();
  //--------------------------------------------------- 각 단계 버튼들

  if (state == 0) {
    if (505 < mouseX && mouseX < 820 && 540 < mouseY && mouseY < 600) {
      playbutton = true;
    }
  }
  if (state == 0) {
    if (0 < mouseX && mouseX < 1280 && 0 < mouseY && 0 < 832) {
      anybutton = true;
    }
  }
  if (state == 0) {
    if (865 < mouseX && mouseX < 940 && 630 < mouseY && mouseY < 700) {
      화이팅버튼 = true;
    }
  }

  if (nameEntered && state == 1) {
    if (485 < mouseX && mouseX < 510 && 500 < mouseY && mouseY < 522) {
      buttonClicked = true;
      if (buttonClicked && nameEntered) {
        state = 2;
        로봇이아닙니다버튼 = true;
        timer = new Timer(11000);
      }
    }
  }

  if (로봇이아닙니다버튼 && state == 2) {
    if (q1.handleClick(mouseX, mouseY)) {
      문제1다음버튼 = true; // 핑크 버튼이 클릭되면 문제1다음버튼을 true로 설정
      state = 3; // 다음 상태로 전환
      timer = new Timer(11000);
    }
  }

  if (문제1다음버튼 && state == 3) {
    if (q2.handleClick(mouseX, mouseY)) {
      문제2다음버튼 = true; // 핑크 버튼이 클릭되면 문제2다음버튼을 true로 설정
      state = 4; // 다음 상태로 전환
      timer = new Timer(11000);
    }
  }
  if (문제2다음버튼 && state == 4) {
    //문제3
    if (
      mouseX < width / 2 + 115 + 35 &&
      mouseX > width / 2 + 115 - 55 &&
      mouseY < height / 2 + 205 + 20 &&
      mouseY > height / 2 + 205 - 44 + 20
    ) {
      timer.stop();
      if (successPopupFlag || failedPopupFlag) {
        initializeBoxes();
        문제3다음버튼 = true;
        timer = new Timer(11000);
        successPopupFlag = false;
        failedPopupFlag = false;
      } else {
        if (
          clickedBoxes.includes(2) &&
          clickedBoxes.includes(5) &&
          clickedBoxes.includes(7) &&
          clickedBoxes.includes(9) &&
          clickedBoxes.length == 4
        ) {
          successPopupFlag = true;
          score += 5; //******************************* 득점
        } else {
          failedPopupFlag = true;
        }
      }
    }
  }

  if (문제3다음버튼 && state == 5) {
    //문제4
    if (
      mouseX < width / 2 + 115 + 35 &&
      mouseX > width / 2 + 115 - 55 &&
      mouseY < height / 2 + 205 + 20 &&
      mouseY > height / 2 + 205 - 44 + 20
    ) {
      timer.stop();
      if (successPopupFlag || failedPopupFlag) {
        initializeBoxes();
        문제4다음버튼 = true;
        timer = new Timer(16000);
        successPopupFlag = false;
        failedPopupFlag = false;
      } else {
        if (
          clickedBoxes.includes(5) &&
          clickedBoxes.includes(6) &&
          clickedBoxes.includes(8) &&
          clickedBoxes.length == 3
        ) {
          successPopupFlag = true;
          score += 17; //******************************* 득점
        } else {
          failedPopupFlag = true;
        }
      }
    }
  }
  if (state == 10) {
    if (!문제8다음버튼) {
      문제8다음버튼 = true;
    } else {
      //문제9
      if (
        mouseX < width / 2 + 115 + 35 &&
        mouseX > width / 2 + 115 - 55 &&
        mouseY < height / 2 + 205 + 20 &&
        mouseY > height / 2 + 205 - 44 + 20
      ) {
        timer.stop();
        if (successPopupFlag || failedPopupFlag) {
          initializeBoxes();
          문제9다음버튼 = true;
          timer = new Timer(11000);
          successPopupFlag = false;
          failedPopupFlag = false;
        } else {
          if (
            clickedBoxes.includes(2) &&
            clickedBoxes.includes(6) &&
            clickedBoxes.includes(7) &&
            clickedBoxes.length == 3
          ) {
            successPopupFlag = true;
            score += 10; //******************************* 득점
          } else {
            failedPopupFlag = true;
          }
        }
      }
    }
  }

  if (state == 4 || state == 5 || state == 10) {
    if (
      mouseX < width / 2 + 115 + 35 &&
      mouseX > width / 2 + 115 - 55 &&
      mouseY < height / 2 + 205 + 40 &&
      mouseY > height / 2 + 205 - 24
    ) {
      C = true;
    }
  } else {
    C = false;
  }
} //**************************************여기가 mouseclicked() 끝입니다!!!

//==========================================================================

//==========================================================================

function handleSubmit() {
  username = nameinput.value();
  greeting = "준비되셨나요, " + username + "님 ◖|◉◡◉|◗!";
  yourname = username + "님이 로봇일 확률 ";

  if (username) {
    nameEntered = true;
  } else {
    alert("이름을 입력하세요!");
  }
}

function BGM() {
  song.play();
  song.loop();
  song.setVolume(0.1);
  userStartAudio();
  if (state == 12) {
    song.stop();
  }
}

function playMusicOnce() {
  if (!soundeffect_isplayed) {
    soundeffect.play();
    soundeffect.setVolume(0.1);
    soundeffect_isplayed = true;
  }
}

//===========================================수빈
function mousePressed() {
  if (state == 4 || state == 5 || state == 10) {
    for (let box of boxes) {
      if (box.contains(mouseX, mouseY)) {
        box.clicked();
      }
    }
  }
}

function initializeBoxes() {
  clickedBoxes = [];
  for (let box of boxes) {
    box.active = false;
  }
}
