document.querySelectorAll('.box-input').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
        var cardBox = this.closest('.card_box');
        if (this.checked) {
            cardBox.classList.add('box-shadow');
        } else {
            cardBox.classList.remove('box-shadow');
        }
    });
});


document.getElementById('learnMoreButton').addEventListener('click', function () {
    document.getElementById('additionalContent').style.display = 'block';
    this.style.display = 'none';
});