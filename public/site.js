(function(){
  var b=document.createElement('button');
  b.id='to-top';b.type='button';b.setAttribute('aria-label','맨 위로');
  b.innerHTML='<svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 16V4M4 9l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  document.body.appendChild(b);
  function t(){b.classList.toggle('show',window.scrollY>600)}
  window.addEventListener('scroll',t,{passive:true});t();
  b.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
})();
