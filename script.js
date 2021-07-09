//sintaxe anteror/ notaçao mais antiga
//const funcao = function(){
//  console.log("funcao")
//}

//sintaxe simplificada para funcao/notaçao mais moderna

//const funcao2 = () => console.log("funcao")

//sempre preferivel utilizar hooks, pq eles permitem gerencar componentes no react e permitem usar estados e componentes funcionais:esses, podem se utilizar de estruturas de memoria. um componente classe vai ser instanciado varias vezes. um componente funcional que usa hooks, vai usar menos memoria e vai melhorar desempenho.

//oo e react -componentes classe, o blueprint de mermoria vai ser maior com componentes classe; mas pode ser usado para mapeamento de espaços de dominio, usar e estruturar dominios no javascritp como classe nao tem diferença significativa na performance.

// let const direito, especifica como usar a memoria, sempre que possivel nomear direito otimiza

//reduce - operação nativa, aspecto funcional - manipula listas, percorre determina lista e faz operação de agrupamento e esse valor é cumulativo. usa o valor antigo na operação atual; muito usada para contar palavras. contar ocorrencia das palavras.
// map / filter / reduce

window.addEventListener('load', () => {
  const botao = document.getElementById('botao');

  botao.addEventListener('click', () => {
    //

    //metodo para o disparar execução depois que a pagina for carregada.window.addEventListener('load', () => {

    let sec = 120; // tempo que queremos em segundos
    const timer = document.getElementById('timer'); //elemento aode os numeros vao aparecer -- document é um objeto - get element é metodo
    const secpass = () => {
      //função responsavel pela execucao do timer
      let min = Math.floor(sec / 60); //metodo floor -> funçao nativa que obtem o numerador inteiro da divisão 2/3 =1,5, com o floor tem chao e tem teto. o chao seria 1 e o teto seria 2 - nao quero numero quebrado, com virgula;
      let secRestantes = sec % 60;
      if (secRestantes < 10) {
        secRestantes = '0' + secRestantes;
      }
      if (min < 10) {
        min = '0' + min;
      }
      //vai gerar o formato de 02:59
      timer.innerHTML = min + ':' + secRestantes;
      //condição final
      if (sec > 0) {
        sec = sec - 1;
      } else {
        timer.innerHTML = "Time's up!!";
      }
    };
    //permite que determinada função seja ex em certo tempo - link para executar o arquivo, uma das formas é pelo tempo - setInterval (funcao nativa) noção de milisegundos - 1segundo=1000milisegundos
    const countDown = setInterval(() => secpass(), 500);
  });
});
