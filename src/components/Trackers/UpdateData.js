import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_HKFcESvPZ2v6oPaMSVPAtGhvCGS3bWc",

  authDomain: "wsdv-development.firebaseapp.com",

  projectId: "wsdv-development",

  storageBucket: "wsdv-development.appspot.com",

  messagingSenderId: "978428886119",

  appId: "1:978428886119:web:3d7247572fba40344628c2",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const moreItems = [
  {
    title: "Ankle",
    url: "https://drive.google.com/file/d/191HtP2pvQ5EjoeY0_TU-b1bozDb94_Ht/preview",
  },

  {
    title: "Cardiovascular",
    url: "https://drive.google.com/file/d/1sjKt_HsK5DZ1W6A_Jy0DRIr6zsT2h8nR/preview",
  },
  {
    title: "CHAMPVA",
    url: "https://drive.google.com/file/d/1pJHThMFpyJsN0g5S0_Lz27OgQTMUsvm8/preview",
  },
  {
    title: "Cold Injuries",
    url: "https://drive.google.com/file/d/1wAlTwAeYA_OJ4Ums-kl8L6nE_nQeLKHY/preview",
  },
  {
    title: "Dental and Oral",
    url: "https://drive.google.com/file/d/1V0bcYoCMvpYuLucZ6Qset30FDg8K8-jY/preview",
  },
  {
    title: "Diabetes",
    url: "https://drive.google.com/file/d/1TD9jxBFAHov1j7y0DLHRFFtVwMIF9h_Q/preview",
  },
  {
    title: "Digestive System IBS GERD",
    url: "https://drive.google.com/file/d/1S3bNQ3gaCMjA0m_JEwJ78PqvY7JfZqbM/preview",
  },
  {
    title: "Disability Compensation Letter",
    url: "https://drive.google.com/file/d/18W3Fuwia4WFtHXSmVkR4l8UiWPyb1Pqy/preview",
  },
  {
    title: "Disease and Injuries of the Neck (Cervical Spine)",
    url: "https://drive.google.com/file/d/1p-Y5fhSeHAAIG1COa82Yse-hzTqgbA_4/preview",
  },
  {
    title: "Disease of the Eye",
    url: "https://drive.google.com/file/d/1A6oN_UmESmwSsZ2KbpxV6kdQmf4V_IgV/preview",
  },

  {
    title: "Eating Disorder",
    url: "https://drive.google.com/file/d/1tTQSX0YECMGwJ71wki-sAewqq0gJVLSY/preview",
  },

  {
    title: "Erectile Dysfunction (ED or Other Sexual Dysfunction)",
    url: "https://drive.google.com/file/d/1QezRi9UrMazD0YcwAsb6D9A-p2lm7h47/preview",
  },

  {
    title: "Female Sexual Arousal Disorder (FSAD)",
    url: "https://drive.google.com/file/d/1d0UOGkPzjudqxZFns-kyffcmbRYeVYVK/preview",
  },

  {
    title: "Fibromyalgia",
    url: "https://drive.google.com/file/d/1VHle6BjicI02yaHR48rJoCh1F6fehM2a/preview",
  },

  {
    title: "Flat Feet / Pes Planus",
    url: "https://drive.google.com/file/d/1VHle6BjicI02yaHR48rJoCh1F6fehM2a/preview",
  },
  {
    title: "Gall Bladder",
    url: "https://drive.google.com/file/d/15We8nz11PQIofcz90GPygUOG7Vv_rpCi/preview",
  },
  {
    title: "GERD",
    url: "https://drive.google.com/file/d/169o5dkJJHkrvlbmTyXqJji6fA3Ns8X3F/preview",
  },
  {
    title: "Heart Condition",
    url: "https://drive.google.com/file/d/1r0o-dNfsAiZNEVANTU6pbqcXTEN6xK42/preview",
  },
  {
    title: "Hypertension (High Blood Pressure)",
    url: "https://drive.google.com/file/d/12EkuSCeeMHL1gOSI57mlwqFFfMVofTR6/preview",
  },
  {
    title:
      "Irritable Colon Syndrome ( Irritable Bowel Syndrome/IBD/Spastic Colitis, Mucous Colitis, etc.)",
    url: "https://drive.google.com/file/d/10NxsXCP0WCBf03-8eT_De0awCVj59_bt/preview",
  },
  {
    title: "Jaw Joint",
    url: "https://drive.google.com/file/d/1VLIaOygEfdTekghzAJ3nyhbEmll6RhgK/preview",
  },
  {
    title: "Limitation of Motion of the Knee",
    url: "https://drive.google.com/file/d/1UGLNe-zIt4EzBFVSHqtUj27fK1W6FaR2/preview",
  },
  {
    title: "Low / Mid Back",
    url: "https://drive.google.com/file/d/1SZHJA3E51JGCvzg2Eb0P_39fQWgChj9L/preview",
  },
  {
    title: "Mental Disorder",
    url: "https://drive.google.com/file/d/1AKh1btpAvpX96LCcGt6LM_qPNOSPyeLt/preview",
  },
  {
    title: "Migraine Headaches",
    url: "https://drive.google.com/file/d/116o0hXFeMSdtlCJ9nhRQHNApFBE-RM2G/preview",
  },
  {
    title: "Migraines",
    url: "https://drive.google.com/file/d/1DFADcAmWak0OT7aUNf2r-K5Nq_tT3YHX/preview",
  },
  {
    title: "Muscle Injuries",
    url: "https://drive.google.com/file/d/1SmPSOo5fUJw0UIOPvJ96pAnc7YY_-AEV/preview",
  },
  {
    title: "Musculoskeletal System",
    url: "https://drive.google.com/file/d/1UgZcPgRrZDhye0CzJdIQc1hVEL4zb7YC/preview",
  },
  {
    title: "Neurological conditions and Convulsive disorders.",
    url: "https://drive.google.com/file/d/1Zb85s4dwtvowmTTWpu_4Pp9M-zsBMSZ4/preview",
  },
  {
    title: "Nose",
    url: "https://drive.google.com/file/d/1Ezsw4JO2sOrd1zT9AKOqz56_mjsOoMfk/preview",
  },
  {
    title: "Other Back Issues",
    url: "https://drive.google.com/file/d/1SiZdR8ZKIZ0S34-8alFt03zPdxolZ3ta/preview",
  },
  {
    title: "Penis and Testes",
    url: "https://drive.google.com/file/d/1NS9RFKgMDTtyYTapAYp7Wn4eWmzpwkBo/preview",
  },
  {
    title: "Respiratory System - Ears, Nose and Throat",
    url: "https://drive.google.com/file/d/1_F8QC4SiolV6dhZQB-SA6kEO_09s2Ktv/preview",
  },
  {
    title: "Shoulder",
    url: "https://drive.google.com/file/d/1DhbS5GpnJVHRewbEoO4WO-j-ZPDWURg1/preview",
  },
  {
    title: "Sinusitis",
    url: "https://drive.google.com/file/d/1z7o5dBPdPpbqbp6wx6ng6nsvsG3fQ8fE/preview",
  },
  {
    title: "Skin",
    url: "https://drive.google.com/file/d/1223AfyrTfQ-2etQ1k3SfAhdEeBOWKuGY/preview",
  },
  {
    title: "Sleep Apnea Syndromes (Obstructive OSA, Central OSA, Mixed)",
    url: "https://drive.google.com/file/d/1SOkaoklIbtbJpoBglpZFLQbDyHmPkQX7/preview",
  },
  {
    title: "Spine",
    url: "https://drive.google.com/file/d/1KY-DHd6MghToRmKsfadlYPwu0C02Eitn/preview",
  },
  {
    title: "Temporary 100% Ratings",
    url: "https://drive.google.com/file/d/1ICAPl_yjhCK5dbDuH9fGuj4mm1jRQv1E/preview",
  },
  {
    title: "Tinnitus",
    url: "https://drive.google.com/file/d/1A77Tp5Oc-ylbkcnMPfPDN1Bl4e7IIKyL/preview",
  },
  {
    title:
      "Too much motion or dislocation of the Knee (Musculoskeletal System)",
    url: "https://drive.google.com/file/d/19aMW6xQBzuz7KdDyHeHnm8Dnskis8wDw/preview",
  },
  {
    title: "Total Knee Replacement (TKR)",
    url: "https://drive.google.com/file/d/19APOpzV73Ynw-s9NcViLNbeg80cMa8Rj/preview",
  },
  {
    title: "Total Shoulder Joint Replacement",
    url: "https://drive.google.com/file/d/1PN98daDNUVTeqvu-HuH_qajw6R_VrGRU/preview",
  },
  {
    title:
      "Ulcerative Colitis (Inflamatory Bowel Disease, Crohn's Disease, granulomatous colitis, and Tropical sprue)",
    url: "https://drive.google.com/file/d/1F5r20wEvNxYEP3h667gqZ71BaWYfjTBd/preview",
  },
  {
    title: "Urgent Care Benefit",
    url: "https://drive.google.com/file/d/1dAW0POqeGmRebGJt7xu-ebrLs2VPrAkl/preview",
  },
  {
    title: "Varicous Veins",
    url: "https://drive.google.com/file/d/1q2PUnJ3G7nqwbRdwPRoDkrKh2lOMksTd/preview",
  },
];

export const UpdateData = async () => {
  // get data from db

  const updatesDoc = doc(db, "data", "PZMKLMYycZ8gz3noquB7");
  const getUpdatesDoc = await getDoc(updatesDoc);

  // push data to db
  await updateDoc(updatesDoc, {
    moreItems: moreItems,
  });
};
