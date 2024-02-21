function showAlert(){//Lines 1 to 9 is for Item 1
    var nickname = document.getElementById('nickname').value;
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var heightFeet = Math.floor(height / 12);
    var heightInches = height % 12;
    var weightFinal = Math.round(weight * 2.20462);
    alert('Nickname: ' + nickname + '\n' + 'Height: ' + heightFeet + '\'' + heightInches + '\"' + '\n' + 'Weight: ' + weightFinal + 'lbs');
}

function displayInfo(){//Lines 11 to 20 is for Item 2
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var birthYearInput = document.getElementById('birthYear').value;
    var birthYear = parseInt(birthYearInput);
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;
    var outputText = 'Hello ' + firstName + ' ' + lastName + '! How does it feel to be ' + age + ' years old?';
    alert(outputText);
}

function askForConsent(){//Lines 22 to 30 is for Item 3
    var consent = ("Do you agree to share your personal information with our site?");
    if (confirm(consent) == true){
        showAlert();
    }
    else{
        alert("User does not wish to share his/her information.");
    }
}
