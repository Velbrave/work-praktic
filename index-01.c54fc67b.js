function t(t){return t&&t.__esModule?t.default:t}var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t};function n(t,e){localStorage.setItem(t,JSON.stringify(e))}function a(t){const e=localStorage.getItem(t);try{return JSON.parse(e)}catch{return e}}const i=new class{deposit(t){this.balance+=+t;const e={type:"deposit",value:t,balance:this.balance};this.historyTransaction.push(e)}withdraw(t){this.balance-=+t;const e={type:"withdraw",value:t,balance:this.balance};this.historyTransaction.push(e)}constructor(){t(e)(this,"balance",0),t(e)(this,"historyTransaction",[])}},r={inputEl:document.querySelector(".js-input"),btnDeposit:document.querySelector(".js-deposit"),btnWithdraw:document.querySelector(".js-withdraw"),balanceElem:document.querySelector(".js-balance"),historyElem:document.querySelector(".js-history"),formEl:document.querySelector(".js-form")};function o(t){r.balanceElem.textContent=t.balance;const e=t.historyTransaction.map((t=>`\n    <li>${"deposit"===t.type?"+":"-"}${t.value}</li>\n    `)).join("");r.historyElem.innerHTML=e}function c(t){n("bankObj",t)}!function(){const t=a("inputKey");r.inputEl.value=t;const e=a("bankObj");e&&(i.balance=e.balance,i.historyTransaction=e.historyTransaction,o(i))}(),r.inputEl.addEventListener("input",(function(t){n("inputKey",t.target.value)})),r.formEl.addEventListener("submit",(t=>{t.preventDefault(),t.target.reset(),localStorage.removeItem("inputKey")})),r.btnDeposit.addEventListener("click",(()=>{i.deposit(r.inputEl.value),o(i),c(i)})),r.btnWithdraw.addEventListener("click",(()=>{i.withdraw(r.inputEl.value),o(i),c(i)}));
//# sourceMappingURL=index-01.c54fc67b.js.map