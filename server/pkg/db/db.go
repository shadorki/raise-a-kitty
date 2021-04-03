package db

import (
	"context"
	"fmt"
	"os"

	"github.com/jackc/pgx/v4"
)

type DB struct {
	conn *pgx.Conn
}

func New() (*DB, error) {
	db := &DB{}
	conn, err := db.connect()

	if err != nil {
		return nil, err
	}

	db.conn = conn

	return db, nil

}

func (d *DB) Close() {
	d.conn.Close(context.Background())
}

func (d *DB) connect() (*pgx.Conn, error) {
	conn, err := pgx.Connect(context.Background(), os.Getenv("DATABASE_URL"))
	if err != nil {
		return nil, fmt.Errorf("unable to connect to database: %v", err)
	}

	var version string

	err = conn.QueryRow(context.Background(), "select version()").Scan(&version)
	if err != nil {
		return nil, fmt.Errorf("QueryRow failed: %v", err)
	}

	fmt.Printf("Connected to database successfully: version: %v", version)

	return conn, nil
}
