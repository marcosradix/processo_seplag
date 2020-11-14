import { Documento } from './../../../models/documento.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Beneficio } from 'src/app/models/beneficio.model';
import { BeneficioService } from 'src/app/services/beneficio-service';
import { NotificationService } from 'src/app/services/notification.service';
import { v4 as uuidv4 } from 'uuid';

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
    private router:Router
  ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          console.log('ID' + params['id']);
        }
      );

    if(!this.shouldRender){
      this.beneficioService.carregarBeneficio(this.id).subscribe((data) => {
        data.documentos.forEach((dat) => this.nomesDosArquivos.push(dat.nomeDoc));
        this.documentos = data.documentos;
      });
    }

  }
  get shouldRender():boolean{
    return (this.router.url.indexOf("ver") !== -1) ? false : true;

  }
  salvar() {
    if (this.documentos.length > 0) {
      this.beneficioService.carregarBeneficio(this.id).subscribe((data) => {
        if(data.documentos.length > 0){
          data.documentos.push(this.documento);
        }else{
        this.beneficio.documentos = this.documentos;
        }
        this.beneficio = data;
        this.beneficioService.atualizarBeneficio(this.id, this.beneficio).subscribe((data) => {
          console.log("inserido", data);
          this.alertService.showSuccessSwal("Foi", "Perfeito");
        });
      }
      );
    } else {
      this.alertService.showErrorSwal("Erro ao salvar", "Erro");

    }

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
        this.documento.arquivoBase64 = fileBase64;
        this.documento.id = uuidv4();
        this.documento.nomeDoc = file.name;
        this.documentos.push(this.documento);
      };

  }

showPdf(documento:any) {
        const downloadLink = document.createElement("a");
        const fileName = documento.nomeDoc;
        downloadLink.href = documento.arquivoBase64;
        downloadLink.download = fileName;
        downloadLink.target="_blank";
        downloadLink.click();
    }
}
