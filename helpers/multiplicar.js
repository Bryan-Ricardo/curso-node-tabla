const fs = require('fs');
const colors = require('colors/safe');
/*const crearArchivo = (base = 5)=>{
    return new Promise ((resolve, reject) => {
        console.log("================");
        console.log(`  TABLA DEL ${base}  `);
        console.log("================");
        let salida ='';

        for(let i=1;i<11;i++){
            salida += `${base}x${i}: ${base*i}\n`;
        }
        console.log(salida);

        const creandoArchivo = fs.writeFileSync(`tabla-${base}.txt`, salida);
        
        resolve(`tabla-${base}.txt`);
    })
}
*/

const crearArchivo = async(base = 5, listar, hasta = 10 )=>{
    try{
        return new Promise ((resolve, reject) => {
            let salida ='';
    
            for(let i=1;i<=hasta;i++){
                salida += `${base}x${i}: ${base*i}\n`;
            }
            
            if(listar) {
                console.log(colors.cyan("================"));
                console.log(colors.red(`  TABLA DEL ${base}  `));
                console.log(colors.cyan("================"));
                console.log(colors.yellow(salida));
            } 
    
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            
            resolve(`tabla-${base}.txt`);
        })
    }catch(err){
        throw err;
    }
}

module.exports = {
    crearArchivo
}