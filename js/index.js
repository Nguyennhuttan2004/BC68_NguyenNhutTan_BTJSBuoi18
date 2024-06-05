// let arrNumber = [];

// document.getElementById('add-number').addEventListener('click', () => {
//     const numberInput = document.getElementById('number-input');
//     const number = parseFloat(numberInput.value.replace(',', '.'));
//     if (!isNaN(number)) {
//         arrNumber.push(number);
//         numberInput.value = '';
//         numberInput.focus();
//     } else {
//         alert("Vui lòng nhập một số hợp lệ");
//     }
//     document.getElementById("outPut").innerHTML = `số dc thêm: ${number}`;
// });

let arrNumber = [];

document.getElementById("btnNumber").onclick = function(){
    const numberInput = document.getElementById('numberInput');
    const numberN = parseFloat(numberInput.value.replace(',', '.'));

    arrNumber.push(numberN);
    console.log(arrNumber);

  let theP = document.createElement("p");
  theP.innerHTML = `Các số dc thêm vào: ${numberN}`;

  document.getElementById("outPut").appendChild(theP);
}


// bài 1

document.getElementById("btnTinhTong").onclick = function(){
  let tong = 0;
      for(let item of arrNumber){
        if(item>=0){
          tong+= item;
        }
      }
      let theP = document.createElement("p");
      theP.innerHTML = `Các số dc thêm vào: ${tong}`;

      document.getElementById("bai1").appendChild(theP);
}


// bài 2
document.getElementById("btnDem").onclick = function(){
  let count =0;
  for(let item of arrNumber){
    if(item>0){
         count++;      

    }
  }
  let theP = document.createElement("p");
  theP.innerHTML = `có ${count} số dương trong mảng `;

  document.getElementById("bai2").appendChild(theP);
}

// bài 3

document.getElementById("btnMin").onclick = function(){
  let min = arrNumber[0];
 for(let i = 1;i<arrNumber.length;i++){
    if(arrNumber[i]<min){
      min = arrNumber[i];

    }
 }
 
 let theP = document.createElement("p");
 theP.innerHTML = `số nhỏ nhất co trong mảng là ${min} `;

 document.getElementById("bai3").appendChild(theP);

}


// bài4

document.getElementById("btnPositiveMin").onclick = function(){
  let pMin = arrNumber[0];
  for(let i=1 ; i<arrNumber.length;i++){
    if(arrNumber[i]>0){
      if(arrNumber[i]<pMin){
        pMin = arrNumber[i];
  
      }
    }
  }
  let theP = document.createElement("p");
  theP.innerHTML = `số dương nhỏ nhất co trong mảng là ${pMin} `;
 
  document.getElementById("bai4").appendChild(theP);
}


// bài 5 
document.getElementById("btnLastEvenNumber").onclick = function (){
  let lastEvenNum = -1;
  for( i = arrNumber.length; i>= 0;i--){
    if(arrNumber[i]% 2 ===0 ){
      lastEvenNum =arrNumber[i];
      break;

    }
  }
  let theP = document.createElement("p");
  theP.innerHTML = `số chẵn cuối cùng trong mảng là ${lastEvenNum} `;
 
  document.getElementById("bai5").appendChild(theP);
}

// bài 6 
document.getElementById("btnSwapElement").onclick = function (){
  let index1 = 0;
  let index2 = 0;
  if (index1 < 0 || index1 >= arrNumber.length || index2 < 0 || index2 >= arrNumber.length) {
    throw new Error("Vị trí không hợp lệ");
  }

  const temp = arrNumber[index1];
  arrNumber[index1] = arrNumber[index2];
  arrNumber[index2] = temp;
  

  
}

// bài 7


