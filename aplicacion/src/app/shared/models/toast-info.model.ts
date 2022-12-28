export class ToastInfo {
    header: string;
    body: string;
    delay?: number;
    classname: string;
    constructor(header: string, body: string, classname: string, delay?: number) {
        this.body = body;
        this.header = header;
        this.delay = delay;
        this.classname = classname
    }
}