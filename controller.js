const Model = require('./model');

class Controller {
    static async insertData(req, res, next) {//middleware function
        try{
        const data = req.body;
        console.log(data);
        await Model.insertData(data);
                
        }catch(error){
            console.log(error);
            
        }
     
    }
    static async getData(req, res, next) {
        try{
        const data = await Model.getData();
        res.send(data);
        }catch(error){
            console.log(error);
        }
    }
    static async deleteData(req, res, next) {
        try{
            await Model.deleteData();
            res.send("deleted");
        }catch(error){
            console.log(error)
        }
    }
    static async deleteOne(req, res, next) {
        try{
            const oneUser = req.params;
            console.log('controller',oneUser);
            
            await Model.deleteOne(oneUser);
            res.send("one user deleted");
        }catch(error){
            console.log(error)
        }
    }
    static async updateData(req, res, next){
        try{
        const { key, value } = req.body;
        const data = await Model.updateData(key, value);
        res.send(data);
        }catch(error){
            console.log(error);
        }
    }
    static async saveStr(req, res, next){
        try{
            const {str} = req.body;
            // const result = {};
            const patternName = /([A-Z][a-z]*)\s+([A-Z][a-z]*)/g;
            const patternMail = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
            const patternTel = /(\d{3}-\d{3}-\d{3})/;
            // const pattern = /(Hello|by)/g
            // const pattern = /\b([A-Z][a-z]*)\s+([A-Z][a-z]*)\b,\s*([0-9]{3}-[0-9]{3}-[0-9]{3}),\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

            // const pattern = /\b([A-Z][a-z]*)\s+([A-Z][a-z]*)\b,\s*([0-9]{1,3}-[0-9]{1,3}-[0-9]{1,3})/g;
            // const pattern = /connect with ([A-Za-z]+) ([A-Za-z]+)/;
            // const result = {
            //     fullname: str.match(patternName),
            //     mail: str.match(patternMail),
            //     tel: str.match(patternTel)
            // }
            const pattern = /(\d{3}-\d{2}-\d{2}-\d{2}).*?\s+([A-Z][a-z]+\s+[A-Z][a-z]+)/g;

            const result = [...str.matchAll(pattern)];

result.forEach((match) => {
console.log(`Phone: ${match[1]}`);
console.log(`Name: ${match[2]}`);
});
            // const result = [...str.matchAll(pattern)]

            
            // result.fullname = str.match(patternName);
            // result.mail = str.match(patternMail);
            // result.tel = str.match(patternTel);
            console.log("result",result);
            await Model.saveStr(result);
        }catch(error){
            console.log(error);
        }
    }
    static async saveMail(req, res, next){
        try{
            const {mail} = req.body;
            const result = mail.match(/[A-Z]*[a-z]*[0-9]@[a-z]*.[a-z]{2,}/)
            // const result = mail.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/)
            //for telephon /[0-9]{1,3}-[0-9]{1,3}-[0-9]{1.3}/g or /\d{1-3}-\d{1-3}-\d{1-3}/g
            console.log(result)
            await Model.saveMail(mail);

        }catch(error){
            console.log(error)
        }
    }

    static async matrix(req, res, next){
        try{
            const data = req.body;
            console.log(Array.isArray(data.data));
            
            await Model.matrix(data);
        }catch(error){
            console.log(error);
        }
    }

    static async matrixMax(req, res, next){
        try{
            const data = req.body;
            
            await Model.matrixMax(data);
        }catch(error){
            console.log(error);
        }
    }

    static async sumOfMatrix(req, res, next){
        try{
            const {matrix1, matrix2} = req.body;
            
            await Model.sumOfMatrix(matrix1, matrix2);
        }catch(error){
            console.log(error);
        }
    }
    static async multiplyMatrix(req, res, next){
        try{
            const {matrix1, matrix2} = req.body;
            await Model.multiplyMatrix(matrix1, matrix2);
        }catch(error){
console.log(error)       
 }
    }
}
module.exports = Controller;