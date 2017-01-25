var stringToCompress = "aabcccccaaa",
    compressedString = "";

function compressString() {
	for (var i = 0; i < stringToCompress.length - 1; i++) {
        if ( stringToCompress.charAt(i) !== stringToCompress.charAt(i+1) ) {
            compressedString += stringToCompress.charAt(i);

        } else {
            charCount +=1
        }
	}
	console.log(compressedString);
	return compressedString;
}


compressString(stringToCompress);
