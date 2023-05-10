// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { HelloWorldPanel } from "./panels/HelloWorldPanel"

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "solid-code" is now active!')

  context.subscriptions.push(vscode.commands.registerCommand('solid-code.licences', async () => {
		vscode.commands.executeCommand(`workbench.action.openWalkthrough`, `marvdann.solid-code#licences`)
	}));

  const validateAndRun = async (fn: () => void) => {
    const config = vscode.workspace.getConfiguration('solid-code')

    if (!config.get('eula') || !config.get('privacy')) {
      await vscode.commands.executeCommand('solid-code.licences')
    } else {
      fn()
    }
  }

  context.subscriptions.push(vscode.commands.registerCommand('solid-code.helloWorld', async () => {
      validateAndRun(() => HelloWorldPanel.render(context.extensionUri))
  }))

  context.subscriptions.push(vscode.commands.registerCommand('solid-code.changeEula', async () => {
    console.log('accepting EULA')
		await vscode.workspace.getConfiguration('solid-code').update('eula', true)
	}));

  context.subscriptions.push(vscode.commands.registerCommand('solid-code.changePrivacy', async () => {
    console.log('accepting Privacy')
		await vscode.workspace.getConfiguration('solid-code').update('privacy', true);
	}));

}

// This method is called when your extension is deactivated
export function deactivate() {
  // do nothing
}
