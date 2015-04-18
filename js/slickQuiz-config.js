// Setup your quiz text and questions here
// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": { // introduction/general settings 
		"name": "LFT Quiz - Dundee MBChB",
		"main": "<p>A short quiz to help study LFT's</p><hr><!---<em>I (Lawrence Adams) don't take any responsibility if any of this is incorrect - but please don't hesidate to contact me!</em>--->",
		"results": "<h5>All Finished!</h5><p>Thanks for taking my LFT quiz! I hope it was of some use. <a href='http://almostadoctor.co.uk/content/osces/data-interpretation/lfts-liver-function-tests'>Learn more here</a><hr><em>Powered by <a href='https://github.com/jewlofthelotus/SlickQuiz'>SlickQuiz</a>, <a href='http://jquery.com/'>jQuery</a>, and <a href='http://git-scm.com/'>git</a>.</em></p>",
		"level1": "LFT Ninja",
		"level2": "Near perfect",
		"level3": "LFT Amateur",
		"level4": "LFT Newb",
		"level5": "What is an LFT?"
	},
	"questions": [{ // Question - Multiple Choice, Single True Answer
			"q": "Alanine Transaminase (<em>ALT</em>) and Aspartate aminotransferase (<em>AST</em>) are:",
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
		}, {
			"q": "In acute liver disase, what would you expect?",
			"a": [{
					"option": "Normal levels of <strong>Albumin</strong>",
					"correct": true
				}, {
					"option": "Decreased levels of <strong>Albumin</strong>",
					"correct": false
				}, {
					"option": "Normal levels of <strong>Prothrombin</strong>",
					"correct": false
				}, {
					"option": "Decreasd levels of <strong>Prothrombin</strong>",
					"correct": true
				}

			],
			"select-any": true,
			"correct": "<p><span>Correct!</span>Well done</p>",
			"incorrect": "<p><span>Incorrect.</span><strong>Albumin</strong> has a relatively long half life compared to <strong>Prothrombin</strong>, therefore in <em>acute</em> liver disease you would expect a normal albumin with a low prothrombin (which has a longer half life)</p>"
		}, { // question template on specific questions
			"q": "Dark urine rules out post-hepatic jaundice:",
			"a": [{
				"option": "True",
				"correct": false
			}, {
				"option": "False",
				"correct": true
			}],
			"correct": "<p><span>Correct!</span>Well done</p>",
			"incorrect": "<p><span>Incorrect.</span><strong>Dark</strong> urine is usually indicative of intra, or post-hepatic jaundice (bilirubin is not eliminated in the stool), and rules out pre-hepatic jaundice.</p>"
		}, {
			"q": "Elevated levels of this enzymes indicates obstruction or cholestatic liver disease:",
			"a": [{
				"option": "Alanine Transaminase (<strong>ALT</strong>)",
				"correct": false
			}, {
				"option": "Aspartate aminotransferase (<strong>AST</strong>)",
				"correct": false
			}, {
				"option": "Alkaline phosphatase (<strong>ALP</strong>)",
				"correct": true
			}, {
				"option": "Gamma-glutamyltransferase (<strong>GGT</strong>)",
				"correct": false
			}, {
				"option": "Albumin",
				"correct": false
			}, {
				"option": "Bilirubin",
				"correct": false
			}, {
				"option": "Prothrombin time (<strong>PT</strong>)",
				"corect": false
			}],
			"correct": "<p><span>Correct!</span>Well done!</p>",
			"incorrect": "<p><span>Incorrect.</span><strong>ALP</strong> is a cholestatic enzyme that would be eleveated.</p>"
		}, {
			"q": "Which enzymes leak into the blood stream when liver cells are damaged?",
			"a": [{
				"option": "Alanine Transaminase (<strong>ALT</strong>)",
				"correct": true
			}, {
				"option": "Aspartate aminotransferase (<strong>AST</strong>)",
				"correct": true
			}, {
				"option": "Alkaline phosphatase (<strong>ALP</strong>)",
				"correct": false
			}, {
				"option": "Gamma-glutamyltransferase (<strong>GGT</strong>)",
				"correct": false
			}, {
				"option": "Albumin",
				"correct": false
			}, {
				"option": "Bilirubin",
				"correct": false
			}, {
				"option": "Prothrombin time (<strong>PT</strong>)",
				"corect": false
			}],
			"select-any": true,
			"correct": "<p><span>Correct!</span>Well done!</p>",
			"incorrect": "<p><span>Incorrect.</span><strong>AST</strong> and <strong>ALT</strong> would be elevated.</p>"
		}, {
			"q": "A test of clotting function:",
			"a": [{
				"option": "Alanine Transaminase (<strong>ALT</strong>)",
				"correct": false
			}, {
				"option": "Aspartate aminotransferase (<strong>AST</strong>)",
				"correct": false
			}, {
				"option": "Alkaline phosphatase (<strong>ALP</strong>)",
				"correct": false
			}, {
				"option": "Gamma-glutamyltransferase (<strong>GGT</strong>)",
				"correct": false
			}, {
				"option": "Albumin",
				"correct": false
			}, {
				"option": "Bilirubin",
				"correct": false
			}, {
				"option": "Prothrombin time (<strong>PT</strong>)",
				"corect": true
			}],
			"correct": "<p><span>Correct!</span>Well done!</p>",
			"incorrect": "<p><span>Incorrect.</span>Prothrombin time (or <strong>PT</strong>) is a marker of clotting function, and is a <em>true</em> liver function test."
		}
	]
};