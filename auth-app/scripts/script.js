const makaleler =document.querySelector('.guides');
const cikisLinkleri=document.querySelectorAll('.logged-out');
const girisLinkleri=document.querySelectorAll('.logged-in');

const uyelikDetaylari=document.querySelector('.account-details');

const kullaniciYukle=(kullanici)=>{
  if(kullanici) {
      db.collection('kullanicilar').doc(kullanici.uid).get().then(doc=>{
        let html =`
        <div>Kullanıcı mail: <b>${kullanici.email}</b></div>
        <div>${doc.data().bio}</div>
        `;
        uyelikDetaylari.innerHTML=html;
      });
     
    
      girisLinkleri.forEach(item=>item.style.display='block');
      cikisLinkleri.forEach(item=>item.style.display='none');
      
  }else{
      uyelikDetaylari.innerHTML= '';
    girisLinkleri.forEach(item=>item.style.display='none');
    cikisLinkleri.forEach(item=>item.style.display='block');
    


  }
    
}
    
    const makaleYukle=(data)=>{
      if (data.length) {
        let html ='';
        data.forEach(doc=>{
            const makale=doc.data();
           // console.log(makale);
           const li =`
           <li>
           <div class="collapsible-header grey lighten-4">${makale.baslik}</div>
           <div class="collapsible-body white"><span>${makale.icerik}</span></div>
         </li>
           `;
           html +=li;
        });
       
        makaleler.innerHTML = html;
      }else {
          makaleler.innerHTML = '<h5 class="center-align ">Makaleler için giriş yapınız!</h5>'
      }
    
    };
document.addEventListener('DOMContentLoaded',function(){
    var modallar=document.querySelectorAll(".modal");
    M.Modal.init(modallar);

    var makaleler=document.querySelectorAll('.collapsible');
    M.Collapsible.init(makaleler);
});
