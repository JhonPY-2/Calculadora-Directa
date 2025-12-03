const pantalla = document.getElementById("resultado");
let current = "0";
pantalla.value = current;

function addNumber(num) {

  if (current === "0") {
    current = num;
  } else {
    current += num;
  }

  pantalla.value = current;
}


function addOperator(op) {

  const ultimo = current.slice(-1);


  if (current === "0") {
    alert("El formato usado no es válido!");
    return;
  }

  if (/[\+\-x/%]/.test(ultimo)) {
    alert("El formato usado no es válido!");
    return;
  }


  current += op;
  pantalla.value = current;
}


function addDecimal() {


  if (current === "0") {
    current = "0.";
    pantalla.value = current;
    return;
  }

  if (/[\+\-x/%]$/.test(current)) {
    current += "0.";
    pantalla.value = current;
    return;
  }

  let partes = current.split(/[\+\-x/%]/);
  let ultimo = partes[partes.length - 1];


  if (ultimo.includes(".")) return;


  current += ".";
  pantalla.value = current;
}


function calcular() {
  try {


    if (current.trim() === "") {
      throw new Error();
    }

    let expr = current;


    expr = expr.replace(/(\d+)%/g, (_, num) => `(${num}/100)`);


    expr = expr.replace(/x/g, "*");

    if (/[\+\-x/]$/.test(current)) {
      throw new Error();
    }

    let resultado = eval(expr);

    if (!isFinite(resultado)) {
      throw new Error();
    }

    pantalla.value = resultado;
    current = String(resultado);


    setTimeout(() => {
      current = "0";
      pantalla.value = "0";
    }, 1000);

  } catch (error) {

    pantalla.value = "Error";
    current = "0";

    setTimeout(() => {
      pantalla.value = "0";
    }, 1000);
  }
}

function deleteLast() {

  if (current.length <= 1) {
    current = "0";
  } else {
    current = current.slice(0, -1);
  }

  pantalla.value = current;
}

function clearAll() {
  current = "0";
  pantalla.value = "0";
}

