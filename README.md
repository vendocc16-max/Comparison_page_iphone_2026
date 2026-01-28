# iPhone Comparison Page - Swedish Version

This is an interactive iPhone comparison page for the iPhone 17 lineup, featuring comparison tools for iPhone 17, iPhone 17 Air, and iPhone 17 Pro models.

## Project Structure

```
iphone-comparison-project/
├── index.html                          # Main HTML file
├── images/                             # All product images
│   ├── contextual_iphone_17_*.png     # iPhone 17 images
│   ├── contextual_iphone_17_air_*.png # iPhone 17 Air images
│   └── contextual_iphone_17_pro_*.png # iPhone 17 Pro images
├── references/                         # Reference materials
│   └── SESV_iPhone_Q425_Contextual_Compare_HTML_Module.jpg
├── Channel_Partner_Instructions_Contextual_Compare.pdf
└── README.md                           # This file
```

## Setup with Claude Code

### Prerequisites
- Claude Code installed on your system
- A local web server (options provided below)

### Quick Start

1. **Navigate to the project directory:**
   ```bash
   cd path/to/iphone-comparison-project
   ```

2. **Start a local web server:**

   **Option A: Using Python (recommended if you have Python installed):**
   ```bash
   # Python 3
   python3 -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```

   **Option B: Using Node.js (if you have npm installed):**
   ```bash
   # Install http-server globally (one time)
   npm install -g http-server
   
   # Run the server
   http-server -p 8000
   ```

   **Option C: Using PHP:**
   ```bash
   php -S localhost:8000
   ```

3. **Open in your browser:**
   Navigate to `http://localhost:8000`

## Using Claude Code to Modify the Project

### Examples of what you can ask Claude Code to do:

1. **Translate content:**
   ```
   "Translate all Swedish text in index.html to English"
   ```

2. **Modify styling:**
   ```
   "Change the color scheme to use dark mode"
   "Make the comparison table more modern looking"
   ```

3. **Add functionality:**
   ```
   "Add a print-friendly view button"
   "Add analytics tracking to the comparison interactions"
   ```

4. **Optimize images:**
   ```
   "Compress all PNG images in the images folder"
   "Convert images to WebP format for better performance"
   ```

5. **Add features:**
   ```
   "Add a side-by-side comparison view"
   "Create a mobile-responsive version"
   ```

## Project Details

- **Language:** Swedish (sv-SE)
- **Models Featured:** iPhone 17, iPhone 17 Air, iPhone 17 Pro
- **Format:** Single-page HTML with inline CSS and JavaScript
- **Images:** Responsive images with 1x and 2x versions

## File Information

- **Main HTML:** `index.html` (2534 lines, ~320KB)
- **Images:** ~90+ product images in various sizes
- **Instructions:** PDF guide for channel partners included

## Development Notes

The HTML file contains:
- Inline CSS for styling
- JavaScript for interactive comparison features
- Responsive image handling for different screen sizes
- Swedish language content throughout

All assets (images) are referenced relatively, so the project is portable and can be moved to any directory.

## Common Claude Code Commands

Once you have Claude Code set up in this directory, you can:

- Ask for code modifications
- Request file reorganization
- Add new features or pages
- Generate additional documentation
- Create build scripts
- Set up deployment configurations

## Support

For questions about the comparison page content or channel partner information, refer to:
`Channel_Partner_Instructions_Contextual_Compare.pdf`

## License

This is a channel partner asset. Refer to Apple's guidelines for usage terms.
