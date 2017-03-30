import { Component, Injectable } from '@angular/core';

@Component({
    selector: 'main',
    template: '<h1>{{mensaje}}</h1>'
})
export class MainComponent {
    mensaje: string = "Hola Mundo";
}