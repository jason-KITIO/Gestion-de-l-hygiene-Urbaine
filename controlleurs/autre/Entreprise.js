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
  const add = await prisma.entreprise.create({
    data: req.query
  })
  res.json(add)
}

const showEntrepriseAll = async (req, res) => {
  // console.log(req.query)
  const show = await prisma.entreprise.findMany({
    where: {
      Adresse_entreprise: {
        endsWith: "@gmail.com"
      }
    },
    select: {
      nom_entreprise: true,
      Adresse_entreprise: true,
      Contact_entreprise: true
    }
  })
  res.json(show)
}
const showEntrepriseOne = async (req, res) => {
  // console.log(req.query)
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

const updateEntreprise = async (req, res) => {
  // console.log(req.query)
  const id = '655e06879a3150274b0ab391'
  const update = await prisma.entreprise.update({
    data: { Adresse_entreprise: 'new-email@example.com' },
    where: req.query,
  })
  res.json(update)
}

const deleteEntreprise = async (req, res) => {
  // console.log(req.query)
  const id = '655e06879a3150274b0ab391'
  const users = await prisma.entreprise.delete({
    where: req.query,
  })
  res.json(users)
}


// console.log(addEntreprise)
module.exports = {
  addEntreprise,
  showEntrepriseAll,
  showEntrepriseOne,
  updateEntreprise,
  deleteEntreprise
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