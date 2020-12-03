"use strict";
const vscode = require("vscode");

const delve_core = require('./delve-core.js');
// const delve_library = require('./delve-library.js');

function activate(context) {
    const disposable = vscode.languages.registerHoverProvider(['delve'], {
        provideHover(document, position, token) {
            let range = document.getWordRangeAtPosition(position);
            let word = document.getText(range);

            // capture words that start with an @ sign
            if (range.start.character > 0) {
                const range2 = new vscode.Range(new vscode.Position(range.start.line, range.start.character - 1), range.end);
                const word2 = document.getText(range2);
                if (word2[0] == '@') word = word2;
            }

            let hoverText = delve_core.map[word];
            // if (hoverText === undefined) hoverText = delve_library.map[word];

            return new vscode.Hover(hoverText);
        }
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() { }
exports.deactivate = deactivate;
