## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/thomasmathewgit/webc/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/thomasmathewgit/webc/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out.
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
 </head>
<body>
    <div class="wrapper_not">
        <div class="container">
            <h1>Connect Four Game</h1>
			<h1>Player One (color will be green) and Player Two (color will be red)</h1>
            <table class="board">
				 <tr> <td>
                        <button id="buttonC0" type="button" onclick="setColor(this.id)">Click</button>
                    </td>
                    <td>
                        <button id="buttonC1" type="button" onclick="setColor(this.id)">Click</button>
                    </td>
                    <td>
                        <button id="buttonC2" type="button" onclick="setColor(this.id)">Click</button>
                    </td>
                    <td>
                        <button id="buttonC3" type="button" onclick="setColor(this.id)">Click</button>
                    </td>
                    <td>
                        <button id="buttonC4" type="button" onclick="setColor(this.id)">Click</button>
                    </td>
                    <td>
                        <button id="buttonC5" type="button" onclick="setColor(this.id)">Click</button>
                    </td>
                    <td>
                        <button id="buttonC6" type="button" onclick="setColor(this.id)">Click</button>
                    </td>
                </tr>
				</table>
     <script src="display.js"></script>
     <script>

</script>
</body>

</html>
