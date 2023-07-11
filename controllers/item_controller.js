const dbConnection = require('../database/maria_db_connection.js');

class ItemController {

    static async getItemByID(ctx) {
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    SELECT * FROM items WHERE item_id = ?;
                `;
                dbConnection.query({
                        sql: query,
                        values: [ctx.params.item_id]
                    }, (err, res) => {
                    if(err) {
                        ctx.body = err;
                        ctx.status = 500;
                        reject(err);
                    }
                    ctx.body = res;
                    ctx.status = 200;
                    resolve();
                });
            });
        } catch(err){
            console.log(`Error in the item controller: ${err}`);
        }
    }

    static async updateItemNameByID(ctx){
        try{
            return new Promise((resolve, reject) => {
                const query = `UPDATE items SET item_name = ? WHERE item_id = ?;`;
                console.log(ctx.params);
                dbConnection.query(
                    {
                        sql: query,
                        values: [ctx.params.item_name, ctx.params.item_id]
                    }, (err, res) => {
                        if(err) {
                            ctx.body = err;
                            ctx.status = 500;
                            reject(err);
                        }
                        ctx.body = res;
                        ctx.status = 200;
                        resolve();
                });
            });
        } catch(err){
            console.log(`Error in the item controller: ${err}`);
        }
    }
    
    static async createItem(ctx){
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    INSERT INTO items (item_name)
                    VALUES (?);
                `;
                dbConnection.query(
                    {
                        sql: query,
                        values: [ctx.params.item_name]
                    }, (err, res) => {
                        if(err) {
                            ctx.body = err;
                            ctx.status = 500;
                            reject(err);
                        }
                        ctx.body = res;
                        ctx.status = 200;
                        resolve();
                });
            });
        } catch(err){
            console.log(`Error in the item controller: ${err}`);
        }
    }

    static async deleteItemByID(ctx){
        try{
            return new Promise((resolve, reject) => {
                const query = `
                    DELETE FROM items WHERE item_id = ?
                `;
                dbConnection.query(
                    {
                        sql: query,
                        values: [ctx.params.item_id]
                    }, (err, res) => {
                        if(err) {
                            ctx.body = err;
                            ctx.status = 500;
                            reject(err);
                        }
                        ctx.body = res;
                        ctx.status = 200;
                        resolve();
                });
            });
        } catch(err){
            console.log(`Error in the item controller: ${err}`);
        }
    }
}

module.exports = ItemController;