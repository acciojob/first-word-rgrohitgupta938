function firstWord(s) {
  // your code here
	s = s.trim();
	if (!s || s.indexOf(' ') === -1) {
        return s;
    }
 
    return s.substring(0, s.indexOf(' '));
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
