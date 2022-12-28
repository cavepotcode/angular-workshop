export class GenericResponse<T> {
    data: T;
    meta: {
        msg: string;
        error: number;        
    }

    constructor(data: T, error?:number,msg?: string) {
        this.data = data;
        this.meta = {
            msg: msg? msg: '',
            error: error? error:0
        }
    }
} 