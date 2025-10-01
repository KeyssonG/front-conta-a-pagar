import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-conta',
  templateUrl: './cadastro-conta.component.html',
  styleUrls: ['./cadastro-conta.component.css'],
  imports: [ReactiveFormsModule, CommonModule]
})
export class CadastroContaComponent {
  @Output() contaCadastrada = new EventEmitter<void>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      originationValue: ['', [Validators.required, Validators.min(0.01)]],
      dueDate: ['', [Validators.required]],
      paymentDate: ['']
    });
  }

  cadastrar() {
    if (this.form.valid) {
      const payload = {
        name: this.form.get('name')?.value,
        originationValue: this.form.get('originationValue')?.value,
        dueDate: this.form.get('dueDate')?.value,
        paymentDate: this.form.get('paymentDate')?.value
      };
      
      console.log('Enviando dados:', payload);
      
      this.http.post('http://localhost:8084/register/account-payable', payload)
        .subscribe({
          next: (res) => {
            alert('Conta cadastrada com sucesso!');
            this.form.reset(); // Limpa o formulário após o cadastro
            this.contaCadastrada.emit(); // Notifica o componente pai
          },
          error: (err) => {
            console.error('Erro ao cadastrar:', err);
            alert('Erro ao cadastrar conta. Verifique se o servidor está rodando.');
          }
        });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
