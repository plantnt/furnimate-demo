import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProductos'
})
export class FilterProductosPipe implements PipeTransform {
  transform(productos: any[], filtro: string): any[] {
    if (!productos || !filtro) {
      return productos;
    }

    filtro = filtro.toLowerCase();

    return productos.filter(producto =>
      producto.nombre.toLowerCase().includes(filtro)
    );
  }
}