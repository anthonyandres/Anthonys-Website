---
title: "Markdown Cheat Sheet"
category: "learning things"
date: "19-10-2025"
---

# Anthony's Blog Markdown Cheat Sheet

![Image](./blog-images/milo.jpg)

ok so the formatting I can use in these posts in pretty limited so this post serves as an exhaustive list of the things I can do. The following covers mostly the basic syntax, and maybe some additional things.

## Headings

I only have access to h1 and h2. That's it.

# This is Heading 1
`# This is Heading 1`

--- 

## This is Heading 2
`## This is Heading 2`

---

### This is Heading 3 ... wait a second
`### This is Heading 3 ... wait a second`

---

## Emphasis

There are two ways to add emphasis to words: **Bold** and *Italic*  

 - `*Italic*` text is sorrounded by a single pair of asterisks
 - `**Bold**` text is sorrounded by a souble pair of asterisks  

&nbsp;

You can also emphasize sections of text using:
> Blockquotes

- `> Blockquotes` are lines that begin with the closing
> "Choosing good names takes time but saves more than it takes." - _Robert C. Martin_

## Keep Functions Small and Focused

A function should do one thing and do it well.

1. Limit the length of functions. Aim for 10-20 lines.
2. Avoid side effects. A function should not modify any hidden states.

## Comment Wisely

Comments should explain _why_, not _what_. Code should speak for itself.

- Use comments for clarification of complex code.
- Avoid redundant comments.

## Refactoring

Regularly refactor your code to make it cleaner.

- Remove duplicate code.
- Simplify complex logic.
- Break large functions into smaller ones.

## Consistent Formatting

Consistency is key.

- Stick to one coding style.
- Use linters and formatters like ESLint or Prettier.

## Avoid Deep Nesting

Deep nesting makes code harder to read and maintain.

```javascript
// Bad
if (condition) {
  if (anotherCondition) {
    // ...
  }
}

// Good
if (condition && anotherCondition) {
  // ...
}
```

## Error Handling

Don't ignore errors. Handle them gracefully.

- Use try-catch for error-prone code.
- Validate inputs to prevent errors.

## Stay DRY (Don't Repeat Yourself)

Avoid repetition. Use functions, classes, and modules.

## Readable Code over Clever Code

Readable code is always better than clever, tricky code.

> "Any fool can write code that a computer can understand. Good programmers write code that humans can understand." - _Martin Fowler_

## Continuous Learning

Stay updated with best practices and constantly improve your skills.

Writing clean code is a practice that develops over time with experience and constant learning. Always be open to new ideas and improvements!
