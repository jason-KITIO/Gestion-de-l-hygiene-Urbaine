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
// const collection = database.collection('nettoyeur')
const collection = 'nettoyeur'


// console.log("depuis nettoyeur",data)
async function addNettoyeur(req, res) {

  const newNettoyeur = {
    nom: req.body.nom,
    telephone: req.body.telephone,
    disponibiliter: req.body.Disponibiliter,
    sexe: req.body.Sexe,
    equipe: {
      connect: {
        id: '65651ddbd97867390d6245e0',
      }
    }
  };


  // res.json(add)

  console.log("de nettoyeur", req.body)

  try {
    const add = await prisma.nettoyeur.create({
      data: newNettoyeur,
    })
    // console.log(req.query)
    console.log("de nettoyeur", req.body)
    console.log("nettoyeur créé avec succès :", add, req.body);
  } catch (error) {
    console.error("Erreur lors de la création du nettoyeur :", error);
  } finally {
    // Fermez la connexion au nettoyeur prisma
    await prisma.$disconnect();
  }
}


const showNettoyeurAll = async (req, res) => {
  // console.log(req.query)
  const show = await prisma.nettoyeur.findMany({
    // where: {
    //   nom: 'nettoyeur de test'
    // },
    select: {
      nom:true,
      telephone:true,
      disponibiliter:true,
      sexe:true,
    }
  })
  console.log(show)
}
const showNettoyeurOne = async (req, res) => {
  // console.log(req.query)
  const users = await prisma.nettoyeur.findMany({
    where: req.query,
    select: {
      Nom: true,
      nombre: true,
    }
  })
  res.json(users)
}

const updateNettoyeur = async (req, res) => {
  // console.log(req.query)
  //   const id = '655e06879a3150274b0ab391'
  const update = await prisma.nettoyeur.update({
    data: { nombre: 5 },
    where: req.query,
  })
  res.json(update)
}

const deleteNettoyeur = async (req, res) => {
  // console.log(req.query)
  //   const id = '655e06879a3150274b0ab391'
  const users = await prisma.nettoyeur.delete({
    where: req.query,
  })
  res.json(users)
}


// console.log(addNettoyeur)
module.exports = {
  addNettoyeur,
  showNettoyeurAll,
  showNettoyeurOne,
  updateNettoyeur,
  deleteNettoyeur
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