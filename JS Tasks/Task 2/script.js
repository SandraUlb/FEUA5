/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const clickMeBtn = document.getElementById('btn_element');
const stateBtn = document.getElementById('btn_state');

let clickCount = 0;

clickMeBtn.addEventListener('click', () => {
  clickCount++;

  stateBtn.textContent = clickCount;
});
