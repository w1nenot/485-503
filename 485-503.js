// 485
function setAttr(sel85, name, newName) {
    let elem85 = document.querySelector(sel85);
    elem85.setAttribute(name, newName);
}
setAttr('.elem85', 'class', 'highlight');

// 486 
function setText(selector86, text86) {
	let elems86 = document.querySelectorAll(selector86);
	
	for (let elem86 of elems86) {
		elem86.textContent = text86;
	}
}
setText('.elem86', 'привет');

// 487 
forEach('.elem87', function(elem87) {
	elem87.textContent += '!';
});

function forEach(selector87, func87) {
	let elems87 = document.querySelectorAll(selector87);
	
	for (let elem87 of elems87) {
		func87(elem87);
	}
}

// 488
forEach('.elem87', function(elem88, index88) {
	elem88.textContent = index88 + elem88.textContent;
});
function forEach(selector88, func88) {
	let elems88 = document.querySelectorAll(selector88);
	for (let i88 = 0; i88 < elems88.length; i88++) {
		func88(elems88[i88], i88);
	}
}

// 489 
function appendText89(elem89, text89){
	elem89.textContent += text89 + '!';
}

let elem891 = document.getElementById('elem891');
appendText89(elem891, 'text1');
let elem892 = document.getElementById('elem892');
appendText89(elem892, 'text2');

// 490 
function appendText90(elems90, text90) {
	for (let elem90 of elems90) {
		elem90.textContent = text90;
	}
}
let elems90 = document.querySelectorAll('.elem90');
appendText90(elems90, 'text');

function appendElem(elem901, text) {
    let li_elem901 = document.createElement('li');
    li_elem901.textContent = text;
    elem901.appendChild(li_elem901);
}
let elem901 = document.querySelector('#elem901');
appendElem(elem901, 'new new');

// 491 Функция для создания HTML таблиц на JavaScript
// Допишите код представленной выше заготовки функции. Потестируйте работу готовой функции.
function createTable(rows91, cols91, res91) {
    let table91 = document.createElement('table');
    for (let i91 = 0; i91 < rows91; i91++) {
        let row91 = table91.insertRow();
        for (let j91 = 0; j91 < cols91; j91++) {
            let cell91 = row91.insertCell();
            cell91.textContent = i91 + 1 - j91 + 1;
        }
    }
    res91.appendChild(table91);
}
let div1 = document.querySelector('#elem912');
createTable(4, 3, div1);

// 497 Передача параметров в модуль через замыкания в JavaScript
// Дана кнопка и три инпута, в которые вводятся числа. По нажатию на кнопку выведите в консоль сумму введенных чисел. Реализуйте задачу с помощью модуля.
// Подключаем модуль
// let sum;
// let but97 = document.getElementById('button97');
// let input1 = document.getElementById('elem97');
// let input2 = document.getElementById('input971');
// let input3 = document.getElementById('input972');
// but97.addEventListener('click', function() {
//     let num1 = Number(input1.value);
//     let num2 = Number(input2.value);
//     let num3 = Number(input3.value);
//     let result = sum(num1, num2, num3);
//     console.log(result);
// });

// 501 Экспорт переменных и функций в модулях через замыкания в JavaScript
// Экспортируйте наружу одну из переменных и две любые функции.
;(function() {
	let str1 = 'переменная модуля';
	let str2 = 'переменная модуля';
	let str3 = 'переменная модуля';
	
	function func1() {
		alert('функция модуля');
	}
	function func2() {
		alert('функция модуля');
	}
	function func3() {
		alert('функция модуля');
	}
    window.func = str1;
    window.func = func1;
    window.func = func2;
})();

// 502 Экспорт объекта в модулях через замыкания в JavaScript
// Экспортируйте наружу объект с первыми пятью функциями и первыми двумя переменными.
;(function() {
	let str1 = 'переменная модуля';
	let str2 = 'переменная модуля';
	let str3 = 'переменная модуля';
	function func1() {
		alert('функция модуля');
	}
	function func2() {
		alert('функция модуля');
	}
	function func3() {
		alert('функция модуля');
	}
	function func4() {
		alert('функция модуля');
	}
	function func5() {
		alert('функция модуля');
	}
    window.module = {str1,str2};
    window.module = module;
})();



