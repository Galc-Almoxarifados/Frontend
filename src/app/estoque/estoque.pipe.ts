import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'estoque'
})
export class EstoquePipe implements PipeTransform {

  transform(value: Array<any>, filtro: string): any {
//     transform(items: any[], filtro: string): any[] {
//       if (!items || !filtro) {
//         return items;
//       }

//       return items.filter(item =>
//         item.nome.toLowerCase().includes(filtro.toLowerCase())
//       );
//     }
//   }
//
 }
}
