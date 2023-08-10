# Line Counter Tool / Line Counter Tool

## Instructions / Instruções

<details>
  <summary><h2>What to do?</h2></summary><br />

### Line Numbering Function

This project implements a JavaScript function that adds line numbers to a list of strings. The numbering starts at 1, and the format is `n: string` where `n` represents the line number.

#### Objective

In the context of a text editor, the task is to implement a function called `addLineNumbers` that takes an array of strings as input and returns an array of strings with each line correctly numbered.

#### Instructions

1. Implement the `addLineNumbers` function in your code.
2. The function should accept an array of strings as its argument.
3. It should return an array of strings, where each string is in the format `n: string`, representing the line number and the content of the line.
4. The numbering should start at 1 and increment for each line.
5. If the input array is empty, the function should return an empty array as well.

#### Example

```javascript
addLineNumbers([]); // Output: []
addLineNumbers(["a", "b", "c"]); // Output: ["1: a", "2: b", "3: c"]
```
</details>


<details>
  <summary><h2><strong>O que fazer?</strong></h2></summary><br />

### Função de Numeração de Linhas

Este projeto implementa uma função JavaScript que adiciona números de linha a uma lista de strings. A numeração começa em 1, e o formato é `n: string`, onde `n` representa o número da linha.

#### Objetivo

No contexto de um editor de texto, a tarefa é implementar uma função chamada `adicionarNumeraçãoLinhas` que recebe um array de strings como entrada e retorna um array de strings com cada linha numerada corretamente.

#### Instruções

1. Implemente a função `adicionarNumeraçãoLinhas` no seu código.
2. A função deve aceitar um array de strings como argumento.
3. Ela deve retornar um array de strings, onde cada string está no formato `n: string`, representando o número da linha e o conteúdo da linha.
4. A numeração deve começar em 1 e incrementar para cada linha.
5. Se o array de entrada estiver vazio, a função também deve retornar um array vazio.

#### Exemplo

```javascript
Entrada:
adicionarNumeraçãoLinhas([]);// Saída: []
adicionarNumeraçãoLinhas(["a", "b", "c"]); // Saída: ["1: a", "2: b", "3: c"]
```