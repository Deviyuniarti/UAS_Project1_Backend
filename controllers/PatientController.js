// import Model Patient
const Patient = require('../models/Patient');

// buat class PatientController
class PatientController {
  // menambahkan keyword async memberitahu proses asynchronous
  async index(req, res) {
    try {
       const patients = await Patient.all();
 
       if (patients && patients.length > 0) {
          const data = {
             message: "The request succeeded",
             data: patients
          };
          
          return res.status(200).json(data);
       } else {
          const data = {
             message: "Menampilakn data Patients",
          };
 
          return res.status(200).json(data);
       }
    } catch (error) {
       console.error("Error fetching patients:", error);
       return res.status(500).json({ message: "Internal Server Error" });
    }
 }
 

 async store(req, res) {
  //memanggil method create dari model patient 
  //mengirim data dan callback
  await Patient.create(req.body, (patient)=> {
    const data = {
        message: `Menambahkan data patient`,
        data: patient,
    };
    res.json(data);
});
}


async update(req, res) {
  const { id } = req.params;
  //cari id patient yang ingin diupdate
  const patient = await patient.find(id);

  if (patient) {
    // melakukan update data
    const patient = await patient.update(req, res.body);
    const data = {
      message: `Mengedit data patients`,
      data: patient,
    };
    res.status(200),json(data);
  }
  else {
    const data ={
      message: `Resource not found`,
    };

    res.status(404),json(data);
  }
}

async destroy(req, res) {
  const { id } = req.params;
  const patient = await Patient.find(id);

  if (patient) {
    await patient.delete(id);
    const data = {
      message: `menghapus data patients`,
    };

    res.status(200).json(data);
  }else {
    const data ={
      message: `patient not found`,
    };
    res.status(404).json(data);
  }
}

async show(req, res) {
  const { id } = req.params;
  const patient = await patient.find(id);

  if (patient) {
    const data = {
      message: `menampilkan detail patient`,
      data: studen,
    };
    res.status(200).send(data);
  }
  else {
    const data = {
      message: `patient not found`,
    };

    res.ststus(404).json(data);
  }
}


}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;
