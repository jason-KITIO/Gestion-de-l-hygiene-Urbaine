const { PrismaClient } = require('@prisma/client')
const { create } = require('domain')

const express = require('express')

const app = express()

// use `app` in your application to read and write data in your DB


const prisma = new PrismaClient()

const url = "mongodb+srv://Jason_Kitio:Txu6I3aVLaP7EHSo@cluster0.vcmipoc.mongodb.net/Gestion_Hygiene"

// const client = new MongoClient(url)

// // await client.connect()

// const database = client.db('Gestion_Hygiene')
// const collection = database.collection('entreprise')
const collection = 'entreprise'
const updateEntreprise = async (req, res) => {
    // console.log(req.query)
    const id = '655e06879a3150274b0ab391'
    const users = await prisma.entreprise.update({
      data: { Adresse_entreprise: 'new-email@example.com' },
      where: req.query,
  })
  res.json(update)
  }
  

console.log(updateEntreprise)
module.exports = updateEntreprise


// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })