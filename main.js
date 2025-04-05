(()=>{"use strict";class e{renderCardBlock(){const e=document.createElement("ul");e.classList.add("card-block");return this.renderCard().forEach((t=>{e.appendChild(t)})),e}renderCard(){const e=[];return[{class:"mastercard",src:"/img/mastercard.png"},{class:"visa",src:"/img/visa.png"},{class:"american-express",src:"/img/american-express.png"},{class:"discover",src:"/img/discover.png"},{class:"mir",src:"/img/mir.png"},{class:"jcb",src:"/img/jcb.png"}].forEach((t=>{const s=document.createElement("li"),n=document.createElement("span");n.classList.add("card-image",t.class),n.style.backgroundImage=`url(${t.src})`,n.title=t.class,s.appendChild(n),e.push(s)})),e}}class t{renderInput(){const e=document.createElement("input");return e.classList.add("input"),e.type="text",e.placeholder="Credit card number",e}}class s{renderButton(){const e=document.createElement("a");return e.classList.add("button"),e.textContent="Check to validate",e}}new class{constructor(n){this.element=n,this.cardBlock=new e,this.input=new t,this.button=new s}renderWidget(){const e=document.querySelector(this.element),t=document.createElement("div");t.classList.add("widget");const s=document.createElement("h2");s.classList.add("title"),s.textContent="Check your credit card number";const n=document.createElement("form");n.classList.add("input-button-block");const c=document.createElement("div");c.classList.add("form-group"),e.appendChild(t),t.appendChild(s),t.appendChild(this.cardBlock.renderCardBlock()),t.appendChild(n),n.appendChild(c),c.appendChild(this.input.renderInput()),c.appendChild(this.button.renderButton())}}("body").renderWidget();const n=document.querySelector(".input"),c=document.querySelectorAll(".card-image"),r=document.querySelector(".button");n.addEventListener("input",(function(){let e=n.value;if(!isNaN(e)){const t=function(e){const t=e.slice(0,1),s=e.slice(0,2),n=e.slice(0,3),c=e.slice(0,4),r=e.slice(0,6);return"4"===t?"visa":["51","52","53","54","55"].includes(s)?"mastercard":["34","37"].includes(s)?"american-express":["220"].includes(n)?"mir":["644","645","646","647","648","649"].includes(n)||["65"].includes(s)||["6011"].includes(c)||Number(r)>=622126&&Number(r<=622925)?"discover":Number(c)>=3528&&Number(c)<=3589?"jcb":"Unknown"}(e);c.forEach((e=>{"Unknown"===t||e.classList.contains(t)?e.classList.remove("card-image-disabled"):e.classList.add("card-image-disabled")}))}})),r.addEventListener("click",(function(){!function(e){let t=0;const s=e.length,n=s%2,c=e.split("").map(Number);for(let e=s-2;e>=0;e--){const s=c[e];e%2!==n?t+=s:s>4?t=t+2*s-9:t+=2*s}return c[s-1]===(10-t%10)%10}(n.value)?(n.classList.add("input-invalid"),n.classList.remove("input-valid")):(n.classList.add("input-valid"),n.classList.remove("input-invalid"))}))})();