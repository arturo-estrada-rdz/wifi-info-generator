# wifi-info-generator

A CLI tool to generate Wi-Fi QR codes. This utility allows you to easily create a QR code image that encodes your Wi-Fi credentials, making it simple to share network access with others.

## Features

- Prompt for Wi-Fi SSID, password, encryption type, and hidden status via CLI or command-line arguments
- Generates a QR code PNG image for easy sharing
- Output images are saved in the `output/` directory

## Requirements

- Node.js (v16 or higher recommended)
- npm

## Installation

Clone the repository and install dependencies:

```sh
git clone <repository-url>
cd wifi-info-generator
npm install
```

## Usage

You can run the tool using:

```sh
npm start
```

You will be prompted for the Wi-Fi SSID, password, encryption type (WPA/WEP/None), and whether the SSID is hidden.

Alternatively, you can provide arguments directly:

```sh
npm start -- --ssid="MyNetwork" --password="mypassword" --encryption="WPA" --hidden
```

The generated QR code image will be saved in the `output/` directory as `wifi-qr-<SSID>.png`.

## Scripts

- `npm start` - Run the CLI tool
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run lint` - Lint the codebase
- `npm run lint:fix` - Lint and auto-fix issues

## License

ISC

---
