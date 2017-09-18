var dateFormat = require('dateformat');
// console.log(process);
// console.log(Object.keys(process));

//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline

  if (cmd === 'pwd') {
    process.stdout.write(process.cwd());    
  }

  if (cmd === 'date') {
    var date = new Date();    
    process.stdout.write(dateFormat(date, 'ddd mmm dd yyyy HH:MM:ss ') + 'GMT' + dateFormat(date, 'o (Z)'));
  }

  process.stdout.write('\nprompt > ');

});
