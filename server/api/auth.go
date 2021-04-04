package api

import (
	"fmt"
	"net/http"
	"server/db"

	"github.com/gin-gonic/gin"
)

// POST /api/auth

type Auth struct{}

type LoginRequestBody struct {
	ID    string `json:"id"`
	Email string `json:"email"`
}

func (a *Auth) Login(db *db.DB) gin.HandlerFunc {
	return func(c *gin.Context) {

		var loginRequestBody LoginRequestBody
		if err := c.ShouldBindJSON(&loginRequestBody); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
			return
		}

		fmt.Println(loginRequestBody)
		c.JSON(200, gin.H{
			"message": "pong",
		})
	}
}
