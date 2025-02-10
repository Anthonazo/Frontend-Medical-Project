export class Usuario{

    nombre?: string;
    apellido?: string;
    telefono?: string;
    direccion?: string;
    email?: string;
    pass?: string;

}

export class Doctor{

    id?: number;
    especialidad?: string;
    usuario_id?: number;

}

export class DoctorResponse{

    id?: number;
    nombre?: string;
    apellido?: string;
}