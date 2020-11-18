export class Tramite{
    id:String;
    dataTramitacao:String;
    localOrigem:String;
    localDestino:String;
    usuario:String;
    idBeneficio:String;
    constructor(id?:String, dataTramitacao?:String,localOrigem?:String,localDestino?:String, usuario?:String, idBeneficio?:String){
            this.id = id;
            this.dataTramitacao= dataTramitacao;
            this.localOrigem= localOrigem;
            this.localDestino =localDestino;
            this.usuario= usuario;
            this.idBeneficio = idBeneficio;
    }
}