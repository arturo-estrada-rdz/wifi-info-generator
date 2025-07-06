import * as readline from 'readline';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { WifiInfo } from './models';

/**
 * Creates a readline interface for user input in the console.
 */
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Prompts the user for input in the console.
 *
 * @param {string} question - The question to prompt the user with.
 * @returns {Promise<string>} A promise that resolves with the user's input.
 */
export function prompt(question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, (answer) => resolve(answer)));
}

/**
 * Gets the Wi-Fi configuration arguments from the command line or prompts the user.
 *
 * @returns {Promise<Required<WifiInfo>>} A promise that resolves with the Wi-Fi configuration.
 */
export async function getArgs(): Promise<Required<WifiInfo>> {
  const argv = yargs(hideBin(process.argv as string[]))
    .options({
      ssid: { type: 'string', describe: 'Wi-Fi SSID' },
      password: { type: 'string', describe: 'Wi-Fi password' },
      encryption: {
        type: 'string',
        choices: ['WPA', 'WEP', 'None'] as const,
        describe: 'Encryption type',
      },
      hidden: { type: 'boolean', describe: 'Is SSID hidden?', default: false },
    })
    .help()
    .parseSync();

  const ssid = argv.ssid || (await prompt('SSID: '));
  const password = argv.password ?? (await prompt('Password (can be empty): '));
  const encryption = (argv.encryption || (await prompt('Encryption (WPA/WEP/None): '))) as
    | 'WPA'
    | 'WEP'
    | 'None';
  const hidden =
    argv.hidden ?? (await prompt('Is SSID hidden? (y/n): ')).toLowerCase().startsWith('y');

  rl.close();

  return {
    ssid,
    password,
    encryption,
    hidden,
  };
}
