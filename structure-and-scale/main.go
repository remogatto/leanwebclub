package main

import (
	"net/http"

	"log"
)

func main() {
	mux := http.NewServeMux()

	mux.Handle("GET /dice-library/", http.StripPrefix("/dice-library", http.FileServer(http.Dir("dice-library"))))
	mux.Handle("GET /treasure-chest/", http.StripPrefix("/treasure-chest", http.FileServer(http.Dir("treasure-chest"))))
	mux.Handle("GET /treasure-chest-chaining-static/", http.StripPrefix("/treasure-chest-chaining-static", http.FileServer(http.Dir("treasure-chest-chaining-static"))))
	mux.Handle("GET /treasure-chest-user-options/", http.StripPrefix("/treasure-chest-user-options", http.FileServer(http.Dir("treasure-chest-user-options"))))

	log.Println("Start the web server...")
	err := http.ListenAndServe(":8080", mux)
	if err != nil {
		panic(err)
	}

}
