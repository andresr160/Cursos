import { Component } from '@angular/core';
import { parseIntAutoRadix } from '@angular/common/src/i18n/format_number';

@Component ({
    selector: 'app-body',
    templateUrl: `./body.component.html`
})


export class BodyComponent {

mostrar = true;

frase: any = {
    mensaje: 'Dandole vuelta al mundo',
    autor: 'Vale pito'
};

personajes: string[] = ['spiderman', 'venom', 'peter'];

}