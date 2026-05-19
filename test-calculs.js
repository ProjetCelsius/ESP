const FE = {
  elec_fr: 0.06, gaz: 0.227, bois_scenographie: 0.46, metal_scenographie: 2.5, textile_scenographie: 9,
  repas_cocktail: 1.5, repas_premium: 2.5,
  avion_long: 0.15, avion_court: 0.23, train_tgv: 0.003, voiture: 0.193,
  textile_coton: 11, textile_synth: 9, textile_mix: 10, maroquinerie_cuir: 17,
  cosmetique: 6, parfum: 9, lifestyle: 5, confection: 3,
  transport_route_intl: 0.09, transport_maritime: 0.01, transport_route_fr: 0.10, transport_mix_intl: 0.05,
  jour_tournage: 3000, heure_postprod: 4,
  tv_grp: 0.5, digital_impression: 0.002, ooh_face_semaine: 5,
  recyclage: 0.5, incineration: 1.5, decharge: 0.8
};

function generateDossier(inputs) {
  const { categorie, prix, ambition, lieu, taille, media } = inputs;
  const volumeByPrice = { accessible: 30000, mid: 10000, premium: 3000, luxe: 1000 };
  const ambMult = { nationale: 0.5, eu: 1, internationale: 1.5 };
  const volume = Math.round(volumeByPrice[prix] * ambMult[ambition]);
  const grammage = { pap: 0.35, accessoires: 0.6, beaute_parfum: 0.15, beaute_cosmo: 0.20, lifestyle: 0.8 }[categorie];
  const masseCollection = Math.round(volume * grammage);
  const inv = parseInt(taille);
  const distMix = {
    paris: { local: 0.7, eu: 0.2, intercont: 0.1, localKm: 30, euKm: 1500, longKm: 6000 },
    ville_fr: { local: 0.55, eu: 0.3, intercont: 0.15, localKm: 200, euKm: 1500, longKm: 6500 },
    capitale_eu: { local: 0.25, eu: 0.5, intercont: 0.25, localKm: 50, euKm: 1200, longKm: 7000 },
    hors_eu: { local: 0.15, eu: 0.25, intercont: 0.6, localKm: 100, euKm: 9000, longKm: 11000 }
  }[lieu];
  const ambAdjust = { nationale: { local: 1.3, eu: 0.6, intercont: 0.3 }, eu: { local: 1, eu: 1, intercont: 1 }, internationale: { local: 0.7, eu: 0.9, intercont: 1.6 } }[ambition];
  let pLocal = Math.min(0.95, distMix.local * ambAdjust.local);
  let pEu = distMix.eu * ambAdjust.eu;
  let pIntercont = distMix.intercont * ambAdjust.intercont;
  const sum = pLocal + pEu + pIntercont;
  pLocal /= sum; pEu /= sum; pIntercont /= sum;
  const nLocal = Math.round(inv * pLocal);
  const nEu = Math.round(inv * pEu);
  const nIntercont = inv - nLocal - nEu;
  const showSize = { 100: { elec: 1200, gaz: 300, bois: 200, metal: 80, textile: 50 }, 250: { elec: 2200, gaz: 600, bois: 450, metal: 180, textile: 110 }, 500: { elec: 4200, gaz: 1100, bois: 850, metal: 350, textile: 220 } }[taille];
  const matiere = { pap: { fe: FE.textile_mix, lib: "Textile mix" }, accessoires: { fe: FE.maroquinerie_cuir, lib: "Cuir" }, beaute_parfum: { fe: FE.parfum, lib: "Parfum" }, beaute_cosmo: { fe: FE.cosmetique, lib: "Cosmétique" }, lifestyle: { fe: FE.lifestyle, lib: "Lifestyle" } }[categorie];
  const tournageDays = { accessible: 2, mid: 3, premium: 4, luxe: 5 }[prix];
  const postprodHours = { accessible: 30, mid: 50, premium: 80, luxe: 120 }[prix];
  const equipeSize = { accessible: 8, mid: 12, premium: 15, luxe: 20 }[prix];
  const tournageDistance = { paris: 200, ville_fr: 500, capitale_eu: 1500, hors_eu: 6000 }[lieu];
  const mediaProfile = { organic: { tv: 0, digital: 0, ooh: 0 }, paid_digital: { tv: 200, digital: { accessible: 50000000, mid: 30000000, premium: 15000000, luxe: 5000000 }[prix], ooh: 50 }, "360": { tv: { accessible: 1500, mid: 1000, premium: 600, luxe: 300 }[prix], digital: { accessible: 200000000, mid: 100000000, premium: 50000000, luxe: 15000000 }[prix], ooh: 200 } }[media];
  const finDeVie = { recyclage: 0.25, incineration: 0.55, decharge: 0.20 };
  const masseRecyc = Math.round(masseCollection * finDeVie.recyclage);
  const masseIncin = Math.round(masseCollection * finDeVie.incineration);
  const masseDech = Math.round(masseCollection * finDeVie.decharge);
  const fabBolDistance = { nationale: 800, eu: 2000, internationale: 6000 }[ambition];
  const fabFE = ambition === "internationale" ? FE.transport_mix_intl : ambition === "eu" ? FE.transport_route_intl : FE.transport_route_fr;
  return {
    volume, masseCollection, grammage,
    show: showSize,
    invites: { local: nLocal, eu: nEu, intercont: nIntercont, localKm: distMix.localKm, euKm: distMix.euKm, longKm: distMix.longKm },
    fab: { matiereFE: matiere.fe, matiereLib: matiere.lib, masse: masseCollection, distanceLogistique: fabBolDistance, feLogistique: fabFE },
    campagne: { jours: tournageDays, postprod: postprodHours, equipe: equipeSize, distance: tournageDistance },
    media: mediaProfile,
    finDeVie: { recyc: masseRecyc, incin: masseIncin, dech: masseDech }
  };
}

function calculBC(d, i) {
  const inv = parseInt(i.taille);
  const postes = {
    show: 0, transport: 0, fabrication: 0, campagne: 0, diffusion: 0, finDeVie: 0
  };
  postes.show += d.show.elec * FE.elec_fr;
  postes.show += d.show.gaz * FE.gaz;
  postes.show += d.show.bois * FE.bois_scenographie;
  postes.show += d.show.metal * FE.metal_scenographie;
  postes.show += d.show.textile * FE.textile_scenographie;
  postes.show += inv * FE.repas_cocktail;

  postes.transport += (d.invites.local * d.invites.localKm) * (FE.voiture / 2);
  postes.transport += (d.invites.eu * d.invites.euKm) * FE.avion_court;
  postes.transport += (d.invites.intercont * d.invites.longKm) * FE.avion_long;

  postes.fabrication += d.fab.masse * d.fab.matiereFE;
  postes.fabrication += d.fab.masse * FE.confection;
  postes.fabrication += (d.fab.masse * d.fab.distanceLogistique / 1000) * d.fab.feLogistique;

  postes.campagne += d.campagne.jours * FE.jour_tournage;
  postes.campagne += d.campagne.postprod * FE.heure_postprod;
  postes.campagne += d.campagne.equipe * d.campagne.distance * (FE.avion_court * 0.7);

  postes.diffusion += d.media.tv * FE.tv_grp;
  postes.diffusion += d.media.digital * FE.digital_impression;
  postes.diffusion += d.media.ooh * 4 * FE.ooh_face_semaine;

  postes.finDeVie += d.finDeVie.recyc * FE.recyclage;
  postes.finDeVie += d.finDeVie.incin * FE.incineration;
  postes.finDeVie += d.finDeVie.dech * FE.decharge;

  const total = Object.values(postes).reduce((a, b) => a + b, 0);
  return { postes, total };
}

const tests = [
  {
    nom: "TEST 1 - LUXE NICHE (Kintsu, accessoires luxe FR organic)",
    inputs: { categorie: "accessoires", prix: "luxe", ambition: "nationale", lieu: "paris", taille: "100", media: "organic" }
  },
  {
    nom: "TEST 2 - MID INTERNATIONAL (Onde, PAP mid EU paid)",
    inputs: { categorie: "pap", prix: "mid", ambition: "eu", lieu: "paris", taille: "250", media: "paid_digital" }
  },
  {
    nom: "TEST 3 - MASS GLOBAL (Crash, PAP accessible intl 360 Tokyo)",
    inputs: { categorie: "pap", prix: "accessible", ambition: "internationale", lieu: "hors_eu", taille: "500", media: "360" }
  },
  {
    nom: "TEST 4 - BEAUTÉ PREMIUM (Aura, parfum premium EU paid Milan)",
    inputs: { categorie: "beaute_parfum", prix: "premium", ambition: "eu", lieu: "capitale_eu", taille: "250", media: "paid_digital" }
  }
];

tests.forEach(t => {
  console.log("\n========================================");
  console.log(t.nom);
  console.log("========================================");
  const d = generateDossier(t.inputs);
  const r = calculBC(d, t.inputs);
  console.log(`Volume saison 1: ${d.volume} pièces`);
  console.log(`Masse collection: ${d.masseCollection} kg`);
  console.log(`Invités: ${d.invites.local} locaux / ${d.invites.eu} EU / ${d.invites.intercont} intercont`);
  console.log("");
  console.log("BILAN PAR POSTE (tCO2e):");
  Object.entries(r.postes).forEach(([k, v]) => {
    const pct = (v / r.total * 100).toFixed(1);
    console.log(`  ${k.padEnd(15)} ${(v / 1000).toFixed(2).padStart(8)} tCO2e  (${pct}%)`);
  });
  console.log(`  TOTAL: ${(r.total / 1000).toFixed(2)} tCO2e`);
  console.log(`  Par pièce: ${(r.total / d.volume).toFixed(2)} kgCO2e`);
  const sorted = Object.entries(r.postes).sort((a, b) => b[1] - a[1]);
  console.log(`  Top 3: ${sorted.slice(0, 3).map(p => p[0]).join(" > ")}`);
});
