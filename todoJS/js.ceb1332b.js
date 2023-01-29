// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"LO9E":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveLocalStorage = saveLocalStorage;
function saveLocalStorage(state) {
  state.forEach((todo, index) => {
    localStorage.setItem(`todo #${index + 1}`, JSON.stringify(todo)); ///// сохраняем в json формате в локальном зранилище нащи таски
  });
}
},{}],"tFOi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getHtmlTask = getHtmlTask;
function getHtmlTask(prop, nameColumn) {
  //////// возвращаем определённую вёрстку по условию

  if (nameColumn === 'make') {
    return `<div class="task">
                    <div class="task-date">
                        <p>Todo</p>
                        <div class="date-task">03.12.2022</div>
                    </div>
                    <hr>
                    <div class="task-wrapper">

                            <div class="task-name">${prop.task}</div>
                            <div class="task-descr">${prop.descr}</div>

                    </div>
                    <hr>
                    <div class="delete">
                        <p>${prop.author}</p>

                          
                          <button class="option-progress-btn">In Prog</button>
                          <button class="option-done-btn">DONE</button>
                        <div class="option-delete-img">
<!--                            <img src="./img/free-icon-bin-5375931.png" alt="delete">-->
                            del
                        </div>
                    </div>
                </div>`;
  }
  if (nameColumn === 'done') {
    return `<div class="task">
                    <div class="task-date">
                        <p>Todo</p>
                        <div class="date-task">03.12.2022</div>
                    </div>
                    <hr>
                    <div class="task-wrapper">
                            <div class="task-name">${prop.task}</div>
                            <div class="task-descr">${prop.descr}</div>
                    </div>
                    <hr>
                     <div class="delete">
                        <p>${prop.author}</p>

                          
                          <button class="option-progress-btn">In Prog</button>
                        <div class="option-delete-img">
<!--                            <img src="./img/free-icon-bin-5375931.png" alt="delete">-->
                            del
                        </div>
                    </div>
                </div>`;
  }
  if (nameColumn === 'progress') {
    return `<div class="task">
                    <div class="task-date">
                        <p>Todo</p>
                        <div class="date-task">03.12.2022</div>
                    </div>
                    <hr>
                    <div class="task-wrapper">
                            <div class="task-name">${prop.task}</div>
                            <div class="task-descr">${prop.descr}</div>
                    </div>
                    <hr>
                     <div class="delete">
                        <p>${prop.author}</p>

                          <button class="option-make-btn">MAKE</button>
                          <button class="option-done-btn">DONE</button>
                        <div class="option-delete-img">
<!--                            <img src="./img/free-icon-bin-5375931.png" alt="delete">-->
                            del
                        </div>
                    </div>
                </div>`;
  }
}
},{}],"NkK7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dateTime = dateTime;
function dateTime() {
  let dateTask = document.querySelectorAll('.date-task');
  let date = document.querySelector('#date-header');
  function formatDate(value) {
    if (value < 10) {
      value = '0' + value;
    }
    return value;
  }
  let currentDatetime = new Date();
  let day = formatDate(currentDatetime.getDate());
  let month = formatDate(currentDatetime.getMonth() + 1);
  let year = currentDatetime.getFullYear();
  date.innerHTML = day + "." + month + "." + year;
  dateTask.forEach(item => {
    item.innerHTML = day + "." + month + "." + year;
  });
}
},{}],"ffVN":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
var _saveLocalStorage = require("./saveLocalStorage");
var _getHtmlTask = require("./getHtmlTask");
var _dateTime = require("./dateTime");
function render(state) {
  function renderMakeTask(state) {
    //////// создаём функцию которая рисует задачи в колонке MAKE
    let makeTaskList = document.querySelector('.make-tasks-list');
    makeTaskList.innerHTML = ''; //////// чистим вёртску дива с таксками

    let makeState = state.filter(task => {
      if (task.done === false && task.inProgress === false) {
        //////// условие при ктором рисуются таски подходящие по условию

        let todo = document.createElement("div"); //////// создаём новый див , обёртку для таски
        todo.innerHTML = (0, _getHtmlTask.getHtmlTask)(task, 'make'); //////// наполняем див , версткой для такски
        makeTaskList.append(todo); //////// присваеваем нашу таску как дочений элемент блоку с тасками
      }
    });

    return makeState; //////// возвращаем отсотированный массив
  }

  renderMakeTask(state);
  function renderProgressTask(state) {
    let progTaskList = document.querySelector('.progress-tasks-list');
    progTaskList.innerHTML = '';
    let progressState = state.filter(task => {
      if (task.inProgress === true) {
        let todo = document.createElement("div");
        todo.innerHTML = (0, _getHtmlTask.getHtmlTask)(task, 'progress');
        progTaskList.append(todo);
      }
    });
    return progressState;
  }
  renderProgressTask(state);
  function renderDoneTask(state) {
    let doneTaskList = document.querySelector('.done-tasks-list');
    doneTaskList.innerHTML = '';
    let doneState = state.filter(task => {
      if (task.done === true) {
        let todo = document.createElement("div");
        todo.innerHTML = (0, _getHtmlTask.getHtmlTask)(task, 'done');
        doneTaskList.append(todo);
      }
    });
    return doneState;
  }
  renderDoneTask(state);
  (0, _saveLocalStorage.saveLocalStorage)(state);
  (0, _dateTime.dateTime)();
  console.log(state);
}
},{"./saveLocalStorage":"LO9E","./getHtmlTask":"tFOi","./dateTime":"NkK7"}],"wsnx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTotal = setTotal;
function setTotal(state) {
  ///////// отросвка счётчика

  document.querySelector('.total-all-num').textContent = state.filter(task => task.done !== true && task.inProgress !== true).length;
  document.querySelector('.total-complete-num').textContent = state.filter(task => task.inProgress === true).length;
  document.querySelector('.total-done-num').textContent = state.filter(task => task.done === true).length;
}
},{}],"uZbI":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.valid = valid;
var _render = require("./render");
var _setTotal = require("./setTotal");
var _index = require("./index");
function valid(state) {
  //////////// заполнение формы

  let formTask = document.querySelector('form');
  let popWrapper = document.querySelector('.pop-up-wrapper');
  let popUp = document.querySelector('.pop-up');
  let mainTitlePop = document.querySelector('.main-title');
  formTask.addEventListener('submit', event => {
    /////////// вешаем на форму обработчик события "подтверждения формы" по клику
    event.preventDefault(); /////////// убираем перезагрузку с формы по клику

    if (formTask.task.value.length >= 1 && formTask.descr.value.length >= 1 && formTask.author.value.length >= 1) {
      /////////// волидация , условие

      state.push(
      /////////// создаем обьект со свойствами нашей таски и пушим его в массив
      {
        task: formTask.task.value,
        descr: formTask.descr.value,
        author: formTask.author.value,
        inProgress: false,
        done: false
      });
      formTask.task.value = ''; /////////// обнуляем value формы
      formTask.descr.value = '';
      formTask.author.value = '';
      popUp.classList.add('hide'); /////////// закрываем форму удаляя селектор
      popUp.classList.remove('show');
      document.body.style.overflow = 'scroll';
      (0, _setTotal.setTotal)(state);
      (0, _render.render)(state);
    } else {
      let error = document.createElement("h3"); /////////// ошибка если инпуты пустые
      popWrapper.classList.toggle('error');
      error.innerHTML = 'Не все поля заполнены';
      mainTitlePop.append(error);
    }
  });
}
},{"./render":"ffVN","./setTotal":"wsnx","./index":"mahc"}],"cUhm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openModal = openModal;
function openModal() {
  let formTask = document.querySelector('form');
  let openPopBtn = document.querySelector('.option-plus-img');
  let popUp = document.querySelector('.pop-up');
  let closeBtn = document.querySelectorAll('.close-button');
  openPopBtn.addEventListener('click', () => {
    popUp.classList.add('show');
    popUp.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  });
  closeBtn.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault(); //// убираем перезагрузку страницы
      popUp.classList.add('hide');
      popUp.classList.remove('show');
      document.body.style.overflow = 'scroll';
    });
    formTask.task.value = '';
    formTask.descr.value = '';
    formTask.author.value = '';
  });
}
},{}],"N6kv":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainRender = mainRender;
function mainRender(state) {
  //////// функия которая при загрузке страницы проверяет если есть в локальном хранилище такси , заполняет state

  if (localStorage.length >= 1) {
    //////// проверяет если есть в локальном хранилище больше 0 задач

    for (let i = 0; i < localStorage.length; i++) {
      //////// если есть запускает цикл
      let key = localStorage.key(i);
      state.push(JSON.parse(localStorage.getItem(key))); //////// переводи из json формата наши такси и заполняем state
    }
  }
}
},{}],"Trx7":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeDeleteTask = changeDeleteTask;
var _render = require("./render");
var _index = require("./index");
// import {mainRender} from "./mainRender";

function changeDeleteTask(state, setTotal) {
  /////// функция которая удаляет и пернесоит таски

  let toDoList = document.querySelector('.todo-list'); /////// обращаемся к div , области где находяться все такси

  toDoList.addEventListener('click', event => {
    /////// вешаем обработчик событий нашу область , див , по клику

    ////// удаление по калонкам

    let target = event.target; ////// присваем переменной таргет что бы проще обращаться

    if (target.className === 'img-make-delete') {
      /////// условие при котором , у облости где мы нажали есть класс с именеем 'img-make-delete' , выаполняется

      state.forEach((item, index) => {
        if (item.inProgress === false && item.done === false) {
          delete state[index];
          // state.splice(index)
        }
      });

      localStorage.clear();
    } else if (target.className === 'img-prog-delete') {
      state.forEach((item, index) => {
        if (item.inProgress === true) {
          delete state[index];
          // state.splice(index)
        }
      });

      localStorage.clear();
    } else if (target.className === 'img-done-delete') {
      state.forEach((item, index) => {
        if (item.done === true) {
          delete state[index];
          // state.splice(index)
        }
      });

      localStorage.clear();
    } else
      ////// замена либо удаление по одной таске

      if (target.className === 'option-done-btn') {
        let taskName = target.parentNode.parentNode.querySelector('.task-name').textContent; ////// обращаемсья к родительскому элементу нашей таски и ищем имя задача
        state.forEach(item => {
          ////// перебираем массив и отсавляем в массиве только те такси которые подходят по условию
          if (item.task === taskName) {
            item.inProgress = false;
            item.done = true;
          }
        });
      } else if (target.className === 'option-progress-btn') {
        let taskName = target.parentNode.parentNode.querySelector('.task-name').textContent;
        state.forEach(item => {
          if (item.task === taskName) {
            item.done = false;
            item.inProgress = true;
          }
        });
      } else if (target.className === 'option-make-btn') {
        let taskName = target.parentNode.parentNode.querySelector('.task-name').textContent;
        state.forEach(item => {
          if (item.task === taskName) {
            item.done = false;
            item.inProgress = false;
          }
        });
      } else if (target.className === 'option-delete-img') {
        let taskName = target.parentNode.parentNode.querySelector('.task-name').textContent;
        state.forEach((item, index) => {
          if (item.task == taskName) {
            state.splice(index, 1);
          }
        });
        localStorage.clear();
      }
    (0, _render.render)(state);
    setTotal(state);
  });
}
},{"./render":"ffVN","./index":"mahc"}],"mahc":[function(require,module,exports) {
"use strict";

var _valid = require("./valid");
var _setTotal = require("./setTotal");
var _openModal = require("./openModal");
var _mainRender = require("./mainRender");
var _render = require("./render");
var _changeDeleteTask = require("./changeDeleteTask");
/////// экспортируем модули

let state = []; /////// создали наше хранилище с тасками

/////// по порядку вызываем наши функции

(0, _mainRender.mainRender)(state);
(0, _render.render)(state);
(0, _valid.valid)(state, _setTotal.setTotal);
(0, _setTotal.setTotal)(state);
(0, _openModal.openModal)();
(0, _changeDeleteTask.changeDeleteTask)(state, _setTotal.setTotal);

// export function chekState() {
//     render(state)
// }
},{"./valid":"uZbI","./setTotal":"wsnx","./openModal":"cUhm","./mainRender":"N6kv","./render":"ffVN","./changeDeleteTask":"Trx7"}]},{},["mahc"], null)
//# sourceMappingURL=/js.ceb1332b.js.map