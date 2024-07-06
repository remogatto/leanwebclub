package main

import (
	"net/http"

	"log"
)

func main() {
	mux := http.NewServeMux()
	mux.Handle("GET /toggle-password-visibility/", http.StripPrefix("/toggle-password-visibility", http.FileServer(http.Dir("toggle-password-visibility"))))

	log.Println("Start the web server...")
	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		panic(err)
	}

}
