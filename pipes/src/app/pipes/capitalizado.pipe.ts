import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})

export class CapitalizadoPipe implements PipeTransform {
    transform(value: string): any {

        value = value.toLocaleLowerCase ();

        let nombres = value.split(" ");

        for ( let i in nombres ){
            nombres[i] = nombres[i][0].toLocaleUpperCase () + nombres [i].substr(1)
        }

        
        return nombres.join(" ");
    }
}