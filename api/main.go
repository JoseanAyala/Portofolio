package main

import (
	"fmt"
	"log"
	"net/http"

	blog "api/blog"

	"github.com/gorilla/mux"
)

func homePage(w http.ResponseWriter, r *http.Request){
	fmt.Println("Endpoint Hit: homePage")
	fmt.Fprintf(w, "<h1>Hello from Go!</h1>")
}

func handleRequests(){
	router:= mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", homePage).Methods("GET")
	router.HandleFunc("/articles", blog.GetArticles).Methods("GET")
	router.HandleFunc("/articles/{id}", blog.GetArticle).Methods("GET")
	log.Fatal(http.ListenAndServe(":1337", router))
}

func main(){
	handleRequests()
}
