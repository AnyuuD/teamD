class Q1 {
  constructor(
    correctAnswers,
    textDisabledImg,
    disabledImg,
    abledImg,
    logo,
    questionImg,
    successText,
    failText
  ) {
    this.imgTextC = imgTextC;
    this.buttonGreenT = buttonGreenT;
    this.buttonPinkT = buttonPinkT;
    this.buttonGreyT = buttonGreyT;
    this.popUpS = popUpS;
    this.popUpM = popUpM;
    this.resultHuman = resultHuman;
    this.resultRobot = resultRobot;
    this.correctAnswers = correctAnswers;
    this.textDisabledImg = textDisabledImg;
    this.disabledImg = disabledImg;
    this.abledImg = abledImg;
    this.logo = logo;
    this.questionImg = questionImg;
    this.successText = successText;
    this.failText = failText;
    this.currentPopupText = "";

    this.input = createInput();
    this.input.position(439, 503);
    this.input.size(298, 38);
    this.input.style("font-size", "20px");

    this.buttonX = this.input.x + this.input.width + 60;
    this.buttonY = this.input.y + 20;
    this.isVerified = false;
    this.overlayOpacity = 0;
    this.buttonActivated = false; // 확인 버튼이 클릭되었는지 여부
    this.showPopup = false; // 팝업 표시 여부
    this.showPinkButton = false; // 핑크 버튼 표시 여부
    this.popupDelay = 1000; // 팝업 표시 후 1초 뒤에 핑크 버튼 표시

    this.logoRotation = 0; // 로고 회전 각도
    this.rotationStartTime = 0; // 회전 시작 시간
    this.rotationDuration = 1000; // 회전 지속 시간 (1초)

    this.inputFocused = false; // 입력 필드가 포커스되었는지 여부

    // 입력 필드를 클릭했을 때 포커스 플래그 설정
    this.input.mousePressed(() => (this.inputFocused = true));
  }

  handleEnterKey() {
    // 엔터키가 눌렸는지 확인하고, 입력 필드에 포커스가 있을 때만 실행
    if (keyCode === ENTER && this.inputFocused && !this.buttonActivated) {
      this.checkCaptcha(); // 엔터키가 눌리면 checkCaptcha 호출
    }
  }

  display() {
    // 중앙에 이미지 배치
    imageMode(CENTER);
    image(this.imgTextC, width / 2 - 10.51, height / 2 + 8.6);

    // questionImg를 textImgC 위에 배치
    image(this.questionImg, width / 2, height / 2 - 40);

    if (!this.showPinkButton && !this.buttonActivated) {
      image(this.buttonGreenT, this.buttonX, this.buttonY);
    }

    // 타이머가 종료되었는지 확인하고, 종료되었으면 checkCaptcha 호출
    if (timer.isFinished() && !this.buttonActivated) {
      this.checkCaptcha();
      timer.timeOut();
    }

    // 팝업, textDisabled 이미지, 로고 표시
    if (this.buttonActivated) {
      image(this.textDisabledImg, width / 2, height / 2);
      image(this.disabledImg, width / 2, height / 2);
      image(this.buttonGreyT, this.buttonX, this.buttonY);

      imageMode(CENTER);

      // 로고 회전 및 표시
      if (millis() - this.rotationStartTime < this.rotationDuration) {
        let progress =
          (millis() - this.rotationStartTime) / this.rotationDuration;
        this.logoRotation = progress * TWO_PI; // 0에서 2π까지 회전
      } else {
        image(this.abledImg, width / 2, height / 2);

        // 버튼 표시
        if (this.showPinkButton && index === 0) {
          image(this.buttonPinkT, this.buttonX, this.buttonY);
        } else {
          image(textPinkD, this.buttonX, this.buttonY);
        }
      }

      push();
      translate(width / 2, height / 2 - 30);
      rotate(this.logoRotation);
      image(this.logo, 0, 0); // 적절한 크기로 조정
      pop();

      image(this.popUp, width - 210, height / 2); // 화면 오른쪽에 팝업 표시
      image(this.popUp2, width / 2 + 450, height / 2 + 200);
      this.displayPopupText();
    }
  }

  changeImage() {
    // 현재 이미지 인덱스 변경
    index = (index + 1) % 2;
  }

  displayPopupText() {
    if (this.currentPopupText !== "") {
      fill(255, 255, 0); // 텍스트 색상 (노랑)
      textSize(18); // 텍스트 크기
      textAlign(CENTER, CENTER);
      text(this.currentPopupText, width - 350, height / 2 + 10, 300);
    }
  }

  checkCaptcha() {
    const enteredText = this.input.value();

    if (this.correctAnswers.includes(enteredText)) {
      score += 5.5; // 점수 5점 추가
      this.popUp = this.popUpS; // 올바른 텍스트 팝업
      this.popUp2 = this.resultHuman; // 인간팝업
      this.currentPopupText = this.successText;
    } else {
      this.popUp = this.popUpM; // 올바르지 않은 텍스트 팝업
      this.currentPopupText = this.failText; // 실패 텍스트 설정
      this.popUp2 = this.resultRobot; // 로봇팝업
    }

    this.buttonActivated = true; // 확인 버튼 클릭 여부를 true로 설정
    this.input.attribute("disabled", "true"); // 입력 필드 비활성화
    timer.stop(); // 타이머 멈추기

    this.showPopup = true; // 팝업 표시
    this.rotationStartTime = millis(); // 로고 회전 시작 시간 설정

    // 1초 후에 핑크 버튼 표시
    setTimeout(() => {
      this.showPinkButton = true;
    }, this.popupDelay);
  }

  handleClick(mx, my) {
    let buttonWidth = this.buttonGreenT.width; // 클릭 범위 증가 해제함
    let buttonHeight = this.buttonGreenT.height; // 만약 증가시키려면 이 코드들에 +20정도

    // HTML 입력 요소와 p5.js 캔버스의 좌표 체계 간 차이를 해결
    const inputX = this.input.position().x;
    const inputY = this.input.position().y;

    const buttonX = inputX + this.input.width + 80;
    const buttonY = inputY + 20;

    // 버튼 클릭 이벤트
    if (
      mx > buttonX - 60 &&
      mx < buttonX + buttonWidth - 40 &&
      my > buttonY - 30 &&
      my < buttonY + buttonHeight - 20
    ) {
      if (!this.buttonActivated) {
        // 그린 버튼 클릭 (확인 버튼이 아직 클릭되지 않은 경우)
        this.checkCaptcha();
      } else if (this.showPinkButton) {
        // 핑크 버튼 클릭
        this.nextButtonClicked = true;
        return true; // 핑크 버튼이 클릭되면 true 반환
      }
    }
    return false;
  }

  setSuccessText(text) {
    this.successText = text;
  }

  setFailText(text) {
    this.failText = text;
  }
}

// p5.js의 keyPressed 이벤트 핸들러를 정의하여 엔터키 입력을 감지
function keyPressed() {
  // 전역으로 관리하는 모든 Q1 인스턴스에 대해 엔터키 입력을 확인하고 처리
  if (q1 && q1.inputFocused) {
    q1.handleEnterKey();
  }
  if (q2 && q2.inputFocused) {
    q2.handleEnterKey();
  }
}
