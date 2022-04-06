/**
 * A classe Node estará presente nos métodos Push(), Unshift() e Insert(). Para não repetir código, podemos criar uma nova instância para cada método.
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Linked List terá head e tail. Head apontará para o newNode assim como Tail, pois estamos levando em conta o estado inicial do Linked List. O length inicial é 1.
 */
class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  /**
   * @param {any} value recebe um valor e coloca no final do Linked List. Tail.next terá como novo valor a variável newNode.
   */
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //tail.next e não head.next.
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  /**
   * Remove o último node do Linked List. Tail será o node anterior aquele que será removido. O node anterior estará na váriavel pre.
   */
  pop() {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;

    //Enquanto houver node
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    //Se  houver apenas um Node, será necessário tornar tail e head como null novamente, pois eles ainda estarão apontando para a variável pre.
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
  /**
   * @param  {any} value adiciona um novo node no Linked List. newNode.next guadará o head atual.
   */
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //newNode.next guadará o head atual
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;

    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;

    //Tail ainda apontará para o valor anterior do this.head.next;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
  /**
   * @param  {Number} index Retorna um node com base no index. Se o index for menor que 0 ou maior que o tamanho da Lista, retornará undefined.
   */
  get(index) {
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
}
