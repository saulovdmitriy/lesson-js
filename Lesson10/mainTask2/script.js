class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv(){
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.textContent = 'Арбузы';
        div.style.height = this.height + 'px';
        div.style.width = this.width + 'px';
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize + 'px';
        div.style.textAlign = this.textAlign;
    }
}

const newDiv = new Options(100, 200, '#ae85ff', 20, 'center');

newDiv.createDiv();