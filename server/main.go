package main

import (
	"server/pkg/db"

	"github.com/gin-gonic/gin"
)

func main() {
	database, err := db.New()

	if err != nil {
		panic(err)
	}

	defer database.Close()

	r := gin.Default()
	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.Run(":3000")
}
