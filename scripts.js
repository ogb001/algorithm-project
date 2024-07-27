function analyzeSentence(sentence) {
    // Initialize variables
    let charCount = 0;
    let wordCount = 0;
    let prevCharSpace = true;
    
    // Process each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        charCount++;
        
        // Check for end of sentence
        if (char === '.') {
            break;
        }
        
        // Check if current character is a space
        if (char === ' ') {
            if (!prevCharSpace) {
                wordCount++;
            }
            prevCharSpace = true;
        } else {
            prevCharSpace = false;
        }
    }
    
    // If the sentence does not end with a space, adjust word count
    if (!prevCharSpace) {
        wordCount++;
    }
    
    // Output results
    console.log("Total number of characters (excluding period):", charCount - 1);
    console.log("Total number of words:", wordCount);
}

// Example usage
let sentence = "This is a sample sentence.";
analyzeSentence(sentence);