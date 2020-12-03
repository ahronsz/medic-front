export interface Cita {
    cod_cit: string;
    cod_pac: string;
    cod_mir: string;
    cod_sal: string;
    estado: string;
    fecha: string;
    hora: string;
}

export interface CitaGet {
    cod_med: string;
    cod_esp: string;
    fecha: string;
}

export interface Hora {
    horas: Array<string>;
    horas_m: Array<string>;
}

export interface CitaDisponible {
    cod_med: string;
    cod_esp: string;
    fecha: string;
    hora: Hora;
}