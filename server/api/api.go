package api

type Api struct {
	Auth
}

func New() *Api {
	return &Api{}
}
