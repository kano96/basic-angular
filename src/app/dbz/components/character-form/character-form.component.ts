import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-character-form',
  templateUrl: './character-form.component.html',
  styleUrl: './character-form.component.css',
})
export class CharacterFormComponent {
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name: '',
    power: 0,
  };

  emitCharacter(): void {
    if (this.character.name.length === 0) return;

    const newCharacter: Character = { ...this.character, id: uuid() };

    this.onNewCharacter.emit(this.character);

    this.character = {
      id: '',
      name: '',
      power: 0,
    };
  }
}
