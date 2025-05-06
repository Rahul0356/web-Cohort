import http from 'http'

async function main(){
    try{

        const PORT:number= +(process.env.PORT ?? 8000);


        const server = http.createServer();
        server.listen();
    } catch (err){}
}