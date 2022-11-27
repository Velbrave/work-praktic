import { Bank } from "./Bank"
import { saveToLS, loadFromLS } from "./localstorage";

const privatBank = new Bank()


const refs = {
  inputEl: document.querySelector('.js-input'),
  btnDeposit: document.querySelector('.js-deposit'),
  btnWithdraw: document.querySelector('.js-withdraw'),
  balanceElem: document.querySelector('.js-balance'),
  historyElem: document.querySelector('.js-history'),
  formEl: document.querySelector('.js-form'),
}

function onLoadWindow() {
  const input = loadFromLS('inputKey');
  refs.inputEl.value = input;
  const receive = loadFromLS('bankObj');
  if (receive) {
    privatBank.balance = receive.balance;
    privatBank.historyTransaction = receive.historyTransaction;
    renderData(privatBank);
  }
}
onLoadWindow()

refs.inputEl.addEventListener('input', onInputEl)
refs.formEl.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('inputKey');
  //saveToLS('inputKey', '');
})
refs.btnDeposit.addEventListener('click', () => {
  privatBank.deposit(refs.inputEl.value)
  renderData(privatBank)
  saveDataBank(privatBank)
  // console.log(privatBank);
})
refs.btnWithdraw.addEventListener('click', () => {
   privatBank.withdraw(refs.inputEl.value)
   renderData(privatBank)
   saveDataBank(privatBank)
  //console.log(privatBank);
})

function onInputEl(event) {
  const value = event.target.value;
  saveToLS('inputKey',value)
}

function renderData(bank) {
  refs.balanceElem.textContent = bank.balance;
  const markup = bank.historyTransaction.map((elem) => {
    return `
    <li>${elem.type === 'deposit' ? '+' : '-'}${elem.value}</li>
    `
  }).join('')
  refs.historyElem.innerHTML = markup;
}

function saveDataBank(bank) {
  saveToLS('bankObj', bank);
}