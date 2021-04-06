import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/modelo/Cliente';
import { Factura } from 'src/app/modelo/Factura';
import { Producto } from 'src/app/modelo/Producto';
import { ClienteService } from 'src/app/service/cliente.service';
import { FacturaService } from 'src/app/service/factura.service';
import { ProductoService } from 'src/app/service/producto.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  factura: Factura = new Factura();
  clientes!: Cliente[];
  productos!: Producto[];
  miFormulario!: FormGroup;

  constructor(private router: Router, private facturaService: FacturaService, private clienteService: ClienteService, private productoService: ProductoService) {
    this.miFormulario = new FormGroup({
      'numeroFactura': new FormControl('', [
        Validators.required,
        Validators.maxLength(20)
      ]),
      'cliente': new FormControl('', [
        Validators.required,
      ]),
      'fecha': new FormControl('', [
        Validators.required,
      ]),
      'producto': new FormControl('', [
        Validators.required,
      ])
    });
  }

  guardarFactura(factura: Factura) {
    factura = this.miFormulario.value;
    this.facturaService.createFactura(factura)
      .subscribe(data => {
        alert("Se Agrego Con Exito...!!");
      }, error => {
        alert('Usuario ya existe con tipo y numero de identificacion ingresado');
      })
  }

  ngOnInit(): void {
    this.clienteService.getCliente()
      .subscribe(data => {
        this.clientes = data;
      });

    this.productoService.getProducto()
      .subscribe(data => {
        this.productos = data;
      });
  }
}
