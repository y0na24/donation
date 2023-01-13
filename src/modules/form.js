export default class Form{
  #form
  #input
  #totalAmount

  constructor(form, input, totalAmount) {
    this.#form = document.querySelector(form)
    this.#input = document.querySelector(input)
    this.#totalAmount = document.querySelector(totalAmount)
  }

  get form() {
    return this.#form
  }

  get inputValue() {
    return this.#input.value
  }

  makeInputEmpty() {
    this.#input.value = ''
  }

  set totalAmount(list) {
    this.#totalAmount.innerHTML = `${list.reduce((acc, num) => acc + num, 0)}$`
  }

}