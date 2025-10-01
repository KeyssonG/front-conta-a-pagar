import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface ContaPagar {
  id: number;
  name: string;
  originationValue: number;
  adjustedValue?: number;
  dueDate: string;
  paymentDate?: string;
  daysBetween?: number;
}

@Component({
  selector: 'app-lista-contas',
  templateUrl: './lista-contas.component.html',
  styleUrls: ['./lista-contas.component.css'],
  imports: [CommonModule]
})
export class ListaContasComponent implements OnInit {
  contas: ContaPagar[] = [];
  carregando = false;
  erro = '';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.carregarContas();
  }

  carregarContas() {
    this.carregando = true;
    this.erro = '';
    
    this.http.get<ContaPagar[]>('http://localhost:8084/account-payable')
      .subscribe({
        next: (dados) => {
          this.contas = dados;
          this.carregando = false;
          this.cdr.detectChanges(); // Força a detecção de mudanças
        },
        error: (err) => {
          this.erro = 'Erro ao carregar contas. Verifique se o servidor está rodando.';
          this.carregando = false;
          console.error('Erro ao carregar contas:', err);
        }
      });
  }

  formatarMoeda(valor?: number): string {
    if (valor === undefined || valor === null) return 'R$ 0,00';
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(valor);
  }

  formatarData(data?: string): string {
    if (!data) return '-';
    return new Date(data).toLocaleDateString('pt-BR');
  }
}