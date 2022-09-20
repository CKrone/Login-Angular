import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private url: string = 'http://localhost:3000';

  constructor(private http: HttpClient, private router: Router) { }

  public sign(payLoad: { email: string; password: string }): Observable<any> {
    //Usando metódo HTTP, enviando através da URL, payLoad com as informações do E-mail e Password, digitados no formulário.
    return this.http.post<{ token: string }>(`${this.url}/sign`, payLoad).pipe(
      map((res) => {
        localStorage.removeItem('access_token');
        //Recebendo o token que retornou do servidor e salvando ele no localStorage
        localStorage.setItem('access_token', res.token);
        return this.router.navigate(['admin']);
      }),
      catchError((e) => {
        //Se houver conexão com o servidor e tiver mensagem de erro, exibi a mensagem
        if (e.error.message) return throwError(() => e.error.message);

        //Exibi o erro caso não aja conexão com o servidor.
        return throwError(() => "No momento não estamos conseguindo validar os dados, tenta novamente mais tarde!");
      })
    );
  }
public logout(){
  localStorage.removeItem('access_token');
  return this.router.navigate(['']);
}

public isAuthenticated(): boolean {
  //Verifica o token
 const token = localStorage.getItem('access_token');

 if(!token) return false;


 const jwtHelper = new JwtHelperService()
 return !jwtHelper.isTokenExpired(token);
}




}
