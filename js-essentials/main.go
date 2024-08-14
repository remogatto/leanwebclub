package main

import (
	"net/http"

	"log"
)

func main() {
	mux := http.NewServeMux()

	mux.Handle("GET /toggle-password-visibility/", http.StripPrefix("/toggle-password-visibility", http.FileServer(http.Dir("toggle-password-visibility"))))
	mux.Handle("GET /toggle-multiple-fields/", http.StripPrefix("/toggle-multiple-fields", http.FileServer(http.Dir("toggle-multiple-fields"))))
	mux.Handle("GET /toggle-multiple-forms/", http.StripPrefix("/toggle-multiple-forms", http.FileServer(http.Dir("toggle-multiple-forms"))))
	mux.Handle("GET /character-count/", http.StripPrefix("/character-count", http.FileServer(http.Dir("character-count"))))
	mux.Handle("GET /character-word-count/", http.StripPrefix("/character-word-count", http.FileServer(http.Dir("character-word-count"))))
	mux.Handle("GET /random-ron/", http.StripPrefix("/random-ron", http.FileServer(http.Dir("random-ron"))))
	mux.Handle("GET /random-ron-no-dup/", http.StripPrefix("/random-ron-no-dup", http.FileServer(http.Dir("random-ron-no-dup"))))
	mux.Handle("GET /random-ron-async-await/", http.StripPrefix("/random-ron-async-await", http.FileServer(http.Dir("random-ron-async-await"))))
	mux.Handle("GET /dragon-trainer-monthly/", http.StripPrefix("/dragon-trainer-monthly", http.FileServer(http.Dir("dragon-trainer-monthly"))))
	mux.Handle("GET /dragon-trainer-monthly-authors/", http.StripPrefix("/dragon-trainer-monthly-authors", http.FileServer(http.Dir("dragon-trainer-monthly-authors"))))
	mux.Handle("GET /dragon-trainer-monthly-sanitized/", http.StripPrefix("/dragon-trainer-monthly-sanitized", http.FileServer(http.Dir("dragon-trainer-monthly-sanitized"))))
	mux.Handle("GET /monster-shuffle/", http.StripPrefix("/monster-shuffle", http.FileServer(http.Dir("monster-shuffle"))))
	mux.Handle("GET /monster-game/", http.StripPrefix("/monster-game", http.FileServer(http.Dir("monster-game"))))
	mux.Handle("GET /monster-game-score/", http.StripPrefix("/monster-game-score", http.FileServer(http.Dir("monster-game-score"))))
	mux.Handle("GET /form-autosave/", http.StripPrefix("/form-autosave", http.FileServer(http.Dir("form-autosave"))))
	mux.Handle("GET /form-autosave-single-entry/", http.StripPrefix("/form-autosave-single-entry", http.FileServer(http.Dir("form-autosave-single-entry"))))
	mux.Handle("GET /form-autosave-status/", http.StripPrefix("/form-autosave-status", http.FileServer(http.Dir("form-autosave-status"))))

	log.Println("Start the web server...")
	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		panic(err)
	}

}
