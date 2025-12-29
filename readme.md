# seed-word-finder

A lightweight, offline-capable web tool designed to help recover lost cryptocurrency wallet recovery phrases (BIP39 mnemonic seeds).

## Features

- **Advanced Search**: instantly filter the BIP39 wordlist using three modes:
  - **Starts with**: Find words beginning with specific letters.
  - **Ends with**: Find words ending with specific letters.
  - **Contains**: Find words containing a specific sequence of letters.
- **Smart Highlighting**: Dynamically highlights the matching part of the word for easier scanning.
- **Real-time Filtering**: Results update instantly as you type.
- **Privacy Focused**: Runs entirely in your browser. No data is ever sent to any server.
- **Clean UI**: Minimalist, dark-themed interface designed for readability.

## Files

- **`index.html`**: The main interface structure.
- **`style.css`**: concise, modern dark theme styling with custom scrollbars.
- **`main.js`**: Core logic for fetching the wordlist and performing dynamic filtering with highlighting.
- **`bip39.txt`**: The standard English BIP39 wordlist containing 2048 words.

## Installation and Usage

1. **Clone the repository**:
   ```bash
   git clone https://github.com/EnesKeremAYDIN/seed-word-finder.git
   cd seed-word-finder
   ```

2. **Run the tool**:
   Due to browser security policies (CORS), you cannot simply double-click `index.html` to read the local `bip39.txt` file. You need to serve it via a local web server.

   **Option A: Using Python (Recommended)**
   ```bash
   # Python 3
   python -m http.server
   # Then open http://localhost:8000 in your browser
   ```

   **Option B: Using VS Code**
   - Install the "Live Server" extension.
   - Right-click `index.html` and select "Open with Live Server".

   **Option C: Using Node.js**
   ```bash
   npx serve .
   ```

## Disclaimer

This tool is intended for educational purposes and personal recovery use.