# Claude Code Setup Guide

This guide will help you set up and use Claude Code with this iPhone comparison page project.

## Initial Setup

### 1. Install Claude Code

If you haven't already, install Claude Code:

```bash
# On macOS/Linux
curl -fsSL https://cli.anthropic.com/install.sh | sh

# Or using npm
npm install -g @anthropic-ai/claude-code
```

### 2. Navigate to Project Directory

```bash
cd /path/to/iphone-comparison-project
```

### 3. Initialize Claude Code in the Project

```bash
claude code
```

## Common Use Cases

### Translating Content

```
"Scan index.html and create a translation map of all Swedish text to English, then apply the translations"
```

### Styling Changes

```
"Analyze the CSS in index.html and create a dark mode version"
"Make the comparison table more modern with rounded corners and better spacing"
"Add hover effects to all interactive elements"
```

### Adding Features

```
"Add a share button that allows users to share their comparison"
"Create a print-friendly stylesheet"
"Add smooth scrolling between sections"
"Implement a comparison result export to PDF"
```

### Image Optimization

```
"Create a script to convert all PNG images to WebP format"
"Generate a manifest of all images and their sizes"
"Create responsive image srcsets for better performance"
```

### Code Organization

```
"Extract all inline CSS to a separate styles.css file"
"Extract all JavaScript to a separate scripts.js file"
"Create a modular file structure with separate components"
```

### Documentation

```
"Document all JavaScript functions in the index.html file"
"Create a technical architecture document"
"Generate API documentation for any data endpoints"
```

## Useful Claude Code Commands

### File Operations
- "Show me the structure of index.html"
- "List all image files and their sizes"
- "Find all instances of [specific text] in the project"

### Code Analysis
- "Analyze the performance of the page and suggest improvements"
- "Check for accessibility issues"
- "Review security considerations"

### Testing
- "Create a testing plan for the comparison functionality"
- "Generate test cases for responsive design"
- "Check browser compatibility issues"

### Deployment
- "Create a deployment script for this project"
- "Generate a production build configuration"
- "Set up a CI/CD pipeline configuration"

## Tips for Working with Claude Code

1. **Be Specific:** The more specific your request, the better the result
   - Good: "Extract all CSS related to the comparison table into a separate file called comparison-table.css"
   - Less good: "Clean up the CSS"

2. **Break Down Complex Tasks:** For major changes, break them into steps
   - Step 1: "Analyze the current structure"
   - Step 2: "Create a plan for reorganization"
   - Step 3: "Implement the changes"

3. **Review Changes:** Always review what Claude Code has done before committing

4. **Use Context:** Reference specific files or sections
   - "In index.html, find the section with class 'comparison-table' and..."

5. **Iterate:** Don't hesitate to refine your requests
   - "That's good, but can you make the margins bigger?"
   - "Can you also add animation to that transition?"

## Project-Specific Context

When working with Claude Code on this project, keep in mind:

- The HTML is in Swedish (sv-SE locale)
- Images are stored in the `images/` directory with 1x and 2x versions
- The file uses inline CSS and JavaScript
- It's a single-page application focused on product comparison
- Responsive design is implemented with specific breakpoints

## Example Workflow

Here's a complete example workflow for a common task:

```bash
# Start Claude Code
claude code

# In Claude Code, run commands like:
"First, analyze the structure of index.html and identify all sections"
"Now extract all inline styles into a separate styles.css file"
"Update index.html to reference the new styles.css file"
"Test that all styles are working correctly"
"Create a minified version of styles.css for production"
```

## Troubleshooting

### If the server won't start:
- Check if port 8000 is already in use: `lsof -i :8000`
- Try a different port: `http-server -p 3000`

### If images aren't loading:
- Check the relative paths in index.html
- Ensure the images directory is in the same location as index.html
- Verify image files aren't corrupted

### If Claude Code seems stuck:
- Try breaking your request into smaller parts
- Be more specific about what you want
- Check if there are any error messages

## Advanced Usage

### Creating Build Scripts

```
"Create a build script that:
1. Minifies the HTML
2. Optimizes all images
3. Creates a production-ready dist folder
4. Generates a source map"
```

### Setting Up Version Control

```
"Initialize a git repository and create a sensible .gitignore"
"Create a branching strategy document"
"Set up git hooks for linting before commit"
```

### Performance Optimization

```
"Analyze the page load performance"
"Implement lazy loading for images"
"Add caching headers recommendations"
"Create a performance budget document"
```

## Getting Help

If you encounter issues:
1. Check the Claude Code documentation
2. Review error messages carefully
3. Try rephrasing your request
4. Break complex tasks into simpler steps

## Next Steps

1. Run `npm install` to install dependencies (if using Node.js approach)
2. Start the development server
3. Open Claude Code and start making improvements!

Happy coding with Claude Code! 🚀
