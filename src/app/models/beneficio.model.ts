import { Documento } from './documento.model';
export class Beneficio {
    id: String;
    nome: String;
    cpf: String;
    orgao: String;
    matricula: String;
    documentos:Array<Documento> = [];
}