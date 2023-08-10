# Walking Time Checker / Verificador de Tempo de Caminhada

## Instructions / Instruções

<details>
  <summary><h2>What to do?</h2></summary><br />

### Walking Time Checker Function

You live in the city of Cartesian where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- every time you press the button, it sends you an array of one-letter strings representing directions to walk (e.g., ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction), and you know it takes you one minute to traverse one city block. Create a function called `isValidWalk` that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

#### Objective

The objective of this task is to implement the `isValidWalk` function that takes an array of one-letter strings representing directions as input and returns true if the walk will take exactly ten minutes and lead you back to the starting point.

#### Instructions

1. Implement the `isValidWalk` function in your code.
2. The function should accept an array of one-letter strings as its argument.
3. It should return true if the walk takes exactly ten minutes and leads you back to the starting point.
4. The walk should consist of exactly 10 steps.
5. If the input array does not meet the conditions, the function should return false.

#### Example

Input:
```javascript
isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']); // Output: true
isValidWalk(['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's']); // Output: false
```
</details>

<details>
  <summary><h2>O que fazer?</h2></summary><br />

### Função Verificadora de Tempo de Caminhada

Você vive na cidade de Cartesian, onde todas as estradas são traçadas em uma grade perfeita. Você chegou dez minutos adiantado a um compromisso, então decidiu aproveitar a oportunidade para fazer uma curta caminhada. A cidade fornece aos seus cidadãos um Aplicativo Gerador de Caminhadas em seus telefones - toda vez que você pressiona o botão, ele envia um array de strings de uma letra representando direções para caminhar (por exemplo, ['n', 's', 'w', 'e']). Você sempre caminha apenas um quarteirão para cada letra (direção), e você sabe que leva um minuto para percorrer um quarteirão da cidade. Crie uma função chamada `isValidWalk` que retornará verdadeiro se o caminho que o aplicativo lhe der levar exatamente dez minutos (você não quer chegar cedo ou tarde!) e, é claro, retornar ao seu ponto de partida. Retorne falso caso contrário.

#### Objetivo

O objetivo desta tarefa é implementar a função `isValidWalk` que recebe um array de strings de uma letra representando direções como entrada e retorna verdadeiro se a caminhada levar exatamente dez minutos e o levar de volta ao ponto de partida.

#### Instruções

1. Implemente a função `isValidWalk` no seu código.
2. A função deve aceitar um array de strings de uma letra como argumento.
3. Ela deve retornar verdadeiro se a caminhada levar exatamente dez minutos e o levar de volta ao ponto de partida.
4. A caminhada deve consistir exatamente de 10 passos.
5. Se o array de entrada não atender às condições, a função deve retornar falso.

#### Exemplo

Entrada:
```javascript
isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']); // Saída: verdadeiro
isValidWalk(['n', 's', 'e', 'w', 'n', 's', 'e', 'w', 'n', 's']); // Saída: falso
```
</details>