var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var but = document.getElementById('canv');


class Pre_Entropy {
  constructor(){
  let n  /* Количество испытаний */
  let p /*Вероятность конкретного исхода*/
  let k; //Предполагаемое количество появлений конкретного исхода во время испытаний
  let P; //Вероятность предполагаемого количества конкретных исходов в цикле испытаний
  };
  //Факториал числа
   Fact(a) {
     for(var i=1; i <= n; i++){
      a = a*(n-i);
     }   
     return a
  };
  //Фомула Бернулли для вероятности определенного количества испытаний
  Bernulli(n,p,k){
    P = (this.Fact(n)/(this.Fact(k)*this.Fact(n-k))*Math.pow(p,k)*Math.pow(1-p,n-k));
    return P
  }
  
}
//Событие по нажатию кнопки
but.onclick = function(){
let entr = new.Pre_Entropy;
entr.n = document.getElementById('n').value;
entr.p = document.getElementById('p').value;
let Probability = [];//Массив, содержащий вероятностную схему для данного события.
for(var j=0; j <= n; j++){
  entr.k = n-j;
  entr.Bernulli(n,p,k);
  Probability.push(P)
}
}
/*but.onclick = function(){
var elems = [];
for (var i = 1; i <= 1; i++) {
  var nFact = function(){
  for(var j = 1; j<=n; j++ ){
   var N = n*(n-j)
  };
  return N;
  };
  var kFact = function(){
    for(var j = 1; j<=i; j++ ){
     var K = i*(i-j)
    };
    return K;
    };
    var nkFact = function(){
      for(var j = 1; j<=i; j++ ){
       var K = i*(i-j)
      };
      return K;
      };
  var P = N
  elems.push(i);
}
}
const COLORS = [
    `#b3d5fc`,
    `#98d9d9`,
    `#ede493`
  ];
  const inputElements = document.querySelectorAll(`.input_value`);*/