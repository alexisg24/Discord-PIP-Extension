 window.addEventListener('load', ()=>{build()})

 function build(){
  setInterval(()=>{
    if(!document.getElementById('pip') && !document.getElementById('pipClose')){
      const container = document.querySelector('.buttons-uaqb-5');
      if(document.pictureInPictureElement){
        createButtonClose(container)
      }else{
        createButtonStart(container);
      }
    }
  }, 3000)
 }

  function createButtonStart(container){
    const item = document.createElement(`div`)
    item.innerHTML =  `<div role="button" aria-label="Hilos" aria-expanded="false" tabindex="0">&#128249;</div>`;
    item.setAttribute('id', 'pip');
    item.setAttribute('class', 'contents-3NembX button-2fCJ0o button-3BaQ4X')
    container.appendChild(item)
    document.getElementById('pip').addEventListener('click', ()=>{pip(container)})
  }

  function createButtonClose(container){
    const item = document.createElement(`div`)
    item.innerHTML = `<div role="button" aria-label="Hilos" aria-expanded="false" tabindex="0">&#128683;</div>`;
    item.setAttribute('id', 'pipClose');
    item.setAttribute('class', 'contents-3NembX button-2fCJ0o button-3BaQ4X');
    container.appendChild(item)
    document.getElementById('pipClose').addEventListener('click', ()=>{closePip(container)})
  }

  function pip (container){
    const video = document.querySelector('.media-engine-video');
    if (!video) {
      return;
    }
      video.requestPictureInPicture();
      container.removeChild(document.getElementById('pip'));
      createButtonClose(container);
  }

  function closePip (container){
    const video = document.querySelector('.media-engine-video');
    if (!video) {
      return;
    }
      document.exitPictureInPicture();
      container.removeChild(document.getElementById('pipClose'));
      createButtonStart(container);
  }