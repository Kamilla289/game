'use strict';

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    this.createElement = function() {
        if (this.selector.startsWith('.')) {
            let div = document.createElement('div');
            div.classList.add(this.selector.slice(1));
            div.style.height = this.height;
            div.style.width = this.width;
            div.style.backgroundColor = this.bg;
            div.style.fontSize = this.fontSize;
            document.body.appendChild(div);
        } else if (this.selector.startsWith('#')) {
            let p = document.createElement('p');
            p.id = this.selector.slice(1);
            p.style.height = this.height;
            p.style.width = this.width;
            p.style.backgroundColor = this.bg;
            p.style.fontSize = this.fontSize;
            document.body.appendChild(p);
        } else {
            console.error('Неправильный селектор. Нет данных со значениями "." или "#"');
        }
    }
}

let element = new DomElement('.test', '1000px', '1000px', 'red', '16px');
element.createElement();