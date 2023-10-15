package handler

import (
	"api/_pkg/articleUtil"
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func Handler() {
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/", Hello).Methods("GET")
	router.HandleFunc("/articles", articleUtil.GetArticles).Methods("GET")
	router.HandleFunc("/articles/{id}", articleUtil.GetArticleById).Methods("GET")
	router.HandleFunc("/articles", articleUtil.CreateArticle).Methods("POST")
	router.HandleFunc("/articles/{id}", articleUtil.DeleteArticle).Methods("DELETE")
	router.HandleFunc("/articles/{id}", articleUtil.UpdateArticle).Methods("PUT")
	http.ListenAndServe(":1337", router)
}

func Hello(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Endpoint Hit: homePage")
	fmt.Fprintf(w, "<h1>Hello from Go!</h1>")
}
