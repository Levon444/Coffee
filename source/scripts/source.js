const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const but = document.getElementById('canv');
const form = document.forms.vals;

  let n  /* Количество испытаний */
  let p;/*Вероятность конкретного исхода*/
  let k; //Предполагаемое количество появлений конкретного исхода во время испытаний
  let P; //Вероятность предполагаемого количества конкретных исходов в цикле испытаний
  //Факториал числа
  function Fact(a) {
     if (a==0){
       return 1
     }else{
       return a * Fact(a-1)
     }
  };
  //Фомула Бернулли для вероятности определенного количества испытаний
  function Bernulli(n,p,k){
    P = (this.Fact(n)/(this.Fact(k)*this.Fact(n-k))*Math.pow(p,k)*Math.pow(1-p,n-k));
    return P
  };
  but.onclick = function(){
    n = form.elements.val_n.value;
    p = form.elements.val_p.value;
    n = Number(n);
    p = Number(p)
    let Probability = [];//Массив, содержащий вероятностную схему для данного события.
    for(var j=0; j <= n; j++){
      k = n-j;
      prototype = Bernulli(n,p,k);
      Probability.push(P);
      console.log(Probability[j])
    }
  }
   /* */
    
    

/*Событие по нажатию кнопки
but.onclick = function(){
let entr = new Pre_Entropy(
n = document.getElementById('n').value,
p = document.getElementById('p').value
);
n = Number(n);
p = Number(p);
console.log(p)
let Probability = [];//Массив, содержащий вероятностную схему для данного события.
for(var j=0; j <= n; j++){
  entr.k = n-j;
  entr.prototype = Bernulli(n,p,k);
  Probability.push(P);
  console.log(Probability[j])
}
;
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