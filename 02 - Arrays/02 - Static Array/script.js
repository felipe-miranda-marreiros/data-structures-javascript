class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  /**
   * @param  {Number} index recebe o index e retorna a posição do elemento.
   */
  get(index) {
    return this.data[index];
  }
  /**
   * @param  {any} item recebe um valor e adiciona como último elemento.
   */
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  /**
   * Remove o último elemento.
   */
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }
  /**
   * @param  {Number} index deleta um elemento de acordo com o index.
   */
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  /**
   * @param  {Number} index reorganiza o index de elementos.
   */
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push("hi");
newArray.push("you");
newArray.push("you");
newArray.pop();

console.log(newArray);
