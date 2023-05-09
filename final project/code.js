

window.onload = function(){
     let result = {};
     let step = 0;

     function showQuestion (questionNumber){
document.querySelector(".question").innerHTML = quiz[step]['q'];
let answer = ''
for (let key in quiz[step]['a']){
    answer += `<li data-v="${key}"class="answer-variant">${quiz[step]['a'][key]}</li>`
}
document.querySelector(".answer").innerHTML = answer;
// answer.addEventListener('click', function() {
//     let r = document.createRange();
//     r.selectNode(this);
//     document.getSelection().addRange(r);
// });

     }
     document.onclick = function (event) {
        event.stopPropagation();
        if (event.target.classList.contains('answer-variant') && step < quiz.length){
            if (result[event.target.dataset.v] !=undefined){
                result[event.target.dataset.v] ++;
            } else {
                result[event.target.dataset.v] = 0;
            }
            step++;
            if (step == quiz.length){
                document.querySelector('.question').remove();
                document.querySelector('.answer').remove();
                showResult();
            }
            else {
                showQuestion(step)
            }
            ul.onclick = function(event) {
                if (event.target.classList.contains('answer-variant') != "answer-variant") return;
          
                if (event.ctrlKey || event.metaKey) {
                  toggleSelect(event.target);
                } else {
                  singleSelect(event.target);
                }
          
              }
          
              // предотвращает ненужное выделение элементов списка при клике
              ul.onmousedown = function() {
                return false;
              };
          
              function toggleSelect(li) {
                ul.classList.contains('answer-variant');
              }
          
              function singleSelect(li) {
                let selected = ul.classList.contains('answer-variant');
                for(let elem of selected) {
                  elem.classList.contains('answer-variant');
                }
                ul.classList.add.contains('answer-variant');
              } 


        }
        showQuestion(step)
        
     }
     function showResult(){
        let key = Object.keys(result).reduce(function(a,b){
            return result[a] > result[b] ? a:b
        });

        let div = document.createElement('div');
        div.classList.add('result');
        div.innerHTML = answers[key]['description'];
        document.querySelector('main').appendChild(div);
        localStorage.setItem('Результат', JSON.stringify(div.innerHTML))
        
     }
     
     showQuestion(step);
     function savElement (){
        let div = document.createElement('div');
        div.classList.add('result');
        div.innerHTML = answers[key]['description'];
        document.querySelector('main').appendChild(div);
        localStorage.setItem('Результат', JSON.stringify(div.innerHTML))
    } 
    function getElement() {
        parent.innerHTML = localStorage.getItem(parsed);}

savElement();
getElement();
    }