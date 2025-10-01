import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroContaComponent } from './cadastro-conta.component';
import { ListaContasComponent } from './lista-contas.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterOutlet, CadastroContaComponent, ListaContasComponent, CommonModule]
})
export class App {
  protected readonly title = signal('Contas a Pagar');
  protected readonly mostrarCadastro = signal(false);
  protected readonly mostrarLista = signal(true);

  toggleCadastro() {
    this.mostrarCadastro.set(!this.mostrarCadastro());
    if (this.mostrarCadastro()) {
      this.mostrarLista.set(false);
    }
  }

  toggleLista() {
    this.mostrarLista.set(!this.mostrarLista());
    if (this.mostrarLista()) {
      this.mostrarCadastro.set(false);
    }
  }

  onContaCadastrada() {
    // Muda para a tela de lista quando uma conta for cadastrada
    this.mostrarCadastro.set(false);
    this.mostrarLista.set(true);
  }
}
