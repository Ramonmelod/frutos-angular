import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductGridComponent } from './productGrid.component'
import { provideHttpClient } from '@angular/common/http'

describe('ProductGridComponent', () => {
    console.log('ProductGridComponent test - INIT')
    let component: ProductGridComponent
    let fixture: ComponentFixture<ProductGridComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductGridComponent],
            providers: [provideHttpClient()],
        }).compileComponents()

        fixture = TestBed.createComponent(ProductGridComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        console.log('ProductGridComponent - should create')
        expect(component).toBeTruthy()
    })
    console.log('ProductGridComponent test - STOP')
})
