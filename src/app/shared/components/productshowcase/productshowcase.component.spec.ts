import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ProductShowCaseComponent } from './productshowcase.component'
import { provideHttpClient } from '@angular/common/http'

describe('ProductGridComponent', () => {
    console.log('ProductGridComponent test - INIT')
    let component: ProductShowCaseComponent
    let fixture: ComponentFixture<ProductShowCaseComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ProductShowCaseComponent],
            providers: [provideHttpClient()],
        }).compileComponents()

        fixture = TestBed.createComponent(ProductShowCaseComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        console.log('ProductShowCaseComponent - should create')
        expect(component).toBeTruthy()
    })
    console.log('ProductShowCaseComponent test - STOP')
})
