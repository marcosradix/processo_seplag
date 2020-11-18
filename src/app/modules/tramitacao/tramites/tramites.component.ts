import { Setor } from './../../../models/setor.model';
import { SetorService } from './../../../services/setor-service';
import { Tramite } from './../../../models/tramite.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { TramiteService } from 'src/app/services/tramite-service';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { BeneficioService } from 'src/app/services/beneficio-service';
import { formatDate } from '@angular/common';
import { NotificationService } from 'src/app/services/notification.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-tramites',
  templateUrl: './tramites.component.html',
  styleUrls: ['./tramites.component.scss']
})
export class TramitesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'dataTramitacao', 'localOrigem', 'localDestino', 'usuario'];
  dataSource = new MatTableDataSource<Tramite>();
  resultsLength = 0;
  setorDe = new FormControl();
  setorPara = new FormControl();
  setores$: Observable<Array<Setor>>;
  //setoresOrigem$: Observable<Array<Setor>>;
  idBeneficio: String;

  constructor(
    private matPaginatorIntl: MatPaginatorIntl,
    private tramiteService: TramiteService,
    private setorService: SetorService,
    private beneficioService: BeneficioService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private alertService: NotificationService,


  ) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.idBeneficio = params['id'];
        }
      );
    this.setores$ = this.setorService.carregarsetores();
    this.initTable();
  }
  initTable(): void {
    this.tramiteService.carregartramites().subscribe((tramites) => {
      tramites = tramites.filter((item: Tramite) => item.idBeneficio == this.idBeneficio);
      this.dataSource.data = tramites;
      this.dataSource.paginator = this.paginator;
      this.resultsLength = tramites.length;
      // if(this.resultsLength == 0){
      // this.beneficioService.carregarBeneficio(this.idBeneficio).subscribe(data => {
      //     this.setoresOrigem$ = this.setorService.carregarSetorListOne(data['setorId']);
      //     });
      // }else{

      // }

    });
  }
  tramitar() {
    console.log("De", this.setorDe.value);
    console.log("Para", this.setorPara.value);
    let tramite = new Tramite(uuidv4(),formatDate(new Date(), 'dd/MM/yyyy HH:MM:SS', 'pt_BR'), this.setorDe.value['nomeSetor'], this.setorPara.value['nomeSetor'], "marcos.ferreira", this.idBeneficio);
    console.log(tramite);
    this.tramiteService.salvarTramite(tramite).subscribe(data => {
      this.initTable();
      this.alertService.showSuccessSwal("Tramitado com sucesso", "Sucesso");
    })
  }
}
