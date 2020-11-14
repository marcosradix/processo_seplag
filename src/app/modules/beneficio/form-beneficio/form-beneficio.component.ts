import { Beneficio } from './../../../models/beneficio.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BeneficioService } from 'src/app/services/beneficio-service';
import { NotificationService } from 'src/app/services/notification.service';
import { v4 as uuidv4 } from 'uuid';
import { Documento } from 'src/app/models/documento.model';

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
    private beneficioService: BeneficioService
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
    this.beneficioService.salvarBeneficio(this.beneficio).subscribe((data) => {
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
