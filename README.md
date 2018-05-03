# Desafio tarefa
## Task


Caminho padrão : http://127.0.0.1:3000/

Foi desenvolvido uma SPA para filmes. O usuario pode interagir com:
 - Lista de filmes (Com paginação)
 OBS:A paginação precisa de ajax especifico para controlar estados
 - Adicionar filme (Redux Form)
 - Editar um filme
 - Remover um filme 


 Tarefas que não foram implementadas neste endpoint:
 - Listar por filmes publicados  
 - Permitir o usuário ordenar a listagem por nome do filme ou número de likes(ordem decrescente) 
 - Área administrativa /admin {Existe uma funcionalidade na api padrao django rest framework  http://127.0.0.1:8000/api-auth/login/?next=/filmes/admin/   
       usuario defaul :{
             user :disalles7
             password : Disilva@220
       }
  - Ate segunda feira posso terminar essas tarefas     
   
Api suport Django Rest permite inserir dados de atores e filmes
 - Lista atores http://127.0.0.1:8000/actors/ 
 - Mostra os delalhes http://127.0.0.1:8000/actors/1/
 - Api root http://127.0.0.1:8000/ :
  {
      "users": "http://127.0.0.1:8000/users/",
      "filmes": "http://127.0.0.1:8000/filmes/",
      "actors": "http://127.0.0.1:8000/actors/"
  }
  - Buscar por slug http://127.0.0.1:8000/filmes/{slug}/
  - Buscar por slug http://127.0.0.1:8000/filmes/{id}/
  - Busca por ordenação http://127.0.0.1:8000/filmes/findAllOrderBy?type={tipoCampo}
  - Incrementar curtidas por id http://127.0.0.1:8000/filmes/likeMovie/{id}
  - Incrementar curtidas por id http://127.0.0.1:8000/filmes/likeMovie/{slug}


O Front  foi desenvolvido com SPA ES6, React e Redux
## Data structure example
Actor 

```
{
  id: number,
  name : string,
  age: number,
  filme: string
}
```

Movie
```
{
    url: string,
    id: number,
    title": string,
    original_title: string,
    slug: string,
    synopsis: string,
    duration_in_seconds: number,
    image: string,
    likes: number,
    published: boolean,
    owner: string,
    actors: Array<Actor>
}
```

## Iniciar Projeto
rodar `npm install`

depois `npm start`
