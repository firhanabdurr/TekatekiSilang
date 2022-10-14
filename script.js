const jawaban = '', soal = ''
$(document).ready(() => {
    $('.submit').click(() => {
        jawaban = $('jawaban').val()
        soal = $('soal').val()
        switch (soal) {
            case 'm1':
                if (jawaban === "TAKJIL") {
                    alert('BENER')
                } else {

                }
            case 'd2':
                if (jawaban === "TARAWEH") {

                } else {

                }
            case 'm2':
                if (jawaban === "TADARUS") {

                } else {

                }
            case 'm3':
                if (jawaban === "EIDALFITR") {

                } else {

                }
            case 'd4':
                if (jawaban === "RAMADAN") {

                } else {

                }
            case 'd5':
                if (jawaban === "HAUS") {

                } else {

                }
            case 'd6':
                if (jawaban === "SAHUR") {

                } else {

                }
        }
    })
})
