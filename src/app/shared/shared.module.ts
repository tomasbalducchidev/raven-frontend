import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [CardComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [CardComponent, NavbarComponent],
})
export class SharedModule {}
