package main

import (
	"net/http"

	"log"
)

func main() {
	mux := http.NewServeMux()

	mux.Handle("GET /dice-library/", http.StripPrefix("/dice-library", http.FileServer(http.Dir("dice-library"))))

	log.Println("Start the web server...")
	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		panic(err)
	}

}
