// Setup your quiz text and questions here
// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "LFT Quiz - Dundee MBChB",
        "main": "<p>A short quiz to help study LFT's</p><hr><em>I (Lawrence Adams) don't take any responsibility if any of this is incorrect - but please don't hesidate to contact me!</em>",
        "results": "<h5><a href='http://almostadoctor.co.uk/content/osces/data-interpretation/lfts-liver-function-tests'>Learn More Here</a></h5><p>abcdef.</p>",
        "level1": "Exam Ready",
        "level2": "Near perfect",
        "level3": "LFT Amateur",
        "level4": "LFT Newb",
        "level5": "LFT Virgin"
    },
    "questions": [{ // Question - Multiple Choice, Single True Answer
            "q": "Alanine Transaminase (<em>ALT</em>) and Aspartate aminotransferase(<em>AST</em>) are:",
            "a": [{
                "option": "Hepatic enzymes",
                "correct": true
            }, {
                "option": "Indicate a degree of Hepatic inflammation",
                "correct": true
            }, {
                "option": "Low in Hepatitis",
                "correct": false
            }, {
                "option": "<strong>ALT</strong> is also present in muscle cells",
                "correct": false
            }],
            "select-any": true,
            "correct": "<p><span>Correct!</span>",
            "incorrect": "<p><span>Incorrect.</span>ALT and AST are both hepatic enzymes, although AST is less specific <em>(as it is also present in muscle cells)</em><br>Both ALT and AST indicate a degree of inflamation and are high in hepatitis!<br></p>"
        }, 

        { // Question 5 - True/false
            "q": "Alkaline phosphatase(<em>ALP</em>) is a cholestatic enzyme?",
            "a": [{
                    "option": "Yes",
                    "correct": true
                }, {
                    "option": "No",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>Correct!</span>Well done!</p>",
            "incorrect": "<p><span>Incorrect.</span>ALP is found mostly in the bile ducts of the liver.<br>When elevated indicated either <strong>obstuctive or cholestatic</strong> liver disease<br></p>"
        } // no comma here
    ]
};