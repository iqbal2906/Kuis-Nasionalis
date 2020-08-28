//Function to count correct answers and print results to document 
function myFunction() {

    //MENGHITUNG JAWABAN BENAR
    var correctAnswers = 0;

    //MENGAMBIL INPUT JAWABAN DAN MENGECHECK
    var q1 = document.getElementById("q1").value;
    var q2 = document.getElementById("q2c").checked;
    var q3 = document.getElementById("q3").value;
    var q4 = document.getElementById("q4a").checked;
    var q5 = document.getElementById("q5").value;
    var q6 = document.getElementById("q6").value;
    var q7 = document.getElementById("q7c").checked;
    var q8 = document.getElementById("q8").value;
    var q9 = document.getElementById("q9").value;
    var q10 = document.getElementById("q10d").checked;
    var q11 = document.getElementById("q11b").checked;
    var q12 = document.getElementById("q12").value;
    var q13 = document.getElementById("q13b").checked;
    var q14 = document.getElementById("q14").value;
    var q15 = document.getElementById("q15a", "q15b").checked;
    var q16 = document.getElementById("q16d").checked;
    var q17 = document.getElementById("q17").value;
    var q18 = document.getElementById("q18c").checked;
    var q19 = document.getElementById("q19").value;
    var q20 = document.getElementById("q20").value;

    //JAWABAN SOAL ESSAI 
    if (q1.toUpperCase() === "SAYUTI MELIK") {
        correctAnswers += 1;
    }
    if (q2) {
        correctAnswers += 1;
    }
    if ((q3.toUpperCase() === "HIROSHIMA") || (q3.toUpperCase() === "NAGASAKI")) {
        correctAnswers += 1;
    }
    if (q4) {
        correctAnswers += 1;
    }
    if ((q5.toUpperCase() === "MESIR") || (q5.toUpperCase() === "EGYPT")) {
        correctAnswers += 1;
    }
    if (q6.toUpperCase() === "MALUKU") {
        correctAnswers += 1;
    }
    if (q7) {
        correctAnswers += 1;
    }
    if (q8.toUpperCase() === "RENCONG") {
        correctAnswers += 1;
    }
    if ((q9.toUpperCase() === "JOGLO") || (q9.toUpperCase() === "KEBAYA")) {
        correctAnswers += 1;
    }
    if (q10) {
        correctAnswers += 1;
    }
    if (q11) {
        correctAnswers += 1;
    }
    if (q12.toUpperCase() === "SOEDIRMAN") {
        correctAnswers += 1;
    }
    if (q13) {
        correctAnswers += 1;
    }
    if (q14.toUpperCase() === "SISINGAMANGARAJA") {
        correctAnswers += 1;
    }
    if (q15) {
        correctAnswers += 1;
    }
    if (q16) {
        correctAnswers += 1;
    }
    if ((q17.toUpperCase() === "MK") || (q17.toUpperCase() === "MAHKAMAH KONSTITUSI")) {
        correctAnswers += 1;
    }
    if (q18) {
        correctAnswers += 1;
    }
    if ((q19.toUpperCase() === "MEGAWATI") || (q17.toUpperCase() === "MEGAWATI SOEKARNOPUTRI")) {
        correctAnswers += 1;
    }
    if ((q20.toUpperCase() === "31 TAHUN") || (q20 === "31")) {
        correctAnswers += 1;
    }

    //MENAMPILKAN HASIL SESUAI NILAI JAWABAN YANG BENAR
    if (correctAnswers === 20) {
        document.getElementById("result").innerHTML = "Congratulations! You got all 20 answers correct";
    } else if (correctAnswers >= 15) {
        document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";
    } else if (correctAnswers >= 10) {
        document.getElementById("result").innerHTML = "You got " + correctAnswers + " answers correct";
    } else if (correctAnswers >= 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got " + correctAnswers + " answers correct";
    } else if (correctAnswers === 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got 1 answer correct";
    } else if (correctAnswers === 0) {
        document.getElementById("result").innerHTML = "You didn't answer a single answer correctly!";
    }

    //MENAMPILKAN DAFTAR JAWABAN YANG BENAR
    document.getElementById("answers").innerHTML = "Correct answers: (1)Sayuti Melik (2)Jalan Pegangsaaan Timur No. 56 (3)Hiroshima/Nagasaki (4)1 Maret 1945 (5)Mesir/Egipt (6)Maluku (7)Sumatera Utara (8)Rencong (9)Joglo/Kebaya (10)Kalimantan Utara (11)Ki Hajar Dewantara (12)Soedirman (13)Soekarno dan Mohammad Hatta (14)Sisingamangaraja (15)RA Kartini/Raden Dewi Sartika (16)ABRI (17)Mahkamah Konstitusi (18)Istimewa (19)Megawati (20)31 Tahun";

    //MERESET 
    document.getElementById("quiz-form").reset();
}