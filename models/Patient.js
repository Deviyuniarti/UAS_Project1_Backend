// import database
const db = require("../config/database");

// membuat class Patient
class Patient {
  // membuat class Model Patient
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from patients";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static create(data) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO patientss SET ?";
      db.query(sql, data, (err, results) => {
        if (err) {
          return reject(err);
        }
        const newPatientId = results.insertId;
  
        const getNewPatientQuery = "SELECT * FROM patientss WHERE id = ?";
        db.query(getNewPatientQuery, newPatientId, (err, results) => {
          if (err) {
            return reject(err);
          }
          const newPatient = results[0];
          resolve(newPatient);
        });
      });
    });
  }

static show(id) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM patientss WHERE id = ${id} `;
        db.query(sql, (err, results) => {
            resolve(results);
        });
    });
}

static find(id) {
  // lakukan promise, select by id
  return new Promise((resolve, reject) => {
      const sql = `SELECT * FROM patientss WHERE id = ?`;
      db.query(sql, id, (err, results) => {
          resolve(results[0]);
      });
  });
}

static async update(id, data) {
  // update data
  await new Promise((resolve, reject) => {
      // query untuk update data
      const sql = "UPDATE patientss SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results) => {
          resolve(results);
      });
  });

  // select data by id
  const Patient = await this.find(id);
  return Patient;
}

static async delete(id) {
  // query delete
  return new Promise((resolve, reject) => {
      // query sql
      const sql = "DELETE FROM patientss WHERE id = ?";
      db.query(sql, id, (err, results) => {
          resolve(results);
      });
  });
}

static search(keyword) {
  // lakukan promise, select by keyword
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM patientss WHERE name LIKE ?";
    const searchKeyword = `%${keyword}%`;
    db.query(sql, [searchKeyword], (err, results) => {
      resolve(results);
    });
  });
}

static findByStatus() {
  // lakukan promise, select patients yang positif
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM patientss WHERE status = 'positive'";
    db.query(sql, (err, results) => {
      resolve(results);
    });
  });
}

static findByStatus() {
  // lakukan promise, select patients yang sudah pulih
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM patientss WHERE status = 'recovered'";
    db.query(sql, (err, results) => {
      resolve(results);
    });
  });
}

static findBySatus() {
  // lakukan promise, select patients yang telah meninggal
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM patientss WHERE status = 'dead'";
    db.query(sql, (err, results) => {
      resolve(results);
    });
  });
}
}

// export class Patient
module.exports = Patient;
