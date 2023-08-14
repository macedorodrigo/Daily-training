# Domain Name Parser / Analisador de Nome de Domínio
## Instructions / Instruções
<details>
  <summary><h2>What to do?</h2></summary><br />

### Domain Name Parsing Function
This project involves writing a JavaScript function that extracts the domain name from a given URL string and returns it as a string. The domain name should exclude the subdomains (if any) and the top-level domain suffix.

### Objective
In the context of URL parsing, the task is to implement a function called parseDomainName that takes a URL string as input and returns the extracted domain name.

### Instructions
Implement the parseDomainName function in your code.
The function should accept a URL string as its argument.
It should return a string representing the extracted domain name.
The extracted domain name should exclude any subdomains and the top-level domain suffix.
Ensure the function works correctly for various URL formats, including those with "http", "https", and "www" prefixes.
Example
javascript
```javascript
parseDomainName("http://github.com/carbonfive/raygun"); // Output: "github"
parseDomainName("http://www.zombie-bites.com");         // Output: "zombie-bites"
parseDomainName("https://www.cnet.com");                // Output: "cnet"
```
</details>
<details>
  <summary><h2><strong>O que fazer?</strong></h2></summary><br />
  
### Função de Análise de Nome de Domínio
Este projeto envolve a criação de uma função JavaScript que extrai o nome de domínio de uma URL fornecida como uma string e o retorna como uma string. O nome de domínio deve excluir os subdomínios (se houver) e a terminação do domínio de nível superior.

### Objetivo
No contexto da análise de URLs, a tarefa é implementar uma função chamada analisarNomeDeDominio que recebe uma string de URL como entrada e retorna o nome de domínio extraído.

### Instruções
Implemente a função analisarNomeDeDominio no seu código.
A função deve aceitar uma string de URL como argumento.
Ela deve retornar uma string representando o nome de domínio extraído.
O nome de domínio extraído deve excluir quaisquer subdomínios e a terminação do domínio de nível superior.
Certifique-se de que a função funcione corretamente para vários formatos de URL, incluindo aqueles com prefixos "http", "https" e "www".
Exemplo
```javascript
analisarNomeDeDominio("http://github.com/carbonfive/raygun"); // Saída: "github"
analisarNomeDeDominio("http://www.zombie-bites.com");         // Saída: "zombie-bites"
analisarNomeDeDominio("https://www.cnet.com");                // Saída: "cnet"
```
</details>