for f in *.org; do pandoc "$f" -s -o "../../content/notes/${f%.org}.md"; done
