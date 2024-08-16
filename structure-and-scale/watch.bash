#!/bin/bash

run_go() {
    pkill -f "go run" || true
    cd "$1" && go run . &
}


go run . &

while read -r filename; do
    case "$filename" in
        *.go)
            echo "File .go modificato: $filename"
            run_go "$directory"
            ;;
        *.html|*.css|*.js)
            echo "File HTML/CSS/JS modificato: $filename"
            ;;
    esac
done < <(inotifywait -r -m -e modify --format '%w%f' ./)

