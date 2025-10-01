import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroContaComponent } from './cadastro-conta.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, CadastroContaComponent, CommonModule]
})
export class App {
  protected readonly title = signal('Contas a Pagar');
  protected readonly mostrarCadastro = signal(false);

  toggleCadastro() {
    this.mostrarCadastro.set(!this.mostrarCadastro());
  }
}
