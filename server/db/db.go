package db

import (
	"context"
	"fmt"
	"os"
	"time"

	"github.com/jackc/pgx/v4"
)

type DB struct {
	conn *pgx.Conn
}

func New() (*DB, error) {
	db := &DB{}
	conn, err := db.connect(3)

	if err != nil {
		return nil, err
	}

	db.conn = conn

	return db, nil

}

func (d *DB) Close() {
	d.conn.Close(context.Background())
}

func (d *DB) connect(retries int) (*pgx.Conn, error) {
	conn, err := pgx.Connect(context.Background(), os.Getenv("DATABASE_URL"))

	if err != nil {
		if retries != 0 {
			fmt.Printf("Failed to connect to database, trying %d more times \n", retries)
			time.Sleep(time.Second * 3)
			return d.connect(retries - 1)
		}
		return nil, fmt.Errorf("unable to connect to database: %v", err)
	}

	var version string

	err = conn.QueryRow(context.Background(), "select version()").Scan(&version)
	if err != nil {
		return nil, fmt.Errorf("QueryRow failed: %v", err)
	}

	fmt.Printf("Connected to database successfully: version: %v\n", version)

	return conn, nil
}
