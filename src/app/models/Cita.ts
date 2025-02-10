export class Cita {

        fecha?: string;
        hora?: string;
        estado?: string;
        paciente_id?: number;
        medico_id?: number;
  
}

export class CitaResponse{

        id?: number;
        fecha?: string;
        hora?: string;
        medicoId?: number;
        pacienteId?: number;
        pacienteNombre?: string;
        pacienteApellido?: string
}