console.log("Start...\n");

const data = {
  "nomeEmpresa": "Samuel",
  "cep": "123465",
  "mesa": {},
  "cadeira": {}
}

const response = {
  "Mesa": {
    "results": [
      {
        "Id": "123456",
        "Cor": "Amarela"
      }
    ]
  },
  "Cadeira": {
    "results": [
      {
        "Id": "456789",
        "Cor": "Marron"
      }
    ]
  }
}

console.log("Data antes: ", data);

 let dt = {};
 Object.keys(response).forEach((key) => {
    if(Array.isArray(response[key].results)) {
      dt = validarSamuel(data, response, key, key.toLowerCase());
      //console.log(key); //column01...
      //console.log(response[key]); //Coluna 01...
    }
});
console.log("Data depois: ", dt);

function validarSamuel(data, response, nome, saida){
      const val = response[`${nome}`];
      data[`${saida}`] = (val)? val.results : [];
      return data; 
 }