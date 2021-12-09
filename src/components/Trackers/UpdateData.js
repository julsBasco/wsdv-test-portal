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
    category: "Ankle",
    urls: [
      {
        title: "Ankle",
        url: "https://drive.google.com/file/d/191HtP2pvQ5EjoeY0_TU-b1bozDb94_Ht/",
      },
    ],
  },

  {
    category: "Cardiovascular",
    urls: [
      {
        title: "Cardiovascular",
        url: "https://drive.google.com/file/d/1sjKt_HsK5DZ1W6A_Jy0DRIr6zsT2h8nR/",
      },
    ],
  },

  {
    category: "Cold Injuries",
    urls: [
      {
        title: "Cold Injuries",
        url: "https://drive.google.com/file/d/1wAlTwAeYA_OJ4Ums-kl8L6nE_nQeLKHY/",
      },
    ],
  },
  {
    category: "Dental and Oral",
    urls: [
      {
        title: "Dental and Oral",
        url: "https://drive.google.com/file/d/1V0bcYoCMvpYuLucZ6Qset30FDg8K8-jY/",
      },
    ],
  },

  {
    category: "Diabetes",
    urls: [
      {
        title: "Diabetes",
        url: "https://drive.google.com/file/d/1TD9jxBFAHov1j7y0DLHRFFtVwMIF9h_Q/",
      },
      {
        title: "Diabetes Buddy Statement",
        url: "https://drive.google.com/file/d/1SP__I9BhdCJROjavdIOjTVWFXrmbR8Cu/",
      },
      {
        title: "Diabetes Personal Statement",
        url: "https://drive.google.com/file/d/1Ffx20cq9O8OIB-XaD8P6dWdazGt-8AQ5/",
      },
    ],
  },

  {
    category: "Digestive System IBS GERD",
    urls: [
      {
        title: "Digestive System IBS GERD",
        url: "https://drive.google.com/file/d/1S3bNQ3gaCMjA0m_JEwJ78PqvY7JfZqbM/",
      },
      {
        title: "GERD Buddy Letter",
        url: "https://drive.google.com/file/d/1GqFlMbyACyFKLdS07VwqnQhApEj5te2z/",
      },
      {
        title: "GERD & IBS Personal Statement",
        url: "https://drive.google.com/file/d/1OA9pmSt_hrHFr-_Jrptodvo63SY8lN79/",
      },
      {
        title: "IBS Buddy Statement",
        url: "https://drive.google.com/file/d/1nUTZGJ5ANve2YGGCwolUxhXI3BZVYOas/",
      },
    ],
  },
  {
    category: "Disability Compensation Letter",
    urls: [
      {
        title: "Disability Compensation Letter",
        url: "https://drive.google.com/file/d/18W3Fuwia4WFtHXSmVkR4l8UiWPyb1Pqy/",
      },
    ],
  },
  {
    category: "Disease and Injuries of the Neck (Cervical Spine)",
    urls: [
      {
        title: "Disease and Injuries of the Neck (Cervical Spine)",
        url: "https://drive.google.com/file/d/1p-Y5fhSeHAAIG1COa82Yse-hzTqgbA_4/",
      },
      {
        title: "Neck Back Injury Spousal Statement",
        url: "https://drive.google.com/file/d/1CJty2zICrTooAHQggHlaCWsuD-ZUwSg_/",
      },
    ],
  },
  {
    category: "Disease of the Eye",
    urls: [
      {
        title: "Disease of the Eye",
        url: "https://drive.google.com/file/d/1A6oN_UmESmwSsZ2KbpxV6kdQmf4V_IgV/",
      },
    ],
  },
  {
    category: "Eating Disorder",
    urls: [
      {
        title: "Eating Disorder",
        url: "https://drive.google.com/file/d/1tTQSX0YECMGwJ71wki-sAewqq0gJVLSY/",
      },
    ],
  },
  {
    category: "Erectile Dysfunction (ED or Other Sexual Dysfunction)",
    urls: [
      {
        title: "Erectile Dysfunction (ED or Other Sexual Dysfunction)",
        url: "https://drive.google.com/file/d/1QezRi9UrMazD0YcwAsb6D9A-p2lm7h47/",
      },
    ],
  },
  {
    category: "Female Sexual Arousal Disorder (FSAD)",
    urls: [
      {
        title: "Female Sexual Arousal Disorder (FSAD)",
        url: "https://drive.google.com/file/d/1d0UOGkPzjudqxZFns-kyffcmbRYeVYVK/",
      },
    ],
  },
  {
    category: "Fibromyalgia",
    urls: [
      {
        title: "Fibromyalgia",
        url: "https://drive.google.com/file/d/1VHle6BjicI02yaHR48rJoCh1F6fehM2a/",
      },
    ],
  },
  {
    category: "Flat Feet / Pes Planus",
    urls: [
      {
        title: "Flat Feet / Pes Planus",
        url: "https://drive.google.com/file/d/1VHle6BjicI02yaHR48rJoCh1F6fehM2a/",
      },
      {
        title: "Flat Feet (pes planus) Buddy Letter",
        url: "https://drive.google.com/file/d/1ni1eYClO63rluA2phEp3KWJGlASqtr5N/",
      },
      {
        title: "Flat Feet (pes planus) Personal Statement",
        url: "https://drive.google.com/file/d/1iykxShb44QQx9lm3sFrh37GkPKpTsCco/",
      },
    ],
  },
  {
    category: "Gall Bladder",
    urls: [
      {
        title: "Gall Bladder",
        url: "https://drive.google.com/file/d/15We8nz11PQIofcz90GPygUOG7Vv_rpCi/",
      },
    ],
  },
  {
    category: "GERD",
    urls: [
      {
        title: "GERD",
        url: "https://drive.google.com/file/d/169o5dkJJHkrvlbmTyXqJji6fA3Ns8X3F/",
      },
    ],
  },
  {
    category: "Heart Condition",
    urls: [
      {
        title: "Heart Condition",
        url: "https://drive.google.com/file/d/1r0o-dNfsAiZNEVANTU6pbqcXTEN6xK42/",
      },
    ],
  },
  {
    category: "Hypertension (High Blood Pressure)",
    urls: [
      {
        title: "Hypertension (High Blood Pressure)",
        url: "https://drive.google.com/file/d/12EkuSCeeMHL1gOSI57mlwqFFfMVofTR6/",
      },
    ],
  },
  {
    category:
      "Irritable Colon Syndrome ( Irritable Bowel Syndrome/IBD/Spastic Colitis, Mucous Colitis, etc.)",
    urls: [
      {
        title:
          "Irritable Colon Syndrome ( Irritable Bowel Syndrome/IBD/Spastic Colitis, Mucous Colitis, etc.)",
        url: "https://drive.google.com/file/d/10NxsXCP0WCBf03-8eT_De0awCVj59_bt/",
      },
    ],
  },
  {
    category: "Jaw Joint",
    urls: [
      {
        title: "Jaw Joint",
        url: "https://drive.google.com/file/d/1VLIaOygEfdTekghzAJ3nyhbEmll6RhgK/",
      },
    ],
  },
  {
    category: "Knee Disorders",
    urls: [
      {
        title: "Limitation of Motion of the Knee",
        url: "https://drive.google.com/file/d/1UGLNe-zIt4EzBFVSHqtUj27fK1W6FaR2/",
      },
      {
        title:
          "Too much motion or dislocation of the Knee (Musculoskeletal System)",
        url: "https://drive.google.com/file/d/19aMW6xQBzuz7KdDyHeHnm8Dnskis8wDw/",
      },
      {
        title: "Total Knee Replacement (TKR)",
        url: "https://drive.google.com/file/d/19APOpzV73Ynw-s9NcViLNbeg80cMa8Rj/",
      },
    ],
  },
  {
    category: "Low / Mid Back",
    urls: [
      {
        title: "Low / Mid Back",
        url: "https://drive.google.com/file/d/1SZHJA3E51JGCvzg2Eb0P_39fQWgChj9L/",
      },
      {
        title: "Lower Back Personal Statement ",
        url: "https://drive.google.com/file/d/1zw2yD35rPKflzLXP80BIRRv7_srHnK1T/",
      },
    ],
  },
  {
    category: "Mental Health",
    urls: [
      {
        title: "Mental Disorder",
        url: "https://drive.google.com/file/d/1AKh1btpAvpX96LCcGt6LM_qPNOSPyeLt/",
      },
      {
        title: "Anxiety Buddy Letter",
        url: "https://drive.google.com/file/d/1cz99iLQqNMkTv6OLGYJKYTvDD3KRztnk/",
      },
      {
        title: "Anxiety Personal Statement",
        url: "https://drive.google.com/file/d/1OIDL7A-at7PyjfkZfa2ahHpZoSTh_i7b/",
      },
      {
        title: "Major Depressive Disorder Buddy Statement",
        url: "https://drive.google.com/file/d/1rfUHgrfZdpIr8vdsS4acHHqVGxtm1YQ9/",
      },
      {
        title: "PTSD- MST Personal Statement",
        url: "https://drive.google.com/file/d/1ykZ5oa8k9WRG-wXdQh7T66_0ckjveFK4/",
      },
      {
        title: "SSD Personal Statement",
        url: "https://drive.google.com/file/d/1hlc-O9rqFeHkp1RzhY9_stE5h9J1YpnW/",
      },
      {
        title: "PTSD Personal Statement",
        url: "https://drive.google.com/file/d/131e5vU-xbwpwfCN_BFVtQHDTe2waaZW6/",
      },
    ],
  },
  {
    category: "Migraines",
    urls: [
      {
        title: "Migraines",
        url: "https://drive.google.com/file/d/1DFADcAmWak0OT7aUNf2r-K5Nq_tT3YHX/",
      },
      {
        title: "Migraine Headaches",
        url: "https://drive.google.com/file/d/116o0hXFeMSdtlCJ9nhRQHNApFBE-RM2G/",
      },
      {
        title: "Migraine Buddy Statement",
        url: "https://drive.google.com/file/d/1w3WZdeaKTkVDstZnu_SPXzgtw0E5LZEH/",
      },
      {
        title: "Migraine Personal Statement",
        url: "https://drive.google.com/file/d/1e66a7JXl4keLktK26YFz0zuYOrFB0hkv/",
      },
    ],
  },
  {
    category: "Muscle Injuries",
    urls: [
      {
        title: "Muscle Injuries",
        url: "https://drive.google.com/file/d/1SmPSOo5fUJw0UIOPvJ96pAnc7YY_-AEV/",
      },
    ],
  },
  {
    category: "Musculoskeletal System",
    urls: [
      {
        title: "Musculoskeletal System",
        url: "https://drive.google.com/file/d/1UgZcPgRrZDhye0CzJdIQc1hVEL4zb7YC/",
      },
    ],
  },
  {
    category: "Neurological conditions and Convulsive disorders.",
    urls: [
      {
        title: "Neurological conditions and Convulsive disorders.",
        url: "https://drive.google.com/file/d/1Zb85s4dwtvowmTTWpu_4Pp9M-zsBMSZ4/",
      },
    ],
  },
  {
    category: "Nose",
    urls: [
      {
        title: "Nose",
        url: "https://drive.google.com/file/d/1Ezsw4JO2sOrd1zT9AKOqz56_mjsOoMfk/",
      },
    ],
  },
  {
    category: "Other Back Issues",
    urls: [
      {
        title: "Other Back Issues",
        url: "https://drive.google.com/file/d/1SiZdR8ZKIZ0S34-8alFt03zPdxolZ3ta/",
      },
    ],
  },
  {
    category: "Penis and Testes",
    urls: [
      {
        title: "Penis and Testes",
        url: "https://drive.google.com/file/d/1NS9RFKgMDTtyYTapAYp7Wn4eWmzpwkBo/",
      },
    ],
  },
  {
    category: "Respiratory System - Ears, Nose and Throat",
    urls: [
      {
        title: "Respiratory System - Ears, Nose and Throat",
        url: "https://drive.google.com/file/d/1_F8QC4SiolV6dhZQB-SA6kEO_09s2Ktv/",
      },
    ],
  },
  {
    category: "Shoulder",
    urls: [
      {
        title: "Shoulder",
        url: "https://drive.google.com/file/d/1DhbS5GpnJVHRewbEoO4WO-j-ZPDWURg1/",
      },
    ],
  },
  {
    category: "Sinusitis",
    urls: [
      {
        title: "Sinusitis",
        url: "https://drive.google.com/file/d/1z7o5dBPdPpbqbp6wx6ng6nsvsG3fQ8fE/",
      },
    ],
  },
  {
    category: "Skin",
    urls: [
      {
        title: "Skin",
        url: "https://drive.google.com/file/d/1223AfyrTfQ-2etQ1k3SfAhdEeBOWKuGY/",
      },
    ],
  },
  {
    category: "Sleep Apnea Syndromes (Obstructive OSA, Central OSA, Mixed)",
    urls: [
      {
        title: "Sleep Apnea Syndromes (Obstructive OSA, Central OSA, Mixed)",
        url: "https://drive.google.com/file/d/1SOkaoklIbtbJpoBglpZFLQbDyHmPkQX7/",
      },
      {
        title: "Sleep Apnea Buddy Statement",
        url: "https://drive.google.com/file/d/1GRo7phcv0hiFq3Jtu7IqgoPis2xfX296/",
      },
      {
        title: "Sleep Apnea Personal Statement",
        url: "https://drive.google.com/file/d/1zDhwGcoEiMTl2WHvf0zqECBGcrK5Y0kG/",
      },
    ],
  },
  {
    category: "Spine",
    urls: [
      {
        title: "Spine",
        url: "https://drive.google.com/file/d/1KY-DHd6MghToRmKsfadlYPwu0C02Eitn/",
      },
    ],
  },
  {
    category: "Temporary 100% Ratings",
    urls: [
      {
        title: "Temporary 100% Ratings",
        url: "https://drive.google.com/file/d/1ICAPl_yjhCK5dbDuH9fGuj4mm1jRQv1E/",
      },
    ],
  },
  {
    category: "Tinnitus",
    urls: [
      {
        title: "Tinnitus",
        url: "https://drive.google.com/file/d/1A77Tp5Oc-ylbkcnMPfPDN1Bl4e7IIKyL/",
      },
      {
        title: "Tinnitus Buddy Statement",
        url: "https://drive.google.com/file/d/1iytxRlnD7fEQbYUuN65Rs9HkmSe84_Bg/",
      },
      {
        title: "Tinnitus Personal Statement",
        url: "https://drive.google.com/file/d/1Jds07fJSrw1rhFZa5mJLaaEnlMriLOTq/",
      },
    ],
  },
  {
    category: "Total Shoulder Joint Replacement",
    urls: [
      {
        title: "Total Shoulder Joint Replacement",
        url: "https://drive.google.com/file/d/1PN98daDNUVTeqvu-HuH_qajw6R_VrGRU/",
      },
    ],
  },
  {
    category:
      "Ulcerative Colitis (Inflamatory Bowel Disease, Crohn's Disease, granulomatous colitis, and Tropical sprue)",
    urls: [
      {
        title:
          "Ulcerative Colitis (Inflamatory Bowel Disease, Crohn's Disease, granulomatous colitis, and Tropical sprue)",
        url: "https://drive.google.com/file/d/1F5r20wEvNxYEP3h667gqZ71BaWYfjTBd/",
      },
    ],
  },
  {
    category: "Urgent Care Benefit",
    urls: [
      {
        title: "Urgent Care Benefit",
        url: "https://drive.google.com/file/d/1dAW0POqeGmRebGJt7xu-ebrLs2VPrAkl/",
      },
    ],
  },
  {
    category: "Varicous Veins",
    urls: [
      {
        title: "Varicous Veins",
        url: "https://drive.google.com/file/d/1q2PUnJ3G7nqwbRdwPRoDkrKh2lOMksTd/",
      },
    ],
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
