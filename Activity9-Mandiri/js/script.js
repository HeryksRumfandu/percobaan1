function fnValForm() {
    var sMsg = "";
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();
    var emailPattern = /^[a-z0-9][a-z0-9_\.\-]*[a-z0-9]@[a-z0-9][a-z0-9_\.\-]*[a-z0-9]\.[a-z0-9]{2,4}$/;

    if (!name) sMsg += 'Anda belum mengisikan nama\n';
    if (!email) {
        sMsg += 'Anda belum mengisikan email\n';
    } else if (!emailPattern.test(email)) {
        sMsg += 'Format email tidak valid\n';
    }
    if (!message) sMsg += 'Anda belum mengisikan pesan\n';

    if (sMsg) {
        alert('Peringatan:\n' + sMsg);
        return false;
    } else {
        return true;
    }
}
