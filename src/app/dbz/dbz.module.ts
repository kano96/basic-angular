import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterFormComponent } from './components/character-form/character-form.component';

@NgModule({
  declarations: [MainPageComponent, ListComponent, CharacterFormComponent],
  imports: [CommonModule],
  exports: [MainPageComponent],
})
export class DbzModule {}
