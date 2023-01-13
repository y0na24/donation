import Date from "../core/utils/date"

export default class Donation {
  #date
  #count
  #container
  #donateItems
  #list

  constructor(container) {
    this.#date = null
    this.#count = null
    this.#container = document.querySelector(container)
    this.#donateItems = document.querySelectorAll('.donate-item b')
    this.#list = []
  }

  set count(value) {
    this.#count = value
  }

  set date(date) {
    this.#date = date
  }

  get list() {
    return this.#list
  }

  createCountList() {
        this.#donateItems.forEach(item => {
      this.#list.push(parseInt(item.innerHTML))
    })
  }
  #formatDate(date) {
    return Date.getFormattedDate(date)
  }

  
  #getDonateItemHTML() {
    return `<div class="donate-item">
                ${this.#formatDate(this.#date)} - 
              <b>${this.#count}$</b>
            </div>`
  }

  render() {
    this.#list.push(+this.#count)
    this.#container.insertAdjacentHTML('beforeend',this.#getDonateItemHTML())
  }
}
