
const redis = require('./redis.config');

class Model {
    static async insertData(data) {
        try {
            await redis.hmset('user', data);
        } catch (error) {
            console.log(error);
        }

    }

    static async getData() {
        const data = await redis.hgetall('user');
        return data;
    }

    static async deleteData() {
        try {
            await redis.del('user');
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteOne(oneUser) {
        try {
            console.log("oneUser in model", oneUser);
            const key = Object.values(oneUser)[0];
            console.log(key);
            const user = await redis.hgetall('user');
            console.log('before delate', user);
            delete user[key];
            console.log("afret delate", user);
            // await redis.hmset('user', user);
            await redis.hdel('user', key);
            console.log("after set in redis", user);
        } catch (error) {
            console.log(error);
        }
    }
    static async updateData(key, value) {
        try {
            console.log(`Updating field ${key} with value ${value}`);

            await redis.hset('user', key, value);

            const updatedData = await redis.hgetall('user');
            console.log('Updated data:', updatedData);

            return updatedData;
        } catch (error) {
            console.log('Error: ', error);

        }
    }
    static async saveStr(result) {
        try {
            await redis.hmset("result", result);
            // await redis.set("fullName", result[0]);
            // await redis.set("mail", result[0]);
            // await redis.set("tel", result[0]);
        } catch (error) {
            console.log(error)
        }
    }
    static async saveMail(mail) {
        try {
            await redis.set("mail", mail);
        } catch (error) {
            console.log(error);
        }
    }

    static async matrix(data) {
        try {
            //get sum of main diaganal
            let result = 0;
            // for(let i = 0; i < data.data.length; i++){
            //     result += data.data[i][i];
            // } 
            data.data.forEach((item, index) => {
                result += item[index];
            })
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    static async matrixMax(data) {
        try {
            // let diagonal = data.data.map((item, index) => 
            //     item[index])
            // console.log(diagonal);


            function findMaxDiagonal([data], index = 0, max = -Infinity) {
                if (index >= data.length) {
                    return max;
                }
                max = Math.max(max, data[index][index]);
                return findMaxDiagonal(data, index + 1, max)
            }
            let maxInDiagonal = findMaxDiagonal([data]);
            console.log(maxInDiagonal);

        } catch (error) {
            console.log(error)
        }
    }
    static async sumOfMatrix(matrix1, matrix2) {
        try {
            // let sum = [];
            // for(let i = 0; i < matrix1.length; i++){
            //     sum[i] = [];
            //     for(let j = 0; j < matrix1[i].length; j++){
            //         sum[i][j] = matrix1[i][j] + matrix2[i][j];
            //     }
            // }
            // console.log(sum)

            // function sumOfMatrix([matrix1, matrix2], index1, index2, sum = []){
            //     if (index1 >= matrix1.length){
            //         return sum;
            //     }
            //     if (!sum[index1] === undefined){
            //         sum[index1] = [];
            //     }
            //     if (index2 >= matrix2.length){
            //         return sum;
            //     }
            //     sum[index1][index2] = matrix1[index1][index2] + matrix2[index1][index2];
            //     return sumOfMatrix([matrix1, matrix2], index1 + 1, 0, sum);
            //     //?????????????????????????????????????????????????????????????????????????????????????????????/
            // }
            // console.log(sumOfMatrix([matrix1, matrix2]))
        } catch (error) {
            console.log(error);
        }
    }
    static async multiplyMatrix(matrix1, matrix2) {
        try {
            if (matrix1[0].length === matrix2.length) {
                // let result = Array.from()
                for (let i = 0; i < matrix1.length; i++) {
                    for (let j = 0; j < matrix2.lengt; j++) {

                    }
                }
            }

        } catch (error) {
            console.log(error);
        }
    }
};
module.exports = Model;