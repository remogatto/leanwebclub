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

	log.Println("Start the web server...")
	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		panic(err)
	}

}
