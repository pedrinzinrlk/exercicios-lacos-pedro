let pessoa = {
    nome: "Ana",
    idade: 25,
    cidade: "Curitiba"
};

for (let atributo in pessoa){
    console.log(pessoa[atributo]);
}