/**
 * @author Daffa Ilhami
 * @email mdaffailhami@gmail.com
 * @create date 2020-11-23 | 18:24:42
 * @modify date 2020-11-23 | 18:24:42
 * @desc [Game Suit]
 */

// Variabel untuk score
        var draw = 0;
        var playerWin = 0, playerLose = 0;
        var compWin   = 0, compLose   = 0;

        // Main Program
        while (true) {
            var teksHasil = '';

            // Pilihan Player
            var player = prompt(`Silahkan pilih\n1. semut\n2. gajah\n3. orang`);
            if (player == 1 || player == "semut") {
            player = "semut";
            teksHasil += "Player       = semut\n";
            } else if (player == 2 || player == "gajah") {
                player = "gajah";
                teksHasil += "Player       = gajah\n";
            } else if (player == 3 || player == "orang") {
            player = "orang";
            teksHasil += "Player       = orang\n";
            } else {
                teksHasil += `Player       = ${player}\n`
            }

            // Pilihan Computer
            while (true) {
                var comp = Math.round(Math.random() * 10);
                if (comp != 0 || comp != 10) {
                    break;
                }
            }

            if (comp <= 3) {
                comp = "semut";
                teksHasil += `Computer = semut\n`;
            } else if (comp > 3 && comp <= 6) {
                comp = "gajah";
                teksHasil += `Computer = gajah\n`;
            } else {
                comp = "orang";
                teksHasil += `Computer = orang\n`;
            }

            // Hasil

            if (player == comp) {
                var lagiTidak = confirm(teksHasil + "Hasil         = SERI!!!\n\nKlik \"OK\" untuk main lagi,\nklik \"Cancel\" untuk berhenti!");
                console.log("Draw          = " + ++draw + "\n ");
            } else if (player == "semut") {
                if (comp == "gajah") {
                    var lagiTidak = confirm(teksHasil + "Hasil         = Player MENANG!!!\n\nKlik \"OK\" untuk main lagi,\nklik \"Cancel\" untuk berhenti!");
                    console.log(`Player WIN    = ${++playerWin}\n`);
                } else if (comp == "orang") {
                    var lagiTidak = confirm(teksHasil + "Hasil         = Player KALAH!!!\n\nKlik \"OK\" untuk main lagi,\nklik \"Cancel\" untuk berhenti!");
                    console.log(`Computer WIN  = ${++compWin}\n`);
                }
            } else if (player == "gajah") {
                if (comp == "semut") {
                    var lagiTidak = confirm(teksHasil + "Hasil         = Player KALAH!!!\n\nKlik \"OK\" untuk main lagi,\nklik \"Cancel\" untuk berhenti!");
                    console.log(`Computer WIN  = ${++compWin}\n`);
                } else if (comp == "orang") {
                    var lagiTidak = confirm(teksHasil + "Hasil         = Player MENANG!!!\n\nKlik \"OK\" untuk main lagi,\nklik \"Cancel\" untuk berhenti!");
                    console.log(`Player WIN    = ${++playerWin}\n`);
                }
            } else if (player == "orang") {
                if (comp == "semut") {
                    var lagiTidak = confirm(teksHasil + "Hasil         = Player MENANG!!!\n\nKlik \"OK\" untuk main lagi,\nklik \"Cancel\" untuk berhenti!");
                    console.log(`Player WIN    = ${++playerWin}\n`);
                } else if (comp == "gajah") {
                    var lagiTidak = confirm(teksHasil + "Hasil         = Player KALAH!!!\n\nKlik \"OK\" untuk main lagi,\nklik \"Cancel\" untuk berhenti!");
                    console.log(`Computer WIN  = ${++compWin}\n`);
                }
            } else {
                while (true) {
                    if (player == null) {
                        alert("Ngapa malah di cancel njirr\n~ Masukin yang bener bakayaro!!!");
                        break;
                    } else if (player == '') {
                        alert("Ngapa ga diisi woiii\n~ dipilih dulu woii bukan langsung di OK dasar konoyaro!!!");
                        break;
                    } else {
                        alert("Buta ya?? diliat woii itu ada listnya tinggal pilih aja mau yang mana!!!");
                        break;
                    }
                }
            }

            // Main lagi atau tidak
            if (lagiTidak == false) {
                break;
            }   
        }
        // document.getElementById("draw").innerHTML = `DRAW          = ${draw}`;
        document.getElementById("draw").innerHTML = `&emsp;- DRAW&emsp;&emsp;&emsp;&emsp;&ensp;=&ensp;${draw}`;
        document.getElementById("player_win").innerHTML = `&emsp;- Player WIN&emsp;&emsp;&ensp;=&ensp;${playerWin}`;
        document.getElementById("comp_win").innerHTML = `&emsp;- Computer WIN&emsp;=&ensp;${compWin}`;
        // document.getElementById("player_lose").innerHTML = `&emsp;- Player LOSE&emsp;&emsp;=&ensp;${playerLose}`;
        // document.getElementById("comp_lose").innerHTML = `&emsp;- Computer LOSE&ensp;=&ensp;${compLose}`;
