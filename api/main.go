package main

import (
	"api/_pkg/articleUtil"
	"fmt"
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func homePage(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Endpoint Hit: homePage")
	fmt.Fprintf(w, "<h1>Hello from Go!</h1>")
}

func handleRequests() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", homePage).Methods("GET")
	router.HandleFunc("/articles", articleUtil.GetArticles).Methods("GET")
	router.HandleFunc("/articles/{id}", articleUtil.GetArticleById).Methods("GET")
	router.HandleFunc("/articles", articleUtil.CreateArticle).Methods("POST")
	router.HandleFunc("/articles/{id}", articleUtil.DeleteArticle).Methods("DELETE")
	router.HandleFunc("/articles/{id}", articleUtil.UpdateArticle).Methods("PUT")
	log.Fatal(http.ListenAndServe(":1337", router))
}

func Main() {
	fmt.Println("Rest API")
	handleRequests()
}
