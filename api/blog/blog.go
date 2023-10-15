package blog

import (
	db "api/db"
	"encoding/json"
	"fmt"
	"net/http"
	"reflect"

	"github.com/gorilla/mux"
)

type article struct {
	Id int `json:"id"`
	Title string `json:"title"`
	Body string `json:"body"`
	DateCreated string `json:"dateCreated"`
	DateModified string `json:"dateModified"`
}

func GetArticles(w http.ResponseWriter, r *http.Request){
	articles, err := db.Query("SELECT * FROM blogPost", reflect.TypeOf(article{}))
	if(err != nil){
		w.WriteHeader(http.StatusInternalServerError)
		return;
	}
	
	fmt.Println("GetArticles Endpoint Hit")
	json.NewEncoder(w).Encode(articles)
}

func GetArticle(w http.ResponseWriter, r *http.Request){
	vars := mux.Vars(r)
	id := vars["id"]
	query := "SELECT * FROM blogPost WHERE id = " + id
	articles, err := db.Query(query, reflect.TypeOf(article{}))
	if(err != nil){
		w.WriteHeader(http.StatusInternalServerError)
		return;
	}
	
	fmt.Println("GetAllArticles Endpoint Hit")
	json.NewEncoder(w).Encode(articles)
}
