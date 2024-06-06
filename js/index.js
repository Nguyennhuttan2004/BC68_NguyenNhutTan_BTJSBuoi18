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
document.getElementById("btnCompareNum").onclick = function (){
   
  
  arrNumber.sort((a,b)=>{
    return a- b;
  });
let theP = document.createElement("p");
theP.innerHTML = `Mảng đã được sắp xếp ${arrNumber} `;
document.getElementById("bai7").appendChild(theP);
}
//bài 8
// hàm kiểm tra số nguyên tố
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}
function findFirstPrime() {
  for (let i = 0; i < arrNumber.length; i++) {
      if (isPrime(Number(arrNumber[i]))) {
          return arrNumber[i];
      }
  }
  return -1; // Không tìm thấy số nguyên tố nào
}
function findFirstPrimeInInputArray() {
  const inputArray = document.getElementById('numberInput').value* 1;
  const firstPrime = findFirstPrime(inputArray);
  let theP = document.createElement("p");
  theP.innerHTML = `Số nguyên tố đầu tiên trong mảng là: ${firstPrime} `;
 
  document.getElementById("bai8").appendChild(theP);
}

// bài 9

function isInteger(num) {
  return Number.isInteger(num);
}

// Hàm tìm số lượng số nguyên trong mảng
function countIntegers() {
  let count = 0;
  for (let i = 0; i < arrNumber.length; i++) {
      if (isInteger(arrNumber[i])) {
          count++;
      }
  }
  return count;
}
function findIntegersInInputArray() {
  const inputArray = document.getElementById('numberInput').value*1;
  const integerCount = countIntegers(inputArray);
  let theP = document.createElement("p");
  theP.innerHTML = `Số nguyên là: ${integerCount} `;
 
  document.getElementById("bai9").appendChild(theP);
}


// bai10

document.querySelector("#btnSoSanh").addEventListener("click",function()  {
            
  let inputNum = document.querySelector("#numberInput").value *1;
  console.log(inputNum);

let positiveCount = 0;
let negativeCount = 0;

arrNumber.forEach(number => {
    if (number > 0) {
        positiveCount++;
    } else if (number < 0) {
        negativeCount++;
    }
});
let theP = document.createElement("p");

if (positiveCount > negativeCount) {
  theP.innerHTML = "Số lượng số dương nhiều hơn số lượng số âm.";

} else if (negativeCount > positiveCount) {
  theP.innerHTML = "Số lượng số dương  hơn nhỏ số lượng số âm.";

} else {
  theP.innerHTML = "Số lượng số dương bằng với số lượng số âm.";

}
theP.innerHTML = `Số lượng số dương: ${positiveCount}`;
theP.innerHTML =`Số lượng số âm: ${negativeCount}`;
 
  document.getElementById("bai10").appendChild(theP);
})