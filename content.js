class Content {

    constructor() {
        this.body = document.body;
        this.flashlightVariations = [
            "https://cdn2.iconfinder.com/data/icons/autumn-45/64/lantern-lamp-chinese-light-oriental-512.png",
        ]
    }

    createLantern = (width, height, src, className) => {
        const img = document.createElement('img');
        img.src = src
        img.classList.add(className);
        img.width = width
        img.height = height
        img.alt = 'lantern'

        return img;
    }

    hideLanterns = () => {
        const lanterns = document.querySelectorAll('img[alt="lantern"]')

        if (lanterns.length === 0) return;

        lanterns.forEach(lantern => lantern.classList.toggle('hidden'))

    }

    createButton = () => {
        const button = document.createElement('button')
        button.className = 'control-btn'
        button.innerText = 'hide'

        const lanterns = document.querySelectorAll('img[alt="lantern"]')

        if (lanterns.length === 0) return;

        button.addEventListener('click', this.hideLanterns)

        return button;
    }

    addLanterns = () => {
        const WIDTH = 100;
        const HEIGHT = 100;
        const body = this.body;
        const src = this.flashlightVariations[0];

        body.appendChild(this.createLantern(WIDTH, HEIGHT, src, 'chinese-lantern-1'));
        body.appendChild(this.createLantern(WIDTH, HEIGHT, src, 'chinese-lantern-2'));
        body.appendChild(this.createButton())
    }

}

const content = new Content();
content.addLanterns()
