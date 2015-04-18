// Setup your quiz text and questions here
// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "LFT Quiz - Dundee MBChB",
		"main": "<p>A short quiz to help study LFT's</p><hr><!---<em>I (Lawrence Adams) don't take any responsibility if any of this is incorrect - but please don't hesidate to contact me!</em>--->",
		"results": "<h5>All Finished!</h5><p>Thanks for taking my LFT quiz! I hope it was of some use. <a href='http://almostadoctor.co.uk/content/osces/data-interpretation/lfts-liver-function-tests'>Learn more here</a><hr>Powered by <a href='https://github.com/jewlofthelotus/SlickQuiz'>SlickQuiz</a>, <a href='http://jquery.com/'>jQuery</a>, and <a href='http://git-scm.com/'>git</a></p>",
		"level1": "LFT Ninja",
		"level2": "Near perfect",
		"level3": "LFT Amateur",
		"level4": "LFT Newb",
		"level5": "What is an LFT?"
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

		{ // True/false
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
			"incorrect": "<p><span>Incorrect.</span>ALP is found mostly in the <strong>bile ducts</strong> (also bone, and as such is raised during adolescence and pregnancy) of the liver.<br>When elevated indicated either <strong>obstuctive or cholestatic</strong> liver disease<br></p>"
		}, {
			"q": "What happens to the levels of ALP in patients with hepatic metastases or primary billiary cirrhosis",
			"a": [{
				"option": "ALP is <strong>increased</strong>",
				"correct": true
			}, {
				"option": "ALP is <strong>decreased</strong>",
				"correct": false
			}],
			"correct": "<p><span>Correct!</span>Well done!</p>",
			"incorrect": "<p><span>Incorrect.</span><strong>ALP</strong> will be increased in these two cases."
		}, {
			"q": "Select the true statement about &gamma;GT:",
			"a": [{
				"option": "GGT does not rise with cholestasis.",
				"correct": false
			}, {
				"option": "GGT can be used as a guide of alcohol intake if ALT is normal.",
				"correct": true
			}],
			"correct": "<p><span>Correct!</span>Well done</p>",
			"incorrect": "<p><span>Incorrect.</span><strong>ALT</strong> can be used as a guide of alcohol intake.<br>It also rises with cholestatis, but does not indicate liver disease is other tests are normal."
		}
	]
};