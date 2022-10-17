let soal = '', jawaban = '';

function jawabBenar(selectedSoal, editClass) {
    $(editClass).attr('style', 'color:black')
    $("#select-soal option[value='" + selectedSoal + "']").attr("disabled", "true").addClass('bg-secondary text-white')
    $("#select-soal").prop('selectedIndex', 0)
    $('#jawaban').val('')
    alert('Jawaban Benar!')
}

function jawabSalah() {
    alert('Jawaban Salah!')
}

$(document).ready(() => {
    // $(document).bind("contextmenu",function(e){
    //     return false;
    // });

    // Submit Checking
    $('.btn').click(() => {
        soal = $('#select-soal').val()
        jawaban = $('#jawaban').val().toUpperCase()
        console.log(soal, jawaban);
        switch (soal) {
            case 'soal-1':
                if (jawaban === "TAKJIL") {
                    jawabBenar('soal-1', '.huruf-1')
                } else {
                    jawabSalah()
                }
                break;

            case 'soal-2-me':
                if (jawaban === "TADARUS") {
                    jawabBenar('soal-2-me', '.huruf-2-me')
                } else {
                    jawabSalah()
                }
                break;

            case 'soal-2-md':
                if (jawaban === "TARAWEH" || jawaban === "TERAWEH") {
                    jawabBenar('soal-2-md', '.huruf-2-md')
                } else {
                    jawabSalah()
                }
                break;

            case 'soal-3':
                if (jawaban === "EIDALFITR") {
                    jawabBenar('soal-3', '.huruf-3')
                } else {
                    jawabSalah()
                }
                break;

            case 'soal-4':
                if (jawaban === "RAMADHAN" || jawaban === "RAMADAN") {
                    jawabBenar('soal-4', '.huruf-4')
                } else {
                    jawabSalah()
                }
                break;

            case 'soal-5':
                if (jawaban === "HAUS") {
                    jawabBenar('soal-5', '.huruf-5')
                } else {
                    jawabSalah()
                }
                break;

            case 'soal-6':
                if (jawaban === "SAHUR") {
                    jawabBenar('soal-6', '.huruf-6')
                } else {
                    jawabSalah()
                }
                break;

            default:
                alert("Silahkan pilih soal dan masukan jawaban")
                break;
        }
    })
})