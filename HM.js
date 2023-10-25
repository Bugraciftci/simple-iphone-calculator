  let outputDiv = document.getElementById("outputDiv");
  let currentInput = "";

  function appendNumber(number) {
    currentInput += number;
    updateOutput();
  }

  function appendOperator(operator) {
    currentInput += operator;
    updateOutput();
  }

  function appendDecimal() {
    currentInput += ".";
    updateOutput();
  }

  function clearOutput() {
    currentInput = "";
    updateOutput();
  }

  function toggleNegation() {
    currentInput = eval(`-${currentInput}`);
    updateOutput();
  }

  function addPercentage() {
    currentInput = eval(`(${currentInput})/100`);
    updateOutput();
  }

  function calculateResult() {
    currentInput = eval(currentInput);
    updateOutput();
  }

  function updateOutput() {
    outputDiv.textContent = currentInput;
  }
