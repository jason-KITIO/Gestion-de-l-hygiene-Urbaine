const { PrismaClient } = require('@prisma/client')
const { create } = require('domain')

const express = require('express')

const app = express()

// use `app` in your application to read and write data in your DB


const prisma = new PrismaClient()

// const url = "mongodb+srv://Jason_Kitio:Txu6I3aVLaP7EHSo@cluster0.vcmipoc.mongodb.net/Gestion_Hygiene_Final"
// const url = env("DATABASE_URL")

// const client = new MongoClient(url)

// // await client.connect()

// const database = client.db('Gestion_Hygiene')
// const collection = database.collection('habitant')
const collection = 'habitant'
/*
const addHabitant = async (req, res) => {
  console.log(req.query)
  const add = await prisma.habitant.create({
    data: req.query
  })
  res.json(add)
}
*/
async function addHabitant(req, res) {

  //   /---------------------------------------------------------convertir en INT--------------------------------------------/

  const newHabitant = {
    nom: req.body.nom,
    prenom: req.body.prenom,
    telephone: req.body.tel,
    email: req.body.email,
    mot_de_passe: req.body.password
  };


  // res.json(add)

  console.log("de habitant", req.body)

  try {
    const add = await prisma.habitant.create({
      data: newHabitant,
    })
    // console.log(req.query)
    console.log("de habitant", req.body)
    console.log("habitant créé avec succès :", add, req.body);
  } catch (error) {
    console.error("Erreur lors de la création de l'habitant :", error);
  } finally {
    // Fermez la connexion au equipe prisma
    await prisma.$disconnect();
  }
}

const showHabitantAll = async (req, res) => {
  // console.log(req.query)
  const show = await prisma.habitant.findMany({
    // where: {
    //   nom: 'habitant de test'
    // },
    select: {
        nom: true,
        prenom: true,
        telephone: true,
        email: true,
        mot_de_passe: true,
    }
  })
  res.json(show)
}
const showHabitantOne = async (req, res) => {
  // console.log(req.query)
  const users = await prisma.habitant.findMany({
    where: req.query,
    select: {
        nom: true,
        prenom: true,
        telephone: true,
        email: true,
        mot_de_passe: true,
    }
  })
  res.json(users)
}

const updateHabitant = async (req, res) => {
  // console.log(req.query)
//   const id = '655e06879a3150274b0ab391'
  const update = await prisma.habitant.update({
    data: { nombre: 5 },
    where: req.query,
  })
  res.json(update)
}

async function deleteHabitant(req, res){
  // console.log(req.query)
//   const id = '655e06879a3150274b0ab391'
// const telephone = req.params.productID

// const index = products.findIndex(product => product.id === id)
// products.splice(index,1)
// res.status(200).json('Product deleted')

  const users = await prisma.habitant.delete({
    where: {
      email_telephone: req.body.email,
      },
  })
  res.json(users)
}


// console.log(addHabitant)
module.exports = {
    addHabitant,
  showHabitantAll,
  showHabitantOne,
  updateHabitant,
  deleteHabitant
}


// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })