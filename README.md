ENUNCIADO DEL PROYECTO "https://github.com/GeeksHubsAcademy/javascript-empanadas-challenge"

## <h1>Stack 🛠️</h1>

JS - test y lógica

Al tener la formula constancia de cuáles son los precios de cada empanada se hace una media de los mismos para cada una (a + b + c) los cuales dividimos entre 3 y dice la media mínima dependiendo de las posibles combinaciones que podemos realizar.

## <h1>INSTALACIÓN</h1>
PASO 1:
IMPORTA EL PROYECTO DESDE EL SIGUIENTE ENLACE
git clone https://github.com/agomsan/Empanadas
PASO 2:
INSTALACIÓN NPM
EJECUTA EL SIGUIENTE COMANDO EN TU TERMINAL
"npm install"
PASO 3:
TESTING
EJECUTA EL SIGUIENTE COMANDO EN TU TERMINAL
"npm run test"

## <h1>FUNCIÓN UTILIZADA</h1>
const fn = (a, b, c) => {
  const NumberEmpanadas = a + b + c;

  if (a < 0 || b < 0 || c < 0) throw new Error("No se aceptan numeros inferiores a 0");

  if (NumberEmpanadas % 3)  throw new Error("La suma debe ser siempre múltiplo de 3");

  if (NumberEmpanadas > 40)  throw new Error("La suma no debe ser mayor a 40");

  const Total = a * 12 + b * 14 + c * 16;
  return Math.ceil(Total / 3);
};
## <h1>PROBLEMAS ENCONTRADOS</h1>
Hubo un problema a la hora de hacer los test ya que debido a un fallo mio puse console.log en lugar de Throw new Error en el anterio commit y los test fallaban.