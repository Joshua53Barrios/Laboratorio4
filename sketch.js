function calcular(boton) {
  let form = boton.form.elements;
  let a = parseFloat(form["a"].value);
  let b = parseFloat(form["b"].value);
  let c = parseFloat(form["c"].value);

  if ((b ** 2) == (4 * a * c)) {
      console.log("Solo hay una solución para x");
      let sol = ((-1 * -b) + (Math.sqrt((Math.pow(b, 2) - (4 * a * c))))) / (2 * a);
      document.getElementById("resultado").innerHTML = `Solucion Unica: ${sol}`;
      document.getElementById("x").innerHTML = {sol};
  }
  if ((b ** 2) < (4 * a * c)) {
      console.log("la raiz es imaginaria");
      document.getElementById("resultado").innerHTML = "Error: La ecuación ingresada tiene como resultado un numero imaginario ";
  }
  if ((b ** 2) > (4 * a * c)) {
      console.log("x Tiene 2 soluciones");

      let sol1 = ((-1 * -b) + (Math.sqrt((Math.pow(b, 2) - (4 * a * c))))) / (2 * a);

      let sol2 = ((-1 * -b) - (Math.sqrt((Math.pow(b, 2) - (4 * a * c))))) / (2 * a);
      let sol = int;
      sol = sol2;

      document.getElementById("resultado").innerHTML = `Respuesta 1: ${sol1} <br> Respuesta 2: ${sol2}`;
  }

  document.getElementById("resultado");
}

function borrar(boton) {

  let form = boton.form.elements;
  form["a"].value = "";
  form["b"].value = "";
  form["c"].value = "";

  document.getElementById("resultado").innerHTML = "";
}
function setup() {
  createCanvas(500, 500, WEBGL);
  setAttributes('antialias', true);
}
function draw(sol) {
  orbitControl();
  background(10);
  strokeWeight(4);
  stroke(255);
  point(10, 40);
  point(50, 40);

  strokeWeight(5);
  noFill();

  beginShape();
  vertex(10, 40);
  bezierVertex(30, 0, 30, 0 , 50, 40);
  endShape();

} 