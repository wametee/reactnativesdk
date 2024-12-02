module.exports = {
    // Specifies the line length where Prettier will wrap code
    printWidth: 100, // Typically, 80-100 characters is a good balance for readability
  
    // Specifies the number of spaces per indentation level
    tabWidth: 2, // TypeScript style guide recommends 2 spaces for indentation
  
    // Use single quotes instead of double quotes
    singleQuote: true, // Preferred for TypeScript/JavaScript to maintain consistency
  
    // Print trailing commas wherever possible when multi-line elements are involved
    trailingComma: 'all', // Always add trailing commas in multi-line lists/objects/arrays
  
    // Add a semicolon at the end of every statement
    semi: true, // Enforce semicolons at the end of statements for consistency
  
    // Indent JSX elements with the same number of spaces as the surrounding code
    jsxSingleQuote: true, // Use single quotes in JSX attributes (React style guide)
  
    // Print spaces between brackets in object literals, array literals, and import/export specifiers
    bracketSpacing: true, // Ensures that there is space between brackets in objects
  
    // Ensure that the closing bracket is placed on the last line of the JSX element
    jsxBracketSameLine: false, // Put the closing bracket of a multi-line JSX element on the next line
  
    // Control whether to format the code on save
    formatOnSave: true, // Automatically format files when saved in supported editors like VS Code
  
    // Use TypeScript parser for Prettier to format TypeScript-specific files
    parser: 'typescript', // Use TypeScript parser for proper syntax handling
  
    // Do not format code inside template literals
    quoteProps: 'as-needed', // Only quote object properties if necessary (e.g., when they are non-alphanumeric)
  
    // Control whether to add spacing inside array brackets
    arrowParens: 'always', // Always include parentheses around arrow function arguments, even if there's only one argument
  
    // Enable end of line handling for consistency across different systems
    endOfLine: 'auto', // Use the default behavior (for compatibility across systems, auto-detect the line-ending style)
  
    // Avoid unnecessary formatting for decorators in TypeScript
    htmlWhitespaceSensitivity: 'ignore', // Do not format decorators to prevent unnecessary changes to style
  
    // Use double spaces when aligning multi-line properties (for readability)
    proseWrap: 'preserve', // Preserve wrapping for markdown text and related docs
  };
  