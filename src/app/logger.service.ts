import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  mensagens: String[] = [];

  logar(mensagem: String) {
    console.log(mensagem);
    this.mensagens.push(mensagem);
  }

  exibeTodosOsLogs() {
    console.log(this.mensagens);
  }
}
