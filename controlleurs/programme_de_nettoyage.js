const { PrismaClient } = require('@prisma/client')
const { create } = require('domain')

const express = require('express')

const app = express()

// use `app` in your application to read and write data in your DB


const prisma = new PrismaClient()

const url = "mongodb+srv://Jason_Kitio:Txu6I3aVLaP7EHSo@cluster0.vcmipoc.mongodb.net/Gestion_Hygiene_Final"
// const url = env("DATABASE_URL")

// const client = new MongoClient(url)

// // await client.connect()

// const database = client.db('Gestion_Hygiene')
// const collection = database.collection('programme_de_nettoyage')
const collection = 'programme_de_nettoyage'

const addProgramme_de_nettoyage = async (req, res) => {
  console.log(req.query)

//   /---------------------------------------------------------convertir en INT--------------------------------------------/
  let nombre = req.query.nombre;
  let nombreEnInt = parseInt(nombre);
  req.query.nombre = nombreEnInt;

  const add = await prisma.programme_de_nettoyage.create({
    data: req.query
  })
  res.json(add)
}

const showProgramme_de_nettoyageAll = async (req, res) => {
  // console.log(req.query)
  const show = await prisma.programme_de_nettoyage.findMany({
    // where: {
    //   nom: 'programme_de_nettoyage de test'
    // },
    select: {
      Nom: true,
      nombre: true,
    }
  })
  res.json(show)
}
const showProgramme_de_nettoyageOne = async (req, res) => {
  // console.log(req.query)
  const users = await prisma.programme_de_nettoyage.findMany({
    where: req.query,
    select: {
        Nom: true,
        nombre: true,
    }
  })
  res.json(users)
}

const updateProgramme_de_nettoyage = async (req, res) => {
  // console.log(req.query)
//   const id = '655e06879a3150274b0ab391'
  const update = await prisma.programme_de_nettoyage.update({
    data: { nombre: 5 },
    where: req.query,
  })
  res.json(update)
}

const deleteProgramme_de_nettoyage = async (req, res) => {
  // console.log(req.query)
//   const id = '655e06879a3150274b0ab391'
  const users = await prisma.programme_de_nettoyage.delete({
    where: req.query,
  })
  res.json(users)
}


// console.log(addProgramme_de_nettoyage)
module.exports = {
    addProgramme_de_nettoyage,
  showProgramme_de_nettoyageAll,
  showProgramme_de_nettoyageOne,
  updateProgramme_de_nettoyage,
  deleteProgramme_de_nettoyage
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