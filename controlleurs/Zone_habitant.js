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
// const collection = database.collection('Zone_habitant')
const collection = 'Zone_habitant'

const addZone_habitant = async (req, res) => {
  console.log(req.query)

//   /---------------------------------------------------------convertir en INT--------------------------------------------/
  let nombre = req.query.nombre;
  let nombreEnInt = parseInt(nombre);
  req.query.nombre = nombreEnInt;

  const add = await prisma.Zone_habitant.create({
    data: req.query
  })
  res.json(add)
}

const showZone_habitantAll = async (req, res) => {
  // console.log(req.query)
  const show = await prisma.Zone_habitant.findMany({
    // where: {
    //   nom: 'Zone_habitant de test'
    // },
    select: {
      Nom: true,
      nombre: true,
    }
  })
  res.json(show)
}
const showZone_habitantOne = async (req, res) => {
  // console.log(req.query)
  const users = await prisma.Zone_habitant.findMany({
    where: req.query,
    select: {
        Nom: true,
        nombre: true,
    }
  })
  res.json(users)
}

const updateZone_habitant = async (req, res) => {
  // console.log(req.query)
//   const id = '655e06879a3150274b0ab391'
  const update = await prisma.Zone_habitant.update({
    data: { nombre: 5 },
    where: req.query,
  })
  res.json(update)
}

const deleteZone_habitant = async (req, res) => {
  // console.log(req.query)
//   const id = '655e06879a3150274b0ab391'
  const users = await prisma.Zone_habitant.delete({
    where: req.query,
  })
  res.json(users)
}


// console.log(addZone_habitant)
module.exports = {
    addZone_habitant,
  showZone_habitantAll,
  showZone_habitantOne,
  updateZone_habitant,
  deleteZone_habitant
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