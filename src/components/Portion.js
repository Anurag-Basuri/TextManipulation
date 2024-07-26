import React, { useState } from 'react';

function Portion(props){

    // handle UppersCase
    const handleUp = (event) => {
        console.log("UpperCase is clicked");
        let nout = write;
        setout(nout.toUpperCase());
        setwrite(nout.toUpperCase());
    }

    // handle LowerCase
    const handleLow = (event) => {
        console.log("LoweCase is clicked");
        let nout = write;
        setout(nout.toLowerCase());
        setwrite(nout.toLowerCase());
    }
    
    // handle all the changes done to first textarea
    const handlechange = (event) => {
        setwrite(event.target.value);
        updateStatistics(event.target.value);
    }
    
    // handle TItleCase
    const handleTitleCase = () => {
        console.log("TitleCase is clicked");
        setwrite(write.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
        setout(write.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));
    };
    
    // handle TItleCase
    const handleReverse = () => {
        console.log("Reverse is clicked");
        setwrite(write.split('').reverse().join(''));
        setout(write.split('').reverse().join(''));
    };
    
    // handle sentencecase
    const handleSentenceCase = () => {
        const sentenceCaseText = write.replace(/([^.!?]*[.!?])\s*/g, (match, p1) => p1.charAt(0).toUpperCase() + p1.slice(1).toLowerCase());
        setwrite(sentenceCaseText);
        setout(sentenceCaseText);
    };

    // handle extra spaces
    const handleSpace = () => {
        console.log("RemoveExtraSpace is clicked");
        const paragraphs = write.split('\n');
        
        // Process each paragraph separately
        const processedParagraphs = paragraphs.map(paragraph => {
            let trimmedParagraph = paragraph.replace(/\s+/g, ' ');

            trimmedParagraph = trimmedParagraph.replace(/\s*([.?!])\s*/g, '$1 ');

            return trimmedParagraph.trim();
        });

        const trimmedText = processedParagraphs.join('\n');

        setout(trimmedText);
        updateStatistics(trimmedText);
        setwrite(trimmedText);
    }

    // alternate text to uppercase
    const handleAlternateCase = () => {
        let result = '';
        for (let i = 0; i < write.length; i++) {
          result += i % 2 === 0 ? write[i].toUpperCase() : write[i].toLowerCase();
        }
        setwrite(result);
        setout(result);
    };

    // Add Sufix to each word
    const handleAddSuffix = () => {
        const suffix = prompt('Enter a suffix to add:');
        if (suffix) {
            setwrite(write.replace(/\b\w+\b/g, word => word + suffix));
            setout(write.replace(/\b\w+\b/g, word => word + suffix));
        }
    };
    
    // Add Prefix to each word
    const handleAddPrefix = () => {
        const prefix = prompt('Enter a suffix to add:');
        if (prefix) {
            setwrite(write.replace(/\b\w+\b/g, word => prefix + word));
            setout(write.replace(/\b\w+\b/g, word => prefix + word));
        }
    };

    // handle vowel
    const handleRemoveVowels = () => {
        setwrite(write.replace(/[aeiouAEIOU]/g, ''));
        setwrite(write.replace(/[aeiouAEIOU]/g, ''));
    };

    // handle consonants
    const handleRemoveConsonants = () => {
        setwrite(write.replace(/[^aeiouAEIOU\s]/g, ''));
    };

    // Vowel count
    const handleCountVowels = () => {
        const count = write.match(/[aeiouAEIOU]/g)?.length || 0;
        alert(`Vowel Count: ${count}`);
    };
    
    // Consonant count
    const handleCountConsonants = () => {
        const count = write.match(/[^aeiouAEIOU\s\d\W]/g)?.length || 0;
        alert(`Consonant Count: ${count}`);
    };

    // Remove Digits
    const handleRemoveDigits = () => {
        setwrite(write.replace(/\d/g, ''));
        setout(write.replace(/\d/g, ''));
    };
    
    // Remove Special Chartacters
    const handleRemoveSpecialCharacters = () => {
        setwrite(write.replace(/[^a-zA-Z0-9\s]/g, ''));
        setout(write.replace(/[^a-zA-Z0-9\s]/g, ''));
    };

    // to clear text
    const clearText = () => {
        setwrite('');
    }

    // handle copy to clipboard
    const copyToClipboard = () => {
        let text = out;
          
        console.log("Copied to clipboard");
        navigator.clipboard.writeText(text);
          
        showAlert();
    }
        
    // shows an alert when copy is clicked
    function showAlert() {
        const alertBox = document.getElementById('alert-box');
        alertBox.style.display = 'block';
    
        setTimeout(() => {
        alertBox.style.display = 'none';
        }, 4000);
    }

    const [write, setwrite] = useState(""); // first textarea
    const [out, setout] = useState(""); // second textarea

    // Function to calculate word count
    const getWordCount = (text) => {
        return text.trim().split(/\s+/).filter(word => word.length > 0).length;
    };

    // Function to calculate character count
    const getCharacterCount = (text) => {
        return text.length;
    };

    // Function to calculate sentence count
    const getSentenceCount = (text) => {
        return text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0).length;
    };

    // Function to calculate paragraph count
    const getParagraphCount = (text) => {
        return text.split(/[.!?]\n+/).filter(paragraph => paragraph.trim().length > 0).length;
    };
    
    const updateStatistics = (text) => {
        // Update UI with the calculated statistics
        document.getElementById('words-count').textContent = getWordCount(text);
        document.getElementById('characters-count').textContent = getCharacterCount(text);
        document.getElementById('sentences-count').textContent = getSentenceCount(text);
        document.getElementById('paragraphs-count').textContent = getParagraphCount(text);
    }

    
    
    return (
        <>
            <section className="contain">
                <div className="stat" style={{backgroundColor : props.theme === "light" ? "white" : "#212529", color : props.theme === "light" ? "black" : "white"}} >Words<br /><span id="words-count">0</span></div>
                <div className="stat" style={{backgroundColor : props.theme === "light" ? "white" : "#212529", color : props.theme === "light" ? "black" : "white"}} >Characters<br /><span id="characters-count">0</span></ div>
                <div className="stat" style={{backgroundColor : props.theme === "light" ? "white" : "#212529", color : props.theme === "light" ? "black" : "white"}} >Sentences<br /><span id="sentences-count">0</span></ div>
                <div className="stat" style={{backgroundColor : props.theme === "light" ? "white" : "#212529", color : props.theme === "light" ? "black" : "white"}} >Paragraphs<br /><span id="paragraphs-count">0</span></div>
            </section>

            <div className="mb-3">
                <h1> {props.title} </h1>
                <textarea className="form-control my-3 border-2" value={write} placeholder="Write here....." id="text-box" rows="5" onChange={handlechange} style={{backgroundColor : props.theme === "light" ? "white" : "#212529", color : props.theme === "light" ? "black" : "white"}} />
            </div>

            <div className='container'>
                <button onClick = {handleUp} className = "btn btn-primary mx-1">UpperCase</button>
                <button onClick = {handleLow} className = "btn btn-primary mx-1">LowereCase</button>
                <button onClick = {handleSpace} className = "btn btn-primary mx-1">RemoveExtraSpace</button>
                <button className="btn btn-primary mx-1" onClick={handleTitleCase}>TitleCase</button>
                <button className="btn btn-primary mx-1" onClick={handleReverse}>Reverse</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleSentenceCase}>Capitalize</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleAlternateCase}>AlternateCase</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleAddSuffix}>AddSuffix</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleAddPrefix}>AddPrefix</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveVowels}>RemoveVowels</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveConsonants}>RemoveConsonants</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCountVowels}>CountVowels</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleCountConsonants}>CountCosonants</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveDigits}>RemoveDigits</button>
                <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveSpecialCharacters}>CountSpecialChars</button>
                <button onClick = {clearText} className = "btn btn-primary mx-1 my-1">Clear</button>
            </div>

            <div className='mb-3'>
                <textarea className="form-control mt-5 my-3 border-2" value={out} placeholder="Your output will display here....." rows="5" readOnly style={{backgroundColor : props.theme === "light" ? "white" : "#212529", color : props.theme === "light" ? "black" : "white"}} />
            </div>

            <div className="col-md-12 text-center mt-3">
                <button className="btn btn-primary" onClick={copyToClipboard}>Copy</button>
            </div>
            <article id="alert-box">
                copied to clipboard!!
            </article>
        </>
    )
}

export default Portion;
