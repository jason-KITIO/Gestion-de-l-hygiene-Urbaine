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
// const collection = database.collection('equipe')
const collection = 'equipe'

// const { nom, nombre} = require('../public/js/traitement')


// console.log("depuis equipe",data)
async function addEquipe(req, res) {

  //   /---------------------------------------------------------convertir en INT--------------------------------------------/
  let nombre = req.body.nombre;
  let nombreEnInt = parseInt(nombre);
  const newClient = {
    Nom: req.body.nom,
    nombre: nombreEnInt,
  };


  // res.json(add)

  console.log("de equipe", req.body)

  try {
    const add = await prisma.equipe.create({
      data: newClient,
    })
    // console.log(req.query)
    console.log("de equipe", req.body)
    console.log("equipe créé avec succès :", add, req.body);
  } catch (error) {
    console.error("Erreur lors de la création du equipe :", error);
  } finally {
    // Fermez la connexion au equipe prisma
    await prisma.$disconnect();
  }
}




const showEquipeAll = async (req, res) => {
  // console.log(req.query)
  const show = await prisma.equipe.findMany({
    // where: {
    //   nom: 'equipe de test'
    // },
    select: {
      Nom: true,
      nombre: true,
    }
  })
  console.log(show)
}
const showEquipeOne = async (req, res) => {
  // console.log(req.query)
  const users = await prisma.equipe.findMany({
    where: {
      id: req.body.nom,
    },
    select: {
      Nom: true,
      nombre: true,
    }
  })
  res.json(users)
}

const updateEquipe = async (req, res) => {
  // console.log(req.query)
  //   const id = '655e06879a3150274b0ab391'
  const update = await prisma.equipe.update({
    data: { nombre: 5 },
    where: req.query,
  })
  res.json(update)
}
async function deleteEquipe(req, res) {
  // console.log(req.query)
  //   const id = '655e06879a3150274b0ab391'
  const users = await prisma.equipe.delete({
    where: {
      id: req.body.nom,
    }
  })
  res.json(users)
}


// console.log(addequipe)
module.exports = {
  addEquipe,
  showEquipeAll,
  showEquipeOne,
  updateEquipe,
  deleteEquipe
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