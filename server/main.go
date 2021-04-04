package main

import (
	"server/api"
	"server/db"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	database, err := db.New()
	a := api.New()

	if err != nil {
		panic(err)
	}

	defer database.Close()

	r := gin.Default()
	r.Use(cors.Default())
	r.POST("/api/auth", a.Auth.Login(database))

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run(":3000")
}
