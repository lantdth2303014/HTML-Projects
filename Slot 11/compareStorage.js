function compareProducts() {
    var forms = document.getElementsByClassName('productForm');
    var productsToCompare = [];

    // Loop through all forms
    for (var j = 0; j < forms.length; j++) {
        var form = forms[j];

        // Loop through the form elements
        for (var i = 0; i < form.elements.length; i++) {
            if (form.elements[i].type == "checkbox" && form.elements[i].checked) {
                // If the checkbox is checked, add the product to the array
                productsToCompare.push(JSON.parse(form.elements[i].value));
            }
        }
    }

    // Store the array in local storage
    localStorage.setItem('productsToCompare', JSON.stringify(productsToCompare));

    // Redirect to the comparison page
    window.location.href = 'comparison.html';
}

window.onload = function() {
    var compareButton = document.querySelector('.compare-button');
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            // If more than four checkboxes are checked, uncheck the current checkbox and alert the user
            if (Array.from(checkboxes).filter(c => c.checked).length > 4) {
                checkbox.checked = false;
                alert('You can only compare up to 4 products.');
            }

            // Get the number of checked checkboxes
            var checkedCheckboxes = Array.from(checkboxes).filter(c => c.checked).length;

            // If more than one checkbox is checked, show the button. Otherwise, hide it.
            compareButton.style.opacity = (checkedCheckboxes > 1) ? '1' : '0';
        });
    });
}