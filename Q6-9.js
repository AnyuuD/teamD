//let currentTime;
let elapsedTime = 0;
let dcheck = 0;
let angle = 0;
let ansCheck = false;
let onButton;
let cursorSize = 30; // 초기 커서 크기
let index = 0; // 현재 이미지 인덱스
let interval = 200; // 이미지 변경 간격 (밀리초)

function selectQ(x) {
  imageMode(CENTER);

  switch (detail) {
    case 0:
      Q(x); //문제
      selection(); //클릭확인
      noResponse();
      break;

    case 1: // 1번 선택한 경우
      Qselect(1);
      selection();
      noResponse();
      break;

    case 2: // 2번 선택한 경우
      Qselect(2);
      selection();
      noResponse();
      break;

    case 3: // 3번 선택한 경우
      Qselect(3);
      selection();
      noResponse();
      break;

    case 4: // 로딩 화면
      disabled(x);
      let currentTime = millis();

      // 로고 돌리기
      angle = ((currentTime - startTime) / 1000) * 360;
      push();
      translate(width / 2 + 11, height / 2 - 20);
      rotate(radians(angle));
      image(logoImage, 0, 0); // 적절한 크기로 조정
      pop();

      elapsedTime = (currentTime - startTime) / 1000;
      if (elapsedTime >= 1) {
        // 시간 지난 후 자동 넘어가도록
        detail = 5;
      }
      break;

    case 5: // 로딩 이후
      disabled(x);
      selection();
      break;
  }
}

function disabled(x) {
  if (dcheck == 1) Qselect(1);
  else if (dcheck == 2) Qselect(2);
  else if (dcheck == 3) Qselect(3);
  else if (dcheck == 0) Q(x);
  imageMode(CENTER);
  image(imgDisabled, width / 2 + 10, height / 2 + 10); //비활성화 화면
  if (ansCheck == true) {
    //통과/실패 팝업
    image(resultHuman, width / 2 + 450, height / 2 + 200);
  } else {
    image(resultRobot, width / 2 + 450, height / 2 + 200);
  }
  image(popUpL, width / 2 + 450, height / 2 - 100); //멘트 팝업창
  popText(); //팝업 멘트
  fill(255, 255, 0);
  textSize(18);
  textAlign(LEFT, TOP);
  text(pT, width / 2 + 450 - 100, height / 2 - 140, 240);

  //image(popUpXL, width/2 -400, height/2 + 200);       //팝업창2

  if (detail == 4) {
    image(dataChecking, width / 2 + 11, height / 2);
    image(buttonWait, width / 2 + 116.5, height / 2 + 204.5); //버튼
  }
  if (detail == 5) {
    image(dataComplete, width / 2 + 11, height / 2);
    image(logoImage, width / 2 + 11, height / 2 - 20);
    if (index === 0) {
      //버튼 깜박이게
      image(buttonNext, width / 2 + 116.5, height / 2 + 204.5);
    } else {
      image(buttonNextD, width / 2 + 116.5, height / 2 + 204.5);
    }

    //image(buttonNext, width/2+116.5, height/2+204.5);       //버튼
  }
}

function changeImage() {
  // 현재 이미지 인덱스 변경
  index = (index + 1) % 2;
}

function cursorChange() {
  let x = mouseX;
  let y = mouseY;
  let b1x = width / 2 + 10; // 선택지 1 위치
  let b1y = height / 2 + 108;
  let b2x = width / 2 + 10; // 선택지 2 위치
  let b2y = height / 2 + 153;
  let b3x = width / 2 + 10.5; // 선택지 3 위치(숙소문제 한정, 맨 위 선택지)
  let b3y = height / 2 + 63;
  let b4x = width / 2 + 115; // 확인 버튼 위치(기준점)
  let b4y = height / 2 + 205;

  if (state == 0) {
    if (505 < mouseX && mouseX < 820 && 540 < mouseY && mouseY < 600) {
      onButton = true;
    } else if (865 < mouseX && mouseX < 940 && 630 < mouseY && mouseY < 700) {
      onButton = true;
    } else {
      onButton = false;
    }
  }
  if (state == 1) {
    if (448 < mouseX && mouseX < 642 && 415 < mouseY && mouseY < 450) {
      onButton = true;
    } else if (670 < mouseX && mouseX < 710 && 415 < mouseY && mouseY < 450) {
      onButton = true;
    } else if (485 < mouseX && mouseX < 510 && 500 < mouseY && mouseY < 522) {
      onButton = true;
    } else {
      onButton = false;
    }
  }

  if (state == 2 || state == 3) {
    if (x >= 757 && x <= 837 && y >= 473 && y <= 553) {
      onButton = true;
    } else {
      onButton = false;
    }
  }

  if (state == 4 || state == 5 || state == 10) {
    if (
      x < width / 2 + 115 + 35 &&
      x > width / 2 + 115 - 55 &&
      y < height / 2 + 205 + 20 &&
      y > height / 2 + 205 - 44 + 20
    ) {
      onButton = true;
    } else if (x < 699 + 98 && x > 503 && y < 482 + 98 && y > 286) {
      onButton = true;
    } else {
      onButton = false;
    }
  }
  if (state == 6) {
    if (detail == 0 || detail == 1 || detail == 2 || detail == 3) {
      //선택지 버튼
      if (x > b1x - 147 && x < b1x + 147 && y > b1y - 20 && y < b1y + 20) {
        onButton = true;
      } else if (
        x > b2x - 147 &&
        x < b2x + 147 &&
        y > b2y - 20 &&
        y < b2y + 20
      ) {
        onButton = true;
      } else if (
        x > b3x - 147 &&
        x < b3x + 147 &&
        y > b3y - 20 &&
        y < b3y + 20
      ) {
        onButton = true;
      } else if (x > b4x - 41 && x < b4x + 41 && y > b4y - 17 && y < b4y + 17) {
        onButton = true;
      } else {
        onButton = false;
      }
    }
    if (detail == 4) {
      onButton = false;
    }
    if (detail == 5) {
      if (x > b4x - 41 && x < b4x + 41 && y > b4y - 17 && y < b4y + 17) {
        onButton = true;
      } else {
        onButton = false;
      }
    }
  }

  if (state == 7 || state == 8 || state == 9) {
    if (detail == 0 || detail == 1 || detail == 2 || detail == 3) {
      //선택지 버튼
      if (x > b1x - 147 && x < b1x + 147 && y > b1y - 20 && y < b1y + 20) {
        onButton = true;
      } else if (
        x > b2x - 147 &&
        x < b2x + 147 &&
        y > b2y - 20 &&
        y < b2y + 20
      ) {
        onButton = true;
      } else if (x > b4x - 41 && x < b4x + 41 && y > b4y - 17 && y < b4y + 17) {
        onButton = true;
      } else {
        onButton = false;
      }
    }
    if (detail == 4) {
      onButton = false;
    }
    if (detail == 5) {
      if (x > b4x - 41 && x < b4x + 41 && y > b4y - 17 && y < b4y + 17) {
        onButton = true;
      } else {
        onButton = false;
      }
    }
  }
  if (onButton) {
    cursor("choice2/mousehand.png");
  } else {
    cursor("choice2/mousearrow.png");
  }

  // if (onButton) {
  //     image(mousehand, mouseX + cursorSize / 2, mouseY + cursorSize / 2, 25, cursorSize);
  //   } else {
  //     image(mousearrow, mouseX + cursorSize / 2, mouseY + cursorSize / 2, 19, cursorSize);
  //   }
}

function selection() {
  let x = mouseX;
  let y = mouseY;
  let b1x = width / 2 + 10; // 선택지 1 위치
  let b1y = height / 2 + 108;
  let b2x = width / 2 + 10; // 선택지 2 위치
  let b2y = height / 2 + 153;
  let b3x = width / 2 + 10.5; // 선택지 3 위치(숙소문제 한정, 맨 위 선택지)
  let b3y = height / 2 + 63;
  let b4x = width / 2 + 115; // 확인 버튼 위치(기준점)
  let b4y = height / 2 + 205;

  if (mouseIsPressed) {
    if (detail == 0 || detail == 1 || detail == 2 || detail == 3) {
      //선택지 버튼
      if (x > b1x - 147 && x < b1x + 147 && y > b1y - 20 && y < b1y + 20) {
        detail = 1;
      }
      if (x > b2x - 147 && x < b2x + 147 && y > b2y - 20 && y < b2y + 20) {
        detail = 2;
      }
      if (state == 6) {
        if (x > b3x - 147 && x < b3x + 147 && y > b3y - 20 && y < b3y + 20) {
          detail = 3;
        }
      }
    }
    if (x > b4x - 41 && x < b4x + 41 && y > b4y - 17 && y < b4y + 17) {
      //확인 버튼
      if (detail == 5) {
        ansCheck = false; // 정답여부 초기화
        timer = new Timer(16000);
        state += 1; // 다음 문제로
        detail = 0; // 초기화
        dcheck = 0;
      } else if (detail != 0 && detail != 4) {
        if (detail == 1) {
          dcheck = 1;
        }
        if (detail == 2) {
          dcheck = 2;
        }
        if (detail == 3) {
          dcheck = 3;
        }
        timer.stop();
        scoreCheck();
        detail = 4; // 이동
        startTime = millis(); // 시간초기화
      }
    }
  }
}

function noResponse() {
  // 시간 초과시
  if (timer.isFinished() && dcheck == 0) {
    timer.timeOut();
    detail = 4;
    startTime = millis();
  }
}

function scoreCheck() {
  if (state == 6) {
    // 숙소
    if (dcheck == 2) {
      score += 10;
      ansCheck = true;
    }
  }
  if (state == 7) {
    if (dcheck == 2) {
      score += 15;
      ansCheck = true;
    }
  }
  if (state == 8) {
    if (dcheck == 1) {
      score += 15;
      ansCheck = true;
    }
  }
  if (state == 9) {
    if (dcheck == 2) {
      score += 16;
      ansCheck = true;
    }
  }
  if (state == 10) {
    if (dcheck == 2) {
      score += 15;
      ansCheck = true;
    }
  }
}

function Q(x) {
  //문제 화면 표시
  image(bg, width / 2, height / 2); // 배경 창

  scale(0.25);
  if (x == 5) {
    image(airbnb, (width / 2) * 4, (height / 2 + 20) * 4);
  }
  if (x == 6) {
    image(mom, (width / 2) * 4, (height / 2 + 20) * 4);
  }
  if (x == 7) {
    image(ktx, (width / 2) * 4, (height / 2 + 20) * 4);
  }
  if (x == 8) {
    image(lion, (width / 2) * 4, (height / 2 + 20) * 4);
  }
  if (x == 9) {
    image(lion, (width / 2) * 4, (height / 2 + 20) * 4);
  }
  scale(4);
}

function Qselect(x) {
  // 선택할 경우 문제 + 선택된 선택지 화면 표시
  image(bg, width / 2, height / 2);

  scale(0.25);
  if (x == 1) {
    if (state == 6) {
      // 숙소
      image(airbnb, (width / 2) * 4, (height / 2 + 20) * 4);
      image(air2, (width / 2 + 10.5) * 4, (height / 2 + 109.5) * 4);
    }
    if (state == 7) {
      image(mom, (width / 2) * 4, (height / 2 + 20) * 4);
      image(mom1, (width / 2 + 10.5) * 4, (height / 2 + 109.5) * 4);
    }
    if (state == 8) {
      image(ktx, (width / 2) * 4, (height / 2 + 20) * 4);
      image(ktx1, (width / 2 + 10.5) * 4, (height / 2 + 109.5) * 4);
    }
    if (state == 9) {
      image(lion, (width / 2) * 4, (height / 2 + 20) * 4);
      image(lion1, (width / 2 + 10.5) * 4, (height / 2 + 109.5) * 4);
    }
    if (state == 10) {
      image(lion, (width / 2) * 4, (height / 2 + 20) * 4);
      image(lion1, (width / 2 + 10.5) * 4, (height / 2 + 109.5) * 4);
    }
  }
  if (x == 2) {
    if (state == 6) {
      // 숙소
      image(airbnb, (width / 2) * 4, (height / 2 + 20) * 4);
      image(air3, (width / 2 + 10.5) * 4, (height / 2 + 155.5) * 4);
    }
    if (state == 7) {
      image(mom, (width / 2) * 4, (height / 2 + 20) * 4);
      image(mom2, (width / 2 + 10.5) * 4, (height / 2 + 155.5) * 4);
    }
    if (state == 8) {
      image(ktx, (width / 2) * 4, (height / 2 + 20) * 4);
      image(ktx2, (width / 2 + 10.5) * 4, (height / 2 + 155.5) * 4);
    }
    if (state == 9) {
      image(lion, (width / 2) * 4, (height / 2 + 20) * 4);
      image(lion2, (width / 2 + 10.5) * 4, (height / 2 + 155.5) * 4);
    }
    if (state == 10) {
      image(lion, (width / 2) * 4, (height / 2 + 20) * 4);
      image(lion2, (width / 2 + 10.5) * 4, (height / 2 + 155.5) * 4);
    }
  }
  if (x == 3) {
    // 숙소문제 한정. 맨 위의 선택지가 3번
    if (state == 6) {
      image(airbnb, (width / 2) * 4, (height / 2 + 20) * 4);
      image(air1, (width / 2 + 10.5) * 4, (height / 2 + 63.5) * 4);
    }
  }
  scale(4);
}

let pT;
function popText() {
  if (ansCheck == true) {
    if (state == 6) {
      // 숙소
      pT = "항국삻람이람묜 당욘니 읽꺼야하닊까 방shim핫찌마요";
    }
    if (state == 7) {
      pT = "밥 굶을 각오는 해야겠지만 그 의리는 인..정?";
    }
    if (state == 8) {
      pT = "ㅋㅋ 아무도 모르겠죠?";
    }
    if (state == 9) {
      pT = "만수르의 인간성에 의존하지 않고 자신의 인간성을 택했네요";
    }
    if (state == 10) {
      pT = "만수르의 인간성에 의존하지 않고 자신의 인간성을 택했네요";
    }
  }
  if (ansCheck == false) {
    if (state == 6) {
      // 숙소
      pT = "땅쉰 항국삻람 ma짜요? 의씸되.";
    }
    if (state == 7) {
      pT = "인공지능보다 냉정하네요..\n절반 넘는 인간이 돌려주기를 택하던데..";
    }
    if (state == 8) {
      pT = "우리 좀 더 솔직해져봅시다\n너무 착한 척하는 것도 인간답지 않아요";
    }
    if (state == 9) {
      pT = "만수르가 그렇게 믿음직스러웠나요\n일단은 본인 선택이니까...";
    }
    if (state == 10) {
      pT = "만수르가 그렇게 믿음직스러웠나요";
    }
  }
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function Q(x){            //문제별 텍스트
//     if (x == 6){
//         fill(0);
//     textSize(15);
//     textAlign(LEFT, TOP);
//     text('친구 모친상에 부의금으로 10만원을 내려다 실수로 100만원을 냈다.\n\n친구 어머니는 내가 놀러갈 때마다 참 잘해주신 분이었는데 내 월급은 150만원이다. 월급날은 달의 마지막날이며 지금은 월초인 상황. \n잘못낸 돈, 돌려받아야 하나?', width/2-120, height/2-110, 260);

//     textAlign(CENTER, CENTER);
//     text('내 생곗값인데 당연히 돌려받아야지.', width/2+10, height/2+108);
//     text('이번 달 굶더라도 돌려받지 않는다.', width/2+10, height/2+153);
//     }

//     if (x == 7){
//         fill(0);
//         textSize(15);
//         textAlign(LEFT, TOP);
//         text('여행 가서 처음 간 가게에서 카드로 100만원을 샀는데 나중에 보니 10만원이 결제돼 있다. 그 가게 사장님은 람보르기니를 타고 다니는 누가봐도 부자. 다시 돌아가려면 부산에 ktx를 타고 5시간을 달려야 한다. 그 가게는 구멍가게라 네이버에 등록이 돼 있지 않고 직접 가야만 한다. 잘못 계산된 돈 돌려줘야 하나?', width/2-120, height/2-110, 260);

//         textAlign(CENTER, CENTER);
//         text('어차피 아무도 모른다. 안 돌려줄랭', width/2+10, height/2+108);
//         text('귀찮더라도.. 다시 가서 돌려준다.', width/2+10, height/2+153);
//     }

//     if (x == 8){
//         fill(0);
//         textSize(15);
//         textAlign(LEFT, TOP);
//         text('다시 태어난다면, 다음 생에는 현재 내 삶과 만수르의 애완 사자 중 어떤 삶을 선택하겠나?', width/2-120, height/2-110, 260);

//         textAlign(CENTER, CENTER);
//         text('만수르의 애완사자로 태어나 꿀빨기', width/2+10, height/2+108);
//         text('그래도 나', width/2+10, height/2+153);
//     }
//     if (x == 9){
//         fill(0);
//         textSize(15);
//         textAlign(LEFT, TOP);
//         text('다시 태어난다면, 다음 생에는 현재 내 삶과 만수르의 애완 사자 중 어떤 삶을 선택하겠나?', width/2-120, height/2-110, 260);

//         textAlign(CENTER, CENTER);
//         text('만수르의 애완사자로 태어나 꿀빨기', width/2+10, height/2+108);
//         text('그래도 나', width/2+10, height/2+153);
//     }
// }
