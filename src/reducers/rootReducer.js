const initState = {
  repositories: [
    { id: 1, name: "MICE (mice.egi.eu)", url: "mice.egi.eu" },
    { id: 2, name: "WENMR (wenmr.egi.eu)", url: "wenmr.egi.eu" },
    {
      id: 3,
      name: "Physics IBERGRID (phys-ibergrid.egi.eu)",
      url: "phys-ibergrid.egi.eu"
    },
    {
      id: 4,
      name: "ATLAS nightlies (atlas-nightlies.cern.ch)",
      url: "atlas-nightlies.cern.ch"
    },
    { id: 5, name: "ILC (ilc.desy.de)", url: "ilc.desy.de" },
    { id: 6, name: "Blue Brain Project (bbp.epfl.ch)", url: "bbp.epfl.ch" },
    {
      id: 7,
      name: "CernVM 3 (cernvm-prod.cern.ch)",
      url: "cernvm-prod.cern.ch"
    },
    { id: 8, name: "Biomed (biomed.egi.eu)", url: "biomed.egi.eu" },
    { id: 9, name: "T2K (t2k.egi.eu)", url: "t2k.egi.eu" },
    {
      id: 10,
      name: "ALICE Conditions (alice-ocdb.cern.ch)",
      url: "alice-ocdb.cern.ch"
    },
    { id: 11, name: "CALICE (calice.desy.de)", url: "calice.desy.de" },
    { id: 12, name: "HERMES (hermes.desy.de)", url: "hermes.desy.de" },
    { id: 13, name: "H1 (hone.desy.de)", url: "hone.desy.de" },
    { id: 14, name: "OLYMPUS (olympus.desy.de)", url: "olympus.desy.de" },
    { id: 15, name: "XFEL (xfel.desy.de)", url: "xfel.desy.de" },
    { id: 16, name: "ZEUS (zeus.desy.de)", url: "zeus.desy.de" },
    { id: 17, name: "ALEPH (aleph.cern.ch)", url: "aleph.cern.ch" },
    {
      id: 18,
      name: "CvmFS Configuration (cvmfs-config.cern.ch)",
      url: "cvmfs-config.cern.ch"
    },
    {
      id: 19,
      name: "CERN@School (cernatschool.egi.eu)",
      url: "cernatschool.egi.eu"
    },
    { id: 20, name: "GLAST (glast.egi.eu)", url: "glast.egi.eu" },
    { id: 21, name: "HyperK (hyperk.egi.eu)", url: "hyperk.egi.eu" },
    { id: 22, name: "SNO+ (snoplus.egi.eu)", url: "snoplus.egi.eu" },
    { id: 23, name: "PHENO (pheno.egi.eu)", url: "pheno.egi.eu" },
    {
      id: 24,
      name: "LHCb Nightlies (lhcbdev.cern.ch)",
      url: "lhcbdev.cern.ch"
    },
    {
      id: 25,
      name: "OASIS (oasis.opensciencegrid.org)",
      url: "oasis.opensciencegrid.org"
    },
    {
      id: 26,
      name: "CMS Opendata Conditions (cms-opendata-conddb.cern.ch)",
      url: "cms-opendata-conddb.cern.ch"
    },
    { id: 27, name: "NA62 (na62.cern.ch)", url: "na62.cern.ch" },
    { id: 28, name: "CMS Nightlies (cms-ib.cern.ch)", url: "cms-ib.cern.ch" },
    { id: 29, name: "ATLAS (atlas.cern.ch)", url: "atlas.cern.ch" },
    { id: 30, name: "LHCb (lhcb.cern.ch)", url: "lhcb.cern.ch" },
    { id: 31, name: "ALICE (alice.cern.ch)", url: "alice.cern.ch" },
    { id: 32, name: "Geant4 (geant4.cern.ch)", url: "geant4.cern.ch" },
    { id: 33, name: "CMS (cms.cern.ch)", url: "cms.cern.ch" },
    { id: 34, name: "AMS (ams.cern.ch)", url: "ams.cern.ch" },
    {
      id: 35,
      name: "IceCube (icecube.opensciencegrid.org)",
      url: "icecube.opensciencegrid.org"
    },
    {
      id: 36,
      name: "Future Circular Collider (fcc.cern.ch)",
      url: "fcc.cern.ch"
    },
    { id: 37, name: "AUGER (auger.egi.eu)", url: "auger.egi.eu" },
    { id: 38, name: "KM3Net (km3net.egi.eu)", url: "km3net.egi.eu" },
    { id: 39, name: "Ganga Grid Client (ganga.cern.ch)", url: "ganga.cern.ch" },
    {
      id: 40,
      name: "Darkside (darkside.opensciencegrid.org)",
      url: "darkside.opensciencegrid.org"
    },
    {
      id: 41,
      name: "Dark Energy Survey (des.opensciencegrid.org)",
      url: "des.opensciencegrid.org"
    },
    {
      id: 42,
      name: "Fermilab (fermilab.opensciencegrid.org)",
      url: "fermilab.opensciencegrid.org"
    },
    {
      id: 43,
      name: "Muon g-2 Experiment (gm2.opensciencegrid.org)",
      url: "gm2.opensciencegrid.org"
    },
    {
      id: 44,
      name: "LArIAT (lariat.opensciencegrid.org)",
      url: "lariat.opensciencegrid.org"
    },
    {
      id: 45,
      name: "Large Synoptic Survey Telescope (lsst.opensciencegrid.org)",
      url: "lsst.opensciencegrid.org"
    },
    {
      id: 46,
      name: "MINOS Experiment (minos.opensciencegrid.org)",
      url: "minos.opensciencegrid.org"
    },
    {
      id: 47,
      name: "Mu2e (mu2e.opensciencegrid.org)",
      url: "mu2e.opensciencegrid.org"
    },
    {
      id: 48,
      name: "NOvA Neutrino Experiment (nova.opensciencegrid.org)",
      url: "nova.opensciencegrid.org"
    },
    {
      id: 49,
      name: "SeaQuest (seaquest.opensciencegrid.org)",
      url: "seaquest.opensciencegrid.org"
    },
    {
      id: 50,
      name: "US ATLAS T3 (usatlast3.opensciencegrid.org)",
      url: "usatlast3.opensciencegrid.org"
    },
    { id: 51, name: "MoEDAL (moedal.cern.ch)", url: "moedal.cern.ch" },
    { id: 52, name: "OPAL (opal.cern.ch)", url: "opal.cern.ch" },
    { id: 53, name: "TEST (test.cern.ch)", url: "test.cern.ch" },
    { id: 54, name: "NA49 (na49.cern.ch)", url: "na49.cern.ch" },
    { id: 55, name: "Pravda (pravda.egi.eu)", url: "pravda.egi.eu" },
    { id: 56, name: "GHOST (ghost.egi.eu)", url: "ghost.egi.eu" },
    { id: 57, name: "CLICdp (clicdp.cern.ch)", url: "clicdp.cern.ch" },
    {
      id: 58,
      name: "ALICE nightlies (alice-nightlies.cern.ch)",
      url: "alice-nightlies.cern.ch"
    },
    { id: 59, name: "COMPASS (compass.cern.ch)", url: "compass.cern.ch" },
    { id: 60, name: "DIRAC (dirac.egi.eu)", url: "dirac.egi.eu" },
    { id: 61, name: "Chipster (chipster.egi.eu)", url: "chipster.egi.eu" },
    { id: 62, name: "Comet (comet.egi.eu)", url: "omet.egi.eu" },
    { id: 63, name: "Galdyn (galdyn.egi.eu)", url: "galdyn.egi.eu" },
    { id: 64, name: "LIGO (ligo.egi.eu)", url: "ligo.egi.eu" },
    { id: 65, name: "Neugrid (neugrid.egi.eu)", url: "neugrid.egi.eu" },
    {
      id: 66,
      name: "ResearchInSchools (researchinschools.egi.eu)",
      url: "researchinschools.egi.eu"
    },
    { id: 67, name: "SuperNEMO (supernemo.egi.eu)", url: "supernemo.egi.eu" },
    { id: 68, name: "WestLife (west-life.egi.eu)", url: "west-life.egi.eu" },
    { id: 69, name: "Belle (belle.cern.ch)", url: "belle.cern.ch" },
    { id: 70, name: "Boss (boss.cern.ch)", url: "boss.cern.ch" },
    { id: 71, name: "Grid (grid.cern.ch)", url: "grid.cern.ch" },
    { id: 72, name: "NA61 (na61.cern.ch)", url: "na61.cern.ch" },
    { id: 73, name: "SFT (sft.cern.ch)", url: "sft.cern.ch" },
    {
      id: 74,
      name: "ATLAS conditions data (atlas-condb.cern.ch)",
      url: "atlas-condb.cern.ch"
    },
    {
      id: 75,
      name: "SFT Nightlies (sft-nightlies.cern.ch)",
      url: "sft-nightlies.cern.ch"
    },
    {
      id: 76,
      name: "DArk Matter Particle Explorer (dampe.cern.ch)",
      url: "dampe.cern.ch"
    },
    {
      id: 77,
      name: "SHiP - Search for Hidden Particles (ship.cern.ch)",
      url: "ship.cern.ch"
    },
    { id: 78, name: "EXTraS (extras-fp7.egi.eu)", url: "extras-fp7.egi.eu" },
    { id: 79, name: "SoftDrive (softdrive.nl)", url: "softdrive.nl" },
    {
      id: 80,
      name: "LHCb Conditions Data (lhcb-condb.cern.ch)",
      url: "lhcb-condb.cern.ch"
    },
    { id: 81, name: "LSST Software (sw.lsst.eu)", url: "sw.lsst.eu" }
  ]
};

const rootReducer = (state = initState, action) => {
  return state;
};

export default rootReducer;
