process.stdout.write('hello from spinner1.js... \rheyyy\n');

// setInterval(() => {
//   for (let i = 0; i < 3000; i += 200) {
//     spinner();
//   }
// }, 200);

setInterval(() => {
  setTimeout(() => process.stdout.write('\r|   '), 100);
  setTimeout(() => process.stdout.write('\r/   '), 200);
  setTimeout(() => process.stdout.write('\r-   '), 300);
  setTimeout(() => process.stdout.write('\r\\   '), 400);
  setTimeout(() => process.stdout.write('\r|   '), 500);
  setTimeout(() => process.stdout.write('\r/   '), 600);
  setTimeout(() => process.stdout.write('\r-   '), 700);
  setTimeout(() => process.stdout.write('\r\\   '), 800);
}, 1000);