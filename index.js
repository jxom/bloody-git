#!/usr/bin/env node
'use strict';
const exec = require('child_process').exec;
const meow = require('meow');

const cli = meow(`
	Usage
	  $ bloody-git [shell]

	Examples
		$ bloody-git zsh
		$ bloody-git bash
`);

const supportedShells = ['zsh', 'bash'];
const shell = cli.input[0];
if (supportedShells.includes(shell)) {
	exec(`echo 'alias bloody="git"' >> ~/.${shell}rc && source ~/.${shell}rc`);
	console.log('Successfully bloody binded \'git\' to \'bloody\'\nRestart your bloody shell to use it.');
} else {
	console.log('Enter a bloody shell name!\n\nExample: bloody-git bash\n\n\'bloody-git --help\' for help');
}
