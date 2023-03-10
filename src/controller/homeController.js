
import pool from "../configs/connectDB";

let getHomepage = async (req, res) => {

    let data = [];

    const [rows, fields] = await pool.execute('SELECT * FROM `users`');
    return res.render('index.ejs', { dataUser: rows });

}

let getDetailPage = async (req, res) => {
    let userID = req.params.id;
    let user = await pool.execute('select * from users where id =?', [userID]);
    return res.send(JSON.stringify(user[0]))
}

let createNewUser = async (req, res) => {
    console.log('check req:', req.body)
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('insert into users(firstName,lastName, email,address) values (?,?,?,?)',
        [firstName, lastName, email, address])
    // return res.send('Call post create new user')
    return res.redirect('/'); // Auto return Homepage
}
module.exports = {
    getHomepage,
    getDetailPage,
    createNewUser

}