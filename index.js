// tạo nút bật tắt cho khu vực

function outputresult() {
  let inputMath = +document.getElementById("input-math").value;
  let inputPhys = +document.getElementById("input-physical").value;
  let inputChem = +document.getElementById("input-chem").value;

  let areaA = document.getElementById("area-A");
  let areaB = document.getElementById("area-B");
  let areaC = document.getElementById("area-C");
  let areaX = document.getElementById("area-X");
  let person1 = document.getElementById("person-1");
  let person2 = document.getElementById("person-2");
  let person3 = document.getElementById("person-3");
  let personX = document.getElementById("person-x");
  let scoreStan = +document.getElementById("input-standar").value;

  let totalEnd = inputMath + inputPhys + inputChem;

  if (areaA.checked) {
    totalEnd += 2;
  } else if (areaB.checked) {
    totalEnd += 1;
  } else if (areaC.checked) {
    totalEnd += 0.5;
  }

  if (person1.checked) {
    totalEnd += 2.5;
  } else if (person2.checked) {
    totalEnd += 1.5;
  } else if (person3.checked) {
    totalEnd += 1;
  }

  if (inputMath === 0 || inputPhys === 0 || inputChem === 0) {
    return ` Kết quả trượt. Tổng điểm của bạn là ${totalEnd}`;
  }

  if (scoreStan === 0) {
    alert("Nhập điểm chuẩn vào");
  } else if (totalEnd >= scoreStan) {
    return ` Kết quả Đậu. Tổng điểm của bạn là ${totalEnd}`;
  } else {
    return ` Kết quả trượt. Tổng điểm của bạn là ${totalEnd}`;
  }
}

function show() {
  let outKKK = outputresult();
  document.getElementById("showResult").innerHTML = outKKK;
}

// bài tập tính tiền điện của một cá nhân nào đó

function payEnergy(inputEnergy) {
  let paymentBill = 0;
  if (inputEnergy <= 50) {
    paymentBill += 500 * inputEnergy;
  } else if (inputEnergy <= 100) {
    paymentBill += 500 * 50 + (inputEnergy - 50) * 650;
  } else if (inputEnergy <= 200) {
    paymentBill += 500 * 50 + 650 * 50 + (inputEnergy - 100) * 850;
  } else if (inputEnergy <= 350) {
    paymentBill += 500 * 50 + 650 * 50 + 100 * 850 + (inputEnergy - 200) * 1100;
  } else {
    paymentBill +=
      500 * 50 + 650 * 50 + 100 * 850 + 150 * 1100 + (inputEnergy - 350) * 1300;
  }
  return paymentBill.toLocaleString();
}

function calEnergy() {
  let inputNameEnergy = document.getElementById("input-NameEnergy").value;
  let inputNumberEnergy = +document.getElementById("input-numberEnergy").value;

  document.getElementById(
    "output-NameEnergy"
  ).innerHTML = ` Hoá Đơn Tiền Điện Của ${inputNameEnergy} là ${payEnergy(
    inputNumberEnergy
  )}`;
}

// bài tập tính thuế

function calTax(income, people) {
  let taxIncome = income - 4e6 - people * 1.6e6;
  let taxPay = 0;

  if (taxIncome <= 0) {
    return (taxPay = 0);
  }

  if (taxIncome <= 60e6) {
    taxPay += taxIncome * 0.05;
  } else if (taxIncome <= 120e6) {
    taxPay += 60e6 * 0.05 + (taxIncome - 60e6) * 0.1;
  } else if (taxIncome <= 210e6) {
    taxPay += 60e6 * 0.05 + 60e6 * 0.1 + (taxIncome - 120e6) * 0.15;
  } else if (taxIncome <= 384e6) {
    taxPay +=
      60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + (taxIncome - 210e6) * 0.2;
  } else if (taxIncome <= 624e6) {
    taxPay +=
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      (taxIncome - 384e6) * 0.25;
  } else if (taxIncome <= 960e6) {
    taxPay +=
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      (taxIncome - 624e6) * 0.3;
  } else {
    taxPay +=
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      336e6 * 0.3 +
      (taxIncome - 624e6) * 0.35;
  }
  return taxPay;
}

function showTax(hhh, nnn) {
  // call back funcion
  document.getElementById(hhh).innerHTML = nnn();
}

function noTax() {
  return "Bạn không cần phải đóng. ";
}
function PayTax() {
  return "Bạn cần phải đóng là: ";
}

function showDemo() {
  let inputWages = +document.getElementById("input-wages").value;
  let inputPeople = +document.getElementById("input-people").value;

  let x = calTax(inputWages, inputPeople);

  if (x === 0) {
    showTax("output-tax", noTax);
  } else {
    showTax("output-tax", PayTax);
    document.getElementById(
      "output-tax"
    ).innerHTML += ` ${x.toLocaleString()} Đồng `;
  }
}

//  Tính Tiền Cáp

function changeSelection() {
  let InputCustomer = document.getElementById("typeCustomer").value;

  if (InputCustomer === "business") {
    document.getElementById("input-connect").style.display = "block";
  } else {
    document.getElementById("input-connect").style.display = "none";
  }
}

function calInter(p1, p2, p3) {
  let numbInterS = 1;
  numbInterS = +document.getElementById("enterConnect").value;
  let numbInterV = +document.getElementById("enterVip").value;
  let internet = 0;

  if (numbInterS > 10) {
    internet = p1 + p2 + p3 * numbInterV + (numbInterS - 10) * 5;
  } else {
    internet = p1 + p2 + p3 * numbInterV;
  }
  return internet;
}

function resultInter() {
  let InputCustomer = document.getElementById("typeCustomer").value;
  let showInter = "";

  if (InputCustomer === "business") {
    showInter = calInter(15, 75, 50);
  } else {
    showInter = calInter(4.5, 20.5, 7.5);
  }

  showTax("output-Inter", codeCust);
  return (document.getElementById(
    "output-Inter"
  ).innerHTML += ` phải đóng số tiền là ${showInter}$`);
}

function codeCust() {
  return document.getElementById("input-code").value;
}
