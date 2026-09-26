export interface Autor{
    name:string;
}

export interface Libro {
    id: number;
    title:string;
    authors:Autor[];
    summaries:string[];
    formats:{
        'image/jpeg'?:string;
    }
}

export interface ResultadosApi {
    count:number;
    next:string | null;
    previous: string | null;
    results: Libro[ ];
}