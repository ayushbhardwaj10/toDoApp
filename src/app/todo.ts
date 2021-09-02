export class Todo {
    sno: number;
    title: string;
    desc: string;
    active: boolean;
    constructor() {
        this.sno = 1;
        this.title = "initial title";
        this.desc = "initial description";
        this.active = false;
    }
}