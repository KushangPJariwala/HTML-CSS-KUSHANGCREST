let n = 1;
$ (document).ready (function () {
  $ ('.btn--left').click (function () {
    n--;
    if (n <= 0) n = 3;

    if (n === 1) {
      $ ('.t1').fadeIn ();
      $ ('.t2').fadeOut ();
      $ ('.t3').fadeOut ();
      $ ('.t1').addClass ('show');
      $ ('.t2').removeClass ('show');
      $ ('.t3').removeClass ('show');
    }
    if (n === 2) {
      $ ('.t2').fadeIn ();
      $ ('.t1').fadeOut ();
      $ ('.t3').fadeOut ();
      $ ('.t2').addClass ('show');
      $ ('.t1').removeClass ('show');
      $ ('.t3').removeClass ('show');
    }
    if (n === 3) {
      $ ('.t3').fadeIn ();
      $ ('.t2').fadeOut ();
      $ ('.t1').fadeOut ();
      $ ('.t3').addClass ('show');
      $ ('.t2').removeClass ('show');
      $ ('.t1').removeClass ('show');
    }
  });
  $ ('.btn--right').click (function () {
    n++;
    if (n > 3) n = 1;

    if (n === 1) {
      $ ('.t1').fadeIn ('slow');
      $ ('.t2').fadeOut ('slow');
      $ ('.t3').fadeOut ('slow');

      $ ('.t1').addClass ('show');
      $ ('.t2').removeClass ('show');
      $ ('.t3').removeClass ('show');
    }
    if (n === 2) {
      $ ('.t2').fadeIn ('slow');
      $ ('.t1').fadeOut ('slow');
      //   $ ('.t3').fadeOut ();
      $ ('.t2').addClass ('show');
      $ ('.t1').removeClass ('show');
      $ ('.t3').removeClass ('show');
    }
    if (n === 3) {
      $ ('.t3').fadeIn ('slow');
      $ ('.t2').fadeOut ('slow');
      $ ('.t1').fadeOut ('slow');
      $ ('.t3').addClass ('show');
      $ ('.t2').removeClass ('show');
      $ ('.t1').removeClass ('show');
    }
  });
});

// const t1 = document.querySelector ('.t1');
// const t2 = document.querySelector ('.t2');
// const t3 = document.querySelector ('.t3');

// const left = document.querySelector ('.btn--left');
// const right = document.querySelector ('.btn--right');

// const slide = n => {
//   if (n === 1) {
//     t1.classList.add ('show');
//     t2.classList.remove ('show');
//     t3.classList.remove ('show');
//   }
//   if (n === 2) {
//     t2.classList.add ('show');
//     t1.classList.remove ('show');
//     t3.classList.remove ('show');
//   }
//   if (n === 3) {
//     t3.classList.add ('show');
//     t2.classList.remove ('show');
//     t1.classList.remove ('show');
//   }
// };

// left.addEventListener ('click', () => {
//   n--;
//   if (n <= 0) n = 3;
//   console.log ('n', n);

//   slide (n);
// });

// right.addEventListener ('click', () => {
//   n++;
//   if (n > 3) n = 1;
//   console.log ('n', n);
//   slide (n);
// });

// $ (document).ready (function () {
//   $ ('.btn--left').click (function () {
//     // alert ('hi');
//     $ ('.t1').fadeIn ();
//     $ ('.t2').fadeOut ('slow');
//     $ ('.t3').fadeOut ('slow');
//   });
// });
