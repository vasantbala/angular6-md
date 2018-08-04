import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule, Routes } from '@angular/router';
import { UiMdModule } from '../ui-md/ui-md.module'
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UiMdModule
  ],
  exports: [
    LayoutComponent
  ],
  declarations: [HeaderComponent, FooterComponent, LayoutComponent]
})
export class UiModule { }
