// Gerando um valor alfanumérico aleatório
function generateAlphanumeric(size) {
  var generatedText = "";
  var alphanumeric = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  for (var i = 0; i < size; i++)
    generatedText += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));

  return generatedText;
}

console.log(generateAlphanumeric(20));
console.log('----------------------');

// Convertendo valores de data
const now = new Date();

const dateConvert = now.toISOString()
.replace(/\..*$|\D/g, '')
.substr(0, 8);

const timeConvert = now.toISOString()
.replace(/\..*$|\D/g, '')
.substr(8, 14);

console.log('Valor de dateConvert: ', dateConvert);
console.log('Valor de timeConvert: ', timeConvert);


