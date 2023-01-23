class Content {

    constructor() {
        this.body = document.body;
        this.flashlightVariations = [
            "https://cdn2.iconfinder.com/data/icons/autumn-45/64/lantern-lamp-chinese-light-oriental-512.png",
        ]
    }

    createFlashlight = (width, height, src, className) => {
        const img = document.createElement('img');
        img.src = src
        img.classList.add(className);
        img.width = width
        img.height = height
        img.alt = 'flashlight'

        return img;
    }

    hideFlashlights = () => {
        const flashLights = document.querySelectorAll('img[alt="flashlight"]')

        if (flashLights.length === 0) return;

        flashLights.forEach(flashlight => flashlight.classList.toggle('hidden'))

    }

    createButton = () => {
        const button = document.createElement('button')
        button.className = 'control-btn'
        button.innerText = 'hide'

        const flashLights = document.querySelectorAll('img[alt="flashlight"]')

        if (flashLights.length === 0) return;

        button.addEventListener('click', this.hideFlashlights)

        return button;
    }

    addFlashlight = () => {
        const WIDTH = 100;
        const HEIGHT = 100;
        const body = this.body;
        const src = this.flashlightVariations[0];

        body.appendChild(this.createFlashlight(WIDTH, HEIGHT, src, 'chinese-flashlight-1'));
        body.appendChild(this.createFlashlight(WIDTH, HEIGHT, src, 'chinese-flashlight-2'));
        body.appendChild(this.createButton())
    }

}

const content = new Content();
content.addFlashlight()
