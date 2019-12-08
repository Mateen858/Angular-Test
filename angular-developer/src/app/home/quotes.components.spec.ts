import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { QuoteComponent } from "./quotes.component";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material';



describe('QuoteComponent',()=>{
let componenta: QuoteComponent;
let fixure: ComponentFixture<QuoteComponent>;
let debugElement: DebugElement;
let htmlElement : HTMLElement;


beforeEach(async(()=>{
TestBed.configureTestingModule({
    declarations:[QuoteComponent],
    imports:[
        FormsModule,
        MatRadioModule
    ]
}).compileComponents();

}));


beforeEach(()=>{
fixure =  TestBed.createComponent(QuoteComponent);
componenta = fixure.componentInstance;
componenta = fixure.componentInstance;
fixure.detectChanges();
debugElement = fixure.debugElement.query(By.css('img'));
htmlElement = debugElement.nativeElement;


});

it('should render the logo', async(() => {
    const fixture = TestBed.createComponent(QuoteComponent);
    fixture.detectChanges();
     const compiled = fixture.debugElement.nativeElement;
    // expect(compiled.querySelector('div.logo>img').src).toContain('/images/logo.png');
debugElement = fixure.debugElement.query(By.css('div.col-md-2>img'));
htmlElement = debugElement.nativeElement;
expect(compiled.querySelector(htmlElement).src).toContain('../../assets/1.jpeg');


  }));


// it('should display an image of users', ()=>{
// expect(htmlElement.)
// })

})