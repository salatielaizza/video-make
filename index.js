var readline = require('readline-sync')


function start() {
	
	const content = {}
	content.searchTern = askAndReturnSearchTern()
	content.prefix = askAndReturnPrefix()

	function askAndReturnSearchTern() {
		return readline.question('Type a Wikipedia search term: ')
	}
	
	function askAndReturnPrefix(){
		const prefixes = ['Who is','What is','The history of']
		const selectPrefixIndex = readline.keyInSelect(prefixes, 'Choose one position')
		const selectPrefixText = prefixes[selectPrefixIndex]	
		console.log(selectPrefixText)
	}

	console.log(content)
}

start()
