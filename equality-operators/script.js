function parseValue(raw) {
  // If it's a quoted string like '123', keep as string without quotes
  const trimmed = raw.trim();
  const singleQuoted = /^'.*'$/.test(trimmed);
  const doubleQuoted = /^".*"$/.test(trimmed);
  if (singleQuoted || doubleQuoted) return trimmed.slice(1, -1);

  // Try number
  if (!Number.isNaN(Number(trimmed)) && trimmed !== "") {
    return Number(trimmed);
  }
  // Special literals
  if (trimmed === "true") return true;
  if (trimmed === "false") return false;
  if (trimmed === "null") return null;
  if (trimmed === "undefined") return undefined;
  if (trimmed.toLowerCase() === "nan") return NaN;

  return trimmed;
}

function setResult(resultBool, operator, leftRaw, rightRaw, leftVal, rightVal) {
  const container = document.getElementById("result");
  container.className = `result ${resultBool ? "true" : "false"}`;
  container.innerHTML = `
    <p><strong>${leftRaw} ${operator} ${rightRaw} = ${resultBool}</strong></p>
    <div class="type-info">
      <p>Type of first value: <span class="type-highlight">${typeof leftVal}</span></p>
      <p>Type of second value: <span class="type-highlight">${typeof rightVal}</span></p>
    </div>
  `;
}

function getInputs() {
  const leftRaw = document.getElementById("firstValue").value;
  const rightRaw = document.getElementById("secondValue").value;
  const leftVal = parseValue(leftRaw);
  const rightVal = parseValue(rightRaw);
  return { leftRaw, rightRaw, leftVal, rightVal };
}

window.testLoose = function testLoose() {
  const { leftRaw, rightRaw, leftVal, rightVal } = getInputs();
  setResult(leftVal == rightVal, "==", leftRaw, rightRaw, leftVal, rightVal);
};

window.testStrict = function testStrict() {
  const { leftRaw, rightRaw, leftVal, rightVal } = getInputs();
  setResult(leftVal === rightVal, "===", leftRaw, rightRaw, leftVal, rightVal);
};
