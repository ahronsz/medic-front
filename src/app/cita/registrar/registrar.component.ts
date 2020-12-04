import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Especialidad } from '../../model/especialidad.model';
import { Medico } from '../../model/medico.model';
import { EspecialidadService } from '../../core/service/especialidad/especialidad.service';
import { MedicoService } from '../../core/service/medico/medico.service';
import { Cita, CitaGet, CitaDisponible } from 'src/app/model/cita.model';
import { CitaService } from 'src/app/core/service/cita/cita.service';
import { MatDatepicker } from '@angular/material/datepicker';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  especialidades: Especialidad[];
  medicos: Medico[];
  citaDisponible: CitaDisponible;
  horasDisponible: Array<string>;
  citaGet: CitaGet;
  form: FormGroup;
  newcita: Cita;

  constructor(
    private especialidadService: EspecialidadService,
    private medicoService: MedicoService,
    private citaService: CitaService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.builder();
    this.listEspecialidad();
    this.listMedicoxEsp();
  }

  private builder(): void {
    this.form = this.formBuilder.group({
      especialidad: '',
      medico: '',
      horario: '',
      fecha: '',
      hora: ''
    });
  }

  listEspecialidad(): void {
    this.especialidadService.allEspecialidades().subscribe(result => {
      this.especialidades = result;
    });
  }

  listMedicoxEsp(): void {
    this.medicoService.allMedicosxEsp(this.form.get('especialidad').value.cod_esp).subscribe(result => {
      this.medicos = result;
      });
  }

  listarHorario(): void {
    this.citaGet = {
      cod_med: this.form.get('medico').value,
      cod_esp: this.form.get('especialidad').value,
      fecha: this.form.get('fecha').value
    }
    if (this.citaGet.cod_esp === '' || this.citaGet.cod_med === '' || this.citaGet.fecha === '') {
      this.citaDisponible = null;
    } else {
      this.citaService.listarDisponible(this.citaGet).subscribe(result => {
        console.log(result);
        this.citaDisponible = result;
        this.horasDisponible = this.citaDisponible.hora.horas_m;
      });
    }
  }

  btnSave(event: Event): void {
    event.preventDefault();
    const cita: Cita = this.form.value;
    console.log(cita);
  }
}
/*
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; //importar a mano / ojo
import { Observable, of, throwError } from 'rxjs';
import { Product } from '../model/product';
import { Type } from '../model/type';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  private urlBase = 'localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'}); //definir a mano
  //inyectar http, también importarlo en app.module.ts
  constructor(private http: HttpClient) { }

  createProduct(product:Object) : Observable<Object>{
    return this.http.post(this.urlBase+'/product', product, {headers:this.httpHeaders});//enviando el product a REST
  }

  getProductList(): Observable<any> {
    console.log("Llamando a REST: " + this.urlBase+ "/products");
    return this.http.get(this.urlBase+ '/products').pipe(
       map(response => response as Product[])
    );   

  }

  getProductsListDescripcion(descripcion:String) : Observable<any>{
    console.log("Llamando al REST Nombre: " + this.urlBase + "/productos/"+descripcion)
    return this.http.get(this.urlBase+ "/productos/"+ descripcion).pipe( 
      map(response => response as Product[]),
      catchError(e => {
        alert(e.status+ ":" + e.error.message)
      return throwError;
      })
    );
  }

  getTypes() : Observable<any>{
    console.log("Llamando a REST: " + this.urlBase+ "/types");
    return this.http.get(this.urlBase+ '/types').pipe(
       map(response => response as Type[])
    );   
  }
}
*/
/*
import { Component, OnInit } from '@angular/core';
import { Product} from '../model/product';
import { Type } from '../model/type';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product>
  types: Observable<Type>
  fDescription : String

  constructor(private productService: ProductService) { } //inyectando service

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    console.log("RELOAD!")
    this.productService.getProductList().subscribe(products => this.products = products);
    this.productService.getTypes().subscribe(types => this.types = types);
  }

  procesarClic(){
     this.productService.getProductsListDescripcion(this.fDescription).subscribe(products => this.products = products);
  }
}
*/