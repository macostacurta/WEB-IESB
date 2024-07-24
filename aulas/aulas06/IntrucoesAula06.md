Pequeno guia de como abrir uma "api" teste com o thunder client e json


npm init -y

npm install json-server

criar arquivo "db.json" 

{
    "contatos": [
        { "id": 1, "nome": "Jose", "telefone": "99999-9999"}
    ]
}


npx json-server db.json

dentro do thudner cliente no body vc consegue adicionar novas coisas