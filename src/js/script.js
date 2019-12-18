



































/////////////////////////////////////////////////////////
//Заполнены ли поля, если нет - то форма не отравляется//
/////////////////////////////////////////////////////////
// let msg = document.createElement('div');
// msg.innerHTML = 'Поле пусто!';
// document.forms[0].btn.onclick = function() {
// 	if(document.forms[0].name.value == 0){
// 		document.forms[0].name.after(msg);
// 		return false;
// 	}
// 	if(document.forms[0].message.value == 0){
// 		document.forms[0].message.after(msg);
// 		return false;
// 	}
// 	msg.remove();
// 	return true;
// }
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
//input type="file" -определение имени файла//////////
//////////////////////////////////////////////////////
// let inputTypeFile = document.getElementById('inputTypeFile');
// inputTypeFile.onchange = function() {
// console.log(fil.files[0]);
// 	console.log(fil.files[0].name);
// }
/////////////////////////////////////////////////////


//Promise///////////////////////////////////////////
//
// var isMomHappy = true;
//
// var willIGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: 'Samsung',
//                 color: 'black'
//             };
//             resolve(phone);
//         } else {
//           var err = new Error('Mom change mind!');
//           reject(err);
//         }
//     }
// );
//
// willIGetNewPhone.then(data => {
//     return new Promise(function(resolve) {
//         data.cost = '250$',
//         resolve(data)
//       })
//   }).then(data => console.log(data))
// .catch(err => console.log(err.message))
//
////////////////////////////////////////////////////


//Promise/////////////////////////////////////////
//
// function insertScript(src) {
//   return new Promise(function(resolve, reject) {
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
//     script.onload = () => resolve();
//     script.onerror = () => reject();
//   })
// }
// let promise = insertScript('js/404.js');
// promise.then(
//   resolve = () => first(),
//   reject = () => console.log('Not found')
// );
//
//////////////////////////////////////////////////////


//Сallback///////////////////////////////////////////
//
// function insertScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;
//   document.head.append(script);
//   script.onload = () => callback();
//   script.onerror = () => callback(new Error());
// }
//
// insertScript('js/404.js', function(err) {
//   if(err) {
//     console.log('Not Found!')
//   }else {
//     first();
//   }
// })
//
/////////////////////////////////////////////////////


///Подсвечивание одного из пунктов li//////////////
//
// var ul = document.getElementsByTagName('ul');
//
// ul[0].onclick = function(e) {
//   select(e.target);
// }
//
// function select(li) {
//   var selected = ul[0].querySelectorAll('.selected');
//   if(selected) {
//     for(var i = 0; i < selected.length; i++) {
//       selected[i].classList.remove('selected');
//     }
//   }
//   li.classList.add('selected');
// }
//
///////////////////////////////////////////////////////


///Clock///////////////////////////////////////////////
//
// function Clock(options) {
//     var elem = options;
//     var timer;
//
//     function getDate() {
//         var date = new Date();
//
//         var hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;
//         elem.querySelector('.hours').innerHTML = hours;
//
//         var min = date.getMinutes();
//         if (min < 10) min = '0' + min;
//         elem.querySelector('.min').innerHTML = min;
//
//         var sec = date.getSeconds();
//         if (sec < 10) sec = '0' + sec;
//         elem.querySelector('.sec').innerHTML = sec;
//     }
//
//     this.start = function() {
//         getDate();
//         timer = setInterval(getDate, 1000);
//     };
//
//     this.stop = function() {
//         clearInterval(timer);
//     };
//
//     this.alrt = function() {
//       alert('Stop');
//     }
//
// }

// var pageClock = new Clock(document.getElementById('clock'));
// pageClock.start();
//
////////////////////////////////////////////////////////////////////

///Volume control///////////////////////////////////////////////////
//
// function Volume(option) {
//   var line = option;
//   var circle = line.children[0];
//
//   circle.onmousedown = function(e) {
//     var lineCoords = line.getBoundingClientRect();
//     var circleCoords = circle.getBoundingClientRect();
//     var shiftX = e.pageX - circleCoords.left;
//
//   circle.onmousemove = function(e) {
//     var leftCoords = e.pageX - lineCoords.left - shiftX;
//     if(leftCoords < 0) leftCoords = 0;
//     if(leftCoords > line.clientWidth - circle.clientWidth) {
//       leftCoords = line.clientWidth - circle.clientWidth;
//     }
//     circle.style.left = leftCoords + 'px';
//   };
//
//   circle.onmouseup = function() {
//     circle.onmousemove = null;
//     circle.onmouseup = null;
//   };
// }
// }
//
// var newVolume = new Volume(document.getElementById('line'))
// var newVolume1 = new Volume(document.getElementById('line1'))
//
////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////
//Volume control
///////////////////////////////////////////////////////////////////
// var field = document.getElementById('field');
// var ball = document.getElementById('ball');
//
// ball.onmousedown = function(e) {// Нажатие кнопки на бегунок
//   var fieldCoords = field.getBoundingClientRect();
//   var ballCoords = ball.getBoundingClientRect();
//   var shiftX = e.pageX - ballCoords.left;
//
//   field.onmousemove = function(e) {// Отслеживание координат в филде, присваивание их кнопке
//     var leftCoords = e.pageX - shiftX - fieldCoords.left ;
//     var rightCoords = field.offsetWidth - ball.offsetWidth;
//     if(leftCoords < 0) leftCoords = -2;
//     if(leftCoords > rightCoords) {
//       leftCoords = rightCoords + 2;
//     }
//     ball.style.left = leftCoords + 'px';
//   };
//
//   ball.onmouseup = function() {
//     field.onmousemove = null;
//     ball.onmouseup = null;
//   };
// }
//
// field.onmousedown = function(e) {// Клик по филду перемещает бегунок
//   var fieldCoords = field.getBoundingClientRect();
//   var fieldInnerCoords = { // Объект, хранящий координаты верхнего левого угла поля
//     top: fieldCoords.top,
//     left: fieldCoords.left
//   };
//   var ballCoords = { // Определение координат курсора в поле
//     top: event.clientY - fieldInnerCoords.top - ball.clientHeight / 2,
//     left: event.clientX - fieldInnerCoords.left - ball.clientWidth / 2
//   };
//   ball.style.left = ballCoords.left + 'px';
// }
//
////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////
// Проверка на символ
///////////////////////////////////////////////////
// var checkSimbol = /['<','>','/']/;
// checkSimbol.test(elem.value);
////////////////////////////////////////////////////


////////////////////////////////////////////////////
//Перемещение мяча по координатной сетке
////////////////////////////////////////////////////
//   var field = document.getElementById('field');
//   var ball = document.getElementById('ball');

// field.onclick = function(event) {

//   // координаты поля относительно окна
//   var fieldCoords = field.getBoundingClientRect();

//   // координаты левого-верхнего внутреннего угла поля
//   var fieldInnerCoords = {
//     top: fieldCoords.top + field.clientTop,
//     left: fieldCoords.left + field.clientLeft
//   };

//   // разместить по клику,
//   // но сдвинув относительно поля (т.к. position:relative)
//   // и сдвинув на половину ширины/высоты
//   // (!) используются координаты относительно окна clientX/Y, как и в fieldCoords
//   var ballCoords = {
//     top: event.clientY - fieldInnerCoords.top - ball.clientHeight / 2,
//     left: event.clientX - fieldInnerCoords.left - ball.clientWidth / 2
//   };

//   // вылезает за верхнюю границу - разместить по ней
//   if (ballCoords.top < 0) ballCoords.top = 0;

//   // вылезает за левую границу - разместить по ней
//   if (ballCoords.left < 0) ballCoords.left = 0;


//   // вылезает за правую границу - разместить по ней
//   if (ballCoords.left + ball.clientWidth > field.clientWidth) {
//     ballCoords.left = field.clientWidth - ball.clientWidth;
//   }

//   // вылезает за нижнюю границу - разместить по ней
//   if (ballCoords.top + ball.clientHeight > field.clientHeight) {
//     ballCoords.top = field.clientHeight - ball.clientHeight;
//   }

//   ball.style.left = ballCoords.left + 'px';
//   ball.style.top = ballCoords.top + 'px';
// }
/////////////////////////////////////////////////////


/////////////////////////////////////////////////////
//Отслеживание координат в окне
////////////////////////////////////////////////////
//var field = document.getElementById('field');
// field.onmousemove = function(event) {
//   console.log(event.clientX + ' ' + event.clientY);
// }
////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
//Отслеживание изменения размера окна
/////////////////////////////////////////////////////////////
// window.addEventListener('resize', function() {
//   prev();
// })
////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
//scrollIntoView() прокрутка к концу или началу блока
///////////////////////////////////////////////////////////
// document.body.scrollIntoView({
//   behavior: "auto"  | "instant" | "smooth",
//   block:    "start" | "center" | "end" | "nearest",
//   inline:   "nearest" | "start" | "center" | "end"
// });
/////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////
////Перебор ассоциативного массива и запись в li
/////////////////////////////////////////////////////////////
// var container = document.getElementById('container');
// var data = {
//   "Рыбы": {
//     "Форель": {},
//     "Щука": {}
//   },

//   "Деревья": {
//     "Хвойные": {
//       "Лиственница": {},
//       "Ель": {}
//     },
//     "Цветковые": {
//       "Берёза": {},
//       "Тополь": {}
//     }

//   }
// };

// function createTree(container, obj) {
//   container.innerHTML = createTreeText(obj);
// }

// function createTreeText(obj) { // отдельная рекурсивная функция
// 	var li = '';
// 	for (var key in obj) {
// 	li += '<li>' + key + createTreeText(obj[key]) + '</li>';
// }
// 	if (li) {
// 	var ul = '<ul>' + li + '</ul>'
// }
// 	return ul || '';
// }

// createTree(container, data);
///////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// function Slider(currentValue) {
// 	this.currentValue = currentValue;
// 	this.elem = document.getElementsByClassName('image');
// }
// Slider.prototype.check = function(){
// 	this.currentValue = (this.currentValue >= this.elem.length) ? 0 : this.currentValue;
// 	this.currentValue = (this.currentValue < 0) ? this.elem.length - 1 : this.currentValue;
// };
// Slider.prototype.distribute = function(){
// 	this.elem[this.currentValue].className = 'image show';
// 	for(var i = 0; i < this.elem.length; i++){
// 	if(i == this.currentValue) continue;
// 	this.elem[i].className = 'image hide';
// }
// };
// Slider.prototype.next = function() {
// 	this.currentValue++;
// 	this.check();
// 	this.distribute();
// };
// Slider.prototype.prev = function() {
// 	this.currentValue--;
// 	this.check();
// 	this.distribute();
// };
// var slider = new Slider(0);
// slider.distribute()
//////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////
//Slider
///////////////////////////////////////////////////////
// var elem = document.getElementsByClassName('image');
// var currentValue = 0;
// distributeClasses();

// function checkCurrentValue() {
// 	if(currentValue >= elem.length) {
// 		currentValue = 0;
// 	}
// 	if(currentValue < 0) {
// 		currentValue = elem.length -1;
// 	}
// }

// function distributeClasses() {
// 	elem[currentValue].classList = 'image fade';
// 	for(var i = 0; i < elem.length; i++){
// 		if(i == currentValue) continue;
// 		elem[i].classList = 'image hidden';
// 	}	
// }

// function nextSlide() {
// 	currentValue++;
// 	checkCurrentValue();
// 	distributeClasses();
// }

// function prevSlide() {
// 	currentValue--;
// 	checkCurrentValue();
// 	distributeClasses();
// }
//////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////
//Переключение по клику между цветами
/////////////////////////////////////////////////////////////////////////////
// var elem = document.getElementsByClassName('content');
// function blackWhite() {
// 	elem[0].style.color = (elem[0].style.color == 'black') ? 'red' : 'black';
// }
//////////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////
// Замыкания
//////////////////////////////////////////////////////////////////
// function closure() {
// 	var currentValue = 1;
// 	return function() {
// 		return currentValue++;
// 	}
// }
// var clo = closure();
///////////////////////////////////////////////////////////////////
// function closure() {
// 	var currentValue = 1;
// 	function addValue() {
// 		return currentValue++;
// 	}
// 	return addValue;
// }
// var clo = closure();
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////
// Декоратор defer(f, ms) ниже получает функцию f и возвращает 
// обёртку вокруг неё, откладывающую вызов на ms миллисекунд ES-6
// https://learn.javascript.ru/es-function
//////////////////////////////////////////////////////////////////
// function defer(f, ms) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms)
//   }
// }

// function sayHi(who) {
//   alert('Привет, ' + who);
// }

// let sayHiDeferred = defer(sayHi, 2000);
// sayHiDeferred("Вася"); // Привет, Вася через 2 секунды
//////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
// Декоратор defer(f, ms) ниже получает функцию f и возвращает 
// обёртку вокруг неё, откладывающую вызов на ms миллисекунд(старый стандрт)
// https://learn.javascript.ru/es-function
/////////////////////////////////////////////////////////////////////////
// function defer(f, ms) {
//   return function () {
//     var _this = this,
//         _arguments = arguments;

//     setTimeout(function () {
//       return f.apply(_this, _arguments);
//     }, ms);
//   };
// }
// var sayHiDeferred = defer(sayHi, 2000);
// sayHiDeferred("Вася"); // Привет, Вася через 2 секунды
//////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////
//Расчет километража по залитому бензину
/////////////////////////////////////////////////////////////////
// function getDistantion(petrolWaste, amountGas) {
//   // Расход бензина на сотню
//   var petrolWaste = petrolWaste;
//   // Количество заправленного бензина
//   var amountGas = amountGas;
//   var lKm;
  
//   if(petrolWaste == undefined || amountGas == undefined || isNaN(petrolWaste) || isNaN(amountGas)) {
//   console.log('Неверные параметры ввода!');
// }else{
//       lKm = 100 / petrolWaste;
//       console.log('Заправленного бензина хватит на: ' + amountGas * lKm + 'км.' );
//     }
// }
// getDistantion(11, 10)
///////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////
///slider
///////////////////////////////////////////////
// var element = document.getElementById('result');
// var currentValue = 0;
// element.innerHTML = 0;
// var clearAdd = setInterval(function() { nextSlide() }, 3000);

// function nextSlide() {
//   currentValue++;
//   element.innerHTML = currentValue;
  
//   if(currentValue > 2) {
//     currentValue = 0;
//     element.innerHTML = currentValue;
//   };

//   clearInterval(clearAdd);
//   clearAdd = setInterval(function() { nextSlide() }, 3000);

// }

// function prevSlide() {
//   currentValue--;
//   element.innerHTML = currentValue;
  
//   if(currentValue < 0) {
//     currentValue = 2;
//     element.innerHTML = currentValue;
//   };

//   clearInterval(clearAdd);
//   clearAdd = setInterval(function() { nextSlide() }, 3000);  
// }
////////////////////////////////////////////////////////////////



///////////////////////////////////////////////
//Slider
// ////////////////////////////////////////////
// function Slider() {
// 	this.arr = ['b0', 'b1', 'b2'];
// 	this.i = 0;
// 	this.arrlength = this.arr.length - 1;

// 	this.start = function() {
// 		console.log(this.arr[this.i]);
// 	};

// 	this.nextSlide = function() {
// 		this.i++;
// 		if(this.i > this.arrlength) {
// 			this.i = 0;
// 		}
// 		console.log(this.arr[this.i]);
// 	}
// }
// var slider = new Slider();
// slider.start();
// slider.nextSlide();
// slider.nextSlide();
// slider.nextSlide();
/////////////////////////////////////////////////////////////////////////


// var arr = ['b0', 'b1', 'b2'];

// function Slider() {
// 	this.i = 0;
// 	this.arrlen = arr.length - 1;

// 	this.startSlide = function() {
// 		console.log(arr[this.i]);
// 	};

// 	this.slide = function() {
// 		this.i++;
// 		if(this.i > this.arrlen) {
// 			this.i = 0;
// 		}
// 		console.log(arr[this.i]);
// 	};

// 	this.slidePrev = function() {
// 		this.i--;
// 		if(this.i < 0) {
// 			this.i = this.arrlen;
// 		}
// 		console.log(arr[this.i]);		
// 	}
// }

// var slider = new Slider();
// slider.startSlide();



////////////////////////////////////////////////////////////////
//Сортировка свойств объекта в алфавитном порядке
//http://qaru.site/questions/2686/sort-javascript-object-by-key
////////////////////////////////////////////////////////////////
// var phone = {
// 	pref: '375',
// 	code: '29',
// 	num: '7180259'
// };
// var abcPhone = {};
// Object.keys(phone).sort().forEach( function(elem) {
// 	abcPhone[elem] = phone[elem];
// });
// console.log(abcPhone);
/////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////
//Сумма чисел с помощью arguments
//https://learn.javascript.ru/arguments-pseudoarray
////////////////////////////////////////////////////////////////
// function sumval() {
// 	var sum = 0;
// 	for(var i = 0; i < arguments.length; i++) {
// 		sum += arguments[i];
// 	}
// 	return sum;
// }
// console.log(sumval(4, 6, 8));
/////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////
//Объединение нескольких объектов в один
//https://learn.javascript.ru/arguments-pseudoarray
/////////////////////////////////////////////////////////////////
// var vasya = {
//   age: 21,
//   name: 'Вася',
//   surname: 'Петров'
// };
// var user = {
//   isAdmin: false,
//   isEmailConfirmed: true
// };
// var student = {
//   university: 'My university'
// };
// function copy() {
//   var dst = arguments[0];
//   for (var i = 1; i < arguments.length; i++) {
//     var arg = arguments[i];
//     for (var key in arg) {
//       dst[key] = arg[key];
//     }
//   }
//   return dst;
// }
// copy(vasya, user, student);
// console.log(vasya)
/////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////
// var salaries = {
// 	id01: {
// 		name: "Вася",
// 		salary: 110
// 	},
// 	id02: {
// 		name: "Петя",
// 		salary: 300
// 	},
// 	id03: {
// 		name: "Даша",
// 		salary: 250
// 	}
// };
// var sum = 0;
// for(var key in salaries) {
// 	console.log(salaries[key]);
// 	var  a = salaries[key];
// 	sum += a.salary;
// }
// console.log(sum);
/////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
// Сортировка массива по свойству sort()
// https://learn.javascript.ru/array-methods 
//
// var dasha = { name: "a", age: 23, code: 303 };
// var masha = { name: "b", age: 18, code: 202 };
// var yana = { name: "c", age: 6, code: 101 };
// var people = [ dasha , masha , yana ];
// 
// function sorting(a, b) {
//   if (a.age > b.age) return 1;
//   if (a.age < b.age) return -1;
// }
// 
// people.sort(sorting);
// console.log(people)
///////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
// Перемешивание массива в случайном порядке с помощью sort()
/////////////////////////////////////////////////////////////////////////
// var arr = [1, 2, 3, 4, 5];
// function compareRandom(a, b) {
//   return Math.random() - 0.5;
// }
// arr.sort(compareRandom);
// console.log( arr );
// https://learn.javascript.ru/array-methods
/////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////
// Код для генерации случайного целого от min до max включительно
// var rand = min + Math.floor(Math.random() * (max + 1 - min));
////////////////////////////////////////////////////////////////////////
// var arr = ["Яблоко", "Апельсин", "Груша", "Лимон"];
// var rand = Math.floor(Math.random() * (arr.length));
// console.log(arr[rand]);
/////////////////////////////////////////////////////////////////////////