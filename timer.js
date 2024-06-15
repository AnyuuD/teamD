class Timer {
  constructor(duration) {
    this.duration = duration; // 타이머의 지속 시간 (밀리초)
    this.startTime = millis(); // 타이머가 시작된 시간
    this.isRunning = true; //(유진추가) 타이머 실행 여부를 나타내는 변수
    this.timeText = 0; // 타이머에 뜨는 숫자
    this.timeout = false; // 타이머 시간초과 여부
  }

  update() {
    if (!this.isRunning) {
      return this.duration - (this.pausedTime || 0); // (유진추가)타이머가 멈춘 상태에서는 남은 시간 반환
    }
    let elapsed = millis() - this.startTime; // 경과 시간 계산
    return this.duration - elapsed; // 남은 시간 반환
  }

  isFinished() {
    return this.update() <= 0; // 타이머가 종료되었는지 확인
  }

  display(x, y) {
    let remainingTime = this.update();
    if (remainingTime < 0) {
      remainingTime = 0;
    }
    this.timeText = "00" + ":" + nf(int(remainingTime / 1000), 2);

    if (this.timeout == true) {
      // 시간 초과될 경우
      this.timeText = "시간초과";
    }
    // else if (this.isRunning == false){       // 타이머를 멈출 경우 00이 뜨도록
    //   this.timeText = "제출완료";
    // }

    fill(255, 79, 216);
    if (this.timeout == true) {
      //  시간초과시 텍스트 크기
      textSize(60);
    } else {
      textSize(110);
    }
    textAlign(CENTER, CENTER);
    text(this.timeText, x, y); // 남은 시간을 초 단위로 표시
  }

  reset(duration) {
    this.startTime = millis(); // 시작 시간을 현재 시간으로 재설정
    this.isRunning = true; // 타이머를 다시 시작
    if (duration) {
      this.duration = duration; // 새로운 지속 시간이 제공되면 설정
    }
    this.pausedTime = 0; // 일시정지 시간 초기화
  }
  //유진추가
  stop() {
    this.isRunning = false; // 타이머 멈추기
    this.pausedTime = millis() - this.startTime; // 멈춘 시점의 경과 시간 기록
  }

  timeOut() {
    // 시간 초과시
    this.timeout = true;
  }

  start() {
    this.startTime = millis() - this.pausedTime; // 남은 시간을 보존하여 타이머 시작
    this.isRunning = true; // 타이머 다시 시작
  }

  isLessThan(seconds) {
    return this.update() <= seconds * 1000; // 남은 시간이 지정된 초 이하인지 확인
  }
}
