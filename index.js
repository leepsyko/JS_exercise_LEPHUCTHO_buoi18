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
    return ` Kết quả Đậu. Tổng điểm của bạn là ${totalEnd}`;;
  } else {
    return ` Kết quả trượt. Tổng điểm của bạn là ${totalEnd}`;
  }
}

function show() {
  let outKKK = outputresult();
  document.getElementById("showResult").innerHTML = outKKK;
}
