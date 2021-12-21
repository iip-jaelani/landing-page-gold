if (
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
) {
  document.querySelector('#bg-image').src = './images/mobile-v.jpeg';
  document.querySelector('#bg-image').className = 'bg-mobile';

  document.querySelector('#btn-container').className =
    'container-image-bg-mobile';
} else {
  document.querySelector('#bg-image').src = './images/web-v.jpeg';
  document.querySelector('#bg-image').className = 'bg-web';
  document.querySelector('#btn-container').className = 'container-image-bg';
}

$('#gplay').click(() => {
  window.location.href =
    'https://play.google.com/store/apps/details?id=com.slotslimited.goldencasino&hl=en&gl=US';
});
$('#appstore').click(() => {
  window.location.href =
    'https://apps.apple.com/us/app/golden-casino-vegas-slots/id1216780424';
});
