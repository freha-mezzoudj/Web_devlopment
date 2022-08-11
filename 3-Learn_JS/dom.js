//each time we try one (or a block) of thoses js instructions
console.log(window);
//window is the parent object (hight level) of the browser.
alert(1);  //or "windows.alert(1) is the same


//DOM
//see tha 4 courses of DOM js.

//we can select object from html using single or multiple elements:

//1- single element selector
console.log(document.getElementById('my-form')); 
//my-form is a # id.
//or we can assign it to a variable:
const form = document.getElementById('my-form');
console.log(form);
console.log(document.querySelector('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));
//"querySelector" is like "jquery".


//2- Multiple element selector
console.log(document.querySelectorAll('.item'));
  // NodeList(3) [li.item, li.item, li.item]

 console.log(document.getElementsByClassName('item')); 
  // HTMLCollection(3) [li.item, li.item, li.item]
  //html collection is nearly an array!!

  console.log(document.getElementsByTagName('item')); 
  /*
    HTMLCollection []length: 0[[Prototype]]: HTMLCollectionitem: ƒ item()
    length: (…)namedItem: ƒ namedItem()
    constructor: ƒ HTMLCollection()
    Symbol(Symbol.iterator): ƒ values()
    Symbol(Symbol.toStringTag): "HTMLCollection"
    get length: ƒ length()
    [[Prototype]]: Object 
*/

//How to go though the items (for example);
const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

//Maniplulating and changing thingt in the Dom (html user insterface)
const ul = document.querySelector('.items');
ul.remove();
/ul.lastElmentChild/remove();
ul.firstElementChild.textContent = 'Hello';
//now, the first item is: "hello" inside "item 1"

ul.children[1].innerText = 'Welcome';
ul.lastElementChild.innerHTML = '<h4>Welcome</h4>';
// so, js allows us to add HTML dynamicly.

//Now, to change some style (css) using Js
const btn = document.querySelector('.btn');
btn.style.background = 'blue';

/* If we need to do some changes dynamicly, 
we can do it using js */

//time: 01:24:55 / 00:15:47
//when we click on the btn.."click! in the console 
//e for event,

const btn = document.querySelector('.btn');
btn.addEventListener('click',(e) => {
  console.log('click!'); //click flash and go a way!
});

//or
const btn = document.querySelector('.btn');
btn.addEventListener('click',(e) => {
  e.preventDefault();
  console.log('click!'); //it is here!
});

//or
const btn = document.querySelector('.btn');
btn.addEventListener('click',(e) => {
  e.preventDefault();
  console.log(e); //give the details of the event e;
});
/*
PointerEventisTrusted: truealtKey: falsealtitudeAngle: 1.5707963267948966
azimuthAngle: 0bubbles: truebutton: 0buttons: 0cancelBubble: false
cancelable: trueclientX: 145clientY: 189composed: truectrlKey: falsecurrent
Target: nulldefaultPrevented: truedetail: 1eventPhase: 0fromElement: nullheight: 1isPrimary: falselayerX: 145layerY: 189metaKey: falsemovementX: 0movementY: 0offsetX: 67offsetY: 23pageX: 145pageY: 189path: (7) [input.btn, form#my-form, section.container, body, html, document, Window]pointerId: 1pointerType: "mouse"pressure: 0relatedTarget: nullreturnValue: falsescreenX: 144screenY: 577shiftKey: falsesourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}srcElement: input.btntangentialPressure: 0target: input.btntiltX: 0tiltY: 0timeStamp: 3131.5999999996275toElement: nulltwist: 0type: "click"view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}which: 1width: 1x: 145y: 189[[Prototype]]: PointerEventaltitudeAngle: (…)azimuthAngle: (…)getCoalescedEvents: ƒ getCoalescedEvents()getPredictedEvents: ƒ getPredictedEvents()height: (…)isPrimary: (…)pointerId: (…)pointerType: (…)pressure: (…)tangentialPressure: (…)tiltX: (…)tiltY: (…)twist: (…)width: (…)constructor: ƒ PointerEvent()Symbol(Symbol.toStringTag): "PointerEvent"altKey: (…)bubbles: (…)button: (…)buttons: (…)cancelBubble: (…)cancelable: (…)clientX: (…)clientY: (…)composed: (…)ctrlKey: (…)currentTarget: (…)defaultPrevented: (…)detail: (…)eventPhase: (…)fromElement: (…)layerX: (…)layerY: (…)metaKey: (…)movementX: (…)movementY: (…)offsetX: (…)offsetY: (…)pageX: (…)pageY: (…)path: (…)relatedTarget: (…)returnValue: (…)screenX: (…)screenY: (…)shiftKey: (…)sourceCapabilities: (…)srcElement: (…)target: (…)timeStamp: (…)toElement: (…)type: (…)view: (…)which: (…)x: (…)y: (…)get altitudeAngle: ƒ altitudeAngle()get azimuthAngle: ƒ azimuthAngle()get height: ƒ height()get isPrimary: ƒ isPrimary()get pointerId: ƒ pointerId()get pointerType: ƒ pointerType()get pressure: ƒ pressure()get tangentialPressure: ƒ tangentialPressure()get tiltX: ƒ tiltX()get tiltY: ƒ tiltY()get
twist: ƒ twist()get width: ƒ width()[[Prototype]]: MouseEvent */

//or

const btn = document.querySelector('.btn');
btn.addEventListener('click',(e) => {
  e.preventDefault();
  console.log(e.target); //give the details of the target (the btn) of e;
});

<input class="btn" type="submit" value="Submit">*/

//or 
const btn = document.querySelector('.btn');
btn.addEventListener('click',(e) => {
  e.preventDefault();
  console.log(e.target.className); //btn
});
//or
 
const btn = document.querySelector('.btn');
btn.addEventListener('click',(e) => {
  e.preventDefault();
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  //add the .bg-dark to "body" in style.css
  document.querySelector('.items').lastElementChild.innerHTML = '<h1>Helllooo</h1>';

});

