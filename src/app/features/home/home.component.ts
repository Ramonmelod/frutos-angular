import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ProductShowCaseComponent } from '../../shared/components/productshowcase/productshowcase.component'

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, ProductShowCaseComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {}
