## Clonar o repositório

git clone https://github.com/Pedroporto87/cafeteria-mysql.git
cd seu-repositorio

##  Instalar dependências

npm install

## Configurações do banco de dados

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=@Porto1987
DB_DATABASE=cafeteria-wbc

## Criar o banco e tabela automaticamente

node cafeteria.js

## Rodar o servidor

npm run dev

## Testar endpoints

POST	http://localhost:3000/api/pedidos	
    Criar pedido
    opções de item: 'cappuccino', 'especiais', 'frappé', 'coado', 'expresso', 'latte'
    opções de status: 'Em preparo', 'Pronto', 'Entregue', 'Cancelado'
    exemplo:
    {
        "cliente":"João",
        "item":"cappuccino",
        "quantidade":2,
        "observacoes":"Sem açúcar"
        "status": 'Em preparo'
        }
GET	http://localhost:3000/api/pedidos	
    Listar todos os pedidos	—
GET	http://localhost:3000/api/pedidos/:id	
    Buscar pedido pelo Id, substituindo na url
PUT	http://localhost:3000/api/pedidos/1	
    Atualizar pedido (status/item)	
    exemplo:
    {
        "status":"Entregue"
    }
GET	http://localhost:3000/api/pedidos/status/:status	
    Pedidos com status “Pronto”	—
DELETE	http://localhost:3000/api/pedidos/:id	
    Deletar pedido desejado, colocando o id do pedido na url