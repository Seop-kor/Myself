export class typeEffect {
    constructor(info, a, callback) {
        this.arr = info;
        this.blink = a;
        this.callback = callback;
        this.tagOpen = false;
        this.clearSet = null;
    }

    writeType(t, text, index, callback) {
        if (index < text.length) {
            if (text[index] === '>') {
                this.tagOpen = false;
                if (index + 1 >= text.length) {
                    this.clearSet = setTimeout(() => {
                        this.writeType(t, text, index + 1, callback);
                    }, 200);
                    // this.clearSet(t, log, text, index + 1, callback, 200);
                    return;
                }
                index += 1;
            }
            if (text[index] === '<') {
                this.tagOpen = true;
            }
            if (!this.tagOpen) {
                t.innerHTML += text[index];
                this.clearSet = setTimeout(() => {
                    this.writeType(t, text, index + 1, callback);
                }, 200);
            } else {
                this.clearSet = setTimeout(() => {
                    this.writeType(t, text, index + 1, callback);
                }, 50);
            }
        } else if (typeof callback === 'function') {
            t.innerHTML += "<br />";
            this.clearSet = setTimeout(callback, 700);
        }
    }

    startType(i) {
        if (i < this.arr.length) {
            this.writeType(this.blink, this.arr[i], 0, () => {
                this.startType(i + 1);
                if (this.callback) {
                    this.callback();
                }
            });
        }
    }

    stopType() {
        clearTimeout(this.clearSet);
        this.blink.innerHTML = "";
    }
}//여기까지 함 class로 작성해야함