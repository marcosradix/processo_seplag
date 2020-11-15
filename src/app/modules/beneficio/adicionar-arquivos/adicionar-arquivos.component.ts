import { ShowPDFComponent } from './../../show-pdf/show-pdf.component';
import { Documento } from './../../../models/documento.model';
import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Beneficio } from 'src/app/models/beneficio.model';
import { BeneficioService } from 'src/app/services/beneficio-service';
import { NotificationService } from 'src/app/services/notification.service';
import { v4 as uuidv4 } from 'uuid';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-adicionar-arquivos',
  templateUrl: './adicionar-arquivos.component.html',
  styleUrls: ['./adicionar-arquivos.component.scss']
})
export class AdicionarArquivosComponent implements OnInit {
  beneficio: Beneficio = new Beneficio();
  documento: Documento = new Documento();

  documentos: Array<Documento> = [];
  panelOpenState = false;
  arquivos: Array<File> = [];
  nomesDosArquivos: Array<String> = [];
  id: String;

  constructor(
    private route: ActivatedRoute,
    private alertService: NotificationService,
    private beneficioService: BeneficioService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          console.log('ID' + params['id']);
        }
      );

    if (!this.shouldRender) {
      this.beneficioService.carregarBeneficio(this.id).subscribe((data) => {
        data.documentos.forEach((dat) => this.nomesDosArquivos.push(dat.nomeDoc));
        this.documentos = data.documentos;
      });
    }

  }
  get shouldRender(): boolean {
    return (this.router.url.indexOf("ver") !== -1) ? false : true;

  }
  salvar() {
    if (this.documentos.length > 0) {
      this.beneficioService.carregarBeneficio(this.id).subscribe((data) => {
        this.beneficio = data;
        this.documentos.forEach((dat) => this.beneficio.documentos.push(dat));
        this.beneficioService.atualizarBeneficio(this.id, this.beneficio).subscribe((data) => {
          console.log("inserido", data);
          this.alertService.showSuccessSwal("Foi", "Perfeito");
        });
      });

    } else {
      this.alertService.showErrorSwal("Erro ao salvar", "Erro");

    }

  }

  removeEmptyDoc(documentos: Array<Documento>): Array<Documento> {
    return this.documentos = this.documentos.filter(doc => doc.nomeDoc !== undefined);
  }

  fileEventChange(fileInput: any) {
    this.documentos = [];
    this.arquivos = fileInput.target.files;
    var reader = new FileReader();
    this.nomesDosArquivos.push(this.arquivos[0]?.name);
    const file = this.arquivos[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      let fileBase64 = reader.result;
      fileBase64 = fileBase64.toString().replace("data:application/pdf;base64,", "");
      this.documento.arquivoBase64 = fileBase64;
      this.documento.id = uuidv4();
      this.documento.nomeDoc = file.name;
      this.documentos.push(this.documento);
    };

  }

   showPdf(documento: Documento) {
    this.dialog.open(ShowPDFComponent, {
    width:"80%",
      data: {
        pdfData: documento.arquivoBase64
      }
    });
  }
}
