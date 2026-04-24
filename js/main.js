let dt = document.getElementById("date");
let task = document.getElementById("tasks");
let text = document.getElementById("text");
let count = document.getElementById("count")
let done = document.getElementById("done")
let c = 0;
let d = 0;

let now = new Date();
console.log(now.getDate())
console.log(now.getMonth() + 1)
console.log(now.getFullYear());
dt.innerHTML = `Date:${now.getDate()}/ ${now.getMonth() + 1}/${now.getFullYear()}`


function add() {
    if (text.value.trim() == "") {
        alert("First enter the text then add ");
        return;
    }
    let item = document.createElement("li");
    let delBtn = document.createElement("button");
    delBtn.textContent = "X";
    item.innerHTML = `
    <span class="task-text">${text.value.trim()}</span>
    <div class="actions">
      <button class="check" onclick="toggleTask(this)">✔</button>
      <button class="delete" onclick="deleteTask(this)">✖</button>
    </div>
  `;
    // item.appendChild(delBtn);
    task.appendChild(item);
    text.value = "";
    // delBtn.addEventListener('click', () => {
    //     item.innerHTML=`<del> ${item.textContent.slice(0,item.textContent.length-1)}</del>`;
    //     d++;
    //     done.innerHTML = d;
    //     if (c == d) {
    //         task.innerHTML = "You have successfully done all the task ";
    //         blast();
    //     }

    // })
    c++;
    count.innerHTML = c;
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
    d++;
    done.innerHTML = d;
    if (c == d) {
        task.innerHTML = "You have successfully done all the task ";
        blast();
    }
}

function toggleTask(btn) {
    let task = btn.parentElement.parentElement.querySelector(".task-text");
    task.classList.toggle("done");
}
function focusInput() {
    document.getElementById("text").focus();
}


function blast() {
    let duration = 1500;
    let end = Date.now() + duration;

    (function frame() {
        confetti({
            particleCount: 6,
            angle: 60,
            spread: 80,
            origin: { x: 0 }
        });

        confetti({
            particleCount: 6,
            angle: 120,
            spread: 80,
            origin: { x: 1 }
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    })();
}