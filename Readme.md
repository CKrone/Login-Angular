<h1>Projeto de Login com Angular</h1>


<p>Projeto prático que consiste em fazer as validações de acesso do usuário. Tanto das informações do formulário como controlando o acesso de rotas e a validação do token gerado. Também é exibido informações de erro ao efetuar o login assim como erro do "back-end". Foi utilizado servidor local para receber as informações e validar o login.</p>



<h1>Tela Inicial</h1>

![Tela Inicial](https://user-images.githubusercontent.com/86797383/191352478-3a1876f8-e83e-4614-b96b-a5e8a33fb56d.jpg)
<ul>
  <li>O botão login fica desabilitado caso os campos Email e Senha estejam vazios</li> 
</ul>

![Tela Inicial com botão ativo](https://user-images.githubusercontent.com/86797383/191352829-83bbad67-aa29-4a59-86c0-6dfe376dcd4b.jpg)

<ul>
  <li>O botão login habilitado</li> 
</ul>

![Tela Inicial Login Erro](https://user-images.githubusercontent.com/86797383/191353016-d983e3b1-4a94-4228-86d0-939dcdb85510.jpg)

<ul>
  <li>Após a validação caso retorne erro é exibido a mensagem para o usuário.</li> 
</ul>

![Tela Inicial Erro Conexao](https://user-images.githubusercontent.com/86797383/191353164-edb7f6df-225a-4647-a03b-baf4b3d41c57.jpg)

<ul>
  <li>Caso ocorra erro ao consultar o servidor também é exibido a mensagem para o usuário.</li> 
</ul>

![Tela Inicial Login Acess](https://user-images.githubusercontent.com/86797383/191353350-ebb9cf0a-9884-45e1-afb0-ed37b652b861.jpg)

<ul>
  <li>Caso as validações estejam corretas, é feito o login</li> 
  <li>O botão Sair limpa o token de acesso e redireciona o usuário para a tela inicial</li>
  <li>É feito através do guard, a proteção da rota, evitando que o usuário acesse a página sem ter acesso permitido.</li>
</ul>
