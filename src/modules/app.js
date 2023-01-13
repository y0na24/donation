import Donation from "./donation";
import Form from "./form";

export default class App{
  #form
  #donation

  constructor() {
    this.#form = new Form('.donate-form', '.donate-form__donate-input', '#total-amount')
    this.#donation = new Donation('.donates-container__donates')
  }

  #constructDateClass() {
    this.#donation.date = new Date()
    this.#donation.count = this.#form.inputValue
  }

  #countStartedAmount() {
    this.#donation.createCountList()
    this.#form.totalAmount = this.#donation.list
  }

  run() {
    this.#countStartedAmount()
    
    this.#form.form.addEventListener('submit', (event) => {
      event.preventDefault() 

      this.#constructDateClass()

      this.#donation.render()

      this.#form.totalAmount = this.#donation.list

      this.#form.makeInputEmpty()

    })
  }

}