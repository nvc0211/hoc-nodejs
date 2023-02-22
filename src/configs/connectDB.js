import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});

// connection.query(
//     'SELECT * FROM `users`',
//     function(err, results, fields){
//         results.map((row) => {
//             data.push({
//                 id: row.id,
//                 email: row.email,
//                 address: row.address,
//                 firstName: row.firstName,
//                 lastName: row.lastName
//             })
//         })
//         return results.render('test/index.ejs', {dataUser: JSON.stringify(data)});
//         }
// );

export default connection;