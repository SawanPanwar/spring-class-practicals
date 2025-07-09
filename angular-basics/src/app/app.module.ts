import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoComponent } from './demo/demo.component';
import { CustomDirective } from './custom.directive';
import { CustomPipe } from './custom.pipe';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    CustomDirective,
    CustomPipe,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
