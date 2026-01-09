import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-productshowcase',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './productshowcase.component.html',
    styleUrls: ['./productshowcase.component.scss'],
})
export class ProductShowCaseComponent {
    public products: string[] = ['carro', 'moto', 'bicicleta']
}
