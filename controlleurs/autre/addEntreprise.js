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

const addEntreprise = async (req, res) => {
  // console.log(req.query)
  const users = await prisma.entreprise.create({
    data: req.query
  })
  res.json(users)
}

const showEntreprise = async (req, res) => {
  // console.log(req.query)
  const users = await prisma.entreprise.findMany({
    where: {
      Adresse_entreprise: {
        endsWith: "@gmail.com"
      }
    }
  })
  res.json(users)
}

console.log(addEntreprise)
module.exports = { addEntreprise, showEntreprise }

// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })