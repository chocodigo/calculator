# 계산기 프로그램
## 프론트엔드 포지션 지원자 최해림
>  ### 과제를 실행하는 방법
> index.html 파일을 실행합니다.

> ### 과제에 대한 문제 정의
> iOS에 내장되어 있는 계산기를 구현하였습니다.

> ### 해결 계획과 방법
> - 숫자 버튼 / 연산 버튼(주황버튼) / 기능 버튼(회색버튼)으로 구분합니다.
> - 입력한 숫자와 연산 기호를 문자열로 받아 eval()함수를 사용하여 결과를 화면에 표시하였습니다.
> - 누진 결과를 보여주기 위해 연산 기호를 선택할 경우 직전까지 연산한 결과를 화면에 보여주었습니다.
> - 숫자 버튼 / 연산 버튼 / 기능 버튼을 구분하여 이벤트를 설정하였습니다.
> - 결과 reset , 계산 , fontSize 조절 기능은 공통적으로 사용하는 기능이라 따로 함수로 구현하였습니다.
> - 숫자가 계산기 width를 벗어날 경우 fontSize를 줄여서 벗어나지 않도록 하였습니다.
> - 0으로 나눌 경우 "오류"를 출력합니다.
> - 연산 버튼을 중복해서 눌렀을 경우 마지막 연산자와 숫자를 계산합니다
  >> - ex) input : 5+= , result : 10 (5+5)
  >> - input : 5+*-= , result : 0 (5-5)
> - 연산 도중에 % 버튼을 눌렀을 경우 현재 입력한 숫자에 적용됩니다.
> - 연산 결과에 이어서 연산을 할 수 있습니다.
> - 연산 결과가 나온 뒤 연산 버튼이 아닌 숫자 버튼을 입력하면 새로운 연산을 합니다.