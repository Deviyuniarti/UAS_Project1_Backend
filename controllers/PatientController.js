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
    try {
      const newPatient = await Patient.create(req.body);
      const data = {
        message: "Menambahkan data Patient",
        data: newPatient,
      };
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
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

async search(req, res) {
  try {
    const keyword = req.query.keyword;

    if (!keyword) {
      return res.status(400).json({ message: 'Keyword is required' });
    }

    // Lakukan pencarian berdasarkan nama atau properti lainnya
    const results = await Patient.search(keyword);

    if (results && results.length > 0) {
      const data = {
        message: "Search results",
        data: results
      };
      return res.status(200).json(data);
    } else {
      const data = {
        message: "No matching results found",
      };
      return res.status(200).json(data);
    }
  } catch (error) {
    console.error("Error searching patients:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async getPositivePatients(req, res) {
  try {
    const positivePatients = await Patient.getPositivePatients();

    const data = {
      message: "List of Positive Patients",
      data: positivePatients
    };

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching positive patients:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}


async getRecoveredPatients(req, res) {
  try {
    const recoveredPatients = await Patient.getRecoveredPatients();

    const data = {
      message: "List of Recovered Patients",
      data: recoveredPatients
    };

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching recovered patients:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async getDeadPatients(req, res) {
  try {
    const deadPatients = await Patient.getDeadPatients();

    const data = {
      message: "List of Dead Patients",
      data: deadPatients
    };

    return res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching dead patients:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

}

// membuat object PatientController
const object = new PatientController();

// export object PatientController
module.exports = object;
