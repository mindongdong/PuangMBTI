const body = document.querySelector("body");
const intro_main = document.querySelector(".intro-main")
const start_main = document.querySelector(".start-main");
const qna = document.querySelector(".qna");
const result = document.querySelector(".result");
const share = document.querySelector(".share")
const start_button = document.querySelector(".start-main__button");
const intro_button = document.querySelector(".intro-main__button");
const share_button = document.querySelector(".result-shareButton");
const endPoint = 12;

intro_button.addEventListener('click', intro);
start_button.addEventListener('click', start);
share_button.addEventListener('click', goShare);

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
    })

    const result_MBTI = pointList[15].name;
    console.log(pointList, result_MBTI);

    for(let a = 0; a < resultList.length; a++){
        if(result_MBTI === resultList[a].type){
            return a;
        }
    }
} 

//결과 이미지 출력 및 QR 코드 출력
function setResult(){
    let resultIndex = calResult();
    const resultName = document.querySelector('.result-nameBox__name');
    resultName.innerHTML = resultList[resultIndex].name;

    const resultImg = document.createElement('img');
    const imgBox = document.querySelector('.result-imgBox');

    let imgURL = 'https://raw.githubusercontent.com/mindongdong/PuangMBTI/19b231299c86f31517afd6287c7248e640716220/img/' + (resultIndex+1) + '_A.svg'
    resultImg.src = imgURL;
    resultImg.classList.add('result-imgBox__img')
    imgBox.appendChild(resultImg);

    const qrImg = document.querySelector('.share-QR__content_1');

    let qrURL = 'https://github.com/mindongdong/PuangMBTI/blob/gh-pages/img/' + (resultIndex+1) +'.png?raw=true';
    qrImg.src = qrURL;

    const resultDesc_1 = document.querySelector('.result-descBox__desc1')
    const resultDesc_2 = document.querySelector('.result-descBox__desc2')
    const resultDesc_3 = document.querySelector('.result-descBox__desc3')
    resultDesc_1.innerHTML = resultList[resultIndex].desc_1;
    resultDesc_2.innerHTML = resultList[resultIndex].desc_2;
    resultDesc_3.innerHTML = resultList[resultIndex].desc_3;
}

//결과화면 전환
function goResult(){
    qna.style.animation = "fadeOut 2s";
    setTimeout(()=>{
        result.style.animation = "fadeIn 1.5s";
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
        qna.style.animation = "fadeOut 0.5s";
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

    qna.style.animation = "fadeIn 1s";

    let index = randomIndex();

    const question = document.querySelector(".question__content");
    question.innerHTML = qnaList[index].q;
    for (let i = 0; i<qnaList[index].a.length; i++){
        addAnswer(qnaList[index].a[i].answer, index,i);
    }

    const status = document.querySelector('.statusBar');
    status.style.width = (100/endPoint) * (12-orderList.length) + '%';

    const statusNum = document.querySelector('.statusNum');
    statusNum.innerHTML = 12-orderList.length + ' / 12'
    statusNum.classList.add("statusNum");
    // test_log
    // console.log(index, qnaList[index].q, qnaList[index].a);
}

//인트로 화면 넘어가기 (MBTI 검사 시작)
function intro(){
    intro_main.style.animation = "fadeOut 1s";
    body.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        qna.style.animation = "fadeIn 1s";
        intro_main.style.display = "none";
        setTimeout(()=>{
            // body.style.backgroundImage = "url('https://raw.githubusercontent.com/mindongdong/PuangMBTI/abcd5f488e2c396ab993e5ab89a511574ad118d8/img/back.svg')";
            qna.style.display = "flex";
        }, 1000)
        nextQ();
    }, 400);
}

//시작 화면
function start(){
    start_main.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        intro_main.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            start_main.style.display = "none";
            intro_main.style.display = "flex";
        }, 400)
    }, 400);
}

//결과 공유 화면 전환
function goShare(){
    result.style.animation = "fadeOut 1s";
    setTimeout(()=>{
        share.style.animation = "fadeIn 1s";
        setTimeout(()=>{
            result.style.display = "none";
            share.style.display = "flex";
        }, 400)
    }, 400);
}