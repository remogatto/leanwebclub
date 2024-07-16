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

	log.Println("Start the web server...")
	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		panic(err)
	}

}
