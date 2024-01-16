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
const showEntrepriseAll = async (req, res) => {
  // console.log(req.query)
  const id = req.query
  const users = await prisma.entreprise.findMany({
    where: req.query,
    select: {
      nom_entreprise: true,
      Adresse_entreprise: true,
      Contact_entreprise: true
    }
  })
  res.json(users)
}


console.log(showEntrepriseAll)
module.exports = showEntrepriseAll


// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })