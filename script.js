// on DOM content loaded
document.addEventListener("DOMContentLoaded", () => {
    // get markdown content from github user's README.md file
    fetch("https://raw.githubusercontent.com/sanalzio/sanalzio/master/README.md")
        .then((response) => response.text())
        .then((data) => {
            // select md-block element and update content
            const mdBlock = document.querySelector("md-block");
            mdBlock.mdContent = data.replace(/src\s*?=\s*?".\/([^"]*)"/gi, `src="https://raw.githubusercontent.com/sanalzio/sanalzio/master/$1"`);
        });
});