const btns = document.querySelectorAll(".btns li");
const boxs = document.querySelectorAll("section article");

// 버튼의 개수만큼 반복, 해당 요소 이벤트 등록
for(let i=0;i<btns.length;i++){
// 각 버튼 클릭
    btns[0].addEventListener("click", () => {
        // on 클래스 추가 및 제거 로직
        boxs[0].style.visibility = 'visible';
        boxs[1].style.visibility = 'hidden';
        boxs[2].style.visibility = 'hidden';
        btns[0].style.color = 'black';
        btns[1].style.color = 'gray';
        btns[2].style.color = 'gray';
    });
    
    btns[1].addEventListener("click", () => {
        boxs[0].style.visibility = 'hidden';
        boxs[1].style.visibility = 'visible';
        boxs[2].style.visibility = 'hidden';
        btns[0].style.color = 'gray';
        btns[1].style.color = 'black';
        btns[2].style.color = 'gray';
    });
    
        btns[2].addEventListener("click",() => {
        boxs[0].style.visibility = 'hidden';
        boxs[1].style.visibility = 'hidden';
        boxs[2].style.visibility = 'visible';
        btns[0].style.color = 'gray';
        btns[1].style.color = 'gray';
        btns[2].style.color = 'black';
   });
};


// for(let i of btns) {
//     btns[i].addEventListener("click", (e) => {
//         for(let element of btns) {
//             element.classList.remove('on');
//         };
//        btns[i].classList.add('on');
//         for(let element of articles) {
//             element.classList.remove('on');
//         }
//         articles[i].classList.add('on');
//     });
// };