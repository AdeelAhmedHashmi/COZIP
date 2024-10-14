// const output = document.querySelector("iframe");
let inputs = document.querySelectorAll("textarea");
let htmlCode, cssCode, jsCode = "";

function coding() {
    inputs.forEach((el, index) => {
        el.addEventListener("keyup", () => {
            if (index == 0) {
                htmlCode = el.value;
            }
            if (index == 1) {
                cssCode = el.value;
            }
            if (index == 2) {
                jsCode = el.value;
            }
            output.contentDocument.body.innerHTML = htmlCode;
            output.contentDocument.head.innerHTML = `<style> ${cssCode} </style>`;
            output.contentWindow.eval(jsCode);
        })
    })
}

coding()
