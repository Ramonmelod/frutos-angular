import { ComponentFixture, TestBed } from '@angular/core/testing'
import { provideHttpClient } from '@angular/common/http'

import { BordadosComponent } from './bordados.component'

describe('BordadosComponent', () => {
    console.log('MaintenanceComponent test - INIT')
    let component: BordadosComponent
    let fixture: ComponentFixture<BordadosComponent>

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BordadosComponent],
            providers: [provideHttpClient()],
        }).compileComponents()

        fixture = TestBed.createComponent(BordadosComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        console.log('BordadosComponent - should create')
        expect(component).toBeTruthy()
    })
    console.log('BordadosComponent test - STOP')
})
