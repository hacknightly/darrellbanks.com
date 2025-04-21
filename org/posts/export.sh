for f in *.org; do pandoc "$f" -s -o "../../content/posts/${f%.org}.md"; done
