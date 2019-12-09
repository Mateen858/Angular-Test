import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { QuoteComponent } from "./quotes.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { MatRadioModule } from '@angular/material';

import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { QuoteService } from "./quotes.service";
import { CommonModule } from "@angular/common";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule, MatCardModule } from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserService } from "./users.service";
import { CategoryService } from "./categories.service";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientModule } from "@angular/common/http";
import { debug } from "util";


describe('QuoteComponent', () => {
    let component: QuoteComponent;
    let fixture: ComponentFixture<QuoteComponent>;
    let debugElement: DebugElement;
    let htmlElement: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                QuoteComponent
            ],


            imports: [
                FormsModule,
                MatRadioModule,
                ReactiveFormsModule,
                HomeRoutingModule,
                CommonModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatSelectModule,
                BrowserAnimationsModule,
                MatFormFieldModule,
                MatCardModule,
                MatInputModule,
                RouterTestingModule,
                HttpClientModule
            ],
            providers: [QuoteService, MatDatepickerModule, MatSelectModule, UserService, CategoryService]
        }).compileComponents();
    }));

    beforeEach(async () => {
        fixture = TestBed.createComponent(QuoteComponent);
        component = fixture.componentInstance;
        fixture.autoDetectChanges();
    });



    // it('should render para in p tag', () => {
    //     fixture.whenStable().then(() => {
    //         const compiled = fixture.debugElement.nativeElement;
    //         console.log("elements", compiled.querySelectorAll('p'));
    //         expect(compiled.querySelector('p').textContent).toContain('Welcome to angular-developer!');
    //     })
    // });

    it('should show user image', () => {
        fixture.whenStable().then(() => {
            const compiled = fixture.debugElement.nativeElement;
            console.log("elements", compiled.querySelectorAll('img'));
            expect(compiled.querySelector('img').textContent).toContain('../../assets/1.jpeg');
        })
    });


    it('should show initials', () => {
        fixture.whenStable().then(() => {
            const compiled = fixture.debugElement.nativeElement;
            console.log("elements", compiled.querySelectorAll('.initials'));
            expect(compiled.querySelector('.initials').textContent).toContain('RM');
        })
    });


    it('should show username dropdown', () => {
        fixture.whenStable().then(() => {
            const compiled = fixture.debugElement.nativeElement;
            console.log("elements", compiled.querySelectorAll('mat-select'));
            expect(compiled.querySelector('mat-select').value).toEqual('Rana Mateen');
        })
    });

    
    it('should show Date', () => {
        fixture.whenStable().then(() => {
            const compiled = fixture.debugElement.nativeElement;
            console.log("elements", compiled.querySelectorAll('input'));
            expect(compiled.querySelector('input').value).toEqual('Dec 1');
        })
    });


})