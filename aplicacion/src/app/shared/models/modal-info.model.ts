export class ModalInfo {
    title: string;
    text:string;
    confirm?: string;
    close?: string;
    action?: any;
    constructor(title: string, text:string, confirm?: string, close?: string ) {
        this.title = title;
        this.text = text;
        this.close = close;
        this.confirm = confirm;
    }
}