
var fs = require('fs');

module.exports = {
    pwd: function () {
        process.stdout.write(process.cwd());
    },
    ls: function () {
        fs.readdir('.', function (err, files) {
            if (err) throw err;
            files.forEach(function (file) {
                process.stdout.write(file.toString() + "\n");
            })
            process.stdout.write("prompt > ");
        });
    }
}

//var ls = 



// var dateFormat = require('dateformat');
// //process.stdout.write('prompt > ');

// process.stdin.on('data', function (data) {
//   var cmd = data.toString().trim(); // remove the newline
//   if (cmd === 'pwd') {
//     process.stdout.write(process.cwd());    
//   }
//   if (cmd === 'date') {
//     var date = new Date();    
//     process.stdout.write(dateFormat(date, 'ddd mmm dd yyyy HH:MM:ss ') + 'GMT' + dateFormat(date, 'o (Z)'));
//   }
//   process.stdout.write('\nprompt > ');
// });


