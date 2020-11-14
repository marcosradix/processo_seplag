import { Router } from '@angular/router';
import { Beneficio } from './../../../models/beneficio.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { BeneficioService } from 'src/app/services/beneficio-service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-table-beneficios',
  templateUrl: './table-beneficios.component.html',
  styleUrls: ['./table-beneficios.component.scss']
})
export class TableBeneficiosComponent implements OnInit {
  displayedColumns: string[] = ['id','nome', 'cpf', 'orgao', 'matricula', 'actions'];
  dataSource = new MatTableDataSource<Beneficio>();
  constructor(
     private matPaginatorIntl: MatPaginatorIntl,
     private beneficioService: BeneficioService,
     private router:Router,
     private dialog: MatDialog,

     ) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  ngOnInit(): void {
    this.initTable();
  }
 initTable(): void {
    this.beneficioService.carregarBeneficios().subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }

  openDialog(typeAction ,element){
    if(typeAction === 'adicionar'){
      this.router.navigate(['/beneficio/arquivos', element.id]);

    }
    if(typeAction === 'ver'){
    console.log(typeAction ,element);
      this.router.navigate(['/beneficio/arquivos/ver', element.id])

    }
  }
}
