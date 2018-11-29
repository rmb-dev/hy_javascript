// Write a function `charIsVowel(c)` that takes a character (i.e. a string of length 1) as argument and returns true if it is a vowel, false otherwise. E.g. `charIsVowel("b")` returns `false`.

    const charIsVowel = (x) => {
        x = x.toLowerCase();
        if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
            return true;
        } 
        return false;
    }
    // once done, create seperate if statements for the following and log "yes it is a vowel / no it isn't a vowel"

    // Check if capital A is a vowel
    if (charIsVowel('A')) {
            console.log(`yes, A is a vowel`);
        } else {
            console.log(`no, A is not a vowel`);
        }

    // check if c isn't s vowel (HINT: Remember opposites with !)
    if (charIsVowel('c')) {
            console.log(`yes, c is a vowel`);
        } else {
            console.log(`no, c is not a vowel`);
        }

    // check if lowercase e AND uppercase O is a vowel
    if (charIsVowel('e', 'O')) {
            console.log(`yes, they are a vowels`);
        } else {
            console.log(`no, they are not a vowels`);
        }
      // 2
        if (charIsVowel('e') && charIsVowel('O')) {
        console.log(`yes, e and O are vowels`);
    } else {
        console.log(`no e and O are not vowels`);
    }

    // check if either x or u is a vowel
    if (charIsVowel('x') || charIsVowel('u')) {
            console.log(`yes, one of x or u are vowels`);
        } else {
            console.log(`neither x or u are vowels`);
        }
    
    // check that h isn't a vowel and e is a vowel
    if (charIsVowel('h') === false && charIsVowel('e')) {
        console.log(`yes, h is not a vowel and e is a vowel`);
    } else {
        console.log(`No, h is a vowel and e is not a vowel`);
    }
