function e(e){document.querySelector(".total-all-num").textContent=e.filter((e=>!0!==e.done&&!0!==e.inProgress)).length,document.querySelector(".total-complete-num").textContent=e.filter((e=>!0===e.inProgress)).length,document.querySelector(".total-done-num").textContent=e.filter((e=>!0===e.done)).length}function t(e){e.forEach(((e,t)=>{localStorage.setItem(`todo #${t+1}`,JSON.stringify(e))}))}function n(e,t){return"make"===t?`<div class="task">\n                    <div class="task-date">\n                        <p>Todo</p>\n                        <div class="date-task">03.12.2022</div>\n                    </div>\n                    <hr>\n                    <div class="task-wrapper">\n\n                            <div class="task-name">${e.task}</div>\n                            <div class="task-descr">${e.descr}</div>\n\n                    </div>\n                    <hr>\n                    <div class="delete">\n                        <p>${e.author}</p>\n\n                          \n                          <button class="option-progress-btn">In Prog</button>\n                          <button class="option-done-btn">DONE</button>\n                        <div class="option-delete-img">\n\x3c!--                            <img src="./img/free-icon-bin-5375931.png" alt="delete">--\x3e\n                            del\n                        </div>\n                    </div>\n                </div>`:"done"===t?`<div class="task">\n                    <div class="task-date">\n                        <p>Todo</p>\n                        <div class="date-task">03.12.2022</div>\n                    </div>\n                    <hr>\n                    <div class="task-wrapper">\n                            <div class="task-name">${e.task}</div>\n                            <div class="task-descr">${e.descr}</div>\n                    </div>\n                    <hr>\n                     <div class="delete">\n                        <p>${e.author}</p>\n\n                          \n                          <button class="option-progress-btn">In Prog</button>\n                        <div class="option-delete-img">\n\x3c!--                            <img src="./img/free-icon-bin-5375931.png" alt="delete">--\x3e\n                            del\n                        </div>\n                    </div>\n                </div>`:"progress"===t?`<div class="task">\n                    <div class="task-date">\n                        <p>Todo</p>\n                        <div class="date-task">03.12.2022</div>\n                    </div>\n                    <hr>\n                    <div class="task-wrapper">\n                            <div class="task-name">${e.task}</div>\n                            <div class="task-descr">${e.descr}</div>\n                    </div>\n                    <hr>\n                     <div class="delete">\n                        <p>${e.author}</p>\n\n                          <button class="option-make-btn">MAKE</button>\n                          <button class="option-done-btn">DONE</button>\n                        <div class="option-delete-img">\n\x3c!--                            <img src="./img/free-icon-bin-5375931.png" alt="delete">--\x3e\n                            del\n                        </div>\n                    </div>\n                </div>`:void 0}function o(){let e=document.querySelectorAll(".date-task"),t=document.querySelector("#date-header");function n(e){return e<10&&(e="0"+e),e}let o=new Date,s=n(o.getDate()),a=n(o.getMonth()+1),l=o.getFullYear();t.innerHTML=s+"."+a+"."+l,e.forEach((e=>{e.innerHTML=s+"."+a+"."+l}))}function s(e){!function(e){let t=document.querySelector(".make-tasks-list");t.innerHTML="",e.filter((e=>{if(!1===e.done&&!1===e.inProgress){let o=document.createElement("div");o.innerHTML=n(e,"make"),t.append(o)}}))}(e),function(e){let t=document.querySelector(".progress-tasks-list");t.innerHTML="",e.filter((e=>{if(!0===e.inProgress){let o=document.createElement("div");o.innerHTML=n(e,"progress"),t.append(o)}}))}(e),function(e){let t=document.querySelector(".done-tasks-list");t.innerHTML="",e.filter((e=>{if(!0===e.done){let o=document.createElement("div");o.innerHTML=n(e,"done"),t.append(o)}}))}(e),t(e),o()}let a=[];var l,r,d;!function(e){if(localStorage.length>=1)for(let t=0;t<localStorage.length;t++){let n=localStorage.key(t);e.push(JSON.parse(localStorage.getItem(n)))}}(a),s(a),function(e,t,n){let o=document.querySelector("form"),s=document.querySelector(".pop-up-wrapper"),a=document.querySelector(".pop-up"),l=document.querySelector(".main-title");o.addEventListener("submit",(r=>{if(r.preventDefault(),o.task.value.length>=1&&o.descr.value.length>=1&&o.author.value.length>=1)e.push({task:o.task.value,descr:o.descr.value,author:o.author.value,inProgress:!1,done:!1}),t(e),o.task.value="",o.descr.value="",o.author.value="",a.classList.add("hide"),a.classList.remove("show"),document.body.style.overflow="scroll",n(e);else{let e=document.createElement("h3");s.classList.toggle("error"),e.innerHTML="Не все поля заполнены",l.append(e)}}))}(a,s,e),e(a),function(){let e=document.querySelector("form"),t=document.querySelector(".option-plus-img"),n=document.querySelector(".pop-up"),o=document.querySelectorAll(".close-button");t.addEventListener("click",(()=>{n.classList.add("show"),n.classList.remove("hide"),document.body.style.overflow="hidden"})),o.forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault(),n.classList.add("hide"),n.classList.remove("show"),document.body.style.overflow="scroll"})),e.task.value="",e.descr.value="",e.author.value=""}))}(),l=a,r=s,d=e,document.querySelector(".todo-list").addEventListener("click",(e=>{let t=e.target;if("img-make-delete"===t.className){let e=l.filter((e=>!1!==e.inProgress&&!1!==e.done));localStorage.clear(),l=[],l=e}if("img-prog-delete"===t.className){let e=l.filter((e=>!0!==e.inProgress));localStorage.clear(),l=[],l=e}if("img-done-delete"===t.className){let e=l.filter((e=>!0!==e.done));localStorage.clear(),l=[],l=e}if("option-done-btn"===t.className){let e=t.parentNode.parentNode.querySelector(".task-name").textContent;l.forEach((t=>{t.task===e&&(t.inProgress=!1,t.done=!0)}))}if("option-progress-btn"===t.className){let e=t.parentNode.parentNode.querySelector(".task-name").textContent;l.forEach((t=>{t.task===e&&(t.done=!1,t.inProgress=!0)}))}if("option-make-btn"===t.className){let e=t.parentNode.parentNode.querySelector(".task-name").textContent;l.forEach((t=>{t.task===e&&(t.done=!1,t.inProgress=!1)}))}if("option-delete-img"===t.className){let e=t.parentNode.parentNode.querySelector(".task-name").textContent,n=l.filter((t=>t.task!==e));localStorage.clear(),l=[],l=n}r(l),d(l)}));