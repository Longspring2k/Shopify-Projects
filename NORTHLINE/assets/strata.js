(() => {
 document.querySelectorAll('[data-strata-sort]').forEach(el=>el.addEventListener('change',()=>el.closest('form')?.requestSubmit()));
 document.querySelectorAll('[data-strata-variant]').forEach(sel=>{
  const submit=sel.closest('form')?.querySelector('[data-strata-submit]');
  const price=document.querySelector('[data-strata-price]');
  const update=()=>{const opt=sel.selectedOptions[0];if(price&&opt?.dataset.price)price.textContent=opt.dataset.price;if(submit)submit.disabled=opt?.disabled??true;};
  sel.addEventListener('change',update);update();
 });
})();