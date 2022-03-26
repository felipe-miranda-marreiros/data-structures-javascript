![image](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

# Estrutura de Dados

## Big O - Worst Case

Imaginemos que temos duas formas de resolver um problema. Essas duas formas chegam no mesmo resultado, porém são escritas diferentes e também possuem seus pontos negativos e positivos como:

* Uso de **memória** - Complexidade do Espaço: usa muita ou pouco mémoria;
* Envolve **tempo** - Complexidade do Tempo: gasta muito tempo ou pouco;

Resolver o problema em um computador de baixa performance ou alta performance também é um fator que deve ser analisado.

Em outras palavras, **Big O** é a forma de levantar requisitos para determinar se um código pode se adequar a fatores como uso de memória, tempo ou legibilidade.

Podemos dizer que queremos resolver um problema de forma eficiente no uso de memória e tempo, sempre analisando o pior cenário (**Worst Case**).

### Tipos Comuns de Big O

* **O(1)** Constante: não envolve loops, fazem apenas uma operação. É a melhor rendimento de um algoritmo.

* **O(n)** Linear: quando contém For ou While loops entre n itens.

* **O(n²)** Quadrático: quando comparamos itens. Geralmente envolve loops aninhados. Aqui não importa quanto loops forem aninhados ou conter um loop aninhado e outro separado, o Big O sempre será O(n2), pois o loop aninhado sempre excutará mais processos.

* **O(log n)** Logaritmo: também chamado de Divide and Conquer. É a forma de dividir problemas em sub-problemas.

* **O(n!)** Factorial: O pior cenário do Big O possível. Geralmente quando envolve diversos loops para cada elemento do problema.

### Diferentes Termos para Inputs

![image](https://user-images.githubusercontent.com/91689754/160210408-3f4a4445-57e6-4569-b7d5-5fd62d27b74c.png)

Se olharmos para essa função, podemos dizer que ela seja O(n), porém os parâmetros mudam o termo. Não temos como saber se A ou B possuem o mesmo tamanho ou se A é maior que B. Levando em conta o pior cenário, ambos podem exigir memória ou tempo excesivo. Então, a forma correta de classificar esse tipo de algoritmo é **O(a + b**) ou O(n + n).

![image](https://user-images.githubusercontent.com/91689754/160211626-c1047683-354b-4a0a-a020-5b49db485843.png)

Se houver loops aninhados, então o termo muda para **O(a * b)** ou O(n * n).

## Big O - Arrays

Arrays possuem cenários que Big O pode determinar se é bom ou não usar esse tipo de estrutura de dados. Por exemplo, métodos como Splice e Unshift são considerados O(n), pois precisam realocar o index de elementos adicionados/removidos do inicio da Array. Por outro lado, Push é constante, pois não precisar realocar o index.

Se olharmos para questão de mémoria, métodos como Map, Filter ou Slice podem retornar uma nova Array. Ou seja, se quisermos apenas fazer um loop normal, usamos ForEach, sem precisar criar espaço desnecessário.

## Linked List

É um tipo de Estrutura de Dado usado para armazenar **dados lineares**.

**Características**:

* Não possui **index**, mas **nodes**;
* Pode estar em **qualquer lugar da memória**;
* Possui **Head** (variável que aponto para o primeiro item da lista) e **Tail** (variável que aponta para o último elemento da lista);
* Se não houver mais elementos, retornará **Null**;
* Possui o conceito de **Next** (estar ligado a outro elemento próximo);
* Possui **length** para dizer o número total de nodes.

### Linked List - Big O vs Array:

![image](https://user-images.githubusercontent.com/91689754/160217064-a98bee41-8b1d-43bc-b43e-d2064e542a51.png)

A grande vantagem em relação a Arrays é a forma como Linked Lists podem remover(shift) e adicionar(unshift) elementos no inicio da lista.
