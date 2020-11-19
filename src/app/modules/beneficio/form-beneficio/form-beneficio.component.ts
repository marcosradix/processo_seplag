import { Tramite } from './../../../models/tramite.model';
import { TramiteService } from './../../../services/tramite-service';
import { Beneficio } from './../../../models/beneficio.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BeneficioService } from 'src/app/services/beneficio-service';
import { NotificationService } from 'src/app/services/notification.service';
import { v4 as uuidv4 } from 'uuid';
import { Documento } from 'src/app/models/documento.model';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-form-beneficio',
  templateUrl: './form-beneficio.component.html',
  styleUrls: ['./form-beneficio.component.css']
})
export class FormBeneficioComponent implements OnInit {
  form: FormGroup;
  beneficio: Beneficio;

  constructor(
    private fb: FormBuilder,
    private alertService: NotificationService,
    private beneficioService: BeneficioService,
    private tramiteService:TramiteService
  ) { }

  ngOnInit(): void {
    this.gerarForm();
  }
  gerarForm() {
    this.form = this.fb.group({
      id: [""],
      nome: ["", [Validators.required]],
      cpf: ["", [Validators.required]],
      orgao: ["", [Validators.required]],
      matricula: ["", [Validators.required]],
      documentos: [Array<Beneficio>()],

    });
  }
  salvar() {
  let documentos: Array<Documento> = [];
  let documento:Documento = new Documento();
   documento.id = uuidv4();
   documentos.push(documento);
    this.form.get("id").setValue(uuidv4());
    this.beneficio = this.form.value;
    console.log(this.form.value);
    console.log(uuidv4());
    this.beneficio.documentos = documentos;
    this.beneficio.setorId = "t419d492-5272-43a5-95c7-148cef1cc871";
    this.beneficioService.salvarBeneficio(this.beneficio).subscribe((data) => {
      let tramiteDefault = new Tramite();
      tramiteDefault.id = uuidv4();
      tramiteDefault.dataTramitacao = formatDate(new Date(), 'dd/MM/yyyy HH:MM:SS', 'pt_BR');
      tramiteDefault.localOrigem = "CESINF";
      tramiteDefault.localDestino = "CESINF";
      tramiteDefault.usuario = "padrão";
      tramiteDefault.idBeneficio = data["id"];
      this.tramiteService.salvarTramite(tramiteDefault).subscribe((t)=> console.log("tramite ",t));
      this.clear();
      this.alertService.showSuccessSwal("Salvo com êxito", "Sucesso");
    }, erro => {
      console.log(erro);
      this.alertService.showErrorSwal("Falha ao salvar", "Erro");
    });
  }

  clear() {
    this.form.reset({});
  }
}
