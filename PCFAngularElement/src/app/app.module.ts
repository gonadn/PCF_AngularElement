import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PcfComponentComponent } from './pcf-component/pcf-component.component';

@NgModule({
  declarations: [
    PcfComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [PcfComponentComponent]

})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const el = createCustomElement(PcfComponentComponent, { injector: this.injector });
    customElements.define('app-pcf-component', el);
  }
}
