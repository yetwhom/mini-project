document.addEventListener('DOMContentLoaded', function () {
    // 결과를 표시하는 화면
    var display = document.querySelector('.input');

    // 모든 숫자 버튼
    var numButtons = document.querySelectorAll('.numBtn');

    // 모든 연산자 및 기타 버튼
    var operatorButtons = document.querySelectorAll('.operator, .result, .clear');

    // 현재 입력 값을 저장하는 변수
    var currentInput = '';

    // 각 숫자 버튼에 클릭 이벤트 리스너 추가
    numButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // 숫자 버튼이 클릭되면 현재 입력 값에 숫자를 추가하고 화면 업데이트
            currentInput += button.textContent;
            updateDisplay();
        });
    });

    // 각 연산자 및 기타 버튼에 클릭 이벤트 리스너 추가
    operatorButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (button.textContent === 'C') {
                // 'C' 버튼이 클릭되면 입력 초기화 함수 호출
                clearDisplay();
            } else if (button.textContent === '=') {
                // '=' 버튼이 클릭되면 계산 함수 호출
                evaluateExpression();
            } else {
                // 연산자 버튼이 클릭되면 현재 입력 값에 연산자를 추가하고 화면 업데이트
                // 'x' 연산자일 때는 '*'로 처리
                currentInput += (button.textContent === 'x') ? '*' : ' ' + button.textContent + ' ';
                updateDisplay();
            }
        });
    });

    // 화면 업데이트 함수
    function updateDisplay() {
        display.textContent = currentInput;
    }

    // 입력 초기화 함수
    function clearDisplay() {
        currentInput = '';
        updateDisplay();
    }

    // 계산 함수
    function evaluateExpression() {
        try {
            // Function 객체를 사용하여 현재 입력 값을 계산하고 결과를 화면에 표시
            var result = new Function('return ' + currentInput)();
            currentInput = result;
            updateDisplay();
        } catch (error) {
            // 오류가 발생하면 'Error' 메시지를 화면에 표시
            currentInput = 'Error';
            updateDisplay();
        }
    }
});
