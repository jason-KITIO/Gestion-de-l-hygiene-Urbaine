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
// const collection = database.collection('zone_nettoyage')
const collection = 'zone_nettoyage'

async function addzone_nettoyage(req, res) {

  const newZone_nettoyage = {
    quartier: req.body.quartier,
    ville: req.body.ville,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    Risque: req.body.risque,
  };


  // res.json(add)

  console.log("de newZone_nettoyage", req.body)

  try {
    const add = await prisma.zone_nettoyage.create({
      data: newZone_nettoyage,
    })
    // console.log(req.query)
    console.log("de newZone_nettoyage", req.body)
    console.log("newZone_nettoyage créé avec succès :", add, req.body);
  } catch (error) {
    console.error("Erreur lors de la création du newZone_nettoyage :", error);
  } finally {
    // Fermez la connexion au newZone_nettoyage prisma
    await prisma.$disconnect();
  }
}

const showzone_nettoyageAll = async (req, res) => {
  // console.log(req.query)
  const show = await prisma.zone_nettoyage.findMany({
    // where: {
    //   nom: 'zone_nettoyage de test'
    // },
    select: {
      quartier: true,
      ville: true,
      longitude: true,
      latitude: true,
    }
  })
  res.json(show)
}
const showzone_nettoyageOne = async (req, res) => {
  // console.log(req.query)
  const users = await prisma.zone_nettoyage.findMany({
    where: req.query,
    select: {
      Nom: true,
      nombre: true,
    }
  })
  res.json(users)
}

const updatezone_nettoyage = async (req, res) => {
  // console.log(req.query)
  //   const id = '655e06879a3150274b0ab391'
  const update = await prisma.zone_nettoyage.update({
    data: { nombre: 5 },
    where: req.query,
  })
  res.json(update)
}

const deletezone_nettoyage = async (req, res) => {
  // console.log(req.query)
  //   const id = '655e06879a3150274b0ab391'
  const users = await prisma.zone_nettoyage.delete({
    where: req.query,
  })
  res.json(users)
}


// console.log(addzone_nettoyage)
module.exports = {
  addzone_nettoyage,
  showzone_nettoyageAll,
  showzone_nettoyageOne,
  updatezone_nettoyage,
  deletezone_nettoyage
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