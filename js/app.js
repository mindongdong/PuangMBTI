const start_main = document.querySelector(".start-main");
const qna = document.querySelector(".qna");
const result = document.querySelector(".result");
const start_button = document.querySelector(".start-main__button");
const endPoint = 12;

start_button.addEventListener('click', start);

//결과 계산
function calResult(){
    const pointList  = [
        { name: "ISTJ", type: ["I", "S", "T", "J"], value: 0,},
        { name: "ISFJ", type: ["I", "S", "F", "J"], value: 0,},
        { name: "INFJ", type: ["I", "N", "F", "J"], value: 0,},
        { name: "INTJ", type: ["I", "N", "T", "J"], value: 0,},
        { name: "ISTP", type: ["I", "S", "T", "P"], value: 0,},
        { name: "ISFP", type: ["I", "S", "F", "P"], value: 0,},
        { name: "INFP", type: ["I", "N", "F", "P"], value: 0,},
        { name: "INTP", type: ["I", "N", "T", "P"], value: 0,},
        { name: "ESTP", type: ["E", "S", "T", "P"], value: 0,},
        { name: "ESFP", type: ["E", "S", "F", "P"], value: 0,},
        { name: "ENFP", type: ["E", "N", "F", "P"], value: 0,},
        { name: "ENTP", type: ["E", "N", "T", "P"], value: 0,},
        { name: "ENTJ", type: ["E", "N", "T", "J"], value: 0,},
        { name: "ESFJ", type: ["E", "S", "F", "J"], value: 0,},
        { name: "ENFJ", type: ["E", "N", "F", "J"], value: 0,},
        { name: "ENTJ", type: ["E", "N", "T", "J"], value: 0,},
    ];

    for(let i = 0; i < endPoint; i++){
        let a_type = qnaList[i].a[select[i]].type;
        for (let j = 0; j < pointList.length; j++){
            for (let k = 0; k < pointList[j].type.length; k++){
                if (a_type === pointList[j].type[k]){
                    pointList[j].value += 1;
                }
            }
        }
    }

    pointList.sort((a,b)=>{
        if (a.value > b.value) {
            return 1;
        } else if (a.value < b.value) {
            return -1;
        }
          // a must be equal to b
          return 0;
    })

    const result_MBTI = pointList[15].name;
    console.log(pointList, result_MBTI);

    for(let k = 0; k < resultList.length; k++){
        if(result_MBTI === resultList[k].type){
            console.log(resultList[k].name);
            return k;
        }
    }
} 

function setResult(){
    let resultIndex = calResult();
    const resultName = document.querySelector('.result-nameBox__name');
    resultName.innerHTML = resultList[resultIndex].name;

    const resultImg = document.createElement('img');
    const imgBox = document.querySelector('.result-imgBox');

    let imgURL = 'img/' + (resultIndex+1) + '.jpg'
    resultImg.src = imgURL;
    resultImg.classList.add('result-imgBox__img')
    imgBox.appendChild(resultImg);

    const resultDesc_1 = document.querySelector('.result-descBox__desc1')
    const resultDesc_2 = document.querySelector('.result-descBox__desc2')
    const resultDesc_3 = document.querySelector('.result-descBox__desc3')
    resultDesc_1.innerHTML = resultList[resultIndex].desc_1;
    resultDesc_2.innerHTML = resultList[resultIndex].desc_2;
    resultDesc_3.innerHTML = resultList[resultIndex].desc_3;
}

//결과화면 전환
function goResult(){
    qna.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        result.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            qna.style.display = "none";
            result.style.display = "flex";
        }, 400)
    }, 400);
    console.log(select);
    setResult();
}

//랜덤 인덱스 생성
function randomIndex(){
    const randomNum = Math.floor(Math.random()*orderList.length);
    const randomItem = orderList[randomNum]
    let removedItem = orderList.splice(randomNum, 1);
    console.log(orderList, randomNum, randomItem);
    return randomItem;
}

//다음 답변으로 전환
function addAnswer(answerText, index, button_idx){
    const answer_box = document.querySelector(".answer");
    const answer = document.createElement("button");
    answer.classList.add('answer_button');
    answer_box.appendChild(answer);
    answer.innerHTML = answerText;
    
    answer.addEventListener('click', ()=>{
        const box_children = document.querySelectorAll('.answer_button');
        for (let i = 0; i<box_children.length; i++){
            box_children[i].disabled = true;
            box_children[i].style.animation = "fadeOut 0.5s";
        }
        setTimeout(()=>{
            select[index] = button_idx;
            for (let i = 0; i<box_children.length; i++){
                box_children[i].style.display = 'none';
            }
            nextQ();
        }, 400);
    })
}

//다음 질문으로 전환
function nextQ(){
    if(12-orderList.length == endPoint){
        goResult();
        return 0;
    }

    let index = randomIndex();

    const question = document.querySelector(".question__content");
    question.innerHTML = qnaList[index].q;
    for (let i = 0; i<qnaList[index].a.length; i++){
        addAnswer(qnaList[index].a[i].answer, index,i);
    }

    const status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (12-orderList.length) + '%';

    const statusNum = document.querySelector('.statusNum');
    statusNum.innerHTML = 12-orderList.length + '/ 12'
    // test_log
    // console.log(index, qnaList[index].q, qnaList[index].a);
}

//시작 버튼 작동
function start(){
    start_main.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        qna.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            start_main.style.display = "none";
            qna.style.display = "flex";
        }, 400)
        nextQ();
    }, 400);
}